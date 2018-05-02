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
/******/ 		"mobilegeolocation": 0
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
/******/ 	deferredModules.push([26,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/mobilegeolocation.css":
/*!****************************************!*\
  !*** ./examples/mobilegeolocation.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/mobilegeolocation.js":
/*!***************************************!*\
  !*** ./examples/mobilegeolocation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobilegeolocation.css */ "./examples/mobilegeolocation.css");
/* harmony import */ var _mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mobilegeolocation_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_geolocation_mobile_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/geolocation/mobile.js */ "./src/geolocation/mobile.js");
MainController.$inject = ["$scope", "ngeoFeatureOverlayMgr"];












var appmodule = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_geolocation_mobile_js__WEBPACK_IMPORTED_MODULE_11__["default"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_10__["default"].name]);

function MainController($scope, ngeoFeatureOverlayMgr) {
  var positionFeatureStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
      radius: 6,
      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        color: 'rgba(230, 100, 100, 1)'
      }),
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
        color: 'rgba(230, 40, 40, 1)',
        width: 2
      })
    })
  });
  var accuracyFeatureStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      color: 'rgba(100, 100, 230, 0.3)'
    }),
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      color: 'rgba(40, 40, 230, 1)',
      width: 2
    })
  });
  this.mobileGeolocationOptions = {
    positionFeatureStyle: positionFeatureStyle,
    accuracyFeatureStyle: accuracyFeatureStyle,
    zoom: 17,
    autorotate: true
  };
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      center: [0, 0],
      zoom: 4
    })
  });
  ngeoFeatureOverlayMgr.init(this.map);
}

appmodule.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/geolocation/mobile.js":
/*!***********************************!*\
  !*** ./src/geolocation/mobile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr.js */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_message_Notification_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/Notification.js */ "./src/message/Notification.js");
/* harmony import */ var ol_easing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/easing.js */ "./node_modules/ol/easing.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_Geolocation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Geolocation.js */ "./node_modules/ol/Geolocation.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
Controller.$inject = ["$scope", "$element", "gettextCatalog", "ngeoFeatureOverlayMgr", "ngeoNotification"];









var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoMobileGeolocation', [ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_message_Notification_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
var GeolocationEventType = {
  ERROR: 'mobile-geolocation-error'
};

function geolocationMobileComponent() {
  return {
    restrict: 'A',
    scope: {
      'getMobileMapFn': '&ngeoMobileGeolocationMap',
      'getMobileGeolocationOptionsFn': '&ngeoMobileGeolocationOptions'
    },
    controller: 'ngeoGeolocationMobileController'
  };
}

module.directive('ngeoMobileGeolocation', geolocationMobileComponent);

function Controller($scope, $element, gettextCatalog, ngeoFeatureOverlayMgr, ngeoNotification) {
  var _this = this;

  $element.on('click', this.toggleTracking.bind(this));
  var map = $scope['getMobileMapFn']();
  console.assert(map instanceof ol_Map_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
  this.$scope_ = $scope;
  this.map_ = map;
  var options = $scope['getMobileGeolocationOptionsFn']() || {};
  console.assert(options);
  this.notification_ = ngeoNotification;
  this.featureOverlay_ = ngeoFeatureOverlayMgr.getFeatureOverlay();
  this.geolocation_ = new ol_Geolocation_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    projection: map.getView().getProjection(),
    trackingOptions: {
      enableHighAccuracy: true
    }
  });

  if (options.autorotate) {
    this.autorotateListener();
  }

  this.geolocation_.on('error', function (error) {
    _this.untrack_();

    var msg;

    switch (error.code) {
      case 1:
        msg = gettextCatalog.getString('User denied the request for Geolocation.');
        break;

      case 2:
        msg = gettextCatalog.getString('Location information is unavailable.');
        break;

      case 3:
        msg = gettextCatalog.getString('The request to get user location timed out.');
        break;

      default:
        msg = gettextCatalog.getString('Geolocation: An unknown error occurred.');
        break;
    }

    _this.notification_.error(msg);

    $scope.$emit(GeolocationEventType.ERROR, error);
  });
  this.positionFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

  if (options.positionFeatureStyle) {
    this.positionFeature_.setStyle(options.positionFeatureStyle);
  }

  this.accuracyFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

  if (options.accuracyFeatureStyle) {
    this.accuracyFeature_.setStyle(options.accuracyFeatureStyle);
  }

  this.zoom_ = options.zoom;
  this.follow_ = false;
  this.viewChangedByMe_ = false;
  ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"](this.geolocation_, 'change:accuracyGeometry', function () {
    _this.accuracyFeature_.setGeometry(_this.geolocation_.getAccuracyGeometry());

    _this.setPosition_();
  });
  ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"](this.geolocation_, 'change:position', function () {
    _this.setPosition_();
  });
  var view = map.getView();
  ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"](view, 'change:center', this.handleViewChange_, this);
  ol_events_js__WEBPACK_IMPORTED_MODULE_4__["listen"](view, 'change:resolution', this.handleViewChange_, this);
}

