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
/******/ 		"measure": 0
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
/******/ 	deferredModules.push([25,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/measure.css":
/*!******************************!*\
  !*** ./examples/measure.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/measure.js":
/*!*****************************!*\
  !*** ./examples/measure.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _measure_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./measure.css */ "./examples/measure.css");
/* harmony import */ var _measure_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_measure_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngeo_interaction_MeasureArea_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/interaction/MeasureArea.js */ "./src/interaction/MeasureArea.js");
/* harmony import */ var ngeo_interaction_MeasureAzimut_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/interaction/MeasureAzimut.js */ "./src/interaction/MeasureAzimut.js");
/* harmony import */ var ngeo_interaction_MeasureLength_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/interaction/MeasureLength.js */ "./src/interaction/MeasureLength.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/misc/btnComponent.js */ "./src/misc/btnComponent.js");
/* harmony import */ var ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/misc/decorate.js */ "./src/misc/decorate.js");
/* harmony import */ var ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/misc/filters.js */ "./src/misc/filters.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_control_ScaleLine_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/control/ScaleLine.js */ "./node_modules/ol/control/ScaleLine.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var angular_sanitize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-sanitize */ "./node_modules/angular-sanitize/index.js");
/* harmony import */ var angular_sanitize__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular_sanitize__WEBPACK_IMPORTED_MODULE_18__);
MeasuretoolsController.$inject = ["$scope", "$compile", "$sce", "$filter", "gettextCatalog"];



















var module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_6__["default"].name, ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, 'ngSanitize']);
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('partials/measuretools', __webpack_require__(/*! ./partials/measuretools.html */ "./examples/partials/measuretools.html"));
}]);
var measuretoolsComponent = {
  bindings: {
    'map': '=appMeasuretoolsMap',
    'lang': '=appMeasuretoolsLang'
  },
  controller: 'AppMeasuretoolsController',
  templateUrl: 'partials/measuretools'
};
module.component('appMeasuretools', measuretoolsComponent);

