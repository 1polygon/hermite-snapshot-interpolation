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

/***/ "./src/demo.js":
/*!*********************!*\
  !*** ./src/demo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Demo)\n/* harmony export */ });\n/* harmony import */ var _main_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/client */ \"./src/main/client.js\");\n/* harmony import */ var _main_interpolation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/interpolation */ \"./src/main/interpolation.js\");\n/* harmony import */ var _render_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/scene */ \"./src/render/scene.js\");\n\r\n\r\n\r\n\r\nclass Demo {\r\n    constructor(canvas) {\r\n        this.scene = new _render_scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas);\r\n        const client = new _main_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.scene.add(client);\r\n        this.scene.add(new _main_interpolation__WEBPACK_IMPORTED_MODULE_1__[\"default\"](client));\r\n    }\r\n}\n\n//# sourceURL=webpack://net-interp/./src/demo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo */ \"./src/demo.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    new _demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector(\"canvas\"));\r\n});\n\n//# sourceURL=webpack://net-interp/./src/index.js?");

/***/ }),

/***/ "./src/main/client.js":
/*!****************************!*\
  !*** ./src/main/client.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Client)\n/* harmony export */ });\n/* harmony import */ var _render_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/rect */ \"./src/render/rect.js\");\n/* harmony import */ var _render_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/stats */ \"./src/render/stats.js\");\n/* harmony import */ var _inputhandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputhandler */ \"./src/main/inputhandler.js\");\n\r\n\r\n\r\n\r\nclass Client {\r\n    constructor() {\r\n        this.input = new _inputhandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        this.rect = new _render_rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.speed = 5.0;\r\n\r\n        document.addEventListener(\"wheel\", this.wheel.bind(this));\r\n    }\r\n\r\n    tick(delta) {\r\n        this.rect.tick(delta);\r\n\r\n        if (Math.abs(this.input.mouseX - this.rect.position[0]) > 10 || Math.abs(this.input.mouseY - this.rect.position[1]) > 10) {\r\n            this.rect.position[0] += (this.rect.forward[0] * this.input.vertical + this.rect.right[0] * this.input.horizontal) * this.speed;\r\n            this.rect.position[1] += (this.rect.forward[1] * this.input.vertical + this.rect.right[1] * this.input.horizontal) * this.speed;\r\n        }\r\n\r\n        this.rect.lookAt(this.input.mouseX, this.input.mouseY);\r\n        _render_stats__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"speed\", Math.round(this.speed));\r\n    }\r\n\r\n    render(ctx, delta) {\r\n        this.rect.render(ctx, delta);\r\n    }\r\n\r\n    wheel(e) {\r\n        this.speed -= e.deltaY * 0.025;\r\n        if (this.speed < 0.1) this.speed = 0.1;\r\n        if (this.speed > 20) this.speed = 20;\r\n    }\r\n}\n\n//# sourceURL=webpack://net-interp/./src/main/client.js?");

/***/ }),

/***/ "./src/main/inputhandler.js":
/*!**********************************!*\
  !*** ./src/main/inputhandler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputHandler)\n/* harmony export */ });\nclass InputHandler {\r\n    constructor() {\r\n        this.horizontal = 0;\r\n        this.vertical = 0;\r\n        this.mouseX = 0;\r\n        this.mouseY = 0;\r\n\r\n        document.addEventListener(\"mousemove\", this.mouseMove.bind(this));\r\n        document.addEventListener(\"keydown\", this.keyDown.bind(this));\r\n        document.addEventListener(\"keyup\", this.keyUp.bind(this));\r\n    }\r\n\r\n    mouseMove(e) {\r\n        this.mouseX = e.clientX;\r\n        this.mouseY = e.clientY;\r\n    }\r\n\r\n    keyDown(e) {\r\n        switch (e.key) {\r\n            case \"w\":\r\n                this.vertical = 1;\r\n                break;\r\n            case \"s\":\r\n                this.vertical = -1;\r\n                break;\r\n            case \"a\":\r\n                this.horizontal = -1;\r\n                break;\r\n            case \"d\":\r\n                this.horizontal = 1;\r\n                break;\r\n        }\r\n    }\r\n\r\n    keyUp(e) {\r\n        switch (e.key) {\r\n            case \"w\":\r\n                this.vertical = 0;\r\n                break;\r\n            case \"s\":\r\n                this.vertical = 0;\r\n                break;\r\n            case \"a\":\r\n                this.horizontal = 0;\r\n                break;\r\n            case \"d\":\r\n                this.horizontal = 0;\r\n                break;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://net-interp/./src/main/inputhandler.js?");

/***/ }),