Controller.prototype.toggleTracking = function () {
  if (this.geolocation_.getTracking()) {
    var currentPosition = this.geolocation_.getPosition();

    if (currentPosition === undefined) {
      this.untrack_();
      this.$scope_.$emit(GeolocationEventType.ERROR, null);
      return;
    }

    console.assert(currentPosition !== undefined);
    var center = this.map_.getView().getCenter();
    var diff = Math.abs(currentPosition[0] - center[0]) + Math.abs(currentPosition[1] - center[1]);

    if (diff < 2) {
      this.untrack_();
    } else {
      this.untrack_();
      this.track_();
    }
  } else {
    this.track_();
  }
};

Controller.prototype.track_ = function () {
  this.featureOverlay_.addFeature(this.positionFeature_);
  this.featureOverlay_.addFeature(this.accuracyFeature_);
  this.follow_ = true;
  this.geolocation_.setTracking(true);
};

Controller.prototype.untrack_ = function () {
  this.featureOverlay_.clear();
  this.follow_ = false;
  this.geolocation_.setTracking(false);
  this.notification_.clear();
};

Controller.prototype.setPosition_ = function () {
  var position = this.geolocation_.getPosition();
  var point = new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"](position);
  this.positionFeature_.setGeometry(point);
  var accuracy = this.accuracyFeature_.getGeometry();

  if (this.follow_) {
    this.viewChangedByMe_ = true;

    if (this.zoom_ !== undefined) {
      this.map_.getView().setCenter(position);
      this.map_.getView().setZoom(this.zoom_);
    } else if (accuracy) {
      var size = this.map_.getSize();
      this.map_.getView().fit(accuracy, {
        size: size
      });
    }

    this.viewChangedByMe_ = false;
  }
};

Controller.prototype.handleViewChange_ = function (event) {
  if (this.follow_ && !this.viewChangedByMe_) {
    this.follow_ = false;
  }
};

Controller.prototype.autorotateListener = function () {
  var _this2 = this;

  var currentAlpha = 0;

  if (window.hasOwnProperty('ondeviceorientationabsolute')) {
    window.addEventListener('deviceorientationabsolute', function (evt) {
      var event = evt;
      currentAlpha = _this2.handleRotate_(event.alpha, currentAlpha);
    }, true);
  } else if (window.hasOwnProperty('ondeviceorientation')) {
    window.addEventListener('deviceorientation', function (evt) {
      if (evt.webkitCompassHeading) {
        currentAlpha = _this2.handleRotate_(-evt.webkitCompassHeading, currentAlpha);
      } else {
        currentAlpha = _this2.handleRotate_(evt.alpha - 270, currentAlpha);
      }
    }, true);
  } else {
    console.error('Orientation is not supported on this device');
  }
};

Controller.prototype.handleRotate_ = function (eventAlpha, currentAlpha) {
  if (this.geolocation_.getTracking() && Math.abs(eventAlpha - currentAlpha) > 0.2) {
    currentAlpha = eventAlpha;
    var radAlpha = currentAlpha * Math.PI / 180;
    this.map_.getView().animate({
      rotation: radAlpha,
      duration: 350,
      easing: ol_easing_js__WEBPACK_IMPORTED_MODULE_3__["linear"]
    });
  }

  return currentAlpha;
};