function MeasuretoolsController($scope, $compile, $sce, $filter, gettextCatalog) {
  var _this = this;

  this.map;
  this.lang;
  this.measureStartMsg = null;
  this.measureLengthContinueMsg = null;
  this.measureAreaContinueMsg = null;
  this.measureAzimutContinueMsg = null;
  var measureStartMsgs = {
    'en': $sce.trustAsHtml('Click to start drawing.'),
    'fr': $sce.trustAsHtml('Cliquer pour commencer à dessiner.')
  };
  var measureLengthContinueMsgs = {
    'en': $sce.trustAsHtml('Click to continue drawing.<br>' + 'Double-click or click last point to finish.'),
    'fr': $sce.trustAsHtml('Cliquer pour continuer le dessin.<br>' + 'Double-cliquer ou cliquer sur dernier point pour finir.')
  };
  var measureAreaContinueMsgs = {
    'en': $sce.trustAsHtml('Click to continue drawing.<br>' + 'Double-click or click starting point to finish.'),
    'fr': $sce.trustAsHtml('Cliquer pour continuer le dessin.<br>' + 'Double-cliquer ou cliquer sur point de départ pour finir.')
  };
  var measureAzimutContinueMsgs = {
    'en': $sce.trustAsHtml('Click to finish.'),
    'fr': $sce.trustAsHtml('Cliquer pour finir.')
  };
  var measureStartMsg = angular__WEBPACK_IMPORTED_MODULE_1___default.a.element('<span ng-bind-html="ctrl.measureStartMsg"></span>');
  measureStartMsg = $compile(measureStartMsg)($scope);
  var measureLengthContinueMsg = angular__WEBPACK_IMPORTED_MODULE_1___default.a.element('<span ng-bind-html="ctrl.measureLengthContinueMsg"></span>');
  measureLengthContinueMsg = $compile(measureLengthContinueMsg)($scope);
  var measureAreaContinueMsg = angular__WEBPACK_IMPORTED_MODULE_1___default.a.element('<span ng-bind-html="ctrl.measureAreaContinueMsg"></span>');
  measureAreaContinueMsg = $compile(measureAreaContinueMsg)($scope);
  var measureAzimutContinueMsg = angular__WEBPACK_IMPORTED_MODULE_1___default.a.element('<span ng-bind-html="ctrl.measureAzimutContinueMsg"></span>');
  measureAzimutContinueMsg = $compile(measureAzimutContinueMsg)($scope);
  $scope.$watch(function () {
    return _this.lang;
  }, function (newVal) {
    _this.measureStartMsg = measureStartMsgs[newVal];
    _this.measureLengthContinueMsg = measureLengthContinueMsgs[newVal];
    _this.measureAreaContinueMsg = measureAreaContinueMsgs[newVal];
    _this.measureAzimutContinueMsg = measureAzimutContinueMsgs[newVal];
  });
  var style = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
      color: 'rgba(255, 255, 255, 0.2)'
    }),
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
      color: 'rgba(0, 0, 0, 0.5)',
      lineDash: [10, 10],
      width: 2
    }),
    image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
      radius: 5,
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
        color: 'rgba(0, 0, 0, 0.7)'
      }),
      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
        color: 'rgba(255, 255, 255, 0.2)'
      })
    })
  });
  this.measureLength = new ngeo_interaction_MeasureLength_js__WEBPACK_IMPORTED_MODULE_4__["default"]($filter('ngeoUnitPrefix'), gettextCatalog, {
    sketchStyle: style,
    startMsg: measureStartMsg[0],
    continueMsg: measureLengthContinueMsg[0]
  });
  this.measureLength.setActive(false);
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_7__["interactionDecoration"])(this.measureLength);
  this.measureArea = new ngeo_interaction_MeasureArea_js__WEBPACK_IMPORTED_MODULE_2__["default"]($filter('ngeoUnitPrefix'), gettextCatalog, {
    sketchStyle: style,
    startMsg: measureStartMsg[0],
    continueMsg: measureAreaContinueMsg[0]
  });
  this.measureArea.setActive(false);
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_7__["interactionDecoration"])(this.measureArea);
  this.measureAzimut = new ngeo_interaction_MeasureAzimut_js__WEBPACK_IMPORTED_MODULE_3__["default"]($filter('ngeoUnitPrefix'), $filter('ngeoNumber'), {
    sketchStyle: style,
    startMsg: measureStartMsg[0],
    continueMsg: measureAzimutContinueMsg[0]
  });
  this.measureAzimut.setActive(false);
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_7__["interactionDecoration"])(this.measureAzimut);
  this.measureAzimut.on('measureend', function (evt) {
    var el = evt.target.getTooltipElement();
    el.innerHTML += '<br>Additional info';
  });
}

module.controller('AppMeasuretoolsController', MeasuretoolsController);

MeasuretoolsController.prototype.$onInit = function () {
  this.map.addInteraction(this.measureLength);
  this.map.addInteraction(this.measureArea);
  this.map.addInteraction(this.measureAzimut);
};