/***/ "./src/main/interpolation.js":
/*!***********************************!*\
  !*** ./src/main/interpolation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Interpolation)\n/* harmony export */ });\n/* harmony import */ var _render_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/rect */ \"./src/render/rect.js\");\n/* harmony import */ var _render_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/stats */ \"./src/render/stats.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ \"./src/main/math.js\");\n\r\n\r\n\r\n\r\n/**\r\n * Based on:\r\n * https://gafferongames.com/post/snapshot_interpolation\r\n * https://github.com/empyreanx/godot-snapshot-interpolation-demo\r\n */\r\n\r\nclass Snapshot {\r\n    constructor(position, rotation, velocity, time) {\r\n        this.position = [position[0], position[1]];\r\n        this.rotation = rotation;\r\n        this.velocity = [velocity[0], velocity[1]];\r\n        this.time = time;\r\n    }\r\n}\r\n\r\nclass Interpolation {\r\n    constructor(client) {\r\n        this.client = client;\r\n        this.rect = new _render_rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.rect.color = \"green\";\r\n\r\n        const tickrate = 30;\r\n        const packetloss = 0.1;\r\n        this.delay = 100;\r\n        this.time = 0;\r\n        this.buffer = [];\r\n        this.lastSnapshot = new Snapshot([0, 0], 0, [0, 0], 0);        \r\n\r\n        this.snapshotInterval = setInterval(() => {\r\n            if (Math.random() > packetloss) {\r\n                this.addSnapshot(this.client.rect.position, this.client.rect.rotation, this.client.rect.velocity);\r\n            }\r\n        }, 1000.0 / tickrate);\r\n\r\n        _render_stats__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"tick rate\", tickrate);\r\n        _render_stats__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"delay\", this.delay + \"ms\");\r\n        _render_stats__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"packet loss\", Math.round(packetloss * 100) + \"%\");\r\n    }\r\n\r\n    addSnapshot(position, rotation, velocity) {\r\n        this.buffer.push(new Snapshot(position, rotation, velocity, this.time));\r\n    }\r\n\r\n    tick(delta) {\r\n        this.rect.tick(delta);\r\n        \r\n        while (this.buffer.length > 0 && this.time - this.delay > this.buffer[0].time) {\r\n            this.lastSnapshot = this.buffer.shift();\r\n        }\r\n\r\n        if (this.buffer.length > 0 && this.buffer[0].time > 0) {\r\n            var deltaTime = this.buffer[0].time - this.lastSnapshot.time;\r\n            var alpha = (this.time - this.delay - this.lastSnapshot.time) / deltaTime;\r\n            const pos = (0,_math__WEBPACK_IMPORTED_MODULE_2__.hermite)(alpha, this.lastSnapshot.position, this.buffer[0].position, (0,_math__WEBPACK_IMPORTED_MODULE_2__.mul)(this.lastSnapshot.velocity, deltaTime), (0,_math__WEBPACK_IMPORTED_MODULE_2__.mul)(this.buffer[0].velocity, deltaTime));\r\n            this.rect.position[0] = pos[0];\r\n            this.rect.position[1] = pos[1];\r\n            this.rect.rotation = (0,_math__WEBPACK_IMPORTED_MODULE_2__.slerpRot)(this.lastSnapshot.rotation, this.buffer[0].rotation, alpha);\r\n        }\r\n        \r\n        this.time += delta;\r\n\r\n        _render_stats__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"buffer size\", this.buffer.length);\r\n    }\r\n\r\n    render(ctx, delta) {\r\n        this.rect.render(ctx, delta);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://net-interp/./src/main/interpolation.js?");

