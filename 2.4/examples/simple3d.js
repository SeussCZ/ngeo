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
/******/ 	deferredModules.push([41,"commons"]);
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_statemanager_Location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/statemanager/Location.js */ "./src/statemanager/Location.js");
/* harmony import */ var ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/olcs/constants.js */ "./src/olcs/constants.js");
/* harmony import */ var ngeo_statemanager_Service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/statemanager/Service.js */ "./src/statemanager/Service.js");





var OlcsService = function () {
  OlcsService.$inject = ["ngeoDebounce", "ngeoLocation", "ngeoStateManager"];

  function OlcsService(ngeoDebounce, ngeoLocation, ngeoStateManager) {
    this.manager_;
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
    var stateManager = this.ngeoStateManager_;
    var lon = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LON);
    var lat = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LAT);
    var elevation = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ELEVATION);
    var heading = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].HEADING) || 0;
    var pitch = stateManager.getInitialNumberValue(ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PITCH) || 0;
    console.assert(lon !== undefined);
    console.assert(lat !== undefined);
    console.assert(elevation !== undefined);
    return this.manager_.set3dWithView(lon, lat, elevation, heading, pitch);
  };

  _proto.cameraToState_ = function cameraToState_() {
    var _this2 = this;

    var manager = this.manager_;
    var scene = manager.getOl3d().getCesiumScene();
    var camera = scene.camera;
    camera.moveEnd.addEventListener(this.ngeoDebounce_(function () {
      var _this2$ngeoStateManag;

      var position = camera.positionCartographic;

      _this2.ngeoStateManager_.updateState((_this2$ngeoStateManag = {}, _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ENABLED] = true, _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LON] = Cesium.Math.toDegrees(position.longitude).toFixed(5), _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].LAT] = Cesium.Math.toDegrees(position.latitude).toFixed(5), _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].ELEVATION] = position.height.toFixed(0), _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].HEADING] = Cesium.Math.toDegrees(camera.heading).toFixed(3), _this2$ngeoStateManag[ngeo_olcs_constants_js__WEBPACK_IMPORTED_MODULE_3__["Permalink3dParam"].PITCH] = Cesium.Math.toDegrees(camera.pitch).toFixed(3), _this2$ngeoStateManag));
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_easing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/easing.js */ "./node_modules/ol/easing.js");
/* harmony import */ var olcs_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! olcs/core.js */ "./node_modules/ol-cesium/src/olcs/core.js");
ngeoOlcsControls3dTemplateUrlInjectable.$inject = ["$attrs", "ngeoOlcsControls3dTemplateUrl"];



var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOlcsControls3d', []);

function shouldUpdate(older, newer) {
  return Number.isFinite(newer) && (!Number.isFinite(older) || Math.abs(newer - older) > 0.05);
}

