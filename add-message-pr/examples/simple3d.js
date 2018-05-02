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
/******/ 		"simple3d": 0
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
/******/ 	deferredModules.push([40,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/simple3d.css":
/*!*******************************!*\
  !*** ./examples/simple3d.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/simple3d.js":
/*!******************************!*\
  !*** ./examples/simple3d.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple3d_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple3d.css */ "./examples/simple3d.css");
/* harmony import */ var _simple3d_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simple3d_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_olcs_olcsModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/olcs/olcsModule.js */ "./src/olcs/olcsModule.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_olcs_Manager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/olcs/Manager.js */ "./src/olcs/Manager.js");
MainController.$inject = ["$rootScope", "ngeoOlcsService"];









var module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_olcs_olcsModule_js__WEBPACK_IMPORTED_MODULE_6__["default"].name]);

function MainController($rootScope, ngeoOlcsService) {
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      center: [0, 0],
      zoom: 4
    })
  });
  var cesiumUrl = '../node_modules/@camptocamp/cesium/Build/Cesium/Cesium.js';
  this.ol3dm = new ngeo_olcs_Manager_js__WEBPACK_IMPORTED_MODULE_8__["default"](cesiumUrl, $rootScope, {
    map: this.map
  });
  ngeoOlcsService.initialize(this.ol3dm);
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./node_modules/ol/layer/VectorTile.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/layer/VectorTile.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(775);

/***/ }),

/***/ "./node_modules/ol/source/Cluster.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/ol/source/Cluster.js from dll-reference vendor ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(778);

/***/ }),

/***/ "./node_modules/ol/source/ImageStatic.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/ol/source/ImageStatic.js from dll-reference vendor ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(783);

/***/ }),

/***/ "./node_modules/ol/source/TileImage.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/ol/source/TileImage.js from dll-reference vendor ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(87);

/***/ }),

/***/ "./src/olcs/Manager.js":
/*!*****************************!*\
  !*** ./src/olcs/Manager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var olcs_contrib_Manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! olcs/contrib/Manager.js */ "./node_modules/ol-cesium/src/olcs/contrib/Manager.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var Manager = function (_olcsContribManager) {
  _inheritsLoose(Manager, _olcsContribManager);

  function Manager(url, $rootScope, options) {
    var _this;

    _this = _olcsContribManager.call(this, url, options) || this;
    _this.rootScope_ = $rootScope;
    return _this;
  }

  var _proto = Manager.prototype;

  _proto.toggle3d = function toggle3d() {
    var _this2 = this;

    var promise = _olcsContribManager.prototype.toggle3d.call(this);

    return promise.then(function () {
      _this2.rootScope_.$apply();
    });
  };

  return Manager;
}(olcs_contrib_Manager_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./src/olcs/Service.js":
/*!*****************************!*\
  !*** ./src/olcs/Service.js ***!
  \*****************************/
/*! exports provided: OlcsService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlcsService", function() { return OlcsService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_statemanager_Location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/statemanager/Location.js */ "./src/statemanager/Location.js");
/* harmony import */ var ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/olcs/constants.js */ "./src/olcs/constants.js");
/* harmony import */ var ngeo_statemanager_Service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/statemanager/Service.js */ "./src/statemanager/Service.js");
/* harmony import */ var ol_math_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/math.js */ "./node_modules/ol/math.js");






var OlcsService = function () {
  OlcsService.$inject = ["ngeoDebounce", "ngeoLocation", "ngeoStateManager"];

  function OlcsService(ngeoDebounce, ngeoLocation, ngeoStateManager) {
    this.manager_ = null;
    this.ngeoDebounce_ = ngeoDebounce;
    this.ngeoLocation_ = ngeoLocation;
    this.ngeoStateManager_ = ngeoStateManager;
  }

  var _proto = OlcsService.prototype;

  _proto.initialize = function initialize(manager) {
    var _this = this;

    this.manager_ = manager;
    this.manager_.on('load', function () {
      _this.cameraToState_();
    });

    if (this.ngeoStateManager_.getInitialBooleanValue('3d_enabled')) {
      this.initialStateToCamera_();
    }
  };

  _proto.getManager = function getManager() {
    return this.manager_;
  };

  _proto.initialStateToCamera_ = function initialStateToCamera_() {
    if (!this.manager_) {
      throw new Error('Missing manager');
    }

    var stateManager = this.ngeoStateManager_;
    var lon = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LON);
    var lat = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LAT);
    var elevation = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ELEVATION);
    var heading = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].HEADING) || 0;
    var pitch = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PITCH) || 0;

    if (!lon) {
      throw new Error('Missing lon');
    }

    if (!lat) {
      throw new Error('Missing lat');
    }

    if (!elevation) {
      throw new Error('Missing elevation');
    }

    return this.manager_.set3dWithView(lon, lat, elevation, heading, pitch);
  };

  _proto.cameraToState_ = function cameraToState_() {
    var _this2 = this;

    if (!this.manager_) {
      throw new Error('Missing manager');
    }

    var manager = this.manager_;
    var scene = manager.getOl3d().getCesiumScene();
    var camera = scene.camera;
    camera.moveEnd.addEventListener(this.ngeoDebounce_(function () {
      var _this2$ngeoStateManag;

      var position = camera.positionCartographic;

      _this2.ngeoStateManager_.updateState((_this2$ngeoStateManag = {}, _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ENABLED] = true, _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LON] = Object(ol_math_js__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(position.longitude).toFixed(5), _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LAT] = Object(ol_math_js__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(position.latitude).toFixed(5), _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ELEVATION] = position.height.toFixed(0), _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].HEADING] = Object(ol_math_js__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(camera.heading).toFixed(3), _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PITCH] = Object(ol_math_js__WEBPACK_IMPORTED_MODULE_5__["toDegrees"])(camera.pitch).toFixed(3), _this2$ngeoStateManag));
    }, 1000, true));
    this.manager_.on('toggle', function (event) {
      if (!event.target.is3dEnabled()) {
        _this2.remove3dState_();
      }
    });
  };

  _proto.remove3dState_ = function remove3dState_() {
    var _this3 = this;

    this.ngeoLocation_.getParamKeysWithPrefix(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PREFIX).forEach(function (key) {
      _this3.ngeoStateManager_.deleteParam(key);
    });
  };

  return OlcsService;
}();
var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module(name, [ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_statemanager_Location_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_statemanager_Service_js__WEBPACK_IMPORTED_MODULE_4__["default"].name]).service('ngeoOlcsService', OlcsService);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/olcs/constants.js":
/*!*******************************!*\
  !*** ./src/olcs/constants.js ***!
  \*******************************/
