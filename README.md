# Solid FE Form CLI

The Solid Front End Form CLI is meant to help creating forms on Vue/Angular frameworks from SHACL (Shapes Constraint Language) files.

## Main Features

- creates... (to do)

## Installation

As solid-sfef-cli is a development CLI tool, it is recommened to install it using ```--global``` option.

```bash
npm install @solidlab/solid-fef-cli --global
# or 
npm i @solidlab/solid-fef-cli -g
```

It could also be install locally using ```--save-dev`` option.

```bash
npm install @solidlab/solid-fef-cli --save-dev
# or
npm i @solidlab/solid-fef-cli -D
```

## Usage

Print out the commands and options in the CLI tool

```bash
sfef help
```

### List shapes available

List the actual available shapes:

```bash
sfef list-shapes
```

### Custom CSS styles

Define some custom CSS classes to be used when creating the form.

```bash
sfef set-custom-css
```

The command asks for CSS classes on:
- ```<form>``` element
- ```<div>``` wrapper around input and label
- ```<label>``` element
- ```<em>``` element which contains additional information binded to the label (```sh:description```)
- ```<input``` element
The custom classes are stored in project root under filename **form-custom-classes.json**.

Example of custom CSS classes json structure:

```json
[
    {
        "element":"form",
        "classes":["css-custom__form"]
    }, {
        "element":"input-wrapper",
        "classes":["css-custom__wrapper"]
    }, {
        "element":"input-label",
        "classes":["css-custom__label", "css-custom__label--bold"]
    }, {
        "element":"input-additional-info",
        "classes":["css-custom__info"]
    }, {
        "element":"input-element",
        "classes":["css-custom__input", "css-custom__input--required"]
    }
]
```

### Create form file and dependencies

```bash
sfef create --framework --shape --css
```

## Remove

To uninstall, simply run:

```bash
# for global installation:
npm uninstall @solidlab/solid-fef-cli --global
# or
npm rm @solidlab/solid-fef-cli -g

# for development installation:
npm uninstall @solidlab/solid-fef-cli --save-dev
# or
npm rm @solidlab/solid-fef-cli -D
```
