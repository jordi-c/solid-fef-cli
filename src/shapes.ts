#!/usr/bin/env node
import fs from 'node:fs'
import path from 'path'
import ttl2json from '@frogcat/ttl2jsonld'

import {
    SHAPES_FOLDER,
    SHAPE_EXT
} from './constants.js'

import {
    jsonLDGraph,
    property,
    customShape,
    element
} from './types.js'

import {
    toKebabCase,
    unCamelCase,
    resolveOriginPath
} from './utils.js'

let context: object = {}

/**
 * getListOfShapes() is an async Public fn
 * Returns the list of available shape files (.ttl)
 * @returns {Promise<string[]>} list of .ttl files
 */
export const getListOfShapes = async() => {
    const shapesAvailable: Array<string> = []
    const files = await fs.promises.readdir(
        resolveOriginPath(SHAPES_FOLDER),
        { withFileTypes: true }
    )
    for (const file of files) {
        const parseFile = path.parse(file.name)
        if (file.isFile() && parseFile.ext === SHAPE_EXT) {
            shapesAvailable.push(parseFile.name)
        }
    }
    return shapesAvailable
}

/**
 * getShape() is an async Public fn
 * Reads the .ttl file converts it to JSONLD
 * and ensures @graph Array type
 * and sets @context on global level
 * and finally ...
 * returns the JSONLD converted to a custom JSON using convertShape()
 * @param {string} file is the name of the shape to read
 * @returns {Promise<customShape>} custom JSON shape
 */
export const getShape = async (file: string) => {
    let graph = []

    try {
        const shapesFolder = resolveOriginPath(SHAPES_FOLDER)
        const ttlShape = await fs.promises.readFile(`${shapesFolder}/${file}${SHAPE_EXT}`, { encoding: 'utf8' });
        const jsonLdShape = ttl2json.parse(ttlShape)

        context = jsonLdShape['@context']
        if ('@graph' in jsonLdShape) {
            graph = jsonLdShape['@graph']
        } else {
            const {'@context': {}, ...singleGraph} = jsonLdShape
            graph= [singleGraph]
        }
    } catch (err: any) {
        console.error(err.message);
    }
    return convertShape(graph)
}

/**
 * convertShape() is a Private fn
 * Returns a custom JSON from given JsonLD shape
 * ready to be used to write FE framework markup
 * @param {Array<jsonLDGraph>} graph JSONLD graph data
 * @returns {Array<customShape>} custom JSON
 */
const convertShape = (shapes: Array<jsonLDGraph>) => {
    let customShapes: Array<customShape> = [];
    shapes.forEach((shape: jsonLDGraph, index) => {
        let customShape: customShape = {title:"", elements:[]};

        if ('@id' in shape) {
            const id: string = shape['@id']
            customShape.title = extractNameFromIdArray(id)
        }
        if ('sh:property' in shape) {
            customShape.elements = analyzeProperties(shape['sh:property'], index)
        }
        customShapes.push(customShape);
    });
    // console.log('>>>>>> customShapes : \n', customShapes);
    return customShapes;
}

/**
 * analyzeProperties() is a Private fn
 * extracts the relevant data for each 'sh:property' object from JSONLD
 * @param {property[]} properties is the array of properties
 * @param {number} parentIndex 
 * @returns {element[]} elements is the returned custom array
 */
function analyzeProperties(properties: property[], parentIndex: number) {
    let elements: element[] = [];
    properties.forEach((property, propertyIndex) => {
        let element: element = { type: '', name: '', id: '' }

        if ('sh:name' in property) {
            const name: string = property['sh:name']!
            element.name= unCamelCase(name)
            element.id = `${toKebabCase(name)}-${parentIndex}-${propertyIndex}`
        } else if ('sh:path') {
            const dataPath: Object = property['sh:path']!
            const path: string = extractNameFromIdArray(Object.values(dataPath)[0])
            element.name= unCamelCase(path)
            element.id = `${toKebabCase(path)}-${parentIndex}-${propertyIndex}`
        }
        if ('sh:description' in property) {
            element.description = property['sh:description']
        }
        if ('sh:maxCount' in property) {
            element.max = property['sh:maxCount']
        }
        if ('sh:minCount' in property) {
            element.min = property['sh:minCount']
        }
        if ('sh:datatype' in property) {
            const dataType: Object = property['sh:datatype']!
            const type: string = Object.values(dataType)[0]
            element.type = extractNameFromIdArray(type)
        }
        elements.push(element);
    });
    return elements;
}

/**
 * extractNameFromIdArray() is a Private fn
 * @param {string} name 
 * @returns {string} name 
 */
function extractNameFromIdArray(name: string) {
    if (/#/g.test(name)) {
        const tempName = name.split('#')[1]
        name = tempName.replace(/([a-zA-Z])([A-Z])([a-z])/g, '$1 $2$3').replace(/(shape|Shape)/g, '').trim()
    } else if (/:/g.test(name)) {
        name = removeContext(name)
    }
    return name
}

/**
 * removeContext() is a Private fn
 * @param {string} name 
 * @returns {string} name
 */
function removeContext(name: string) {
    for (const key in context) {
        if (name.toLowerCase().includes(key)) {
            return name.replace(`${key}:`, '')
        }
    }
    return name
}