/*! exports provided: Permalink3dParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permalink3dParam", function() { return Permalink3dParam; });
var Permalink3dParam = {
  ENABLED: '3d_enabled',
  LON: '3d_lon',
  LAT: '3d_lat',
  ELEVATION: '3d_elevation',
  HEADING: '3d_heading',
  PITCH: '3d_pitch',
  PREFIX: '3d_'
};

/***/ }),

/***/ "./src/olcs/controls3d.html":
/*!**********************************!*\
  !*** ./src/olcs/controls3d.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-tools">\n  <div class="ngeo-angle"><div class="ngeo-angle3d"></div></div>\n  <button class="ngeo-left ngeo-tilt-left" ng-click="$ctrl.tilt(5)"></button>\n  <button class="ngeo-right ngeo-tilt-right" ng-click="$ctrl.tilt(-5)"></button>\n</div>\n<div class="ngeo-zoom">\n  <button class="ol-zoom-in" ng-click="$ctrl.zoom(1)"></button>\n  <button class="ol-zoom-out" ng-click="$ctrl.zoom(-1)"></button>\n</div>\n<div class="ngeo-tools">\n  <div class="ngeo-rotation"><div class="ngeo-rotation3d"></div></div>\n  <button class="ngeo-left" ng-click="$ctrl.rotate(-15)"></button>\n  <button class="ngeo-right" ng-click="$ctrl.rotate(15)"></button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./src/olcs/controls3d.js":
/*!********************************!*\
  !*** ./src/olcs/controls3d.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_easing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/easing.js */ "./node_modules/ol/easing.js");
/* harmony import */ var ol_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/math.js */ "./node_modules/ol/math.js");
/* harmony import */ var olcs_core_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! olcs/core.js */ "./node_modules/ol-cesium/src/olcs/core.js");
ngeoOlcsControls3dTemplateUrlInjectable.$inject = ["$attrs", "ngeoOlcsControls3dTemplateUrl"];




var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOlcsControls3d', []);

function shouldUpdate(older, newer) {
  return Number.isFinite(newer) && (!Number.isFinite(older) || Math.abs(newer - older) > 0.05);
}

