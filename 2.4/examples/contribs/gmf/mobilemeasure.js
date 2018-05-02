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
/******/ 		"mobilemeasure": 0
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
/******/ 	deferredModules.push([16,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/mobilemeasure.css":
/*!*************************************************!*\
  !*** ./contribs/gmf/examples/mobilemeasure.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/mobilemeasure.js":
/*!************************************************!*\
  !*** ./contribs/gmf/examples/mobilemeasure.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _mobilemeasure_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobilemeasure.css */ "./contribs/gmf/examples/mobilemeasure.css");
/* harmony import */ var _mobilemeasure_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mobilemeasure_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var gmf_permalink_Permalink_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/permalink/Permalink.js */ "./contribs/gmf/src/permalink/Permalink.js");
/* harmony import */ var gmf_mobile_measure_areaComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/mobile/measure/areaComponent.js */ "./contribs/gmf/src/mobile/measure/areaComponent.js");
/* harmony import */ var gmf_mobile_measure_lengthComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gmf/mobile/measure/lengthComponent.js */ "./contribs/gmf/src/mobile/measure/lengthComponent.js");
/* harmony import */ var gmf_mobile_measure_pointComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gmf/mobile/measure/pointComponent.js */ "./contribs/gmf/src/mobile/measure/pointComponent.js");
/* harmony import */ var ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/misc/btnComponent.js */ "./src/misc/btnComponent.js");
/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ "./node_modules/@geoblocks/proj/src/EPSG_21781.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_control_ScaleLine_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/control/ScaleLine.js */ "./node_modules/ol/control/ScaleLine.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
MainController.$inject = ["gmfPermalink"];















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_map_component_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, gmf_permalink_Permalink_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_mobile_measure_areaComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, gmf_mobile_measure_lengthComponent_js__WEBPACK_IMPORTED_MODULE_6__["default"].name, gmf_mobile_measure_pointComponent_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_8__["default"].name]);
module.value('gmfRasterUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].RASTER);
module.constant('defaultTheme', 'Demo');
module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');

function MainController(gmfPermalink) {
  var center = gmfPermalink.getMapCenter() || [537635, 152640];
  var zoom = gmfPermalink.getMapZoom() || 3;
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_14__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_9__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: center,
      zoom: zoom
    })
  });
  this.map.addControl(new ol_control_ScaleLine_js__WEBPACK_IMPORTED_MODULE_12__["default"]());
  this.measureAreaActive = false;
  this.measureLengthActive = false;
  this.measurePointLayersConfig = [{
    name: 'aster',
    unit: 'm',
    decimals: 2
  }, {
    name: 'srtm',
    unit: 'm'
  }];
  this.measurePointActive = false;
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/areaComponent.js":
/*!**********************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/areaComponent.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/filters.js */ "./src/misc/filters.js");
/* harmony import */ var ngeo_interaction_MeasureAreaMobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/interaction/MeasureAreaMobile.js */ "./src/interaction/MeasureAreaMobile.js");
/* harmony import */ var gmf_mobile_measure_baseComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/mobile/measure/baseComponent.js */ "./contribs/gmf/src/mobile/measure/baseComponent.js");
mobileMeasureAreaComponent.$inject = ["gmfMobileMeasureAreaTemplateUrl"];

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfMobileMeasureArea', [ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
module.value('gmfMobileMeasureAreaTemplateUrl', function (element, attrs) {
  var templateUrl = attrs['gmfMobileMeasureAreaTemplateurl'];
  return templateUrl !== undefined ? templateUrl : 'gmf/measure/areaComponent';
});
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('gmf/measure/areaComponent', __webpack_require__(/*! ./baseComponent.html */ "./contribs/gmf/src/mobile/measure/baseComponent.html"));
}]);

function mobileMeasureAreaComponent(gmfMobileMeasureAreaTemplateUrl) {
  return {
    restrict: 'A',
    scope: {
      'active': '=gmfMobileMeasureareaActive',
      'precision': '<?gmfMobileMeasureareaPrecision',
      'map': '=gmfMobileMeasureareaMap',
      'sketchStyle': '=?gmfMobileMeasureareaSketchstyle'
    },
    controller: 'GmfMobileMeasureAreaController as ctrl',
    bindToController: true,
    templateUrl: gmfMobileMeasureAreaTemplateUrl,
    link: function link(scope, element, attrs, controller) {
      controller.init();
    }
  };
}

module.directive('gmfMobileMeasurearea', mobileMeasureAreaComponent);

var Controller = function (_MeasueMobileBaseCont) {
  Controller.$inject = ["$scope", "$filter", "gettextCatalog"];

  _inheritsLoose(Controller, _MeasueMobileBaseCont);

  function Controller($scope, $filter, gettextCatalog) {
    var _this;

    _this = _MeasueMobileBaseCont.call(this, $scope, $filter, gettextCatalog) || this;
    _this.measure;
    return _this;
  }

  var _proto = Controller.prototype;

  _proto.init = function init() {
    this.measure = new ngeo_interaction_MeasureAreaMobile_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.filter('ngeoUnitPrefix'), this.gettextCatalog, {
      precision: this.precision,
      sketchStyle: this.sketchStyle
    });

    _MeasueMobileBaseCont.prototype.init.call(this);
  };

  _proto.addPoint = function addPoint() {
    this.drawInteraction.addToDrawing();
  };

  _proto.clear = function clear() {
    this.drawInteraction.clearDrawing();
  };

  _proto.finish = function finish() {
    this.drawInteraction.finishDrawing();
  };

  _proto.deactivate = function deactivate() {
    this.active = false;
  };

  return Controller;
}(gmf_mobile_measure_baseComponent_js__WEBPACK_IMPORTED_MODULE_3__["MeasueMobileBaseController"]);

module.controller('GmfMobileMeasureAreaController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/baseComponent.html":
/*!************************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/baseComponent.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<a class="btn btn-default"\n   ng-if="ctrl.drawing && (!ctrl.valid)"\n   ng-click="ctrl.addPoint()">\n     <span class="fa fa-check"></span>\n     {{\'Set as starting point\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.dirty"\n   ng-click="ctrl.addPoint()">\n     <span class="fa fa-plus"></span>\n     {{\'Add new point\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.drawing && ctrl.valid && !ctrl.dirty"\n   ng-click="ctrl.finish()">\n     <span class="fa fa-check"></span>\n     {{\'Terminate\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.valid"\n   ng-click="ctrl.clear()">\n     <span class="fa fa-repeat"></span>\n     {{\'Clear\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.active"\n   ng-click="ctrl.deactivate()">\n     <span class="fa fa-times"></span>\n     {{\'Close\' | translate}}\n</a>\n';

}
return __p
}

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/baseComponent.js":
/*!**********************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/baseComponent.js ***!
  \**********************************************************/
/*! exports provided: MeasueMobileBaseController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasueMobileBaseController", function() { return MeasueMobileBaseController; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/decorate.js */ "./src/misc/decorate.js");
/* harmony import */ var ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/misc/filters.js */ "./src/misc/filters.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/style/RegularShape.js */ "./node_modules/ol/style/RegularShape.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
MeasueMobileBaseController.$inject = ["$scope", "$filter", "gettextCatalog"];








var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfMobileMeasureBase', [ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
function MeasueMobileBaseController($scope, $filter, gettextCatalog) {
  var _this = this;

  this.scope = $scope;
  this.filter = $filter;
  this.gettextCatalog = gettextCatalog;
  this.map;
  this.active;
  this.scope.$watch(function () {
    return _this.active;
  }, function (newVal) {
    _this.measure.setActive(newVal);
  });
  this.precision;
  this.sketchStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      color: 'rgba(255, 255, 255, 0.2)'
    }),
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
      color: 'rgba(0, 0, 0, 0.5)',
      lineDash: [10, 10],
      width: 2
    }),
    image: new ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        color: 'rgba(0, 0, 0, 0.7)',
        width: 2
      }),
      points: 4,
      radius: 8,
      radius2: 0,
      angle: 0
    })
  });
  this.measure;
  this.drawInteraction;
  this.dirty = false;
  this.drawing = false;
  this.valid = false;
}

MeasueMobileBaseController.prototype.init = function () {
  var _this2 = this;

  this.measure.setActive(this.active);
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_1__["interactionDecoration"])(this.measure);
  this.drawInteraction = this.measure.getDrawInteraction();
  var drawInteraction = this.drawInteraction;
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_1__["interactionDecoration"])(drawInteraction);
  Object.defineProperty(this, 'hasPoints', {
    get: function get() {
      return this.drawInteraction.getFeature() !== null;
    }
  });
  ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](drawInteraction, 'change:dirty', function (evt) {
    _this2.dirty = drawInteraction.getDirty();

    if (_this2.dirty) {
      _this2.scope.$apply();
    }
  }, this);
  ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](drawInteraction, 'change:drawing', function (evt) {
    _this2.drawing = drawInteraction.getDrawing();
  }, this);
  ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](drawInteraction, 'change:valid', function (evt) {
    _this2.valid = drawInteraction.getValid();
  }, this);
  this.map.addInteraction(this.measure);
};

module.controller('gmfMeasueMobileBaseController', MeasueMobileBaseController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/lengthComponent.js":
/*!************************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/lengthComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/filters.js */ "./src/misc/filters.js");
/* harmony import */ var ngeo_interaction_MeasureLengthMobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/interaction/MeasureLengthMobile.js */ "./src/interaction/MeasureLengthMobile.js");
/* harmony import */ var gmf_mobile_measure_baseComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/mobile/measure/baseComponent.js */ "./contribs/gmf/src/mobile/measure/baseComponent.js");
mobileMeasureLenthComponent.$inject = ["gmfMobileMeasureLengthTemplateUrl"];

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfMobileMeasureLength', [ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
module.value('gmfMobileMeasureLengthTemplateUrl', function (element, attrs) {
  var templateUrl = attrs['gmfMobileMeasureLengthTemplateurl'];
  return templateUrl !== undefined ? templateUrl : 'gmf/measure/lengthComponent';
});
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('gmf/measure/lengthComponent', __webpack_require__(/*! ./baseComponent.html */ "./contribs/gmf/src/mobile/measure/baseComponent.html"));
}]);

function mobileMeasureLenthComponent(gmfMobileMeasureLengthTemplateUrl) {
  return {
    restrict: 'A',
    scope: {
      'active': '=gmfMobileMeasurelengthActive',
      'precision': '<?gmfMobileMeasurelengthPrecision',
      'map': '=gmfMobileMeasurelengthMap',
      'sketchStyle': '=?gmfMobileMeasurelengthSketchstyle'
    },
    controller: 'GmfMobileMeasureLengthController as ctrl',
    bindToController: true,
    templateUrl: gmfMobileMeasureLengthTemplateUrl,
    link: function link(scope, element, attrs, controller) {
      controller.init();
    }
  };
}

module.directive('gmfMobileMeasurelength', mobileMeasureLenthComponent);

var Controller = function (_MeasueMobileBaseCont) {
  Controller.$inject = ["$scope", "$filter", "gettextCatalog"];

  _inheritsLoose(Controller, _MeasueMobileBaseCont);

  function Controller($scope, $filter, gettextCatalog) {
    var _this;

    _this = _MeasueMobileBaseCont.call(this, $scope, $filter, gettextCatalog) || this;
    _this.measure;
    return _this;
  }

  var _proto = Controller.prototype;

  _proto.init = function init() {
    this.measure = new ngeo_interaction_MeasureLengthMobile_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.filter('ngeoUnitPrefix'), this.gettextCatalog, {
      precision: this.precision,
      sketchStyle: this.sketchStyle
    });

    _MeasueMobileBaseCont.prototype.init.call(this);
  };

  _proto.addPoint = function addPoint() {
    this.drawInteraction.addToDrawing();
  };

  _proto.clear = function clear() {
    this.drawInteraction.clearDrawing();
  };

  _proto.finish = function finish() {
    this.drawInteraction.finishDrawing();
  };

  _proto.deactivate = function deactivate() {
    this.active = false;
  };

  return Controller;
}(gmf_mobile_measure_baseComponent_js__WEBPACK_IMPORTED_MODULE_3__["MeasueMobileBaseController"]);

module.controller('GmfMobileMeasureLengthController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/pointComponent.html":
/*!*************************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/pointComponent.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<a class="btn btn-default"\n   ng-if="ctrl.active"\n   ng-click="ctrl.deactivate()">\n     <span class="fa fa-times"></span>\n     {{\'Close\' | translate}}\n</a>\n';

}
return __p
}

/***/ }),

/***/ "./contribs/gmf/src/mobile/measure/pointComponent.js":
/*!***********************************************************!*\
  !*** ./contribs/gmf/src/mobile/measure/pointComponent.js ***!
  \***********************************************************/