/***/ }),

/***/ "./src/main/math.js":
/*!**************************!*\
  !*** ./src/main/math.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hermite\": () => (/* binding */ hermite),\n/* harmony export */   \"add4\": () => (/* binding */ add4),\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"mul\": () => (/* binding */ mul),\n/* harmony export */   \"normalize\": () => (/* binding */ normalize),\n/* harmony export */   \"dot\": () => (/* binding */ dot),\n/* harmony export */   \"slerpRot\": () => (/* binding */ slerpRot),\n/* harmony export */   \"slerp\": () => (/* binding */ slerp)\n/* harmony export */ });\nfunction hermite(t, p1, p2, v1, v2) {\r\n    var t2 = Math.pow(t, 2);\r\n    var t3 = Math.pow(t, 3);\r\n    var a = 1 - 3 * t2 + 2 * t3;\r\n    var b = t2 * (3 - 2 * t);\r\n    var c = t * Math.pow(t - 1, 2);\r\n    var d = t2 * (t - 1);\r\n    return add4(mul(p1, a), mul(p2, b), mul(v1, c), mul(v2, d));\r\n}\r\n\r\nfunction add4(v1, v2, v3, v4) {\r\n    return [v1[0] + v2[0] + v3[0] + v4[0], v1[1] + v2[1] + v3[1] + v4[1]];\r\n}\r\n\r\nfunction add(v1, v2) {\r\n    return [v1[0] + v2[0], v1[1] + v2[1]];\r\n}\r\n\r\nfunction mul(v1, f) {\r\n    return [v1[0] * f, v1[1] * f];\r\n}\r\n\r\nfunction normalize(position) {\r\n    const mag = Math.sqrt(position[0] * position[0] + position[1] * position[1]);\r\n    if (mag < 0.0001) return [0, 0];\r\n    else return [position[0] / mag, position[1] / mag];\r\n}\r\n\r\nfunction dot(v1, v2) {\r\n    return v1[0] * v2[0] + v1[1] * v2[1];\r\n}\r\n\r\nfunction slerpRot(r1, r2, alpha) {\r\n    var v1 = [Math.cos(r1), Math.sin(r1)];\r\n    var v2 = [Math.cos(r2), Math.sin(r2)];\r\n    var v = slerp(v1, v2, alpha);\r\n    return Math.atan2(v[1], v[0]);\r\n}\r\n\r\nfunction slerp(v1, v2, alpha) {\r\n    var cos_angle = dot(v1, v2);\r\n    var angle = Math.acos(cos_angle);\r\n    var angle_alpha = angle * alpha;\r\n    var v3 = [v2[0] - cos_angle * v1[0], v2[1] - cos_angle * v1[1]];\r\n    v3 = normalize(v3);\r\n\r\n    return add(mul(v1, Math.cos(angle_alpha)), mul(v3, Math.sin(angle_alpha)));\r\n}\r\n\n\n//# sourceURL=webpack://net-interp/./src/main/math.js?");

/***/ }),

