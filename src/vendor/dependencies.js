// list in the order in which they need to be loaded
global.jQuery = window.$ = window.jQuery = require('jquery');
const babelPolyfill = require('babel-polyfill');
const modernizr = require('./custom/modernizr/modernizr-custom');
const jQueryUICustom= require('./custom/jquery-ui.custom');
// if we only use core, we can change this to lodash/core -- or if we use a custom lodash build, we may need to instead import custom files
const _ = require('lodash');
const jsCookie = require('js-cookie');
const hammerJS = require('hammerjs');
// this package is pretty heavy, do we still need? Also appears to intruduce XXS vulnerabilities in older versions on jQuery
// const jQueryHammerJS = require('jquery-hammerjs');
/**
 * @todo: Replace the below libraries with a more dependable, maintained carousel library
 */
const slickJS = require('./custom/slick');
const owlCarousel = require('./custom/owl.carousel');
const classlistPolyfill = require('classlist-polyfill');
const elementClosest = require('element-closest');
const XIPlugin = require('./custom/XIPlugin-1.0.0');