/*! exports provided: MobileMeasurePointController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMeasurePointController", function() { return MobileMeasurePointController; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gmf_raster_RasterService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gmf/raster/RasterService.js */ "./contribs/gmf/src/raster/RasterService.js");
/* harmony import */ var ngeo_interaction_MeasurePointMobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/interaction/MeasurePointMobile.js */ "./src/interaction/MeasurePointMobile.js");
/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/misc/decorate.js */ "./src/misc/decorate.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/RegularShape.js */ "./node_modules/ol/style/RegularShape.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
MobileMeasurePointController.$inject = ["gettextCatalog", "$scope", "$filter", "gmfRaster", "ngeoDebounce"];
mobileMeasurePointComponent.$inject = ["gmfMobileMeasurePointTemplateUrl"];










var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfMobileMeasurePoint', [gmf_raster_RasterService_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_3__["default"].name]);
module.value('gmfMobileMeasurePointTemplateUrl', function (element, attrs) {
  var templateUrl = attrs['gmfMobileMeasurePointTemplateurl'];
  return templateUrl !== undefined ? templateUrl : 'gmf/measure/pointComponent';
});
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('gmf/measure/pointComponent', __webpack_require__(/*! ./pointComponent.html */ "./contribs/gmf/src/mobile/measure/pointComponent.html"));
}]);

function mobileMeasurePointComponent(gmfMobileMeasurePointTemplateUrl) {
  return {
    restrict: 'A',
    scope: {
      'active': '=gmfMobileMeasurepointActive',
      'getCoordinateDecimalsFn': '&?gmfMobileMeasurepointCoordinatedecimals',
      'getLayersConfigFn': '&gmfMobileMeasurepointLayersconfig',
      'map': '=gmfMobileMeasurepointMap',
      'sketchStyle': '=?gmfMobileMeasurepointSketchstyle',
      'format': '<gmfMobileMeasurepointFormat'
    },
    controller: 'GmfMobileMeasurePointController as ctrl',
    bindToController: true,
    templateUrl: gmfMobileMeasurePointTemplateUrl,
    link: function link(scope, element, attrs, controller) {
      controller.init();
    }
  };
}

module.directive('gmfMobileMeasurepoint', mobileMeasurePointComponent);
function MobileMeasurePointController(gettextCatalog, $scope, $filter, gmfRaster, ngeoDebounce) {
  var _this = this;

  this.gmfRaster_ = gmfRaster;
  this.ngeoDebounce_ = ngeoDebounce;
  this.gettextCatalog_ = gettextCatalog;
  this.$filter_ = $filter;
  this.map;
  this.active;
  $scope.$watch(function () {
    return _this.active;
  }, function (newVal) {
    _this.measure.setActive(newVal);

    _this.handleMeasureActiveChange_();
  });
  var coordinateDecimalsFn = this['getCoordinateDecimalsFn'];
  this.coordinateDecimals = coordinateDecimalsFn ? coordinateDecimalsFn() : 0;
  this.layersConfig;
  this.sketchStyle;

  if (this.sketchStyle === undefined) {
    this.sketchStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        color: 'rgba(0, 0, 0, 0.5)',
        lineDash: [10, 10],
        width: 2
      }),
      image: new ol_style_RegularShape_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
          color: 'rgba(0, 0, 0, 0.7)',
          width: 2
        }),
        points: 4,
        radius: 8,
        radius2: 0,
        angle: 0
      })
    });
  }

  this.format;
  this.measure;
  this.drawInteraction;
  this.mapViewPropertyChangeEventKey_ = null;
}

MobileMeasurePointController.prototype.init = function () {
  this.measure = new ngeo_interaction_MeasurePointMobile_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.$filter_('ngeoNumberCoordinates'), this.format || '{x}, {y}', {
    decimals: this.coordinateDecimals,
    sketchStyle: this.sketchStyle
  });
  this.measure.setActive(this.active);
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_4__["interactionDecoration"])(this.measure);
  this.drawInteraction = this.measure.getDrawInteraction();
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_4__["interactionDecoration"])(this.drawInteraction);
  var layersConfig = this['getLayersConfigFn']();
  console.assert(Array.isArray(layersConfig));
  this.layersConfig = layersConfig;
  this.map.addInteraction(this.measure);
};

MobileMeasurePointController.prototype.deactivate = function () {
  this.active = false;
};

MobileMeasurePointController.prototype.translate = function (str) {
  return this.gettextCatalog_.getString(str);
};

MobileMeasurePointController.prototype.handleMeasureActiveChange_ = function () {
  if (this.measure.getActive()) {
    var view = this.map.getView();
    this.mapViewPropertyChangeEventKey_ = ol_events_js__WEBPACK_IMPORTED_MODULE_5__["listen"](view, 'propertychange', this.ngeoDebounce_(this.getMeasure_.bind(this), 300, true), this);
    this.getMeasure_();
  } else if (this.mapViewPropertyChangeEventKey_) {
    ol_events_js__WEBPACK_IMPORTED_MODULE_5__["unlistenByKey"](this.mapViewPropertyChangeEventKey_);
    this.mapViewPropertyChangeEventKey_ = null;
  }
};

MobileMeasurePointController.prototype.getMeasure_ = function () {
  var _this2 = this;

  var center = this.map.getView().getCenter();
  console.assert(Array.isArray(center));
  var params = {
    'layers': this.layersConfig.map(function (config) {
      return config.name;
    }).join(',')
  };
  this.gmfRaster_.getRaster(center, params).then(function (object) {
    var el = _this2.measure.getTooltipElement();

    var ctn = document.createElement('div');
    var className = 'gmf-mobile-measure-point';
    ctn.className = className;

    for (var _iterator = _this2.layersConfig, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var config = _ref;
      var key = config.name;

      if (key in object) {
        var value = object[key];
        var childEl = document.createElement('div');
        childEl.className = "gmf-mobile-measure-point-" + key;
        var unit = config.unit || '';
        var decimals = config.decimals > 0 ? config.decimals : 0;
        value = _this2.$filter_('number')(value, decimals);
        childEl.innerHTML = [_this2.translate(key), ': ', value, ' ', unit].join('');
        ctn.appendChild(childEl);
      }
    }

    var previousCtn = el.getElementsByClassName(className);

    if (previousCtn[0]) {
      previousCtn[0].remove();
    }

    el.appendChild(ctn);
  });
};

module.controller('GmfMobileMeasurePointController', MobileMeasurePointController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/interaction/MeasureAreaMobile.js":
/*!**********************************************!*\
  !*** ./src/interaction/MeasureAreaMobile.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_interaction_MeasureArea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/interaction/MeasureArea.js */ "./src/interaction/MeasureArea.js");
/* harmony import */ var ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/interaction/MobileDraw.js */ "./src/interaction/MobileDraw.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var MeasureAreaMobile = function (_ngeoInteractionMeasu) {
  _inheritsLoose(MeasureAreaMobile, _ngeoInteractionMeasu);

  function MeasureAreaMobile(format, gettextCatalog, options) {
    if (options === void 0) {
      options = {};
    }

    Object.assign(options, {
      displayHelpTooltip: false
    });
    return _ngeoInteractionMeasu.call(this, format, gettextCatalog, options) || this;
  }

  var _proto = MeasureAreaMobile.prototype;

  _proto.createDrawInteraction = function createDrawInteraction(style, source) {
    return new ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      type: 'Polygon',
      style: style,
      source: source
    });
  };

  return MeasureAreaMobile;
}(ngeo_interaction_MeasureArea_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MeasureAreaMobile);

/***/ }),

/***/ "./src/interaction/MeasureLengthMobile.js":
/*!************************************************!*\
  !*** ./src/interaction/MeasureLengthMobile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var ngeo_interaction_MeasureLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/interaction/MeasureLength.js */ "./src/interaction/MeasureLength.js");
/* harmony import */ var ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/interaction/MobileDraw.js */ "./src/interaction/MobileDraw.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var _default = function (_ngeoInteractionMeasu) {
  _inheritsLoose(_default, _ngeoInteractionMeasu);

  function _default(format, gettextCatalog, opt_options) {
    var options = opt_options !== undefined ? opt_options : {};
    Object.assign(options, {
      displayHelpTooltip: false
    });
    return _ngeoInteractionMeasu.call(this, format, gettextCatalog, options) || this;
  }

  var _proto = _default.prototype;

  _proto.createDrawInteraction = function createDrawInteraction(style, source) {
    return new ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      type: 'LineString',
      style: style,
      source: source
    });
  };

  return _default;
}(ngeo_interaction_MeasureLength_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/interaction/MeasurePointMobile.js":
/*!***********************************************!*\
  !*** ./src/interaction/MeasurePointMobile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var ngeo_interaction_Measure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/interaction/Measure.js */ "./src/interaction/Measure.js");
/* harmony import */ var ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/interaction/MobileDraw.js */ "./src/interaction/MobileDraw.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var _default = function (_ngeoInteractionMeasu) {
  _inheritsLoose(_default, _ngeoInteractionMeasu);

  function _default(format, coordFormat, options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    Object.assign(options, {
      displayHelpTooltip: false
    });
    _this = _ngeoInteractionMeasu.call(this, options) || this;
    _this.format_ = format;
    _this.coordFormat_ = coordFormat;
    return _this;
  }

  var _proto = _default.prototype;

  _proto.createDrawInteraction = function createDrawInteraction(style, source) {
    return new ngeo_interaction_MobileDraw_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      type: 'Point',
      style: style,
      source: source
    });
  };

  _proto.handleMeasure = function handleMeasure(callback) {
    var geom = this.sketchFeature.getGeometry();
    var dec = this.decimals;
    var output = Object(ngeo_interaction_Measure_js__WEBPACK_IMPORTED_MODULE_0__["getFormattedPoint"])(geom, dec, this.format_, this.coordFormat_);
    var coord = geom.getLastCoordinate();
    callback(output, coord);
  };

  return _default;
}(ngeo_interaction_Measure_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/interaction/MobileDraw.js":
/*!***************************************!*\
  !*** ./src/interaction/MobileDraw.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var ngeo_interaction_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/interaction/common.js */ "./src/interaction/common.js");
/* harmony import */ var ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/CustomEvent.js */ "./src/CustomEvent.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/functions.js */ "./node_modules/ol/functions.js");
/* harmony import */ var ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/geom/LineString.js */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/SimpleGeometry.js */ "./node_modules/ol/geom/SimpleGeometry.js");
/* harmony import */ var ol_interaction_Interaction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/interaction/Interaction.js */ "./node_modules/ol/interaction/Interaction.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }














