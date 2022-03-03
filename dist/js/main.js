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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_sliderDots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliderDots */ \"./modules/sliderDots.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst sliderClasses = {\r\n    dotClass: 'dot',\r\n    portfolioItemClass: 'portfolio-item',\r\n    portfolioContentClass: 'portfolio-content',\r\n    portfolioBtnClass: 'portfolio-btn',\r\n};\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('09 march 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_sliderDots__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(sliderClasses);\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total')\r\n\r\n\r\n\r\n    const counCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10\r\n        }\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5\r\n        } else { calcDayValue = 1 }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        }\r\n\r\n        total.textContent = totalValue\r\n\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            counCalc()\r\n        }\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

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

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (dotClasses) => {\r\n\r\n    let {\r\n        dotClass,\r\n        portfolioItemClass,\r\n        portfolioContentClass,\r\n        portfolioBtnClass,\r\n    } = dotClasses;\r\n\r\n    for (let key in dotClasses) {\r\n        if (!document.querySelector((`.${dotClasses[key]}`))) {\r\n            return\r\n        }\r\n    }\r\n\r\n    const sliderBlock = document.querySelector(('.' + portfolioContentClass));\r\n    const slides = document.querySelectorAll(('.' + portfolioItemClass));\r\n    const dots = document.querySelectorAll(('.' + dotClass));\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n    let timeInterval = 2000;\r\n\r\n    const pervSlide = (elems, index, slideStr = 'slide-active') => {\r\n        elems[index].classList.remove(slideStr);\r\n    }\r\n\r\n    const pervDot = (elems, index, slideStr = 'dot-active') => {\r\n        elems[index].classList.remove(slideStr);\r\n    }\r\n\r\n    const nextSlide = (elems, index, slideStr = 'slide-active') => {\r\n        elems[index].classList.add(slideStr);\r\n    }\r\n\r\n    const nextDot = (elems, index, slideStr = 'dot-active') => {\r\n        elems[index].classList.add(slideStr);\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        pervSlide(slides, currentSlide, `${portfolioItemClass}-active`);\r\n        pervDot(dots, currentSlide, `${dotClass}-active`);\r\n\r\n        currentSlide++\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, `${portfolioItemClass}-active`);\r\n        nextDot(dots, currentSlide, `${dotClass}-active`);\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches(('.' + dotClass + ', .' + portfolioBtnClass))) return;\r\n\r\n        pervSlide(slides, currentSlide, `${portfolioItemClass}-active`);\r\n        pervDot(dots, currentSlide, `${dotClass}-active`);\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains(dotClass)) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, `${portfolioItemClass}-active`);\r\n        nextDot(dots, currentSlide, `${dotClass}-active`);\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n\r\n        if (e.target.matches(('.' + dotClass + ', .' + portfolioBtnClass))) stopSlide(timeInterval);\r\n\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n\r\n        if (e.target.matches(('.' + dotClass + ', .' + portfolioBtnClass))) startSlide(timeInterval);\r\n\r\n    }, true)\r\n\r\n    startSlide(timeInterval)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/sliderDots.js":
/*!*******************************!*\
  !*** ./modules/sliderDots.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderDots = () => {\r\n\r\n    const slides = document.querySelectorAll('.portfolio-item');\r\n    const slidesDots = document.querySelector('.portfolio-dots')\r\n\r\n    let numberOfDots = slides.length;\r\n\r\n    const createDots = () => {\r\n        const dot = document.createElement(\"li\");\r\n        dot.textContent = \"\";\r\n        dot.classList.add(\"dot\");\r\n        slidesDots.append(dot)\r\n\r\n    }\r\n\r\n    const checkNumberOfDots = () => {\r\n\r\n        for (let i = 0; i < numberOfDots; i++) {\r\n            createDots()\r\n        }\r\n\r\n    }\r\n\r\n    checkNumberOfDots();\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderDots);\n\n//# sourceURL=webpack:///./modules/sliderDots.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\r\n    const conditionsValidation = (e) => {\r\n        if (e.target.matches('.calc-block input ')) {\r\n            e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n\r\n        } else if (e.target.matches('input.form-name') || e.target.matches('input.mess')) {\r\n            e.target.value = e.target.value.replace(/[^а-яА-я\\s\\-]/, \"\");\r\n        }\r\n        else if (e.target.matches('.form-phone')) {\r\n            e.target.value = e.target.value.replace(/[^0-9\\(\\)\\-]/, \"\");\r\n        }\r\n        else if (e.target.matches('.form-email')) {\r\n            e.target.value = e.target.value.replace(/[^\\w\\-\\.\\_\\~\\!\\*\\'\\@]/, \"\");\r\n        }\r\n    }\r\n\r\n    document.body.addEventListener('input', (e) => {\r\n\r\n        document.getElementById('form2-name').classList.add('form-name');\r\n        conditionsValidation(e);\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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