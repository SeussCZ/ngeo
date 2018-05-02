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
/******/ 	deferredModules.push([32,"commons"]);
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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
  this.map;
  this.ngeoLocation_ = ngeoLocation;
  this.ngeoDebounce_ = ngeoDebounce;
}

module.controller('AppMapController', MapComponentController);

MapComponentController.prototype.$onInit = function () {
  var _this = this;

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
  this.map;
  this.layer;
  this.ngeoLocation_ = ngeoLocation;
  this.scope_ = $scope;
  this.featureSeq_ = 0;
  this.interaction;
}

DrawComponentController.prototype.$onInit = function () {
  var _this2 = this;

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
  this.layer.getSource().clear(true);
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

/***/ "./src/format/FeatureHash.js":
/*!***********************************!*\
  !*** ./src/format/FeatureHash.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/format/FeatureProperties.js */ "./src/format/FeatureProperties.js");
/* harmony import */ var ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/format/FeatureHashStyleType.js */ "./src/format/FeatureHashStyleType.js");
/* harmony import */ var ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils.js */ "./src/utils.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_format_Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/format/Feature.js */ "./node_modules/ol/format/Feature.js");
/* harmony import */ var ol_format_TextFeature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/format/TextFeature.js */ "./node_modules/ol/format/TextFeature.js");
/* harmony import */ var ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/geom/GeometryLayout.js */ "./node_modules/ol/geom/GeometryLayout.js");
/* harmony import */ var ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/LineString.js */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/MultiLineString.js */ "./node_modules/ol/geom/MultiLineString.js");
/* harmony import */ var ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/MultiPoint.js */ "./node_modules/ol/geom/MultiPoint.js");
/* harmony import */ var ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/geom/MultiPolygon.js */ "./node_modules/ol/geom/MultiPolygon.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Text_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style/Text.js */ "./node_modules/ol/style/Text.js");
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

var _default = function (_olFormatTextFeature) {
  _inheritsLoose(_default, _olFormatTextFeature);

  function _default(opt_options) {
    var _this;

    _this = _olFormatTextFeature.call(this) || this;
    var options = opt_options !== undefined ? opt_options : {};
    _this.accuracy_ = options.accuracy !== undefined ? options.accuracy : DEFAULT_ACCURACY;
    _this.encodeStyles_ = options.encodeStyles !== undefined ? options.encodeStyles : true;
    _this.propertiesFunction_ = options.properties !== undefined ? options.properties : defaultPropertiesFunction_;
    _this.setStyle_ = options.setStyle !== undefined ? options.setStyle : true;
    _this.prevX_ = 0;
    _this.prevY_ = 0;
    LegacyProperties_ = options.propertiesType !== undefined && options.propertiesType;
    _this.defaultValues_ = options.defaultValues !== undefined ? options.defaultValues : {};
    return _this;
  }

  var _proto = _default.prototype;

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
    console.assert(text[text.length - 1] === ')');
    var splitIndex = text.indexOf('~');
    var geometryText = splitIndex >= 0 ? text.substring(0, splitIndex) + ")" : text;
    var geometry = this.readGeometryFromText(geometryText, opt_options);
    var feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"](geometry);

    if (splitIndex >= 0) {
      var attributesAndStylesText = text.substring(splitIndex + 1, text.length - 1);
      splitIndex = attributesAndStylesText.indexOf('~');
      var attributesText = splitIndex >= 0 ? attributesAndStylesText.substring(0, splitIndex) : attributesAndStylesText;

      if (attributesText != '') {
        var parts = attributesText.split('\'');

        for (var i = 0; i < parts.length; ++i) {
          var part = decodeURIComponent(parts[i]);
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

    console.assert(text[0] === 'F');
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
      console.assert(encodedGeometry[encodedGeometry.length - 1] === ')');
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
    var transformedGeometry = ol_format_Feature_js__WEBPACK_IMPORTED_MODULE_4__["transformWithOptions"](geometry, true, opt_options);
    return geometryWriter.call(this, transformedGeometry);
  };

  return _default;
}(ol_format_TextFeature_js__WEBPACK_IMPORTED_MODULE_5__["default"]);



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

  for (var i = 0; i < styles.length; ++i) {
    var style = styles[i];
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
  if (imageStyle instanceof ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__["default"]) {
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

function encodeStyleFill_(fillStyle, encodedStyles, opt_propertyName) {
  var propertyName = opt_propertyName !== undefined ? opt_propertyName : 'fillColor';
  var fillColor = fillStyle.getColor();

  if (fillColor !== null) {
    if (Array.isArray(fillColor)) {
      var fillColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(fillColor);

      if (encodedStyles.length > 0) {
        encodedStyles.push('\'');
      }

      encodedStyles.push(encodeURIComponent(propertyName + "*" + fillColorHex));
    } else {
      console.assert(false, 'only supporting fill colors');
    }
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
  console.assert(text.substring(0, 2) === 'l(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  return new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY);
}

function readMultiLineStringGeometry_(text) {
  console.assert(text.substring(0, 2) === 'L(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var ends = [];
  var lineStrings = text.split('\'');

  for (var i = 0, ii = lineStrings.length; i < ii; ++i) {
    flatCoordinates = this.decodeCoordinates_(lineStrings[i], flatCoordinates);
    ends[i] = flatCoordinates.length;
  }

  return new ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_8__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY, ends);
}

function readPointGeometry_(text) {
  console.assert(text.substring(0, 2) === 'p(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  console.assert(flatCoordinates.length === 2);
  return new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY);
}

function readMultiPointGeometry_(text) {
  console.assert(text.substring(0, 2) === 'P(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  return new ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_9__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY);
}

function readPolygonGeometry_(text) {
  console.assert(text.substring(0, 2) === 'a(');
  console.assert(text[text.length - 1] == ')');
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

  return new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY, ends);
}

function readMultiPolygonGeometry_(text) {
  console.assert(text.substring(0, 2) === 'A(');
  console.assert(text[text.length - 1] == ')');
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

  return new ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_10__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY, endss);
}

function setStyleInFeature_(text, feature) {
  if (text == '') {
    return;
  }

  var properties = getStyleProperties_(text, feature);
  var fillColor = properties['fillColor'];
  var fontSize = properties['fontSize'];
  var fontColor = properties['fontColor'];
  var pointRadius = properties['pointRadius'];
  var strokeColor = properties['strokeColor'];
  var strokeWidth = properties['strokeWidth'];
  var fillStyle = null;

  if (fillColor !== undefined) {
    fillStyle = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
      color: fillColor
    });
  }

  var strokeStyle = null;

  if (strokeColor !== undefined && strokeWidth !== undefined) {
    strokeStyle = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
      color: strokeColor,
      width: strokeWidth
    });
  }

  var imageStyle = null;

  if (pointRadius !== undefined) {
    imageStyle = new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      radius: pointRadius,
      fill: fillStyle,
      stroke: strokeStyle
    });
    fillStyle = strokeStyle = null;
  }

  var textStyle = null;

  if (fontSize !== undefined && fontColor !== undefined) {
    textStyle = new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
      font: fontSize + " sans-serif",
      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
        color: fontColor
      })
    });
  }

  var style = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
    fill: fillStyle,
    image: imageStyle,
    stroke: strokeStyle,
    text: textStyle
  });
  feature.setStyle(style);
}

function setStyleProperties_(text, feature) {
  var properties = getStyleProperties_(text, feature);
  var geometry = feature.getGeometry();

  if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
    if (properties['isLabel'] || properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_TEXT]) {
      delete properties['strokeColor'];
      delete properties['fillColor'];
    } else {
      delete properties['fontColor'];
      delete properties['fontSize'];
    }
  } else {
    delete properties['fontColor'];

    if (geometry instanceof ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
      delete properties['fillColor'];
      delete properties['fillOpacity'];
    }
  }

  if (properties['fontSize']) {
    var fontSizeStr = properties['fontSize'];
    var fontSize = parseFloat(fontSizeStr);

    if (fontSizeStr.indexOf('px') !== -1) {
      fontSize = Math.round(fontSize / 1.333333);
    }

    properties['fontSize'] = fontSize;
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

  for (var i = 0; i < parts.length; ++i) {
    var part = decodeURIComponent(parts[i]);
    var keyVal = part.split('*');
    console.assert(keyVal.length === 2);
    var key = keyVal[0];
    var val = keyVal[1];
    properties[key] = castValue_(key, val);
  }

  return properties;
}

function writeLineStringGeometry_(geometry) {
  if (geometry instanceof ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "l(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }
}

function writeMultiLineStringGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
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
}

function writePointGeometry_(geometry) {
  if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "p(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }
}

function writeMultiPointGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "P(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }
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
  if (geometry instanceof ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var ends = geometry.getEnds();
    var offset = 0;
    var textArray = ['a('];
    encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);
    textArray.push(')');
    return textArray.join('');
  }
}

function writeMultiPolygonGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_10__["default"]) {
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
    console.assert('Wrong geometry type');
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

/***/ 32:
/*!******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/permalink.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/permalink.js */"./examples/permalink.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWFsaW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3Blcm1hbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0L0ZlYXR1cmVIYXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtYXQvRmVhdHVyZUhhc2hTdHlsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwZXJtYWxpbmtcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMzIsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiRHJhd0NvbXBvbmVudENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIm5nZW9Mb2NhdGlvblwiXTtcbk1hcENvbXBvbmVudENvbnRyb2xsZXIuJGluamVjdCA9IFtcIm5nZW9Mb2NhdGlvblwiLCBcIm5nZW9EZWJvdW5jZVwiXTtcbmltcG9ydCAnLi9wZXJtYWxpbmsuY3NzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaCBmcm9tICduZ2VvL2Zvcm1hdC9GZWF0dXJlSGFzaC5qcyc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUuanMnO1xuaW1wb3J0IG5nZW9NaXNjRGVib3VuY2UgZnJvbSAnbmdlby9taXNjL2RlYm91bmNlLmpzJztcbmltcG9ydCB7IGludGVyYWN0aW9uRGVjb3JhdGlvbiB9IGZyb20gJ25nZW8vbWlzYy9kZWNvcmF0ZS5qcyc7XG5pbXBvcnQgbmdlb1N0YXRlbWFuYWdlck1vZHVsZSBmcm9tICduZ2VvL3N0YXRlbWFuYWdlci9tb2R1bGUuanMnO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgb2xJbnRlcmFjdGlvbkRyYXcgZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdy5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xMYXllclZlY3RvciBmcm9tICdvbC9sYXllci9WZWN0b3IuanMnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IG9sU291cmNlVmVjdG9yIGZyb20gJ29sL3NvdXJjZS9WZWN0b3IuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2dldHRleHQnLCBuZ2VvTWFwTW9kdWxlLm5hbWUsIG5nZW9NaXNjRGVib3VuY2UubmFtZSwgbmdlb1N0YXRlbWFuYWdlck1vZHVsZS5uYW1lXSk7XG52YXIgbWFwQ29tcG9uZW50ID0ge1xuICBjb250cm9sbGVyOiAnQXBwTWFwQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgYmluZGluZ3M6IHtcbiAgICAnbWFwJzogJz1hcHBNYXAnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBuZ2VvLW1hcD1jdHJsLm1hcD48L2Rpdj4nXG59O1xubW9kdWxlLmNvbXBvbmVudCgnYXBwTWFwJywgbWFwQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gTWFwQ29tcG9uZW50Q29udHJvbGxlcihuZ2VvTG9jYXRpb24sIG5nZW9EZWJvdW5jZSkge1xuICB0aGlzLm1hcDtcbiAgdGhpcy5uZ2VvTG9jYXRpb25fID0gbmdlb0xvY2F0aW9uO1xuICB0aGlzLm5nZW9EZWJvdW5jZV8gPSBuZ2VvRGVib3VuY2U7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdBcHBNYXBDb250cm9sbGVyJywgTWFwQ29tcG9uZW50Q29udHJvbGxlcik7XG5cbk1hcENvbXBvbmVudENvbnRyb2xsZXIucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG4gIHZhciB6b29tXyA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgneicpO1xuICB2YXIgem9vbSA9IHpvb21fICE9PSB1bmRlZmluZWQgPyArem9vbV8gOiA0O1xuICB2YXIgeCA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgneCcpO1xuICB2YXIgeSA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgneScpO1xuICB2YXIgY2VudGVyID0geCAhPT0gdW5kZWZpbmVkICYmIHkgIT09IHVuZGVmaW5lZCA/IFsreCwgK3ldIDogWzAsIDBdO1xuICB2aWV3LnNldENlbnRlcihjZW50ZXIpO1xuICB2aWV3LnNldFpvb20oem9vbSk7XG4gIHRoaXMubmdlb0xvY2F0aW9uXy51cGRhdGVQYXJhbXMoe1xuICAgICd6JzogXCJcIiArIHpvb20sXG4gICAgJ3gnOiBcIlwiICsgTWF0aC5yb3VuZChjZW50ZXJbMF0pLFxuICAgICd5JzogXCJcIiArIE1hdGgucm91bmQoY2VudGVyWzFdKVxuICB9KTtcbiAgdmlldy5vbigncHJvcGVydHljaGFuZ2UnLCB0aGlzLm5nZW9EZWJvdW5jZV8oZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY2VudGVyID0gdmlldy5nZXRDZW50ZXIoKTtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgJ3onOiBcIlwiICsgdmlldy5nZXRab29tKCksXG4gICAgICAneCc6IFwiXCIgKyBNYXRoLnJvdW5kKGNlbnRlclswXSksXG4gICAgICAneSc6IFwiXCIgKyBNYXRoLnJvdW5kKGNlbnRlclsxXSlcbiAgICB9O1xuXG4gICAgX3RoaXMubmdlb0xvY2F0aW9uXy51cGRhdGVQYXJhbXMocGFyYW1zKTtcbiAgfSwgMzAwLCB0cnVlKSk7XG59O1xuXG52YXIgZHJhd0NvbXBvbmVudCA9IHtcbiAgY29udHJvbGxlcjogJ0FwcERyYXdDb250cm9sbGVyIGFzIGN0cmwnLFxuICBiaW5kaW5nczoge1xuICAgICdtYXAnOiAnPWFwcERyYXdNYXAnLFxuICAgICdsYXllcic6ICc9YXBwRHJhd0xheWVyJ1xuICB9LFxuICB0ZW1wbGF0ZTogJzxsYWJlbD5FbmFibGUgZHJhd2luZzonICsgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuZy1tb2RlbD1cImN0cmwuaW50ZXJhY3Rpb24uYWN0aXZlXCIgLz4nICsgJzwvbGFiZWw+PGJyPicgKyAnPGJ1dHRvbiBuZy1jbGljaz1cImN0cmwuY2xlYXJMYXllcigpXCI+Q2xlYXIgbGF5ZXI8L2J1dHRvbj4nXG59O1xubW9kdWxlLmNvbXBvbmVudCgnYXBwRHJhdycsIGRyYXdDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBEcmF3Q29tcG9uZW50Q29udHJvbGxlcigkc2NvcGUsIG5nZW9Mb2NhdGlvbikge1xuICB0aGlzLm1hcDtcbiAgdGhpcy5sYXllcjtcbiAgdGhpcy5uZ2VvTG9jYXRpb25fID0gbmdlb0xvY2F0aW9uO1xuICB0aGlzLnNjb3BlXyA9ICRzY29wZTtcbiAgdGhpcy5mZWF0dXJlU2VxXyA9IDA7XG4gIHRoaXMuaW50ZXJhY3Rpb247XG59XG5cbkRyYXdDb21wb25lbnRDb250cm9sbGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB2YXIgdmVjdG9yU291cmNlID0gdGhpcy5sYXllci5nZXRTb3VyY2UoKTtcbiAgdGhpcy5pbnRlcmFjdGlvbiA9IG5ldyBvbEludGVyYWN0aW9uRHJhdyh7XG4gICAgdHlwZTogJ0xpbmVTdHJpbmcnLFxuICAgIHNvdXJjZTogdmVjdG9yU291cmNlXG4gIH0pO1xuICB0aGlzLmludGVyYWN0aW9uLnNldEFjdGl2ZShmYWxzZSk7XG4gIHRoaXMubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb24pO1xuICBpbnRlcmFjdGlvbkRlY29yYXRpb24odGhpcy5pbnRlcmFjdGlvbik7XG4gIHRoaXMuaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuZmVhdHVyZS5zZXQoJ2lkJywgKytfdGhpczIuZmVhdHVyZVNlcV8pO1xuICB9KTtcbiAgdmFyIGZoRm9ybWF0ID0gbmV3IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaCgpO1xuICB2ZWN0b3JTb3VyY2Uub24oJ2FkZGZlYXR1cmUnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBmZWF0dXJlID0gZS5mZWF0dXJlO1xuICAgIGZlYXR1cmUuc2V0U3R5bGUobmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgICBzdHJva2U6IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgICAgY29sb3I6IFsyNTUsIDAsIDAsIDFdLFxuICAgICAgICB3aWR0aDogMlxuICAgICAgfSlcbiAgICB9KSk7XG4gICAgdmFyIGZlYXR1cmVzID0gdmVjdG9yU291cmNlLmdldEZlYXR1cmVzKCk7XG4gICAgdmFyIGVuY29kZWRGZWF0dXJlcyA9IGZoRm9ybWF0LndyaXRlRmVhdHVyZXMoZmVhdHVyZXMpO1xuXG4gICAgX3RoaXMyLnNjb3BlXy4kYXBwbHlBc3luYyhmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIubmdlb0xvY2F0aW9uXy51cGRhdGVQYXJhbXMoe1xuICAgICAgICAnZmVhdHVyZXMnOiBlbmNvZGVkRmVhdHVyZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgdmFyIGVuY29kZWRGZWF0dXJlcyA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgnZmVhdHVyZXMnKTtcblxuICBpZiAoZW5jb2RlZEZlYXR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmVhdHVyZXMgPSBmaEZvcm1hdC5yZWFkRmVhdHVyZXMoZW5jb2RlZEZlYXR1cmVzKTtcbiAgICB0aGlzLmZlYXR1cmVTZXFfID0gZmVhdHVyZXMubGVuZ3RoO1xuICAgIHZlY3RvclNvdXJjZS5hZGRGZWF0dXJlcyhmZWF0dXJlcyk7XG4gIH1cbn07XG5cbkRyYXdDb21wb25lbnRDb250cm9sbGVyLnByb3RvdHlwZS5jbGVhckxheWVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxheWVyLmdldFNvdXJjZSgpLmNsZWFyKHRydWUpO1xuICB0aGlzLmZlYXR1cmVTZXFfID0gMDtcbiAgdGhpcy5uZ2VvTG9jYXRpb25fLmRlbGV0ZVBhcmFtKCdmZWF0dXJlcycpO1xufTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ0FwcERyYXdDb250cm9sbGVyJywgRHJhd0NvbXBvbmVudENvbnRyb2xsZXIpO1xuXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcigpIHtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldXG4gIH0pO1xuICB2YXIgdmVjdG9yU291cmNlID0gbmV3IG9sU291cmNlVmVjdG9yKCk7XG4gIHRoaXMudmVjdG9yTGF5ZXIgPSBuZXcgb2xMYXllclZlY3Rvcih7XG4gICAgc291cmNlOiB2ZWN0b3JTb3VyY2VcbiAgfSk7XG4gIHRoaXMudmVjdG9yTGF5ZXIuc2V0TWFwKHRoaXMubWFwKTtcbn1cblxubW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzIGZyb20gJ25nZW8vZm9ybWF0L0ZlYXR1cmVQcm9wZXJ0aWVzLmpzJztcbmltcG9ydCBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUgZnJvbSAnbmdlby9mb3JtYXQvRmVhdHVyZUhhc2hTdHlsZVR5cGUuanMnO1xuaW1wb3J0IHsgcmdiQXJyYXlUb0hleCB9IGZyb20gJ25nZW8vdXRpbHMuanMnO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlLmpzJztcbmltcG9ydCAqIGFzIG9sRm9ybWF0RmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZS5qcyc7XG5pbXBvcnQgb2xGb3JtYXRUZXh0RmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvVGV4dEZlYXR1cmUuanMnO1xuaW1wb3J0IG9sR2VvbUdlb21ldHJ5TGF5b3V0IGZyb20gJ29sL2dlb20vR2VvbWV0cnlMYXlvdXQuanMnO1xuaW1wb3J0IG9sR2VvbUxpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9MaW5lU3RyaW5nLmpzJztcbmltcG9ydCBvbEdlb21NdWx0aUxpbmVTdHJpbmcgZnJvbSAnb2wvZ2VvbS9NdWx0aUxpbmVTdHJpbmcuanMnO1xuaW1wb3J0IG9sR2VvbU11bHRpUG9pbnQgZnJvbSAnb2wvZ2VvbS9NdWx0aVBvaW50LmpzJztcbmltcG9ydCBvbEdlb21NdWx0aVBvbHlnb24gZnJvbSAnb2wvZ2VvbS9NdWx0aVBvbHlnb24uanMnO1xuaW1wb3J0IG9sR2VvbVBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQuanMnO1xuaW1wb3J0IG9sR2VvbVBvbHlnb24gZnJvbSAnb2wvZ2VvbS9Qb2x5Z29uLmpzJztcbmltcG9ydCBvbFN0eWxlQ2lyY2xlIGZyb20gJ29sL3N0eWxlL0NpcmNsZS5qcyc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbC5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZS5qcyc7XG5pbXBvcnQgb2xTdHlsZVRleHQgZnJvbSAnb2wvc3R5bGUvVGV4dC5qcyc7XG52YXIgTGVnYWN5UHJvcGVydGllc18gPSB7fTtcbnZhciBERUZBVUxUX0FDQ1VSQUNZID0gMC4xO1xudmFyIFN0eWxlVHlwZXNfID0ge1xuICAnTGluZVN0cmluZyc6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5MSU5FX1NUUklORyxcbiAgJ1BvaW50Jzogbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLlBPSU5ULFxuICAnUG9seWdvbic6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0xZR09OLFxuICAnTXVsdGlMaW5lU3RyaW5nJzogbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLkxJTkVfU1RSSU5HLFxuICAnTXVsdGlQb2ludCc6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0lOVCxcbiAgJ011bHRpUG9seWdvbic6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0xZR09OXG59O1xudmFyIENIQVI2NF8gPSAnLi1fISpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODlhYmNkZWZnaGprbW5wcXJzdHV2d3h5eic7XG52YXIgR0VPTUVUUllfUkVBREVSU18gPSB7XG4gICdQJzogcmVhZE11bHRpUG9pbnRHZW9tZXRyeV8sXG4gICdMJzogcmVhZE11bHRpTGluZVN0cmluZ0dlb21ldHJ5XyxcbiAgJ0EnOiByZWFkTXVsdGlQb2x5Z29uR2VvbWV0cnlfLFxuICAnbCc6IHJlYWRMaW5lU3RyaW5nR2VvbWV0cnlfLFxuICAncCc6IHJlYWRQb2ludEdlb21ldHJ5XyxcbiAgJ2EnOiByZWFkUG9seWdvbkdlb21ldHJ5X1xufTtcbnZhciBHRU9NRVRSWV9XUklURVJTXyA9IHtcbiAgJ011bHRpTGluZVN0cmluZyc6IHdyaXRlTXVsdGlMaW5lU3RyaW5nR2VvbWV0cnlfLFxuICAnTXVsdGlQb2ludCc6IHdyaXRlTXVsdGlQb2ludEdlb21ldHJ5XyxcbiAgJ011bHRpUG9seWdvbic6IHdyaXRlTXVsdGlQb2x5Z29uR2VvbWV0cnlfLFxuICAnTGluZVN0cmluZyc6IHdyaXRlTGluZVN0cmluZ0dlb21ldHJ5XyxcbiAgJ1BvaW50Jzogd3JpdGVQb2ludEdlb21ldHJ5XyxcbiAgJ1BvbHlnb24nOiB3cml0ZVBvbHlnb25HZW9tZXRyeV9cbn07XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIChfb2xGb3JtYXRUZXh0RmVhdHVyZSkge1xuICBfaW5oZXJpdHNMb29zZShfZGVmYXVsdCwgX29sRm9ybWF0VGV4dEZlYXR1cmUpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfb2xGb3JtYXRUZXh0RmVhdHVyZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gb3B0X29wdGlvbnMgOiB7fTtcbiAgICBfdGhpcy5hY2N1cmFjeV8gPSBvcHRpb25zLmFjY3VyYWN5ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmFjY3VyYWN5IDogREVGQVVMVF9BQ0NVUkFDWTtcbiAgICBfdGhpcy5lbmNvZGVTdHlsZXNfID0gb3B0aW9ucy5lbmNvZGVTdHlsZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZW5jb2RlU3R5bGVzIDogdHJ1ZTtcbiAgICBfdGhpcy5wcm9wZXJ0aWVzRnVuY3Rpb25fID0gb3B0aW9ucy5wcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnByb3BlcnRpZXMgOiBkZWZhdWx0UHJvcGVydGllc0Z1bmN0aW9uXztcbiAgICBfdGhpcy5zZXRTdHlsZV8gPSBvcHRpb25zLnNldFN0eWxlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnNldFN0eWxlIDogdHJ1ZTtcbiAgICBfdGhpcy5wcmV2WF8gPSAwO1xuICAgIF90aGlzLnByZXZZXyA9IDA7XG4gICAgTGVnYWN5UHJvcGVydGllc18gPSBvcHRpb25zLnByb3BlcnRpZXNUeXBlICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5wcm9wZXJ0aWVzVHlwZTtcbiAgICBfdGhpcy5kZWZhdWx0VmFsdWVzXyA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5kZWZhdWx0VmFsdWVzIDoge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IF9kZWZhdWx0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVjb2RlQ29vcmRpbmF0ZXNfID0gZnVuY3Rpb24gZGVjb2RlQ29vcmRpbmF0ZXNfKHRleHQsIG9wdF9mbGF0Q29vcmRpbmF0ZXMpIHtcbiAgICB2YXIgbGVuID0gdGV4dC5sZW5ndGg7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gb3B0X2ZsYXRDb29yZGluYXRlcyAhPT0gdW5kZWZpbmVkID8gb3B0X2ZsYXRDb29yZGluYXRlcyA6IFtdO1xuICAgIHZhciBpID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbikge1xuICAgICAgdmFyIGIgPSB2b2lkIDA7XG4gICAgICB2YXIgc2hpZnQgPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IDA7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgYiA9IENIQVI2NF8uaW5kZXhPZih0ZXh0LmNoYXJBdChpbmRleCsrKSk7XG4gICAgICAgIHJlc3VsdCB8PSAoYiAmIDB4MWYpIDw8IHNoaWZ0O1xuICAgICAgICBzaGlmdCArPSA1O1xuICAgICAgfSB3aGlsZSAoYiA+PSAzMik7XG5cbiAgICAgIHZhciBkeCA9IHJlc3VsdCAmIDEgPyB+KHJlc3VsdCA+PiAxKSA6IHJlc3VsdCA+PiAxO1xuICAgICAgdGhpcy5wcmV2WF8gKz0gZHg7XG4gICAgICBzaGlmdCA9IDA7XG4gICAgICByZXN1bHQgPSAwO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGIgPSBDSEFSNjRfLmluZGV4T2YodGV4dC5jaGFyQXQoaW5kZXgrKykpO1xuICAgICAgICByZXN1bHQgfD0gKGIgJiAweDFmKSA8PCBzaGlmdDtcbiAgICAgICAgc2hpZnQgKz0gNTtcbiAgICAgIH0gd2hpbGUgKGIgPj0gMzIpO1xuXG4gICAgICB2YXIgZHkgPSByZXN1bHQgJiAxID8gfihyZXN1bHQgPj4gMSkgOiByZXN1bHQgPj4gMTtcbiAgICAgIHRoaXMucHJldllfICs9IGR5O1xuICAgICAgZmxhdENvb3JkaW5hdGVzW2krK10gPSB0aGlzLnByZXZYXyAqIHRoaXMuYWNjdXJhY3lfO1xuICAgICAgZmxhdENvb3JkaW5hdGVzW2krK10gPSB0aGlzLnByZXZZXyAqIHRoaXMuYWNjdXJhY3lfO1xuICAgIH1cblxuICAgIHJldHVybiBmbGF0Q29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgX3Byb3RvLmVuY29kZUNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uIGVuY29kZUNvb3JkaW5hdGVzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgb2Zmc2V0LCBlbmQpIHtcbiAgICB2YXIgZW5jb2RlZENvb3JkaW5hdGVzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gb2Zmc2V0OyBpIDwgZW5kOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmFyIHggPSBmbGF0Q29vcmRpbmF0ZXNbaV07XG4gICAgICB2YXIgeSA9IGZsYXRDb29yZGluYXRlc1tpICsgMV07XG4gICAgICB4ID0gTWF0aC5mbG9vcih4IC8gdGhpcy5hY2N1cmFjeV8pO1xuICAgICAgeSA9IE1hdGguZmxvb3IoeSAvIHRoaXMuYWNjdXJhY3lfKTtcbiAgICAgIHZhciBkeCA9IHggLSB0aGlzLnByZXZYXztcbiAgICAgIHZhciBkeSA9IHkgLSB0aGlzLnByZXZZXztcbiAgICAgIHRoaXMucHJldlhfID0geDtcbiAgICAgIHRoaXMucHJldllfID0geTtcbiAgICAgIGVuY29kZWRDb29yZGluYXRlcyArPSBlbmNvZGVTaWduZWROdW1iZXJfKGR4KSArIGVuY29kZVNpZ25lZE51bWJlcl8oZHkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGVkQ29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlYWRGZWF0dXJlRnJvbVRleHQgPSBmdW5jdGlvbiByZWFkRmVhdHVyZUZyb21UZXh0KHRleHQsIG9wdF9vcHRpb25zKSB7XG4gICAgY29uc29sZS5hc3NlcnQodGV4dC5sZW5ndGggPiAyKTtcbiAgICBjb25zb2xlLmFzc2VydCh0ZXh0WzFdID09PSAnKCcpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KHRleHRbdGV4dC5sZW5ndGggLSAxXSA9PT0gJyknKTtcbiAgICB2YXIgc3BsaXRJbmRleCA9IHRleHQuaW5kZXhPZignficpO1xuICAgIHZhciBnZW9tZXRyeVRleHQgPSBzcGxpdEluZGV4ID49IDAgPyB0ZXh0LnN1YnN0cmluZygwLCBzcGxpdEluZGV4KSArIFwiKVwiIDogdGV4dDtcbiAgICB2YXIgZ2VvbWV0cnkgPSB0aGlzLnJlYWRHZW9tZXRyeUZyb21UZXh0KGdlb21ldHJ5VGV4dCwgb3B0X29wdGlvbnMpO1xuICAgIHZhciBmZWF0dXJlID0gbmV3IG9sRmVhdHVyZShnZW9tZXRyeSk7XG5cbiAgICBpZiAoc3BsaXRJbmRleCA+PSAwKSB7XG4gICAgICB2YXIgYXR0cmlidXRlc0FuZFN0eWxlc1RleHQgPSB0ZXh0LnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSwgdGV4dC5sZW5ndGggLSAxKTtcbiAgICAgIHNwbGl0SW5kZXggPSBhdHRyaWJ1dGVzQW5kU3R5bGVzVGV4dC5pbmRleE9mKCd+Jyk7XG4gICAgICB2YXIgYXR0cmlidXRlc1RleHQgPSBzcGxpdEluZGV4ID49IDAgPyBhdHRyaWJ1dGVzQW5kU3R5bGVzVGV4dC5zdWJzdHJpbmcoMCwgc3BsaXRJbmRleCkgOiBhdHRyaWJ1dGVzQW5kU3R5bGVzVGV4dDtcblxuICAgICAgaWYgKGF0dHJpYnV0ZXNUZXh0ICE9ICcnKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IGF0dHJpYnV0ZXNUZXh0LnNwbGl0KCdcXCcnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgdmFyIHBhcnQgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbaV0pO1xuICAgICAgICAgIHZhciBrZXlWYWwgPSBwYXJ0LnNwbGl0KCcqJyk7XG4gICAgICAgICAgY29uc29sZS5hc3NlcnQoa2V5VmFsLmxlbmd0aCA9PT0gMik7XG4gICAgICAgICAgdmFyIGtleSA9IGtleVZhbFswXTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBrZXlWYWxbMV07XG5cbiAgICAgICAgICBpZiAoIXRoaXMuc2V0U3R5bGVfICYmIExlZ2FjeVByb3BlcnRpZXNfW2tleV0pIHtcbiAgICAgICAgICAgIGtleSA9IExlZ2FjeVByb3BlcnRpZXNfW2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmVhdHVyZS5zZXQoa2V5LCBjYXN0VmFsdWVfKGtleSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3BsaXRJbmRleCA+PSAwKSB7XG4gICAgICAgIHZhciBzdHlsZXNUZXh0ID0gYXR0cmlidXRlc0FuZFN0eWxlc1RleHQuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcblxuICAgICAgICBpZiAodGhpcy5zZXRTdHlsZV8pIHtcbiAgICAgICAgICBzZXRTdHlsZUluRmVhdHVyZV8oc3R5bGVzVGV4dCwgZmVhdHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0aWVzXyhzdHlsZXNUZXh0LCBmZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZWF0dXJlO1xuICB9O1xuXG4gIF9wcm90by5yZWFkRmVhdHVyZXNGcm9tVGV4dCA9IGZ1bmN0aW9uIHJlYWRGZWF0dXJlc0Zyb21UZXh0KHRleHQsIG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBjb25zb2xlLmFzc2VydCh0ZXh0WzBdID09PSAnRicpO1xuICAgIHRoaXMucHJldlhfID0gMDtcbiAgICB0aGlzLnByZXZZXyA9IDA7XG4gICAgdmFyIGZlYXR1cmVzID0gW107XG4gICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDEpO1xuXG4gICAgd2hpbGUgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGluZGV4ID0gdGV4dC5pbmRleE9mKCcpJyk7XG4gICAgICBjb25zb2xlLmFzc2VydChpbmRleCA+PSAwKTtcbiAgICAgIHZhciBmZWF0dXJlID0gdGhpcy5yZWFkRmVhdHVyZUZyb21UZXh0KHRleHQuc3Vic3RyaW5nKDAsIGluZGV4ICsgMSksIG9wdF9vcHRpb25zKTtcbiAgICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoaW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gX3RoaXMyLmRlZmF1bHRWYWx1ZXNfKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IExlZ2FjeVByb3BlcnRpZXNfW2tleV07XG5cbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZmVhdHVyZS5zZXQocHJvcGVydHksIF90aGlzMi5kZWZhdWx0VmFsdWVzX1trZXldLmNhbGwobnVsbCwgZmVhdHVyZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZlYXR1cmVzO1xuICB9O1xuXG4gIF9wcm90by5yZWFkR2VvbWV0cnlGcm9tVGV4dCA9IGZ1bmN0aW9uIHJlYWRHZW9tZXRyeUZyb21UZXh0KHRleHQsIG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIGdlb21ldHJ5UmVhZGVyID0gR0VPTUVUUllfUkVBREVSU19bdGV4dFswXV07XG4gICAgY29uc29sZS5hc3NlcnQoZ2VvbWV0cnlSZWFkZXIgIT09IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIGdlb21ldHJ5UmVhZGVyLmNhbGwodGhpcywgdGV4dCk7XG4gIH07XG5cbiAgX3Byb3RvLndyaXRlRmVhdHVyZVRleHQgPSBmdW5jdGlvbiB3cml0ZUZlYXR1cmVUZXh0KGZlYXR1cmUsIG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIGVuY29kZWRQYXJ0cyA9IFtdO1xuICAgIHZhciBlbmNvZGVkR2VvbWV0cnkgPSAnJztcbiAgICB2YXIgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG5cbiAgICBpZiAoZ2VvbWV0cnkpIHtcbiAgICAgIGVuY29kZWRHZW9tZXRyeSA9IHRoaXMud3JpdGVHZW9tZXRyeVRleHQoZ2VvbWV0cnksIG9wdF9vcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZW5jb2RlZEdlb21ldHJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnNvbGUuYXNzZXJ0KGVuY29kZWRHZW9tZXRyeVtlbmNvZGVkR2VvbWV0cnkubGVuZ3RoIC0gMV0gPT09ICcpJyk7XG4gICAgICBlbmNvZGVkR2VvbWV0cnkgPSBlbmNvZGVkR2VvbWV0cnkuc3Vic3RyaW5nKDAsIGVuY29kZWRHZW9tZXRyeS5sZW5ndGggLSAxKTtcbiAgICAgIGVuY29kZWRQYXJ0cy5wdXNoKGVuY29kZWRHZW9tZXRyeSk7XG4gICAgfVxuXG4gICAgdmFyIGVuY29kZWRQcm9wZXJ0aWVzID0gW107XG4gICAgdmFyIHByb3BGdW5jdGlvbiA9IHRoaXMucHJvcGVydGllc0Z1bmN0aW9uXyhmZWF0dXJlKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wRnVuY3Rpb24pIHtcbiAgICAgIHZhciB2YWx1ZSA9IHByb3BGdW5jdGlvbltrZXldO1xuXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiBrZXkgIT09IGZlYXR1cmUuZ2V0R2VvbWV0cnlOYW1lKCkpIHtcbiAgICAgICAgaWYgKGVuY29kZWRQcm9wZXJ0aWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGVuY29kZWRQcm9wZXJ0aWVzLnB1c2goJ1xcJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5LnJlcGxhY2UoL1soKScqXS9nLCAnXycpICsgXCIqXCIgKyB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1soKScqXS9nLCAnXycpKTtcbiAgICAgICAgZW5jb2RlZFByb3BlcnRpZXMucHVzaChlbmNvZGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW5jb2RlZFByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZW5jb2RlZFBhcnRzLnB1c2goJ34nKTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVuY29kZWRQYXJ0cywgZW5jb2RlZFByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVuY29kZVN0eWxlc18pIHtcbiAgICAgIHZhciBzdHlsZUZ1bmN0aW9uID0gZmVhdHVyZS5nZXRTdHlsZUZ1bmN0aW9uKCk7XG5cbiAgICAgIGlmIChzdHlsZUZ1bmN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9IHN0eWxlRnVuY3Rpb24oZmVhdHVyZSwgMCk7XG5cbiAgICAgICAgaWYgKHN0eWxlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBlbmNvZGVkU3R5bGVzID0gW107XG4gICAgICAgICAgc3R5bGVzID0gQXJyYXkuaXNBcnJheShzdHlsZXMpID8gc3R5bGVzIDogW3N0eWxlc107XG4gICAgICAgICAgZW5jb2RlU3R5bGVzXyhzdHlsZXMsIGdlb21ldHJ5LmdldFR5cGUoKSwgZW5jb2RlZFN0eWxlcyk7XG5cbiAgICAgICAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBlbmNvZGVkUGFydHMucHVzaCgnficpO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZW5jb2RlZFBhcnRzLCBlbmNvZGVkU3R5bGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbmNvZGVkUGFydHMucHVzaCgnKScpO1xuICAgIHJldHVybiBlbmNvZGVkUGFydHMuam9pbignJyk7XG4gIH07XG5cbiAgX3Byb3RvLndyaXRlRmVhdHVyZXNUZXh0ID0gZnVuY3Rpb24gd3JpdGVGZWF0dXJlc1RleHQoZmVhdHVyZXMsIG9wdF9vcHRpb25zKSB7XG4gICAgdGhpcy5wcmV2WF8gPSAwO1xuICAgIHRoaXMucHJldllfID0gMDtcbiAgICB2YXIgdGV4dEFycmF5ID0gW107XG5cbiAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGV4dEFycmF5LnB1c2goJ0YnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gZmVhdHVyZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICB0ZXh0QXJyYXkucHVzaCh0aGlzLndyaXRlRmVhdHVyZVRleHQoZmVhdHVyZXNbaV0sIG9wdF9vcHRpb25zKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRBcnJheS5qb2luKCcnKTtcbiAgfTtcblxuICBfcHJvdG8ud3JpdGVHZW9tZXRyeVRleHQgPSBmdW5jdGlvbiB3cml0ZUdlb21ldHJ5VGV4dChnZW9tZXRyeSwgb3B0X29wdGlvbnMpIHtcbiAgICB2YXIgZ2VvbWV0cnlXcml0ZXIgPSBHRU9NRVRSWV9XUklURVJTX1tnZW9tZXRyeS5nZXRUeXBlKCldO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGdlb21ldHJ5V3JpdGVyICE9PSB1bmRlZmluZWQpO1xuICAgIHZhciB0cmFuc2Zvcm1lZEdlb21ldHJ5ID0gb2xGb3JtYXRGZWF0dXJlLnRyYW5zZm9ybVdpdGhPcHRpb25zKGdlb21ldHJ5LCB0cnVlLCBvcHRfb3B0aW9ucyk7XG4gICAgcmV0dXJuIGdlb21ldHJ5V3JpdGVyLmNhbGwodGhpcywgdHJhbnNmb3JtZWRHZW9tZXRyeSk7XG4gIH07XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShvbEZvcm1hdFRleHRGZWF0dXJlKTtcblxuZXhwb3J0IHsgX2RlZmF1bHQgYXMgZGVmYXVsdCB9O1xuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Z1bmN0aW9uXyhmZWF0dXJlKSB7XG4gIHJldHVybiBmZWF0dXJlLmdldFByb3BlcnRpZXMoKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlU2lnbmVkTnVtYmVyXyhudW0pIHtcbiAgdmFyIHNpZ25lZE51bSA9IG51bSA8PCAxO1xuXG4gIGlmIChudW0gPCAwKSB7XG4gICAgc2lnbmVkTnVtID0gfnNpZ25lZE51bTtcbiAgfVxuXG4gIHJldHVybiBlbmNvZGVOdW1iZXJfKHNpZ25lZE51bSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZU51bWJlcl8obnVtKSB7XG4gIHZhciBlbmNvZGVkTnVtYmVyID0gJyc7XG5cbiAgd2hpbGUgKG51bSA+PSAweDIwKSB7XG4gICAgZW5jb2RlZE51bWJlciArPSBDSEFSNjRfLmNoYXJBdCgweDIwIHwgbnVtICYgMHgxZik7XG4gICAgbnVtID4+PSA1O1xuICB9XG5cbiAgZW5jb2RlZE51bWJlciArPSBDSEFSNjRfLmNoYXJBdChudW0pO1xuICByZXR1cm4gZW5jb2RlZE51bWJlcjtcbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVzXyhzdHlsZXMsIGdlb21ldHJ5VHlwZSwgZW5jb2RlZFN0eWxlcykge1xuICB2YXIgc3R5bGVUeXBlID0gU3R5bGVUeXBlc19bZ2VvbWV0cnlUeXBlXTtcbiAgY29uc29sZS5hc3NlcnQoc3R5bGVUeXBlICE9PSB1bmRlZmluZWQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHN0eWxlID0gc3R5bGVzW2ldO1xuICAgIHZhciBmaWxsU3R5bGUgPSBzdHlsZS5nZXRGaWxsKCk7XG4gICAgdmFyIGltYWdlU3R5bGUgPSBzdHlsZS5nZXRJbWFnZSgpO1xuICAgIHZhciBzdHJva2VTdHlsZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xuICAgIHZhciB0ZXh0U3R5bGUgPSBzdHlsZS5nZXRUZXh0KCk7XG5cbiAgICBpZiAoc3R5bGVUeXBlID09IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0xZR09OKSB7XG4gICAgICBpZiAoZmlsbFN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgIGVuY29kZVN0eWxlUG9seWdvbl8oZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdHlsZVR5cGUgPT0gbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLkxJTkVfU1RSSU5HKSB7XG4gICAgICBpZiAoc3Ryb2tlU3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgZW5jb2RlU3R5bGVMaW5lXyhzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdHlsZVR5cGUgPT0gbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlLlBPSU5UKSB7XG4gICAgICBpZiAoaW1hZ2VTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICBlbmNvZGVTdHlsZVBvaW50XyhpbWFnZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGV4dFN0eWxlICE9PSBudWxsKSB7XG4gICAgICBlbmNvZGVTdHlsZVRleHRfKHRleHRTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlTGluZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgZW5jb2RlU3R5bGVTdHJva2VfKHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVQb2ludF8oaW1hZ2VTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICBpZiAoaW1hZ2VTdHlsZSBpbnN0YW5jZW9mIG9sU3R5bGVDaXJjbGUpIHtcbiAgICB2YXIgcmFkaXVzID0gaW1hZ2VTdHlsZS5nZXRSYWRpdXMoKTtcblxuICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaCgnXFwnJyk7XG4gICAgfVxuXG4gICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChcInBvaW50UmFkaXVzKlwiICsgcmFkaXVzKSk7XG4gICAgdmFyIGZpbGxTdHlsZSA9IGltYWdlU3R5bGUuZ2V0RmlsbCgpO1xuXG4gICAgaWYgKGZpbGxTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgZW5jb2RlU3R5bGVGaWxsXyhmaWxsU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICAgIH1cblxuICAgIHZhciBzdHJva2VTdHlsZSA9IGltYWdlU3R5bGUuZ2V0U3Ryb2tlKCk7XG5cbiAgICBpZiAoc3Ryb2tlU3R5bGUgIT09IG51bGwpIHtcbiAgICAgIGVuY29kZVN0eWxlU3Ryb2tlXyhzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlUG9seWdvbl8oZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICBlbmNvZGVTdHlsZUZpbGxfKGZpbGxTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG5cbiAgaWYgKHN0cm9rZVN0eWxlICE9PSBudWxsKSB7XG4gICAgZW5jb2RlU3R5bGVTdHJva2VfKHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZUZpbGxfKGZpbGxTdHlsZSwgZW5jb2RlZFN0eWxlcywgb3B0X3Byb3BlcnR5TmFtZSkge1xuICB2YXIgcHJvcGVydHlOYW1lID0gb3B0X3Byb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0X3Byb3BlcnR5TmFtZSA6ICdmaWxsQ29sb3InO1xuICB2YXIgZmlsbENvbG9yID0gZmlsbFN0eWxlLmdldENvbG9yKCk7XG5cbiAgaWYgKGZpbGxDb2xvciAhPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGxDb2xvcikpIHtcbiAgICAgIHZhciBmaWxsQ29sb3JIZXggPSByZ2JBcnJheVRvSGV4KGZpbGxDb2xvcik7XG5cbiAgICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKCdcXCcnKTtcbiAgICAgIH1cblxuICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eU5hbWUgKyBcIipcIiArIGZpbGxDb2xvckhleCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgJ29ubHkgc3VwcG9ydGluZyBmaWxsIGNvbG9ycycpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZVN0cm9rZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgdmFyIHN0cm9rZUNvbG9yID0gc3Ryb2tlU3R5bGUuZ2V0Q29sb3IoKTtcblxuICBpZiAoc3Ryb2tlQ29sb3IgIT09IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHJva2VDb2xvcikpIHtcbiAgICAgIHZhciBzdHJva2VDb2xvckhleCA9IHJnYkFycmF5VG9IZXgoc3Ryb2tlQ29sb3IpO1xuXG4gICAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVuY29kZWRTdHlsZXMucHVzaCgnXFwnJyk7XG4gICAgICB9XG5cbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoXCJzdHJva2VDb2xvcipcIiArIHN0cm9rZUNvbG9ySGV4KSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0cm9rZVdpZHRoID0gc3Ryb2tlU3R5bGUuZ2V0V2lkdGgoKTtcblxuICBpZiAoc3Ryb2tlV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaCgnXFwnJyk7XG4gICAgfVxuXG4gICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChcInN0cm9rZVdpZHRoKlwiICsgc3Ryb2tlV2lkdGgpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZVRleHRfKHRleHRTdHlsZSwgZW5jb2RlZFN0eWxlcykge1xuICB2YXIgZm9udFN0eWxlID0gdGV4dFN0eWxlLmdldEZvbnQoKTtcblxuICBpZiAoZm9udFN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZm9udCA9IGZvbnRTdHlsZS5zcGxpdCgnICcpO1xuXG4gICAgaWYgKGZvbnQubGVuZ3RoID49IDMpIHtcbiAgICAgIGlmIChlbmNvZGVkU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKCdcXCcnKTtcbiAgICAgIH1cblxuICAgICAgZW5jb2RlZFN0eWxlcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChcImZvbnRTaXplKlwiICsgZm9udFsxXSkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmaWxsU3R5bGUgPSB0ZXh0U3R5bGUuZ2V0RmlsbCgpO1xuXG4gIGlmIChmaWxsU3R5bGUgIT09IG51bGwpIHtcbiAgICBlbmNvZGVTdHlsZUZpbGxfKGZpbGxTdHlsZSwgZW5jb2RlZFN0eWxlcywgJ2ZvbnRDb2xvcicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRMaW5lU3RyaW5nR2VvbWV0cnlfKHRleHQpIHtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5zdWJzdHJpbmcoMCwgMikgPT09ICdsKCcpO1xuICBjb25zb2xlLmFzc2VydCh0ZXh0W3RleHQubGVuZ3RoIC0gMV0gPT0gJyknKTtcbiAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDIsIHRleHQubGVuZ3RoIC0gMSk7XG4gIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyh0ZXh0KTtcbiAgcmV0dXJuIG5ldyBvbEdlb21MaW5lU3RyaW5nKGZsYXRDb29yZGluYXRlcywgb2xHZW9tR2VvbWV0cnlMYXlvdXQuWFkpO1xufVxuXG5mdW5jdGlvbiByZWFkTXVsdGlMaW5lU3RyaW5nR2VvbWV0cnlfKHRleHQpIHtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5zdWJzdHJpbmcoMCwgMikgPT09ICdMKCcpO1xuICBjb25zb2xlLmFzc2VydCh0ZXh0W3RleHQubGVuZ3RoIC0gMV0gPT0gJyknKTtcbiAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDIsIHRleHQubGVuZ3RoIC0gMSk7XG4gIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgdmFyIGVuZHMgPSBbXTtcbiAgdmFyIGxpbmVTdHJpbmdzID0gdGV4dC5zcGxpdCgnXFwnJyk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGlpID0gbGluZVN0cmluZ3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZGVjb2RlQ29vcmRpbmF0ZXNfKGxpbmVTdHJpbmdzW2ldLCBmbGF0Q29vcmRpbmF0ZXMpO1xuICAgIGVuZHNbaV0gPSBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBvbEdlb21NdWx0aUxpbmVTdHJpbmcoZmxhdENvb3JkaW5hdGVzLCBvbEdlb21HZW9tZXRyeUxheW91dC5YWSwgZW5kcyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRQb2ludEdlb21ldHJ5Xyh0ZXh0KSB7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3Vic3RyaW5nKDAsIDIpID09PSAncCgnKTtcbiAgY29uc29sZS5hc3NlcnQodGV4dFt0ZXh0Lmxlbmd0aCAtIDFdID09ICcpJyk7XG4gIHRleHQgPSB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB2YXIgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5kZWNvZGVDb29yZGluYXRlc18odGV4dCk7XG4gIGNvbnNvbGUuYXNzZXJ0KGZsYXRDb29yZGluYXRlcy5sZW5ndGggPT09IDIpO1xuICByZXR1cm4gbmV3IG9sR2VvbVBvaW50KGZsYXRDb29yZGluYXRlcywgb2xHZW9tR2VvbWV0cnlMYXlvdXQuWFkpO1xufVxuXG5mdW5jdGlvbiByZWFkTXVsdGlQb2ludEdlb21ldHJ5Xyh0ZXh0KSB7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3Vic3RyaW5nKDAsIDIpID09PSAnUCgnKTtcbiAgY29uc29sZS5hc3NlcnQodGV4dFt0ZXh0Lmxlbmd0aCAtIDFdID09ICcpJyk7XG4gIHRleHQgPSB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB2YXIgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5kZWNvZGVDb29yZGluYXRlc18odGV4dCk7XG4gIHJldHVybiBuZXcgb2xHZW9tTXVsdGlQb2ludChmbGF0Q29vcmRpbmF0ZXMsIG9sR2VvbUdlb21ldHJ5TGF5b3V0LlhZKTtcbn1cblxuZnVuY3Rpb24gcmVhZFBvbHlnb25HZW9tZXRyeV8odGV4dCkge1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LnN1YnN0cmluZygwLCAyKSA9PT0gJ2EoJyk7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHRbdGV4dC5sZW5ndGggLSAxXSA9PSAnKScpO1xuICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMiwgdGV4dC5sZW5ndGggLSAxKTtcbiAgdmFyIGZsYXRDb29yZGluYXRlcyA9IFtdO1xuICB2YXIgZW5kcyA9IFtdO1xuICB2YXIgcmluZ3MgPSB0ZXh0LnNwbGl0KCdcXCcnKTtcblxuICBmb3IgKHZhciBpID0gMCwgaWkgPSByaW5ncy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5kZWNvZGVDb29yZGluYXRlc18ocmluZ3NbaV0sIGZsYXRDb29yZGluYXRlcyk7XG4gICAgdmFyIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1swXTtcbiAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbZW5kc1tpIC0gMV1dO1xuICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1tlbmRzW2kgLSAxXSArIDFdO1xuICAgIH1cblxuICAgIGVuZHNbaV0gPSBlbmQ7XG4gIH1cblxuICByZXR1cm4gbmV3IG9sR2VvbVBvbHlnb24oZmxhdENvb3JkaW5hdGVzLCBvbEdlb21HZW9tZXRyeUxheW91dC5YWSwgZW5kcyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRNdWx0aVBvbHlnb25HZW9tZXRyeV8odGV4dCkge1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LnN1YnN0cmluZygwLCAyKSA9PT0gJ0EoJyk7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHRbdGV4dC5sZW5ndGggLSAxXSA9PSAnKScpO1xuICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMiwgdGV4dC5sZW5ndGggLSAxKTtcbiAgdmFyIGZsYXRDb29yZGluYXRlcyA9IFtdO1xuICB2YXIgZW5kc3MgPSBbXTtcbiAgdmFyIHBvbHlnb25zID0gdGV4dC5zcGxpdCgnKSgnKTtcblxuICBmb3IgKHZhciBpID0gMCwgaWkgPSBwb2x5Z29ucy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgdmFyIHJpbmdzID0gcG9seWdvbnNbaV0uc3BsaXQoJ1xcJycpO1xuICAgIHZhciBlbmRzID0gZW5kc3NbaV0gPSBbXTtcblxuICAgIGZvciAodmFyIGogPSAwLCBqaiA9IHJpbmdzLmxlbmd0aDsgaiA8IGpqOyArK2opIHtcbiAgICAgIGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZGVjb2RlQ29vcmRpbmF0ZXNfKHJpbmdzW2pdLCBmbGF0Q29vcmRpbmF0ZXMpO1xuICAgICAgdmFyIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbMF07XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzW2VuZHNbaiAtIDFdXTtcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1tlbmRzW2ogLSAxXSArIDFdO1xuICAgICAgfVxuXG4gICAgICBlbmRzW2pdID0gZW5kO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgb2xHZW9tTXVsdGlQb2x5Z29uKGZsYXRDb29yZGluYXRlcywgb2xHZW9tR2VvbWV0cnlMYXlvdXQuWFksIGVuZHNzKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGVJbkZlYXR1cmVfKHRleHQsIGZlYXR1cmUpIHtcbiAgaWYgKHRleHQgPT0gJycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcHJvcGVydGllcyA9IGdldFN0eWxlUHJvcGVydGllc18odGV4dCwgZmVhdHVyZSk7XG4gIHZhciBmaWxsQ29sb3IgPSBwcm9wZXJ0aWVzWydmaWxsQ29sb3InXTtcbiAgdmFyIGZvbnRTaXplID0gcHJvcGVydGllc1snZm9udFNpemUnXTtcbiAgdmFyIGZvbnRDb2xvciA9IHByb3BlcnRpZXNbJ2ZvbnRDb2xvciddO1xuICB2YXIgcG9pbnRSYWRpdXMgPSBwcm9wZXJ0aWVzWydwb2ludFJhZGl1cyddO1xuICB2YXIgc3Ryb2tlQ29sb3IgPSBwcm9wZXJ0aWVzWydzdHJva2VDb2xvciddO1xuICB2YXIgc3Ryb2tlV2lkdGggPSBwcm9wZXJ0aWVzWydzdHJva2VXaWR0aCddO1xuICB2YXIgZmlsbFN0eWxlID0gbnVsbDtcblxuICBpZiAoZmlsbENvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICBmaWxsU3R5bGUgPSBuZXcgb2xTdHlsZUZpbGwoe1xuICAgICAgY29sb3I6IGZpbGxDb2xvclxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0cm9rZVN0eWxlID0gbnVsbDtcblxuICBpZiAoc3Ryb2tlQ29sb3IgIT09IHVuZGVmaW5lZCAmJiBzdHJva2VXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3Ryb2tlU3R5bGUgPSBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICBjb2xvcjogc3Ryb2tlQ29sb3IsXG4gICAgICB3aWR0aDogc3Ryb2tlV2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBpbWFnZVN0eWxlID0gbnVsbDtcblxuICBpZiAocG9pbnRSYWRpdXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGltYWdlU3R5bGUgPSBuZXcgb2xTdHlsZUNpcmNsZSh7XG4gICAgICByYWRpdXM6IHBvaW50UmFkaXVzLFxuICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZVxuICAgIH0pO1xuICAgIGZpbGxTdHlsZSA9IHN0cm9rZVN0eWxlID0gbnVsbDtcbiAgfVxuXG4gIHZhciB0ZXh0U3R5bGUgPSBudWxsO1xuXG4gIGlmIChmb250U2l6ZSAhPT0gdW5kZWZpbmVkICYmIGZvbnRDb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGV4dFN0eWxlID0gbmV3IG9sU3R5bGVUZXh0KHtcbiAgICAgIGZvbnQ6IGZvbnRTaXplICsgXCIgc2Fucy1zZXJpZlwiLFxuICAgICAgZmlsbDogbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgICAgY29sb3I6IGZvbnRDb2xvclxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IG5ldyBvbFN0eWxlU3R5bGUoe1xuICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICBpbWFnZTogaW1hZ2VTdHlsZSxcbiAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgIHRleHQ6IHRleHRTdHlsZVxuICB9KTtcbiAgZmVhdHVyZS5zZXRTdHlsZShzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlUHJvcGVydGllc18odGV4dCwgZmVhdHVyZSkge1xuICB2YXIgcHJvcGVydGllcyA9IGdldFN0eWxlUHJvcGVydGllc18odGV4dCwgZmVhdHVyZSk7XG4gIHZhciBnZW9tZXRyeSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcblxuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21Qb2ludCkge1xuICAgIGlmIChwcm9wZXJ0aWVzWydpc0xhYmVsJ10gfHwgcHJvcGVydGllc1tuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuSVNfVEVYVF0pIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzWydzdHJva2VDb2xvciddO1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbJ2ZpbGxDb2xvciddO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1snZm9udENvbG9yJ107XG4gICAgICBkZWxldGUgcHJvcGVydGllc1snZm9udFNpemUnXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIHByb3BlcnRpZXNbJ2ZvbnRDb2xvciddO1xuXG4gICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tTGluZVN0cmluZykge1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbJ2ZpbGxDb2xvciddO1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbJ2ZpbGxPcGFjaXR5J107XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb3BlcnRpZXNbJ2ZvbnRTaXplJ10pIHtcbiAgICB2YXIgZm9udFNpemVTdHIgPSBwcm9wZXJ0aWVzWydmb250U2l6ZSddO1xuICAgIHZhciBmb250U2l6ZSA9IHBhcnNlRmxvYXQoZm9udFNpemVTdHIpO1xuXG4gICAgaWYgKGZvbnRTaXplU3RyLmluZGV4T2YoJ3B4JykgIT09IC0xKSB7XG4gICAgICBmb250U2l6ZSA9IE1hdGgucm91bmQoZm9udFNpemUgLyAxLjMzMzMzMyk7XG4gICAgfVxuXG4gICAgcHJvcGVydGllc1snZm9udFNpemUnXSA9IGZvbnRTaXplO1xuICB9XG5cbiAgdmFyIGNsb25lID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0aWVzW2tleV07XG5cbiAgICBpZiAoTGVnYWN5UHJvcGVydGllc19ba2V5XSkge1xuICAgICAgY2xvbmVbTGVnYWN5UHJvcGVydGllc19ba2V5XV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvbmVba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZlYXR1cmUuc2V0UHJvcGVydGllcyhjbG9uZSk7XG59XG5cbmZ1bmN0aW9uIGNhc3RWYWx1ZV8oa2V5LCB2YWx1ZSkge1xuICB2YXIgbnVtUHJvcGVydGllcyA9IFtuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuQU5HTEUsIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5PUEFDSVRZLCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuU0laRSwgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNUUk9LRSwgJ3BvaW50UmFkaXVzJywgJ3N0cm9rZVdpZHRoJ107XG4gIHZhciBib29sUHJvcGVydGllcyA9IFtuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuSVNfQ0lSQ0xFLCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuSVNfUkVDVEFOR0xFLCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuSVNfVEVYVCwgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNIT1dfTUVBU1VSRSwgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNIT1dfTEFCRUwsICdpc0NpcmNsZScsICdpc1JlY3RhbmdsZScsICdpc0xhYmVsJywgJ3Nob3dNZWFzdXJlJywgJ3Nob3dMYWJlbCddO1xuXG4gIGlmIChudW1Qcm9wZXJ0aWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICByZXR1cm4gK3ZhbHVlO1xuICB9IGVsc2UgaWYgKGJvb2xQcm9wZXJ0aWVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0aWVzXyh0ZXh0LCBmZWF0dXJlKSB7XG4gIHZhciBwYXJ0cyA9IHRleHQuc3BsaXQoJ1xcJycpO1xuICB2YXIgcHJvcGVydGllcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFydCA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1tpXSk7XG4gICAgdmFyIGtleVZhbCA9IHBhcnQuc3BsaXQoJyonKTtcbiAgICBjb25zb2xlLmFzc2VydChrZXlWYWwubGVuZ3RoID09PSAyKTtcbiAgICB2YXIga2V5ID0ga2V5VmFsWzBdO1xuICAgIHZhciB2YWwgPSBrZXlWYWxbMV07XG4gICAgcHJvcGVydGllc1trZXldID0gY2FzdFZhbHVlXyhrZXksIHZhbCk7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gd3JpdGVMaW5lU3RyaW5nR2VvbWV0cnlfKGdlb21ldHJ5KSB7XG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbUxpbmVTdHJpbmcpIHtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICAgIHZhciBlbmQgPSBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIHJldHVybiBcImwoXCIgKyB0aGlzLmVuY29kZUNvb3JkaW5hdGVzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgMCwgZW5kKSArIFwiKVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdyaXRlTXVsdGlMaW5lU3RyaW5nR2VvbWV0cnlfKGdlb21ldHJ5KSB7XG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbU11bHRpTGluZVN0cmluZykge1xuICAgIHZhciBlbmRzID0gZ2VvbWV0cnkuZ2V0RW5kcygpO1xuICAgIHZhciBsaW5lU3RyaW5nQ291bnQgPSBlbmRzLmxlbmd0aDtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciB0ZXh0QXJyYXkgPSBbJ0woJ107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVTdHJpbmdDb3VudDsgKytpKSB7XG4gICAgICB2YXIgZW5kID0gZW5kc1tpXTtcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5lbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kKTtcblxuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgdGV4dEFycmF5LnB1c2goJ1xcJycpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0QXJyYXkucHVzaCh0ZXh0KTtcbiAgICAgIG9mZnNldCA9IGVuZDtcbiAgICB9XG5cbiAgICB0ZXh0QXJyYXkucHVzaCgnKScpO1xuICAgIHJldHVybiB0ZXh0QXJyYXkuam9pbignJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JpdGVQb2ludEdlb21ldHJ5XyhnZW9tZXRyeSkge1xuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21Qb2ludCkge1xuICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgc3RyaWRlID0gZ2VvbWV0cnkuZ2V0U3RyaWRlKCk7XG4gICAgdmFyIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG4gICAgcmV0dXJuIFwicChcIiArIHRoaXMuZW5jb2RlQ29vcmRpbmF0ZXNfKGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCAwLCBlbmQpICsgXCIpXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JpdGVNdWx0aVBvaW50R2VvbWV0cnlfKGdlb21ldHJ5KSB7XG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbU11bHRpUG9pbnQpIHtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICAgIHZhciBlbmQgPSBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIHJldHVybiBcIlAoXCIgKyB0aGlzLmVuY29kZUNvb3JkaW5hdGVzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgMCwgZW5kKSArIFwiKVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZVJpbmdzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgb2Zmc2V0LCBlbmRzLCB0ZXh0QXJyYXkpIHtcbiAgdmFyIGxpbmVhclJpbmdDb3VudCA9IGVuZHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZWFyUmluZ0NvdW50OyArK2kpIHtcbiAgICB2YXIgZW5kID0gZW5kc1tpXSAtIHN0cmlkZTtcbiAgICB2YXIgdGV4dCA9IHRoaXMuZW5jb2RlQ29vcmRpbmF0ZXNfKGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCBvZmZzZXQsIGVuZCk7XG5cbiAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgdGV4dEFycmF5LnB1c2goJ1xcJycpO1xuICAgIH1cblxuICAgIHRleHRBcnJheS5wdXNoKHRleHQpO1xuICAgIG9mZnNldCA9IGVuZHNbaV07XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiB3cml0ZVBvbHlnb25HZW9tZXRyeV8oZ2VvbWV0cnkpIHtcbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tUG9seWdvbikge1xuICAgIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgc3RyaWRlID0gZ2VvbWV0cnkuZ2V0U3RyaWRlKCk7XG4gICAgdmFyIGVuZHMgPSBnZW9tZXRyeS5nZXRFbmRzKCk7XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgdmFyIHRleHRBcnJheSA9IFsnYSgnXTtcbiAgICBlbmNvZGVSaW5nc18uY2FsbCh0aGlzLCBmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgb2Zmc2V0LCBlbmRzLCB0ZXh0QXJyYXkpO1xuICAgIHRleHRBcnJheS5wdXNoKCcpJyk7XG4gICAgcmV0dXJuIHRleHRBcnJheS5qb2luKCcnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cml0ZU11bHRpUG9seWdvbkdlb21ldHJ5XyhnZW9tZXRyeSkge1xuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21NdWx0aVBvbHlnb24pIHtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICAgIHZhciBlbmRzcyA9IGdlb21ldHJ5LmdldEVuZHNzKCk7XG4gICAgdmFyIHBvbHlnb25Db3VudCA9IGVuZHNzLmxlbmd0aDtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB2YXIgdGV4dEFycmF5ID0gWydBJ107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvbHlnb25Db3VudDsgKytpKSB7XG4gICAgICB2YXIgZW5kcyA9IGVuZHNzW2ldO1xuICAgICAgdGV4dEFycmF5LnB1c2goJygnKTtcbiAgICAgIG9mZnNldCA9IGVuY29kZVJpbmdzXy5jYWxsKHRoaXMsIGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCBvZmZzZXQsIGVuZHMsIHRleHRBcnJheSk7XG4gICAgICB0ZXh0QXJyYXkucHVzaCgnKScpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0QXJyYXkuam9pbignJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5hc3NlcnQoJ1dyb25nIGdlb21ldHJ5IHR5cGUnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTElORV9TVFJJTkc6ICdMaW5lU3RyaW5nJyxcbiAgUE9JTlQ6ICdQb2ludCcsXG4gIFBPTFlHT046ICdQb2x5Z29uJ1xufTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3J4QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==