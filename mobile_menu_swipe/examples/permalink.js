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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/ 		"permalink": 0
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
/******/ 	deferredModules.push([30,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/permalink.css":
/*!********************************!*\
  !*** ./examples/permalink.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/permalink.js":
/*!*******************************!*\
  !*** ./examples/permalink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permalink_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permalink.css */ "./examples/permalink.css");
/* harmony import */ var _permalink_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_permalink_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngeo_format_FeatureHash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/format/FeatureHash.js */ "./src/format/FeatureHash.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/misc/decorate.js */ "./src/misc/decorate.js");
/* harmony import */ var ngeo_statemanager_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/statemanager/module.js */ "./src/statemanager/module.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/interaction/Draw.js */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
DrawComponentController.$inject = ["$scope", "ngeoLocation"];
MapComponentController.$inject = ["ngeoLocation", "ngeoDebounce"];















var module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, ngeo_statemanager_module_js__WEBPACK_IMPORTED_MODULE_6__["default"].name]);
var mapComponent = {
  controller: 'AppMapController as ctrl',
  bindings: {
    'map': '=appMap'
  },
  template: '<div ngeo-map=ctrl.map></div>'
};
module.component('appMap', mapComponent);

function MapComponentController(ngeoLocation, ngeoDebounce) {
  this.map = null;
  this.ngeoLocation_ = ngeoLocation;
  this.ngeoDebounce_ = ngeoDebounce;
}

module.controller('AppMapController', MapComponentController);

MapComponentController.prototype.$onInit = function () {
  var _this = this;

  if (!this.map) {
    throw new Error('Missing map');
  }

  var view = this.map.getView();
  var zoom_ = this.ngeoLocation_.getParam('z');
  var zoom = zoom_ !== undefined ? +zoom_ : 4;
  var x = this.ngeoLocation_.getParam('x');
  var y = this.ngeoLocation_.getParam('y');
  var center = x !== undefined && y !== undefined ? [+x, +y] : [0, 0];
  view.setCenter(center);
  view.setZoom(zoom);
  this.ngeoLocation_.updateParams({
    'z': "" + zoom,
    'x': "" + Math.round(center[0]),
    'y': "" + Math.round(center[1])
  });
  view.on('propertychange', this.ngeoDebounce_(function (e) {
    var center = view.getCenter();

    if (!center) {
      throw new Error('Missing center');
    }

    var params = {
      'z': "" + view.getZoom(),
      'x': "" + Math.round(center[0]),
      'y': "" + Math.round(center[1])
    };

    _this.ngeoLocation_.updateParams(params);
  }, 300, true));
};

var drawComponent = {
  controller: 'AppDrawController as ctrl',
  bindings: {
    'map': '=appDrawMap',
    'layer': '=appDrawLayer'
  },
  template: '<label>Enable drawing:' + '<input type="checkbox" ng-model="ctrl.interaction.active" />' + '</label><br>' + '<button ng-click="ctrl.clearLayer()">Clear layer</button>'
};
module.component('appDraw', drawComponent);

function DrawComponentController($scope, ngeoLocation) {
  this.map = null;
  this.layer = null;
  this.ngeoLocation_ = ngeoLocation;
  this.scope_ = $scope;
  this.featureSeq_ = 0;
  this.interaction = null;
}

DrawComponentController.prototype.$onInit = function () {
  var _this2 = this;

  if (!this.map) {
    throw new Error('Missing map');
  }

  if (!this.layer) {
    throw new Error('Missing layer');
  }

  var vectorSource = this.layer.getSource();
  this.interaction = new ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
    type: 'LineString',
    source: vectorSource
  });
  this.interaction.setActive(false);
  this.map.addInteraction(this.interaction);
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_5__["interactionDecoration"])(this.interaction);
  this.interaction.on('drawend', function (e) {
    e.feature.set('id', ++_this2.featureSeq_);
  });
  var fhFormat = new ngeo_format_FeatureHash_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  vectorSource.on('addfeature', function (e) {
    var feature = e.feature;
    feature.setStyle(new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
        color: [255, 0, 0, 1],
        width: 2
      })
    }));
    var features = vectorSource.getFeatures();
    var encodedFeatures = fhFormat.writeFeatures(features);

    _this2.scope_.$applyAsync(function () {
      _this2.ngeoLocation_.updateParams({
        'features': encodedFeatures
      });
    });
  });
  var encodedFeatures = this.ngeoLocation_.getParam('features');

  if (encodedFeatures !== undefined) {
    var features = fhFormat.readFeatures(encodedFeatures);
    this.featureSeq_ = features.length;
    vectorSource.addFeatures(features);
  }
};

DrawComponentController.prototype.clearLayer = function () {
  if (!this.layer) {
    throw new Error('Missing layer');
  }

  var source = this.layer.getSource();

  if (!(source instanceof ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__["default"])) {
    throw new Error('Wrong source');
  }

  source.clear(true);
  this.featureSeq_ = 0;
  this.ngeoLocation_.deleteParam('features');
};

module.controller('AppDrawController', DrawComponentController);

function MainController() {
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_11__["default"]()
    })]
  });
  var vectorSource = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__["default"]();
  this.vectorLayer = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
    source: vectorSource
  });
  this.vectorLayer.setMap(this.map);
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./node_modules/ol/format/Feature.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/ol/format/Feature.js from dll-reference vendor ***!
  \*******************************************************************************/
/*! exports provided: default, transformGeometryWithOptions, transformExtentWithOptions */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(58);

/***/ }),

/***/ "./node_modules/ol/format/TextFeature.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/ol/format/TextFeature.js from dll-reference vendor ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(1034);

/***/ }),

/***/ "./src/format/FeatureHash.js":
/*!***********************************!*\
  !*** ./src/format/FeatureHash.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/format/FeatureProperties.js */ "./src/format/FeatureProperties.js");
/* harmony import */ var ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/format/FeatureHashStyleType.js */ "./src/format/FeatureHashStyleType.js");
/* harmony import */ var ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils.js */ "./src/utils.js");
/* harmony import */ var ol_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/color.js */ "./node_modules/ol/color.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_format_Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/format/Feature.js */ "./node_modules/ol/format/Feature.js");
/* harmony import */ var ol_format_TextFeature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/format/TextFeature.js */ "./node_modules/ol/format/TextFeature.js");
/* harmony import */ var ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/GeometryLayout.js */ "./node_modules/ol/geom/GeometryLayout.js");
/* harmony import */ var ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/LineString.js */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/MultiLineString.js */ "./node_modules/ol/geom/MultiLineString.js");
/* harmony import */ var ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/geom/MultiPoint.js */ "./node_modules/ol/geom/MultiPoint.js");
/* harmony import */ var ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom/MultiPolygon.js */ "./node_modules/ol/geom/MultiPolygon.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Text_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/style/Text.js */ "./node_modules/ol/style/Text.js");
/* harmony import */ var ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/geom/Geometry.js */ "./node_modules/ol/geom/Geometry.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





















var LegacyProperties_ = {};
var DEFAULT_ACCURACY = 0.1;
var StyleTypes_ = {
  'LineString': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING,
  'Point': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POINT,
  'Polygon': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON,
  'MultiLineString': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING,
  'MultiPoint': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POINT,
  'MultiPolygon': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON
};
var CHAR64_ = '.-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz';
var GEOMETRY_READERS_ = {
  'P': readMultiPointGeometry_,
  'L': readMultiLineStringGeometry_,
  'A': readMultiPolygonGeometry_,
  'l': readLineStringGeometry_,
  'p': readPointGeometry_,
  'a': readPolygonGeometry_
};
var GEOMETRY_WRITERS_ = {
  'MultiLineString': writeMultiLineStringGeometry_,
  'MultiPoint': writeMultiPointGeometry_,
  'MultiPolygon': writeMultiPolygonGeometry_,
  'LineString': writeLineStringGeometry_,
  'Point': writePointGeometry_,
  'Polygon': writePolygonGeometry_
};