var _default = function (_olInteractionInterac) {
  _inheritsLoose(_default, _olInteractionInterac);

  function _default(options) {
    var _this;

    _this = _olInteractionInterac.call(this, {
      handleEvent: ol_functions_js__WEBPACK_IMPORTED_MODULE_4__["TRUE"]
    }) || this;
    _this.changeEventKey_ = null;
    _this.type_ = options.type;
    _this.minPoints_ = options.minPoints ? options.minPoints : _this.type_ === 'Polygon' ? 3 : 2;
    _this.sketchFeature_ = null;
    _this.sketchPoints_ = [];
    _this.sketchPoint_ = null;
    _this.overlay_ = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      source: new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
        useSpatialIndex: false,
        wrapX: options.wrapX ? options.wrapX : false
      }),
      style: options.style || Object(ngeo_interaction_common_js__WEBPACK_IMPORTED_MODULE_0__["getDefaultDrawStyleFunction"])(),
      updateWhileAnimating: true,
      updateWhileInteracting: true
    });
    ol_events_js__WEBPACK_IMPORTED_MODULE_2__["listen"](_assertThisInitialized(_this), 'change:active', _this.updateState_, _assertThisInitialized(_this));

    _this.set('dirty', false);

    _this.set('drawing', false);

    _this.set('valid', false);

    return _this;
  }

  var _proto = _default.prototype;

  _proto.setMap = function setMap(map) {
    var currentMap = this.getMap();

    if (currentMap) {
      if (this.changeEventKey_) {
        ol_events_js__WEBPACK_IMPORTED_MODULE_2__["unlistenByKey"](this.changeEventKey_);
      }
    }

    ol_interaction_Interaction_js__WEBPACK_IMPORTED_MODULE_9__["default"].prototype.setMap.call(this, map);

    if (map) {
      this.changeEventKey_ = ol_events_js__WEBPACK_IMPORTED_MODULE_2__["listen"](map.getView(), 'change:center', this.handleViewCenterChange_, this);
    }

    this.updateState_();
  };

  _proto.getDirty = function getDirty() {
    return this.get('dirty');
  };

  _proto.getDrawing = function getDrawing() {
    return this.get('drawing');
  };

  _proto.getValid = function getValid() {
    return this.get('valid');
  };

  _proto.getFeature = function getFeature() {
    return this.sketchFeature_;
  };

  _proto.addToDrawing = function addToDrawing() {
    var active = this.getActive();
    var drawing = this.getDrawing();

    if (!active || !drawing) {
      return;
    }

    var sketchFeatureGeom;
    var sketchPointGeom = this.getSketchPointGeometry_();
    var coordinate = sketchPointGeom.getCoordinates();
    var coordinates;

    if (this.type_ === 'Point') {
      if (!this.sketchFeature_) {
        this.sketchFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"](new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](coordinate));
        var event = new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_1__["default"]('drawstart', {
          feature: this.sketchFeature_
        });
        this.dispatchEvent(event);
      }

      sketchFeatureGeom = this.sketchFeature_.getGeometry();

      if (sketchFeatureGeom instanceof ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
        sketchFeatureGeom.setCoordinates(coordinate);
      }

      return;
    }

    if (this.type_ === 'LineString') {
      this.sketchPoints_.push(this.sketchPoint_);

      if (!this.sketchFeature_) {
        coordinates = [coordinate.slice(), coordinate.slice()];
        this.sketchFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"](new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_5__["default"](coordinates));

        var _event = new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_1__["default"]('drawstart', {
          feature: this.sketchFeature_
        });

        this.dispatchEvent(_event);
      } else {
        sketchFeatureGeom = this.sketchFeature_.getGeometry();

        if (sketchFeatureGeom instanceof ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          coordinates = sketchFeatureGeom.getCoordinates();
          coordinates.push(coordinate.slice());
          sketchFeatureGeom.setCoordinates(coordinates);
        }
      }
    }

    if (this.type_ === 'Polygon') {
      this.sketchPoints_.push(this.sketchPoint_);

      if (!this.sketchFeature_) {
        coordinates = [coordinate.slice(), coordinate.slice(), coordinate.slice()];
        this.sketchFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"](new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_7__["default"]([coordinates]));

        var _event2 = new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_1__["default"]('drawstart', {
          feature: this.sketchFeature_
        });

        this.dispatchEvent(_event2);
      } else {
        sketchFeatureGeom = this.sketchFeature_.getGeometry();

        if (sketchFeatureGeom instanceof ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
          var coordinatess = sketchFeatureGeom.getCoordinates();
          coordinates = coordinatess[0];
          coordinates.push(coordinate.slice());
          sketchFeatureGeom.setCoordinates(coordinatess);
        }
      }
    }

    var dirty = this.getDirty();

    if (dirty) {
      this.set('dirty', false);
    }

    var valid = this.getValid();

    if (this.type_ === 'LineString' || this.type_ === 'Polygon') {
      if (coordinates.length >= this.minPoints_) {
        if (!valid) {
          this.set('valid', true);
        }
      } else {
        if (valid) {
          this.set('valid', false);
        }
      }
    }

    this.sketchPoint_ = null;
    this.updateSketchFeatures_();
  };

  _proto.clearDrawing = function clearDrawing() {
    this.setActive(false);
    this.setActive(true);
  };

  _proto.finishDrawing = function finishDrawing() {
    var active = this.getActive();
    var drawing = this.getDrawing();

    if (!active || !drawing) {
      return;
    }

    if (this.sketchPoint_) {
      this.addToDrawing();
    }

    this.set('drawing', false);
    var event = new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_1__["default"]('drawend', {
      feature: this.sketchFeature_
    });
    this.dispatchEvent(event);
  };

  _proto.startDrawing_ = function startDrawing_() {
    this.set('drawing', true);
    this.createOrUpdateSketchPoint_();
    this.updateSketchFeatures_();

    if (this.type_ === 'Point') {
      this.addToDrawing();
    }
  };

  _proto.modifyDrawing_ = function modifyDrawing_() {
    if (!this.sketchFeature_) {
      return;
    }

    var center = this.getCenter_();

    if (this.type_ === 'LineString') {
      var sketchFeatureGeom = this.sketchFeature_.getGeometry();

      if (sketchFeatureGeom instanceof ol_geom_SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
        var coordinates = sketchFeatureGeom.getCoordinates();
        coordinates.pop();
        coordinates.push(center);
        sketchFeatureGeom.setCoordinates(coordinates);
      }
    } else if (this.type_ === 'Polygon') {
      var _sketchFeatureGeom = this.sketchFeature_.getGeometry();

      if (_sketchFeatureGeom instanceof ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
        var coordinatess = _sketchFeatureGeom.getCoordinates();

        var _coordinates = coordinatess[0];

        _coordinates.pop();

        _coordinates.push(center);

        _sketchFeatureGeom.setCoordinates([_coordinates]);
      }
    }

    var dirty = this.getDirty();

    if (!dirty) {
      this.set('dirty', true);
    }
  };

  _proto.abortDrawing_ = function abortDrawing_() {
    var sketchFeature = this.sketchFeature_;

    if (sketchFeature || this.sketchPoints_.length > 0) {
      this.sketchFeature_ = null;
      this.sketchPoint_ = null;
      this.overlay_.getSource().clear(true);
    }

    this.sketchPoints_ = [];
    this.set('dirty', false);
    this.set('drawing', false);
    this.set('valid', false);
    return sketchFeature;
  };

  _proto.updateState_ = function updateState_() {
    var map = this.getMap();
    var active = this.getActive();

    if (!map || !active) {
      this.abortDrawing_();
    } else {
      this.startDrawing_();
    }

    this.overlay_.setMap(active ? map : null);
  };

  _proto.handleViewCenterChange_ = function handleViewCenterChange_(evt) {
    var active = this.getActive();
    var drawing = this.getDrawing();

    if (!active || !drawing) {
      return;
    }

    this.createOrUpdateSketchPoint_();

    if (this.type_ === 'Point') {
      this.addToDrawing();
    } else {
      this.modifyDrawing_();
      this.updateSketchFeatures_();
    }
  };

  _proto.createOrUpdateSketchPoint_ = function createOrUpdateSketchPoint_() {
    var center = this.getCenter_();

    if (this.sketchPoint_) {
      var geometry = this.getSketchPointGeometry_();
      geometry.setCoordinates(center);
    } else {
      this.sketchPoint_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"](new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](center));
    }
  };

  _proto.updateSketchFeatures_ = function updateSketchFeatures_() {
    var sketchFeatures = [];

    if (this.sketchFeature_) {
      sketchFeatures.push(this.sketchFeature_);
    }

    if (this.sketchPoint_) {
      sketchFeatures.push(this.sketchPoint_);
    }

    var overlaySource = this.overlay_.getSource();
    overlaySource.clear(true);
    overlaySource.addFeatures(sketchFeatures);
    overlaySource.addFeatures(this.sketchPoints_);
  };

  _proto.getSketchPointGeometry_ = function getSketchPointGeometry_() {
    console.assert(this.sketchPoint_, 'sketch point should be thruty');
    var geometry = this.sketchPoint_.getGeometry();

    if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      return geometry;
    } else {
      throw 'Wrong geometry type';
    }
  };

  _proto.getCenter_ = function getCenter_() {
    var center = this.getMap().getView().getCenter();
    console.assert(Array.isArray(center));
    return center;
  };

  return _default;
}(ol_interaction_Interaction_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ 16:
/*!***********************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/mobilemeasure.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/mobilemeasure.js */"./contribs/gmf/examples/mobilemeasure.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlbWVhc3VyZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvZXhhbXBsZXMvbW9iaWxlbWVhc3VyZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvc3JjL21vYmlsZS9tZWFzdXJlL2FyZWFDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJpYnMvZ21mL3NyYy9tb2JpbGUvbWVhc3VyZS9iYXNlQ29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29udHJpYnMvZ21mL3NyYy9tb2JpbGUvbWVhc3VyZS9iYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbnRyaWJzL2dtZi9zcmMvbW9iaWxlL21lYXN1cmUvbGVuZ3RoQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbnRyaWJzL2dtZi9zcmMvbW9iaWxlL21lYXN1cmUvcG9pbnRDb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvc3JjL21vYmlsZS9tZWFzdXJlL3BvaW50Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9NZWFzdXJlQXJlYU1vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb24vTWVhc3VyZUxlbmd0aE1vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb24vTWVhc3VyZVBvaW50TW9iaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmFjdGlvbi9Nb2JpbGVEcmF3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibW9iaWxlbWVhc3VyZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsxNixcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiZ21mUGVybWFsaW5rXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgYXBwVVJMIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCAnLi9tb2JpbGVtZWFzdXJlLmNzcyc7XG5pbXBvcnQgZ21mTWFwQ29tcG9uZW50IGZyb20gJ2dtZi9tYXAvY29tcG9uZW50LmpzJztcbmltcG9ydCBnbWZQZXJtYWxpbmtQZXJtYWxpbmsgZnJvbSAnZ21mL3Blcm1hbGluay9QZXJtYWxpbmsuanMnO1xuaW1wb3J0IGdtZk1vYmlsZU1lYXN1cmVBcmVhQ29tcG9uZW50IGZyb20gJ2dtZi9tb2JpbGUvbWVhc3VyZS9hcmVhQ29tcG9uZW50LmpzJztcbmltcG9ydCBnbWZNb2JpbGVNZWFzdXJlTGVuZ3RoQ29tcG9uZW50IGZyb20gJ2dtZi9tb2JpbGUvbWVhc3VyZS9sZW5ndGhDb21wb25lbnQuanMnO1xuaW1wb3J0IGdtZk1vYmlsZU1lYXN1cmVQb2ludENvbXBvbmVudCBmcm9tICdnbWYvbW9iaWxlL21lYXN1cmUvcG9pbnRDb21wb25lbnQuanMnO1xuaW1wb3J0IG5nZW9NaXNjQnRuQ29tcG9uZW50IGZyb20gJ25nZW8vbWlzYy9idG5Db21wb25lbnQuanMnO1xuaW1wb3J0IEVQU0cyMTc4MSBmcm9tICdAZ2VvYmxvY2tzL3Byb2ovc3JjL0VQU0dfMjE3ODEuanMnO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcuanMnO1xuaW1wb3J0IG9sQ29udHJvbFNjYWxlTGluZSBmcm9tICdvbC9jb250cm9sL1NjYWxlTGluZS5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZmFwcCcsIFsnZ2V0dGV4dCcsIGdtZk1hcENvbXBvbmVudC5uYW1lLCBnbWZQZXJtYWxpbmtQZXJtYWxpbmsubmFtZSwgZ21mTW9iaWxlTWVhc3VyZUFyZWFDb21wb25lbnQubmFtZSwgZ21mTW9iaWxlTWVhc3VyZUxlbmd0aENvbXBvbmVudC5uYW1lLCBnbWZNb2JpbGVNZWFzdXJlUG9pbnRDb21wb25lbnQubmFtZSwgbmdlb01pc2NCdG5Db21wb25lbnQubmFtZV0pO1xubW9kdWxlLnZhbHVlKCdnbWZSYXN0ZXJVcmwnLCBhcHBVUkwuUkFTVEVSKTtcbm1vZHVsZS5jb25zdGFudCgnZGVmYXVsdFRoZW1lJywgJ0RlbW8nKTtcbm1vZHVsZS5jb25zdGFudCgnYW5ndWxhckxvY2FsZVNjcmlwdCcsICcuLi9idWlsZC9hbmd1bGFyLWxvY2FsZV97e2xvY2FsZX19LmpzJyk7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKGdtZlBlcm1hbGluaykge1xuICB2YXIgY2VudGVyID0gZ21mUGVybWFsaW5rLmdldE1hcENlbnRlcigpIHx8IFs1Mzc2MzUsIDE1MjY0MF07XG4gIHZhciB6b29tID0gZ21mUGVybWFsaW5rLmdldE1hcFpvb20oKSB8fCAzO1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKClcbiAgICB9KV0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBwcm9qZWN0aW9uOiBFUFNHMjE3ODEsXG4gICAgICByZXNvbHV0aW9uczogWzIwMCwgMTAwLCA1MCwgMjAsIDEwLCA1LCAyLjUsIDIsIDEsIDAuNV0sXG4gICAgICBjZW50ZXI6IGNlbnRlcixcbiAgICAgIHpvb206IHpvb21cbiAgICB9KVxuICB9KTtcbiAgdGhpcy5tYXAuYWRkQ29udHJvbChuZXcgb2xDb250cm9sU2NhbGVMaW5lKCkpO1xuICB0aGlzLm1lYXN1cmVBcmVhQWN0aXZlID0gZmFsc2U7XG4gIHRoaXMubWVhc3VyZUxlbmd0aEFjdGl2ZSA9IGZhbHNlO1xuICB0aGlzLm1lYXN1cmVQb2ludExheWVyc0NvbmZpZyA9IFt7XG4gICAgbmFtZTogJ2FzdGVyJyxcbiAgICB1bml0OiAnbScsXG4gICAgZGVjaW1hbHM6IDJcbiAgfSwge1xuICAgIG5hbWU6ICdzcnRtJyxcbiAgICB1bml0OiAnbSdcbiAgfV07XG4gIHRoaXMubWVhc3VyZVBvaW50QWN0aXZlID0gZmFsc2U7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJtb2JpbGVNZWFzdXJlQXJlYUNvbXBvbmVudC4kaW5qZWN0ID0gW1wiZ21mTW9iaWxlTWVhc3VyZUFyZWFUZW1wbGF0ZVVybFwiXTtcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9NaXNjRmlsdGVycyBmcm9tICduZ2VvL21pc2MvZmlsdGVycy5qcyc7XG5pbXBvcnQgbmdlb0ludGVyYWN0aW9uTWVhc3VyZUFyZWFNb2JpbGUgZnJvbSAnbmdlby9pbnRlcmFjdGlvbi9NZWFzdXJlQXJlYU1vYmlsZS5qcyc7XG5pbXBvcnQgeyBNZWFzdWVNb2JpbGVCYXNlQ29udHJvbGxlciB9IGZyb20gJ2dtZi9tb2JpbGUvbWVhc3VyZS9iYXNlQ29tcG9uZW50LmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnZ21mTW9iaWxlTWVhc3VyZUFyZWEnLCBbbmdlb01pc2NGaWx0ZXJzLm5hbWVdKTtcbm1vZHVsZS52YWx1ZSgnZ21mTW9iaWxlTWVhc3VyZUFyZWFUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uIChlbGVtZW50LCBhdHRycykge1xuICB2YXIgdGVtcGxhdGVVcmwgPSBhdHRyc1snZ21mTW9iaWxlTWVhc3VyZUFyZWFUZW1wbGF0ZXVybCddO1xuICByZXR1cm4gdGVtcGxhdGVVcmwgIT09IHVuZGVmaW5lZCA/IHRlbXBsYXRlVXJsIDogJ2dtZi9tZWFzdXJlL2FyZWFDb21wb25lbnQnO1xufSk7XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2dtZi9tZWFzdXJlL2FyZWFDb21wb25lbnQnLCByZXF1aXJlKCcuL2Jhc2VDb21wb25lbnQuaHRtbCcpKTtcbn1dKTtcblxuZnVuY3Rpb24gbW9iaWxlTWVhc3VyZUFyZWFDb21wb25lbnQoZ21mTW9iaWxlTWVhc3VyZUFyZWFUZW1wbGF0ZVVybCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHtcbiAgICAgICdhY3RpdmUnOiAnPWdtZk1vYmlsZU1lYXN1cmVhcmVhQWN0aXZlJyxcbiAgICAgICdwcmVjaXNpb24nOiAnPD9nbWZNb2JpbGVNZWFzdXJlYXJlYVByZWNpc2lvbicsXG4gICAgICAnbWFwJzogJz1nbWZNb2JpbGVNZWFzdXJlYXJlYU1hcCcsXG4gICAgICAnc2tldGNoU3R5bGUnOiAnPT9nbWZNb2JpbGVNZWFzdXJlYXJlYVNrZXRjaHN0eWxlJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ0dtZk1vYmlsZU1lYXN1cmVBcmVhQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiBnbWZNb2JpbGVNZWFzdXJlQXJlYVRlbXBsYXRlVXJsLFxuICAgIGxpbms6IGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICBjb250cm9sbGVyLmluaXQoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5kaXJlY3RpdmUoJ2dtZk1vYmlsZU1lYXN1cmVhcmVhJywgbW9iaWxlTWVhc3VyZUFyZWFDb21wb25lbnQpO1xuXG52YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfTWVhc3VlTW9iaWxlQmFzZUNvbnQpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwiJGZpbHRlclwiLCBcImdldHRleHRDYXRhbG9nXCJdO1xuXG4gIF9pbmhlcml0c0xvb3NlKENvbnRyb2xsZXIsIF9NZWFzdWVNb2JpbGVCYXNlQ29udCk7XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigkc2NvcGUsICRmaWx0ZXIsIGdldHRleHRDYXRhbG9nKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfTWVhc3VlTW9iaWxlQmFzZUNvbnQuY2FsbCh0aGlzLCAkc2NvcGUsICRmaWx0ZXIsIGdldHRleHRDYXRhbG9nKSB8fCB0aGlzO1xuICAgIF90aGlzLm1lYXN1cmU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbnRyb2xsZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLm1lYXN1cmUgPSBuZXcgbmdlb0ludGVyYWN0aW9uTWVhc3VyZUFyZWFNb2JpbGUodGhpcy5maWx0ZXIoJ25nZW9Vbml0UHJlZml4JyksIHRoaXMuZ2V0dGV4dENhdGFsb2csIHtcbiAgICAgIHByZWNpc2lvbjogdGhpcy5wcmVjaXNpb24sXG4gICAgICBza2V0Y2hTdHlsZTogdGhpcy5za2V0Y2hTdHlsZVxuICAgIH0pO1xuXG4gICAgX01lYXN1ZU1vYmlsZUJhc2VDb250LnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZFBvaW50ID0gZnVuY3Rpb24gYWRkUG9pbnQoKSB7XG4gICAgdGhpcy5kcmF3SW50ZXJhY3Rpb24uYWRkVG9EcmF3aW5nKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5kcmF3SW50ZXJhY3Rpb24uY2xlYXJEcmF3aW5nKCk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmlzaCA9IGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICB0aGlzLmRyYXdJbnRlcmFjdGlvbi5maW5pc2hEcmF3aW5nKCk7XG4gIH07XG5cbiAgX3Byb3RvLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KE1lYXN1ZU1vYmlsZUJhc2VDb250cm9sbGVyKTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ0dtZk1vYmlsZU1lYXN1cmVBcmVhQ29udHJvbGxlcicsIENvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICBuZy1pZj1cImN0cmwuZHJhd2luZyAmJiAoIWN0cmwudmFsaWQpXCJcXG4gICBuZy1jbGljaz1cImN0cmwuYWRkUG9pbnQoKVwiPlxcbiAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvc3Bhbj5cXG4gICAgIHt7XFwnU2V0IGFzIHN0YXJ0aW5nIHBvaW50XFwnIHwgdHJhbnNsYXRlfX1cXG48L2E+XFxuPGEgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxcbiAgIG5nLWlmPVwiY3RybC5kaXJ0eVwiXFxuICAgbmctY2xpY2s9XCJjdHJsLmFkZFBvaW50KClcIj5cXG4gICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvc3Bhbj5cXG4gICAgIHt7XFwnQWRkIG5ldyBwb2ludFxcJyB8IHRyYW5zbGF0ZX19XFxuPC9hPlxcbjxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICBuZy1pZj1cImN0cmwuZHJhd2luZyAmJiBjdHJsLnZhbGlkICYmICFjdHJsLmRpcnR5XCJcXG4gICBuZy1jbGljaz1cImN0cmwuZmluaXNoKClcIj5cXG4gICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L3NwYW4+XFxuICAgICB7e1xcJ1Rlcm1pbmF0ZVxcJyB8IHRyYW5zbGF0ZX19XFxuPC9hPlxcbjxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICBuZy1pZj1cImN0cmwudmFsaWRcIlxcbiAgIG5nLWNsaWNrPVwiY3RybC5jbGVhcigpXCI+XFxuICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXJlcGVhdFwiPjwvc3Bhbj5cXG4gICAgIHt7XFwnQ2xlYXJcXCcgfCB0cmFuc2xhdGV9fVxcbjwvYT5cXG48YSBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXFxuICAgbmctaWY9XCJjdHJsLmFjdGl2ZVwiXFxuICAgbmctY2xpY2s9XCJjdHJsLmRlYWN0aXZhdGUoKVwiPlxcbiAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvc3Bhbj5cXG4gICAgIHt7XFwnQ2xvc2VcXCcgfCB0cmFuc2xhdGV9fVxcbjwvYT5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59IiwiTWVhc3VlTW9iaWxlQmFzZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIiRmaWx0ZXJcIiwgXCJnZXR0ZXh0Q2F0YWxvZ1wiXTtcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgaW50ZXJhY3Rpb25EZWNvcmF0aW9uIH0gZnJvbSAnbmdlby9taXNjL2RlY29yYXRlLmpzJztcbmltcG9ydCBuZ2VvTWlzY0ZpbHRlcnMgZnJvbSAnbmdlby9taXNjL2ZpbHRlcnMuanMnO1xuaW1wb3J0ICogYXMgb2xFdmVudHMgZnJvbSAnb2wvZXZlbnRzLmpzJztcbmltcG9ydCBvbFN0eWxlRmlsbCBmcm9tICdvbC9zdHlsZS9GaWxsLmpzJztcbmltcG9ydCBvbFN0eWxlUmVndWxhclNoYXBlIGZyb20gJ29sL3N0eWxlL1JlZ3VsYXJTaGFwZS5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZS5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZk1vYmlsZU1lYXN1cmVCYXNlJywgW25nZW9NaXNjRmlsdGVycy5uYW1lXSk7XG5leHBvcnQgZnVuY3Rpb24gTWVhc3VlTW9iaWxlQmFzZUNvbnRyb2xsZXIoJHNjb3BlLCAkZmlsdGVyLCBnZXR0ZXh0Q2F0YWxvZykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMuc2NvcGUgPSAkc2NvcGU7XG4gIHRoaXMuZmlsdGVyID0gJGZpbHRlcjtcbiAgdGhpcy5nZXR0ZXh0Q2F0YWxvZyA9IGdldHRleHRDYXRhbG9nO1xuICB0aGlzLm1hcDtcbiAgdGhpcy5hY3RpdmU7XG4gIHRoaXMuc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMuYWN0aXZlO1xuICB9LCBmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgX3RoaXMubWVhc3VyZS5zZXRBY3RpdmUobmV3VmFsKTtcbiAgfSk7XG4gIHRoaXMucHJlY2lzaW9uO1xuICB0aGlzLnNrZXRjaFN0eWxlID0gbmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgZmlsbDogbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJ1xuICAgIH0pLFxuICAgIHN0cm9rZTogbmV3IG9sU3R5bGVTdHJva2Uoe1xuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgbGluZURhc2g6IFsxMCwgMTBdLFxuICAgICAgd2lkdGg6IDJcbiAgICB9KSxcbiAgICBpbWFnZTogbmV3IG9sU3R5bGVSZWd1bGFyU2hhcGUoe1xuICAgICAgc3Ryb2tlOiBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjcpJyxcbiAgICAgICAgd2lkdGg6IDJcbiAgICAgIH0pLFxuICAgICAgcG9pbnRzOiA0LFxuICAgICAgcmFkaXVzOiA4LFxuICAgICAgcmFkaXVzMjogMCxcbiAgICAgIGFuZ2xlOiAwXG4gICAgfSlcbiAgfSk7XG4gIHRoaXMubWVhc3VyZTtcbiAgdGhpcy5kcmF3SW50ZXJhY3Rpb247XG4gIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgdGhpcy5kcmF3aW5nID0gZmFsc2U7XG4gIHRoaXMudmFsaWQgPSBmYWxzZTtcbn1cblxuTWVhc3VlTW9iaWxlQmFzZUNvbnRyb2xsZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHRoaXMubWVhc3VyZS5zZXRBY3RpdmUodGhpcy5hY3RpdmUpO1xuICBpbnRlcmFjdGlvbkRlY29yYXRpb24odGhpcy5tZWFzdXJlKTtcbiAgdGhpcy5kcmF3SW50ZXJhY3Rpb24gPSB0aGlzLm1lYXN1cmUuZ2V0RHJhd0ludGVyYWN0aW9uKCk7XG4gIHZhciBkcmF3SW50ZXJhY3Rpb24gPSB0aGlzLmRyYXdJbnRlcmFjdGlvbjtcbiAgaW50ZXJhY3Rpb25EZWNvcmF0aW9uKGRyYXdJbnRlcmFjdGlvbik7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaGFzUG9pbnRzJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhd0ludGVyYWN0aW9uLmdldEZlYXR1cmUoKSAhPT0gbnVsbDtcbiAgICB9XG4gIH0pO1xuICBvbEV2ZW50cy5saXN0ZW4oZHJhd0ludGVyYWN0aW9uLCAnY2hhbmdlOmRpcnR5JywgZnVuY3Rpb24gKGV2dCkge1xuICAgIF90aGlzMi5kaXJ0eSA9IGRyYXdJbnRlcmFjdGlvbi5nZXREaXJ0eSgpO1xuXG4gICAgaWYgKF90aGlzMi5kaXJ0eSkge1xuICAgICAgX3RoaXMyLnNjb3BlLiRhcHBseSgpO1xuICAgIH1cbiAgfSwgdGhpcyk7XG4gIG9sRXZlbnRzLmxpc3RlbihkcmF3SW50ZXJhY3Rpb24sICdjaGFuZ2U6ZHJhd2luZycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBfdGhpczIuZHJhd2luZyA9IGRyYXdJbnRlcmFjdGlvbi5nZXREcmF3aW5nKCk7XG4gIH0sIHRoaXMpO1xuICBvbEV2ZW50cy5saXN0ZW4oZHJhd0ludGVyYWN0aW9uLCAnY2hhbmdlOnZhbGlkJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIF90aGlzMi52YWxpZCA9IGRyYXdJbnRlcmFjdGlvbi5nZXRWYWxpZCgpO1xuICB9LCB0aGlzKTtcbiAgdGhpcy5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5tZWFzdXJlKTtcbn07XG5cbm1vZHVsZS5jb250cm9sbGVyKCdnbWZNZWFzdWVNb2JpbGVCYXNlQ29udHJvbGxlcicsIE1lYXN1ZU1vYmlsZUJhc2VDb250cm9sbGVyKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJtb2JpbGVNZWFzdXJlTGVudGhDb21wb25lbnQuJGluamVjdCA9IFtcImdtZk1vYmlsZU1lYXN1cmVMZW5ndGhUZW1wbGF0ZVVybFwiXTtcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9NaXNjRmlsdGVycyBmcm9tICduZ2VvL21pc2MvZmlsdGVycy5qcyc7XG5pbXBvcnQgbmdlb0ludGVyYWN0aW9uTWVhc3VyZUxlbmd0aE1vYmlsZSBmcm9tICduZ2VvL2ludGVyYWN0aW9uL01lYXN1cmVMZW5ndGhNb2JpbGUuanMnO1xuaW1wb3J0IHsgTWVhc3VlTW9iaWxlQmFzZUNvbnRyb2xsZXIgfSBmcm9tICdnbWYvbW9iaWxlL21lYXN1cmUvYmFzZUNvbXBvbmVudC5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZk1vYmlsZU1lYXN1cmVMZW5ndGgnLCBbbmdlb01pc2NGaWx0ZXJzLm5hbWVdKTtcbm1vZHVsZS52YWx1ZSgnZ21mTW9iaWxlTWVhc3VyZUxlbmd0aFRlbXBsYXRlVXJsJywgZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHJzKSB7XG4gIHZhciB0ZW1wbGF0ZVVybCA9IGF0dHJzWydnbWZNb2JpbGVNZWFzdXJlTGVuZ3RoVGVtcGxhdGV1cmwnXTtcbiAgcmV0dXJuIHRlbXBsYXRlVXJsICE9PSB1bmRlZmluZWQgPyB0ZW1wbGF0ZVVybCA6ICdnbWYvbWVhc3VyZS9sZW5ndGhDb21wb25lbnQnO1xufSk7XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2dtZi9tZWFzdXJlL2xlbmd0aENvbXBvbmVudCcsIHJlcXVpcmUoJy4vYmFzZUNvbXBvbmVudC5odG1sJykpO1xufV0pO1xuXG5mdW5jdGlvbiBtb2JpbGVNZWFzdXJlTGVudGhDb21wb25lbnQoZ21mTW9iaWxlTWVhc3VyZUxlbmd0aFRlbXBsYXRlVXJsKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZToge1xuICAgICAgJ2FjdGl2ZSc6ICc9Z21mTW9iaWxlTWVhc3VyZWxlbmd0aEFjdGl2ZScsXG4gICAgICAncHJlY2lzaW9uJzogJzw/Z21mTW9iaWxlTWVhc3VyZWxlbmd0aFByZWNpc2lvbicsXG4gICAgICAnbWFwJzogJz1nbWZNb2JpbGVNZWFzdXJlbGVuZ3RoTWFwJyxcbiAgICAgICdza2V0Y2hTdHlsZSc6ICc9P2dtZk1vYmlsZU1lYXN1cmVsZW5ndGhTa2V0Y2hzdHlsZSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICdHbWZNb2JpbGVNZWFzdXJlTGVuZ3RoQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiBnbWZNb2JpbGVNZWFzdXJlTGVuZ3RoVGVtcGxhdGVVcmwsXG4gICAgbGluazogZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnRyb2xsZXIuaW5pdCgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmRpcmVjdGl2ZSgnZ21mTW9iaWxlTWVhc3VyZWxlbmd0aCcsIG1vYmlsZU1lYXN1cmVMZW50aENvbXBvbmVudCk7XG5cbnZhciBDb250cm9sbGVyID0gZnVuY3Rpb24gKF9NZWFzdWVNb2JpbGVCYXNlQ29udCkge1xuICBDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIiwgXCIkZmlsdGVyXCIsIFwiZ2V0dGV4dENhdGFsb2dcIl07XG5cbiAgX2luaGVyaXRzTG9vc2UoQ29udHJvbGxlciwgX01lYXN1ZU1vYmlsZUJhc2VDb250KTtcblxuICBmdW5jdGlvbiBDb250cm9sbGVyKCRzY29wZSwgJGZpbHRlciwgZ2V0dGV4dENhdGFsb2cpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9NZWFzdWVNb2JpbGVCYXNlQ29udC5jYWxsKHRoaXMsICRzY29wZSwgJGZpbHRlciwgZ2V0dGV4dENhdGFsb2cpIHx8IHRoaXM7XG4gICAgX3RoaXMubWVhc3VyZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29udHJvbGxlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRoaXMubWVhc3VyZSA9IG5ldyBuZ2VvSW50ZXJhY3Rpb25NZWFzdXJlTGVuZ3RoTW9iaWxlKHRoaXMuZmlsdGVyKCduZ2VvVW5pdFByZWZpeCcpLCB0aGlzLmdldHRleHRDYXRhbG9nLCB7XG4gICAgICBwcmVjaXNpb246IHRoaXMucHJlY2lzaW9uLFxuICAgICAgc2tldGNoU3R5bGU6IHRoaXMuc2tldGNoU3R5bGVcbiAgICB9KTtcblxuICAgIF9NZWFzdWVNb2JpbGVCYXNlQ29udC5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5hZGRQb2ludCA9IGZ1bmN0aW9uIGFkZFBvaW50KCkge1xuICAgIHRoaXMuZHJhd0ludGVyYWN0aW9uLmFkZFRvRHJhd2luZygpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHRoaXMuZHJhd0ludGVyYWN0aW9uLmNsZWFyRHJhd2luZygpO1xuICB9O1xuXG4gIF9wcm90by5maW5pc2ggPSBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgdGhpcy5kcmF3SW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICB9O1xuXG4gIF9wcm90by5kZWFjdGl2YXRlID0gZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiBDb250cm9sbGVyO1xufShNZWFzdWVNb2JpbGVCYXNlQ29udHJvbGxlcik7XG5cbm1vZHVsZS5jb250cm9sbGVyKCdHbWZNb2JpbGVNZWFzdXJlTGVuZ3RoQ29udHJvbGxlcicsIENvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICBuZy1pZj1cImN0cmwuYWN0aXZlXCJcXG4gICBuZy1jbGljaz1cImN0cmwuZGVhY3RpdmF0ZSgpXCI+XFxuICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9zcGFuPlxcbiAgICAge3tcXCdDbG9zZVxcJyB8IHRyYW5zbGF0ZX19XFxuPC9hPlxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iLCJNb2JpbGVNZWFzdXJlUG9pbnRDb250cm9sbGVyLiRpbmplY3QgPSBbXCJnZXR0ZXh0Q2F0YWxvZ1wiLCBcIiRzY29wZVwiLCBcIiRmaWx0ZXJcIiwgXCJnbWZSYXN0ZXJcIiwgXCJuZ2VvRGVib3VuY2VcIl07XG5tb2JpbGVNZWFzdXJlUG9pbnRDb21wb25lbnQuJGluamVjdCA9IFtcImdtZk1vYmlsZU1lYXN1cmVQb2ludFRlbXBsYXRlVXJsXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgZ21mUmFzdGVyUmFzdGVyU2VydmljZSBmcm9tICdnbWYvcmFzdGVyL1Jhc3RlclNlcnZpY2UuanMnO1xuaW1wb3J0IG5nZW9JbnRlcmFjdGlvbk1lYXN1cmVQb2ludE1vYmlsZSBmcm9tICduZ2VvL2ludGVyYWN0aW9uL01lYXN1cmVQb2ludE1vYmlsZS5qcyc7XG5pbXBvcnQgbmdlb01pc2NEZWJvdW5jZSBmcm9tICduZ2VvL21pc2MvZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgaW50ZXJhY3Rpb25EZWNvcmF0aW9uIH0gZnJvbSAnbmdlby9taXNjL2RlY29yYXRlLmpzJztcbmltcG9ydCAqIGFzIG9sRXZlbnRzIGZyb20gJ29sL2V2ZW50cy5qcyc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbC5qcyc7XG5pbXBvcnQgb2xTdHlsZVJlZ3VsYXJTaGFwZSBmcm9tICdvbC9zdHlsZS9SZWd1bGFyU2hhcGUuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdnbWZNb2JpbGVNZWFzdXJlUG9pbnQnLCBbZ21mUmFzdGVyUmFzdGVyU2VydmljZS5uYW1lLCBuZ2VvTWlzY0RlYm91bmNlLm5hbWVdKTtcbm1vZHVsZS52YWx1ZSgnZ21mTW9iaWxlTWVhc3VyZVBvaW50VGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gYXR0cnNbJ2dtZk1vYmlsZU1lYXN1cmVQb2ludFRlbXBsYXRldXJsJ107XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnZ21mL21lYXN1cmUvcG9pbnRDb21wb25lbnQnO1xufSk7XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2dtZi9tZWFzdXJlL3BvaW50Q29tcG9uZW50JywgcmVxdWlyZSgnLi9wb2ludENvbXBvbmVudC5odG1sJykpO1xufV0pO1xuXG5mdW5jdGlvbiBtb2JpbGVNZWFzdXJlUG9pbnRDb21wb25lbnQoZ21mTW9iaWxlTWVhc3VyZVBvaW50VGVtcGxhdGVVcmwpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7XG4gICAgICAnYWN0aXZlJzogJz1nbWZNb2JpbGVNZWFzdXJlcG9pbnRBY3RpdmUnLFxuICAgICAgJ2dldENvb3JkaW5hdGVEZWNpbWFsc0ZuJzogJyY/Z21mTW9iaWxlTWVhc3VyZXBvaW50Q29vcmRpbmF0ZWRlY2ltYWxzJyxcbiAgICAgICdnZXRMYXllcnNDb25maWdGbic6ICcmZ21mTW9iaWxlTWVhc3VyZXBvaW50TGF5ZXJzY29uZmlnJyxcbiAgICAgICdtYXAnOiAnPWdtZk1vYmlsZU1lYXN1cmVwb2ludE1hcCcsXG4gICAgICAnc2tldGNoU3R5bGUnOiAnPT9nbWZNb2JpbGVNZWFzdXJlcG9pbnRTa2V0Y2hzdHlsZScsXG4gICAgICAnZm9ybWF0JzogJzxnbWZNb2JpbGVNZWFzdXJlcG9pbnRGb3JtYXQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiAnR21mTW9iaWxlTWVhc3VyZVBvaW50Q29udHJvbGxlciBhcyBjdHJsJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiBnbWZNb2JpbGVNZWFzdXJlUG9pbnRUZW1wbGF0ZVVybCxcbiAgICBsaW5rOiBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgY29udHJvbGxlci5pbml0KCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZGlyZWN0aXZlKCdnbWZNb2JpbGVNZWFzdXJlcG9pbnQnLCBtb2JpbGVNZWFzdXJlUG9pbnRDb21wb25lbnQpO1xuZXhwb3J0IGZ1bmN0aW9uIE1vYmlsZU1lYXN1cmVQb2ludENvbnRyb2xsZXIoZ2V0dGV4dENhdGFsb2csICRzY29wZSwgJGZpbHRlciwgZ21mUmFzdGVyLCBuZ2VvRGVib3VuY2UpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLmdtZlJhc3Rlcl8gPSBnbWZSYXN0ZXI7XG4gIHRoaXMubmdlb0RlYm91bmNlXyA9IG5nZW9EZWJvdW5jZTtcbiAgdGhpcy5nZXR0ZXh0Q2F0YWxvZ18gPSBnZXR0ZXh0Q2F0YWxvZztcbiAgdGhpcy4kZmlsdGVyXyA9ICRmaWx0ZXI7XG4gIHRoaXMubWFwO1xuICB0aGlzLmFjdGl2ZTtcbiAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzLmFjdGl2ZTtcbiAgfSwgZnVuY3Rpb24gKG5ld1ZhbCkge1xuICAgIF90aGlzLm1lYXN1cmUuc2V0QWN0aXZlKG5ld1ZhbCk7XG5cbiAgICBfdGhpcy5oYW5kbGVNZWFzdXJlQWN0aXZlQ2hhbmdlXygpO1xuICB9KTtcbiAgdmFyIGNvb3JkaW5hdGVEZWNpbWFsc0ZuID0gdGhpc1snZ2V0Q29vcmRpbmF0ZURlY2ltYWxzRm4nXTtcbiAgdGhpcy5jb29yZGluYXRlRGVjaW1hbHMgPSBjb29yZGluYXRlRGVjaW1hbHNGbiA/IGNvb3JkaW5hdGVEZWNpbWFsc0ZuKCkgOiAwO1xuICB0aGlzLmxheWVyc0NvbmZpZztcbiAgdGhpcy5za2V0Y2hTdHlsZTtcblxuICBpZiAodGhpcy5za2V0Y2hTdHlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5za2V0Y2hTdHlsZSA9IG5ldyBvbFN0eWxlU3R5bGUoe1xuICAgICAgZmlsbDogbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknXG4gICAgICB9KSxcbiAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGVTdHJva2Uoe1xuICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgIGxpbmVEYXNoOiBbMTAsIDEwXSxcbiAgICAgICAgd2lkdGg6IDJcbiAgICAgIH0pLFxuICAgICAgaW1hZ2U6IG5ldyBvbFN0eWxlUmVndWxhclNoYXBlKHtcbiAgICAgICAgc3Ryb2tlOiBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNyknLFxuICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludHM6IDQsXG4gICAgICAgIHJhZGl1czogOCxcbiAgICAgICAgcmFkaXVzMjogMCxcbiAgICAgICAgYW5nbGU6IDBcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICB0aGlzLmZvcm1hdDtcbiAgdGhpcy5tZWFzdXJlO1xuICB0aGlzLmRyYXdJbnRlcmFjdGlvbjtcbiAgdGhpcy5tYXBWaWV3UHJvcGVydHlDaGFuZ2VFdmVudEtleV8gPSBudWxsO1xufVxuXG5Nb2JpbGVNZWFzdXJlUG9pbnRDb250cm9sbGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm1lYXN1cmUgPSBuZXcgbmdlb0ludGVyYWN0aW9uTWVhc3VyZVBvaW50TW9iaWxlKHRoaXMuJGZpbHRlcl8oJ25nZW9OdW1iZXJDb29yZGluYXRlcycpLCB0aGlzLmZvcm1hdCB8fCAne3h9LCB7eX0nLCB7XG4gICAgZGVjaW1hbHM6IHRoaXMuY29vcmRpbmF0ZURlY2ltYWxzLFxuICAgIHNrZXRjaFN0eWxlOiB0aGlzLnNrZXRjaFN0eWxlXG4gIH0pO1xuICB0aGlzLm1lYXN1cmUuc2V0QWN0aXZlKHRoaXMuYWN0aXZlKTtcbiAgaW50ZXJhY3Rpb25EZWNvcmF0aW9uKHRoaXMubWVhc3VyZSk7XG4gIHRoaXMuZHJhd0ludGVyYWN0aW9uID0gdGhpcy5tZWFzdXJlLmdldERyYXdJbnRlcmFjdGlvbigpO1xuICBpbnRlcmFjdGlvbkRlY29yYXRpb24odGhpcy5kcmF3SW50ZXJhY3Rpb24pO1xuICB2YXIgbGF5ZXJzQ29uZmlnID0gdGhpc1snZ2V0TGF5ZXJzQ29uZmlnRm4nXSgpO1xuICBjb25zb2xlLmFzc2VydChBcnJheS5pc0FycmF5KGxheWVyc0NvbmZpZykpO1xuICB0aGlzLmxheWVyc0NvbmZpZyA9IGxheWVyc0NvbmZpZztcbiAgdGhpcy5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5tZWFzdXJlKTtcbn07XG5cbk1vYmlsZU1lYXN1cmVQb2ludENvbnRyb2xsZXIucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWN0aXZlID0gZmFsc2U7XG59O1xuXG5Nb2JpbGVNZWFzdXJlUG9pbnRDb250cm9sbGVyLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0aGlzLmdldHRleHRDYXRhbG9nXy5nZXRTdHJpbmcoc3RyKTtcbn07XG5cbk1vYmlsZU1lYXN1cmVQb2ludENvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZU1lYXN1cmVBY3RpdmVDaGFuZ2VfID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5tZWFzdXJlLmdldEFjdGl2ZSgpKSB7XG4gICAgdmFyIHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG4gICAgdGhpcy5tYXBWaWV3UHJvcGVydHlDaGFuZ2VFdmVudEtleV8gPSBvbEV2ZW50cy5saXN0ZW4odmlldywgJ3Byb3BlcnR5Y2hhbmdlJywgdGhpcy5uZ2VvRGVib3VuY2VfKHRoaXMuZ2V0TWVhc3VyZV8uYmluZCh0aGlzKSwgMzAwLCB0cnVlKSwgdGhpcyk7XG4gICAgdGhpcy5nZXRNZWFzdXJlXygpO1xuICB9IGVsc2UgaWYgKHRoaXMubWFwVmlld1Byb3BlcnR5Q2hhbmdlRXZlbnRLZXlfKSB7XG4gICAgb2xFdmVudHMudW5saXN0ZW5CeUtleSh0aGlzLm1hcFZpZXdQcm9wZXJ0eUNoYW5nZUV2ZW50S2V5Xyk7XG4gICAgdGhpcy5tYXBWaWV3UHJvcGVydHlDaGFuZ2VFdmVudEtleV8gPSBudWxsO1xuICB9XG59O1xuXG5Nb2JpbGVNZWFzdXJlUG9pbnRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRNZWFzdXJlXyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdmFyIGNlbnRlciA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgY29uc29sZS5hc3NlcnQoQXJyYXkuaXNBcnJheShjZW50ZXIpKTtcbiAgdmFyIHBhcmFtcyA9IHtcbiAgICAnbGF5ZXJzJzogdGhpcy5sYXllcnNDb25maWcubWFwKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIHJldHVybiBjb25maWcubmFtZTtcbiAgICB9KS5qb2luKCcsJylcbiAgfTtcbiAgdGhpcy5nbWZSYXN0ZXJfLmdldFJhc3RlcihjZW50ZXIsIHBhcmFtcykudGhlbihmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGVsID0gX3RoaXMyLm1lYXN1cmUuZ2V0VG9vbHRpcEVsZW1lbnQoKTtcblxuICAgIHZhciBjdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gJ2dtZi1tb2JpbGUtbWVhc3VyZS1wb2ludCc7XG4gICAgY3RuLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF90aGlzMi5sYXllcnNDb25maWcsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb25maWcgPSBfcmVmO1xuICAgICAgdmFyIGtleSA9IGNvbmZpZy5uYW1lO1xuXG4gICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICAgICAgdmFyIGNoaWxkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hpbGRFbC5jbGFzc05hbWUgPSBcImdtZi1tb2JpbGUtbWVhc3VyZS1wb2ludC1cIiArIGtleTtcbiAgICAgICAgdmFyIHVuaXQgPSBjb25maWcudW5pdCB8fCAnJztcbiAgICAgICAgdmFyIGRlY2ltYWxzID0gY29uZmlnLmRlY2ltYWxzID4gMCA/IGNvbmZpZy5kZWNpbWFscyA6IDA7XG4gICAgICAgIHZhbHVlID0gX3RoaXMyLiRmaWx0ZXJfKCdudW1iZXInKSh2YWx1ZSwgZGVjaW1hbHMpO1xuICAgICAgICBjaGlsZEVsLmlubmVySFRNTCA9IFtfdGhpczIudHJhbnNsYXRlKGtleSksICc6ICcsIHZhbHVlLCAnICcsIHVuaXRdLmpvaW4oJycpO1xuICAgICAgICBjdG4uYXBwZW5kQ2hpbGQoY2hpbGRFbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzQ3RuID0gZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xuXG4gICAgaWYgKHByZXZpb3VzQ3RuWzBdKSB7XG4gICAgICBwcmV2aW91c0N0blswXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBlbC5hcHBlbmRDaGlsZChjdG4pO1xuICB9KTtcbn07XG5cbm1vZHVsZS5jb250cm9sbGVyKCdHbWZNb2JpbGVNZWFzdXJlUG9pbnRDb250cm9sbGVyJywgTW9iaWxlTWVhc3VyZVBvaW50Q29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBuZ2VvSW50ZXJhY3Rpb25NZWFzdXJlQXJlYSBmcm9tICduZ2VvL2ludGVyYWN0aW9uL01lYXN1cmVBcmVhLmpzJztcbmltcG9ydCBuZ2VvSW50ZXJhY3Rpb25Nb2JpbGVEcmF3IGZyb20gJ25nZW8vaW50ZXJhY3Rpb24vTW9iaWxlRHJhdy5qcyc7XG5cbnZhciBNZWFzdXJlQXJlYU1vYmlsZSA9IGZ1bmN0aW9uIChfbmdlb0ludGVyYWN0aW9uTWVhc3UpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWVhc3VyZUFyZWFNb2JpbGUsIF9uZ2VvSW50ZXJhY3Rpb25NZWFzdSk7XG5cbiAgZnVuY3Rpb24gTWVhc3VyZUFyZWFNb2JpbGUoZm9ybWF0LCBnZXR0ZXh0Q2F0YWxvZywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgIGRpc3BsYXlIZWxwVG9vbHRpcDogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gX25nZW9JbnRlcmFjdGlvbk1lYXN1LmNhbGwodGhpcywgZm9ybWF0LCBnZXR0ZXh0Q2F0YWxvZywgb3B0aW9ucykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNZWFzdXJlQXJlYU1vYmlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZURyYXdJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZURyYXdJbnRlcmFjdGlvbihzdHlsZSwgc291cmNlKSB7XG4gICAgcmV0dXJuIG5ldyBuZ2VvSW50ZXJhY3Rpb25Nb2JpbGVEcmF3KHtcbiAgICAgIHR5cGU6ICdQb2x5Z29uJyxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHNvdXJjZTogc291cmNlXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1lYXN1cmVBcmVhTW9iaWxlO1xufShuZ2VvSW50ZXJhY3Rpb25NZWFzdXJlQXJlYSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lYXN1cmVBcmVhTW9iaWxlOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgbmdlb0ludGVyYWN0aW9uTWVhc3VyZUxlbmd0aCBmcm9tICduZ2VvL2ludGVyYWN0aW9uL01lYXN1cmVMZW5ndGguanMnO1xuaW1wb3J0IG5nZW9JbnRlcmFjdGlvbk1vYmlsZURyYXcgZnJvbSAnbmdlby9pbnRlcmFjdGlvbi9Nb2JpbGVEcmF3LmpzJztcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gKF9uZ2VvSW50ZXJhY3Rpb25NZWFzdSkge1xuICBfaW5oZXJpdHNMb29zZShfZGVmYXVsdCwgX25nZW9JbnRlcmFjdGlvbk1lYXN1KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdChmb3JtYXQsIGdldHRleHRDYXRhbG9nLCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgIT09IHVuZGVmaW5lZCA/IG9wdF9vcHRpb25zIDoge307XG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICBkaXNwbGF5SGVscFRvb2x0aXA6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIF9uZ2VvSW50ZXJhY3Rpb25NZWFzdS5jYWxsKHRoaXMsIGZvcm1hdCwgZ2V0dGV4dENhdGFsb2csIG9wdGlvbnMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gX2RlZmF1bHQucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVEcmF3SW50ZXJhY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVEcmF3SW50ZXJhY3Rpb24oc3R5bGUsIHNvdXJjZSkge1xuICAgIHJldHVybiBuZXcgbmdlb0ludGVyYWN0aW9uTW9iaWxlRHJhdyh7XG4gICAgICB0eXBlOiAnTGluZVN0cmluZycsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0obmdlb0ludGVyYWN0aW9uTWVhc3VyZUxlbmd0aCk7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IG5nZW9JbnRlcmFjdGlvbk1lYXN1cmUsIHsgZ2V0Rm9ybWF0dGVkUG9pbnQgfSBmcm9tICduZ2VvL2ludGVyYWN0aW9uL01lYXN1cmUuanMnO1xuaW1wb3J0IG5nZW9JbnRlcmFjdGlvbk1vYmlsZURyYXcgZnJvbSAnbmdlby9pbnRlcmFjdGlvbi9Nb2JpbGVEcmF3LmpzJztcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gKF9uZ2VvSW50ZXJhY3Rpb25NZWFzdSkge1xuICBfaW5oZXJpdHNMb29zZShfZGVmYXVsdCwgX25nZW9JbnRlcmFjdGlvbk1lYXN1KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdChmb3JtYXQsIGNvb3JkRm9ybWF0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgZGlzcGxheUhlbHBUb29sdGlwOiBmYWxzZVxuICAgIH0pO1xuICAgIF90aGlzID0gX25nZW9JbnRlcmFjdGlvbk1lYXN1LmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcbiAgICBfdGhpcy5mb3JtYXRfID0gZm9ybWF0O1xuICAgIF90aGlzLmNvb3JkRm9ybWF0XyA9IGNvb3JkRm9ybWF0O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfZGVmYXVsdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZURyYXdJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZURyYXdJbnRlcmFjdGlvbihzdHlsZSwgc291cmNlKSB7XG4gICAgcmV0dXJuIG5ldyBuZ2VvSW50ZXJhY3Rpb25Nb2JpbGVEcmF3KHtcbiAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVNZWFzdXJlID0gZnVuY3Rpb24gaGFuZGxlTWVhc3VyZShjYWxsYmFjaykge1xuICAgIHZhciBnZW9tID0gdGhpcy5za2V0Y2hGZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gICAgdmFyIGRlYyA9IHRoaXMuZGVjaW1hbHM7XG4gICAgdmFyIG91dHB1dCA9IGdldEZvcm1hdHRlZFBvaW50KGdlb20sIGRlYywgdGhpcy5mb3JtYXRfLCB0aGlzLmNvb3JkRm9ybWF0Xyk7XG4gICAgdmFyIGNvb3JkID0gZ2VvbS5nZXRMYXN0Q29vcmRpbmF0ZSgpO1xuICAgIGNhbGxiYWNrKG91dHB1dCwgY29vcmQpO1xuICB9O1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0obmdlb0ludGVyYWN0aW9uTWVhc3VyZSk7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCB7IGdldERlZmF1bHREcmF3U3R5bGVGdW5jdGlvbiB9IGZyb20gJ25nZW8vaW50ZXJhY3Rpb24vY29tbW9uLmpzJztcbmltcG9ydCBuZ2VvQ3VzdG9tRXZlbnQgZnJvbSAnbmdlby9DdXN0b21FdmVudC5qcyc7XG5pbXBvcnQgKiBhcyBvbEV2ZW50cyBmcm9tICdvbC9ldmVudHMuanMnO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlLmpzJztcbmltcG9ydCB7IFRSVUUgfSBmcm9tICdvbC9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IG9sR2VvbUxpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lU3RyaW5nLmpzJztcbmltcG9ydCBvbEdlb21Qb2ludCBmcm9tICdvbC9nZW9tL1BvaW50LmpzJztcbmltcG9ydCBvbEdlb21Qb2x5Z29uIGZyb20gJ29sL2dlb20vUG9seWdvbi5qcyc7XG5pbXBvcnQgb2xHZW9tU2ltcGxlR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9TaW1wbGVHZW9tZXRyeS5qcyc7XG5pbXBvcnQgb2xJbnRlcmFjdGlvbkludGVyYWN0aW9uIGZyb20gJ29sL2ludGVyYWN0aW9uL0ludGVyYWN0aW9uLmpzJztcbmltcG9ydCBvbExheWVyVmVjdG9yIGZyb20gJ29sL2xheWVyL1ZlY3Rvci5qcyc7XG5pbXBvcnQgb2xTb3VyY2VWZWN0b3IgZnJvbSAnb2wvc291cmNlL1ZlY3Rvci5qcyc7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIChfb2xJbnRlcmFjdGlvbkludGVyYWMpIHtcbiAgX2luaGVyaXRzTG9vc2UoX2RlZmF1bHQsIF9vbEludGVyYWN0aW9uSW50ZXJhYyk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQob3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX29sSW50ZXJhY3Rpb25JbnRlcmFjLmNhbGwodGhpcywge1xuICAgICAgaGFuZGxlRXZlbnQ6IFRSVUVcbiAgICB9KSB8fCB0aGlzO1xuICAgIF90aGlzLmNoYW5nZUV2ZW50S2V5XyA9IG51bGw7XG4gICAgX3RoaXMudHlwZV8gPSBvcHRpb25zLnR5cGU7XG4gICAgX3RoaXMubWluUG9pbnRzXyA9IG9wdGlvbnMubWluUG9pbnRzID8gb3B0aW9ucy5taW5Qb2ludHMgOiBfdGhpcy50eXBlXyA9PT0gJ1BvbHlnb24nID8gMyA6IDI7XG4gICAgX3RoaXMuc2tldGNoRmVhdHVyZV8gPSBudWxsO1xuICAgIF90aGlzLnNrZXRjaFBvaW50c18gPSBbXTtcbiAgICBfdGhpcy5za2V0Y2hQb2ludF8gPSBudWxsO1xuICAgIF90aGlzLm92ZXJsYXlfID0gbmV3IG9sTGF5ZXJWZWN0b3Ioe1xuICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VWZWN0b3Ioe1xuICAgICAgICB1c2VTcGF0aWFsSW5kZXg6IGZhbHNlLFxuICAgICAgICB3cmFwWDogb3B0aW9ucy53cmFwWCA/IG9wdGlvbnMud3JhcFggOiBmYWxzZVxuICAgICAgfSksXG4gICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSB8fCBnZXREZWZhdWx0RHJhd1N0eWxlRnVuY3Rpb24oKSxcbiAgICAgIHVwZGF0ZVdoaWxlQW5pbWF0aW5nOiB0cnVlLFxuICAgICAgdXBkYXRlV2hpbGVJbnRlcmFjdGluZzogdHJ1ZVxuICAgIH0pO1xuICAgIG9sRXZlbnRzLmxpc3RlbihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ2NoYW5nZTphY3RpdmUnLCBfdGhpcy51cGRhdGVTdGF0ZV8sIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgIF90aGlzLnNldCgnZGlydHknLCBmYWxzZSk7XG5cbiAgICBfdGhpcy5zZXQoJ2RyYXdpbmcnLCBmYWxzZSk7XG5cbiAgICBfdGhpcy5zZXQoJ3ZhbGlkJywgZmFsc2UpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IF9kZWZhdWx0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0TWFwID0gZnVuY3Rpb24gc2V0TWFwKG1hcCkge1xuICAgIHZhciBjdXJyZW50TWFwID0gdGhpcy5nZXRNYXAoKTtcblxuICAgIGlmIChjdXJyZW50TWFwKSB7XG4gICAgICBpZiAodGhpcy5jaGFuZ2VFdmVudEtleV8pIHtcbiAgICAgICAgb2xFdmVudHMudW5saXN0ZW5CeUtleSh0aGlzLmNoYW5nZUV2ZW50S2V5Xyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2xJbnRlcmFjdGlvbkludGVyYWN0aW9uLnByb3RvdHlwZS5zZXRNYXAuY2FsbCh0aGlzLCBtYXApO1xuXG4gICAgaWYgKG1hcCkge1xuICAgICAgdGhpcy5jaGFuZ2VFdmVudEtleV8gPSBvbEV2ZW50cy5saXN0ZW4obWFwLmdldFZpZXcoKSwgJ2NoYW5nZTpjZW50ZXInLCB0aGlzLmhhbmRsZVZpZXdDZW50ZXJDaGFuZ2VfLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlXygpO1xuICB9O1xuXG4gIF9wcm90by5nZXREaXJ0eSA9IGZ1bmN0aW9uIGdldERpcnR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnZGlydHknKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RHJhd2luZyA9IGZ1bmN0aW9uIGdldERyYXdpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCdkcmF3aW5nJyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFZhbGlkID0gZnVuY3Rpb24gZ2V0VmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCd2YWxpZCcpO1xuICB9O1xuXG4gIF9wcm90by5nZXRGZWF0dXJlID0gZnVuY3Rpb24gZ2V0RmVhdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5za2V0Y2hGZWF0dXJlXztcbiAgfTtcblxuICBfcHJvdG8uYWRkVG9EcmF3aW5nID0gZnVuY3Rpb24gYWRkVG9EcmF3aW5nKCkge1xuICAgIHZhciBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZSgpO1xuICAgIHZhciBkcmF3aW5nID0gdGhpcy5nZXREcmF3aW5nKCk7XG5cbiAgICBpZiAoIWFjdGl2ZSB8fCAhZHJhd2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBza2V0Y2hGZWF0dXJlR2VvbTtcbiAgICB2YXIgc2tldGNoUG9pbnRHZW9tID0gdGhpcy5nZXRTa2V0Y2hQb2ludEdlb21ldHJ5XygpO1xuICAgIHZhciBjb29yZGluYXRlID0gc2tldGNoUG9pbnRHZW9tLmdldENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIGNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMudHlwZV8gPT09ICdQb2ludCcpIHtcbiAgICAgIGlmICghdGhpcy5za2V0Y2hGZWF0dXJlXykge1xuICAgICAgICB0aGlzLnNrZXRjaEZlYXR1cmVfID0gbmV3IG9sRmVhdHVyZShuZXcgb2xHZW9tUG9pbnQoY29vcmRpbmF0ZSkpO1xuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgbmdlb0N1c3RvbUV2ZW50KCdkcmF3c3RhcnQnLCB7XG4gICAgICAgICAgZmVhdHVyZTogdGhpcy5za2V0Y2hGZWF0dXJlX1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgc2tldGNoRmVhdHVyZUdlb20gPSB0aGlzLnNrZXRjaEZlYXR1cmVfLmdldEdlb21ldHJ5KCk7XG5cbiAgICAgIGlmIChza2V0Y2hGZWF0dXJlR2VvbSBpbnN0YW5jZW9mIG9sR2VvbVNpbXBsZUdlb21ldHJ5KSB7XG4gICAgICAgIHNrZXRjaEZlYXR1cmVHZW9tLnNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHlwZV8gPT09ICdMaW5lU3RyaW5nJykge1xuICAgICAgdGhpcy5za2V0Y2hQb2ludHNfLnB1c2godGhpcy5za2V0Y2hQb2ludF8pO1xuXG4gICAgICBpZiAoIXRoaXMuc2tldGNoRmVhdHVyZV8pIHtcbiAgICAgICAgY29vcmRpbmF0ZXMgPSBbY29vcmRpbmF0ZS5zbGljZSgpLCBjb29yZGluYXRlLnNsaWNlKCldO1xuICAgICAgICB0aGlzLnNrZXRjaEZlYXR1cmVfID0gbmV3IG9sRmVhdHVyZShuZXcgb2xHZW9tTGluZVN0cmluZyhjb29yZGluYXRlcykpO1xuXG4gICAgICAgIHZhciBfZXZlbnQgPSBuZXcgbmdlb0N1c3RvbUV2ZW50KCdkcmF3c3RhcnQnLCB7XG4gICAgICAgICAgZmVhdHVyZTogdGhpcy5za2V0Y2hGZWF0dXJlX1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoX2V2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNrZXRjaEZlYXR1cmVHZW9tID0gdGhpcy5za2V0Y2hGZWF0dXJlXy5nZXRHZW9tZXRyeSgpO1xuXG4gICAgICAgIGlmIChza2V0Y2hGZWF0dXJlR2VvbSBpbnN0YW5jZW9mIG9sR2VvbVNpbXBsZUdlb21ldHJ5KSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBza2V0Y2hGZWF0dXJlR2VvbS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZS5zbGljZSgpKTtcbiAgICAgICAgICBza2V0Y2hGZWF0dXJlR2VvbS5zZXRDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlXyA9PT0gJ1BvbHlnb24nKSB7XG4gICAgICB0aGlzLnNrZXRjaFBvaW50c18ucHVzaCh0aGlzLnNrZXRjaFBvaW50Xyk7XG5cbiAgICAgIGlmICghdGhpcy5za2V0Y2hGZWF0dXJlXykge1xuICAgICAgICBjb29yZGluYXRlcyA9IFtjb29yZGluYXRlLnNsaWNlKCksIGNvb3JkaW5hdGUuc2xpY2UoKSwgY29vcmRpbmF0ZS5zbGljZSgpXTtcbiAgICAgICAgdGhpcy5za2V0Y2hGZWF0dXJlXyA9IG5ldyBvbEZlYXR1cmUobmV3IG9sR2VvbVBvbHlnb24oW2Nvb3JkaW5hdGVzXSkpO1xuXG4gICAgICAgIHZhciBfZXZlbnQyID0gbmV3IG5nZW9DdXN0b21FdmVudCgnZHJhd3N0YXJ0Jywge1xuICAgICAgICAgIGZlYXR1cmU6IHRoaXMuc2tldGNoRmVhdHVyZV9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KF9ldmVudDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2tldGNoRmVhdHVyZUdlb20gPSB0aGlzLnNrZXRjaEZlYXR1cmVfLmdldEdlb21ldHJ5KCk7XG5cbiAgICAgICAgaWYgKHNrZXRjaEZlYXR1cmVHZW9tIGluc3RhbmNlb2Ygb2xHZW9tUG9seWdvbikge1xuICAgICAgICAgIHZhciBjb29yZGluYXRlc3MgPSBza2V0Y2hGZWF0dXJlR2VvbS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNzWzBdO1xuICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZS5zbGljZSgpKTtcbiAgICAgICAgICBza2V0Y2hGZWF0dXJlR2VvbS5zZXRDb29yZGluYXRlcyhjb29yZGluYXRlc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRpcnR5ID0gdGhpcy5nZXREaXJ0eSgpO1xuXG4gICAgaWYgKGRpcnR5KSB7XG4gICAgICB0aGlzLnNldCgnZGlydHknLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdmFyIHZhbGlkID0gdGhpcy5nZXRWYWxpZCgpO1xuXG4gICAgaWYgKHRoaXMudHlwZV8gPT09ICdMaW5lU3RyaW5nJyB8fCB0aGlzLnR5cGVfID09PSAnUG9seWdvbicpIHtcbiAgICAgIGlmIChjb29yZGluYXRlcy5sZW5ndGggPj0gdGhpcy5taW5Qb2ludHNfKSB7XG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnNldCgndmFsaWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zZXQoJ3ZhbGlkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5za2V0Y2hQb2ludF8gPSBudWxsO1xuICAgIHRoaXMudXBkYXRlU2tldGNoRmVhdHVyZXNfKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyRHJhd2luZyA9IGZ1bmN0aW9uIGNsZWFyRHJhd2luZygpIHtcbiAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmlzaERyYXdpbmcgPSBmdW5jdGlvbiBmaW5pc2hEcmF3aW5nKCkge1xuICAgIHZhciBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZSgpO1xuICAgIHZhciBkcmF3aW5nID0gdGhpcy5nZXREcmF3aW5nKCk7XG5cbiAgICBpZiAoIWFjdGl2ZSB8fCAhZHJhd2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNrZXRjaFBvaW50Xykge1xuICAgICAgdGhpcy5hZGRUb0RyYXdpbmcoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldCgnZHJhd2luZycsIGZhbHNlKTtcbiAgICB2YXIgZXZlbnQgPSBuZXcgbmdlb0N1c3RvbUV2ZW50KCdkcmF3ZW5kJywge1xuICAgICAgZmVhdHVyZTogdGhpcy5za2V0Y2hGZWF0dXJlX1xuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH07XG5cbiAgX3Byb3RvLnN0YXJ0RHJhd2luZ18gPSBmdW5jdGlvbiBzdGFydERyYXdpbmdfKCkge1xuICAgIHRoaXMuc2V0KCdkcmF3aW5nJywgdHJ1ZSk7XG4gICAgdGhpcy5jcmVhdGVPclVwZGF0ZVNrZXRjaFBvaW50XygpO1xuICAgIHRoaXMudXBkYXRlU2tldGNoRmVhdHVyZXNfKCk7XG5cbiAgICBpZiAodGhpcy50eXBlXyA9PT0gJ1BvaW50Jykge1xuICAgICAgdGhpcy5hZGRUb0RyYXdpbmcoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm1vZGlmeURyYXdpbmdfID0gZnVuY3Rpb24gbW9kaWZ5RHJhd2luZ18oKSB7XG4gICAgaWYgKCF0aGlzLnNrZXRjaEZlYXR1cmVfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNlbnRlciA9IHRoaXMuZ2V0Q2VudGVyXygpO1xuXG4gICAgaWYgKHRoaXMudHlwZV8gPT09ICdMaW5lU3RyaW5nJykge1xuICAgICAgdmFyIHNrZXRjaEZlYXR1cmVHZW9tID0gdGhpcy5za2V0Y2hGZWF0dXJlXy5nZXRHZW9tZXRyeSgpO1xuXG4gICAgICBpZiAoc2tldGNoRmVhdHVyZUdlb20gaW5zdGFuY2VvZiBvbEdlb21TaW1wbGVHZW9tZXRyeSkge1xuICAgICAgICB2YXIgY29vcmRpbmF0ZXMgPSBza2V0Y2hGZWF0dXJlR2VvbS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBjb29yZGluYXRlcy5wb3AoKTtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChjZW50ZXIpO1xuICAgICAgICBza2V0Y2hGZWF0dXJlR2VvbS5zZXRDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVfID09PSAnUG9seWdvbicpIHtcbiAgICAgIHZhciBfc2tldGNoRmVhdHVyZUdlb20gPSB0aGlzLnNrZXRjaEZlYXR1cmVfLmdldEdlb21ldHJ5KCk7XG5cbiAgICAgIGlmIChfc2tldGNoRmVhdHVyZUdlb20gaW5zdGFuY2VvZiBvbEdlb21Qb2x5Z29uKSB7XG4gICAgICAgIHZhciBjb29yZGluYXRlc3MgPSBfc2tldGNoRmVhdHVyZUdlb20uZ2V0Q29vcmRpbmF0ZXMoKTtcblxuICAgICAgICB2YXIgX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNzWzBdO1xuXG4gICAgICAgIF9jb29yZGluYXRlcy5wb3AoKTtcblxuICAgICAgICBfY29vcmRpbmF0ZXMucHVzaChjZW50ZXIpO1xuXG4gICAgICAgIF9za2V0Y2hGZWF0dXJlR2VvbS5zZXRDb29yZGluYXRlcyhbX2Nvb3JkaW5hdGVzXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRpcnR5ID0gdGhpcy5nZXREaXJ0eSgpO1xuXG4gICAgaWYgKCFkaXJ0eSkge1xuICAgICAgdGhpcy5zZXQoJ2RpcnR5JywgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hYm9ydERyYXdpbmdfID0gZnVuY3Rpb24gYWJvcnREcmF3aW5nXygpIHtcbiAgICB2YXIgc2tldGNoRmVhdHVyZSA9IHRoaXMuc2tldGNoRmVhdHVyZV87XG5cbiAgICBpZiAoc2tldGNoRmVhdHVyZSB8fCB0aGlzLnNrZXRjaFBvaW50c18ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5za2V0Y2hGZWF0dXJlXyA9IG51bGw7XG4gICAgICB0aGlzLnNrZXRjaFBvaW50XyA9IG51bGw7XG4gICAgICB0aGlzLm92ZXJsYXlfLmdldFNvdXJjZSgpLmNsZWFyKHRydWUpO1xuICAgIH1cblxuICAgIHRoaXMuc2tldGNoUG9pbnRzXyA9IFtdO1xuICAgIHRoaXMuc2V0KCdkaXJ0eScsIGZhbHNlKTtcbiAgICB0aGlzLnNldCgnZHJhd2luZycsIGZhbHNlKTtcbiAgICB0aGlzLnNldCgndmFsaWQnLCBmYWxzZSk7XG4gICAgcmV0dXJuIHNrZXRjaEZlYXR1cmU7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YXRlXyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlXygpIHtcbiAgICB2YXIgbWFwID0gdGhpcy5nZXRNYXAoKTtcbiAgICB2YXIgYWN0aXZlID0gdGhpcy5nZXRBY3RpdmUoKTtcblxuICAgIGlmICghbWFwIHx8ICFhY3RpdmUpIHtcbiAgICAgIHRoaXMuYWJvcnREcmF3aW5nXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0RHJhd2luZ18oKTtcbiAgICB9XG5cbiAgICB0aGlzLm92ZXJsYXlfLnNldE1hcChhY3RpdmUgPyBtYXAgOiBudWxsKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVmlld0NlbnRlckNoYW5nZV8gPSBmdW5jdGlvbiBoYW5kbGVWaWV3Q2VudGVyQ2hhbmdlXyhldnQpIHtcbiAgICB2YXIgYWN0aXZlID0gdGhpcy5nZXRBY3RpdmUoKTtcbiAgICB2YXIgZHJhd2luZyA9IHRoaXMuZ2V0RHJhd2luZygpO1xuXG4gICAgaWYgKCFhY3RpdmUgfHwgIWRyYXdpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZU9yVXBkYXRlU2tldGNoUG9pbnRfKCk7XG5cbiAgICBpZiAodGhpcy50eXBlXyA9PT0gJ1BvaW50Jykge1xuICAgICAgdGhpcy5hZGRUb0RyYXdpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RpZnlEcmF3aW5nXygpO1xuICAgICAgdGhpcy51cGRhdGVTa2V0Y2hGZWF0dXJlc18oKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZU9yVXBkYXRlU2tldGNoUG9pbnRfID0gZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVTa2V0Y2hQb2ludF8oKSB7XG4gICAgdmFyIGNlbnRlciA9IHRoaXMuZ2V0Q2VudGVyXygpO1xuXG4gICAgaWYgKHRoaXMuc2tldGNoUG9pbnRfKSB7XG4gICAgICB2YXIgZ2VvbWV0cnkgPSB0aGlzLmdldFNrZXRjaFBvaW50R2VvbWV0cnlfKCk7XG4gICAgICBnZW9tZXRyeS5zZXRDb29yZGluYXRlcyhjZW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNrZXRjaFBvaW50XyA9IG5ldyBvbEZlYXR1cmUobmV3IG9sR2VvbVBvaW50KGNlbnRlcikpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU2tldGNoRmVhdHVyZXNfID0gZnVuY3Rpb24gdXBkYXRlU2tldGNoRmVhdHVyZXNfKCkge1xuICAgIHZhciBza2V0Y2hGZWF0dXJlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc2tldGNoRmVhdHVyZV8pIHtcbiAgICAgIHNrZXRjaEZlYXR1cmVzLnB1c2godGhpcy5za2V0Y2hGZWF0dXJlXyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2tldGNoUG9pbnRfKSB7XG4gICAgICBza2V0Y2hGZWF0dXJlcy5wdXNoKHRoaXMuc2tldGNoUG9pbnRfKTtcbiAgICB9XG5cbiAgICB2YXIgb3ZlcmxheVNvdXJjZSA9IHRoaXMub3ZlcmxheV8uZ2V0U291cmNlKCk7XG4gICAgb3ZlcmxheVNvdXJjZS5jbGVhcih0cnVlKTtcbiAgICBvdmVybGF5U291cmNlLmFkZEZlYXR1cmVzKHNrZXRjaEZlYXR1cmVzKTtcbiAgICBvdmVybGF5U291cmNlLmFkZEZlYXR1cmVzKHRoaXMuc2tldGNoUG9pbnRzXyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFNrZXRjaFBvaW50R2VvbWV0cnlfID0gZnVuY3Rpb24gZ2V0U2tldGNoUG9pbnRHZW9tZXRyeV8oKSB7XG4gICAgY29uc29sZS5hc3NlcnQodGhpcy5za2V0Y2hQb2ludF8sICdza2V0Y2ggcG9pbnQgc2hvdWxkIGJlIHRocnV0eScpO1xuICAgIHZhciBnZW9tZXRyeSA9IHRoaXMuc2tldGNoUG9pbnRfLmdldEdlb21ldHJ5KCk7XG5cbiAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21Qb2ludCkge1xuICAgICAgcmV0dXJuIGdlb21ldHJ5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnV3JvbmcgZ2VvbWV0cnkgdHlwZSc7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRDZW50ZXJfID0gZnVuY3Rpb24gZ2V0Q2VudGVyXygpIHtcbiAgICB2YXIgY2VudGVyID0gdGhpcy5nZXRNYXAoKS5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgY29uc29sZS5hc3NlcnQoQXJyYXkuaXNBcnJheShjZW50ZXIpKTtcbiAgICByZXR1cm4gY2VudGVyO1xuICB9O1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0ob2xJbnRlcmFjdGlvbkludGVyYWN0aW9uKTtcblxuZXhwb3J0IHsgX2RlZmF1bHQgYXMgZGVmYXVsdCB9OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9