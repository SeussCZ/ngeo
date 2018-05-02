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
/******/ 		"editfeature": 0
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
/******/ 	deferredModules.push([7,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/editfeature.css":
/*!***********************************************!*\
  !*** ./contribs/gmf/examples/editfeature.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/editfeature.js":
/*!**********************************************!*\
  !*** ./contribs/gmf/examples/editfeature.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _editfeature_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editfeature.css */ "./contribs/gmf/examples/editfeature.css");
/* harmony import */ var _editfeature_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editfeature_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/src/tooltip.js */ "./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ "./node_modules/@geoblocks/proj/src/EPSG_21781.js");
/* harmony import */ var gmf_authentication_module_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/authentication/module.js */ "./contribs/gmf/src/authentication/module.js");
/* harmony import */ var gmf_editing_EditFeature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gmf/editing/EditFeature.js */ "./contribs/gmf/src/editing/EditFeature.js");
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/MultiPoint.js */ "./node_modules/ol/geom/MultiPoint.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/layer/Image.js */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/source/ImageWMS.js */ "./node_modules/ol/source/ImageWMS.js");
MainController.$inject = ["$scope", "gmfEditFeature", "gmfUser"];

















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_authentication_module_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, gmf_editing_EditFeature_js__WEBPACK_IMPORTED_MODULE_6__["default"].name, gmf_map_component_js__WEBPACK_IMPORTED_MODULE_7__["default"].name]);
module.value('authenticationBaseUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].GMF_DEMO);
module.value('gmfLayersUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].GMF_LAYERS);
module.constant('defaultTheme', 'Demo');
module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');

function MainController($scope, gmfEditFeature, gmfUser) {
  this.scope_ = $scope;
  this.editFeature_ = gmfEditFeature;
  this.gmfUser = gmfUser;
  this.wmsSource_ = new ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
    projection: undefined,
    url: _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].MAPSERVER_PROXY,
    params: {
      'LAYERS': 'point'
    }
  });
  this.wmsLayer_ = new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
    source: this.wmsSource_
  });
  this.pixelBuffer_ = 10;
  this.layerId_ = 113;
  this.feature = null;
  this.pending = false;
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_15__["default"]()
    }), this.wmsLayer_],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [537635, 152640],
      zoom: 2
    })
  });
  this.map.on('singleclick', this.handleMapSingleClick_.bind(this));
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    trigger: 'hover'
  });
}

MainController.prototype.handleMapSingleClick_ = function (evt) {
  var coordinate = evt.coordinate;
  var map = this.map;
  var view = map.getView();
  var resolution = view.getResolution();
  var buffer = resolution * this.pixelBuffer_;
  var extent = ol_extent_js__WEBPACK_IMPORTED_MODULE_11__["buffer"]([coordinate[0], coordinate[1], coordinate[0], coordinate[1]], buffer);
  this.editFeature_.getFeaturesInExtent([this.layerId_], extent).then(this.handleGetFeatures_.bind(this));
  this.feature = null;
  this.pending = true;
  this.scope_.$apply();
};

MainController.prototype.handleGetFeatures_ = function (features) {
  this.pending = false;

  if (features.length) {
    this.feature = features[0];
  }
};

MainController.prototype.insertFeature = function () {
  this.pending = true;
  var map = this.map;
  var view = map.getView();
  var resolution = view.getResolution();
  var buffer = resolution * -50;
  var size = map.getSize();
  var extent = ol_extent_js__WEBPACK_IMPORTED_MODULE_11__["buffer"](view.calculateExtent(size), buffer);
  var bottomLeft = ol_extent_js__WEBPACK_IMPORTED_MODULE_11__["getBottomLeft"](extent);
  var topRight = ol_extent_js__WEBPACK_IMPORTED_MODULE_11__["getTopRight"](extent);
  var left = bottomLeft[0];
  var bottom = bottomLeft[1];
  var right = topRight[0];
  var top = topRight[1];
  var deltaX = right - left;
  var deltaY = top - bottom;
  var coordinate = [left + Math.random() * deltaX, bottom + Math.random() * deltaY];
  var feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
    'geometry': new ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_12__["default"]([coordinate]),
    'name': 'New point'
  });
  this.feature = null;
  this.editFeature_.insertFeatures(this.layerId_, [feature]).then(this.handleEditFeature_.bind(this));
};

