Webpack 4 Boilerplate
===========

[![Dependency Status](https://david-dm.org/AdamAndSubtractThem/webpack-boilerplate.svg)](https://david-dm.org/AdamAndSubtractThem/webpack-boilerplate) 
[![devDependency Status](https://david-dm.org/AdamAndSubtractThem/webpack-boilerplate/dev-status.svg)](https://david-dm.org/AdamAndSubtractThem/webpack-boilerplate)

## Requirements
You only need <b>node.js</b> pre-installed and you’re good to go. 

If you don’t want to work with lodash, just remove it from the node packages and the webpack config.

## Setup
Install dependencies
```sh
$ npm i
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ npm run dev
```

## Deployment
Build the current application
```sh
$ npm run build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
