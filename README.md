# solid-fef-cli (Solid FE Form CLI)

The Solid Front End Form CLI is meant to help creating forms on Vue/Angular frameworks from SHACL (Shapes Constraint Language) files.

## Main Features

- creates... (to do)

## Installation

As solid-sfef-cli is a development dependency, it is recommened to install it using ```--save-dev``` option on your working directory.

```bash
npm install @solidlab/solid-fef-cli --save-dev
# or
npm i @solidlab/solid-fef-cli -D
```

It could also be install globally using ```--global``` option. For example, in case you want to use it for multiple projects.

```bash
npm install @solidlab/solid-fef-cli --global
# or 
npm i @solidlab/solid-fef-cli -g
```

## Usage

```bash
# Print out the options in CLI
sfef help
```

### list shapes available

```bash
sfef list-shapes
```

### custom CSS styles

```bash
sfef set-custom-css
```

### create form file and dependencies

```bash
sfef create --framework --shape --css
```
