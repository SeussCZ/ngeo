/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"mapswipe": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([24,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/mapswipe.css":
/*!*******************************!*\
  !*** ./examples/mapswipe.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./examples/mapswipe.css?");

/***/ }),

/***/ "./examples/mapswipe.js":
/*!******************************!*\
  !*** ./examples/mapswipe.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mapswipe_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapswipe.css */ \"./examples/mapswipe.css\");\n/* harmony import */ var _mapswipe_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapswipe_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ngeo_map_swipe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/map/swipe.js */ \"./src/map/swipe.js\");\n/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/map/module.js */ \"./src/map/module.js\");\n/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile.js */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Map.js */ \"./node_modules/ol/Map.js\");\n/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/OSM.js */ \"./node_modules/ol/source/OSM.js\");\n/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/View.js */ \"./node_modules/ol/View.js\");\n\n\n\n\n\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name, ngeo_map_swipe_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name]);\n\nfunction MainController() {\n  var openStreetMapLayer = new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n    source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]()\n  });\n  this.openSeaMapLayer = new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n    source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      attributions: ['All maps © <a href=\"http://www.openseamap.org/\">OpenSeaMap</a>', ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__[\"ATTRIBUTION\"]],\n      opaque: false,\n      url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'\n    })\n  });\n  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n    layers: [openStreetMapLayer, this.openSeaMapLayer],\n    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n      center: [-244780.24508882355, 5986452.183179816],\n      zoom: 15\n    })\n  });\n}\n\nmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./examples/mapswipe.js?");

/***/ }),

/***/ "./src/map/swipe.html":
/*!****************************!*\
  !*** ./src/map/swipe.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(obj) {\nobj || (obj = {});\nvar __t, __p = '';\nwith (obj) {\n__p += '<div>\\n  <input id=\"swipe\" type=\"range\" class=\"swipe-input\">\\n</div>\\n';\n\n}\nreturn __p\n}\n\n//# sourceURL=webpack:///./src/map/swipe.html?");

/***/ }),

/***/ "./src/map/swipe.js":
/*!**************************!*\
  !*** ./src/map/swipe.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/events.js */ \"./node_modules/ol/events.js\");\n/* harmony import */ var ol_render_Event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/render/Event.js */ \"./node_modules/ol/render/Event.js\");\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoMapswipe', []);\nmodule.run([\"$templateCache\", function ($templateCache) {\n  $templateCache.put('ngeo/src/map/swipe', __webpack_require__(/*! ./swipe.html */ \"./src/map/swipe.html\"));\n}]);\nmodule.value('ngeoMapswipeTemplateUrl', function ($attrs) {\n  var templateUrl = $attrs.ngeoMapswipeTemplateUrl;\n  return templateUrl !== undefined ? templateUrl : 'ngeo/src/map/swipe';\n});\nngeoMapswipeTemplateUrl.$inject = [\"$attrs\", \"ngeoMapswipeTemplateUrl\"];\n\nfunction ngeoMapswipeTemplateUrl($attrs, ngeoMapswipeTemplateUrl) {\n  return ngeoMapswipeTemplateUrl($attrs);\n}\n\nvar SwipeController = function () {\n  SwipeController.$inject = [\"$scope\", \"$element\", \"$injector\"];\n\n  function SwipeController($scope, $element, $injector) {\n    this.map;\n    this.layer;\n    this.scope_ = $scope;\n    this.swipeValue = 50;\n    this.swipeInput_ = $element.find('.swipe-input');\n    this.layerKeys_ = [];\n  }\n\n  var _proto = SwipeController.prototype;\n\n  _proto.$onInit = function $onInit() {\n    var _this = this;\n\n    this.layerKeys_.push(ol_events_js__WEBPACK_IMPORTED_MODULE_1__[\"listen\"](this.layer, 'prerender', this.handleLayerPrerender_, this));\n    this.layerKeys_.push(ol_events_js__WEBPACK_IMPORTED_MODULE_1__[\"listen\"](this.layer, 'postrender', this.handleLayerPostrender_, this));\n    this.swipeInput_.on('input change', function (event) {\n      _this.swipeValue = Number($(event.target).val());\n\n      _this.map.render();\n    });\n  };\n\n  _proto.handleLayerPrerender_ = function handleLayerPrerender_(evt) {\n    if (evt instanceof ol_render_Event_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      var ctx = evt.context;\n\n      if (!ctx) {\n        return;\n      }\n\n      var width = ctx.canvas.width * (this.swipeValue / 100);\n      ctx.save();\n      ctx.beginPath();\n      ctx.rect(0, 0, width, ctx.canvas.height);\n      ctx.clip();\n    }\n  };\n\n  _proto.handleLayerPostrender_ = function handleLayerPostrender_(evt) {\n    if (evt instanceof ol_render_Event_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      var ctx = evt.context;\n\n      if (!ctx) {\n        return;\n      }\n\n      ctx.restore();\n    }\n  };\n\n  _proto.$onDestroy = function $onDestroy() {\n    this.layerKeys_.forEach(ol_events_js__WEBPACK_IMPORTED_MODULE_1__[\"unlistenByKey\"]);\n    this.layerKeys_.length = 0;\n    this.swipeInput_.off();\n  };\n\n  return SwipeController;\n}();\n\nmodule.component('ngeoMapswipe', {\n  controller: SwipeController,\n  bindings: {\n    map: '<',\n    layer: '<'\n  },\n  templateUrl: ngeoMapswipeTemplateUrl\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/map/swipe.js?");

/***/ }),

/***/ 24:
/*!*****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/mapswipe.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/mapswipe.js */\"./examples/mapswipe.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/mapswipe.js?");

/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor;\n\n//# sourceURL=webpack:///external_%22vendor%22?");

/***/ })

/******/ });