/***/ "./src/render/rect.js":
/*!****************************!*\
  !*** ./src/render/rect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rect)\n/* harmony export */ });\nclass Rect {\r\n    constructor() {\r\n        this.size = [100, 100];\r\n        this.forward = [0, 0];\r\n        this.right = [0, 0];\r\n        this.position = [0, 0];\r\n        this.rotation = 0;\r\n        this.velocity = [0, 0];\r\n        this.lastPosition = [0, 0];\r\n        this.color = \"white\";\r\n    }\r\n\r\n    tick(delta) {\r\n        this.velocity[0] = (this.position[0] - this.lastPosition[0]) / delta;\r\n        this.velocity[1] = (this.position[1] - this.lastPosition[1]) / delta;\r\n        this.forward[0] = Math.cos(this.rotation);\r\n        this.forward[1] = Math.sin(this.rotation);\r\n        this.right[0] = Math.cos(this.rotation + Math.PI / 2.0);\r\n        this.right[1] = Math.sin(this.rotation + Math.PI / 2.0);\r\n        this.lastPosition[0] = this.position[0];\r\n        this.lastPosition[1] = this.position[1];\r\n    }\r\n\r\n    render(ctx, delta) {\r\n        ctx.translate(this.position[0], this.position[1]);\r\n        ctx.rotate(this.rotation);\r\n        ctx.translate(-this.size[0] / 2, -this.size[1] / 2);\r\n        ctx.fillStyle = this.color;\r\n        ctx.fillRect(0, 0, this.size[0], this.size[1]);\r\n        ctx.resetTransform();\r\n    }\r\n\r\n    lookAt(x, y) {\r\n        this.rotation = Math.atan2(y - this.position[1], x - this.position[0]);\r\n    }\r\n}\n\n//# sourceURL=webpack://net-interp/./src/render/rect.js?");

/***/ }),

/***/ "./src/render/scene.js":
/*!*****************************!*\
  !*** ./src/render/scene.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scene)\n/* harmony export */ });\nclass Scene {\r\n    constructor(canvas) {\r\n        this.canvas = canvas;\r\n        this.ctx = canvas.getContext(\"2d\");\r\n        this.objects = [];\r\n\r\n        window.addEventListener(\"resize\", this.resize.bind(this));\r\n        var lastTick = performance.now();\r\n        const loop = () => {\r\n            const now = performance.now();\r\n            const delta = now - lastTick;\r\n            lastTick = now;\r\n            this.tick(delta);\r\n            this.render(delta);\r\n            window.requestAnimationFrame(loop);\r\n        }\r\n\r\n        this.resize();\r\n        loop();\r\n    }\r\n\r\n    tick(delta) {\r\n        this.objects.forEach(o => o.tick(delta));\r\n    }\r\n\r\n    render(delta) {\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        this.objects.forEach(o => o.render(this.ctx, delta));\r\n    }\r\n\r\n    resize() {\r\n        this.canvas.width = window.innerWidth;\r\n        this.canvas.height = window.innerHeight;\r\n        this.objects.forEach(o => o.resize && o.resize(this.canvas.width, this.canvas.height));\r\n    }\r\n\r\n    add(o) {\r\n        this.objects.push(o);\r\n    }\r\n}\n\n//# sourceURL=webpack://net-interp/./src/render/scene.js?");

/***/ }),

/***/ "./src/render/stats.js":
/*!*****************************!*\
  !*** ./src/render/stats.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Stats {\r\n    constructor() {\r\n        document.addEventListener(\"DOMContentLoaded\", () => {\r\n            this.element = document.querySelector(\".stats\");\r\n        })\r\n\r\n        this.stats = new Map();\r\n    }\r\n\r\n    set(name, value) {\r\n        const stat = this.stats.get(name);\r\n        if (stat) {\r\n            stat.val.textContent = value;\r\n        } else {\r\n            const row = document.createElement(\"div\");\r\n            const key = document.createElement(\"div\");\r\n            const val = document.createElement(\"div\");\r\n            key.textContent = name;\r\n            val.textContent = value;\r\n            row.appendChild(key);\r\n            row.appendChild(val);\r\n            this.element.appendChild(row);\r\n            this.stats.set(name, {\r\n                key: key,\r\n                val: val\r\n            });\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack://net-interp/./src/render/stats.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;