var Controller = function () {
  Controller.$inject = ["$element", "ngeoOlcsService"];

  function Controller($element, ngeoOlcsService) {
    this.element_ = $element;
    this.ol3dm;
    this.minTilt;
    this.maxTilt;
    this.tiltRightEl_;
    this.tiltLeftEl_;
    this.rotation3dEl_;
    this.angle3dEl_;
    this.previousRotation_;
    this.previousViewMatrix_;
    this.animationFrameRequestId_;
    this.olcsService_ = ngeoOlcsService;
  }

  var _proto = Controller.prototype;

  _proto.updateWidget_ = function updateWidget_() {
    var _this = this;

    var newRotation = this.ol3dm.getOl3d().getOlView().getRotation();

    if (shouldUpdate(this.previousRotation_, newRotation)) {
      this.rotateElement_(this.rotation3dEl_, newRotation);
      this.previousRotation_ = newRotation;
    }

    var newViewMatrix = this.ol3dm.getCesiumViewMatrix();

    if (!Cesium.Matrix4.equalsEpsilon(this.previousViewMatrix_, newViewMatrix, 1e-5)) {
      var newTilt = this.ol3dm.getTiltOnGlobe();

      if (Number.isFinite(newTilt || 0)) {
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
      this.ol3dm = this.olcsService_.getManager();
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
    angle = Cesium.Math.toRadians(angle);
    this.ol3dm.setHeading(angle);
  };

  _proto.tilt = function tilt(angle) {
    angle = Cesium.Math.toRadians(angle);
    var tiltOnGlobe = this.ol3dm.getTiltOnGlobe();

    if (tiltOnGlobe + angle < this.minTilt) {
      angle = this.minTilt - tiltOnGlobe;
    } else if (tiltOnGlobe + angle > this.maxTilt) {
      angle = this.maxTilt - tiltOnGlobe;
    }

    var scene = this.ol3dm.getCesiumScene();
    olcs_core_js__WEBPACK_IMPORTED_MODULE_2__["default"].rotateAroundBottomCenter(scene, angle);
  };

  _proto.zoom = function zoom(delta) {
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_olcs_Service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/olcs/Service.js */ "./src/olcs/Service.js");
/* harmony import */ var ngeo_olcs_controls3d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/olcs/controls3d.js */ "./src/olcs/controls3d.js");



var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOlcsModule', [ngeo_olcs_controls3d_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_olcs_Service_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 41:
/*!*****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/simple3d.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/simple3d.js */"./examples/simple3d.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlM2QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc2ltcGxlM2QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29sY3MvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9vbGNzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9jb250cm9sczNkLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL29sY3MvY29udHJvbHMzZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2xjcy9vbGNzTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwic2ltcGxlM2RcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNDEsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRyb290U2NvcGVcIiwgXCJuZ2VvT2xjc1NlcnZpY2VcIl07XG5pbXBvcnQgJy4vc2ltcGxlM2QuY3NzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcuanMnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IG5nZW9PbGNzT2xjc01vZHVsZSBmcm9tICduZ2VvL29sY3Mvb2xjc01vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUuanMnO1xuaW1wb3J0IG5nZW9PbGNzTWFuYWdlciBmcm9tICduZ2VvL29sY3MvTWFuYWdlci5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb09sY3NPbGNzTW9kdWxlLm5hbWVdKTtcblxuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJHJvb3RTY29wZSwgbmdlb09sY3NTZXJ2aWNlKSB7XG4gIHRoaXMubWFwID0gbmV3IG9sTWFwKHtcbiAgICBsYXllcnM6IFtuZXcgb2xMYXllclRpbGUoe1xuICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKVxuICAgIH0pXSxcbiAgICB2aWV3OiBuZXcgb2xWaWV3KHtcbiAgICAgIGNlbnRlcjogWzAsIDBdLFxuICAgICAgem9vbTogNFxuICAgIH0pXG4gIH0pO1xuICB2YXIgY2VzaXVtVXJsID0gJy4uL25vZGVfbW9kdWxlcy9AY2FtcHRvY2FtcC9jZXNpdW0vQnVpbGQvQ2VzaXVtL0Nlc2l1bS5qcyc7XG4gIHRoaXMub2wzZG0gPSBuZXcgbmdlb09sY3NNYW5hZ2VyKGNlc2l1bVVybCwgJHJvb3RTY29wZSwge1xuICAgIG1hcDogdGhpcy5tYXBcbiAgfSk7XG4gIG5nZW9PbGNzU2VydmljZS5pbml0aWFsaXplKHRoaXMub2wzZG0pO1xufVxuXG5tb2R1bGUuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBvbGNzQ29udHJpYk1hbmFnZXIgZnJvbSAnb2xjcy9jb250cmliL01hbmFnZXIuanMnO1xuXG52YXIgTWFuYWdlciA9IGZ1bmN0aW9uIChfb2xjc0NvbnRyaWJNYW5hZ2VyKSB7XG4gIF9pbmhlcml0c0xvb3NlKE1hbmFnZXIsIF9vbGNzQ29udHJpYk1hbmFnZXIpO1xuXG4gIGZ1bmN0aW9uIE1hbmFnZXIodXJsLCAkcm9vdFNjb3BlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfb2xjc0NvbnRyaWJNYW5hZ2VyLmNhbGwodGhpcywgdXJsLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgIF90aGlzLnJvb3RTY29wZV8gPSAkcm9vdFNjb3BlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlM2QgPSBmdW5jdGlvbiB0b2dnbGUzZCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gX29sY3NDb250cmliTWFuYWdlci5wcm90b3R5cGUudG9nZ2xlM2QuY2FsbCh0aGlzKTtcblxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnJvb3RTY29wZV8uJGFwcGx5KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1hbmFnZXI7XG59KG9sY3NDb250cmliTWFuYWdlcik7XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb01pc2NEZWJvdW5jZSBmcm9tICduZ2VvL21pc2MvZGVib3VuY2UuanMnO1xuaW1wb3J0IG5nZW9TdGF0ZW1hbmFnZXJMb2NhdGlvbiBmcm9tICduZ2VvL3N0YXRlbWFuYWdlci9Mb2NhdGlvbi5qcyc7XG5pbXBvcnQgeyBQZXJtYWxpbmszZFBhcmFtIH0gZnJvbSAnbmdlby9vbGNzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgbmdlb1N0YXRlbWFuYWdlclNlcnZpY2UgZnJvbSAnbmdlby9zdGF0ZW1hbmFnZXIvU2VydmljZS5qcyc7XG5leHBvcnQgdmFyIE9sY3NTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICBPbGNzU2VydmljZS4kaW5qZWN0ID0gW1wibmdlb0RlYm91bmNlXCIsIFwibmdlb0xvY2F0aW9uXCIsIFwibmdlb1N0YXRlTWFuYWdlclwiXTtcblxuICBmdW5jdGlvbiBPbGNzU2VydmljZShuZ2VvRGVib3VuY2UsIG5nZW9Mb2NhdGlvbiwgbmdlb1N0YXRlTWFuYWdlcikge1xuICAgIHRoaXMubWFuYWdlcl87XG4gICAgdGhpcy5uZ2VvRGVib3VuY2VfID0gbmdlb0RlYm91bmNlO1xuICAgIHRoaXMubmdlb0xvY2F0aW9uXyA9IG5nZW9Mb2NhdGlvbjtcbiAgICB0aGlzLm5nZW9TdGF0ZU1hbmFnZXJfID0gbmdlb1N0YXRlTWFuYWdlcjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPbGNzU2VydmljZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKG1hbmFnZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5tYW5hZ2VyXyA9IG1hbmFnZXI7XG4gICAgdGhpcy5tYW5hZ2VyXy5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbWVyYVRvU3RhdGVfKCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5uZ2VvU3RhdGVNYW5hZ2VyXy5nZXRJbml0aWFsQm9vbGVhblZhbHVlKCczZF9lbmFibGVkJykpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFN0YXRlVG9DYW1lcmFfKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRNYW5hZ2VyID0gZnVuY3Rpb24gZ2V0TWFuYWdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5tYW5hZ2VyXztcbiAgfTtcblxuICBfcHJvdG8uaW5pdGlhbFN0YXRlVG9DYW1lcmFfID0gZnVuY3Rpb24gaW5pdGlhbFN0YXRlVG9DYW1lcmFfKCkge1xuICAgIHZhciBzdGF0ZU1hbmFnZXIgPSB0aGlzLm5nZW9TdGF0ZU1hbmFnZXJfO1xuICAgIHZhciBsb24gPSBzdGF0ZU1hbmFnZXIuZ2V0SW5pdGlhbE51bWJlclZhbHVlKFBlcm1hbGluazNkUGFyYW0uTE9OKTtcbiAgICB2YXIgbGF0ID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkxBVCk7XG4gICAgdmFyIGVsZXZhdGlvbiA9IHN0YXRlTWFuYWdlci5nZXRJbml0aWFsTnVtYmVyVmFsdWUoUGVybWFsaW5rM2RQYXJhbS5FTEVWQVRJT04pO1xuICAgIHZhciBoZWFkaW5nID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLkhFQURJTkcpIHx8IDA7XG4gICAgdmFyIHBpdGNoID0gc3RhdGVNYW5hZ2VyLmdldEluaXRpYWxOdW1iZXJWYWx1ZShQZXJtYWxpbmszZFBhcmFtLlBJVENIKSB8fCAwO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGxvbiAhPT0gdW5kZWZpbmVkKTtcbiAgICBjb25zb2xlLmFzc2VydChsYXQgIT09IHVuZGVmaW5lZCk7XG4gICAgY29uc29sZS5hc3NlcnQoZWxldmF0aW9uICE9PSB1bmRlZmluZWQpO1xuICAgIHJldHVybiB0aGlzLm1hbmFnZXJfLnNldDNkV2l0aFZpZXcobG9uLCBsYXQsIGVsZXZhdGlvbiwgaGVhZGluZywgcGl0Y2gpO1xuICB9O1xuXG4gIF9wcm90by5jYW1lcmFUb1N0YXRlXyA9IGZ1bmN0aW9uIGNhbWVyYVRvU3RhdGVfKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG1hbmFnZXIgPSB0aGlzLm1hbmFnZXJfO1xuICAgIHZhciBzY2VuZSA9IG1hbmFnZXIuZ2V0T2wzZCgpLmdldENlc2l1bVNjZW5lKCk7XG4gICAgdmFyIGNhbWVyYSA9IHNjZW5lLmNhbWVyYTtcbiAgICBjYW1lcmEubW92ZUVuZC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmdlb0RlYm91bmNlXyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnO1xuXG4gICAgICB2YXIgcG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb25DYXJ0b2dyYXBoaWM7XG5cbiAgICAgIF90aGlzMi5uZ2VvU3RhdGVNYW5hZ2VyXy51cGRhdGVTdGF0ZSgoX3RoaXMyJG5nZW9TdGF0ZU1hbmFnID0ge30sIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkVOQUJMRURdID0gdHJ1ZSwgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnW1Blcm1hbGluazNkUGFyYW0uTE9OXSA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhwb3NpdGlvbi5sb25naXR1ZGUpLnRvRml4ZWQoNSksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkxBVF0gPSBDZXNpdW0uTWF0aC50b0RlZ3JlZXMocG9zaXRpb24ubGF0aXR1ZGUpLnRvRml4ZWQoNSksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLkVMRVZBVElPTl0gPSBwb3NpdGlvbi5oZWlnaHQudG9GaXhlZCgwKSwgX3RoaXMyJG5nZW9TdGF0ZU1hbmFnW1Blcm1hbGluazNkUGFyYW0uSEVBRElOR10gPSBDZXNpdW0uTWF0aC50b0RlZ3JlZXMoY2FtZXJhLmhlYWRpbmcpLnRvRml4ZWQoMyksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZ1tQZXJtYWxpbmszZFBhcmFtLlBJVENIXSA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhjYW1lcmEucGl0Y2gpLnRvRml4ZWQoMyksIF90aGlzMiRuZ2VvU3RhdGVNYW5hZykpO1xuICAgIH0sIDEwMDAsIHRydWUpKTtcbiAgICB0aGlzLm1hbmFnZXJfLm9uKCd0b2dnbGUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmlzM2RFbmFibGVkKCkpIHtcbiAgICAgICAgX3RoaXMyLnJlbW92ZTNkU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZTNkU3RhdGVfID0gZnVuY3Rpb24gcmVtb3ZlM2RTdGF0ZV8oKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm5nZW9Mb2NhdGlvbl8uZ2V0UGFyYW1LZXlzV2l0aFByZWZpeChQZXJtYWxpbmszZFBhcmFtLlBSRUZJWCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfdGhpczMubmdlb1N0YXRlTWFuYWdlcl8uZGVsZXRlUGFyYW0oa2V5KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gT2xjc1NlcnZpY2U7XG59KCk7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgW25nZW9NaXNjRGVib3VuY2UubmFtZSwgbmdlb1N0YXRlbWFuYWdlckxvY2F0aW9uLm5hbWUsIG5nZW9TdGF0ZW1hbmFnZXJTZXJ2aWNlLm5hbWVdKS5zZXJ2aWNlKCduZ2VvT2xjc1NlcnZpY2UnLCBPbGNzU2VydmljZSk7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiZXhwb3J0IHZhciBQZXJtYWxpbmszZFBhcmFtID0ge1xuICBFTkFCTEVEOiAnM2RfZW5hYmxlZCcsXG4gIExPTjogJzNkX2xvbicsXG4gIExBVDogJzNkX2xhdCcsXG4gIEVMRVZBVElPTjogJzNkX2VsZXZhdGlvbicsXG4gIEhFQURJTkc6ICczZF9oZWFkaW5nJyxcbiAgUElUQ0g6ICczZF9waXRjaCcsXG4gIFBSRUZJWDogJzNkXydcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJyc7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPGRpdiBjbGFzcz1cIm5nZW8tdG9vbHNcIj5cXG4gIDxkaXYgY2xhc3M9XCJuZ2VvLWFuZ2xlXCI+PGRpdiBjbGFzcz1cIm5nZW8tYW5nbGUzZFwiPjwvZGl2PjwvZGl2PlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm5nZW8tbGVmdCBuZ2VvLXRpbHQtbGVmdFwiIG5nLWNsaWNrPVwiJGN0cmwudGlsdCg1KVwiPjwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm5nZW8tcmlnaHQgbmdlby10aWx0LXJpZ2h0XCIgbmctY2xpY2s9XCIkY3RybC50aWx0KC01KVwiPjwvYnV0dG9uPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XCJuZ2VvLXpvb21cIj5cXG4gIDxidXR0b24gY2xhc3M9XCJvbC16b29tLWluXCIgbmctY2xpY2s9XCIkY3RybC56b29tKDEpXCI+PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVwib2wtem9vbS1vdXRcIiBuZy1jbGljaz1cIiRjdHJsLnpvb20oLTEpXCI+PC9idXR0b24+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cIm5nZW8tdG9vbHNcIj5cXG4gIDxkaXYgY2xhc3M9XCJuZ2VvLXJvdGF0aW9uXCI+PGRpdiBjbGFzcz1cIm5nZW8tcm90YXRpb24zZFwiPjwvZGl2PjwvZGl2PlxcbiAgPGJ1dHRvbiBjbGFzcz1cIm5nZW8tbGVmdFwiIG5nLWNsaWNrPVwiJGN0cmwucm90YXRlKC0xNSlcIj48L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XCJuZ2VvLXJpZ2h0XCIgbmctY2xpY2s9XCIkY3RybC5yb3RhdGUoMTUpXCI+PC9idXR0b24+XFxuPC9kaXY+XFxuJztcblxufVxucmV0dXJuIF9fcFxufSIsIm5nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsSW5qZWN0YWJsZS4kaW5qZWN0ID0gW1wiJGF0dHJzXCIsIFwibmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmxcIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCAqIGFzIG9sRWFzaW5nIGZyb20gJ29sL2Vhc2luZy5qcyc7XG5pbXBvcnQgb2xjc0NvcmUgZnJvbSAnb2xjcy9jb3JlLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09sY3NDb250cm9sczNkJywgW10pO1xuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGUob2xkZXIsIG5ld2VyKSB7XG4gIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobmV3ZXIpICYmICghTnVtYmVyLmlzRmluaXRlKG9sZGVyKSB8fCBNYXRoLmFicyhuZXdlciAtIG9sZGVyKSA+IDAuMDUpO1xufVxuXG52YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGVsZW1lbnRcIiwgXCJuZ2VvT2xjc1NlcnZpY2VcIl07XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigkZWxlbWVudCwgbmdlb09sY3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbGVtZW50XyA9ICRlbGVtZW50O1xuICAgIHRoaXMub2wzZG07XG4gICAgdGhpcy5taW5UaWx0O1xuICAgIHRoaXMubWF4VGlsdDtcbiAgICB0aGlzLnRpbHRSaWdodEVsXztcbiAgICB0aGlzLnRpbHRMZWZ0RWxfO1xuICAgIHRoaXMucm90YXRpb24zZEVsXztcbiAgICB0aGlzLmFuZ2xlM2RFbF87XG4gICAgdGhpcy5wcmV2aW91c1JvdGF0aW9uXztcbiAgICB0aGlzLnByZXZpb3VzVmlld01hdHJpeF87XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZVJlcXVlc3RJZF87XG4gICAgdGhpcy5vbGNzU2VydmljZV8gPSBuZ2VvT2xjc1NlcnZpY2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29udHJvbGxlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnVwZGF0ZVdpZGdldF8gPSBmdW5jdGlvbiB1cGRhdGVXaWRnZXRfKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgbmV3Um90YXRpb24gPSB0aGlzLm9sM2RtLmdldE9sM2QoKS5nZXRPbFZpZXcoKS5nZXRSb3RhdGlvbigpO1xuXG4gICAgaWYgKHNob3VsZFVwZGF0ZSh0aGlzLnByZXZpb3VzUm90YXRpb25fLCBuZXdSb3RhdGlvbikpIHtcbiAgICAgIHRoaXMucm90YXRlRWxlbWVudF8odGhpcy5yb3RhdGlvbjNkRWxfLCBuZXdSb3RhdGlvbik7XG4gICAgICB0aGlzLnByZXZpb3VzUm90YXRpb25fID0gbmV3Um90YXRpb247XG4gICAgfVxuXG4gICAgdmFyIG5ld1ZpZXdNYXRyaXggPSB0aGlzLm9sM2RtLmdldENlc2l1bVZpZXdNYXRyaXgoKTtcblxuICAgIGlmICghQ2VzaXVtLk1hdHJpeDQuZXF1YWxzRXBzaWxvbih0aGlzLnByZXZpb3VzVmlld01hdHJpeF8sIG5ld1ZpZXdNYXRyaXgsIDFlLTUpKSB7XG4gICAgICB2YXIgbmV3VGlsdCA9IHRoaXMub2wzZG0uZ2V0VGlsdE9uR2xvYmUoKTtcblxuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShuZXdUaWx0IHx8IDApKSB7XG4gICAgICAgIHRoaXMucm90YXRlRWxlbWVudF8odGhpcy5hbmdsZTNkRWxfLCBuZXdUaWx0KTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZpZXdNYXRyaXhfID0gQ2VzaXVtLk1hdHJpeDQuY2xvbmUobmV3Vmlld01hdHJpeCk7XG4gICAgICAgIHZhciBidWZmZXIgPSAwLjAxO1xuXG4gICAgICAgIGlmIChuZXdUaWx0IC0gdGhpcy5taW5UaWx0IDwgYnVmZmVyKSB7XG4gICAgICAgICAgdGhpcy50aWx0UmlnaHRFbF8uYWRkQ2xhc3MoJ25nZW8tcmlnaHQtaW5hY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbHRSaWdodEVsXy5oYXNDbGFzcygnbmdlby1yaWdodC1pbmFjdGl2ZScpKSB7XG4gICAgICAgICAgdGhpcy50aWx0UmlnaHRFbF8ucmVtb3ZlQ2xhc3MoJ25nZW8tcmlnaHQtaW5hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1heFRpbHQgLSBuZXdUaWx0IDwgYnVmZmVyKSB7XG4gICAgICAgICAgdGhpcy50aWx0TGVmdEVsXy5hZGRDbGFzcygnbmdlby1sZWZ0LWluYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50aWx0TGVmdEVsXy5oYXNDbGFzcygnbmdlby1sZWZ0LWluYWN0aXZlJykpIHtcbiAgICAgICAgICB0aGlzLnRpbHRMZWZ0RWxfLnJlbW92ZUNsYXNzKCduZ2VvLWxlZnQtaW5hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVSZXF1ZXN0SWRfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy51cGRhdGVXaWRnZXRfKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLiRvbkRlc3Ryb3kgPSBmdW5jdGlvbiAkb25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lUmVxdWVzdElkXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZVJlcXVlc3RJZF8pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uJG9uSW5pdCA9IGZ1bmN0aW9uICRvbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWluVGlsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1pblRpbHQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heFRpbHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tYXhUaWx0ID0gNyAqIE1hdGguUEkgLyAxNjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub2wzZG0pIHtcbiAgICAgIHRoaXMub2wzZG0gPSB0aGlzLm9sY3NTZXJ2aWNlXy5nZXRNYW5hZ2VyKCk7XG4gICAgfVxuXG4gICAgdGhpcy50aWx0UmlnaHRFbF8gPSB0aGlzLmVsZW1lbnRfLmZpbmQoJy5uZ2VvLXRpbHQtcmlnaHQnKTtcbiAgICB0aGlzLnRpbHRMZWZ0RWxfID0gdGhpcy5lbGVtZW50Xy5maW5kKCcubmdlby10aWx0LWxlZnQnKTtcbiAgICB0aGlzLnJvdGF0aW9uM2RFbF8gPSB0aGlzLmVsZW1lbnRfLmZpbmQoJy5uZ2VvLXJvdGF0aW9uM2QnKTtcbiAgICB0aGlzLmFuZ2xlM2RFbF8gPSB0aGlzLmVsZW1lbnRfLmZpbmQoJy5uZ2VvLWFuZ2xlM2QnKTtcbiAgICB0aGlzLnVwZGF0ZVdpZGdldF8oKTtcbiAgfTtcblxuICBfcHJvdG8ucm90YXRlRWxlbWVudF8gPSBmdW5jdGlvbiByb3RhdGVFbGVtZW50XyhlbGVtZW50LCBhbmdsZSkge1xuICAgIHZhciByID0gXCJyb3RhdGUoXCIgKyBhbmdsZSArIFwicmFkKVwiO1xuICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICctbW96LXRyYW5zZm9ybSc6IHIsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiByLFxuICAgICAgJy1vLXRyYW5zZm9ybSc6IHIsXG4gICAgICAnLW1zLXRyYW5zZm9ybSc6IHIsXG4gICAgICAndHJhbnNmb3JtJzogclxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yb3RhdGUgPSBmdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcbiAgICBhbmdsZSA9IENlc2l1bS5NYXRoLnRvUmFkaWFucyhhbmdsZSk7XG4gICAgdGhpcy5vbDNkbS5zZXRIZWFkaW5nKGFuZ2xlKTtcbiAgfTtcblxuICBfcHJvdG8udGlsdCA9IGZ1bmN0aW9uIHRpbHQoYW5nbGUpIHtcbiAgICBhbmdsZSA9IENlc2l1bS5NYXRoLnRvUmFkaWFucyhhbmdsZSk7XG4gICAgdmFyIHRpbHRPbkdsb2JlID0gdGhpcy5vbDNkbS5nZXRUaWx0T25HbG9iZSgpO1xuXG4gICAgaWYgKHRpbHRPbkdsb2JlICsgYW5nbGUgPCB0aGlzLm1pblRpbHQpIHtcbiAgICAgIGFuZ2xlID0gdGhpcy5taW5UaWx0IC0gdGlsdE9uR2xvYmU7XG4gICAgfSBlbHNlIGlmICh0aWx0T25HbG9iZSArIGFuZ2xlID4gdGhpcy5tYXhUaWx0KSB7XG4gICAgICBhbmdsZSA9IHRoaXMubWF4VGlsdCAtIHRpbHRPbkdsb2JlO1xuICAgIH1cblxuICAgIHZhciBzY2VuZSA9IHRoaXMub2wzZG0uZ2V0Q2VzaXVtU2NlbmUoKTtcbiAgICBvbGNzQ29yZS5yb3RhdGVBcm91bmRCb3R0b21DZW50ZXIoc2NlbmUsIGFuZ2xlKTtcbiAgfTtcblxuICBfcHJvdG8uem9vbSA9IGZ1bmN0aW9uIHpvb20oZGVsdGEpIHtcbiAgICB2YXIgdmlldyA9IHRoaXMub2wzZG0uZ2V0T2xWaWV3KCk7XG4gICAgdmFyIGN1ciA9IHZpZXcuZ2V0UmVzb2x1dGlvbigpO1xuICAgIHZhciBuZXdSZXNvbHV0aW9uID0gdmlldy5jb25zdHJhaW5SZXNvbHV0aW9uKGN1ciwgZGVsdGEpO1xuXG4gICAgaWYgKHZpZXcuZ2V0QW5pbWF0aW5nKCkpIHtcbiAgICAgIHZpZXcuY2FuY2VsQW5pbWF0aW9ucygpO1xuICAgIH1cblxuICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICByZXNvbHV0aW9uOiBuZXdSZXNvbHV0aW9uLFxuICAgICAgZHVyYXRpb246IDI1MCxcbiAgICAgIGVhc2luZzogb2xFYXNpbmcuZWFzZU91dFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDb250cm9sbGVyO1xufSgpO1xuXG5mdW5jdGlvbiBuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybEluamVjdGFibGUoJGF0dHJzLCBuZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybCkge1xuICBpZiAobmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmwpIHtcbiAgICByZXR1cm4gbmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmw7XG4gIH1cblxuICB2YXIgdGVtcGxhdGVVcmwgPSAkYXR0cnNbJ25nZW9PbGNzQ29udHJvbHMzZFRlbXBsYXRlVXJsJ107XG4gIHJldHVybiB0ZW1wbGF0ZVVybCA/IHRlbXBsYXRlVXJsIDogJ25nZW8vb2xzYy9jb250cm9sczNkJztcbn1cblxubW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCduZ2VvL29sc2MvY29udHJvbHMzZCcsIHJlcXVpcmUoJy4vY29udHJvbHMzZC5odG1sJykpO1xufV0pO1xudmFyIG9sc2NDb250cm9sczNkQ29tcG9uZW50ID0ge1xuICBiaW5kaW5nczoge1xuICAgICdtaW5UaWx0JzogJzw/JyxcbiAgICAnbWF4VGlsdCc6ICc8PycsXG4gICAgJ29sM2RtJzogJzw/J1xuICB9LFxuICBjb250cm9sbGVyOiBDb250cm9sbGVyLFxuICB0ZW1wbGF0ZVVybDogbmdlb09sY3NDb250cm9sczNkVGVtcGxhdGVVcmxJbmplY3RhYmxlXG59O1xubW9kdWxlLmNvbXBvbmVudCgnbmdlb09sY3NDb250cm9sczNkJywgb2xzY0NvbnRyb2xzM2RDb21wb25lbnQpO1xubW9kdWxlLnZhbHVlKCduZ2VvT2xjc0NvbnRyb2xzM2RUZW1wbGF0ZVVybCcsICcnKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJ25nZW8vb2xjcy9TZXJ2aWNlLmpzJztcbmltcG9ydCBjb250cm9sIGZyb20gJ25nZW8vb2xjcy9jb250cm9sczNkLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09sY3NNb2R1bGUnLCBbY29udHJvbC5uYW1lLCBTZXJ2aWNlLm5hbWVdKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=