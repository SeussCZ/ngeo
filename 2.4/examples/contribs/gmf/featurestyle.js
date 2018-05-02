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
/******/ 		"featurestyle": 0
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
/******/ 	deferredModules.push([10,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/featurestyle.css":
/*!************************************************!*\
  !*** ./contribs/gmf/examples/featurestyle.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/featurestyle.js":
/*!***********************************************!*\
  !*** ./contribs/gmf/examples/featurestyle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _featurestyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featurestyle.css */ "./contribs/gmf/examples/featurestyle.css");
/* harmony import */ var _featurestyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_featurestyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gmf_drawing_featureStyleComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gmf/drawing/featureStyleComponent.js */ "./contribs/gmf/src/drawing/featureStyleComponent.js");
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/format/FeatureProperties.js */ "./src/format/FeatureProperties.js");
/* harmony import */ var ngeo_misc_FeatureHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/misc/FeatureHelper.js */ "./src/misc/FeatureHelper.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_geom_Circle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/Circle.js */ "./node_modules/ol/geom/Circle.js");
/* harmony import */ var ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/geom/LineString.js */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
MainController.$inject = ["$scope", "ngeoFeatureHelper"];

















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_drawing_featureStyleComponent_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, gmf_map_component_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, ngeo_misc_FeatureHelper_js__WEBPACK_IMPORTED_MODULE_5__["default"].name]);
module.value('ngeoMeasureDecimals', 2);
module.constant('defaultTheme', 'Demo');
module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');

function MainController($scope, ngeoFeatureHelper) {
  var _this = this;

  this.scope_ = $scope;
  this.featureHelper_ = ngeoFeatureHelper;
  var features = [];
  var pointProperties = {
    geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]([-8458215, 6672646])
  };
  pointProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].COLOR] = '#009D57';
  pointProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].NAME] = 'Point1';
  pointProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].SIZE] = '6';
  features.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"](pointProperties));
  var textProperties = {
    geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]([-8007848, 6209744])
  };
  textProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].ANGLE] = '0';
  textProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].COLOR] = '#000000';
  textProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].IS_TEXT] = true;
  textProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].NAME] = 'Text 1';
  textProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].SIZE] = '16';
  textProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].STROKE] = '2';
  features.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"](textProperties));
  var lineProperties = {
    geometry: new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_10__["default"]([[-8321240, 6523441], [-8103547, 6726458], [-8091318, 6408480], [-7973910, 6631065]])
  };
  lineProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].COLOR] = '#0BA9CC';
  lineProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].NAME] = 'LineString 1';
  lineProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].STROKE] = '4';
  features.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"](lineProperties));
  var poly1Properties = {
    geometry: new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["default"]([[[-8512027, 6359560], [-8531595, 6080718], [-8267428, 6031798], [-8238077, 6247045], [-8512027, 6359560]]])
  };
  poly1Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].COLOR] = '#4186F0';
  poly1Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].NAME] = 'Polygon 1';
  poly1Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].OPACITY] = '0.5';
  poly1Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHOW_MEASURE] = true;
  poly1Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].STROKE] = '1';
  features.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"](poly1Properties));
  var poly2Properties = {
    geometry: new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["default"]([[[-7952508, 6096617], [-8051570, 5959642], [-7848554, 5926621], [-7754383, 6025683], [-7952508, 6096617]]])
  };
  poly2Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].COLOR] = '#CCCCCC';
  poly2Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].NAME] = 'Polygon 2';
  poly2Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].OPACITY] = '1';
  poly2Properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].STROKE] = '3';
  features.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"](poly2Properties));
  var rectProperties = {
    geometry: Object(ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["fromExtent"])([-7874848, 6496535, -7730535, 6384020])
  };
  rectProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].COLOR] = '#000000';
  rectProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].IS_RECTANGLE] = true;
  rectProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].NAME] = 'Rectangle 1';
  rectProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].OPACITY] = '0.5';
  rectProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].STROKE] = '2';
  features.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"](rectProperties));
  var circleProperties = {
    geometry: Object(ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["fromCircle"])(new ol_geom_Circle_js__WEBPACK_IMPORTED_MODULE_9__["default"]([-7691093, 6166327], 35000), 64)
  };
  circleProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].COLOR] = '#000000';
  circleProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].IS_CIRCLE] = true;
  circleProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].NAME] = 'Circle 1';
  circleProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].OPACITY] = '0.5';
  circleProperties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"].STROKE] = '2';
  features.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"](circleProperties));
  var view = new ol_View_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
    center: [-8174482, 6288627],
    zoom: 6
  });
  ngeoFeatureHelper.setProjection(view.getProjection());
  features.forEach(function (feature) {
    ngeoFeatureHelper.setStyle(feature);
  });
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_15__["default"]()
    }), new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
      source: new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
        wrapX: false,
        features: features
      })
    })],
    view: view
  });
  this.selectedFeature = null;
  this.map.on('singleclick', function (evt) {
    _this.handleMapSingleClick_.bind(_this);
  });
}

