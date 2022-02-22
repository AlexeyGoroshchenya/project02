/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/two */ \"./modules/two.js\");\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('29 february 2022');\r\n//two();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    //ниже блок добавления дней, в видео Александр сказал можно побаловаться\r\n    const timerDays = document.createElement(\"span\");\r\n    const twoPoints = document.createElement(\"span\");\r\n    timerDays.textContent = \"\";\r\n    twoPoints.textContent = \" :\";\r\n    timerDays.setAttribute('id', 'timer-days');\r\n    document.querySelector('.timer-numbers').prepend(twoPoints);\r\n    document.querySelector('.timer-numbers').prepend(timerDays);\r\n\r\n    const getTimerRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n\r\n        let timeRemaning = (dateStop - dateNow) / 1000;\r\n        let seconds = Math.floor(timeRemaning % 60);\r\n        let minutes = Math.floor((timeRemaning / 60) % 60);\r\n        let hours = Math.floor(((timeRemaning / 60) / 60) % 60);\r\n        let days = Math.floor(((timeRemaning / 60) / 60) / 24);\r\n\r\n        return { timeRemaning, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimerRemaining();\r\n\r\n        if (getTime.timeRemaning > 0) {\r\n            if (getTime.hours < 10) {\r\n                timerHours.textContent = '0' + getTime.hours;\r\n            } else { timerHours.textContent = getTime.hours; }\r\n            if (getTime.minutes < 10) {\r\n                timerMinutes.textContent = '0' + getTime.minutes;\r\n            } else { timerMinutes.textContent = getTime.minutes; }\r\n            if (getTime.seconds < 10) {\r\n                timerSeconds.textContent = '0' + getTime.seconds;\r\n            } else { timerSeconds.textContent = getTime.seconds; }\r\n            if (getTime.days < 10) {\r\n                timerDays.textContent = '0' + getTime.days;\r\n            } else { timerDays.textContent = getTime.days; }\r\n\r\n        }\r\n        //if (getTime.timeRemaning > 0) { setTimeout(updateClock, 1000) }\r\n    }\r\n\r\n    // updateClock();\r\n\r\n    if (getTimerRemaining().timeRemaning > 0) {\r\n        setInterval(updateClock, 1000, deadline)\r\n    } else {\r\n        timerHours.textContent = '00';\r\n        timerMinutes.textContent = '00';\r\n        timerSeconds.textContent = '00';\r\n        timerDays.textContent = '00';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/two.js":
/*!************************!*\
  !*** ./modules/two.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst two = () => {\r\n    console.log('two.js');\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (two);\n\n//# sourceURL=webpack:///./modules/two.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;