var FeatureHash = function (_olFormatTextFeature) {
  _inheritsLoose(FeatureHash, _olFormatTextFeature);

  function FeatureHash(opt_options) {
    var _this;

    _this = _olFormatTextFeature.call(this) || this;
    var options = opt_options || {};
    _this.accuracy_ = options.accuracy || DEFAULT_ACCURACY;
    _this.encodeStyles_ = options.encodeStyles || true;
    _this.propertiesFunction_ = options.properties || defaultPropertiesFunction_;
    _this.setStyle_ = options.setStyle !== undefined ? options.setStyle : true;
    _this.prevX_ = 0;
    _this.prevY_ = 0;
    LegacyProperties_ = options.propertiesType || {};
    _this.defaultValues_ = options.defaultValues || {};
    return _this;
  }

  var _proto = FeatureHash.prototype;

  _proto.decodeCoordinates_ = function decodeCoordinates_(text, opt_flatCoordinates) {
    var len = text.length;
    var index = 0;
    var flatCoordinates = opt_flatCoordinates !== undefined ? opt_flatCoordinates : [];
    var i = flatCoordinates.length;

    while (index < len) {
      var b = void 0;
      var shift = 0;
      var result = 0;

      do {
        b = CHAR64_.indexOf(text.charAt(index++));
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 32);

      var dx = result & 1 ? ~(result >> 1) : result >> 1;
      this.prevX_ += dx;
      shift = 0;
      result = 0;

      do {
        b = CHAR64_.indexOf(text.charAt(index++));
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 32);

      var dy = result & 1 ? ~(result >> 1) : result >> 1;
      this.prevY_ += dy;
      flatCoordinates[i++] = this.prevX_ * this.accuracy_;
      flatCoordinates[i++] = this.prevY_ * this.accuracy_;
    }

    return flatCoordinates;
  };

  _proto.encodeCoordinates_ = function encodeCoordinates_(flatCoordinates, stride, offset, end) {
    var encodedCoordinates = '';

    for (var i = offset; i < end; i += stride) {
      var x = flatCoordinates[i];
      var y = flatCoordinates[i + 1];
      x = Math.floor(x / this.accuracy_);
      y = Math.floor(y / this.accuracy_);
      var dx = x - this.prevX_;
      var dy = y - this.prevY_;
      this.prevX_ = x;
      this.prevY_ = y;
      encodedCoordinates += encodeSignedNumber_(dx) + encodeSignedNumber_(dy);
    }

    return encodedCoordinates;
  };

  _proto.readFeatureFromText = function readFeatureFromText(text, opt_options) {
    console.assert(text.length > 2);
    console.assert(text[1] === '(');
    console.assert(text.endsWith(')'));
    var splitIndex = text.indexOf('~');
    var geometryText = splitIndex >= 0 ? text.substring(0, splitIndex) + ")" : text;
    var geometry = this.readGeometryFromText(geometryText, opt_options);
    var feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"](geometry);

    if (splitIndex >= 0) {
      var attributesAndStylesText = text.substring(splitIndex + 1, text.length - 1);
      splitIndex = attributesAndStylesText.indexOf('~');
      var attributesText = splitIndex >= 0 ? attributesAndStylesText.substring(0, splitIndex) : attributesAndStylesText;

      if (attributesText != '') {
        var parts = attributesText.split('\'');

        for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var encodedPart = _ref;
          var part = decodeURIComponent(encodedPart);
          var keyVal = part.split('*');
          console.assert(keyVal.length === 2);
          var key = keyVal[0];
          var value = keyVal[1];

          if (!this.setStyle_ && LegacyProperties_[key]) {
            key = LegacyProperties_[key];
          }

          feature.set(key, castValue_(key, value));
        }
      }

      if (splitIndex >= 0) {
        var stylesText = attributesAndStylesText.substring(splitIndex + 1);

        if (this.setStyle_) {
          setStyleInFeature_(stylesText, feature);
        } else {
          setStyleProperties_(stylesText, feature);
        }
      }
    }

    return feature;
  };

  _proto.readFeaturesFromText = function readFeaturesFromText(text, opt_options) {
    var _this2 = this;

    console.assert(text.startsWith('F'));
    this.prevX_ = 0;
    this.prevY_ = 0;
    var features = [];
    text = text.substring(1);

    while (text.length > 0) {
      var index = text.indexOf(')');
      console.assert(index >= 0);
      var feature = this.readFeatureFromText(text.substring(0, index + 1), opt_options);
      features.push(feature);
      text = text.substring(index + 1);
    }

    features.forEach(function (feature) {
      for (var key in _this2.defaultValues_) {
        var property = LegacyProperties_[key];

        if (feature.get(property) === undefined) {
          feature.set(property, _this2.defaultValues_[key].call(null, feature));
        }
      }
    });
    return features;
  };

  _proto.readGeometryFromText = function readGeometryFromText(text, opt_options) {
    var geometryReader = GEOMETRY_READERS_[text[0]];
    console.assert(geometryReader !== undefined);
    return geometryReader.call(this, text);
  };

  _proto.writeFeatureText = function writeFeatureText(feature, opt_options) {
    var encodedParts = [];
    var encodedGeometry = '';
    var geometry = feature.getGeometry();

    if (geometry) {
      encodedGeometry = this.writeGeometryText(geometry, opt_options);
    }

    if (encodedGeometry.length > 0) {
      console.assert(encodedGeometry.endsWith(')'));
      encodedGeometry = encodedGeometry.substring(0, encodedGeometry.length - 1);
      encodedParts.push(encodedGeometry);
    }

    var encodedProperties = [];
    var propFunction = this.propertiesFunction_(feature);

    for (var key in propFunction) {
      var value = propFunction[key];

      if (value !== undefined && value !== null && key !== feature.getGeometryName()) {
        if (encodedProperties.length !== 0) {
          encodedProperties.push('\'');
        }

        var encoded = encodeURIComponent(key.replace(/[()'*]/g, '_') + "*" + value.toString().replace(/[()'*]/g, '_'));
        encodedProperties.push(encoded);
      }
    }

    if (encodedProperties.length > 0) {
      encodedParts.push('~');
      Array.prototype.push.apply(encodedParts, encodedProperties);
    }

    if (this.encodeStyles_) {
      var styleFunction = feature.getStyleFunction();

      if (styleFunction !== undefined) {
        var styles = styleFunction(feature, 0);

        if (styles !== null) {
          var encodedStyles = [];
          styles = Array.isArray(styles) ? styles : [styles];

          if (!geometry) {
            throw new Error('Missing geometry');
          }

          encodeStyles_(styles, geometry.getType(), encodedStyles);

          if (encodedStyles.length > 0) {
            encodedParts.push('~');
            Array.prototype.push.apply(encodedParts, encodedStyles);
          }
        }
      }
    }

    encodedParts.push(')');
    return encodedParts.join('');
  };

  _proto.writeFeaturesText = function writeFeaturesText(features, opt_options) {
    this.prevX_ = 0;
    this.prevY_ = 0;
    var textArray = [];

    if (features.length > 0) {
      textArray.push('F');

      for (var i = 0, ii = features.length; i < ii; ++i) {
        textArray.push(this.writeFeatureText(features[i], opt_options));
      }
    }

    return textArray.join('');
  };

  _proto.writeGeometryText = function writeGeometryText(geometry, opt_options) {
    var geometryWriter = GEOMETRY_WRITERS_[geometry.getType()];
    console.assert(geometryWriter !== undefined);
    var transformedGeometry = Object(ol_format_Feature_js__WEBPACK_IMPORTED_MODULE_5__["transformGeometryWithOptions"])(geometry, true, opt_options);

    if (!(transformedGeometry instanceof ol_geom_Geometry_js__WEBPACK_IMPORTED_MODULE_19__["default"])) {
      throw new Error('Missing transformedGeometry');
    }

    var encGeom = geometryWriter.call(this, transformedGeometry);

    if (!encGeom) {
      throw new Error('Missing encodedGeometry');
    }

    return encGeom;
  };

  return FeatureHash;
}(ol_format_TextFeature_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (FeatureHash);

function defaultPropertiesFunction_(feature) {
  return feature.getProperties();
}

function encodeSignedNumber_(num) {
  var signedNum = num << 1;

  if (num < 0) {
    signedNum = ~signedNum;
  }

  return encodeNumber_(signedNum);
}

function encodeNumber_(num) {
  var encodedNumber = '';

  while (num >= 0x20) {
    encodedNumber += CHAR64_.charAt(0x20 | num & 0x1f);
    num >>= 5;
  }

  encodedNumber += CHAR64_.charAt(num);
  return encodedNumber;
}

function encodeStyles_(styles, geometryType, encodedStyles) {
  var styleType = StyleTypes_[geometryType];
  console.assert(styleType !== undefined);

  for (var _iterator2 = styles, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var style = _ref2;
    var fillStyle = style.getFill();
    var imageStyle = style.getImage();
    var strokeStyle = style.getStroke();
    var textStyle = style.getText();

    if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON) {
      if (fillStyle !== null) {
        encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles);
      }
    } else if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING) {
      if (strokeStyle !== null) {
        encodeStyleLine_(strokeStyle, encodedStyles);
      }
    } else if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POINT) {
      if (imageStyle !== null) {
        encodeStylePoint_(imageStyle, encodedStyles);
      }
    }

    if (textStyle !== null) {
      encodeStyleText_(textStyle, encodedStyles);
    }
  }
}

function encodeStyleLine_(strokeStyle, encodedStyles) {
  encodeStyleStroke_(strokeStyle, encodedStyles);
}

function encodeStylePoint_(imageStyle, encodedStyles) {
  if (imageStyle instanceof ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_14__["default"]) {
    var radius = imageStyle.getRadius();

    if (encodedStyles.length > 0) {
      encodedStyles.push('\'');
    }

    encodedStyles.push(encodeURIComponent("pointRadius*" + radius));
    var fillStyle = imageStyle.getFill();

    if (fillStyle !== null) {
      encodeStyleFill_(fillStyle, encodedStyles);
    }

    var strokeStyle = imageStyle.getStroke();

    if (strokeStyle !== null) {
      encodeStyleStroke_(strokeStyle, encodedStyles);
    }
  }
}

function encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles) {
  encodeStyleFill_(fillStyle, encodedStyles);

  if (strokeStyle !== null) {
    encodeStyleStroke_(strokeStyle, encodedStyles);
  }
}

function encodeStyleFill_(fillStyle, encodedStyles, propertyName) {
  if (propertyName === void 0) {
    propertyName = 'fillColor';
  }

  var fillColor = fillStyle.getColor();
  var fillColorHex;

  if (fillColor !== null) {
    if (Array.isArray(fillColor)) {
      fillColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(fillColor);
    } else if (typeof fillColor === 'string') {
      fillColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(Object(ol_color_js__WEBPACK_IMPORTED_MODULE_3__["asArray"])(fillColor));
    } else {
      throw new Error('Unsupported color');
    }

    if (encodedStyles.length > 0) {
      encodedStyles.push('\'');
    }

    encodedStyles.push(encodeURIComponent(propertyName + "*" + fillColorHex));
  }
}

function encodeStyleStroke_(strokeStyle, encodedStyles) {
  var strokeColor = strokeStyle.getColor();

  if (strokeColor !== null) {
    if (Array.isArray(strokeColor)) {
      var strokeColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(strokeColor);

      if (encodedStyles.length > 0) {
        encodedStyles.push('\'');
      }

      encodedStyles.push(encodeURIComponent("strokeColor*" + strokeColorHex));
    }
  }

  var strokeWidth = strokeStyle.getWidth();

  if (strokeWidth !== undefined) {
    if (encodedStyles.length > 0) {
      encodedStyles.push('\'');
    }

    encodedStyles.push(encodeURIComponent("strokeWidth*" + strokeWidth));
  }
}

function encodeStyleText_(textStyle, encodedStyles) {
  var fontStyle = textStyle.getFont();

  if (fontStyle !== undefined) {
    var font = fontStyle.split(' ');

    if (font.length >= 3) {
      if (encodedStyles.length > 0) {
        encodedStyles.push('\'');
      }

      encodedStyles.push(encodeURIComponent("fontSize*" + font[1]));
    }
  }

  var fillStyle = textStyle.getFill();

  if (fillStyle !== null) {
    encodeStyleFill_(fillStyle, encodedStyles, 'fontColor');
  }
}

function readLineStringGeometry_(text) {
  console.assert(text.startsWith('l('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  return new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_8__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"].XY);
}

function readMultiLineStringGeometry_(text) {
  console.assert(text.startsWith('L('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var ends = [];
  var lineStrings = text.split('\'');

  for (var i = 0, ii = lineStrings.length; i < ii; ++i) {
    flatCoordinates = this.decodeCoordinates_(lineStrings[i], flatCoordinates);
    ends[i] = flatCoordinates.length;
  }

  return new ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_9__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"].XY, ends);
}

function readPointGeometry_(text) {
  console.assert(text.startsWith('p('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  console.assert(flatCoordinates.length === 2);
  return new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"].XY);
}

function readMultiPointGeometry_(text) {
  console.assert(text.startsWith('P('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  return new ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_10__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"].XY);
}

function readPolygonGeometry_(text) {
  console.assert(text.startsWith('a('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var ends = [];
  var rings = text.split('\'');

  for (var i = 0, ii = rings.length; i < ii; ++i) {
    flatCoordinates = this.decodeCoordinates_(rings[i], flatCoordinates);
    var end = flatCoordinates.length;

    if (i === 0) {
      flatCoordinates[end++] = flatCoordinates[0];
      flatCoordinates[end++] = flatCoordinates[1];
    } else {
      flatCoordinates[end++] = flatCoordinates[ends[i - 1]];
      flatCoordinates[end++] = flatCoordinates[ends[i - 1] + 1];
    }

    ends[i] = end;
  }

  return new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_13__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"].XY, ends);
}

function readMultiPolygonGeometry_(text) {
  console.assert(text.startsWith('A('));
  console.assert(text.endsWith(')'));
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var endss = [];
  var polygons = text.split(')(');

  for (var i = 0, ii = polygons.length; i < ii; ++i) {
    var rings = polygons[i].split('\'');
    var ends = endss[i] = [];

    for (var j = 0, jj = rings.length; j < jj; ++j) {
      flatCoordinates = this.decodeCoordinates_(rings[j], flatCoordinates);
      var end = flatCoordinates.length;

      if (j === 0) {
        flatCoordinates[end++] = flatCoordinates[0];
        flatCoordinates[end++] = flatCoordinates[1];
      } else {
        flatCoordinates[end++] = flatCoordinates[ends[j - 1]];
        flatCoordinates[end++] = flatCoordinates[ends[j - 1] + 1];
      }

      ends[j] = end;
    }
  }

  return new ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_11__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"].XY, endss);
}

function setStyleInFeature_(text, feature) {
  if (text == '') {
    return;
  }

  var properties = getStyleProperties_(text, feature);
  var fillColor = properties.fillColor;
  var fontSize = properties.fontSize;
  var fontColor = properties.fontColor;
  var pointRadius = properties.pointRadius;
  var strokeColor = properties.strokeColor;
  var strokeWidth = properties.strokeWidth;
  var fillStyle = null;

  if (fillColor !== undefined) {
    fillStyle = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
      color: fillColor
    });
  }

  var strokeStyle = null;

  if (strokeColor !== undefined && strokeWidth !== undefined) {
    if (typeof strokeWidth != 'number') {
      throw new Error('Missing strokeWidth');
    }

    strokeStyle = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
      color: strokeColor,
      width: strokeWidth
    });
  }

  var imageStyle = null;

  if (pointRadius !== undefined) {
    if (typeof pointRadius != 'number') {
      throw new Error('Missing pointRadius');
    }

    var _options = {
      radius: pointRadius
    };

    if (fillStyle) {
      _options.fill = fillStyle;
    }

    if (strokeStyle) {
      _options.stroke = strokeStyle;
    }

    imageStyle = new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_14__["default"](_options);
    fillStyle = strokeStyle = null;
  }

  var textStyle = null;

  if (fontSize !== undefined && fontColor !== undefined) {
    textStyle = new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
      font: fontSize + " sans-serif",
      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
        color: fontColor
      })
    });
  }

  var options = {};

  if (fillStyle) {
    options.fill = fillStyle;
  }

  if (strokeStyle) {
    options.stroke = strokeStyle;
  }

  if (imageStyle) {
    options.image = imageStyle;
  }

  if (textStyle) {
    options.text = textStyle;
  }

  var style = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_17__["default"](options);
  feature.setStyle(style);
}

function setStyleProperties_(text, feature) {
  var properties = getStyleProperties_(text, feature);
  var geometry = feature.getGeometry();

  if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"]) {
    if (properties.isLabel || properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_TEXT]) {
      delete properties.strokeColor;
      delete properties.fillColor;
    } else {
      delete properties.fontColor;
      delete properties.fontSize;
    }
  } else {
    delete properties.fontColor;

    if (geometry instanceof ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
      delete properties.fillColor;
      delete properties.fillOpacity;
    }
  }

  if (properties.fontSize) {
    var fontSizeStr = properties.fontSize;

    if (typeof fontSizeStr !== 'string') {
      throw new Error('Wrong fontSizeStr type');
    }

    var fontSize = parseFloat(fontSizeStr);

    if (fontSizeStr.includes('px')) {
      fontSize = Math.round(fontSize / 1.333333);
    }

    properties.fontSize = fontSize;
  }

  var clone = {};

  for (var key in properties) {
    var value = properties[key];

    if (LegacyProperties_[key]) {
      clone[LegacyProperties_[key]] = value;
    } else {
      clone[key] = value;
    }
  }

  feature.setProperties(clone);
}