MainController.prototype.updateFeature = function () {
  console.assert(this.feature);
  this.pending = true;
  this.feature.set('name', 'Updated name');
  this.editFeature_.updateFeature(this.layerId_, this.feature).then(this.handleEditFeature_.bind(this));
};

MainController.prototype.deleteFeature = function () {
  console.assert(this.feature);
  this.editFeature_.deleteFeature(this.layerId_, this.feature).then(this.handleEditFeature_.bind(this));
  this.feature = null;
};

MainController.prototype.handleEditFeature_ = function (resp) {
  this.pending = false;
  this.refreshWMSLayer_();
};

MainController.prototype.refreshWMSLayer_ = function () {
  this.wmsSource_.updateParams({
    'random': Math.random()
  });
};

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 7:
/*!*********************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/editfeature.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/editfeature.js */"./contribs/gmf/examples/editfeature.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGZlYXR1cmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udHJpYnMvZ21mL2V4YW1wbGVzL2VkaXRmZWF0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiZWRpdGZlYXR1cmVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNyxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwiZ21mRWRpdEZlYXR1cmVcIiwgXCJnbWZVc2VyXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgYXBwVVJMIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCAnLi9lZGl0ZmVhdHVyZS5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL3Rvb2x0aXAuanMnO1xuaW1wb3J0IEVQU0cyMTc4MSBmcm9tICdAZ2VvYmxvY2tzL3Byb2ovc3JjL0VQU0dfMjE3ODEuanMnO1xuaW1wb3J0IGdtZkF1dGhlbnRpY2F0aW9uTW9kdWxlIGZyb20gJ2dtZi9hdXRoZW50aWNhdGlvbi9tb2R1bGUuanMnO1xuaW1wb3J0IGdtZkVkaXRpbmdFZGl0RmVhdHVyZSBmcm9tICdnbWYvZWRpdGluZy9FZGl0RmVhdHVyZS5qcyc7XG5pbXBvcnQgZ21mTWFwQ29tcG9uZW50IGZyb20gJ2dtZi9tYXAvY29tcG9uZW50LmpzJztcbmltcG9ydCBvbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZS5qcyc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tICdvbC9leHRlbnQuanMnO1xuaW1wb3J0IG9sR2VvbU11bHRpUG9pbnQgZnJvbSAnb2wvZ2VvbS9NdWx0aVBvaW50LmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbExheWVySW1hZ2UgZnJvbSAnb2wvbGF5ZXIvSW1hZ2UuanMnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IG9sU291cmNlSW1hZ2VXTVMgZnJvbSAnb2wvc291cmNlL0ltYWdlV01TLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZ21mYXBwJywgWydnZXR0ZXh0JywgZ21mQXV0aGVudGljYXRpb25Nb2R1bGUubmFtZSwgZ21mRWRpdGluZ0VkaXRGZWF0dXJlLm5hbWUsIGdtZk1hcENvbXBvbmVudC5uYW1lXSk7XG5tb2R1bGUudmFsdWUoJ2F1dGhlbnRpY2F0aW9uQmFzZVVybCcsIGFwcFVSTC5HTUZfREVNTyk7XG5tb2R1bGUudmFsdWUoJ2dtZkxheWVyc1VybCcsIGFwcFVSTC5HTUZfTEFZRVJTKTtcbm1vZHVsZS5jb25zdGFudCgnZGVmYXVsdFRoZW1lJywgJ0RlbW8nKTtcbm1vZHVsZS5jb25zdGFudCgnYW5ndWxhckxvY2FsZVNjcmlwdCcsICcuLi9idWlsZC9hbmd1bGFyLWxvY2FsZV97e2xvY2FsZX19LmpzJyk7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRzY29wZSwgZ21mRWRpdEZlYXR1cmUsIGdtZlVzZXIpIHtcbiAgdGhpcy5zY29wZV8gPSAkc2NvcGU7XG4gIHRoaXMuZWRpdEZlYXR1cmVfID0gZ21mRWRpdEZlYXR1cmU7XG4gIHRoaXMuZ21mVXNlciA9IGdtZlVzZXI7XG4gIHRoaXMud21zU291cmNlXyA9IG5ldyBvbFNvdXJjZUltYWdlV01TKHtcbiAgICBwcm9qZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgdXJsOiBhcHBVUkwuTUFQU0VSVkVSX1BST1hZLFxuICAgIHBhcmFtczoge1xuICAgICAgJ0xBWUVSUyc6ICdwb2ludCdcbiAgICB9XG4gIH0pO1xuICB0aGlzLndtc0xheWVyXyA9IG5ldyBvbExheWVySW1hZ2Uoe1xuICAgIHNvdXJjZTogdGhpcy53bXNTb3VyY2VfXG4gIH0pO1xuICB0aGlzLnBpeGVsQnVmZmVyXyA9IDEwO1xuICB0aGlzLmxheWVySWRfID0gMTEzO1xuICB0aGlzLmZlYXR1cmUgPSBudWxsO1xuICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSksIHRoaXMud21zTGF5ZXJfXSxcbiAgICB2aWV3OiBuZXcgb2xWaWV3KHtcbiAgICAgIHByb2plY3Rpb246IEVQU0cyMTc4MSxcbiAgICAgIHJlc29sdXRpb25zOiBbMjAwLCAxMDAsIDUwLCAyMCwgMTAsIDUsIDIuNSwgMiwgMSwgMC41XSxcbiAgICAgIGNlbnRlcjogWzUzNzYzNSwgMTUyNjQwXSxcbiAgICAgIHpvb206IDJcbiAgICB9KVxuICB9KTtcbiAgdGhpcy5tYXAub24oJ3NpbmdsZWNsaWNrJywgdGhpcy5oYW5kbGVNYXBTaW5nbGVDbGlja18uYmluZCh0aGlzKSk7XG4gICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKHtcbiAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICB0cmlnZ2VyOiAnaG92ZXInXG4gIH0pO1xufVxuXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlTWFwU2luZ2xlQ2xpY2tfID0gZnVuY3Rpb24gKGV2dCkge1xuICB2YXIgY29vcmRpbmF0ZSA9IGV2dC5jb29yZGluYXRlO1xuICB2YXIgbWFwID0gdGhpcy5tYXA7XG4gIHZhciB2aWV3ID0gbWFwLmdldFZpZXcoKTtcbiAgdmFyIHJlc29sdXRpb24gPSB2aWV3LmdldFJlc29sdXRpb24oKTtcbiAgdmFyIGJ1ZmZlciA9IHJlc29sdXRpb24gKiB0aGlzLnBpeGVsQnVmZmVyXztcbiAgdmFyIGV4dGVudCA9IG9sRXh0ZW50LmJ1ZmZlcihbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSwgY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV0sIGJ1ZmZlcik7XG4gIHRoaXMuZWRpdEZlYXR1cmVfLmdldEZlYXR1cmVzSW5FeHRlbnQoW3RoaXMubGF5ZXJJZF9dLCBleHRlbnQpLnRoZW4odGhpcy5oYW5kbGVHZXRGZWF0dXJlc18uYmluZCh0aGlzKSk7XG4gIHRoaXMuZmVhdHVyZSA9IG51bGw7XG4gIHRoaXMucGVuZGluZyA9IHRydWU7XG4gIHRoaXMuc2NvcGVfLiRhcHBseSgpO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZUdldEZlYXR1cmVzXyA9IGZ1bmN0aW9uIChmZWF0dXJlcykge1xuICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcblxuICBpZiAoZmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgdGhpcy5mZWF0dXJlID0gZmVhdHVyZXNbMF07XG4gIH1cbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5pbnNlcnRGZWF0dXJlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICB2YXIgbWFwID0gdGhpcy5tYXA7XG4gIHZhciB2aWV3ID0gbWFwLmdldFZpZXcoKTtcbiAgdmFyIHJlc29sdXRpb24gPSB2aWV3LmdldFJlc29sdXRpb24oKTtcbiAgdmFyIGJ1ZmZlciA9IHJlc29sdXRpb24gKiAtNTA7XG4gIHZhciBzaXplID0gbWFwLmdldFNpemUoKTtcbiAgdmFyIGV4dGVudCA9IG9sRXh0ZW50LmJ1ZmZlcih2aWV3LmNhbGN1bGF0ZUV4dGVudChzaXplKSwgYnVmZmVyKTtcbiAgdmFyIGJvdHRvbUxlZnQgPSBvbEV4dGVudC5nZXRCb3R0b21MZWZ0KGV4dGVudCk7XG4gIHZhciB0b3BSaWdodCA9IG9sRXh0ZW50LmdldFRvcFJpZ2h0KGV4dGVudCk7XG4gIHZhciBsZWZ0ID0gYm90dG9tTGVmdFswXTtcbiAgdmFyIGJvdHRvbSA9IGJvdHRvbUxlZnRbMV07XG4gIHZhciByaWdodCA9IHRvcFJpZ2h0WzBdO1xuICB2YXIgdG9wID0gdG9wUmlnaHRbMV07XG4gIHZhciBkZWx0YVggPSByaWdodCAtIGxlZnQ7XG4gIHZhciBkZWx0YVkgPSB0b3AgLSBib3R0b207XG4gIHZhciBjb29yZGluYXRlID0gW2xlZnQgKyBNYXRoLnJhbmRvbSgpICogZGVsdGFYLCBib3R0b20gKyBNYXRoLnJhbmRvbSgpICogZGVsdGFZXTtcbiAgdmFyIGZlYXR1cmUgPSBuZXcgb2xGZWF0dXJlKHtcbiAgICAnZ2VvbWV0cnknOiBuZXcgb2xHZW9tTXVsdGlQb2ludChbY29vcmRpbmF0ZV0pLFxuICAgICduYW1lJzogJ05ldyBwb2ludCdcbiAgfSk7XG4gIHRoaXMuZmVhdHVyZSA9IG51bGw7XG4gIHRoaXMuZWRpdEZlYXR1cmVfLmluc2VydEZlYXR1cmVzKHRoaXMubGF5ZXJJZF8sIFtmZWF0dXJlXSkudGhlbih0aGlzLmhhbmRsZUVkaXRGZWF0dXJlXy5iaW5kKHRoaXMpKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVGZWF0dXJlID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmFzc2VydCh0aGlzLmZlYXR1cmUpO1xuICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICB0aGlzLmZlYXR1cmUuc2V0KCduYW1lJywgJ1VwZGF0ZWQgbmFtZScpO1xuICB0aGlzLmVkaXRGZWF0dXJlXy51cGRhdGVGZWF0dXJlKHRoaXMubGF5ZXJJZF8sIHRoaXMuZmVhdHVyZSkudGhlbih0aGlzLmhhbmRsZUVkaXRGZWF0dXJlXy5iaW5kKHRoaXMpKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5kZWxldGVGZWF0dXJlID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmFzc2VydCh0aGlzLmZlYXR1cmUpO1xuICB0aGlzLmVkaXRGZWF0dXJlXy5kZWxldGVGZWF0dXJlKHRoaXMubGF5ZXJJZF8sIHRoaXMuZmVhdHVyZSkudGhlbih0aGlzLmhhbmRsZUVkaXRGZWF0dXJlXy5iaW5kKHRoaXMpKTtcbiAgdGhpcy5mZWF0dXJlID0gbnVsbDtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5oYW5kbGVFZGl0RmVhdHVyZV8gPSBmdW5jdGlvbiAocmVzcCkge1xuICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgdGhpcy5yZWZyZXNoV01TTGF5ZXJfKCk7XG59O1xuXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUucmVmcmVzaFdNU0xheWVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy53bXNTb3VyY2VfLnVwZGF0ZVBhcmFtcyh7XG4gICAgJ3JhbmRvbSc6IE1hdGgucmFuZG9tKClcbiAgfSk7XG59O1xuXG5tb2R1bGUuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=