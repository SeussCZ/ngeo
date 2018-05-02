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
/******/ 		"desktopgeolocation": 0
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
/******/ 	deferredModules.push([11,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/desktopgeolocation.css":
/*!*****************************************!*\
  !*** ./examples/desktopgeolocation.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/desktopgeolocation.js":
/*!****************************************!*\
  !*** ./examples/desktopgeolocation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _desktopgeolocation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktopgeolocation.css */ "./examples/desktopgeolocation.css");
/* harmony import */ var _desktopgeolocation_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_desktopgeolocation_css__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var ngeo_geolocation_desktop_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/geolocation/desktop.js */ "./src/geolocation/desktop.js");
MainController.$inject = ["$scope", "ngeoFeatureOverlayMgr"];












var module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_geolocation_desktop_js__WEBPACK_IMPORTED_MODULE_11__["default"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_10__["default"].name]);

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
  this.desktopGeolocationOptions = {
    positionFeatureStyle: positionFeatureStyle,
    accuracyFeatureStyle: accuracyFeatureStyle,
    zoom: 17
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

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/geolocation/desktop.js":
/*!************************************!*\
  !*** ./src/geolocation/desktop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr.js */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_message_Notification_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/Notification.js */ "./src/message/Notification.js");
/* harmony import */ var ol_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/events.js */ "./node_modules/ol/events.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_Geolocation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Geolocation.js */ "./node_modules/ol/Geolocation.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
Controller.$inject = ["$scope", "$element", "ngeoFeatureOverlayMgr", "ngeoNotification"];








var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoDesktopGeolocation', [ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_message_Notification_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
var GeolocationEventType = {
  ERROR: 'desktop-geolocation-error'
};

function GeolocationDesktopComponent() {
  return {
    restrict: 'A',
    scope: {
      'getDesktopMapFn': '&ngeoDesktopGeolocationMap',
      'getDesktopGeolocationOptionsFn': '&ngeoDesktopGeolocationOptions'
    },
    controller: 'ngeoGeolocationDesktopController'
  };
}

module.directive('ngeoDesktopGeolocation', GeolocationDesktopComponent);

function Controller($scope, $element, ngeoFeatureOverlayMgr, ngeoNotification) {
  var _this = this;

  $element.on('click', this.toggle.bind(this));
  var map = $scope['getDesktopMapFn']();
  console.assert(map instanceof ol_Map_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  this.map_ = map;
  var options = $scope['getDesktopGeolocationOptionsFn']() || {};
  console.assert(options);
  this.$scope_ = $scope;
  this.notification_ = ngeoNotification;
  this.featureOverlay_ = ngeoFeatureOverlayMgr.getFeatureOverlay();
  this.geolocation_ = new ol_Geolocation_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
    projection: map.getView().getProjection()
  });
  this.geolocation_.on('error', function (error) {
    _this.deactivate_();

    _this.notification_.error(error.message);

    $scope.$emit(GeolocationEventType.ERROR, error);
  });
  this.positionFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

  if (options.positionFeatureStyle) {
    this.positionFeature_.setStyle(options.positionFeatureStyle);
  }

  this.accuracyFeature_ = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

  if (options.accuracyFeatureStyle) {
    this.accuracyFeature_.setStyle(options.accuracyFeatureStyle);
  }

  this.zoom_ = options.zoom;
  this.active_ = false;
  ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](this.geolocation_, 'change:accuracyGeometry', function () {
    _this.accuracyFeature_.setGeometry(_this.geolocation_.getAccuracyGeometry());
  });
  ol_events_js__WEBPACK_IMPORTED_MODULE_3__["listen"](this.geolocation_, 'change:position', function (evt) {
    var event = evt;

    _this.setPosition_(event);
  });
}

Controller.prototype.toggle = function () {
  if (this.active_) {
    this.deactivate_();
  } else {
    this.activate_();
  }
};

Controller.prototype.activate_ = function () {
  this.featureOverlay_.addFeature(this.positionFeature_);
  this.featureOverlay_.addFeature(this.accuracyFeature_);
  this.geolocation_.setTracking(true);
  this.active_ = true;
};

