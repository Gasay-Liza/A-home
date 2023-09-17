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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./utils/img/logo-img.svg */ \"./src/utils/img/logo-img.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./utils/img/icon-home(2).webp */ \"./src/utils/img/icon-home(2).webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./utils/img/icon-home.webp */ \"./src/utils/img/icon-home.webp\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n  <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <meta\\r\\n      name=\\\"viewport\\\"\\r\\n      content=\\\"width=device-width, initial-scale=1.0, shrink-to-fit=no\\\"\\r\\n    />\\r\\n    <meta name=\\\"description\\\" content=\\\"another website\\\" />\\r\\n    <title>А дома</title>\\r\\n  </head>\\r\\n  <body>\\r\\n    <header class=\\\"header\\\">\\r\\n      <a class=\\\"header__logo-link\\\">\\r\\n        <img\\r\\n          class=\\\"header__logo\\\"\\r\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\r\\n          alt=\\\"Логотип: Чайковский АгроСтрой\\\"\\r\\n        />\\r\\n      </a>\\r\\n\\r\\n      <nav class=\\\"header__nav\\\">\\r\\n        <ul class=\\\"header__nav-list\\\">\\r\\n          <li class=\\\"header__nav-list-item\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">О компании</a>\\r\\n          </li>\\r\\n          <li class=\\\"header__nav-list-item\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">Услуги</a>\\r\\n          </li>\\r\\n          <li class=\\\"header__nav-list-item\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">Проекты</a>\\r\\n          </li>\\r\\n          <li class=\\\"header__nav-list-item\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">Статьи</a>\\r\\n          </li>\\r\\n          <li class=\\\"header__nav-list-item\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"header__nav-list-link\\\">Контакты</a>\\r\\n          </li>\\r\\n        </ul>\\r\\n      </nav>\\r\\n\\r\\n      <a class=\\\"header__number\\\"> 8 495 567 45 05 </a>\\r\\n    </header>\\r\\n    <section class=\\\"first-screen\\\">\\r\\n      <div class=\\\"first-screen__middle-section\\\">\\r\\n        <div class=\\\"first-screen__btn-container\\\">\\r\\n          <a class=\\\"first-screen__btn\\\">\\r\\n            <svg\\r\\n              width=\\\"1.2rem\\\"\\r\\n              height=\\\"1.2rem\\\"\\r\\n              viewBox=\\\"0 0 12 12\\\"\\r\\n              xmlns=\\\"http://www.w3.org/2000/svg\\\"\\r\\n            >\\r\\n              <path\\r\\n                d=\\\"M1 11.0001L11 1.00006M11 1.00006H3.75862M11 1.00006V7.55179\\\"\\r\\n              />\\r\\n            </svg>\\r\\n          </a>\\r\\n        </div>\\r\\n\\r\\n        <p class=\\\"first-screen__text\\\">\\r\\n          Уникальная технология быстрого и&nbsp;бюджетного возведения домов\\r\\n        </p>\\r\\n        <a class=\\\"first-screen__call-btn\\\">\\r\\n          <div class=\\\"first-screen__call-icon\\\">\\r\\n            <svg viewBox=\\\"0 0 22 22\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n              <path\\r\\n                d=\\\"M16.7 22C15.57 22 14.38 21.73 13.15 21.21C11.95 20.7 10.74 20 9.56 19.15C8.39 18.29 7.26 17.33 6.19 16.28C5.13 15.21 4.17 14.08 3.32 12.92C2.46 11.72 1.77 10.52 1.28 9.36C0.76 8.12 0.5 6.92 0.5 5.79C0.5 5.01 0.64 4.27 0.91 3.58C1.19 2.87 1.64 2.21 2.25 1.64C3.02 0.88 3.9 0.5 4.84 0.5C5.23 0.5 5.63 0.59 5.97 0.75C6.36 0.93 6.69 1.2 6.93 1.56L9.25 4.83C9.46 5.12 9.62 5.4 9.73 5.68C9.86 5.98 9.93 6.28 9.93 6.57C9.93 6.95 9.82 7.32 9.61 7.67C9.46 7.94 9.23 8.23 8.94 8.52L8.26 9.23C8.27 9.26 8.28 9.28 8.29 9.3C8.41 9.51 8.65 9.87 9.11 10.41C9.6 10.97 10.06 11.48 10.52 11.95C11.11 12.53 11.6 12.99 12.06 13.37C12.63 13.85 13 14.09 13.22 14.2L13.2 14.25L13.93 13.53C14.24 13.22 14.54 12.99 14.83 12.84C15.38 12.5 16.08 12.44 16.78 12.73C17.04 12.84 17.32 12.99 17.62 13.2L20.94 15.56C21.31 15.81 21.58 16.13 21.74 16.51C21.89 16.89 21.96 17.24 21.96 17.59C21.96 18.07 21.85 18.55 21.64 19C21.43 19.45 21.17 19.84 20.84 20.2C20.27 20.83 19.65 21.28 18.93 21.57C18.24 21.85 17.49 22 16.7 22ZM13.2 14.26L13.04 14.94L13.31 14.24C13.26 14.23 13.22 14.24 13.2 14.26Z\\\"\\r\\n              />\\r\\n            </svg>\\r\\n          </div>\\r\\n\\r\\n          <span class=\\\"first-screen__call-frame\\\">Заказать звонок</span>\\r\\n        </a>\\r\\n      </div>\\r\\n\\r\\n      <div class=\\\"first-screen__bottom-section\\\">\\r\\n        <p class=\\\"first-screen__title\\\">Модульные дома</p>\\r\\n\\r\\n        <div class=\\\"first-screen__container container\\\">\\r\\n          <div class=\\\"container__top\\\">\\r\\n            <div class=\\\"container__top-block\\\">\\r\\n              <div class=\\\"container__icons\\\">\\r\\n                <div class=\\\"container__icon-wrapper\\\">\\r\\n                  <img\\r\\n                    class=\\\"container__icon\\\"\\r\\n                    src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\r\\n                    alt=\\\"Иконка: Модульный домик\\\"\\r\\n                  />\\r\\n                </div>\\r\\n                <div class=\\\"container__icon-wrapper\\\">\\r\\n                  <img\\r\\n                    class=\\\"container__icon\\\"\\r\\n                    src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\r\\n                    alt=\\\"Иконка: Модульный домик\\\"\\r\\n                  />\\r\\n                </div>\\r\\n              </div>\\r\\n\\r\\n              <div class=\\\"container__text\\\">\\r\\n                <p>5</p>\\r\\n                <p>лет<br />опыта</p>\\r\\n              </div>\\r\\n            </div>\\r\\n\\r\\n            <div class=\\\"container__image-wrapper\\\">\\r\\n              <!-- <img\\r\\n                class=\\\"container__image\\\"\\r\\n                src=\\\"./utils/img/img-home.webp\\\"\\r\\n                alt=\\\"Изображение: Модульный дом\\\"\\r\\n              /> -->\\r\\n              <a class=\\\"container__image-btn\\\">\\r\\n                <svg width=\\\"12\\\" height=\\\"12\\\" viewBox=\\\"0 0 12 12\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                  <path d=\\\"M1 11.0001L11 1.00006M11 1.00006H3.75862M11 1.00006V7.55179\\\"/>\\r\\n                  </svg>\\r\\n              </a>\\r\\n              \\r\\n                \\r\\n            </div>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"container__bottom\\\">\\r\\n            <p class=\\\"container__price\\\">\\r\\n              Цены на дома <br />\\r\\n              от <strong>2млн</strong> рублей!\\r\\n            </p>\\r\\n            <a class=\\\"container__btn\\\">\\r\\n              <p class=\\\"container__btn-text\\\">Рассчитать</p>\\r\\n              <svg\\r\\n                xmlns=\\\"http://www.w3.org/2000/svg\\\"\\r\\n                viewBox=\\\"0 0 11 16\\\"\\r\\n                fill=\\\"none\\\"\\r\\n              >\\r\\n                <path\\r\\n                  d=\\\"M1 12L10 3M10 3H3.48276M10 3V8.89655\\\"\\r\\n                />\\r\\n              </svg>\\r\\n            </a>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </section>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack://a-home/./src/index.html?");

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

/***/ "./src/utils/img/icon-home(2).webp":
/*!*****************************************!*\
  !*** ./src/utils/img/icon-home(2).webp ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"utils/img/icon-home(2).442bcdde.webp\";\n\n//# sourceURL=webpack://a-home/./src/utils/img/icon-home(2).webp?");

/***/ }),

/***/ "./src/utils/img/icon-home.webp":
/*!**************************************!*\
  !*** ./src/utils/img/icon-home.webp ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"utils/img/icon-home.d4347549.webp\";\n\n//# sourceURL=webpack://a-home/./src/utils/img/icon-home.webp?");

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
/******/ 		__webpack_require__.p = "";
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