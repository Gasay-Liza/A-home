/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://a-home/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fonts/fonts.css */ \"./src/utils/fonts/fonts.css\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n\n\n\n\n//# sourceURL=webpack://a-home/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./utils/img/logo-img.svg */ \"./src/utils/img/logo-img.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n  <head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0, shrink-to-fit=no\\\">\\r\\n    <meta name=\\\"description\\\" content=\\\"another website\\\">\\r\\n    <title>А дома</title>\\r\\n  </head>\\r\\n  <body>\\r\\n    <section class=\\\"first-screen\\\">\\r\\n        <header class=\\\"header\\\">\\r\\n            <a class=\\\"header__logo-link\\\">\\r\\n                <img class=\\\"header__logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"Логотип: Чайковский АгроСтрой\\\">\\r\\n            </a>\\r\\n\\r\\n            <nav class=\\\"header__nav\\\">\\r\\n                <ul class=\\\"header__nav-list\\\">\\r\\n                    <li class=\\\"header__nav-list-item\\\">\\r\\n                        <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">О компании</a>\\r\\n                    </li>\\r\\n                    <li class=\\\"header__nav-list-item\\\">\\r\\n                        <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">Услуги</a>\\r\\n                    </li>\\r\\n                    <li class=\\\"header__nav-list-item\\\">\\r\\n                        <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">Проекты</a>\\r\\n                    </li>\\r\\n                    <li class=\\\"header__nav-list-item\\\">\\r\\n                        <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">Статьи</a>\\r\\n                    </li>\\r\\n                    <li class=\\\"header__nav-list-item\\\">\\r\\n                        <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">Контакты</a>\\r\\n                    </li>\\r\\n                </ul>\\r\\n            </nav>\\r\\n\\r\\n            <a class=\\\"header__number\\\">\\r\\n                8 495 567 45 05\\r\\n            </a>\\r\\n        </header>\\r\\n        <div class=\\\"first-screen__middle-block\\\">\\r\\n            <a class=\\\"first-screen__btn\\\">\\r\\n                <span></span>\\r\\n            </a>\\r\\n            <p class=\\\"first-screen__text\\\"></p>\\r\\n            <a class=\\\"first-screen__call\\\">Заказать звонок</a>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"first-screen__bottom-block\\\">\\r\\n            <p class=\\\"first-screen__title\\\">\\r\\n                <span></span>\\r\\n            </p>\\r\\n            <p class=\\\"first-screen__text\\\">Модульные дома</p>\\r\\n            <a class=\\\"first-screen__call\\\">Заказать звонок</a>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"first-screen__item\\\">\\r\\n            <img src=\\\"#\\\" alt=\\\"Фотография домика\\\"/>\\r\\n            <p class=\\\"first-screen__number\\\"></p>\\r\\n            <p class=\\\"first-screen__text\\\"></p>\\r\\n            <p class=\\\"first-screen__price\\\"></p>\\r\\n        </div>\\r\\n\\r\\n\\r\\n    </section>\\r\\n    \\r\\n  </body>\\r\\n</html> \";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack://a-home/./src/index.html?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://a-home/./src/scss/index.scss?");

/***/ }),

/***/ "./src/utils/fonts/fonts.css":
/*!***********************************!*\
  !*** ./src/utils/fonts/fonts.css ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://a-home/./src/utils/fonts/fonts.css?");

/***/ }),

/***/ "./src/utils/img/logo-img.svg":
/*!************************************!*\
  !*** ./src/utils/img/logo-img.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"utils/img/logo-img.8616e97e.svg\";\n\n//# sourceURL=webpack://a-home/./src/utils/img/logo-img.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;