function MainController() {
  this.lang = 'en';
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_13__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      center: [692114.718759744, 5743119.914347709],
      zoom: 15
    })
  });
  this.map.addControl(new ol_control_ScaleLine_js__WEBPACK_IMPORTED_MODULE_11__["default"]());
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./examples/partials/measuretools.html":
/*!*********************************************!*\
  !*** ./examples/partials/measuretools.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div ngeo-btn-group class="btn-group">\n  <button ngeo-btn class="btn btn-primary" ng-model="$ctrl.measureLength.active">Length</button>\n  <button ngeo-btn class="btn btn-primary" ng-model="$ctrl.measureArea.active">Area</button>\n  <button ngeo-btn class="btn btn-primary" ng-model="$ctrl.measureAzimut.active">Azimut</button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ 25:
/*!****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/measure.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/measure.js */"./examples/measure.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9tZWFzdXJlLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3BhcnRpYWxzL21lYXN1cmV0b29scy5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWVhc3VyZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsyNSxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJNZWFzdXJldG9vbHNDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIiwgXCIkY29tcGlsZVwiLCBcIiRzY2VcIiwgXCIkZmlsdGVyXCIsIFwiZ2V0dGV4dENhdGFsb2dcIl07XG5pbXBvcnQgJy4vbWVhc3VyZS5jc3MnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb0ludGVyYWN0aW9uTWVhc3VyZUFyZWEgZnJvbSAnbmdlby9pbnRlcmFjdGlvbi9NZWFzdXJlQXJlYS5qcyc7XG5pbXBvcnQgbmdlb0ludGVyYWN0aW9uTWVhc3VyZUF6aW11dCBmcm9tICduZ2VvL2ludGVyYWN0aW9uL01lYXN1cmVBemltdXQuanMnO1xuaW1wb3J0IG5nZW9JbnRlcmFjdGlvbk1lYXN1cmVMZW5ndGggZnJvbSAnbmdlby9pbnRlcmFjdGlvbi9NZWFzdXJlTGVuZ3RoLmpzJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb01pc2NCdG5Db21wb25lbnQgZnJvbSAnbmdlby9taXNjL2J0bkNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBpbnRlcmFjdGlvbkRlY29yYXRpb24gfSBmcm9tICduZ2VvL21pc2MvZGVjb3JhdGUuanMnO1xuaW1wb3J0IG5nZW9NaXNjRmlsdGVycyBmcm9tICduZ2VvL21pc2MvZmlsdGVycy5qcyc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgb2xDb250cm9sU2NhbGVMaW5lIGZyb20gJ29sL2NvbnRyb2wvU2NhbGVMaW5lLmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xuaW1wb3J0IG9sU3R5bGVDaXJjbGUgZnJvbSAnb2wvc3R5bGUvQ2lyY2xlLmpzJztcbmltcG9ydCBvbFN0eWxlU3Ryb2tlIGZyb20gJ29sL3N0eWxlL1N0cm9rZS5qcyc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbC5qcyc7XG5pbXBvcnQgJ2FuZ3VsYXItc2FuaXRpemUnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2dldHRleHQnLCBuZ2VvTWFwTW9kdWxlLm5hbWUsIG5nZW9NaXNjQnRuQ29tcG9uZW50Lm5hbWUsIG5nZW9NaXNjRmlsdGVycy5uYW1lLCAnbmdTYW5pdGl6ZSddKTtcbm1vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgncGFydGlhbHMvbWVhc3VyZXRvb2xzJywgcmVxdWlyZSgnLi9wYXJ0aWFscy9tZWFzdXJldG9vbHMuaHRtbCcpKTtcbn1dKTtcbnZhciBtZWFzdXJldG9vbHNDb21wb25lbnQgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgJ21hcCc6ICc9YXBwTWVhc3VyZXRvb2xzTWFwJyxcbiAgICAnbGFuZyc6ICc9YXBwTWVhc3VyZXRvb2xzTGFuZydcbiAgfSxcbiAgY29udHJvbGxlcjogJ0FwcE1lYXN1cmV0b29sc0NvbnRyb2xsZXInLFxuICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL21lYXN1cmV0b29scydcbn07XG5tb2R1bGUuY29tcG9uZW50KCdhcHBNZWFzdXJldG9vbHMnLCBtZWFzdXJldG9vbHNDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBNZWFzdXJldG9vbHNDb250cm9sbGVyKCRzY29wZSwgJGNvbXBpbGUsICRzY2UsICRmaWx0ZXIsIGdldHRleHRDYXRhbG9nKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5tYXA7XG4gIHRoaXMubGFuZztcbiAgdGhpcy5tZWFzdXJlU3RhcnRNc2cgPSBudWxsO1xuICB0aGlzLm1lYXN1cmVMZW5ndGhDb250aW51ZU1zZyA9IG51bGw7XG4gIHRoaXMubWVhc3VyZUFyZWFDb250aW51ZU1zZyA9IG51bGw7XG4gIHRoaXMubWVhc3VyZUF6aW11dENvbnRpbnVlTXNnID0gbnVsbDtcbiAgdmFyIG1lYXN1cmVTdGFydE1zZ3MgPSB7XG4gICAgJ2VuJzogJHNjZS50cnVzdEFzSHRtbCgnQ2xpY2sgdG8gc3RhcnQgZHJhd2luZy4nKSxcbiAgICAnZnInOiAkc2NlLnRydXN0QXNIdG1sKCdDbGlxdWVyIHBvdXIgY29tbWVuY2VyIMOgIGRlc3NpbmVyLicpXG4gIH07XG4gIHZhciBtZWFzdXJlTGVuZ3RoQ29udGludWVNc2dzID0ge1xuICAgICdlbic6ICRzY2UudHJ1c3RBc0h0bWwoJ0NsaWNrIHRvIGNvbnRpbnVlIGRyYXdpbmcuPGJyPicgKyAnRG91YmxlLWNsaWNrIG9yIGNsaWNrIGxhc3QgcG9pbnQgdG8gZmluaXNoLicpLFxuICAgICdmcic6ICRzY2UudHJ1c3RBc0h0bWwoJ0NsaXF1ZXIgcG91ciBjb250aW51ZXIgbGUgZGVzc2luLjxicj4nICsgJ0RvdWJsZS1jbGlxdWVyIG91IGNsaXF1ZXIgc3VyIGRlcm5pZXIgcG9pbnQgcG91ciBmaW5pci4nKVxuICB9O1xuICB2YXIgbWVhc3VyZUFyZWFDb250aW51ZU1zZ3MgPSB7XG4gICAgJ2VuJzogJHNjZS50cnVzdEFzSHRtbCgnQ2xpY2sgdG8gY29udGludWUgZHJhd2luZy48YnI+JyArICdEb3VibGUtY2xpY2sgb3IgY2xpY2sgc3RhcnRpbmcgcG9pbnQgdG8gZmluaXNoLicpLFxuICAgICdmcic6ICRzY2UudHJ1c3RBc0h0bWwoJ0NsaXF1ZXIgcG91ciBjb250aW51ZXIgbGUgZGVzc2luLjxicj4nICsgJ0RvdWJsZS1jbGlxdWVyIG91IGNsaXF1ZXIgc3VyIHBvaW50IGRlIGTDqXBhcnQgcG91ciBmaW5pci4nKVxuICB9O1xuICB2YXIgbWVhc3VyZUF6aW11dENvbnRpbnVlTXNncyA9IHtcbiAgICAnZW4nOiAkc2NlLnRydXN0QXNIdG1sKCdDbGljayB0byBmaW5pc2guJyksXG4gICAgJ2ZyJzogJHNjZS50cnVzdEFzSHRtbCgnQ2xpcXVlciBwb3VyIGZpbmlyLicpXG4gIH07XG4gIHZhciBtZWFzdXJlU3RhcnRNc2cgPSBhbmd1bGFyLmVsZW1lbnQoJzxzcGFuIG5nLWJpbmQtaHRtbD1cImN0cmwubWVhc3VyZVN0YXJ0TXNnXCI+PC9zcGFuPicpO1xuICBtZWFzdXJlU3RhcnRNc2cgPSAkY29tcGlsZShtZWFzdXJlU3RhcnRNc2cpKCRzY29wZSk7XG4gIHZhciBtZWFzdXJlTGVuZ3RoQ29udGludWVNc2cgPSBhbmd1bGFyLmVsZW1lbnQoJzxzcGFuIG5nLWJpbmQtaHRtbD1cImN0cmwubWVhc3VyZUxlbmd0aENvbnRpbnVlTXNnXCI+PC9zcGFuPicpO1xuICBtZWFzdXJlTGVuZ3RoQ29udGludWVNc2cgPSAkY29tcGlsZShtZWFzdXJlTGVuZ3RoQ29udGludWVNc2cpKCRzY29wZSk7XG4gIHZhciBtZWFzdXJlQXJlYUNvbnRpbnVlTXNnID0gYW5ndWxhci5lbGVtZW50KCc8c3BhbiBuZy1iaW5kLWh0bWw9XCJjdHJsLm1lYXN1cmVBcmVhQ29udGludWVNc2dcIj48L3NwYW4+Jyk7XG4gIG1lYXN1cmVBcmVhQ29udGludWVNc2cgPSAkY29tcGlsZShtZWFzdXJlQXJlYUNvbnRpbnVlTXNnKSgkc2NvcGUpO1xuICB2YXIgbWVhc3VyZUF6aW11dENvbnRpbnVlTXNnID0gYW5ndWxhci5lbGVtZW50KCc8c3BhbiBuZy1iaW5kLWh0bWw9XCJjdHJsLm1lYXN1cmVBemltdXRDb250aW51ZU1zZ1wiPjwvc3Bhbj4nKTtcbiAgbWVhc3VyZUF6aW11dENvbnRpbnVlTXNnID0gJGNvbXBpbGUobWVhc3VyZUF6aW11dENvbnRpbnVlTXNnKSgkc2NvcGUpO1xuICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMubGFuZztcbiAgfSwgZnVuY3Rpb24gKG5ld1ZhbCkge1xuICAgIF90aGlzLm1lYXN1cmVTdGFydE1zZyA9IG1lYXN1cmVTdGFydE1zZ3NbbmV3VmFsXTtcbiAgICBfdGhpcy5tZWFzdXJlTGVuZ3RoQ29udGludWVNc2cgPSBtZWFzdXJlTGVuZ3RoQ29udGludWVNc2dzW25ld1ZhbF07XG4gICAgX3RoaXMubWVhc3VyZUFyZWFDb250aW51ZU1zZyA9IG1lYXN1cmVBcmVhQ29udGludWVNc2dzW25ld1ZhbF07XG4gICAgX3RoaXMubWVhc3VyZUF6aW11dENvbnRpbnVlTXNnID0gbWVhc3VyZUF6aW11dENvbnRpbnVlTXNnc1tuZXdWYWxdO1xuICB9KTtcbiAgdmFyIHN0eWxlID0gbmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgZmlsbDogbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJ1xuICAgIH0pLFxuICAgIHN0cm9rZTogbmV3IG9sU3R5bGVTdHJva2Uoe1xuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgbGluZURhc2g6IFsxMCwgMTBdLFxuICAgICAgd2lkdGg6IDJcbiAgICB9KSxcbiAgICBpbWFnZTogbmV3IG9sU3R5bGVDaXJjbGUoe1xuICAgICAgcmFkaXVzOiA1LFxuICAgICAgc3Ryb2tlOiBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjcpJ1xuICAgICAgfSksXG4gICAgICBmaWxsOiBuZXcgb2xTdHlsZUZpbGwoe1xuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSdcbiAgICAgIH0pXG4gICAgfSlcbiAgfSk7XG4gIHRoaXMubWVhc3VyZUxlbmd0aCA9IG5ldyBuZ2VvSW50ZXJhY3Rpb25NZWFzdXJlTGVuZ3RoKCRmaWx0ZXIoJ25nZW9Vbml0UHJlZml4JyksIGdldHRleHRDYXRhbG9nLCB7XG4gICAgc2tldGNoU3R5bGU6IHN0eWxlLFxuICAgIHN0YXJ0TXNnOiBtZWFzdXJlU3RhcnRNc2dbMF0sXG4gICAgY29udGludWVNc2c6IG1lYXN1cmVMZW5ndGhDb250aW51ZU1zZ1swXVxuICB9KTtcbiAgdGhpcy5tZWFzdXJlTGVuZ3RoLnNldEFjdGl2ZShmYWxzZSk7XG4gIGludGVyYWN0aW9uRGVjb3JhdGlvbih0aGlzLm1lYXN1cmVMZW5ndGgpO1xuICB0aGlzLm1lYXN1cmVBcmVhID0gbmV3IG5nZW9JbnRlcmFjdGlvbk1lYXN1cmVBcmVhKCRmaWx0ZXIoJ25nZW9Vbml0UHJlZml4JyksIGdldHRleHRDYXRhbG9nLCB7XG4gICAgc2tldGNoU3R5bGU6IHN0eWxlLFxuICAgIHN0YXJ0TXNnOiBtZWFzdXJlU3RhcnRNc2dbMF0sXG4gICAgY29udGludWVNc2c6IG1lYXN1cmVBcmVhQ29udGludWVNc2dbMF1cbiAgfSk7XG4gIHRoaXMubWVhc3VyZUFyZWEuc2V0QWN0aXZlKGZhbHNlKTtcbiAgaW50ZXJhY3Rpb25EZWNvcmF0aW9uKHRoaXMubWVhc3VyZUFyZWEpO1xuICB0aGlzLm1lYXN1cmVBemltdXQgPSBuZXcgbmdlb0ludGVyYWN0aW9uTWVhc3VyZUF6aW11dCgkZmlsdGVyKCduZ2VvVW5pdFByZWZpeCcpLCAkZmlsdGVyKCduZ2VvTnVtYmVyJyksIHtcbiAgICBza2V0Y2hTdHlsZTogc3R5bGUsXG4gICAgc3RhcnRNc2c6IG1lYXN1cmVTdGFydE1zZ1swXSxcbiAgICBjb250aW51ZU1zZzogbWVhc3VyZUF6aW11dENvbnRpbnVlTXNnWzBdXG4gIH0pO1xuICB0aGlzLm1lYXN1cmVBemltdXQuc2V0QWN0aXZlKGZhbHNlKTtcbiAgaW50ZXJhY3Rpb25EZWNvcmF0aW9uKHRoaXMubWVhc3VyZUF6aW11dCk7XG4gIHRoaXMubWVhc3VyZUF6aW11dC5vbignbWVhc3VyZWVuZCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICB2YXIgZWwgPSBldnQudGFyZ2V0LmdldFRvb2x0aXBFbGVtZW50KCk7XG4gICAgZWwuaW5uZXJIVE1MICs9ICc8YnI+QWRkaXRpb25hbCBpbmZvJztcbiAgfSk7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdBcHBNZWFzdXJldG9vbHNDb250cm9sbGVyJywgTWVhc3VyZXRvb2xzQ29udHJvbGxlcik7XG5cbk1lYXN1cmV0b29sc0NvbnRyb2xsZXIucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubWFwLmFkZEludGVyYWN0aW9uKHRoaXMubWVhc3VyZUxlbmd0aCk7XG4gIHRoaXMubWFwLmFkZEludGVyYWN0aW9uKHRoaXMubWVhc3VyZUFyZWEpO1xuICB0aGlzLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLm1lYXN1cmVBemltdXQpO1xufTtcblxuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoKSB7XG4gIHRoaXMubGFuZyA9ICdlbic7XG4gIHRoaXMubWFwID0gbmV3IG9sTWFwKHtcbiAgICBsYXllcnM6IFtuZXcgb2xMYXllclRpbGUoe1xuICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKVxuICAgIH0pXSxcbiAgICB2aWV3OiBuZXcgb2xWaWV3KHtcbiAgICAgIGNlbnRlcjogWzY5MjExNC43MTg3NTk3NDQsIDU3NDMxMTkuOTE0MzQ3NzA5XSxcbiAgICAgIHpvb206IDE1XG4gICAgfSlcbiAgfSk7XG4gIHRoaXMubWFwLmFkZENvbnRyb2wobmV3IG9sQ29udHJvbFNjYWxlTGluZSgpKTtcbn1cblxubW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxkaXYgbmdlby1idG4tZ3JvdXAgY2xhc3M9XCJidG4tZ3JvdXBcIj5cXG4gIDxidXR0b24gbmdlby1idG4gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBuZy1tb2RlbD1cIiRjdHJsLm1lYXN1cmVMZW5ndGguYWN0aXZlXCI+TGVuZ3RoPC9idXR0b24+XFxuICA8YnV0dG9uIG5nZW8tYnRuIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgbmctbW9kZWw9XCIkY3RybC5tZWFzdXJlQXJlYS5hY3RpdmVcIj5BcmVhPC9idXR0b24+XFxuICA8YnV0dG9uIG5nZW8tYnRuIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgbmctbW9kZWw9XCIkY3RybC5tZWFzdXJlQXppbXV0LmFjdGl2ZVwiPkF6aW11dDwvYnV0dG9uPlxcbjwvZGl2Plxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==