function castValue_(key, value) {
  var numProperties = [ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].ANGLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].OPACITY, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].SIZE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].STROKE, 'pointRadius', 'strokeWidth'];
  var boolProperties = [ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_CIRCLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_RECTANGLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_TEXT, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_MEASURE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_LABEL, 'isCircle', 'isRectangle', 'isLabel', 'showMeasure', 'showLabel'];

  if (numProperties.includes(key)) {
    return +value;
  } else if (boolProperties.includes(key)) {
    return value === 'true' ? true : false;
  } else {
    return value;
  }
}

function getStyleProperties_(text, feature) {
  var parts = text.split('\'');
  var properties = {};

  for (var _iterator3 = parts, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
    var _ref3;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref3 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref3 = _i3.value;
    }

    var encodedPart = _ref3;
    var part = decodeURIComponent(encodedPart);
    var keyVal = part.split('*');
    console.assert(keyVal.length === 2);
    var key = keyVal[0];
    var val = keyVal[1];
    properties[key] = castValue_(key, val);
  }

  return properties;
}

function writeLineStringGeometry_(geometry) {
  if (geometry instanceof ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "l(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }

  return null;
}

function writeMultiLineStringGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
    var ends = geometry.getEnds();
    var lineStringCount = ends.length;
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var offset = 0;
    var textArray = ['L('];

    for (var i = 0; i < lineStringCount; ++i) {
      var end = ends[i];
      var text = this.encodeCoordinates_(flatCoordinates, stride, offset, end);

      if (i !== 0) {
        textArray.push('\'');
      }

      textArray.push(text);
      offset = end;
    }

    textArray.push(')');
    return textArray.join('');
  }

  return null;
}

function writePointGeometry_(geometry) {
  if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "p(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }

  return null;
}

function writeMultiPointGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_10__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "P(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }

  return null;
}

function encodeRings_(flatCoordinates, stride, offset, ends, textArray) {
  var linearRingCount = ends.length;

  for (var i = 0; i < linearRingCount; ++i) {
    var end = ends[i] - stride;
    var text = this.encodeCoordinates_(flatCoordinates, stride, offset, end);

    if (i !== 0) {
      textArray.push('\'');
    }

    textArray.push(text);
    offset = ends[i];
  }

  return offset;
}

function writePolygonGeometry_(geometry) {
  if (geometry instanceof ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_13__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var ends = geometry.getEnds();
    var offset = 0;
    var textArray = ['a('];
    encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);
    textArray.push(')');
    return textArray.join('');
  }

  return null;
}

function writeMultiPolygonGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var endss = geometry.getEndss();
    var polygonCount = endss.length;
    var offset = 0;
    var textArray = ['A'];

    for (var i = 0; i < polygonCount; ++i) {
      var ends = endss[i];
      textArray.push('(');
      offset = encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);
      textArray.push(')');
    }

    return textArray.join('');
  } else {
    throw new Error('Wrong geometry type');
  }
}

/***/ }),

/***/ "./src/format/FeatureHashStyleType.js":
/*!********************************************!*\
  !*** ./src/format/FeatureHashStyleType.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  LINE_STRING: 'LineString',
  POINT: 'Point',
  POLYGON: 'Polygon'
});

/***/ }),

/***/ 30:
/*!******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/permalink.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/permalink.js */"./examples/permalink.js");