var Controller = function () {
  Controller.$inject = ["$element", "ngeoOlcsService"];

  function Controller($element, ngeoOlcsService) {
    this.element_ = $element;
    this.ol3dm = null;
    this.minTilt = -1;
    this.maxTilt = -1;
    this.tiltRightEl_ = null;
    this.tiltLeftEl_ = null;
    this.rotation3dEl_ = null;
    this.angle3dEl_ = null;
    this.previousRotation_ = -1;
    this.previousViewMatrix_ = null;
    this.animationFrameRequestId_ = -1;
    this.olcsService_ = ngeoOlcsService;
  }

  var _proto = Controller.prototype;

  _proto.updateWidget_ = function updateWidget_() {
    var _this = this;

    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }

    if (!this.rotation3dEl_) {
      throw new Error('Missing rotation3dEl_');
    }

    if (!this.angle3dEl_) {
      throw new Error('Missing angle3dEl_');
    }

    if (!this.tiltRightEl_) {
      throw new Error('Missing tiltRightEl_');
    }

    if (!this.tiltLeftEl_) {
      throw new Error('Missing tiltLeftEl_');
    }

    var newRotation = this.ol3dm.getOl3d().getOlView().getRotation();

    if (shouldUpdate(this.previousRotation_, newRotation)) {
      this.rotateElement_(this.rotation3dEl_, newRotation);
      this.previousRotation_ = newRotation;
    }

    var newViewMatrix = this.ol3dm.getCesiumViewMatrix();

    if (!Cesium.Matrix4.equalsEpsilon(this.previousViewMatrix_, newViewMatrix, 1e-5)) {
      var newTilt = this.ol3dm.getTiltOnGlobe();

      if (newTilt != undefined && Number.isFinite(newTilt || 0)) {
        this.rotateElement_(this.angle3dEl_, newTilt);
        this.previousViewMatrix_ = Cesium.Matrix4.clone(newViewMatrix);
        var buffer = 0.01;

        if (newTilt - this.minTilt < buffer) {
          this.tiltRightEl_.addClass('ngeo-right-inactive');
        } else if (this.tiltRightEl_.hasClass('ngeo-right-inactive')) {
          this.tiltRightEl_.removeClass('ngeo-right-inactive');
        }

        if (this.maxTilt - newTilt < buffer) {
          this.tiltLeftEl_.addClass('ngeo-left-inactive');
        } else if (this.tiltLeftEl_.hasClass('ngeo-left-inactive')) {
          this.tiltLeftEl_.removeClass('ngeo-left-inactive');
        }
      }
    }

    this.animationFrameRequestId_ = requestAnimationFrame(function () {
      return _this.updateWidget_();
    });
  };

  _proto.$onDestroy = function $onDestroy() {
    if (this.animationFrameRequestId_) {
      cancelAnimationFrame(this.animationFrameRequestId_);
    }
  };

  _proto.$onInit = function $onInit() {
    if (this.minTilt === undefined) {
      this.minTilt = 0;
    }

    if (this.maxTilt === undefined) {
      this.maxTilt = 7 * Math.PI / 16;
    }

    if (!this.ol3dm) {
      this.ol3dm = this.olcsService_.getManager() || null;
    }

    this.tiltRightEl_ = this.element_.find('.ngeo-tilt-right');
    this.tiltLeftEl_ = this.element_.find('.ngeo-tilt-left');
    this.rotation3dEl_ = this.element_.find('.ngeo-rotation3d');
    this.angle3dEl_ = this.element_.find('.ngeo-angle3d');
    this.updateWidget_();
  };

  _proto.rotateElement_ = function rotateElement_(element, angle) {
    var r = "rotate(" + angle + "rad)";
    element.css({
      '-moz-transform': r,
      '-webkit-transform': r,
      '-o-transform': r,
      '-ms-transform': r,
      'transform': r
    });
  };

  _proto.rotate = function rotate(angle) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }

    this.ol3dm.setHeading(Object(ol_math_js__WEBPACK_IMPORTED_MODULE_2__["toRadians"])(angle));
  };

  _proto.tilt = function tilt(angle) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }

    angle = Object(ol_math_js__WEBPACK_IMPORTED_MODULE_2__["toRadians"])(angle);
    var tiltOnGlobe = this.ol3dm.getTiltOnGlobe();

    if (tiltOnGlobe == undefined) {
      throw new Error('Missing tiltOnGlobe');
    }

    if (tiltOnGlobe + angle < this.minTilt) {
      angle = this.minTilt - tiltOnGlobe;
    } else if (tiltOnGlobe + angle > this.maxTilt) {
      angle = this.maxTilt - tiltOnGlobe;
    }

    var scene = this.ol3dm.getCesiumScene();
    olcs_core_js__WEBPACK_IMPORTED_MODULE_3__["default"].rotateAroundBottomCenter(scene, angle);
  };

  _proto.zoom = function zoom(delta) {
    if (!this.ol3dm) {
      throw new Error('Missing ol3dm');
    }

    var view = this.ol3dm.getOlView();
    var cur = view.getResolution();
    var newResolution = view.constrainResolution(cur, delta);

    if (view.getAnimating()) {
      view.cancelAnimations();
    }

    view.animate({
      resolution: newResolution,
      duration: 250,
      easing: ol_easing_js__WEBPACK_IMPORTED_MODULE_1__["easeOut"]
    });
  };

  return Controller;
}();

function ngeoOlcsControls3dTemplateUrlInjectable($attrs, ngeoOlcsControls3dTemplateUrl) {
  if (ngeoOlcsControls3dTemplateUrl) {
    return ngeoOlcsControls3dTemplateUrl;
  }

  var templateUrl = $attrs['ngeoOlcsControls3dTemplateUrl'];
  return templateUrl ? templateUrl : 'ngeo/olsc/controls3d';
}

module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/olsc/controls3d', __webpack_require__(/*! ./controls3d.html */ "./src/olcs/controls3d.html"));
}]);
var olscControls3dComponent = {
  bindings: {
    'minTilt': '<?',
    'maxTilt': '<?',
    'ol3dm': '<?'
  },
  controller: Controller,
  templateUrl: ngeoOlcsControls3dTemplateUrlInjectable
};
module.component('ngeoOlcsControls3d', olscControls3dComponent);
module.value('ngeoOlcsControls3dTemplateUrl', '');
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/olcs/olcsModule.js":
/*!********************************!*\
  !*** ./src/olcs/olcsModule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_olcs_Service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/olcs/Service.js */ "./src/olcs/Service.js");
/* harmony import */ var ngeo_olcs_controls3d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/olcs/controls3d.js */ "./src/olcs/controls3d.js");