MainController.prototype.handleMapSingleClick_ = function (evt) {
  var pixel = evt.pixel;
  var feature = this.map.forEachFeatureAtPixel(pixel, function (feature) {
    return feature;
  });

  if (this.selectedFeature) {
    this.featureHelper_.setStyle(this.selectedFeature);
  }

  if (feature) {
    if (this.selectedFeature !== feature) {
      this.selectedFeature = feature;
      this.featureHelper_.setStyle(feature, true);
    }
  } else {
    this.selectedFeature = null;
  }

  this.scope_.$apply();
};

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 10:
/*!**********************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/featurestyle.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/featurestyle.js */"./contribs/gmf/examples/featurestyle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXN0eWxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2NvbnRyaWJzL2dtZi9leGFtcGxlcy9mZWF0dXJlc3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJmZWF0dXJlc3R5bGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMTAsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIm5nZW9GZWF0dXJlSGVscGVyXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgJy4vZmVhdHVyZXN0eWxlLmNzcyc7XG5pbXBvcnQgZ21mRHJhd2luZ0ZlYXR1cmVTdHlsZUNvbXBvbmVudCBmcm9tICdnbWYvZHJhd2luZy9mZWF0dXJlU3R5bGVDb21wb25lbnQuanMnO1xuaW1wb3J0IGdtZk1hcENvbXBvbmVudCBmcm9tICdnbWYvbWFwL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzIGZyb20gJ25nZW8vZm9ybWF0L0ZlYXR1cmVQcm9wZXJ0aWVzLmpzJztcbmltcG9ydCBuZ2VvTWlzY0ZlYXR1cmVIZWxwZXIgZnJvbSAnbmdlby9taXNjL0ZlYXR1cmVIZWxwZXIuanMnO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlLmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3LmpzJztcbmltcG9ydCBvbEdlb21DaXJjbGUgZnJvbSAnb2wvZ2VvbS9DaXJjbGUuanMnO1xuaW1wb3J0IG9sR2VvbUxpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lU3RyaW5nLmpzJztcbmltcG9ydCBvbEdlb21Qb2ludCBmcm9tICdvbC9nZW9tL1BvaW50LmpzJztcbmltcG9ydCBvbEdlb21Qb2x5Z29uLCB7IGZyb21DaXJjbGUgYXMgb2xHZW9tUG9seWdvbkZyb21DaXJjbGUsIGZyb21FeHRlbnQgYXMgb2xHZW9tUG9seWdvbkZyb21FeHRlbnQgfSBmcm9tICdvbC9nZW9tL1BvbHlnb24uanMnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yLmpzJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNLmpzJztcbmltcG9ydCBvbFNvdXJjZVZlY3RvciBmcm9tICdvbC9zb3VyY2UvVmVjdG9yLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZ21mYXBwJywgWydnZXR0ZXh0JywgZ21mRHJhd2luZ0ZlYXR1cmVTdHlsZUNvbXBvbmVudC5uYW1lLCBnbWZNYXBDb21wb25lbnQubmFtZSwgbmdlb01pc2NGZWF0dXJlSGVscGVyLm5hbWVdKTtcbm1vZHVsZS52YWx1ZSgnbmdlb01lYXN1cmVEZWNpbWFscycsIDIpO1xubW9kdWxlLmNvbnN0YW50KCdkZWZhdWx0VGhlbWUnLCAnRGVtbycpO1xubW9kdWxlLmNvbnN0YW50KCdhbmd1bGFyTG9jYWxlU2NyaXB0JywgJy4uL2J1aWxkL2FuZ3VsYXItbG9jYWxlX3t7bG9jYWxlfX0uanMnKTtcblxuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHNjb3BlLCBuZ2VvRmVhdHVyZUhlbHBlcikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMuc2NvcGVfID0gJHNjb3BlO1xuICB0aGlzLmZlYXR1cmVIZWxwZXJfID0gbmdlb0ZlYXR1cmVIZWxwZXI7XG4gIHZhciBmZWF0dXJlcyA9IFtdO1xuICB2YXIgcG9pbnRQcm9wZXJ0aWVzID0ge1xuICAgIGdlb21ldHJ5OiBuZXcgb2xHZW9tUG9pbnQoWy04NDU4MjE1LCA2NjcyNjQ2XSlcbiAgfTtcbiAgcG9pbnRQcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5DT0xPUl0gPSAnIzAwOUQ1Nyc7XG4gIHBvaW50UHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuTkFNRV0gPSAnUG9pbnQxJztcbiAgcG9pbnRQcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TSVpFXSA9ICc2JztcbiAgZmVhdHVyZXMucHVzaChuZXcgb2xGZWF0dXJlKHBvaW50UHJvcGVydGllcykpO1xuICB2YXIgdGV4dFByb3BlcnRpZXMgPSB7XG4gICAgZ2VvbWV0cnk6IG5ldyBvbEdlb21Qb2ludChbLTgwMDc4NDgsIDYyMDk3NDRdKVxuICB9O1xuICB0ZXh0UHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuQU5HTEVdID0gJzAnO1xuICB0ZXh0UHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuQ09MT1JdID0gJyMwMDAwMDAnO1xuICB0ZXh0UHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuSVNfVEVYVF0gPSB0cnVlO1xuICB0ZXh0UHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuTkFNRV0gPSAnVGV4dCAxJztcbiAgdGV4dFByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNJWkVdID0gJzE2JztcbiAgdGV4dFByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNUUk9LRV0gPSAnMic7XG4gIGZlYXR1cmVzLnB1c2gobmV3IG9sRmVhdHVyZSh0ZXh0UHJvcGVydGllcykpO1xuICB2YXIgbGluZVByb3BlcnRpZXMgPSB7XG4gICAgZ2VvbWV0cnk6IG5ldyBvbEdlb21MaW5lU3RyaW5nKFtbLTgzMjEyNDAsIDY1MjM0NDFdLCBbLTgxMDM1NDcsIDY3MjY0NThdLCBbLTgwOTEzMTgsIDY0MDg0ODBdLCBbLTc5NzM5MTAsIDY2MzEwNjVdXSlcbiAgfTtcbiAgbGluZVByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLkNPTE9SXSA9ICcjMEJBOUNDJztcbiAgbGluZVByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLk5BTUVdID0gJ0xpbmVTdHJpbmcgMSc7XG4gIGxpbmVQcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TVFJPS0VdID0gJzQnO1xuICBmZWF0dXJlcy5wdXNoKG5ldyBvbEZlYXR1cmUobGluZVByb3BlcnRpZXMpKTtcbiAgdmFyIHBvbHkxUHJvcGVydGllcyA9IHtcbiAgICBnZW9tZXRyeTogbmV3IG9sR2VvbVBvbHlnb24oW1tbLTg1MTIwMjcsIDYzNTk1NjBdLCBbLTg1MzE1OTUsIDYwODA3MThdLCBbLTgyNjc0MjgsIDYwMzE3OThdLCBbLTgyMzgwNzcsIDYyNDcwNDVdLCBbLTg1MTIwMjcsIDYzNTk1NjBdXV0pXG4gIH07XG4gIHBvbHkxUHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuQ09MT1JdID0gJyM0MTg2RjAnO1xuICBwb2x5MVByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLk5BTUVdID0gJ1BvbHlnb24gMSc7XG4gIHBvbHkxUHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuT1BBQ0lUWV0gPSAnMC41JztcbiAgcG9seTFQcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TSE9XX01FQVNVUkVdID0gdHJ1ZTtcbiAgcG9seTFQcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TVFJPS0VdID0gJzEnO1xuICBmZWF0dXJlcy5wdXNoKG5ldyBvbEZlYXR1cmUocG9seTFQcm9wZXJ0aWVzKSk7XG4gIHZhciBwb2x5MlByb3BlcnRpZXMgPSB7XG4gICAgZ2VvbWV0cnk6IG5ldyBvbEdlb21Qb2x5Z29uKFtbWy03OTUyNTA4LCA2MDk2NjE3XSwgWy04MDUxNTcwLCA1OTU5NjQyXSwgWy03ODQ4NTU0LCA1OTI2NjIxXSwgWy03NzU0MzgzLCA2MDI1NjgzXSwgWy03OTUyNTA4LCA2MDk2NjE3XV1dKVxuICB9O1xuICBwb2x5MlByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLkNPTE9SXSA9ICcjQ0NDQ0NDJztcbiAgcG9seTJQcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5OQU1FXSA9ICdQb2x5Z29uIDInO1xuICBwb2x5MlByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLk9QQUNJVFldID0gJzEnO1xuICBwb2x5MlByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNUUk9LRV0gPSAnMyc7XG4gIGZlYXR1cmVzLnB1c2gobmV3IG9sRmVhdHVyZShwb2x5MlByb3BlcnRpZXMpKTtcbiAgdmFyIHJlY3RQcm9wZXJ0aWVzID0ge1xuICAgIGdlb21ldHJ5OiBvbEdlb21Qb2x5Z29uRnJvbUV4dGVudChbLTc4NzQ4NDgsIDY0OTY1MzUsIC03NzMwNTM1LCA2Mzg0MDIwXSlcbiAgfTtcbiAgcmVjdFByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLkNPTE9SXSA9ICcjMDAwMDAwJztcbiAgcmVjdFByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLklTX1JFQ1RBTkdMRV0gPSB0cnVlO1xuICByZWN0UHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuTkFNRV0gPSAnUmVjdGFuZ2xlIDEnO1xuICByZWN0UHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuT1BBQ0lUWV0gPSAnMC41JztcbiAgcmVjdFByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNUUk9LRV0gPSAnMic7XG4gIGZlYXR1cmVzLnB1c2gobmV3IG9sRmVhdHVyZShyZWN0UHJvcGVydGllcykpO1xuICB2YXIgY2lyY2xlUHJvcGVydGllcyA9IHtcbiAgICBnZW9tZXRyeTogb2xHZW9tUG9seWdvbkZyb21DaXJjbGUobmV3IG9sR2VvbUNpcmNsZShbLTc2OTEwOTMsIDYxNjYzMjddLCAzNTAwMCksIDY0KVxuICB9O1xuICBjaXJjbGVQcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5DT0xPUl0gPSAnIzAwMDAwMCc7XG4gIGNpcmNsZVByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLklTX0NJUkNMRV0gPSB0cnVlO1xuICBjaXJjbGVQcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5OQU1FXSA9ICdDaXJjbGUgMSc7XG4gIGNpcmNsZVByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLk9QQUNJVFldID0gJzAuNSc7XG4gIGNpcmNsZVByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNUUk9LRV0gPSAnMic7XG4gIGZlYXR1cmVzLnB1c2gobmV3IG9sRmVhdHVyZShjaXJjbGVQcm9wZXJ0aWVzKSk7XG4gIHZhciB2aWV3ID0gbmV3IG9sVmlldyh7XG4gICAgY2VudGVyOiBbLTgxNzQ0ODIsIDYyODg2MjddLFxuICAgIHpvb206IDZcbiAgfSk7XG4gIG5nZW9GZWF0dXJlSGVscGVyLnNldFByb2plY3Rpb24odmlldy5nZXRQcm9qZWN0aW9uKCkpO1xuICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgbmdlb0ZlYXR1cmVIZWxwZXIuc2V0U3R5bGUoZmVhdHVyZSk7XG4gIH0pO1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKClcbiAgICB9KSwgbmV3IG9sTGF5ZXJWZWN0b3Ioe1xuICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VWZWN0b3Ioe1xuICAgICAgICB3cmFwWDogZmFsc2UsXG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgICAgfSlcbiAgICB9KV0sXG4gICAgdmlldzogdmlld1xuICB9KTtcbiAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBudWxsO1xuICB0aGlzLm1hcC5vbignc2luZ2xlY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgX3RoaXMuaGFuZGxlTWFwU2luZ2xlQ2xpY2tfLmJpbmQoX3RoaXMpO1xuICB9KTtcbn1cblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZU1hcFNpbmdsZUNsaWNrXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgdmFyIHBpeGVsID0gZXZ0LnBpeGVsO1xuICB2YXIgZmVhdHVyZSA9IHRoaXMubWFwLmZvckVhY2hGZWF0dXJlQXRQaXhlbChwaXhlbCwgZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZTtcbiAgfSk7XG5cbiAgaWYgKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgdGhpcy5mZWF0dXJlSGVscGVyXy5zZXRTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZSAhPT0gZmVhdHVyZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgdGhpcy5mZWF0dXJlSGVscGVyXy5zZXRTdHlsZShmZWF0dXJlLCB0cnVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBudWxsO1xuICB9XG5cbiAgdGhpcy5zY29wZV8uJGFwcGx5KCk7XG59O1xuXG5tb2R1bGUuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=