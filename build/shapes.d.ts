#!/usr/bin/env node
import { customShape } from './types.js';
/**
 * getListOfShapes() is an async Public fn
 * Returns the list of available shape files (.ttl)
 * @returns {Promise<string[]>} list of .ttl files
 */
export declare const getListOfShapes: () => Promise<string[]>;
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
export declare const getShape: (file: string) => Promise<customShape[]>;