Controller.prototype.deactivate_ = function () {
  this.featureOverlay_.clear();
  this.active_ = false;
  this.notification_.clear();
};

Controller.prototype.setPosition_ = function (event) {
  var position = this.geolocation_.getPosition();
  var point = new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](position);
  this.positionFeature_.setGeometry(point);
  this.map_.getView().setCenter(position);

  if (this.zoom_ !== undefined) {
    this.map_.getView().setZoom(this.zoom_);
  }

  this.geolocation_.setTracking(false);
};

module.controller('ngeoGeolocationDesktopController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 11:
/*!***************************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/desktopgeolocation.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/desktopgeolocation.js */"./examples/desktopgeolocation.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcGdlb2xvY2F0aW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2Rlc2t0b3BnZW9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbG9jYXRpb24vZGVza3RvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImRlc2t0b3BnZW9sb2NhdGlvblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsxMSxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwibmdlb0ZlYXR1cmVPdmVybGF5TWdyXCJdO1xuaW1wb3J0ICcuL2Rlc2t0b3BnZW9sb2NhdGlvbi5jc3MnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG5pbXBvcnQgb2xTdHlsZUNpcmNsZSBmcm9tICdvbC9zdHlsZS9DaXJjbGUuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZS5qcyc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbC5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UuanMnO1xuaW1wb3J0IG5nZW9NYXBNb2R1bGUgZnJvbSAnbmdlby9tYXAvbW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvR2VvbG9jYXRpb25EZXNrdG9wIGZyb20gJ25nZW8vZ2VvbG9jYXRpb24vZGVza3RvcC5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9HZW9sb2NhdGlvbkRlc2t0b3AubmFtZSwgbmdlb01hcE1vZHVsZS5uYW1lXSk7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRzY29wZSwgbmdlb0ZlYXR1cmVPdmVybGF5TWdyKSB7XG4gIHZhciBwb3NpdGlvbkZlYXR1cmVTdHlsZSA9IG5ldyBvbFN0eWxlU3R5bGUoe1xuICAgIGltYWdlOiBuZXcgb2xTdHlsZUNpcmNsZSh7XG4gICAgICByYWRpdXM6IDYsXG4gICAgICBmaWxsOiBuZXcgb2xTdHlsZUZpbGwoe1xuICAgICAgICBjb2xvcjogJ3JnYmEoMjMwLCAxMDAsIDEwMCwgMSknXG4gICAgICB9KSxcbiAgICAgIHN0cm9rZTogbmV3IG9sU3R5bGVTdHJva2Uoe1xuICAgICAgICBjb2xvcjogJ3JnYmEoMjMwLCA0MCwgNDAsIDEpJyxcbiAgICAgICAgd2lkdGg6IDJcbiAgICAgIH0pXG4gICAgfSlcbiAgfSk7XG4gIHZhciBhY2N1cmFjeUZlYXR1cmVTdHlsZSA9IG5ldyBvbFN0eWxlU3R5bGUoe1xuICAgIGZpbGw6IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICBjb2xvcjogJ3JnYmEoMTAwLCAxMDAsIDIzMCwgMC4zKSdcbiAgICB9KSxcbiAgICBzdHJva2U6IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgIGNvbG9yOiAncmdiYSg0MCwgNDAsIDIzMCwgMSknLFxuICAgICAgd2lkdGg6IDJcbiAgICB9KVxuICB9KTtcbiAgdGhpcy5kZXNrdG9wR2VvbG9jYXRpb25PcHRpb25zID0ge1xuICAgIHBvc2l0aW9uRmVhdHVyZVN0eWxlOiBwb3NpdGlvbkZlYXR1cmVTdHlsZSxcbiAgICBhY2N1cmFjeUZlYXR1cmVTdHlsZTogYWNjdXJhY3lGZWF0dXJlU3R5bGUsXG4gICAgem9vbTogMTdcbiAgfTtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldLFxuICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgY2VudGVyOiBbMCwgMF0sXG4gICAgICB6b29tOiA0XG4gICAgfSlcbiAgfSk7XG4gIG5nZW9GZWF0dXJlT3ZlcmxheU1nci5pbml0KHRoaXMubWFwKTtcbn1cblxubW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIiRlbGVtZW50XCIsIFwibmdlb0ZlYXR1cmVPdmVybGF5TWdyXCIsIFwibmdlb05vdGlmaWNhdGlvblwiXTtcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9NYXBGZWF0dXJlT3ZlcmxheU1nciBmcm9tICduZ2VvL21hcC9GZWF0dXJlT3ZlcmxheU1nci5qcyc7XG5pbXBvcnQgbmdlb01lc3NhZ2VOb3RpZmljYXRpb24gZnJvbSAnbmdlby9tZXNzYWdlL05vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgKiBhcyBvbEV2ZW50cyBmcm9tICdvbC9ldmVudHMuanMnO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlLmpzJztcbmltcG9ydCBvbEdlb2xvY2F0aW9uIGZyb20gJ29sL0dlb2xvY2F0aW9uLmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IG9sR2VvbVBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvRGVza3RvcEdlb2xvY2F0aW9uJywgW25nZW9NYXBGZWF0dXJlT3ZlcmxheU1nci5uYW1lLCBuZ2VvTWVzc2FnZU5vdGlmaWNhdGlvbi5uYW1lXSk7XG52YXIgR2VvbG9jYXRpb25FdmVudFR5cGUgPSB7XG4gIEVSUk9SOiAnZGVza3RvcC1nZW9sb2NhdGlvbi1lcnJvcidcbn07XG5cbmZ1bmN0aW9uIEdlb2xvY2F0aW9uRGVza3RvcENvbXBvbmVudCgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7XG4gICAgICAnZ2V0RGVza3RvcE1hcEZuJzogJyZuZ2VvRGVza3RvcEdlb2xvY2F0aW9uTWFwJyxcbiAgICAgICdnZXREZXNrdG9wR2VvbG9jYXRpb25PcHRpb25zRm4nOiAnJm5nZW9EZXNrdG9wR2VvbG9jYXRpb25PcHRpb25zJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogJ25nZW9HZW9sb2NhdGlvbkRlc2t0b3BDb250cm9sbGVyJ1xuICB9O1xufVxuXG5tb2R1bGUuZGlyZWN0aXZlKCduZ2VvRGVza3RvcEdlb2xvY2F0aW9uJywgR2VvbG9jYXRpb25EZXNrdG9wQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gQ29udHJvbGxlcigkc2NvcGUsICRlbGVtZW50LCBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IsIG5nZW9Ob3RpZmljYXRpb24pIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICAkZWxlbWVudC5vbignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgdmFyIG1hcCA9ICRzY29wZVsnZ2V0RGVza3RvcE1hcEZuJ10oKTtcbiAgY29uc29sZS5hc3NlcnQobWFwIGluc3RhbmNlb2Ygb2xNYXApO1xuICB0aGlzLm1hcF8gPSBtYXA7XG4gIHZhciBvcHRpb25zID0gJHNjb3BlWydnZXREZXNrdG9wR2VvbG9jYXRpb25PcHRpb25zRm4nXSgpIHx8IHt9O1xuICBjb25zb2xlLmFzc2VydChvcHRpb25zKTtcbiAgdGhpcy4kc2NvcGVfID0gJHNjb3BlO1xuICB0aGlzLm5vdGlmaWNhdGlvbl8gPSBuZ2VvTm90aWZpY2F0aW9uO1xuICB0aGlzLmZlYXR1cmVPdmVybGF5XyA9IG5nZW9GZWF0dXJlT3ZlcmxheU1nci5nZXRGZWF0dXJlT3ZlcmxheSgpO1xuICB0aGlzLmdlb2xvY2F0aW9uXyA9IG5ldyBvbEdlb2xvY2F0aW9uKHtcbiAgICBwcm9qZWN0aW9uOiBtYXAuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKVxuICB9KTtcbiAgdGhpcy5nZW9sb2NhdGlvbl8ub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgX3RoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIF90aGlzLm5vdGlmaWNhdGlvbl8uZXJyb3IoZXJyb3IubWVzc2FnZSk7XG5cbiAgICAkc2NvcGUuJGVtaXQoR2VvbG9jYXRpb25FdmVudFR5cGUuRVJST1IsIGVycm9yKTtcbiAgfSk7XG4gIHRoaXMucG9zaXRpb25GZWF0dXJlXyA9IG5ldyBvbEZlYXR1cmUoKTtcblxuICBpZiAob3B0aW9ucy5wb3NpdGlvbkZlYXR1cmVTdHlsZSkge1xuICAgIHRoaXMucG9zaXRpb25GZWF0dXJlXy5zZXRTdHlsZShvcHRpb25zLnBvc2l0aW9uRmVhdHVyZVN0eWxlKTtcbiAgfVxuXG4gIHRoaXMuYWNjdXJhY3lGZWF0dXJlXyA9IG5ldyBvbEZlYXR1cmUoKTtcblxuICBpZiAob3B0aW9ucy5hY2N1cmFjeUZlYXR1cmVTdHlsZSkge1xuICAgIHRoaXMuYWNjdXJhY3lGZWF0dXJlXy5zZXRTdHlsZShvcHRpb25zLmFjY3VyYWN5RmVhdHVyZVN0eWxlKTtcbiAgfVxuXG4gIHRoaXMuem9vbV8gPSBvcHRpb25zLnpvb207XG4gIHRoaXMuYWN0aXZlXyA9IGZhbHNlO1xuICBvbEV2ZW50cy5saXN0ZW4odGhpcy5nZW9sb2NhdGlvbl8sICdjaGFuZ2U6YWNjdXJhY3lHZW9tZXRyeScsIGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpcy5hY2N1cmFjeUZlYXR1cmVfLnNldEdlb21ldHJ5KF90aGlzLmdlb2xvY2F0aW9uXy5nZXRBY2N1cmFjeUdlb21ldHJ5KCkpO1xuICB9KTtcbiAgb2xFdmVudHMubGlzdGVuKHRoaXMuZ2VvbG9jYXRpb25fLCAnY2hhbmdlOnBvc2l0aW9uJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIHZhciBldmVudCA9IGV2dDtcblxuICAgIF90aGlzLnNldFBvc2l0aW9uXyhldmVudCk7XG4gIH0pO1xufVxuXG5Db250cm9sbGVyLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZV8pIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oKTtcbiAgfVxufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuYWN0aXZhdGVfID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZlYXR1cmVPdmVybGF5Xy5hZGRGZWF0dXJlKHRoaXMucG9zaXRpb25GZWF0dXJlXyk7XG4gIHRoaXMuZmVhdHVyZU92ZXJsYXlfLmFkZEZlYXR1cmUodGhpcy5hY2N1cmFjeUZlYXR1cmVfKTtcbiAgdGhpcy5nZW9sb2NhdGlvbl8uc2V0VHJhY2tpbmcodHJ1ZSk7XG4gIHRoaXMuYWN0aXZlXyA9IHRydWU7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mZWF0dXJlT3ZlcmxheV8uY2xlYXIoKTtcbiAgdGhpcy5hY3RpdmVfID0gZmFsc2U7XG4gIHRoaXMubm90aWZpY2F0aW9uXy5jbGVhcigpO1xufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuc2V0UG9zaXRpb25fID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBwb3NpdGlvbiA9IHRoaXMuZ2VvbG9jYXRpb25fLmdldFBvc2l0aW9uKCk7XG4gIHZhciBwb2ludCA9IG5ldyBvbEdlb21Qb2ludChwb3NpdGlvbik7XG4gIHRoaXMucG9zaXRpb25GZWF0dXJlXy5zZXRHZW9tZXRyeShwb2ludCk7XG4gIHRoaXMubWFwXy5nZXRWaWV3KCkuc2V0Q2VudGVyKHBvc2l0aW9uKTtcblxuICBpZiAodGhpcy56b29tXyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5tYXBfLmdldFZpZXcoKS5zZXRab29tKHRoaXMuem9vbV8pO1xuICB9XG5cbiAgdGhpcy5nZW9sb2NhdGlvbl8uc2V0VHJhY2tpbmcoZmFsc2UpO1xufTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ25nZW9HZW9sb2NhdGlvbkRlc2t0b3BDb250cm9sbGVyJywgQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=