module.controller('ngeoGeolocationMobileController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 26:
/*!**************************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/mobilegeolocation.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/mobilegeolocation.js */"./examples/mobilegeolocation.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlZ2VvbG9jYXRpb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvbW9iaWxlZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb2xvY2F0aW9uL21vYmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1vYmlsZWdlb2xvY2F0aW9uXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzI2LFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIk1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIiwgXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIl07XG5pbXBvcnQgJy4vbW9iaWxlZ2VvbG9jYXRpb24uY3NzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcuanMnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IG9sU3R5bGVDaXJjbGUgZnJvbSAnb2wvc3R5bGUvQ2lyY2xlLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xuaW1wb3J0IG9sU3R5bGVGaWxsIGZyb20gJ29sL3N0eWxlL0ZpbGwuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlLmpzJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb0dlb2xvY2F0aW9uTW9iaWxlIGZyb20gJ25nZW8vZ2VvbG9jYXRpb24vbW9iaWxlLmpzJztcbnZhciBhcHBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWydnZXR0ZXh0Jywgbmdlb0dlb2xvY2F0aW9uTW9iaWxlLm5hbWUsIG5nZW9NYXBNb2R1bGUubmFtZV0pO1xuXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcigkc2NvcGUsIG5nZW9GZWF0dXJlT3ZlcmxheU1ncikge1xuICB2YXIgcG9zaXRpb25GZWF0dXJlU3R5bGUgPSBuZXcgb2xTdHlsZVN0eWxlKHtcbiAgICBpbWFnZTogbmV3IG9sU3R5bGVDaXJjbGUoe1xuICAgICAgcmFkaXVzOiA2LFxuICAgICAgZmlsbDogbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgICAgY29sb3I6ICdyZ2JhKDIzMCwgMTAwLCAxMDAsIDEpJ1xuICAgICAgfSksXG4gICAgICBzdHJva2U6IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgICAgY29sb3I6ICdyZ2JhKDIzMCwgNDAsIDQwLCAxKScsXG4gICAgICAgIHdpZHRoOiAyXG4gICAgICB9KVxuICAgIH0pXG4gIH0pO1xuICB2YXIgYWNjdXJhY3lGZWF0dXJlU3R5bGUgPSBuZXcgb2xTdHlsZVN0eWxlKHtcbiAgICBmaWxsOiBuZXcgb2xTdHlsZUZpbGwoe1xuICAgICAgY29sb3I6ICdyZ2JhKDEwMCwgMTAwLCAyMzAsIDAuMyknXG4gICAgfSksXG4gICAgc3Ryb2tlOiBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICBjb2xvcjogJ3JnYmEoNDAsIDQwLCAyMzAsIDEpJyxcbiAgICAgIHdpZHRoOiAyXG4gICAgfSlcbiAgfSk7XG4gIHRoaXMubW9iaWxlR2VvbG9jYXRpb25PcHRpb25zID0ge1xuICAgIHBvc2l0aW9uRmVhdHVyZVN0eWxlOiBwb3NpdGlvbkZlYXR1cmVTdHlsZSxcbiAgICBhY2N1cmFjeUZlYXR1cmVTdHlsZTogYWNjdXJhY3lGZWF0dXJlU3R5bGUsXG4gICAgem9vbTogMTcsXG4gICAgYXV0b3JvdGF0ZTogdHJ1ZVxuICB9O1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKClcbiAgICB9KV0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgIHpvb206IDRcbiAgICB9KVxuICB9KTtcbiAgbmdlb0ZlYXR1cmVPdmVybGF5TWdyLmluaXQodGhpcy5tYXApO1xufVxuXG5hcHBtb2R1bGUuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwiJGVsZW1lbnRcIiwgXCJnZXR0ZXh0Q2F0YWxvZ1wiLCBcIm5nZW9GZWF0dXJlT3ZlcmxheU1nclwiLCBcIm5nZW9Ob3RpZmljYXRpb25cIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IgZnJvbSAnbmdlby9tYXAvRmVhdHVyZU92ZXJsYXlNZ3IuanMnO1xuaW1wb3J0IG5nZW9NZXNzYWdlTm90aWZpY2F0aW9uIGZyb20gJ25nZW8vbWVzc2FnZS9Ob3RpZmljYXRpb24uanMnO1xuaW1wb3J0ICogYXMgb2xFYXNpbmcgZnJvbSAnb2wvZWFzaW5nLmpzJztcbmltcG9ydCAqIGFzIG9sRXZlbnRzIGZyb20gJ29sL2V2ZW50cy5qcyc7XG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUuanMnO1xuaW1wb3J0IG9sR2VvbG9jYXRpb24gZnJvbSAnb2wvR2VvbG9jYXRpb24uanMnO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgb2xHZW9tUG9pbnQgZnJvbSAnb2wvZ2VvbS9Qb2ludC5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9Nb2JpbGVHZW9sb2NhdGlvbicsIFtuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IubmFtZSwgbmdlb01lc3NhZ2VOb3RpZmljYXRpb24ubmFtZV0pO1xudmFyIEdlb2xvY2F0aW9uRXZlbnRUeXBlID0ge1xuICBFUlJPUjogJ21vYmlsZS1nZW9sb2NhdGlvbi1lcnJvcidcbn07XG5cbmZ1bmN0aW9uIGdlb2xvY2F0aW9uTW9iaWxlQ29tcG9uZW50KCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHtcbiAgICAgICdnZXRNb2JpbGVNYXBGbic6ICcmbmdlb01vYmlsZUdlb2xvY2F0aW9uTWFwJyxcbiAgICAgICdnZXRNb2JpbGVHZW9sb2NhdGlvbk9wdGlvbnNGbic6ICcmbmdlb01vYmlsZUdlb2xvY2F0aW9uT3B0aW9ucydcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6ICduZ2VvR2VvbG9jYXRpb25Nb2JpbGVDb250cm9sbGVyJ1xuICB9O1xufVxuXG5tb2R1bGUuZGlyZWN0aXZlKCduZ2VvTW9iaWxlR2VvbG9jYXRpb24nLCBnZW9sb2NhdGlvbk1vYmlsZUNvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoJHNjb3BlLCAkZWxlbWVudCwgZ2V0dGV4dENhdGFsb2csIG5nZW9GZWF0dXJlT3ZlcmxheU1nciwgbmdlb05vdGlmaWNhdGlvbikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICRlbGVtZW50Lm9uKCdjbGljaycsIHRoaXMudG9nZ2xlVHJhY2tpbmcuYmluZCh0aGlzKSk7XG4gIHZhciBtYXAgPSAkc2NvcGVbJ2dldE1vYmlsZU1hcEZuJ10oKTtcbiAgY29uc29sZS5hc3NlcnQobWFwIGluc3RhbmNlb2Ygb2xNYXApO1xuICB0aGlzLiRzY29wZV8gPSAkc2NvcGU7XG4gIHRoaXMubWFwXyA9IG1hcDtcbiAgdmFyIG9wdGlvbnMgPSAkc2NvcGVbJ2dldE1vYmlsZUdlb2xvY2F0aW9uT3B0aW9uc0ZuJ10oKSB8fCB7fTtcbiAgY29uc29sZS5hc3NlcnQob3B0aW9ucyk7XG4gIHRoaXMubm90aWZpY2F0aW9uXyA9IG5nZW9Ob3RpZmljYXRpb247XG4gIHRoaXMuZmVhdHVyZU92ZXJsYXlfID0gbmdlb0ZlYXR1cmVPdmVybGF5TWdyLmdldEZlYXR1cmVPdmVybGF5KCk7XG4gIHRoaXMuZ2VvbG9jYXRpb25fID0gbmV3IG9sR2VvbG9jYXRpb24oe1xuICAgIHByb2plY3Rpb246IG1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpLFxuICAgIHRyYWNraW5nT3B0aW9uczoge1xuICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBpZiAob3B0aW9ucy5hdXRvcm90YXRlKSB7XG4gICAgdGhpcy5hdXRvcm90YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHRoaXMuZ2VvbG9jYXRpb25fLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIF90aGlzLnVudHJhY2tfKCk7XG5cbiAgICB2YXIgbXNnO1xuXG4gICAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIG1zZyA9IGdldHRleHRDYXRhbG9nLmdldFN0cmluZygnVXNlciBkZW5pZWQgdGhlIHJlcXVlc3QgZm9yIEdlb2xvY2F0aW9uLicpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBtc2cgPSBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoJ0xvY2F0aW9uIGluZm9ybWF0aW9uIGlzIHVuYXZhaWxhYmxlLicpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICBtc2cgPSBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoJ1RoZSByZXF1ZXN0IHRvIGdldCB1c2VyIGxvY2F0aW9uIHRpbWVkIG91dC4nKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1zZyA9IGdldHRleHRDYXRhbG9nLmdldFN0cmluZygnR2VvbG9jYXRpb246IEFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIF90aGlzLm5vdGlmaWNhdGlvbl8uZXJyb3IobXNnKTtcblxuICAgICRzY29wZS4kZW1pdChHZW9sb2NhdGlvbkV2ZW50VHlwZS5FUlJPUiwgZXJyb3IpO1xuICB9KTtcbiAgdGhpcy5wb3NpdGlvbkZlYXR1cmVfID0gbmV3IG9sRmVhdHVyZSgpO1xuXG4gIGlmIChvcHRpb25zLnBvc2l0aW9uRmVhdHVyZVN0eWxlKSB7XG4gICAgdGhpcy5wb3NpdGlvbkZlYXR1cmVfLnNldFN0eWxlKG9wdGlvbnMucG9zaXRpb25GZWF0dXJlU3R5bGUpO1xuICB9XG5cbiAgdGhpcy5hY2N1cmFjeUZlYXR1cmVfID0gbmV3IG9sRmVhdHVyZSgpO1xuXG4gIGlmIChvcHRpb25zLmFjY3VyYWN5RmVhdHVyZVN0eWxlKSB7XG4gICAgdGhpcy5hY2N1cmFjeUZlYXR1cmVfLnNldFN0eWxlKG9wdGlvbnMuYWNjdXJhY3lGZWF0dXJlU3R5bGUpO1xuICB9XG5cbiAgdGhpcy56b29tXyA9IG9wdGlvbnMuem9vbTtcbiAgdGhpcy5mb2xsb3dfID0gZmFsc2U7XG4gIHRoaXMudmlld0NoYW5nZWRCeU1lXyA9IGZhbHNlO1xuICBvbEV2ZW50cy5saXN0ZW4odGhpcy5nZW9sb2NhdGlvbl8sICdjaGFuZ2U6YWNjdXJhY3lHZW9tZXRyeScsIGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpcy5hY2N1cmFjeUZlYXR1cmVfLnNldEdlb21ldHJ5KF90aGlzLmdlb2xvY2F0aW9uXy5nZXRBY2N1cmFjeUdlb21ldHJ5KCkpO1xuXG4gICAgX3RoaXMuc2V0UG9zaXRpb25fKCk7XG4gIH0pO1xuICBvbEV2ZW50cy5saXN0ZW4odGhpcy5nZW9sb2NhdGlvbl8sICdjaGFuZ2U6cG9zaXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMuc2V0UG9zaXRpb25fKCk7XG4gIH0pO1xuICB2YXIgdmlldyA9IG1hcC5nZXRWaWV3KCk7XG4gIG9sRXZlbnRzLmxpc3Rlbih2aWV3LCAnY2hhbmdlOmNlbnRlcicsIHRoaXMuaGFuZGxlVmlld0NoYW5nZV8sIHRoaXMpO1xuICBvbEV2ZW50cy5saXN0ZW4odmlldywgJ2NoYW5nZTpyZXNvbHV0aW9uJywgdGhpcy5oYW5kbGVWaWV3Q2hhbmdlXywgdGhpcyk7XG59XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLnRvZ2dsZVRyYWNraW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5nZW9sb2NhdGlvbl8uZ2V0VHJhY2tpbmcoKSkge1xuICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSB0aGlzLmdlb2xvY2F0aW9uXy5nZXRQb3NpdGlvbigpO1xuXG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVudHJhY2tfKCk7XG4gICAgICB0aGlzLiRzY29wZV8uJGVtaXQoR2VvbG9jYXRpb25FdmVudFR5cGUuRVJST1IsIG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUuYXNzZXJ0KGN1cnJlbnRQb3NpdGlvbiAhPT0gdW5kZWZpbmVkKTtcbiAgICB2YXIgY2VudGVyID0gdGhpcy5tYXBfLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICB2YXIgZGlmZiA9IE1hdGguYWJzKGN1cnJlbnRQb3NpdGlvblswXSAtIGNlbnRlclswXSkgKyBNYXRoLmFicyhjdXJyZW50UG9zaXRpb25bMV0gLSBjZW50ZXJbMV0pO1xuXG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICB0aGlzLnVudHJhY2tfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW50cmFja18oKTtcbiAgICAgIHRoaXMudHJhY2tfKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMudHJhY2tfKCk7XG4gIH1cbn07XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLnRyYWNrXyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mZWF0dXJlT3ZlcmxheV8uYWRkRmVhdHVyZSh0aGlzLnBvc2l0aW9uRmVhdHVyZV8pO1xuICB0aGlzLmZlYXR1cmVPdmVybGF5Xy5hZGRGZWF0dXJlKHRoaXMuYWNjdXJhY3lGZWF0dXJlXyk7XG4gIHRoaXMuZm9sbG93XyA9IHRydWU7XG4gIHRoaXMuZ2VvbG9jYXRpb25fLnNldFRyYWNraW5nKHRydWUpO1xufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUudW50cmFja18gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZmVhdHVyZU92ZXJsYXlfLmNsZWFyKCk7XG4gIHRoaXMuZm9sbG93XyA9IGZhbHNlO1xuICB0aGlzLmdlb2xvY2F0aW9uXy5zZXRUcmFja2luZyhmYWxzZSk7XG4gIHRoaXMubm90aWZpY2F0aW9uXy5jbGVhcigpO1xufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuc2V0UG9zaXRpb25fID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcG9zaXRpb24gPSB0aGlzLmdlb2xvY2F0aW9uXy5nZXRQb3NpdGlvbigpO1xuICB2YXIgcG9pbnQgPSBuZXcgb2xHZW9tUG9pbnQocG9zaXRpb24pO1xuICB0aGlzLnBvc2l0aW9uRmVhdHVyZV8uc2V0R2VvbWV0cnkocG9pbnQpO1xuICB2YXIgYWNjdXJhY3kgPSB0aGlzLmFjY3VyYWN5RmVhdHVyZV8uZ2V0R2VvbWV0cnkoKTtcblxuICBpZiAodGhpcy5mb2xsb3dfKSB7XG4gICAgdGhpcy52aWV3Q2hhbmdlZEJ5TWVfID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnpvb21fICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWFwXy5nZXRWaWV3KCkuc2V0Q2VudGVyKHBvc2l0aW9uKTtcbiAgICAgIHRoaXMubWFwXy5nZXRWaWV3KCkuc2V0Wm9vbSh0aGlzLnpvb21fKTtcbiAgICB9IGVsc2UgaWYgKGFjY3VyYWN5KSB7XG4gICAgICB2YXIgc2l6ZSA9IHRoaXMubWFwXy5nZXRTaXplKCk7XG4gICAgICB0aGlzLm1hcF8uZ2V0VmlldygpLmZpdChhY2N1cmFjeSwge1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnZpZXdDaGFuZ2VkQnlNZV8gPSBmYWxzZTtcbiAgfVxufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlVmlld0NoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHRoaXMuZm9sbG93XyAmJiAhdGhpcy52aWV3Q2hhbmdlZEJ5TWVfKSB7XG4gICAgdGhpcy5mb2xsb3dfID0gZmFsc2U7XG4gIH1cbn07XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLmF1dG9yb3RhdGVMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdmFyIGN1cnJlbnRBbHBoYSA9IDA7XG5cbiAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnb25kZXZpY2VvcmllbnRhdGlvbmFic29sdXRlJykpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb25hYnNvbHV0ZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBldmVudCA9IGV2dDtcbiAgICAgIGN1cnJlbnRBbHBoYSA9IF90aGlzMi5oYW5kbGVSb3RhdGVfKGV2ZW50LmFscGhhLCBjdXJyZW50QWxwaGEpO1xuICAgIH0sIHRydWUpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnb25kZXZpY2VvcmllbnRhdGlvbicpKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC53ZWJraXRDb21wYXNzSGVhZGluZykge1xuICAgICAgICBjdXJyZW50QWxwaGEgPSBfdGhpczIuaGFuZGxlUm90YXRlXygtZXZ0LndlYmtpdENvbXBhc3NIZWFkaW5nLCBjdXJyZW50QWxwaGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudEFscGhhID0gX3RoaXMyLmhhbmRsZVJvdGF0ZV8oZXZ0LmFscGhhIC0gMjcwLCBjdXJyZW50QWxwaGEpO1xuICAgICAgfVxuICAgIH0sIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ09yaWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBkZXZpY2UnKTtcbiAgfVxufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlUm90YXRlXyA9IGZ1bmN0aW9uIChldmVudEFscGhhLCBjdXJyZW50QWxwaGEpIHtcbiAgaWYgKHRoaXMuZ2VvbG9jYXRpb25fLmdldFRyYWNraW5nKCkgJiYgTWF0aC5hYnMoZXZlbnRBbHBoYSAtIGN1cnJlbnRBbHBoYSkgPiAwLjIpIHtcbiAgICBjdXJyZW50QWxwaGEgPSBldmVudEFscGhhO1xuICAgIHZhciByYWRBbHBoYSA9IGN1cnJlbnRBbHBoYSAqIE1hdGguUEkgLyAxODA7XG4gICAgdGhpcy5tYXBfLmdldFZpZXcoKS5hbmltYXRlKHtcbiAgICAgIHJvdGF0aW9uOiByYWRBbHBoYSxcbiAgICAgIGR1cmF0aW9uOiAzNTAsXG4gICAgICBlYXNpbmc6IG9sRWFzaW5nLmxpbmVhclxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRBbHBoYTtcbn07XG5cbm1vZHVsZS5jb250cm9sbGVyKCduZ2VvR2VvbG9jYXRpb25Nb2JpbGVDb250cm9sbGVyJywgQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=