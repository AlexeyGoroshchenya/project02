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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('29 february 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n    const handleMenu = () => {\r\n\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu)\r\n\r\n    closeBtn.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        console.log('1');\r\n        handleMenu();\r\n    });\r\n\r\n\r\n    menuItems.forEach(item => item.addEventListener('click', handleMenu))\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\r\n    const modal = document.querySelector('.popup');\r\n    const popupBtn = document.querySelectorAll('.popup-btn');\r\n    const popupCloseBtn = modal.querySelector('.popup-close');\r\n\r\n    const openModal = function () {\r\n        if (window.screen.width > 768) {\r\n            let count = parseInt(modal.style.transform.slice(11)) + 5;\r\n\r\n            let idInterval = requestAnimationFrame(openModal);\r\n\r\n            if (count <= 0) {\r\n\r\n                modal.style.transform = 'translateX(' + count + '%)';\r\n\r\n            } else { cancelAnimationFrame(idInterval) }\r\n        } else {\r\n            modal.style.transform = 'translateX(0%)';\r\n        }\r\n    }\r\n\r\n    //понимаю, что тут можно было бы и открытие и закрытие сделать \r\n    //одной функцией с передачей аргументом значения, с которым будет \r\n    //count сравниваться, но допилить до рабочего состояния такой вариант\r\n    //тупо нет времени\r\n    const closeModal = function () {\r\n\r\n        if (window.screen.width > 768) {\r\n            let count = parseInt(modal.style.transform.slice(11)) + 5\r\n\r\n            let idInterval = requestAnimationFrame(closeModal);\r\n\r\n            if (count <= 100) {\r\n                modal.style.transform = 'translateX(' + count + '%)';\r\n            } else {\r\n                cancelAnimationFrame(idInterval)\r\n                modal.style.transform = 'translateX(-100%)'\r\n            }\r\n        } else {\r\n            modal.style.transform = 'translateX(-100%)';\r\n\r\n        }\r\n    }\r\n\r\n    const init = () => {\r\n        modal.style.transform = 'translateX(-100%)'\r\n        modal.style.display = 'block';\r\n\r\n        popupBtn.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                openModal()\r\n            })\r\n        })\r\n\r\n        popupCloseBtn.addEventListener('click', () => {\r\n            closeModal()\r\n        })\r\n    }\r\n\r\n    init()\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n//Использовать JS анимацию. Использовать нативный JavaScript. Использование\r\n// сторонних библиотек запрещено!\r\n// Необходимо манипулировать элементами посредством JS. СSS анимация не подходит\r\n// для анимирования модального окна.\r\n// 3) Если пользователь заходит на сайт с устройства, у которого ширина экрана\r\n// меньше 768px (мобильного устройства) - анимация отключается\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n\r\n    const links = document.querySelectorAll('menu>ul>li>a');\r\n    const nextSlideLink = document.querySelector('main>a')\r\n\r\n\r\n    links.forEach((element) => {\r\n        element.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n\r\n            const id = element.getAttribute('href');\r\n            const link = document.querySelector(id);\r\n\r\n            link.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n        })\r\n    })\r\n\r\n    nextSlideLink.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n\r\n        const nextSlide = document.querySelector('.service');\r\n        nextSlide.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n\r\n    })\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    //ниже блок добавления дней, в видео Александр сказал можно побаловаться\r\n    const timerDays = document.createElement(\"span\");\r\n    const twoPoints = document.createElement(\"span\");\r\n    timerDays.textContent = \"\";\r\n    twoPoints.textContent = \" :\";\r\n    timerDays.setAttribute('id', 'timer-days');\r\n    document.querySelector('.timer-numbers').prepend(twoPoints);\r\n    document.querySelector('.timer-numbers').prepend(timerDays);\r\n\r\n    const getTimerRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n\r\n        let timeRemaning = (dateStop - dateNow) / 1000;\r\n        let seconds = Math.floor(timeRemaning % 60);\r\n        let minutes = Math.floor((timeRemaning / 60) % 60);\r\n        let hours = Math.floor(((timeRemaning / 60) / 60) % 60);\r\n        let days = Math.floor(((timeRemaning / 60) / 60) / 24);\r\n\r\n        return { timeRemaning, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const addZero = (number) => {\r\n        return number < 10 ? `0${number}` : number;\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimerRemaining();\r\n\r\n        if (getTime.timeRemaning > 0) {\r\n            timerHours.textContent = addZero(getTime.hours);\r\n\r\n            timerMinutes.textContent = addZero(getTime.minutes);\r\n\r\n            timerSeconds.textContent = addZero(getTime.seconds);\r\n\r\n            timerDays.textContent = addZero(getTime.days);\r\n\r\n        }\r\n        //if (getTime.timeRemaning > 0) { setTimeout(updateClock, 1000) }\r\n    }\r\n\r\n    // updateClock();\r\n\r\n    if (getTimerRemaining().timeRemaning > 0) {\r\n        updateClock();\r\n        setInterval(updateClock, 1000, deadline)\r\n    } else {\r\n        timerHours.textContent = '00';\r\n        timerMinutes.textContent = '00';\r\n        timerSeconds.textContent = '00';\r\n        timerDays.textContent = '00';\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\r\n    const calcInput = document.querySelectorAll('.calc-block input ');\r\n\r\n    const textInputs = [\r\n        document.getElementById('form1-name'),\r\n        document.getElementById('form2-name'),\r\n        document.getElementById('form3-name'),\r\n        document.getElementById('form2-message'),\r\n    ]\r\n    const emailInputs = [\r\n        document.getElementById('form1-email'),\r\n        document.getElementById('form2-email'),\r\n        document.getElementById('form3-email'),\r\n    ]\r\n    const telInputs = [\r\n        document.getElementById('form1-phone'),\r\n        document.getElementById('form2-phone'),\r\n        document.getElementById('form3-phone'),\r\n    ]\r\n\r\n\r\n    calcInput.forEach((element) => {\r\n        element.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n        })\r\n    })\r\n\r\n    textInputs.forEach((element) => {\r\n        element.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яА-я\\s\\-]/, \"\");\r\n        })\r\n    })\r\n\r\n    telInputs.forEach((element) => {\r\n        element.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/, \"\");\r\n        })\r\n    })\r\n\r\n    emailInputs.forEach((element) => {\r\n        element.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^\\w\\-\\.\\_\\~\\!\\*\\'\\@]/, \"\");\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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