/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWFsaW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3Blcm1hbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0L0ZlYXR1cmVIYXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtYXQvRmVhdHVyZUhhc2hTdHlsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBlcm1hbGlua1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFszMCxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJEcmF3Q29tcG9uZW50Q29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwibmdlb0xvY2F0aW9uXCJdO1xuTWFwQ29tcG9uZW50Q29udHJvbGxlci4kaW5qZWN0ID0gW1wibmdlb0xvY2F0aW9uXCIsIFwibmdlb0RlYm91bmNlXCJdO1xuaW1wb3J0ICcuL3Blcm1hbGluay5jc3MnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb0Zvcm1hdEZlYXR1cmVIYXNoIGZyb20gJ25nZW8vZm9ybWF0L0ZlYXR1cmVIYXNoLmpzJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb01pc2NEZWJvdW5jZSBmcm9tICduZ2VvL21pc2MvZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgaW50ZXJhY3Rpb25EZWNvcmF0aW9uIH0gZnJvbSAnbmdlby9taXNjL2RlY29yYXRlLmpzJztcbmltcG9ydCBuZ2VvU3RhdGVtYW5hZ2VyTW9kdWxlIGZyb20gJ25nZW8vc3RhdGVtYW5hZ2VyL21vZHVsZS5qcyc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbEludGVyYWN0aW9uRHJhdyBmcm9tICdvbC9pbnRlcmFjdGlvbi9EcmF3LmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbExheWVyVmVjdG9yIGZyb20gJ29sL2xheWVyL1ZlY3Rvci5qcyc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG5pbXBvcnQgb2xTb3VyY2VWZWN0b3IgZnJvbSAnb2wvc291cmNlL1ZlY3Rvci5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZS5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb01pc2NEZWJvdW5jZS5uYW1lLCBuZ2VvU3RhdGVtYW5hZ2VyTW9kdWxlLm5hbWVdKTtcbnZhciBtYXBDb21wb25lbnQgPSB7XG4gIGNvbnRyb2xsZXI6ICdBcHBNYXBDb250cm9sbGVyIGFzIGN0cmwnLFxuICBiaW5kaW5nczoge1xuICAgICdtYXAnOiAnPWFwcE1hcCdcbiAgfSxcbiAgdGVtcGxhdGU6ICc8ZGl2IG5nZW8tbWFwPWN0cmwubWFwPjwvZGl2Pidcbn07XG5tb2R1bGUuY29tcG9uZW50KCdhcHBNYXAnLCBtYXBDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBNYXBDb21wb25lbnRDb250cm9sbGVyKG5nZW9Mb2NhdGlvbiwgbmdlb0RlYm91bmNlKSB7XG4gIHRoaXMubWFwID0gbnVsbDtcbiAgdGhpcy5uZ2VvTG9jYXRpb25fID0gbmdlb0xvY2F0aW9uO1xuICB0aGlzLm5nZW9EZWJvdW5jZV8gPSBuZ2VvRGVib3VuY2U7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdBcHBNYXBDb250cm9sbGVyJywgTWFwQ29tcG9uZW50Q29udHJvbGxlcik7XG5cbk1hcENvbXBvbmVudENvbnRyb2xsZXIucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKCF0aGlzLm1hcCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBtYXAnKTtcbiAgfVxuXG4gIHZhciB2aWV3ID0gdGhpcy5tYXAuZ2V0VmlldygpO1xuICB2YXIgem9vbV8gPSB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW0oJ3onKTtcbiAgdmFyIHpvb20gPSB6b29tXyAhPT0gdW5kZWZpbmVkID8gK3pvb21fIDogNDtcbiAgdmFyIHggPSB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW0oJ3gnKTtcbiAgdmFyIHkgPSB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW0oJ3knKTtcbiAgdmFyIGNlbnRlciA9IHggIT09IHVuZGVmaW5lZCAmJiB5ICE9PSB1bmRlZmluZWQgPyBbK3gsICt5XSA6IFswLCAwXTtcbiAgdmlldy5zZXRDZW50ZXIoY2VudGVyKTtcbiAgdmlldy5zZXRab29tKHpvb20pO1xuICB0aGlzLm5nZW9Mb2NhdGlvbl8udXBkYXRlUGFyYW1zKHtcbiAgICAneic6IFwiXCIgKyB6b29tLFxuICAgICd4JzogXCJcIiArIE1hdGgucm91bmQoY2VudGVyWzBdKSxcbiAgICAneSc6IFwiXCIgKyBNYXRoLnJvdW5kKGNlbnRlclsxXSlcbiAgfSk7XG4gIHZpZXcub24oJ3Byb3BlcnR5Y2hhbmdlJywgdGhpcy5uZ2VvRGVib3VuY2VfKGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGNlbnRlciA9IHZpZXcuZ2V0Q2VudGVyKCk7XG5cbiAgICBpZiAoIWNlbnRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNlbnRlcicpO1xuICAgIH1cblxuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAneic6IFwiXCIgKyB2aWV3LmdldFpvb20oKSxcbiAgICAgICd4JzogXCJcIiArIE1hdGgucm91bmQoY2VudGVyWzBdKSxcbiAgICAgICd5JzogXCJcIiArIE1hdGgucm91bmQoY2VudGVyWzFdKVxuICAgIH07XG5cbiAgICBfdGhpcy5uZ2VvTG9jYXRpb25fLnVwZGF0ZVBhcmFtcyhwYXJhbXMpO1xuICB9LCAzMDAsIHRydWUpKTtcbn07XG5cbnZhciBkcmF3Q29tcG9uZW50ID0ge1xuICBjb250cm9sbGVyOiAnQXBwRHJhd0NvbnRyb2xsZXIgYXMgY3RybCcsXG4gIGJpbmRpbmdzOiB7XG4gICAgJ21hcCc6ICc9YXBwRHJhd01hcCcsXG4gICAgJ2xheWVyJzogJz1hcHBEcmF3TGF5ZXInXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGxhYmVsPkVuYWJsZSBkcmF3aW5nOicgKyAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5nLW1vZGVsPVwiY3RybC5pbnRlcmFjdGlvbi5hY3RpdmVcIiAvPicgKyAnPC9sYWJlbD48YnI+JyArICc8YnV0dG9uIG5nLWNsaWNrPVwiY3RybC5jbGVhckxheWVyKClcIj5DbGVhciBsYXllcjwvYnV0dG9uPidcbn07XG5tb2R1bGUuY29tcG9uZW50KCdhcHBEcmF3JywgZHJhd0NvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIERyYXdDb21wb25lbnRDb250cm9sbGVyKCRzY29wZSwgbmdlb0xvY2F0aW9uKSB7XG4gIHRoaXMubWFwID0gbnVsbDtcbiAgdGhpcy5sYXllciA9IG51bGw7XG4gIHRoaXMubmdlb0xvY2F0aW9uXyA9IG5nZW9Mb2NhdGlvbjtcbiAgdGhpcy5zY29wZV8gPSAkc2NvcGU7XG4gIHRoaXMuZmVhdHVyZVNlcV8gPSAwO1xuICB0aGlzLmludGVyYWN0aW9uID0gbnVsbDtcbn1cblxuRHJhd0NvbXBvbmVudENvbnRyb2xsZXIucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIGlmICghdGhpcy5tYXApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbWFwJyk7XG4gIH1cblxuICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbGF5ZXInKTtcbiAgfVxuXG4gIHZhciB2ZWN0b3JTb3VyY2UgPSB0aGlzLmxheWVyLmdldFNvdXJjZSgpO1xuICB0aGlzLmludGVyYWN0aW9uID0gbmV3IG9sSW50ZXJhY3Rpb25EcmF3KHtcbiAgICB0eXBlOiAnTGluZVN0cmluZycsXG4gICAgc291cmNlOiB2ZWN0b3JTb3VyY2VcbiAgfSk7XG4gIHRoaXMuaW50ZXJhY3Rpb24uc2V0QWN0aXZlKGZhbHNlKTtcbiAgdGhpcy5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvbik7XG4gIGludGVyYWN0aW9uRGVjb3JhdGlvbih0aGlzLmludGVyYWN0aW9uKTtcbiAgdGhpcy5pbnRlcmFjdGlvbi5vbignZHJhd2VuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5mZWF0dXJlLnNldCgnaWQnLCArK190aGlzMi5mZWF0dXJlU2VxXyk7XG4gIH0pO1xuICB2YXIgZmhGb3JtYXQgPSBuZXcgbmdlb0Zvcm1hdEZlYXR1cmVIYXNoKCk7XG4gIHZlY3RvclNvdXJjZS5vbignYWRkZmVhdHVyZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGZlYXR1cmUgPSBlLmZlYXR1cmU7XG4gICAgZmVhdHVyZS5zZXRTdHlsZShuZXcgb2xTdHlsZVN0eWxlKHtcbiAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGVTdHJva2Uoe1xuICAgICAgICBjb2xvcjogWzI1NSwgMCwgMCwgMV0sXG4gICAgICAgIHdpZHRoOiAyXG4gICAgICB9KVxuICAgIH0pKTtcbiAgICB2YXIgZmVhdHVyZXMgPSB2ZWN0b3JTb3VyY2UuZ2V0RmVhdHVyZXMoKTtcbiAgICB2YXIgZW5jb2RlZEZlYXR1cmVzID0gZmhGb3JtYXQud3JpdGVGZWF0dXJlcyhmZWF0dXJlcyk7XG5cbiAgICBfdGhpczIuc2NvcGVfLiRhcHBseUFzeW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5uZ2VvTG9jYXRpb25fLnVwZGF0ZVBhcmFtcyh7XG4gICAgICAgICdmZWF0dXJlcyc6IGVuY29kZWRGZWF0dXJlc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgZW5jb2RlZEZlYXR1cmVzID0gdGhpcy5uZ2VvTG9jYXRpb25fLmdldFBhcmFtKCdmZWF0dXJlcycpO1xuXG4gIGlmIChlbmNvZGVkRmVhdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmZWF0dXJlcyA9IGZoRm9ybWF0LnJlYWRGZWF0dXJlcyhlbmNvZGVkRmVhdHVyZXMpO1xuICAgIHRoaXMuZmVhdHVyZVNlcV8gPSBmZWF0dXJlcy5sZW5ndGg7XG4gICAgdmVjdG9yU291cmNlLmFkZEZlYXR1cmVzKGZlYXR1cmVzKTtcbiAgfVxufTtcblxuRHJhd0NvbXBvbmVudENvbnRyb2xsZXIucHJvdG90eXBlLmNsZWFyTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5sYXllcikge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBsYXllcicpO1xuICB9XG5cbiAgdmFyIHNvdXJjZSA9IHRoaXMubGF5ZXIuZ2V0U291cmNlKCk7XG5cbiAgaWYgKCEoc291cmNlIGluc3RhbmNlb2Ygb2xTb3VyY2VWZWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBzb3VyY2UnKTtcbiAgfVxuXG4gIHNvdXJjZS5jbGVhcih0cnVlKTtcbiAgdGhpcy5mZWF0dXJlU2VxXyA9IDA7XG4gIHRoaXMubmdlb0xvY2F0aW9uXy5kZWxldGVQYXJhbSgnZmVhdHVyZXMnKTtcbn07XG5cbm1vZHVsZS5jb250cm9sbGVyKCdBcHBEcmF3Q29udHJvbGxlcicsIERyYXdDb21wb25lbnRDb250cm9sbGVyKTtcblxuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoKSB7XG4gIHRoaXMubWFwID0gbmV3IG9sTWFwKHtcbiAgICBsYXllcnM6IFtuZXcgb2xMYXllclRpbGUoe1xuICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKVxuICAgIH0pXVxuICB9KTtcbiAgdmFyIHZlY3RvclNvdXJjZSA9IG5ldyBvbFNvdXJjZVZlY3RvcigpO1xuICB0aGlzLnZlY3RvckxheWVyID0gbmV3IG9sTGF5ZXJWZWN0b3Ioe1xuICAgIHNvdXJjZTogdmVjdG9yU291cmNlXG4gIH0pO1xuICB0aGlzLnZlY3RvckxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcyBmcm9tICduZ2VvL2Zvcm1hdC9GZWF0dXJlUHJvcGVydGllcy5qcyc7XG5pbXBvcnQgbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlIGZyb20gJ25nZW8vZm9ybWF0L0ZlYXR1cmVIYXNoU3R5bGVUeXBlLmpzJztcbmltcG9ydCB7IHJnYkFycmF5VG9IZXggfSBmcm9tICduZ2VvL3V0aWxzLmpzJztcbmltcG9ydCB7IGFzQXJyYXkgYXMgYXNDb2xvckFycmF5IH0gZnJvbSAnb2wvY29sb3IuanMnO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlLmpzJztcbmltcG9ydCB7IHRyYW5zZm9ybUdlb21ldHJ5V2l0aE9wdGlvbnMgfSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZS5qcyc7XG5pbXBvcnQgb2xGb3JtYXRUZXh0RmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvVGV4dEZlYXR1cmUuanMnO1xuaW1wb3J0IG9sR2VvbUdlb21ldHJ5TGF5b3V0IGZyb20gJ29sL2dlb20vR2VvbWV0cnlMYXlvdXQuanMnO1xuaW1wb3J0IG9sR2VvbUxpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lU3RyaW5nLmpzJztcbmltcG9ydCBvbEdlb21NdWx0aUxpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9NdWx0aUxpbmVTdHJpbmcuanMnO1xuaW1wb3J0IG9sR2VvbU11bHRpUG9pbnQgZnJvbSAnb2wvZ2VvbS9NdWx0aVBvaW50LmpzJztcbmltcG9ydCBvbEdlb21NdWx0aVBvbHlnb24gZnJvbSAnb2wvZ2VvbS9NdWx0aVBvbHlnb24uanMnO1xuaW1wb3J0IG9sR2VvbVBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQuanMnO1xuaW1wb3J0IG9sR2VvbVBvbHlnb24gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uLmpzJztcbmltcG9ydCBvbFN0eWxlQ2lyY2xlIGZyb20gJ29sL3N0eWxlL0NpcmNsZS5qcyc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbC5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZS5qcyc7XG5pbXBvcnQgb2xTdHlsZVRleHQgZnJvbSAnb2wvc3R5bGUvVGV4dC5qcyc7XG5pbXBvcnQgR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeS5qcyc7XG52YXIgTGVnYWN5UHJvcGVydGllc18gPSB7fTtcbnZhciBERUZBVUxUX0FDQ1VSQUNZID0gMC4xO1xudmFyIFN0eWxlVHlwZXNfID0ge1xuICAnTGluZVN0cmluZyc6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5MSU5FX1NUUklORyxcbiAgJ1BvaW50Jzogbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLlBPSU5ULFxuICAnUG9seWdvbic6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0xZR09OLFxuICAnTXVsdGlMaW5lU3RyaW5nJzogbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLkxJTkVfU1RSSU5HLFxuICAnTXVsdGlQb2ludCc6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0lOVCxcbiAgJ011bHRpUG9seWdvbic6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0xZR09OXG59O1xudmFyIENIQVI2NF8gPSAnLi1fISpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODlhYmNkZWZnaGprbW5wcXJzdHV2d3h5eic7XG52YXIgR0VPTUVUUllfUkVBREVSU18gPSB7XG4gICdQJzogcmVhZE11bHRpUG9pbnRHZW9tZXRyeV8sXG4gICdMJzogcmVhZE11bHRpTGluZVN0cmluZ0dlb21ldHJ5XyxcbiAgJ0EnOiByZWFkTXVsdGlQb2x5Z29uR2VvbWV0cnlfLFxuICAnbCc6IHJlYWRMaW5lU3RyaW5nR2VvbWV0cnlfLFxuICAncCc6IHJlYWRQb2ludEdlb21ldHJ5XyxcbiAgJ2EnOiByZWFkUG9seWdvbkdlb21ldHJ5X1xufTtcbnZhciBHRU9NRVRSWV9XUklURVJTXyA9IHtcbiAgJ011bHRpTGluZVN0cmluZyc6IHdyaXRlTXVsdGlMaW5lU3RyaW5nR2VvbWV0cnlfLFxuICAnTXVsdGlQb2ludCc6IHdyaXRlTXVsdGlQb2ludEdlb21ldHJ5XyxcbiAgJ011bHRpUG9seWdvbic6IHdyaXRlTXVsdGlQb2x5Z29uR2VvbWV0cnlfLFxuICAnTGluZVN0cmluZyc6IHdyaXRlTGluZVN0cmluZ0dlb21ldHJ5XyxcbiAgJ1BvaW50Jzogd3JpdGVQb2ludEdlb21ldHJ5XyxcbiAgJ1BvbHlnb24nOiB3cml0ZVBvbHlnb25HZW9tZXRyeV9cbn07XG5cbnZhciBGZWF0dXJlSGFzaCA9IGZ1bmN0aW9uIChfb2xGb3JtYXRUZXh0RmVhdHVyZSkge1xuICBfaW5oZXJpdHNMb29zZShGZWF0dXJlSGFzaCwgX29sRm9ybWF0VGV4dEZlYXR1cmUpO1xuXG4gIGZ1bmN0aW9uIEZlYXR1cmVIYXNoKG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfb2xGb3JtYXRUZXh0RmVhdHVyZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcbiAgICBfdGhpcy5hY2N1cmFjeV8gPSBvcHRpb25zLmFjY3VyYWN5IHx8IERFRkFVTFRfQUNDVVJBQ1k7XG4gICAgX3RoaXMuZW5jb2RlU3R5bGVzXyA9IG9wdGlvbnMuZW5jb2RlU3R5bGVzIHx8IHRydWU7XG4gICAgX3RoaXMucHJvcGVydGllc0Z1bmN0aW9uXyA9IG9wdGlvbnMucHJvcGVydGllcyB8fCBkZWZhdWx0UHJvcGVydGllc0Z1bmN0aW9uXztcbiAgICBfdGhpcy5zZXRTdHlsZV8gPSBvcHRpb25zLnNldFN0eWxlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnNldFN0eWxlIDogdHJ1ZTtcbiAgICBfdGhpcy5wcmV2WF8gPSAwO1xuICAgIF90aGlzLnByZXZZXyA9IDA7XG4gICAgTGVnYWN5UHJvcGVydGllc18gPSBvcHRpb25zLnByb3BlcnRpZXNUeXBlIHx8IHt9O1xuICAgIF90aGlzLmRlZmF1bHRWYWx1ZXNfID0gb3B0aW9ucy5kZWZhdWx0VmFsdWVzIHx8IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGZWF0dXJlSGFzaC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlY29kZUNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uIGRlY29kZUNvb3JkaW5hdGVzXyh0ZXh0LCBvcHRfZmxhdENvb3JkaW5hdGVzKSB7XG4gICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IG9wdF9mbGF0Q29vcmRpbmF0ZXMgIT09IHVuZGVmaW5lZCA/IG9wdF9mbGF0Q29vcmRpbmF0ZXMgOiBbXTtcbiAgICB2YXIgaSA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW4pIHtcbiAgICAgIHZhciBiID0gdm9pZCAwO1xuICAgICAgdmFyIHNoaWZ0ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSAwO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGIgPSBDSEFSNjRfLmluZGV4T2YodGV4dC5jaGFyQXQoaW5kZXgrKykpO1xuICAgICAgICByZXN1bHQgfD0gKGIgJiAweDFmKSA8PCBzaGlmdDtcbiAgICAgICAgc2hpZnQgKz0gNTtcbiAgICAgIH0gd2hpbGUgKGIgPj0gMzIpO1xuXG4gICAgICB2YXIgZHggPSByZXN1bHQgJiAxID8gfihyZXN1bHQgPj4gMSkgOiByZXN1bHQgPj4gMTtcbiAgICAgIHRoaXMucHJldlhfICs9IGR4O1xuICAgICAgc2hpZnQgPSAwO1xuICAgICAgcmVzdWx0ID0gMDtcblxuICAgICAgZG8ge1xuICAgICAgICBiID0gQ0hBUjY0Xy5pbmRleE9mKHRleHQuY2hhckF0KGluZGV4KyspKTtcbiAgICAgICAgcmVzdWx0IHw9IChiICYgMHgxZikgPDwgc2hpZnQ7XG4gICAgICAgIHNoaWZ0ICs9IDU7XG4gICAgICB9IHdoaWxlIChiID49IDMyKTtcblxuICAgICAgdmFyIGR5ID0gcmVzdWx0ICYgMSA/IH4ocmVzdWx0ID4+IDEpIDogcmVzdWx0ID4+IDE7XG4gICAgICB0aGlzLnByZXZZXyArPSBkeTtcbiAgICAgIGZsYXRDb29yZGluYXRlc1tpKytdID0gdGhpcy5wcmV2WF8gKiB0aGlzLmFjY3VyYWN5XztcbiAgICAgIGZsYXRDb29yZGluYXRlc1tpKytdID0gdGhpcy5wcmV2WV8gKiB0aGlzLmFjY3VyYWN5XztcbiAgICB9XG5cbiAgICByZXR1cm4gZmxhdENvb3JkaW5hdGVzO1xuICB9O1xuXG4gIF9wcm90by5lbmNvZGVDb29yZGluYXRlc18gPSBmdW5jdGlvbiBlbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kKSB7XG4gICAgdmFyIGVuY29kZWRDb29yZGluYXRlcyA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IG9mZnNldDsgaSA8IGVuZDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZhciB4ID0gZmxhdENvb3JkaW5hdGVzW2ldO1xuICAgICAgdmFyIHkgPSBmbGF0Q29vcmRpbmF0ZXNbaSArIDFdO1xuICAgICAgeCA9IE1hdGguZmxvb3IoeCAvIHRoaXMuYWNjdXJhY3lfKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKHkgLyB0aGlzLmFjY3VyYWN5Xyk7XG4gICAgICB2YXIgZHggPSB4IC0gdGhpcy5wcmV2WF87XG4gICAgICB2YXIgZHkgPSB5IC0gdGhpcy5wcmV2WV87XG4gICAgICB0aGlzLnByZXZYXyA9IHg7XG4gICAgICB0aGlzLnByZXZZXyA9IHk7XG4gICAgICBlbmNvZGVkQ29vcmRpbmF0ZXMgKz0gZW5jb2RlU2lnbmVkTnVtYmVyXyhkeCkgKyBlbmNvZGVTaWduZWROdW1iZXJfKGR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jb2RlZENvb3JkaW5hdGVzO1xuICB9O1xuXG4gIF9wcm90by5yZWFkRmVhdHVyZUZyb21UZXh0ID0gZnVuY3Rpb24gcmVhZEZlYXR1cmVGcm9tVGV4dCh0ZXh0LCBvcHRfb3B0aW9ucykge1xuICAgIGNvbnNvbGUuYXNzZXJ0KHRleHQubGVuZ3RoID4gMik7XG4gICAgY29uc29sZS5hc3NlcnQodGV4dFsxXSA9PT0gJygnKTtcbiAgICBjb25zb2xlLmFzc2VydCh0ZXh0LmVuZHNXaXRoKCcpJykpO1xuICAgIHZhciBzcGxpdEluZGV4ID0gdGV4dC5pbmRleE9mKCd+Jyk7XG4gICAgdmFyIGdlb21ldHJ5VGV4dCA9IHNwbGl0SW5kZXggPj0gMCA/IHRleHQuc3Vic3RyaW5nKDAsIHNwbGl0SW5kZXgpICsgXCIpXCIgOiB0ZXh0O1xuICAgIHZhciBnZW9tZXRyeSA9IHRoaXMucmVhZEdlb21ldHJ5RnJvbVRleHQoZ2VvbWV0cnlUZXh0LCBvcHRfb3B0aW9ucyk7XG4gICAgdmFyIGZlYXR1cmUgPSBuZXcgb2xGZWF0dXJlKGdlb21ldHJ5KTtcblxuICAgIGlmIChzcGxpdEluZGV4ID49IDApIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVzQW5kU3R5bGVzVGV4dCA9IHRleHQuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgc3BsaXRJbmRleCA9IGF0dHJpYnV0ZXNBbmRTdHlsZXNUZXh0LmluZGV4T2YoJ34nKTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzVGV4dCA9IHNwbGl0SW5kZXggPj0gMCA/IGF0dHJpYnV0ZXNBbmRTdHlsZXNUZXh0LnN1YnN0cmluZygwLCBzcGxpdEluZGV4KSA6IGF0dHJpYnV0ZXNBbmRTdHlsZXNUZXh0O1xuXG4gICAgICBpZiAoYXR0cmlidXRlc1RleHQgIT0gJycpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gYXR0cmlidXRlc1RleHQuc3BsaXQoJ1xcJycpO1xuXG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBhcnRzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGVuY29kZWRQYXJ0ID0gX3JlZjtcbiAgICAgICAgICB2YXIgcGFydCA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkUGFydCk7XG4gICAgICAgICAgdmFyIGtleVZhbCA9IHBhcnQuc3BsaXQoJyonKTtcbiAgICAgICAgICBjb25zb2xlLmFzc2VydChrZXlWYWwubGVuZ3RoID09PSAyKTtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5VmFsWzBdO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGtleVZhbFsxXTtcblxuICAgICAgICAgIGlmICghdGhpcy5zZXRTdHlsZV8gJiYgTGVnYWN5UHJvcGVydGllc19ba2V5XSkge1xuICAgICAgICAgICAga2V5ID0gTGVnYWN5UHJvcGVydGllc19ba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmZWF0dXJlLnNldChrZXksIGNhc3RWYWx1ZV8oa2V5LCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGxpdEluZGV4ID49IDApIHtcbiAgICAgICAgdmFyIHN0eWxlc1RleHQgPSBhdHRyaWJ1dGVzQW5kU3R5bGVzVGV4dC5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEpO1xuXG4gICAgICAgIGlmICh0aGlzLnNldFN0eWxlXykge1xuICAgICAgICAgIHNldFN0eWxlSW5GZWF0dXJlXyhzdHlsZXNUZXh0LCBmZWF0dXJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTdHlsZVByb3BlcnRpZXNfKHN0eWxlc1RleHQsIGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZlYXR1cmU7XG4gIH07XG5cbiAgX3Byb3RvLnJlYWRGZWF0dXJlc0Zyb21UZXh0ID0gZnVuY3Rpb24gcmVhZEZlYXR1cmVzRnJvbVRleHQodGV4dCwgb3B0X29wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3RhcnRzV2l0aCgnRicpKTtcbiAgICB0aGlzLnByZXZYXyA9IDA7XG4gICAgdGhpcy5wcmV2WV8gPSAwO1xuICAgIHZhciBmZWF0dXJlcyA9IFtdO1xuICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxKTtcblxuICAgIHdoaWxlICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBpbmRleCA9IHRleHQuaW5kZXhPZignKScpO1xuICAgICAgY29uc29sZS5hc3NlcnQoaW5kZXggPj0gMCk7XG4gICAgICB2YXIgZmVhdHVyZSA9IHRoaXMucmVhZEZlYXR1cmVGcm9tVGV4dCh0ZXh0LnN1YnN0cmluZygwLCBpbmRleCArIDEpLCBvcHRfb3B0aW9ucyk7XG4gICAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIF90aGlzMi5kZWZhdWx0VmFsdWVzXykge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSBMZWdhY3lQcm9wZXJ0aWVzX1trZXldO1xuXG4gICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZlYXR1cmUuc2V0KHByb3BlcnR5LCBfdGhpczIuZGVmYXVsdFZhbHVlc19ba2V5XS5jYWxsKG51bGwsIGZlYXR1cmUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmZWF0dXJlcztcbiAgfTtcblxuICBfcHJvdG8ucmVhZEdlb21ldHJ5RnJvbVRleHQgPSBmdW5jdGlvbiByZWFkR2VvbWV0cnlGcm9tVGV4dCh0ZXh0LCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBnZW9tZXRyeVJlYWRlciA9IEdFT01FVFJZX1JFQURFUlNfW3RleHRbMF1dO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGdlb21ldHJ5UmVhZGVyICE9PSB1bmRlZmluZWQpO1xuICAgIHJldHVybiBnZW9tZXRyeVJlYWRlci5jYWxsKHRoaXMsIHRleHQpO1xuICB9O1xuXG4gIF9wcm90by53cml0ZUZlYXR1cmVUZXh0ID0gZnVuY3Rpb24gd3JpdGVGZWF0dXJlVGV4dChmZWF0dXJlLCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBlbmNvZGVkUGFydHMgPSBbXTtcbiAgICB2YXIgZW5jb2RlZEdlb21ldHJ5ID0gJyc7XG4gICAgdmFyIGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuXG4gICAgaWYgKGdlb21ldHJ5KSB7XG4gICAgICBlbmNvZGVkR2VvbWV0cnkgPSB0aGlzLndyaXRlR2VvbWV0cnlUZXh0KGdlb21ldHJ5LCBvcHRfb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGVuY29kZWRHZW9tZXRyeS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmFzc2VydChlbmNvZGVkR2VvbWV0cnkuZW5kc1dpdGgoJyknKSk7XG4gICAgICBlbmNvZGVkR2VvbWV0cnkgPSBlbmNvZGVkR2VvbWV0cnkuc3Vic3RyaW5nKDAsIGVuY29kZWRHZW9tZXRyeS5sZW5ndGggLSAxKTtcbiAgICAgIGVuY29kZWRQYXJ0cy5wdXNoKGVuY29kZWRHZW9tZXRyeSk7XG4gICAgfVxuXG4gICAgdmFyIGVuY29kZWRQcm9wZXJ0aWVzID0gW107XG4gICAgdmFyIHByb3BGdW5jdGlvbiA9IHRoaXMucHJvcGVydGllc0Z1bmN0aW9uXyhmZWF0dXJlKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wRnVuY3Rpb24pIHtcbiAgICAgIHZhciB2YWx1ZSA9IHByb3BGdW5jdGlvbltrZXldO1xuXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiBrZXkgIT09IGZlYXR1cmUuZ2V0R2VvbWV0cnlOYW1lKCkpIHtcbiAgICAgICAgaWYgKGVuY29kZWRQcm9wZXJ0aWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGVuY29kZWRQcm9wZXJ0aWVzLnB1c2goJ1xcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5LnJlcGxhY2UoL1soKScqXS9nLCAnXycpICsgXCIqXCIgKyB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1soKScqXS9nLCAnXycpKTtcbiAgICAgICAgZW5jb2RlZFByb3BlcnRpZXMucHVzaChlbmNvZGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW5jb2RlZFByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZW5jb2RlZFBhcnRzLnB1c2goJ34nKTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVuY29kZWRQYXJ0cywgZW5jb2RlZFByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVuY29kZVN0eWxlc18pIHtcbiAgICAgIHZhciBzdHlsZUZ1bmN0aW9uID0gZmVhdHVyZS5nZXRTdHlsZUZ1bmN0aW9uKCk7XG5cbiAgICAgIGlmIChzdHlsZUZ1bmN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9IHN0eWxlRnVuY3Rpb24oZmVhdHVyZSwgMCk7XG5cbiAgICAgICAgaWYgKHN0eWxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBlbmNvZGVkU3R5bGVzID0gW107XG4gICAgICAgICAgc3R5bGVzID0gQXJyYXkuaXNBcnJheShzdHlsZXMpID8gc3R5bGVzIDogW3N0eWxlc107XG5cbiAgICAgICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZ2VvbWV0cnknKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbmNvZGVTdHlsZXNfKHN0eWxlcywgZ2VvbWV0cnkuZ2V0VHlwZSgpLCBlbmNvZGVkU3R5bGVzKTtcblxuICAgICAgICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVuY29kZWRQYXJ0cy5wdXNoKCd+Jyk7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbmNvZGVkUGFydHMsIGVuY29kZWRTdHlsZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGVuY29kZWRQYXJ0cy5wdXNoKCcpJyk7XG4gICAgcmV0dXJuIGVuY29kZWRQYXJ0cy5qb2luKCcnKTtcbiAgfTtcblxuICBfcHJvdG8ud3JpdGVGZWF0dXJlc1RleHQgPSBmdW5jdGlvbiB3cml0ZUZlYXR1cmVzVGV4dChmZWF0dXJlcywgb3B0X29wdGlvbnMpIHtcbiAgICB0aGlzLnByZXZYXyA9IDA7XG4gICAgdGhpcy5wcmV2WV8gPSAwO1xuICAgIHZhciB0ZXh0QXJyYXkgPSBbXTtcblxuICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0ZXh0QXJyYXkucHVzaCgnRicpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBmZWF0dXJlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIHRleHRBcnJheS5wdXNoKHRoaXMud3JpdGVGZWF0dXJlVGV4dChmZWF0dXJlc1tpXSwgb3B0X29wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dEFycmF5LmpvaW4oJycpO1xuICB9O1xuXG4gIF9wcm90by53cml0ZUdlb21ldHJ5VGV4dCA9IGZ1bmN0aW9uIHdyaXRlR2VvbWV0cnlUZXh0KGdlb21ldHJ5LCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBnZW9tZXRyeVdyaXRlciA9IEdFT01FVFJZX1dSSVRFUlNfW2dlb21ldHJ5LmdldFR5cGUoKV07XG4gICAgY29uc29sZS5hc3NlcnQoZ2VvbWV0cnlXcml0ZXIgIT09IHVuZGVmaW5lZCk7XG4gICAgdmFyIHRyYW5zZm9ybWVkR2VvbWV0cnkgPSB0cmFuc2Zvcm1HZW9tZXRyeVdpdGhPcHRpb25zKGdlb21ldHJ5LCB0cnVlLCBvcHRfb3B0aW9ucyk7XG5cbiAgICBpZiAoISh0cmFuc2Zvcm1lZEdlb21ldHJ5IGluc3RhbmNlb2YgR2VvbWV0cnkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdHJhbnNmb3JtZWRHZW9tZXRyeScpO1xuICAgIH1cblxuICAgIHZhciBlbmNHZW9tID0gZ2VvbWV0cnlXcml0ZXIuY2FsbCh0aGlzLCB0cmFuc2Zvcm1lZEdlb21ldHJ5KTtcblxuICAgIGlmICghZW5jR2VvbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVuY29kZWRHZW9tZXRyeScpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmNHZW9tO1xuICB9O1xuXG4gIHJldHVybiBGZWF0dXJlSGFzaDtcbn0ob2xGb3JtYXRUZXh0RmVhdHVyZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVIYXNoO1xuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Z1bmN0aW9uXyhmZWF0dXJlKSB7XG4gIHJldHVybiBmZWF0dXJlLmdldFByb3BlcnRpZXMoKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlU2lnbmVkTnVtYmVyXyhudW0pIHtcbiAgdmFyIHNpZ25lZE51bSA9IG51bSA8PCAxO1xuXG4gIGlmIChudW0gPCAwKSB7XG4gICAgc2lnbmVkTnVtID0gfnNpZ25lZE51bTtcbiAgfVxuXG4gIHJldHVybiBlbmNvZGVOdW1iZXJfKHNpZ25lZE51bSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZU51bWJlcl8obnVtKSB7XG4gIHZhciBlbmNvZGVkTnVtYmVyID0gJyc7XG5cbiAgd2hpbGUgKG51bSA+PSAweDIwKSB7XG4gICAgZW5jb2RlZE51bWJlciArPSBDSEFSNjRfLmNoYXJBdCgweDIwIHwgbnVtICYgMHgxZik7XG4gICAgbnVtID4+PSA1O1xuICB9XG5cbiAgZW5jb2RlZE51bWJlciArPSBDSEFSNjRfLmNoYXJBdChudW0pO1xuICByZXR1cm4gZW5jb2RlZE51bWJlcjtcbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVzXyhzdHlsZXMsIGdlb21ldHJ5VHlwZSwgZW5jb2RlZFN0eWxlcykge1xuICB2YXIgc3R5bGVUeXBlID0gU3R5bGVUeXBlc19bZ2VvbWV0cnlUeXBlXTtcbiAgY29uc29sZS5hc3NlcnQoc3R5bGVUeXBlICE9PSB1bmRlZmluZWQpO1xuXG4gIGZvciAodmFyIF9pdGVyYXRvcjIgPSBzdHlsZXMsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMiA9IDAsIF9pdGVyYXRvcjIgPSBfaXNBcnJheTIgPyBfaXRlcmF0b3IyIDogX2l0ZXJhdG9yMltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgIHZhciBfcmVmMjtcblxuICAgIGlmIChfaXNBcnJheTIpIHtcbiAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgX3JlZjIgPSBfaXRlcmF0b3IyW19pMisrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2kyID0gX2l0ZXJhdG9yMi5uZXh0KCk7XG4gICAgICBpZiAoX2kyLmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gX3JlZjI7XG4gICAgdmFyIGZpbGxTdHlsZSA9IHN0eWxlLmdldEZpbGwoKTtcbiAgICB2YXIgaW1hZ2VTdHlsZSA9IHN0eWxlLmdldEltYWdlKCk7XG4gICAgdmFyIHN0cm9rZVN0eWxlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XG4gICAgdmFyIHRleHRTdHlsZSA9IHN0eWxlLmdldFRleHQoKTtcblxuICAgIGlmIChzdHlsZVR5cGUgPT0gbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLlBPTFlHT04pIHtcbiAgICAgIGlmIChmaWxsU3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgZW5jb2RlU3R5bGVQb2x5Z29uXyhmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0eWxlVHlwZSA9PSBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuTElORV9TVFJJTkcpIHtcbiAgICAgIGlmIChzdHJva2VTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICBlbmNvZGVTdHlsZUxpbmVfKHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0eWxlVHlwZSA9PSBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuUE9JTlQpIHtcbiAgICAgIGlmIChpbWFnZVN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgIGVuY29kZVN0eWxlUG9pbnRfKGltYWdlU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXh0U3R5bGUgIT09IG51bGwpIHtcbiAgICAgIGVuY29kZVN0eWxlVGV4dF8odGV4dFN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVMaW5lXyhzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICBlbmNvZGVTdHlsZVN0cm9rZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZVBvaW50XyhpbWFnZVN0eWxlLCBlbmNvZGVkU3R5bGVzKSB7XG4gIGlmIChpbWFnZVN0eWxlIGluc3RhbmNlb2Ygb2xTdHlsZUNpcmNsZSkge1xuICAgIHZhciByYWRpdXMgPSBpbWFnZVN0eWxlLmdldFJhZGl1cygpO1xuXG4gICAgaWYgKGVuY29kZWRTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKCdcXCcnKTtcbiAgICB9XG5cbiAgICBlbmNvZGVkU3R5bGVzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KFwicG9pbnRSYWRpdXMqXCIgKyByYWRpdXMpKTtcbiAgICB2YXIgZmlsbFN0eWxlID0gaW1hZ2VTdHlsZS5nZXRGaWxsKCk7XG5cbiAgICBpZiAoZmlsbFN0eWxlICE9PSBudWxsKSB7XG4gICAgICBlbmNvZGVTdHlsZUZpbGxfKGZpbGxTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdmFyIHN0cm9rZVN0eWxlID0gaW1hZ2VTdHlsZS5nZXRTdHJva2UoKTtcblxuICAgIGlmIChzdHJva2VTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgZW5jb2RlU3R5bGVTdHJva2VfKHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVQb2x5Z29uXyhmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKSB7XG4gIGVuY29kZVN0eWxlRmlsbF8oZmlsbFN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcblxuICBpZiAoc3Ryb2tlU3R5bGUgIT09IG51bGwpIHtcbiAgICBlbmNvZGVTdHlsZVN0cm9rZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlRmlsbF8oZmlsbFN0eWxlLCBlbmNvZGVkU3R5bGVzLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHByb3BlcnR5TmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcGVydHlOYW1lID0gJ2ZpbGxDb2xvcic7XG4gIH1cblxuICB2YXIgZmlsbENvbG9yID0gZmlsbFN0eWxlLmdldENvbG9yKCk7XG4gIHZhciBmaWxsQ29sb3JIZXg7XG5cbiAgaWYgKGZpbGxDb2xvciAhPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGxDb2xvcikpIHtcbiAgICAgIGZpbGxDb2xvckhleCA9IHJnYkFycmF5VG9IZXgoZmlsbENvbG9yKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWxsQ29sb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmaWxsQ29sb3JIZXggPSByZ2JBcnJheVRvSGV4KGFzQ29sb3JBcnJheShmaWxsQ29sb3IpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBjb2xvcicpO1xuICAgIH1cblxuICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaCgnXFwnJyk7XG4gICAgfVxuXG4gICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eU5hbWUgKyBcIipcIiArIGZpbGxDb2xvckhleCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlU3Ryb2tlXyhzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICB2YXIgc3Ryb2tlQ29sb3IgPSBzdHJva2VTdHlsZS5nZXRDb2xvcigpO1xuXG4gIGlmIChzdHJva2VDb2xvciAhPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0cm9rZUNvbG9yKSkge1xuICAgICAgdmFyIHN0cm9rZUNvbG9ySGV4ID0gcmdiQXJyYXlUb0hleChzdHJva2VDb2xvcik7XG5cbiAgICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKCdcXCcnKTtcbiAgICAgIH1cblxuICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChcInN0cm9rZUNvbG9yKlwiICsgc3Ryb2tlQ29sb3JIZXgpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgc3Ryb2tlV2lkdGggPSBzdHJva2VTdHlsZS5nZXRXaWR0aCgpO1xuXG4gIGlmIChzdHJva2VXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGVuY29kZWRTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKCdcXCcnKTtcbiAgICB9XG5cbiAgICBlbmNvZGVkU3R5bGVzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KFwic3Ryb2tlV2lkdGgqXCIgKyBzdHJva2VXaWR0aCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlVGV4dF8odGV4dFN0eWxlLCBlbmNvZGVkU3R5bGVzKSB7XG4gIHZhciBmb250U3R5bGUgPSB0ZXh0U3R5bGUuZ2V0Rm9udCgpO1xuXG4gIGlmIChmb250U3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmb250ID0gZm9udFN0eWxlLnNwbGl0KCcgJyk7XG5cbiAgICBpZiAoZm9udC5sZW5ndGggPj0gMykge1xuICAgICAgaWYgKGVuY29kZWRTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBlbmNvZGVkU3R5bGVzLnB1c2goJ1xcJycpO1xuICAgICAgfVxuXG4gICAgICBlbmNvZGVkU3R5bGVzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KFwiZm9udFNpemUqXCIgKyBmb250WzFdKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbGxTdHlsZSA9IHRleHRTdHlsZS5nZXRGaWxsKCk7XG5cbiAgaWYgKGZpbGxTdHlsZSAhPT0gbnVsbCkge1xuICAgIGVuY29kZVN0eWxlRmlsbF8oZmlsbFN0eWxlLCBlbmNvZGVkU3R5bGVzLCAnZm9udENvbG9yJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZExpbmVTdHJpbmdHZW9tZXRyeV8odGV4dCkge1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LnN0YXJ0c1dpdGgoJ2woJykpO1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LmVuZHNXaXRoKCcpJykpO1xuICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMiwgdGV4dC5sZW5ndGggLSAxKTtcbiAgdmFyIGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZGVjb2RlQ29vcmRpbmF0ZXNfKHRleHQpO1xuICByZXR1cm4gbmV3IG9sR2VvbUxpbmVTdHJpbmcoZmxhdENvb3JkaW5hdGVzLCBvbEdlb21HZW9tZXRyeUxheW91dC5YWSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRNdWx0aUxpbmVTdHJpbmdHZW9tZXRyeV8odGV4dCkge1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LnN0YXJ0c1dpdGgoJ0woJykpO1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LmVuZHNXaXRoKCcpJykpO1xuICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMiwgdGV4dC5sZW5ndGggLSAxKTtcbiAgdmFyIGZsYXRDb29yZGluYXRlcyA9IFtdO1xuICB2YXIgZW5kcyA9IFtdO1xuICB2YXIgbGluZVN0cmluZ3MgPSB0ZXh0LnNwbGl0KCdcXCcnKTtcblxuICBmb3IgKHZhciBpID0gMCwgaWkgPSBsaW5lU3RyaW5ncy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5kZWNvZGVDb29yZGluYXRlc18obGluZVN0cmluZ3NbaV0sIGZsYXRDb29yZGluYXRlcyk7XG4gICAgZW5kc1tpXSA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gbmV3IG9sR2VvbU11bHRpTGluZVN0cmluZyhmbGF0Q29vcmRpbmF0ZXMsIG9sR2VvbUdlb21ldHJ5TGF5b3V0LlhZLCBlbmRzKTtcbn1cblxuZnVuY3Rpb24gcmVhZFBvaW50R2VvbWV0cnlfKHRleHQpIHtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5zdGFydHNXaXRoKCdwKCcpKTtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5lbmRzV2l0aCgnKScpKTtcbiAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDIsIHRleHQubGVuZ3RoIC0gMSk7XG4gIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyh0ZXh0KTtcbiAgY29uc29sZS5hc3NlcnQoZmxhdENvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMik7XG4gIHJldHVybiBuZXcgb2xHZW9tUG9pbnQoZmxhdENvb3JkaW5hdGVzLCBvbEdlb21HZW9tZXRyeUxheW91dC5YWSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRNdWx0aVBvaW50R2VvbWV0cnlfKHRleHQpIHtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5zdGFydHNXaXRoKCdQKCcpKTtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5lbmRzV2l0aCgnKScpKTtcbiAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDIsIHRleHQubGVuZ3RoIC0gMSk7XG4gIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyh0ZXh0KTtcbiAgcmV0dXJuIG5ldyBvbEdlb21NdWx0aVBvaW50KGZsYXRDb29yZGluYXRlcywgb2xHZW9tR2VvbWV0cnlMYXlvdXQuWFkpO1xufVxuXG5mdW5jdGlvbiByZWFkUG9seWdvbkdlb21ldHJ5Xyh0ZXh0KSB7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3RhcnRzV2l0aCgnYSgnKSk7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuZW5kc1dpdGgoJyknKSk7XG4gIHRleHQgPSB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB2YXIgZmxhdENvb3JkaW5hdGVzID0gW107XG4gIHZhciBlbmRzID0gW107XG4gIHZhciByaW5ncyA9IHRleHQuc3BsaXQoJ1xcJycpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IHJpbmdzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyhyaW5nc1tpXSwgZmxhdENvb3JkaW5hdGVzKTtcbiAgICB2YXIgZW5kID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzWzBdO1xuICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1tlbmRzW2kgLSAxXV07XG4gICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzW2VuZHNbaSAtIDFdICsgMV07XG4gICAgfVxuXG4gICAgZW5kc1tpXSA9IGVuZDtcbiAgfVxuXG4gIHJldHVybiBuZXcgb2xHZW9tUG9seWdvbihmbGF0Q29vcmRpbmF0ZXMsIG9sR2VvbUdlb21ldHJ5TGF5b3V0LlhZLCBlbmRzKTtcbn1cblxuZnVuY3Rpb24gcmVhZE11bHRpUG9seWdvbkdlb21ldHJ5Xyh0ZXh0KSB7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3RhcnRzV2l0aCgnQSgnKSk7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuZW5kc1dpdGgoJyknKSk7XG4gIHRleHQgPSB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB2YXIgZmxhdENvb3JkaW5hdGVzID0gW107XG4gIHZhciBlbmRzcyA9IFtdO1xuICB2YXIgcG9seWdvbnMgPSB0ZXh0LnNwbGl0KCcpKCcpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IHBvbHlnb25zLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICB2YXIgcmluZ3MgPSBwb2x5Z29uc1tpXS5zcGxpdCgnXFwnJyk7XG4gICAgdmFyIGVuZHMgPSBlbmRzc1tpXSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaiA9IDAsIGpqID0gcmluZ3MubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgICAgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5kZWNvZGVDb29yZGluYXRlc18ocmluZ3Nbal0sIGZsYXRDb29yZGluYXRlcyk7XG4gICAgICB2YXIgZW5kID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1swXTtcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1sxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbZW5kc1tqIC0gMV1dO1xuICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzW2VuZHNbaiAtIDFdICsgMV07XG4gICAgICB9XG5cbiAgICAgIGVuZHNbal0gPSBlbmQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBvbEdlb21NdWx0aVBvbHlnb24oZmxhdENvb3JkaW5hdGVzLCBvbEdlb21HZW9tZXRyeUxheW91dC5YWSwgZW5kc3MpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZUluRmVhdHVyZV8odGV4dCwgZmVhdHVyZSkge1xuICBpZiAodGV4dCA9PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0U3R5bGVQcm9wZXJ0aWVzXyh0ZXh0LCBmZWF0dXJlKTtcbiAgdmFyIGZpbGxDb2xvciA9IHByb3BlcnRpZXMuZmlsbENvbG9yO1xuICB2YXIgZm9udFNpemUgPSBwcm9wZXJ0aWVzLmZvbnRTaXplO1xuICB2YXIgZm9udENvbG9yID0gcHJvcGVydGllcy5mb250Q29sb3I7XG4gIHZhciBwb2ludFJhZGl1cyA9IHByb3BlcnRpZXMucG9pbnRSYWRpdXM7XG4gIHZhciBzdHJva2VDb2xvciA9IHByb3BlcnRpZXMuc3Ryb2tlQ29sb3I7XG4gIHZhciBzdHJva2VXaWR0aCA9IHByb3BlcnRpZXMuc3Ryb2tlV2lkdGg7XG4gIHZhciBmaWxsU3R5bGUgPSBudWxsO1xuXG4gIGlmIChmaWxsQ29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgIGZpbGxTdHlsZSA9IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICBjb2xvcjogZmlsbENvbG9yXG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3Ryb2tlU3R5bGUgPSBudWxsO1xuXG4gIGlmIChzdHJva2VDb2xvciAhPT0gdW5kZWZpbmVkICYmIHN0cm9rZVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIHN0cm9rZVdpZHRoICE9ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgc3Ryb2tlV2lkdGgnKTtcbiAgICB9XG5cbiAgICBzdHJva2VTdHlsZSA9IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgIGNvbG9yOiBzdHJva2VDb2xvcixcbiAgICAgIHdpZHRoOiBzdHJva2VXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGltYWdlU3R5bGUgPSBudWxsO1xuXG4gIGlmIChwb2ludFJhZGl1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBwb2ludFJhZGl1cyAhPSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHBvaW50UmFkaXVzJyk7XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0ge1xuICAgICAgcmFkaXVzOiBwb2ludFJhZGl1c1xuICAgIH07XG5cbiAgICBpZiAoZmlsbFN0eWxlKSB7XG4gICAgICBfb3B0aW9ucy5maWxsID0gZmlsbFN0eWxlO1xuICAgIH1cblxuICAgIGlmIChzdHJva2VTdHlsZSkge1xuICAgICAgX29wdGlvbnMuc3Ryb2tlID0gc3Ryb2tlU3R5bGU7XG4gICAgfVxuXG4gICAgaW1hZ2VTdHlsZSA9IG5ldyBvbFN0eWxlQ2lyY2xlKF9vcHRpb25zKTtcbiAgICBmaWxsU3R5bGUgPSBzdHJva2VTdHlsZSA9IG51bGw7XG4gIH1cblxuICB2YXIgdGV4dFN0eWxlID0gbnVsbDtcblxuICBpZiAoZm9udFNpemUgIT09IHVuZGVmaW5lZCAmJiBmb250Q29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgIHRleHRTdHlsZSA9IG5ldyBvbFN0eWxlVGV4dCh7XG4gICAgICBmb250OiBmb250U2l6ZSArIFwiIHNhbnMtc2VyaWZcIixcbiAgICAgIGZpbGw6IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICAgIGNvbG9yOiBmb250Q29sb3JcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHt9O1xuXG4gIGlmIChmaWxsU3R5bGUpIHtcbiAgICBvcHRpb25zLmZpbGwgPSBmaWxsU3R5bGU7XG4gIH1cblxuICBpZiAoc3Ryb2tlU3R5bGUpIHtcbiAgICBvcHRpb25zLnN0cm9rZSA9IHN0cm9rZVN0eWxlO1xuICB9XG5cbiAgaWYgKGltYWdlU3R5bGUpIHtcbiAgICBvcHRpb25zLmltYWdlID0gaW1hZ2VTdHlsZTtcbiAgfVxuXG4gIGlmICh0ZXh0U3R5bGUpIHtcbiAgICBvcHRpb25zLnRleHQgPSB0ZXh0U3R5bGU7XG4gIH1cblxuICB2YXIgc3R5bGUgPSBuZXcgb2xTdHlsZVN0eWxlKG9wdGlvbnMpO1xuICBmZWF0dXJlLnNldFN0eWxlKHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGVQcm9wZXJ0aWVzXyh0ZXh0LCBmZWF0dXJlKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0U3R5bGVQcm9wZXJ0aWVzXyh0ZXh0LCBmZWF0dXJlKTtcbiAgdmFyIGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuXG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbVBvaW50KSB7XG4gICAgaWYgKHByb3BlcnRpZXMuaXNMYWJlbCB8fCBwcm9wZXJ0aWVzW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5JU19URVhUXSkge1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXMuc3Ryb2tlQ29sb3I7XG4gICAgICBkZWxldGUgcHJvcGVydGllcy5maWxsQ29sb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzLmZvbnRDb2xvcjtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzLmZvbnRTaXplO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgcHJvcGVydGllcy5mb250Q29sb3I7XG5cbiAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21MaW5lU3RyaW5nKSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllcy5maWxsQ29sb3I7XG4gICAgICBkZWxldGUgcHJvcGVydGllcy5maWxsT3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcGVydGllcy5mb250U2l6ZSkge1xuICAgIHZhciBmb250U2l6ZVN0ciA9IHByb3BlcnRpZXMuZm9udFNpemU7XG5cbiAgICBpZiAodHlwZW9mIGZvbnRTaXplU3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBmb250U2l6ZVN0ciB0eXBlJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvbnRTaXplID0gcGFyc2VGbG9hdChmb250U2l6ZVN0cik7XG5cbiAgICBpZiAoZm9udFNpemVTdHIuaW5jbHVkZXMoJ3B4JykpIHtcbiAgICAgIGZvbnRTaXplID0gTWF0aC5yb3VuZChmb250U2l6ZSAvIDEuMzMzMzMzKTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0aWVzLmZvbnRTaXplID0gZm9udFNpemU7XG4gIH1cblxuICB2YXIgY2xvbmUgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcGVydGllcykge1xuICAgIHZhciB2YWx1ZSA9IHByb3BlcnRpZXNba2V5XTtcblxuICAgIGlmIChMZWdhY3lQcm9wZXJ0aWVzX1trZXldKSB7XG4gICAgICBjbG9uZVtMZWdhY3lQcm9wZXJ0aWVzX1trZXldXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9uZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZmVhdHVyZS5zZXRQcm9wZXJ0aWVzKGNsb25lKTtcbn1cblxuZnVuY3Rpb24gY2FzdFZhbHVlXyhrZXksIHZhbHVlKSB7XG4gIHZhciBudW1Qcm9wZXJ0aWVzID0gW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5BTkdMRSwgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLk9QQUNJVFksIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TSVpFLCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuU1RST0tFLCAncG9pbnRSYWRpdXMnLCAnc3Ryb2tlV2lkdGgnXTtcbiAgdmFyIGJvb2xQcm9wZXJ0aWVzID0gW25nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5JU19DSVJDTEUsIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5JU19SRUNUQU5HTEUsIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5JU19URVhULCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuU0hPV19NRUFTVVJFLCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuU0hPV19MQUJFTCwgJ2lzQ2lyY2xlJywgJ2lzUmVjdGFuZ2xlJywgJ2lzTGFiZWwnLCAnc2hvd01lYXN1cmUnLCAnc2hvd0xhYmVsJ107XG5cbiAgaWYgKG51bVByb3BlcnRpZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgIHJldHVybiArdmFsdWU7XG4gIH0gZWxzZSBpZiAoYm9vbFByb3BlcnRpZXMuaW5jbHVkZXMoa2V5KSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnRpZXNfKHRleHQsIGZlYXR1cmUpIHtcbiAgdmFyIHBhcnRzID0gdGV4dC5zcGxpdCgnXFwnJyk7XG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG5cbiAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IHBhcnRzLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTMgPSAwLCBfaXRlcmF0b3IzID0gX2lzQXJyYXkzID8gX2l0ZXJhdG9yMyA6IF9pdGVyYXRvcjNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICB2YXIgX3JlZjM7XG5cbiAgICBpZiAoX2lzQXJyYXkzKSB7XG4gICAgICBpZiAoX2kzID49IF9pdGVyYXRvcjMubGVuZ3RoKSBicmVhaztcbiAgICAgIF9yZWYzID0gX2l0ZXJhdG9yM1tfaTMrK107XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pMyA9IF9pdGVyYXRvcjMubmV4dCgpO1xuICAgICAgaWYgKF9pMy5kb25lKSBicmVhaztcbiAgICAgIF9yZWYzID0gX2kzLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciBlbmNvZGVkUGFydCA9IF9yZWYzO1xuICAgIHZhciBwYXJ0ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRQYXJ0KTtcbiAgICB2YXIga2V5VmFsID0gcGFydC5zcGxpdCgnKicpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGtleVZhbC5sZW5ndGggPT09IDIpO1xuICAgIHZhciBrZXkgPSBrZXlWYWxbMF07XG4gICAgdmFyIHZhbCA9IGtleVZhbFsxXTtcbiAgICBwcm9wZXJ0aWVzW2tleV0gPSBjYXN0VmFsdWVfKGtleSwgdmFsKTtcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiB3cml0ZUxpbmVTdHJpbmdHZW9tZXRyeV8oZ2VvbWV0cnkpIHtcbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tTGluZVN0cmluZykge1xuICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgc3RyaWRlID0gZ2VvbWV0cnkuZ2V0U3RyaWRlKCk7XG4gICAgdmFyIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG4gICAgcmV0dXJuIFwibChcIiArIHRoaXMuZW5jb2RlQ29vcmRpbmF0ZXNfKGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCAwLCBlbmQpICsgXCIpXCI7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gd3JpdGVNdWx0aUxpbmVTdHJpbmdHZW9tZXRyeV8oZ2VvbWV0cnkpIHtcbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tTXVsdGlMaW5lU3RyaW5nKSB7XG4gICAgdmFyIGVuZHMgPSBnZW9tZXRyeS5nZXRFbmRzKCk7XG4gICAgdmFyIGxpbmVTdHJpbmdDb3VudCA9IGVuZHMubGVuZ3RoO1xuICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgc3RyaWRlID0gZ2VvbWV0cnkuZ2V0U3RyaWRlKCk7XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgdmFyIHRleHRBcnJheSA9IFsnTCgnXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZVN0cmluZ0NvdW50OyArK2kpIHtcbiAgICAgIHZhciBlbmQgPSBlbmRzW2ldO1xuICAgICAgdmFyIHRleHQgPSB0aGlzLmVuY29kZUNvb3JkaW5hdGVzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgb2Zmc2V0LCBlbmQpO1xuXG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICB0ZXh0QXJyYXkucHVzaCgnXFwnJyk7XG4gICAgICB9XG5cbiAgICAgIHRleHRBcnJheS5wdXNoKHRleHQpO1xuICAgICAgb2Zmc2V0ID0gZW5kO1xuICAgIH1cblxuICAgIHRleHRBcnJheS5wdXNoKCcpJyk7XG4gICAgcmV0dXJuIHRleHRBcnJheS5qb2luKCcnKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB3cml0ZVBvaW50R2VvbWV0cnlfKGdlb21ldHJ5KSB7XG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbVBvaW50KSB7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIHZhciBzdHJpZGUgPSBnZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgICB2YXIgZW5kID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICByZXR1cm4gXCJwKFwiICsgdGhpcy5lbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIDAsIGVuZCkgKyBcIilcIjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB3cml0ZU11bHRpUG9pbnRHZW9tZXRyeV8oZ2VvbWV0cnkpIHtcbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tTXVsdGlQb2ludCkge1xuICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgc3RyaWRlID0gZ2VvbWV0cnkuZ2V0U3RyaWRlKCk7XG4gICAgdmFyIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG4gICAgcmV0dXJuIFwiUChcIiArIHRoaXMuZW5jb2RlQ29vcmRpbmF0ZXNfKGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCAwLCBlbmQpICsgXCIpXCI7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZW5jb2RlUmluZ3NfKGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCBvZmZzZXQsIGVuZHMsIHRleHRBcnJheSkge1xuICB2YXIgbGluZWFyUmluZ0NvdW50ID0gZW5kcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lYXJSaW5nQ291bnQ7ICsraSkge1xuICAgIHZhciBlbmQgPSBlbmRzW2ldIC0gc3RyaWRlO1xuICAgIHZhciB0ZXh0ID0gdGhpcy5lbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kKTtcblxuICAgIGlmIChpICE9PSAwKSB7XG4gICAgICB0ZXh0QXJyYXkucHVzaCgnXFwnJyk7XG4gICAgfVxuXG4gICAgdGV4dEFycmF5LnB1c2godGV4dCk7XG4gICAgb2Zmc2V0ID0gZW5kc1tpXTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlUG9seWdvbkdlb21ldHJ5XyhnZW9tZXRyeSkge1xuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21Qb2x5Z29uKSB7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIHZhciBzdHJpZGUgPSBnZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgICB2YXIgZW5kcyA9IGdlb21ldHJ5LmdldEVuZHMoKTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB2YXIgdGV4dEFycmF5ID0gWydhKCddO1xuICAgIGVuY29kZVJpbmdzXy5jYWxsKHRoaXMsIGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCBvZmZzZXQsIGVuZHMsIHRleHRBcnJheSk7XG4gICAgdGV4dEFycmF5LnB1c2goJyknKTtcbiAgICByZXR1cm4gdGV4dEFycmF5LmpvaW4oJycpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHdyaXRlTXVsdGlQb2x5Z29uR2VvbWV0cnlfKGdlb21ldHJ5KSB7XG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbU11bHRpUG9seWdvbikge1xuICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgc3RyaWRlID0gZ2VvbWV0cnkuZ2V0U3RyaWRlKCk7XG4gICAgdmFyIGVuZHNzID0gZ2VvbWV0cnkuZ2V0RW5kc3MoKTtcbiAgICB2YXIgcG9seWdvbkNvdW50ID0gZW5kc3MubGVuZ3RoO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciB0ZXh0QXJyYXkgPSBbJ0EnXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9seWdvbkNvdW50OyArK2kpIHtcbiAgICAgIHZhciBlbmRzID0gZW5kc3NbaV07XG4gICAgICB0ZXh0QXJyYXkucHVzaCgnKCcpO1xuICAgICAgb2Zmc2V0ID0gZW5jb2RlUmluZ3NfLmNhbGwodGhpcywgZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kcywgdGV4dEFycmF5KTtcbiAgICAgIHRleHRBcnJheS5wdXNoKCcpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRBcnJheS5qb2luKCcnKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIGdlb21ldHJ5IHR5cGUnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTElORV9TVFJJTkc6ICdMaW5lU3RyaW5nJyxcbiAgUE9JTlQ6ICdQb2ludCcsXG4gIFBPTFlHT046ICdQb2x5Z29uJ1xufTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1M0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==