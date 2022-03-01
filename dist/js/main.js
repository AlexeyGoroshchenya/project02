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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('29 february 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    //2) В функции toggleMenu() много обработчиков событий. Используя делегирование событий, сделать обработчики для:\r\n    //Крестика закрытия меню и пунктов меню.\r\n    //На кнопку меню.\r\n    //3) У вас должно быть максимум 2 обработчика события в функции toggleMenu()\r\n\r\n    menuBtn.addEventListener('click', handleMenu)\r\n\r\n    menu.addEventListener('click', (e) => {\r\n\r\n        if (e.target.matches('a') || e.target.classList.contains('.close-btn')) {\r\n            e.preventDefault();\r\n            handleMenu()\r\n        }\r\n    });\r\n\r\n\r\n    //ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ\r\n    //Написать 1 обработчик для всех событий внутри функции toggleMenu()\r\n    //2) Реализовать следующий функционал: если клик произошел мимо меню, оно закрывается\r\n\r\n    /*\r\n    document.body.addEventListener('click', (e) => {\r\n\r\n        let linkTarget = e.target.matches('ul>li>a') || e.target.classList.contains('close-btn') || e.target.closest('.menu')\r\n\r\n        if (linkTarget) {\r\n            e.preventDefault();\r\n            handleMenu()\r\n        } else if (!e.target.closest('.active-menu') && menu.classList.contains('active-menu')) {\r\n            menu.classList.remove('active-menu');\r\n        }\r\n    });\r\n    */\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\r\n    const modal = document.querySelector('.popup');\r\n    const popupBtn = document.querySelectorAll('.popup-btn');\r\n\r\n    const openModal = function () {\r\n        if (window.screen.width > 768) {\r\n            let count = parseInt(modal.style.transform.slice(11)) + 5;\r\n\r\n            let idInterval = requestAnimationFrame(openModal);\r\n\r\n            if (count <= 0) {\r\n\r\n                modal.style.transform = 'translateX(' + count + '%)';\r\n\r\n            } else { cancelAnimationFrame(idInterval) }\r\n        } else {\r\n            modal.style.transform = 'translateX(0%)';\r\n        }\r\n    }\r\n\r\n    //понимаю, что тут можно было бы и открытие и закрытие сделать \r\n    //одной функцией с передачей аргументом значения, с которым будет \r\n    //count сравниваться, но допилить до рабочего состояния такой вариант\r\n    //тупо нет времени\r\n    const closeModal = function () {\r\n\r\n        if (window.screen.width > 768) {\r\n            let count = parseInt(modal.style.transform.slice(11)) + 5\r\n\r\n            let idInterval = requestAnimationFrame(closeModal);\r\n\r\n            if (count <= 100) {\r\n                modal.style.transform = 'translateX(' + count + '%)';\r\n            } else {\r\n                cancelAnimationFrame(idInterval)\r\n                modal.style.transform = 'translateX(-100%)'\r\n            }\r\n        } else {\r\n            modal.style.transform = 'translateX(-100%)';\r\n\r\n        }\r\n    }\r\n\r\n    const init = () => {\r\n        modal.style.transform = 'translateX(-100%)'\r\n        modal.style.display = 'block';\r\n\r\n        popupBtn.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                openModal()\r\n            })\r\n        })\r\n\r\n        modal.addEventListener('click', (e) => {\r\n            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n                closeModal()\r\n            }\r\n        })\r\n\r\n    }\r\n\r\n    init()\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n\r\n    const nextSlideLink = document.querySelector('main>a')\r\n\r\n    const scrollTo = (element) => {\r\n        const id = element.getAttribute('href');\r\n        const link = document.querySelector(id);\r\n\r\n        link.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n    }\r\n\r\n    document.querySelector('menu').addEventListener('click', (e) => {\r\n        if (e.target.matches('menu>ul>li>a')) {\r\n            e.preventDefault();\r\n            scrollTo(e.target);\r\n        }\r\n    })\r\n\r\n\r\n    nextSlideLink.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        const nextSlide = document.querySelector('.service');\r\n        nextSlide.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n\r\n    })\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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