var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOlcsModule', [ngeo_olcs_controls3d_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_olcs_Service_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 40:
/*!*****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/simple3d.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/simple3d.js */"./examples/simple3d.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlM2QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc2ltcGxlM2QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29sY3MvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9vbGNzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9jb250cm9sczNkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL29sY3MvY29udHJvbHMzZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9vbGNzTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzaW1wbGUzZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFs0MCxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHJvb3RTY29wZVwiLCBcIm5nZW9PbGNzU2VydmljZVwiXTtcbmltcG9ydCAnLi9zaW1wbGUzZC5jc3MnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG5pbXBvcnQgbmdlb09sY3NPbGNzTW9kdWxlIGZyb20gJ25nZW8vb2xjcy9vbGNzTW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb09sY3NNYW5hZ2VyIGZyb20gJ25nZW8vb2xjcy9NYW5hZ2VyLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWydnZXR0ZXh0Jywgbmdlb01hcE1vZHVsZS5uYW1lLCBuZ2VvT2xjc09sY3NNb2R1bGUubmFtZV0pO1xuXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcigkcm9vdFNjb3BlLCBuZ2VvT2xjc1NlcnZpY2UpIHtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldLFxuICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgY2VudGVyOiBbMCwgMF0sXG4gICAgICB6b29tOiA0XG4gICAgfSlcbiAgfSk7XG4gIHZhciBjZXNpdW1VcmwgPSAnLi4vbm9kZV9tb2R1bGVzL0BjYW1wdG9jYW1wL2Nlc2l1bS9CdWlsZC9DZXNpdW0vQ2VzaXVtLmpzJztcbiAgdGhpcy5vbDNkbSA9IG5ldyBuZ2VvT2xjc01hbmFnZXIoY2VzaXVtVXJsLCAkcm9vdFNjb3BlLCB7XG4gICAgbWFwOiB0aGlzLm1hcFxuICB9KTtcbiAgbmdlb09sY3NTZXJ2aWNlLmluaXRpYWxpemUodGhpcy5vbDNkbSk7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IG9sY3NDb250cmliTWFuYWdlciBmcm9tICdvbGNzL2NvbnRyaWIvTWFuYWdlci5qcyc7XG5cbnZhciBNYW5hZ2VyID0gZnVuY3Rpb24gKF9vbGNzQ29udHJpYk1hbmFnZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWFuYWdlciwgX29sY3NDb250cmliTWFuYWdlcik7XG5cbiAgZnVuY3Rpb24gTWFuYWdlcih1cmwsICRyb290U2NvcGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9vbGNzQ29udHJpYk1hbmFnZXIuY2FsbCh0aGlzLCB1cmwsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgX3RoaXMucm9vdFNjb3BlXyA9ICRyb290U2NvcGU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUzZCA9IGZ1bmN0aW9uIHRvZ2dsZTNkKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBfb2xjc0NvbnRyaWJNYW5hZ2VyLnByb3RvdHlwZS50b2dnbGUzZC5jYWxsKHRoaXMpO1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucm9vdFNjb3BlXy4kYXBwbHkoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTWFuYWdlcjtcbn0ob2xjc0NvbnRyaWJNYW5hZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgbmdlb1N0YXRlbWFuYWdlckxvY2F0aW9uIGZyb20gJ25nZW8vc3RhdGVtYW5hZ2VyL0xvY2F0aW9uLmpzJztcbmltcG9ydCB7IFBlcm1hbGluazNkUGFyYW0gfSBmcm9tICduZ2VvL29sY3MvY29uc3RhbnRzLmpzJztcbmltcG9ydCBuZ2VvU3RhdGVtYW5hZ2VyU2VydmljZSBmcm9tICduZ2VvL3N0YXRlbWFuYWdlci9TZXJ2aWNlLmpzJztcbmltcG9ydCB7IHRvRGVncmVlcyB9IGZyb20gJ29sL21hdGguanMnO1xuZXhwb3J0IHZhciBPbGNzU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgT2xjc1NlcnZpY2UuJGluamVjdCA9IFtcIm5nZW9EZWJvdW5jZVwiLCBcIm5nZW9Mb2NhdGlvblwiLCBcIm5nZW9TdGF0ZU1hbmFnZXJcIl07XG5cbiAgZnVuY3Rpb24gT2xjc1NlcnZpY2Uobmdlb0RlYm91bmNlLCBuZ2VvTG9jYXRpb24sIG5nZW9TdGF0ZU1hbmFnZXIpIHtcbiAgICB0aGlzLm1hbmFnZXJfID0gbnVsbDtcbiAgICB0aGlzLm5nZW9EZWJvdW5jZV8gPSBuZ2VvRGVib3VuY2U7XG4gICAgdGhpcy5uZ2VvTG9jYXRpb25fID0gbmdlb0xvY2F0aW9uO1xuICAgIHRoaXMubmdlb1N0YXRlTWFuYWdlcl8gPSBuZ2VvU3RhdGVNYW5hZ2VyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9sY3NTZXJ2aWNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUobWFuYWdlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLm1hbmFnZXJfID0gbWFuYWdlcjtcbiAgICB0aGlzLm1hbmFnZXJfLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FtZXJhVG9TdGF0ZV8oKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm5nZW9TdGF0ZU1hbmFnZXJfLmdldEluaXRpYWxCb29sZWFuVmFsdWUoJzNkX2VuYWJsZWQnKSkge1xuICAgICAgdGhpcy5pbml0aWFsU3RhdGVUb0NhbWVyYV8oKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE1hbmFnZXIgPSBmdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLm1hbmFnZXJfO1xuICB9O1xuXG4gIF9wcm90by5pbml0aWFsU3RhdGVUb0NhbWVyYV8gPSBmdW5jdGlvbiBpbml0aWFsU3RhdGVUb0NhbWVyYV8oKSB7XG4gICAgaWYgKCF0aGlzLm1hbmFnZXJfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbWFuYWdlcicpO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZU1hbmFnZXIgPSB0aGlzLm5nZW9TdGF0ZU1hbmFnZXJfO1xuICAgIHZhciBsb24gPSBzdGF0ZU1hbmFnZXIuZ2V0SW5pdGlhbE51bWJlclZhbHVlKFBlcm1hbGluazNkUGFyYW0uTE9OKTtcbiAgICB2YXIgbGF0ID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkxBVCk7XG4gICAgdmFyIGVsZXZhdGlvbiA9IHN0YXRlTWFuYWdlci5nZXRJbml0aWFsTnVtYmVyVmFsdWUoUGVybWFsaW5rM2RQYXJhbS5FTEVWQVRJT04pO1xuICAgIHZhciBoZWFkaW5nID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkhFQURJTkcpIHx8IDA7XG4gICAgdmFyIHBpdGNoID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLlBJVENIKSB8fCAwO1xuXG4gICAgaWYgKCFsb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBsb24nKTtcbiAgICB9XG5cbiAgICBpZiAoIWxhdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGxhdCcpO1xuICAgIH1cblxuICAgIGlmICghZWxldmF0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxldmF0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubWFuYWdlcl8uc2V0M2RXaXRoVmlldyhsb24sIGxhdCwgZWxldmF0aW9uLCBoZWFkaW5nLCBwaXRjaCk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbWVyYVRvU3RhdGVfID0gZnVuY3Rpb24gY2FtZXJhVG9TdGF0ZV8oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMubWFuYWdlcl8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBtYW5hZ2VyJyk7XG4gICAgfVxuXG4gICAgdmFyIG1hbmFnZXIgPSB0aGlzLm1hbmFnZXJfO1xuICAgIHZhciBzY2VuZSA9IG1hbmFnZXIuZ2V0T2wzZCgpLmdldENlc2l1bVNjZW5lKCk7XG4gICAgdmFyIGNhbWVyYSA9IHNjZW5lLmNhbWVyYTtcbiAgICBjYW1lcmEubW92ZUVuZC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmdlb0RlYm91bmNlXyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnO1xuXG4gICAgICB2YXIgcG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb25DYXJ0b2dyYXBoaWM7XG5cbiAgICAgIF90aGlzMi5uZ2VvU3RhdGVNYW5hZ2VyXy51cGRhdGVTdGF0ZSgoX3RoaXMyJG5nZW9TdGF0ZU1hbmFnID0ge30sIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkVOQUJMRURdID0gdHJ1ZSwgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnW1Blcm1hbGluazNkUGFyYW0uTE9OXSA9IHRvRGVncmVlcyhwb3NpdGlvbi5sb25naXR1ZGUpLnRvRml4ZWQoNSksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkxBVF0gPSB0b0RlZ3JlZXMocG9zaXRpb24ubGF0aXR1ZGUpLnRvRml4ZWQoNSksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkVMRVZBVElPTl0gPSBwb3NpdGlvbi5oZWlnaHQudG9GaXhlZCgwKSwgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnW1Blcm1hbGluazNkUGFyYW0uSEVBRElOR10gPSB0b0RlZ3JlZXMoY2FtZXJhLmhlYWRpbmcpLnRvRml4ZWQoMyksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLlBJVENIXSA9IHRvRGVncmVlcyhjYW1lcmEucGl0Y2gpLnRvRml4ZWQoMyksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZykpO1xuICAgIH0sIDEwMDAsIHRydWUpKTtcbiAgICB0aGlzLm1hbmFnZXJfLm9uKCd0b2dnbGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmlzM2RFbmFibGVkKCkpIHtcbiAgICAgICAgX3RoaXMyLnJlbW92ZTNkU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZTNkU3RhdGVfID0gZnVuY3Rpb24gcmVtb3ZlM2RTdGF0ZV8oKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW1LZXlzV2l0aFByZWZpeChQZXJtYWxpbmszZFBhcmFtLlBSRUZJWCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfdGhpczMubmdlb1N0YXRlTWFuYWdlcl8uZGVsZXRlUGFyYW0oa2V5KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gT2xjc1NlcnZpY2U7XG59KCk7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgW25nZW9NaXNjRGVib3VuY2UubmFtZSwgbmdlb1N0YXRlbWFuYWdlckxvY2F0aW9uLm5hbWUsIG5nZW9TdGF0ZW1hbmFnZXJTZXJ2aWNlLm5hbWVdKS5zZXJ2aWNlKCduZ2VvT2xjc1NlcnZpY2UnLCBPbGNzU2VydmljZSk7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiZXhwb3J0IHZhciBQZXJtYWxpbmszZFBhcmFtID0ge1xuICBFTkFCTEVEOiAnM2RfZW5hYmxlZCcsXG4gIExPTjogJzNkX2xvbicsXG4gIExBVDogJzNkX2xhdCcsXG4gIEVMRVZBVElPTjogJzNkX2VsZXZhdGlvbicsXG4gIEhFQURJTkc6ICczZF9oZWFkaW5nJyxcbiAgUElUQ0g6ICczZF9waXRjaCcsXG4gIFBSRUZJWDogJzNkXydcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJyc7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPGRpdiBjbGFzcz1cIm5nZW8tdG9vbHNcIj5cXG4gIDxkaXYgY2xhc3M9XCJuZ2VvLWFuZ2xlXCI+PGRpdiBjbGFzcz1cIm5nZW8tYW5nbGUzZFwiPjwvZGl2PjwvZGl2PlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm5nZW8tbGVmdCBuZ2VvLXRpbHQtbGVmdFwiIG5nLWNsaWNrPVwiJGN0cmwudGlsdCg1KVwiPjwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm5nZW8tcmlnaHQgbmdlby10aWx0LXJpZ2h0XCIgbmctY2xpY2s9XCIkY3RybC50aWx0KC01KVwiPjwvYnV0dG9uPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XCJuZ2VvLXpvb21cIj5cXG4gIDxidXR0b24gY2xhc3M9XCJvbC16b29tLWluXCIgbmctY2xpY2s9XCIkY3RybC56b29tKDEpXCI+PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVwib2wtem9vbS1vdXRcIiBuZy1jbGljaz1cIiRjdHJsLnpvb20oLTEpXCI+PC9idXR0b24+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cIm5nZW8tdG9vbHNcIj5cXG4gIDxkaXYgY2xhc3M9XCJuZ2VvLXJvdGF0aW9uXCI+PGRpdiBjbGFzcz1cIm5nZW8tcm90YXRpb24zZFwiPjwvZGl2PjwvZGl2PlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm5nZW8tbGVmdFwiIG5nLWNsaWNrPVwiJGN0cmwucm90YXRlKC0xNSlcIj48L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XCJuZ2VvLXJpZ2h0XCIgbmctY2xpY2s9XCIkY3RybC5yb3RhdGUoMTUpXCI+PC9idXR0b24+XFxuPC9kaXY+XFxuJztcblxufVxucmV0dXJuIF9fcFxufSIsIm5nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsSW5qZWN0YWJsZS4kaW5qZWN0ID0gW1wiJGF0dHJzXCIsIFwibmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmxcIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCAqIGFzIG9sRWFzaW5nIGZyb20gJ29sL2Vhc2luZy5qcyc7XG5pbXBvcnQgeyB0b1JhZGlhbnMgfSBmcm9tICdvbC9tYXRoLmpzJztcbmltcG9ydCBvbGNzQ29yZSBmcm9tICdvbGNzL2NvcmUuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvT2xjc0NvbnRyb2xzM2QnLCBbXSk7XG5cbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZShvbGRlciwgbmV3ZXIpIHtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuZXdlcikgJiYgKCFOdW1iZXIuaXNGaW5pdGUob2xkZXIpIHx8IE1hdGguYWJzKG5ld2VyIC0gb2xkZXIpID4gMC4wNSk7XG59XG5cbnZhciBDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICBDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkZWxlbWVudFwiLCBcIm5nZW9PbGNzU2VydmljZVwiXTtcblxuICBmdW5jdGlvbiBDb250cm9sbGVyKCRlbGVtZW50LCBuZ2VvT2xjc1NlcnZpY2UpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vbDNkbSA9IG51bGw7XG4gICAgdGhpcy5taW5UaWx0ID0gLTE7XG4gICAgdGhpcy5tYXhUaWx0ID0gLTE7XG4gICAgdGhpcy50aWx0UmlnaHRFbF8gPSBudWxsO1xuICAgIHRoaXMudGlsdExlZnRFbF8gPSBudWxsO1xuICAgIHRoaXMucm90YXRpb24zZEVsXyA9IG51bGw7XG4gICAgdGhpcy5hbmdsZTNkRWxfID0gbnVsbDtcbiAgICB0aGlzLnByZXZpb3VzUm90YXRpb25fID0gLTE7XG4gICAgdGhpcy5wcmV2aW91c1ZpZXdNYXRyaXhfID0gbnVsbDtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lUmVxdWVzdElkXyA9IC0xO1xuICAgIHRoaXMub2xjc1NlcnZpY2VfID0gbmdlb09sY3NTZXJ2aWNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbnRyb2xsZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by51cGRhdGVXaWRnZXRfID0gZnVuY3Rpb24gdXBkYXRlV2lkZ2V0XygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLm9sM2RtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgb2wzZG0nKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucm90YXRpb24zZEVsXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJvdGF0aW9uM2RFbF8nKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYW5nbGUzZEVsXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuZ2xlM2RFbF8nKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudGlsdFJpZ2h0RWxfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdGlsdFJpZ2h0RWxfJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRpbHRMZWZ0RWxfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdGlsdExlZnRFbF8nKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Um90YXRpb24gPSB0aGlzLm9sM2RtLmdldE9sM2QoKS5nZXRPbFZpZXcoKS5nZXRSb3RhdGlvbigpO1xuXG4gICAgaWYgKHNob3VsZFVwZGF0ZSh0aGlzLnByZXZpb3VzUm90YXRpb25fLCBuZXdSb3RhdGlvbikpIHtcbiAgICAgIHRoaXMucm90YXRlRWxlbWVudF8odGhpcy5yb3RhdGlvbjNkRWxfLCBuZXdSb3RhdGlvbik7XG4gICAgICB0aGlzLnByZXZpb3VzUm90YXRpb25fID0gbmV3Um90YXRpb247XG4gICAgfVxuXG4gICAgdmFyIG5ld1ZpZXdNYXRyaXggPSB0aGlzLm9sM2RtLmdldENlc2l1bVZpZXdNYXRyaXgoKTtcblxuICAgIGlmICghQ2VzaXVtLk1hdHJpeDQuZXF1YWxzRXBzaWxvbih0aGlzLnByZXZpb3VzVmlld01hdHJpeF8sIG5ld1ZpZXdNYXRyaXgsIDFlLTUpKSB7XG4gICAgICB2YXIgbmV3VGlsdCA9IHRoaXMub2wzZG0uZ2V0VGlsdE9uR2xvYmUoKTtcblxuICAgICAgaWYgKG5ld1RpbHQgIT0gdW5kZWZpbmVkICYmIE51bWJlci5pc0Zpbml0ZShuZXdUaWx0IHx8IDApKSB7XG4gICAgICAgIHRoaXMucm90YXRlRWxlbWVudF8odGhpcy5hbmdsZTNkRWxfLCBuZXdUaWx0KTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZpZXdNYXRyaXhfID0gQ2VzaXVtLk1hdHJpeDQuY2xvbmUobmV3Vmlld01hdHJpeCk7XG4gICAgICAgIHZhciBidWZmZXIgPSAwLjAxO1xuXG4gICAgICAgIGlmIChuZXdUaWx0IC0gdGhpcy5taW5UaWx0IDwgYnVmZmVyKSB7XG4gICAgICAgICAgdGhpcy50aWx0UmlnaHRFbF8uYWRkQ2xhc3MoJ25nZW8tcmlnaHQtaW5hY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbHRSaWdodEVsXy5oYXNDbGFzcygnbmdlby1yaWdodC1pbmFjdGl2ZScpKSB7XG4gICAgICAgICAgdGhpcy50aWx0UmlnaHRFbF8ucmVtb3ZlQ2xhc3MoJ25nZW8tcmlnaHQtaW5hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1heFRpbHQgLSBuZXdUaWx0IDwgYnVmZmVyKSB7XG4gICAgICAgICAgdGhpcy50aWx0TGVmdEVsXy5hZGRDbGFzcygnbmdlby1sZWZ0LWluYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50aWx0TGVmdEVsXy5oYXNDbGFzcygnbmdlby1sZWZ0LWluYWN0aXZlJykpIHtcbiAgICAgICAgICB0aGlzLnRpbHRMZWZ0RWxfLnJlbW92ZUNsYXNzKCduZ2VvLWxlZnQtaW5hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVSZXF1ZXN0SWRfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy51cGRhdGVXaWRnZXRfKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLiRvbkRlc3Ryb3kgPSBmdW5jdGlvbiAkb25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lUmVxdWVzdElkXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZVJlcXVlc3RJZF8pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uJG9uSW5pdCA9IGZ1bmN0aW9uICRvbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWluVGlsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1pblRpbHQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heFRpbHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tYXhUaWx0ID0gNyAqIE1hdGguUEkgLyAxNjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub2wzZG0pIHtcbiAgICAgIHRoaXMub2wzZG0gPSB0aGlzLm9sY3NTZXJ2aWNlXy5nZXRNYW5hZ2VyKCkgfHwgbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnRpbHRSaWdodEVsXyA9IHRoaXMuZWxlbWVudF8uZmluZCgnLm5nZW8tdGlsdC1yaWdodCcpO1xuICAgIHRoaXMudGlsdExlZnRFbF8gPSB0aGlzLmVsZW1lbnRfLmZpbmQoJy5uZ2VvLXRpbHQtbGVmdCcpO1xuICAgIHRoaXMucm90YXRpb24zZEVsXyA9IHRoaXMuZWxlbWVudF8uZmluZCgnLm5nZW8tcm90YXRpb24zZCcpO1xuICAgIHRoaXMuYW5nbGUzZEVsXyA9IHRoaXMuZWxlbWVudF8uZmluZCgnLm5nZW8tYW5nbGUzZCcpO1xuICAgIHRoaXMudXBkYXRlV2lkZ2V0XygpO1xuICB9O1xuXG4gIF9wcm90by5yb3RhdGVFbGVtZW50XyA9IGZ1bmN0aW9uIHJvdGF0ZUVsZW1lbnRfKGVsZW1lbnQsIGFuZ2xlKSB7XG4gICAgdmFyIHIgPSBcInJvdGF0ZShcIiArIGFuZ2xlICsgXCJyYWQpXCI7XG4gICAgZWxlbWVudC5jc3Moe1xuICAgICAgJy1tb3otdHJhbnNmb3JtJzogcixcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHIsXG4gICAgICAnLW8tdHJhbnNmb3JtJzogcixcbiAgICAgICctbXMtdHJhbnNmb3JtJzogcixcbiAgICAgICd0cmFuc2Zvcm0nOiByXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJvdGF0ZSA9IGZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xuICAgIGlmICghdGhpcy5vbDNkbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG9sM2RtJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbDNkbS5zZXRIZWFkaW5nKHRvUmFkaWFucyhhbmdsZSkpO1xuICB9O1xuXG4gIF9wcm90by50aWx0ID0gZnVuY3Rpb24gdGlsdChhbmdsZSkge1xuICAgIGlmICghdGhpcy5vbDNkbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG9sM2RtJyk7XG4gICAgfVxuXG4gICAgYW5nbGUgPSB0b1JhZGlhbnMoYW5nbGUpO1xuICAgIHZhciB0aWx0T25HbG9iZSA9IHRoaXMub2wzZG0uZ2V0VGlsdE9uR2xvYmUoKTtcblxuICAgIGlmICh0aWx0T25HbG9iZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyB0aWx0T25HbG9iZScpO1xuICAgIH1cblxuICAgIGlmICh0aWx0T25HbG9iZSArIGFuZ2xlIDwgdGhpcy5taW5UaWx0KSB7XG4gICAgICBhbmdsZSA9IHRoaXMubWluVGlsdCAtIHRpbHRPbkdsb2JlO1xuICAgIH0gZWxzZSBpZiAodGlsdE9uR2xvYmUgKyBhbmdsZSA+IHRoaXMubWF4VGlsdCkge1xuICAgICAgYW5nbGUgPSB0aGlzLm1heFRpbHQgLSB0aWx0T25HbG9iZTtcbiAgICB9XG5cbiAgICB2YXIgc2NlbmUgPSB0aGlzLm9sM2RtLmdldENlc2l1bVNjZW5lKCk7XG4gICAgb2xjc0NvcmUucm90YXRlQXJvdW5kQm90dG9tQ2VudGVyKHNjZW5lLCBhbmdsZSk7XG4gIH07XG5cbiAgX3Byb3RvLnpvb20gPSBmdW5jdGlvbiB6b29tKGRlbHRhKSB7XG4gICAgaWYgKCF0aGlzLm9sM2RtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgb2wzZG0nKTtcbiAgICB9XG5cbiAgICB2YXIgdmlldyA9IHRoaXMub2wzZG0uZ2V0T2xWaWV3KCk7XG4gICAgdmFyIGN1ciA9IHZpZXcuZ2V0UmVzb2x1dGlvbigpO1xuICAgIHZhciBuZXdSZXNvbHV0aW9uID0gdmlldy5jb25zdHJhaW5SZXNvbHV0aW9uKGN1ciwgZGVsdGEpO1xuXG4gICAgaWYgKHZpZXcuZ2V0QW5pbWF0aW5nKCkpIHtcbiAgICAgIHZpZXcuY2FuY2VsQW5pbWF0aW9ucygpO1xuICAgIH1cblxuICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICByZXNvbHV0aW9uOiBuZXdSZXNvbHV0aW9uLFxuICAgICAgZHVyYXRpb246IDI1MCxcbiAgICAgIGVhc2luZzogb2xFYXNpbmcuZWFzZU91dFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDb250cm9sbGVyO1xufSgpO1xuXG5mdW5jdGlvbiBuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybEluamVjdGFibGUoJGF0dHJzLCBuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybCkge1xuICBpZiAobmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmwpIHtcbiAgICByZXR1cm4gbmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmw7XG4gIH1cblxuICB2YXIgdGVtcGxhdGVVcmwgPSAkYXR0cnNbJ25nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsJ107XG4gIHJldHVybiB0ZW1wbGF0ZVVybCA/IHRlbXBsYXRlVXJsIDogJ25nZW8vb2xzYy9jb250cm9sczNkJztcbn1cblxubW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCduZ2VvL29sc2MvY29udHJvbHMzZCcsIHJlcXVpcmUoJy4vY29udHJvbHMzZC5odG1sJykpO1xufV0pO1xudmFyIG9sc2NDb250cm9sczNkQ29tcG9uZW50ID0ge1xuICBiaW5kaW5nczoge1xuICAgICdtaW5UaWx0JzogJzw/JyxcbiAgICAnbWF4VGlsdCc6ICc8PycsXG4gICAgJ29sM2RtJzogJzw/J1xuICB9LFxuICBjb250cm9sbGVyOiBDb250cm9sbGVyLFxuICB0ZW1wbGF0ZVVybDogbmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmxJbmplY3RhYmxlXG59O1xubW9kdWxlLmNvbXBvbmVudCgnbmdlb09sY3NDb250cm9sczNkJywgb2xzY0NvbnRyb2xzM2RDb21wb25lbnQpO1xubW9kdWxlLnZhbHVlKCduZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybCcsICcnKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJ25nZW8vb2xjcy9TZXJ2aWNlLmpzJztcbmltcG9ydCBjb250cm9sIGZyb20gJ25nZW8vb2xjcy9jb250cm9sczNkLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09sY3NNb2R1bGUnLCBbY29udHJvbC5uYW1lLCBTZXJ2aWNlLm5hbWVdKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=