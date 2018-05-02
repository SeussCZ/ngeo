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
/******/ 		"routing": 0
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
/******/ 	deferredModules.push([36,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/routing.css":
/*!******************************!*\
  !*** ./examples/routing.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/routing.js":
/*!*****************************!*\
  !*** ./examples/routing.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routing_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing.css */ "./examples/routing.css");
/* harmony import */ var _routing_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_routing_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_ol_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/fontawesome.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_routing_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/routing/module.js */ "./src/routing/module.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");











var module = angular__WEBPACK_IMPORTED_MODULE_4___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, ngeo_routing_module_js__WEBPACK_IMPORTED_MODULE_6__["default"].name]);

function MainController() {
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      center: [931010.1535989442, 5961705.842297254],
      zoom: 9
    })
  });
  this.routingfeatureActive = true;
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/routing/NominatimInputComponent.js":
/*!************************************************!*\
  !*** ./src/routing/NominatimInputComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_search_searchDirective_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/search/searchDirective.js */ "./src/search/searchDirective.js");
/* harmony import */ var ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/routing/NominatimService.js */ "./src/routing/NominatimService.js");
Controller.$inject = ["$element", "$scope", "ngeoNominatimService"];



var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingNominatimInputComponent', [ngeo_search_searchDirective_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/nominatiminput', __webpack_require__(/*! ./nominatiminput.html */ "./src/routing/nominatiminput.html"));
}]);
module.value('ngeoRoutingNominatimInputComponentTemplateUrl', function ($attrs) {
  var templateUrl = $attrs.ngeoRoutingNominatimInputComponentTemplateUrl;
  return templateUrl !== undefined ? templateUrl : 'ngeo/routing/nominatiminput';
});
ngeoRoutingNominatimInputComponentTemplateUrl.$inject = ["$attrs", "ngeoRoutingNominatimInputComponentTemplateUrl"];

function ngeoRoutingNominatimInputComponentTemplateUrl($attrs, ngeoRoutingNominatimInputComponentTemplateUrl) {
  return ngeoRoutingNominatimInputComponentTemplateUrl($attrs);
}

function Controller($element, $scope, ngeoNominatimService) {
  this.element_ = $element;
  this.$scope_ = $scope;
  this.ngeoNominatimService = ngeoNominatimService;
  this.onSelect = null;
  this.inputValue = null;
  this.options = {};
  this.datasets = [{
    name: 'nominatim',
    display: 'name',
    source: this.ngeoNominatimService.typeaheadSourceDebounced
  }];
  this.listeners = {
    select: this.select_.bind(this)
  };
  this.placeholder = '';
}

Controller.prototype.select_ = function (event, suggestion, dataset) {
  if (this.onSelect) {
    this.onSelect(suggestion);
  }
};

var routingNominatimInputComponent = {
  controller: Controller,
  bindings: {
    'onSelect': '=?ngeoNominatimInputOnSelect',
    'inputValue': '=?ngeoNominatimInputValue',
    'placeholder': '@?ngeoNominatimInputPlaceholder'
  },
  templateUrl: ngeoRoutingNominatimInputComponentTemplateUrl
};
module.component('ngeoNominatimInput', routingNominatimInputComponent);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/routing/NominatimService.js":
/*!*****************************************!*\
  !*** ./src/routing/NominatimService.js ***!
  \*****************************************/
/*! exports provided: NominatimService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NominatimService", function() { return NominatimService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
NominatimService.$inject = ["$http", "$injector", "ngeoDebounce"];


function NominatimService($http, $injector, ngeoDebounce) {
  this.$http_ = $http;
  this.ngeoDebounce_ = ngeoDebounce;
  this.nominatimUrl_ = 'https://nominatim.openstreetmap.org/';

  if ($injector.has('ngeoNominatimUrl')) {
    this.nominatimUrl_ = $injector.get('ngeoNominatimUrl');

    if (this.nominatimUrl_.substr(-1) !== '/') {
      this.nominatimUrl_ += '/';
    }
  }

  this.searchDefaultParams_ = {};

  if ($injector.has('ngeoNominatimSearchDefaultParams')) {
    this.searchDefaultParams_ = $injector.get('ngeoNominatimSearchDefaultParams');
  }

  this.typeaheadDebounceDelay_ = 500;
  this.typeaheadSourceDebounced = this.ngeoDebounce_(this.typeaheadSource_.bind(this), this.typeaheadDebounceDelay_, true);
}

NominatimService.prototype.search = function (query, params) {
  var url = this.nominatimUrl_ + "search?q=" + query;
  params = params || {};
  params = Object.assign({}, this.searchDefaultParams_, params);
  params.format = 'json';

  if (params) {
    url += '&';
    var options = [];

    for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
      var option = _Object$keys[_i];
      options.push(option + "=" + params[option]);
    }

    url += options.join('&');
  }

  return this.$http_.get(url);
};

NominatimService.prototype.reverse = function (coordinate, params) {
  var url = this.nominatimUrl_ + "reverse";
  params = Object.assign({}, params);
  params.lon = coordinate[0];
  params.lat = coordinate[1];
  params.format = 'json';

  if (params) {
    url += '?';
    var options = [];

    for (var _i2 = 0, _Object$keys2 = Object.keys(params); _i2 < _Object$keys2.length; _i2++) {
      var option = _Object$keys2[_i2];
      options.push(option + "=" + params[option]);
    }

    url += options.join('&');
  }

  return this.$http_.get(url);
};

NominatimService.prototype.typeaheadSource_ = function (query, syncResults, asyncResults) {
  var onSuccess_ = function onSuccess_(resp) {
    var parse = function parse(result) {
      return {
        coordinate: [result.lon, result.lat],
        name: result.display_name
      };
    };

    if (asyncResults) {
      asyncResults(resp.data.map(parse));
    } else {
      syncResults(resp.data.map(parse));
    }
  };

  var onError_ = function onError_(resp) {
    if (asyncResults) {
      asyncResults([]);
    } else {
      syncResults([]);
    }
  };

  this.search(query, {}).then(onSuccess_, onError_);
};

var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoNominatimService', [ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
module.service('ngeoNominatimService', NominatimService);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/routing/RoutingComponent.js":
/*!*****************************************!*\
  !*** ./src/routing/RoutingComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/misc/filters.js */ "./src/misc/filters.js");
/* harmony import */ var ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/routing/NominatimService.js */ "./src/routing/NominatimService.js");
/* harmony import */ var ngeo_routing_RoutingService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/routing/RoutingService.js */ "./src/routing/RoutingService.js");
/* harmony import */ var ngeo_routing_RoutingFeatureComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/routing/RoutingFeatureComponent.js */ "./src/routing/RoutingFeatureComponent.js");
/* harmony import */ var ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/geom/LineString.js */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngeo/sass/font.scss */ "./src/sass/font.scss");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");

















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingComponent', [ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, ngeo_routing_RoutingService_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, ngeo_routing_RoutingFeatureComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"].name]);
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/routing', __webpack_require__(/*! ./routing.html */ "./src/routing/routing.html"));
}]);
module.value('ngeoRoutingTemplateUrl', function ($attrs) {
  var templateUrl = $attrs.ngeoRoutingTemplateUrl;
  return templateUrl !== undefined ? templateUrl : 'ngeo/routing/routing';
});
ngeoRoutingTemplateUrl.$inject = ["$attrs", "ngeoRoutingTemplateUrl"];

function ngeoRoutingTemplateUrl($attrs, ngeoRoutingTemplateUrl) {
  return ngeoRoutingTemplateUrl($attrs);
}

var Controller = function () {
  Controller.$inject = ["$injector", "$scope", "ngeoRoutingService", "ngeoNominatimService", "$q", "ngeoDebounce"];

  function Controller($injector, $scope, ngeoRoutingService, ngeoNominatimService, $q, ngeoDebounce) {
    var _this = this;

    this.$scope_ = $scope;
    this.ngeoRoutingService_ = ngeoRoutingService;
    this.ngeoNominatimService_ = ngeoNominatimService;
    this.routingOptions_ = $injector.has('ngeoRoutingOptions') ? $injector.get('ngeoRoutingOptions') : {};
    this.routingProfiles = this.routingOptions_.profiles || [];
    this.selectedRoutingProfile = this.routingProfiles.length > 0 ? this.routingProfiles[0] : null;
    $scope.$watch(function () {
      return _this.selectedRoutingProfile;
    }, this.calculateRoute.bind(this));
    this.$q_ = $q;
    this.map = null;
    this.errorMessage = '';
    this.startFeature_ = null;
    this.targetFeature_ = null;
    this.viaArray = [];
    this.colors = {
      'start.fill': '#6BE62E',
      'start.stroke': '#4CB01E',
      'destination.fill': '#FF3E13',
      'destination.stroke': '#CD3412',
      'via.fill': '#767676',
      'via.stroke': '#000000'
    };
    this.routeSource_ = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      features: []
    });
    this.routeLayer_ = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      source: this.routeSource_,
      style: new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
        fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
          color: 'rgba(16, 112, 29, 0.6)'
        }),
        stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
          color: 'rgba(16, 112, 29, 0.6)',
          width: 5
        })
      })
    });
    this.routeDistance = 0;
    this.routeDuration = null;
    this.regexIsFormattedCoord = /\d+\.\d+\/\d+\.\d+/;
    this.draw_ = null;
    var debounceDelay = 200;
    this.handleChange = ngeoDebounce(this.calculateRoute.bind(this), debounceDelay, true);
  }

  var _proto = Controller.prototype;

  _proto.$onInit = function $onInit() {
    if (this.map) {
      this.map.addLayer(this.routeLayer_);
    }
  };

  _proto.clearRoute = function clearRoute() {
    this.startFeature_ = null;
    this.targetFeature_ = null;
    this.viaArray = [];
    this.routeDistance = 0;
    this.routeDuration = null;
    this.routeSource_.clear();
    this.errorMessage = '';
  };

  _proto.getLonLatFromPoint_ = function getLonLatFromPoint_(point) {
    if (!this.map) {
      return null;
    }

    var geometry = point.getGeometry();

    if (!(geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_16__["default"])) {
      throw new Error('Wrong time values type');
    }

    var coords = geometry.getCoordinates();
    var projection = this.map.getView().getProjection();
    return Object(ol_proj_js__WEBPACK_IMPORTED_MODULE_12__["toLonLat"])(coords, projection);
  };

  _proto.reverseRoute = function reverseRoute() {
    var tmpFeature = this.startFeature_;
    this.startFeature_ = this.targetFeature_;
    this.targetFeature_ = tmpFeature;
    this.viaArray = this.viaArray.reverse();
  };

  _proto.parseRoute_ = function parseRoute_(route) {
    if (!this.map) {
      return [];
    }

    var parsedRoutes = [];
    var format = new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    var formatConfig = {
      dataProjection: 'EPSG:4326',
      featureProjection: this.map.getView().getProjection()
    };

    if (route.legs) {
      var _ref;

      var parsedRoutes_ = route.legs.map(function (leg) {
        return leg.steps.map(function (step) {
          return new ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
            geometry: format.readGeometry(step.geometry, formatConfig)
          });
        });
      });
      parsedRoutes = (_ref = []).concat.apply(_ref, parsedRoutes_);
    } else if (route.geometry) {
      parsedRoutes.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
        geometry: format.readGeometry(route.geometry, formatConfig)
      }));
    }

    return parsedRoutes;
  };

  _proto.calculateRoute = function calculateRoute() {
    var _this2 = this;

    if (this.startFeature_ && this.targetFeature_) {
      this.routeSource_.clear();
      var coordFrom = this.getLonLatFromPoint_(this.startFeature_);
      var coordTo = this.getLonLatFromPoint_(this.targetFeature_);
      var vias = this.viaArray.filter(function (via) {
        return via.feature !== null;
      }).map(function (via) {
        return _this2.getLonLatFromPoint_(via.feature);
      });
      var route = [coordFrom].concat(vias, [coordTo]);

      var onSuccess_ = function onSuccess_(resp) {
        if (!_this2.map || !_this2.startFeature_ || !_this2.targetFeature_) {
          return null;
        }

        var features = _this2.parseRoute_(resp.data.routes[0]);

        if (features.length === 0) {
          console.log('No route or not supported format.');
          return;
        }

        _this2.routeSource_.addFeatures(features);

        _this2.map.getView().fit(_this2.routeSource_.getExtent());

        _this2.routeDistance = resp.data.routes[0].distance;
        _this2.routeDuration = resp.data.routes[0].duration;
        var startRoute = features[0].getGeometry().getCoordinateAt(0);
        var endRoute = features[features.length - 1].getGeometry().getCoordinateAt(1);
        var startToRoute = [_this2.startFeature_.getGeometry().getCoordinates(), startRoute];
        var routeToEnd = [endRoute, _this2.targetFeature_.getGeometry().getCoordinates()];
        var routeConnections = [new ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__["default"](new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_14__["default"](startToRoute)), new ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__["default"](new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_14__["default"](routeToEnd))];

        _this2.routeSource_.addFeatures(routeConnections);
      };

      var onError_ = function onError_(resp) {
        _this2.errorMessage = 'Error: routing server not responding.';
        console.log(resp);
      };

      var options = {};
      options.steps = true;
      options.overview = false;
      options.geometries = 'geojson';
      var config = {};
      config.options = options;

      if (this.selectedRoutingProfile) {
        config.instance = this.selectedRoutingProfile.profile;
      }

      this.$q_.when(this.ngeoRoutingService_.getRoute(route, config)).then(onSuccess_, onError_);
    }
  };

  _proto.addVia = function addVia() {
    this.viaArray.push({});
  };

  _proto.deleteVia = function deleteVia(index) {
    if (this.viaArray.length > index) {
      this.viaArray.splice(index, 1);
      this.calculateRoute();
    }
  };

  return Controller;
}();

module.component('ngeoRouting', {
  controller: Controller,
  bindings: {
    'map': '<ngeoRoutingMap'
  },
  templateUrl: ngeoRoutingTemplateUrl
});
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/routing/RoutingFeatureComponent.js":
/*!************************************************!*\
  !*** ./src/routing/RoutingFeatureComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/routing/NominatimService.js */ "./src/routing/NominatimService.js");
/* harmony import */ var ngeo_routing_NominatimInputComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/routing/NominatimInputComponent.js */ "./src/routing/NominatimInputComponent.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_Collection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Collection.js */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Text_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Text.js */ "./node_modules/ol/style/Text.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_interaction_Modify_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/interaction/Modify.js */ "./node_modules/ol/interaction/Modify.js");
/* harmony import */ var ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/interaction/Draw.js */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngeo/sass/font.scss */ "./src/sass/font.scss");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_15__);
















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingFeatureComponent', [ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_routing_NominatimInputComponent_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/routingfeature', __webpack_require__(/*! ./routingfeature.html */ "./src/routing/routingfeature.html"));
}]);
module.value('ngeoRoutingFeatureTemplateUrl', function ($attrs) {
  var templateUrl = $attrs.ngeoRoutingFeatureTemplateUrl;
  return templateUrl !== undefined ? templateUrl : 'ngeo/routing/routingfeature';
});
ngeoRoutingFeatureTemplateUrl.$inject = ["$attrs", "ngeoRoutingFeatureTemplateUrl"];

function ngeoRoutingFeatureTemplateUrl($attrs, ngeoRoutingFeatureTemplateUrl) {
  return ngeoRoutingFeatureTemplateUrl($attrs);
}

var Controller = function () {
  Controller.$inject = ["$scope", "$timeout", "$q", "ngeoNominatimService"];

  function Controller($scope, $timeout, $q, ngeoNominatimService) {
    var _this = this;

    this.scope_ = $scope;
    this.timeout_ = $timeout;
    this.$q_ = $q;
    this.ngeoNominatimService_ = ngeoNominatimService;
    this.map = null;
    this.feature = null;
    this.featureLabel = '';
    this.fillColor = '';
    this.strokeColor = '';
    this.onChange = null;
    this.vectorFeatures_ = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.vectorSource_ = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
      features: this.vectorFeatures_
    });
    this.vectorLayer_ = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      source: this.vectorSource_,
      style: function style(feature, resolution) {
        return [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
          text: new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
            fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
              color: _this.fillColor || '#000000'
            }),
            font: '900 30px "Font Awesome 5 Free"',
            offsetY: -15,
            stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
              width: 3,
              color: _this.strokeColor || '#000000'
            }),
            text: "\uF041"
          })
        })];
      }
    });
    this.modifyFeature_ = new ol_interaction_Modify_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      features: this.vectorFeatures_
    });
    this.draw_ = null;
    this.onSelect = this.onSelect_.bind(this);
    this.errorMessage = '';
  }

  var _proto = Controller.prototype;

  _proto.$onInit = function $onInit() {
    var _this2 = this;

    if (!this.map) {
      return;
    }

    this.map.addLayer(this.vectorLayer_);
    this.modifyFeature_.setActive(true);
    this.map.addInteraction(this.modifyFeature_);
    this.modifyFeature_.on('modifyend', function (event) {
      var feature = event.features.getArray()[0];

      _this2.vectorSource_.clear();

      _this2.snapFeature_(feature);
    });
    this.scope_.$watch(function () {
      return _this2.feature;
    }, function (newVal, oldVal) {
      if (newVal) {
        _this2.onFeatureChange_();
      }

      if (newVal === null) {
        _this2.vectorSource_.clear();

        _this2.featureLabel = '';
      }
    });
  };

  _proto.$onDestroy = function $onDestroy() {
    if (!this.map) {
      return;
    }

    this.map.removeLayer(this.vectorLayer_);
    this.modifyFeature_.setActive(false);
    this.map.removeInteraction(this.modifyFeature_);
  };

  _proto.set = function set() {
    var _this3 = this;

    if (!this.map) {
      return;
    }

    if (this.draw_) {
      this.map.removeInteraction(this.draw_);
    }

    this.draw_ = new ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
      features: this.vectorFeatures_,
      type: 'Point'
    });
    this.draw_.on('drawstart', function () {
      if (_this3.feature) {
        _this3.vectorSource_.removeFeature(_this3.feature);
      }
    });
    this.draw_.on('drawend', function (event) {
      if (_this3.draw_ && _this3.map) {
        _this3.map.removeInteraction(_this3.draw_);
      }

      _this3.snapFeature_(event.feature);

      _this3.modifyFeature_.setActive(true);
    });
    this.modifyFeature_.setActive(false);
    this.map.addInteraction(this.draw_);
  };

  _proto.setFeature_ = function setFeature_(coordinate, label) {
    if (!this.map) {
      return;
    }

    var transformedCoordinate = ol_proj_js__WEBPACK_IMPORTED_MODULE_3__["fromLonLat"](coordinate, this.map.getView().getProjection());

    if (label === '') {
      label = transformedCoordinate.join('/');
    }

    this.feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"](transformedCoordinate),
      name: label
    });
  };

  _proto.onFeatureChange_ = function onFeatureChange_() {
    var _this4 = this;

    if (!this.feature) {
      return;
    }

    this.featureLabel = this.feature.get('name') || '';
    this.vectorSource_.clear();
    this.vectorSource_.addFeature(this.feature);

    if (this.onChange) {
      this.timeout_(function () {
        if (_this4.feature && _this4.onChange) {
          _this4.onChange(_this4.feature);
        }
      });
    }
  };

  _proto.onSelect_ = function onSelect_(selected) {
    if (!this.feature || !this.map) {
      return;
    }

    var coordinate = selected.coordinate.map(parseFloat);
    var label = selected.label;
    this.setFeature_(coordinate, label);
    var newCoordinates = this.feature.getGeometry().getCoordinates();
    this.map.getView().setCenter(newCoordinates);
  };

  _proto.snapFeature_ = function snapFeature_(feature) {
    var _this5 = this;

    var coord = this.getLonLatFromPoint_(feature);

    if (!coord) {
      return;
    }

    var config = {};

    var onSuccess = function onSuccess(resp) {
      var lon = parseFloat(resp.data.lon);
      var lat = parseFloat(resp.data.lat);
      var coordinate = [lon, lat];
      var label = resp.data.display_name;

      _this5.setFeature_(coordinate, label);
    };

    var onError = function onError(resp) {
      _this5.errorMessage = 'Error: nominatim server not responding.';
      console.log(resp);
    };

    this.$q_.when(this.ngeoNominatimService_.reverse(coord, config)).then(onSuccess, onError);
  };

  _proto.getLonLatFromPoint_ = function getLonLatFromPoint_(point) {
    if (!this.map) {
      return null;
    }

    var geometry = point.getGeometry();

    if (!(geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"])) {
      throw new Error('Wrong time values type');
    }

    var coords = geometry.getCoordinates();
    var projection = this.map.getView().getProjection();
    return ol_proj_js__WEBPACK_IMPORTED_MODULE_3__["toLonLat"](coords, projection);
  };

  return Controller;
}();

var routingFeatureComponent = {
  controller: Controller,
  bindings: {
    'map': '<ngeoRoutingFeatureMap',
    'feature': '=ngeoRoutingFeatureFeature',
    'fillColor': '<?ngeoRoutingFeatureFillColor',
    'strokeColor': '<?ngeoRoutingFeatureStrokeColor',
    'onChange': '=?ngeoRoutingFeatureOnChange'
  },
  templateUrl: ngeoRoutingFeatureTemplateUrl
};
module.component('ngeoRoutingFeature', routingFeatureComponent);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/routing/RoutingService.js":
/*!***************************************!*\
  !*** ./src/routing/RoutingService.js ***!
  \***************************************/
/*! exports provided: RoutingService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
RoutingService.$inject = ["$http", "$injector"];

function RoutingService($http, $injector) {
  this.$http_ = $http;
  this.routingOptions_ = $injector.has('ngeoRoutingOptions') ? $injector.get('ngeoRoutingOptions') : {};
  this.ngeoOsrmBackendUrl_ = this.routingOptions_.backendUrl || 'https://router.project-osrm.org/';

  if (this.ngeoOsrmBackendUrl_.substr(-1) !== '/') {
    this.ngeoOsrmBackendUrl_ += '/';
  }

  this.protocolVersion_ = 'v1';
}

RoutingService.prototype.getRoute = function (coordinates, config) {
  config = config || {};

  if (!config.service) {
    config.service = 'route';
  }

  if (!config.profile) {
    config.profile = 'car';
  }

  var url = this.ngeoOsrmBackendUrl_;

  if (config.instance) {
    url += config.instance + "/";
  }

  url += config.service + "/" + this.protocolVersion_ + "/" + config.profile + "/";
  var coordinateString = coordinates.map(function (c) {
    return c.join(',');
  }).join(';');
  url += coordinateString;

  if (config.options) {
    url += '?';
    var options = [];

    for (var _i = 0, _Object$keys = Object.keys(config.options); _i < _Object$keys.length; _i++) {
      var option = _Object$keys[_i];
      options.push(option + "=" + config.options[option]);
    }

    url += options.join('&');
  }

  return this.$http_.get(url);
};

RoutingService.prototype.getNearest = function (coordinate, config) {
  config = config || {};
  config.service = 'nearest';

  if (!config.profile) {
    config.profile = 'car';
  }

  var url = this.ngeoOsrmBackendUrl_;

  if (config.instance) {
    url += config.instance + "/";
  }

  url += config.service + "/" + this.protocolVersion_ + "/" + config.profile + "/";
  var coordinateString = coordinate.join(',');
  url += coordinateString;

  if (config.options) {
    url += '?';
    var options = [];

    for (var _i2 = 0, _Object$keys2 = Object.keys(config.options); _i2 < _Object$keys2.length; _i2++) {
      var option = _Object$keys2[_i2];
      options.push(option + "=" + config.options[option]);
    }

    url += options.join('&');
  }

  return this.$http_.get(url);
};

var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingService', []);
module.service('ngeoRoutingService', RoutingService);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/routing/module.js":
/*!*******************************!*\
  !*** ./src/routing/module.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_routing_RoutingComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/routing/RoutingComponent.js */ "./src/routing/RoutingComponent.js");
/* harmony import */ var _routing_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing.scss */ "./src/routing/routing.scss");
/* harmony import */ var _routing_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routing_scss__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingModule', [ngeo_routing_RoutingComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]));

/***/ }),

/***/ "./src/routing/nominatiminput.html":
/*!*****************************************!*\
  !*** ./src/routing/nominatiminput.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-nominatim-input">\n  <input type="text"\n         class="form-control"\n         placeholder="{{$ctrl.placeholder}}"\n         ng-model="$ctrl.inputValue"\n         ngeo-search="$ctrl.options"\n         ngeo-search-datasets="$ctrl.datasets"\n         ngeo-search-listeners="$ctrl.listeners">\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./src/routing/routing.html":
/*!**********************************!*\
  !*** ./src/routing/routing.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-routing">\n  <div class="ngeo-routing-start form-group">\n    <ngeo-routing-feature\n      ngeo-routing-feature-map="$ctrl.map"\n      ngeo-routing-feature-feature="$ctrl.startFeature_"\n      ngeo-routing-feature-fill-color="$ctrl.colors[\'start.fill\']"\n      ngeo-routing-feature-stroke-color="$ctrl.colors[\'start.stroke\']"\n      ngeo-routing-feature-on-change="$ctrl.handleChange">\n    </ngeo-routing-feature>\n  </div>\n\n    <div class="ngeo-routing-vias form-group" ng-repeat="(index, via) in $ctrl.viaArray">\n      <div class="form-inline">\n        <div class="form-group">\n          <ngeo-routing-feature\n            ngeo-routing-feature-map="$ctrl.map"\n            ngeo-routing-feature-feature="via.feature"\n            ngeo-routing-feature-fill-color="$ctrl.colors[\'via.fill\']"\n            ngeo-routing-feature-stroke-color="$ctrl.colors[\'via.stroke\']"\n            ngeo-routing-feature-on-change="$ctrl.handleChange">\n          </ngeo-routing-feature>\n        </div>\n        <button type="button" class="btn prime delete-via" ng-click="$ctrl.deleteVia(index)">\n          <span class="fa fa-trash"></span>\n        </button>\n      </div>\n    </div>\n\n  <div class="ngeo-routing-destination form-group">\n    <ngeo-routing-feature\n      ngeo-routing-feature-map="$ctrl.map"\n      ngeo-routing-feature-feature="$ctrl.targetFeature_"\n      ngeo-routing-feature-fill-color="$ctrl.colors[\'destination.fill\']"\n      ngeo-routing-feature-stroke-color="$ctrl.colors[\'destination.stroke\']"\n      ngeo-routing-feature-on-change="$ctrl.handleChange">\n    </ngeo-routing-feature>\n  </div>\n\n  <div class="form-group fill">\n    <button type="button" class="btn prime" ng-click="$ctrl.clearRoute()">\n      <span class="fa fa-trash"></span> <span translate>Clear</span>\n    </button>\n    <button type="button" class="btn prime" ng-click="$ctrl.reverseRoute()">\n      <span class="fa fa-exchange-alt"></span> <span translate>Reverse</span>\n    </button>\n    <button type="button" class="btn prime" ng-click="$ctrl.addVia()">\n      <span class="fa fa-plus"></span> <span translate>Add via</span>\n    </button>\n  </div>\n\n  <div class="clearfix"></div>\n\n  <div ng-if="$ctrl.routingProfiles.length > 1">\n    <div class="form-group">\n      <label class="col-form-label col-md-4" translate>Profile</label>\n      <div class="col-md-8">\n        <select class="form-control" ng-model="$ctrl.selectedRoutingProfile">\n          <option ng-repeat="profile in $ctrl.routingProfiles" ng-value="profile">{{profile.label}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class="ngeo-routing-error form-group clearfix"\n       ng-hide="$ctrl.errorMessage === \'\'">\n    {{$ctrl.errorMessage}}\n  </div>\n\n  <div class="clearfix"></div>\n\n  <div ng-hide="$ctrl.routeDuration === null && $ctrl.routeDistance <= 0">\n    <div class="row">\n      <div class="col-md-12">\n        <strong translate>Route statistics</strong>\n      </div>\n    </div>\n    <div class="row" ng-hide="$ctrl.routeDuration === null">\n      <div class="col-md-4 text-right" translate>\n        Duration\n      </div>\n      <div class="col-md-8">\n        {{$ctrl.routeDuration | ngeoDuration}}\n      </div>\n    </div>\n\n    <div class="row" ng-hide="$ctrl.routeDistance <= 0">\n      <div class="col-md-4 text-right" translate>\n        Distance\n      </div>\n      <div class="col-md-8">\n        {{$ctrl.routeDistance | ngeoUnitPrefix:\'m\'}}\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./src/routing/routing.scss":
/*!**********************************!*\
  !*** ./src/routing/routing.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/routing/routingfeature.html":
/*!*****************************************!*\
  !*** ./src/routing/routingfeature.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="ngeo-routing-feature">\n    <div class="input-group">\n      <ngeo-nominatim-input\n        ngeo-nominatim-input-value="$ctrl.featureLabel"\n        ngeo-nominatim-input-placeholder="{{\'Search...\' | translate}}"\n        ngeo-nominatim-input-on-select="$ctrl.onSelect">\n      </ngeo-nominatim-input>\n      <div class="input-group-addon btn" ng-click="$ctrl.set()">\n        <span class="fa fa-map-marker"></span>\n      </div>\n    </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ 36:
/*!****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/routing.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/routing.js */"./examples/routing.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0aW5nL05vbWluYXRpbUlucHV0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvUm91dGluZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9Sb3V0aW5nRmVhdHVyZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9Sb3V0aW5nU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvbm9taW5hdGltaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9yb3V0aW5nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvcm91dGluZ2ZlYXR1cmUuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicm91dGluZ1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFszNixcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgJy4vcm91dGluZy5jc3MnO1xuaW1wb3J0ICdvbC9vbC5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9mb250YXdlc29tZS5taW4uY3NzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9NYXBNb2R1bGUgZnJvbSAnbmdlby9tYXAvbW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvUm91dGluZ01vZHVsZSBmcm9tICduZ2VvL3JvdXRpbmcvbW9kdWxlLmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3LmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWydnZXR0ZXh0Jywgbmdlb01hcE1vZHVsZS5uYW1lLCBuZ2VvUm91dGluZ01vZHVsZS5uYW1lXSk7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCkge1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKClcbiAgICB9KV0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBjZW50ZXI6IFs5MzEwMTAuMTUzNTk4OTQ0MiwgNTk2MTcwNS44NDIyOTcyNTRdLFxuICAgICAgem9vbTogOVxuICAgIH0pXG4gIH0pO1xuICB0aGlzLnJvdXRpbmdmZWF0dXJlQWN0aXZlID0gdHJ1ZTtcbn1cblxubW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRlbGVtZW50XCIsIFwiJHNjb3BlXCIsIFwibmdlb05vbWluYXRpbVNlcnZpY2VcIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvU2VhcmNoU2VhcmNoRGlyZWN0aXZlIGZyb20gJ25nZW8vc2VhcmNoL3NlYXJjaERpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgbmdlb1JvdXRpbmdOb21pbmF0aW1TZXJ2aWNlIGZyb20gJ25nZW8vcm91dGluZy9Ob21pbmF0aW1TZXJ2aWNlLmpzJztcbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudCcsIFtuZ2VvU2VhcmNoU2VhcmNoRGlyZWN0aXZlLm5hbWUsIG5nZW9Sb3V0aW5nTm9taW5hdGltU2VydmljZS5uYW1lXSk7XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ25nZW8vcm91dGluZy9ub21pbmF0aW1pbnB1dCcsIHJlcXVpcmUoJy4vbm9taW5hdGltaW5wdXQuaHRtbCcpKTtcbn1dKTtcbm1vZHVsZS52YWx1ZSgnbmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudFRlbXBsYXRlVXJsJywgZnVuY3Rpb24gKCRhdHRycykge1xuICB2YXIgdGVtcGxhdGVVcmwgPSAkYXR0cnMubmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudFRlbXBsYXRlVXJsO1xuICByZXR1cm4gdGVtcGxhdGVVcmwgIT09IHVuZGVmaW5lZCA/IHRlbXBsYXRlVXJsIDogJ25nZW8vcm91dGluZy9ub21pbmF0aW1pbnB1dCc7XG59KTtcbm5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnRUZW1wbGF0ZVVybC4kaW5qZWN0ID0gW1wiJGF0dHJzXCIsIFwibmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudFRlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBuZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmwoJGF0dHJzLCBuZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmwpIHtcbiAgcmV0dXJuIG5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnRUZW1wbGF0ZVVybCgkYXR0cnMpO1xufVxuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRlbGVtZW50LCAkc2NvcGUsIG5nZW9Ob21pbmF0aW1TZXJ2aWNlKSB7XG4gIHRoaXMuZWxlbWVudF8gPSAkZWxlbWVudDtcbiAgdGhpcy4kc2NvcGVfID0gJHNjb3BlO1xuICB0aGlzLm5nZW9Ob21pbmF0aW1TZXJ2aWNlID0gbmdlb05vbWluYXRpbVNlcnZpY2U7XG4gIHRoaXMub25TZWxlY3QgPSBudWxsO1xuICB0aGlzLmlucHV0VmFsdWUgPSBudWxsO1xuICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgdGhpcy5kYXRhc2V0cyA9IFt7XG4gICAgbmFtZTogJ25vbWluYXRpbScsXG4gICAgZGlzcGxheTogJ25hbWUnLFxuICAgIHNvdXJjZTogdGhpcy5uZ2VvTm9taW5hdGltU2VydmljZS50eXBlYWhlYWRTb3VyY2VEZWJvdW5jZWRcbiAgfV07XG4gIHRoaXMubGlzdGVuZXJzID0ge1xuICAgIHNlbGVjdDogdGhpcy5zZWxlY3RfLmJpbmQodGhpcylcbiAgfTtcbiAgdGhpcy5wbGFjZWhvbGRlciA9ICcnO1xufVxuXG5Db250cm9sbGVyLnByb3RvdHlwZS5zZWxlY3RfID0gZnVuY3Rpb24gKGV2ZW50LCBzdWdnZXN0aW9uLCBkYXRhc2V0KSB7XG4gIGlmICh0aGlzLm9uU2VsZWN0KSB7XG4gICAgdGhpcy5vblNlbGVjdChzdWdnZXN0aW9uKTtcbiAgfVxufTtcblxudmFyIHJvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudCA9IHtcbiAgY29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICAnb25TZWxlY3QnOiAnPT9uZ2VvTm9taW5hdGltSW5wdXRPblNlbGVjdCcsXG4gICAgJ2lucHV0VmFsdWUnOiAnPT9uZ2VvTm9taW5hdGltSW5wdXRWYWx1ZScsXG4gICAgJ3BsYWNlaG9sZGVyJzogJ0A/bmdlb05vbWluYXRpbUlucHV0UGxhY2Vob2xkZXInXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiBuZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmxcbn07XG5tb2R1bGUuY29tcG9uZW50KCduZ2VvTm9taW5hdGltSW5wdXQnLCByb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnQpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIk5vbWluYXRpbVNlcnZpY2UuJGluamVjdCA9IFtcIiRodHRwXCIsIFwiJGluamVjdG9yXCIsIFwibmdlb0RlYm91bmNlXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb01pc2NEZWJvdW5jZSBmcm9tICduZ2VvL21pc2MvZGVib3VuY2UuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIE5vbWluYXRpbVNlcnZpY2UoJGh0dHAsICRpbmplY3Rvciwgbmdlb0RlYm91bmNlKSB7XG4gIHRoaXMuJGh0dHBfID0gJGh0dHA7XG4gIHRoaXMubmdlb0RlYm91bmNlXyA9IG5nZW9EZWJvdW5jZTtcbiAgdGhpcy5ub21pbmF0aW1VcmxfID0gJ2h0dHBzOi8vbm9taW5hdGltLm9wZW5zdHJlZXRtYXAub3JnLyc7XG5cbiAgaWYgKCRpbmplY3Rvci5oYXMoJ25nZW9Ob21pbmF0aW1VcmwnKSkge1xuICAgIHRoaXMubm9taW5hdGltVXJsXyA9ICRpbmplY3Rvci5nZXQoJ25nZW9Ob21pbmF0aW1VcmwnKTtcblxuICAgIGlmICh0aGlzLm5vbWluYXRpbVVybF8uc3Vic3RyKC0xKSAhPT0gJy8nKSB7XG4gICAgICB0aGlzLm5vbWluYXRpbVVybF8gKz0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuc2VhcmNoRGVmYXVsdFBhcmFtc18gPSB7fTtcblxuICBpZiAoJGluamVjdG9yLmhhcygnbmdlb05vbWluYXRpbVNlYXJjaERlZmF1bHRQYXJhbXMnKSkge1xuICAgIHRoaXMuc2VhcmNoRGVmYXVsdFBhcmFtc18gPSAkaW5qZWN0b3IuZ2V0KCduZ2VvTm9taW5hdGltU2VhcmNoRGVmYXVsdFBhcmFtcycpO1xuICB9XG5cbiAgdGhpcy50eXBlYWhlYWREZWJvdW5jZURlbGF5XyA9IDUwMDtcbiAgdGhpcy50eXBlYWhlYWRTb3VyY2VEZWJvdW5jZWQgPSB0aGlzLm5nZW9EZWJvdW5jZV8odGhpcy50eXBlYWhlYWRTb3VyY2VfLmJpbmQodGhpcyksIHRoaXMudHlwZWFoZWFkRGVib3VuY2VEZWxheV8sIHRydWUpO1xufVxuXG5Ob21pbmF0aW1TZXJ2aWNlLnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAocXVlcnksIHBhcmFtcykge1xuICB2YXIgdXJsID0gdGhpcy5ub21pbmF0aW1VcmxfICsgXCJzZWFyY2g/cT1cIiArIHF1ZXJ5O1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VhcmNoRGVmYXVsdFBhcmFtc18sIHBhcmFtcyk7XG4gIHBhcmFtcy5mb3JtYXQgPSAnanNvbic7XG5cbiAgaWYgKHBhcmFtcykge1xuICAgIHVybCArPSAnJic7XG4gICAgdmFyIG9wdGlvbnMgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgb3B0aW9uID0gX09iamVjdCRrZXlzW19pXTtcbiAgICAgIG9wdGlvbnMucHVzaChvcHRpb24gKyBcIj1cIiArIHBhcmFtc1tvcHRpb25dKTtcbiAgICB9XG5cbiAgICB1cmwgKz0gb3B0aW9ucy5qb2luKCcmJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy4kaHR0cF8uZ2V0KHVybCk7XG59O1xuXG5Ob21pbmF0aW1TZXJ2aWNlLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKGNvb3JkaW5hdGUsIHBhcmFtcykge1xuICB2YXIgdXJsID0gdGhpcy5ub21pbmF0aW1VcmxfICsgXCJyZXZlcnNlXCI7XG4gIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk7XG4gIHBhcmFtcy5sb24gPSBjb29yZGluYXRlWzBdO1xuICBwYXJhbXMubGF0ID0gY29vcmRpbmF0ZVsxXTtcbiAgcGFyYW1zLmZvcm1hdCA9ICdqc29uJztcblxuICBpZiAocGFyYW1zKSB7XG4gICAgdXJsICs9ICc/JztcbiAgICB2YXIgb3B0aW9ucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMCwgX09iamVjdCRrZXlzMiA9IE9iamVjdC5rZXlzKHBhcmFtcyk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIG9wdGlvbiA9IF9PYmplY3Qka2V5czJbX2kyXTtcbiAgICAgIG9wdGlvbnMucHVzaChvcHRpb24gKyBcIj1cIiArIHBhcmFtc1tvcHRpb25dKTtcbiAgICB9XG5cbiAgICB1cmwgKz0gb3B0aW9ucy5qb2luKCcmJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy4kaHR0cF8uZ2V0KHVybCk7XG59O1xuXG5Ob21pbmF0aW1TZXJ2aWNlLnByb3RvdHlwZS50eXBlYWhlYWRTb3VyY2VfID0gZnVuY3Rpb24gKHF1ZXJ5LCBzeW5jUmVzdWx0cywgYXN5bmNSZXN1bHRzKSB7XG4gIHZhciBvblN1Y2Nlc3NfID0gZnVuY3Rpb24gb25TdWNjZXNzXyhyZXNwKSB7XG4gICAgdmFyIHBhcnNlID0gZnVuY3Rpb24gcGFyc2UocmVzdWx0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb29yZGluYXRlOiBbcmVzdWx0LmxvbiwgcmVzdWx0LmxhdF0sXG4gICAgICAgIG5hbWU6IHJlc3VsdC5kaXNwbGF5X25hbWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlmIChhc3luY1Jlc3VsdHMpIHtcbiAgICAgIGFzeW5jUmVzdWx0cyhyZXNwLmRhdGEubWFwKHBhcnNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bmNSZXN1bHRzKHJlc3AuZGF0YS5tYXAocGFyc2UpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uRXJyb3JfID0gZnVuY3Rpb24gb25FcnJvcl8ocmVzcCkge1xuICAgIGlmIChhc3luY1Jlc3VsdHMpIHtcbiAgICAgIGFzeW5jUmVzdWx0cyhbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN5bmNSZXN1bHRzKFtdKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5zZWFyY2gocXVlcnksIHt9KS50aGVuKG9uU3VjY2Vzc18sIG9uRXJyb3JfKTtcbn07XG5cbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb05vbWluYXRpbVNlcnZpY2UnLCBbbmdlb01pc2NEZWJvdW5jZS5uYW1lXSk7XG5tb2R1bGUuc2VydmljZSgnbmdlb05vbWluYXRpbVNlcnZpY2UnLCBOb21pbmF0aW1TZXJ2aWNlKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgbmdlb01pc2NGaWx0ZXJzIGZyb20gJ25nZW8vbWlzYy9maWx0ZXJzLmpzJztcbmltcG9ydCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UuanMnO1xuaW1wb3J0IG5nZW9Sb3V0aW5nUm91dGluZ1NlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL1JvdXRpbmdTZXJ2aWNlLmpzJztcbmltcG9ydCBuZ2VvUm91dGluZ1JvdXRpbmdGZWF0dXJlQ29tcG9uZW50IGZyb20gJ25nZW8vcm91dGluZy9Sb3V0aW5nRmVhdHVyZUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgb2xGb3JtYXRHZW9KU09OIGZyb20gJ29sL2Zvcm1hdC9HZW9KU09OLmpzJztcbmltcG9ydCBvbFNvdXJjZVZlY3RvciBmcm9tICdvbC9zb3VyY2UvVmVjdG9yLmpzJztcbmltcG9ydCBvbExheWVyVmVjdG9yIGZyb20gJ29sL2xheWVyL1ZlY3Rvci5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0eWxlIGZyb20gJ29sL3N0eWxlL1N0eWxlLmpzJztcbmltcG9ydCBvbFN0eWxlRmlsbCBmcm9tICdvbC9zdHlsZS9GaWxsLmpzJztcbmltcG9ydCBvbFN0eWxlU3Ryb2tlIGZyb20gJ29sL3N0eWxlL1N0cm9rZS5qcyc7XG5pbXBvcnQgeyB0b0xvbkxhdCB9IGZyb20gJ29sL3Byb2ouanMnO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlLmpzJztcbmltcG9ydCBvbEdlb21MaW5lU3RyaW5nIGZyb20gJ29sL2dlb20vTGluZVN0cmluZy5qcyc7XG5pbXBvcnQgJ25nZW8vc2Fzcy9mb250LnNjc3MnO1xuaW1wb3J0IFBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvUm91dGluZ0NvbXBvbmVudCcsIFtuZ2VvTWlzY0RlYm91bmNlLm5hbWUsIG5nZW9NaXNjRmlsdGVycy5uYW1lLCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UubmFtZSwgbmdlb1JvdXRpbmdSb3V0aW5nU2VydmljZS5uYW1lLCBuZ2VvUm91dGluZ1JvdXRpbmdGZWF0dXJlQ29tcG9uZW50Lm5hbWVdKTtcbm1vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnbmdlby9yb3V0aW5nL3JvdXRpbmcnLCByZXF1aXJlKCcuL3JvdXRpbmcuaHRtbCcpKTtcbn1dKTtcbm1vZHVsZS52YWx1ZSgnbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uICgkYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gJGF0dHJzLm5nZW9Sb3V0aW5nVGVtcGxhdGVVcmw7XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnbmdlby9yb3V0aW5nL3JvdXRpbmcnO1xufSk7XG5uZ2VvUm91dGluZ1RlbXBsYXRlVXJsLiRpbmplY3QgPSBbXCIkYXR0cnNcIiwgXCJuZ2VvUm91dGluZ1RlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBuZ2VvUm91dGluZ1RlbXBsYXRlVXJsKCRhdHRycywgbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCkge1xuICByZXR1cm4gbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCgkYXR0cnMpO1xufVxuXG52YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGluamVjdG9yXCIsIFwiJHNjb3BlXCIsIFwibmdlb1JvdXRpbmdTZXJ2aWNlXCIsIFwibmdlb05vbWluYXRpbVNlcnZpY2VcIiwgXCIkcVwiLCBcIm5nZW9EZWJvdW5jZVwiXTtcblxuICBmdW5jdGlvbiBDb250cm9sbGVyKCRpbmplY3RvciwgJHNjb3BlLCBuZ2VvUm91dGluZ1NlcnZpY2UsIG5nZW9Ob21pbmF0aW1TZXJ2aWNlLCAkcSwgbmdlb0RlYm91bmNlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJHNjb3BlXyA9ICRzY29wZTtcbiAgICB0aGlzLm5nZW9Sb3V0aW5nU2VydmljZV8gPSBuZ2VvUm91dGluZ1NlcnZpY2U7XG4gICAgdGhpcy5uZ2VvTm9taW5hdGltU2VydmljZV8gPSBuZ2VvTm9taW5hdGltU2VydmljZTtcbiAgICB0aGlzLnJvdXRpbmdPcHRpb25zXyA9ICRpbmplY3Rvci5oYXMoJ25nZW9Sb3V0aW5nT3B0aW9ucycpID8gJGluamVjdG9yLmdldCgnbmdlb1JvdXRpbmdPcHRpb25zJykgOiB7fTtcbiAgICB0aGlzLnJvdXRpbmdQcm9maWxlcyA9IHRoaXMucm91dGluZ09wdGlvbnNfLnByb2ZpbGVzIHx8IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3V0aW5nUHJvZmlsZSA9IHRoaXMucm91dGluZ1Byb2ZpbGVzLmxlbmd0aCA+IDAgPyB0aGlzLnJvdXRpbmdQcm9maWxlc1swXSA6IG51bGw7XG4gICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc2VsZWN0ZWRSb3V0aW5nUHJvZmlsZTtcbiAgICB9LCB0aGlzLmNhbGN1bGF0ZVJvdXRlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuJHFfID0gJHE7XG4gICAgdGhpcy5tYXAgPSBudWxsO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgdGhpcy5zdGFydEZlYXR1cmVfID0gbnVsbDtcbiAgICB0aGlzLnRhcmdldEZlYXR1cmVfID0gbnVsbDtcbiAgICB0aGlzLnZpYUFycmF5ID0gW107XG4gICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAnc3RhcnQuZmlsbCc6ICcjNkJFNjJFJyxcbiAgICAgICdzdGFydC5zdHJva2UnOiAnIzRDQjAxRScsXG4gICAgICAnZGVzdGluYXRpb24uZmlsbCc6ICcjRkYzRTEzJyxcbiAgICAgICdkZXN0aW5hdGlvbi5zdHJva2UnOiAnI0NEMzQxMicsXG4gICAgICAndmlhLmZpbGwnOiAnIzc2NzY3NicsXG4gICAgICAndmlhLnN0cm9rZSc6ICcjMDAwMDAwJ1xuICAgIH07XG4gICAgdGhpcy5yb3V0ZVNvdXJjZV8gPSBuZXcgb2xTb3VyY2VWZWN0b3Ioe1xuICAgICAgZmVhdHVyZXM6IFtdXG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZUxheWVyXyA9IG5ldyBvbExheWVyVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogdGhpcy5yb3V0ZVNvdXJjZV8sXG4gICAgICBzdHlsZTogbmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgICAgIGZpbGw6IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDE2LCAxMTIsIDI5LCAwLjYpJ1xuICAgICAgICB9KSxcbiAgICAgICAgc3Ryb2tlOiBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDE2LCAxMTIsIDI5LCAwLjYpJyxcbiAgICAgICAgICB3aWR0aDogNVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlRGlzdGFuY2UgPSAwO1xuICAgIHRoaXMucm91dGVEdXJhdGlvbiA9IG51bGw7XG4gICAgdGhpcy5yZWdleElzRm9ybWF0dGVkQ29vcmQgPSAvXFxkK1xcLlxcZCtcXC9cXGQrXFwuXFxkKy87XG4gICAgdGhpcy5kcmF3XyA9IG51bGw7XG4gICAgdmFyIGRlYm91bmNlRGVsYXkgPSAyMDA7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSBuZ2VvRGVib3VuY2UodGhpcy5jYWxjdWxhdGVSb3V0ZS5iaW5kKHRoaXMpLCBkZWJvdW5jZURlbGF5LCB0cnVlKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb250cm9sbGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uJG9uSW5pdCA9IGZ1bmN0aW9uICRvbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLnJvdXRlTGF5ZXJfKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyUm91dGUgPSBmdW5jdGlvbiBjbGVhclJvdXRlKCkge1xuICAgIHRoaXMuc3RhcnRGZWF0dXJlXyA9IG51bGw7XG4gICAgdGhpcy50YXJnZXRGZWF0dXJlXyA9IG51bGw7XG4gICAgdGhpcy52aWFBcnJheSA9IFtdO1xuICAgIHRoaXMucm91dGVEaXN0YW5jZSA9IDA7XG4gICAgdGhpcy5yb3V0ZUR1cmF0aW9uID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlU291cmNlXy5jbGVhcigpO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gIH07XG5cbiAgX3Byb3RvLmdldExvbkxhdEZyb21Qb2ludF8gPSBmdW5jdGlvbiBnZXRMb25MYXRGcm9tUG9pbnRfKHBvaW50KSB7XG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGdlb21ldHJ5ID0gcG9pbnQuZ2V0R2VvbWV0cnkoKTtcblxuICAgIGlmICghKGdlb21ldHJ5IGluc3RhbmNlb2YgUG9pbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIHRpbWUgdmFsdWVzIHR5cGUnKTtcbiAgICB9XG5cbiAgICB2YXIgY29vcmRzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICB2YXIgcHJvamVjdGlvbiA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgcmV0dXJuIHRvTG9uTGF0KGNvb3JkcywgcHJvamVjdGlvbik7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2VSb3V0ZSA9IGZ1bmN0aW9uIHJldmVyc2VSb3V0ZSgpIHtcbiAgICB2YXIgdG1wRmVhdHVyZSA9IHRoaXMuc3RhcnRGZWF0dXJlXztcbiAgICB0aGlzLnN0YXJ0RmVhdHVyZV8gPSB0aGlzLnRhcmdldEZlYXR1cmVfO1xuICAgIHRoaXMudGFyZ2V0RmVhdHVyZV8gPSB0bXBGZWF0dXJlO1xuICAgIHRoaXMudmlhQXJyYXkgPSB0aGlzLnZpYUFycmF5LnJldmVyc2UoKTtcbiAgfTtcblxuICBfcHJvdG8ucGFyc2VSb3V0ZV8gPSBmdW5jdGlvbiBwYXJzZVJvdXRlXyhyb3V0ZSkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VkUm91dGVzID0gW107XG4gICAgdmFyIGZvcm1hdCA9IG5ldyBvbEZvcm1hdEdlb0pTT04oKTtcbiAgICB2YXIgZm9ybWF0Q29uZmlnID0ge1xuICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKClcbiAgICB9O1xuXG4gICAgaWYgKHJvdXRlLmxlZ3MpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICB2YXIgcGFyc2VkUm91dGVzXyA9IHJvdXRlLmxlZ3MubWFwKGZ1bmN0aW9uIChsZWcpIHtcbiAgICAgICAgcmV0dXJuIGxlZy5zdGVwcy5tYXAoZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgICByZXR1cm4gbmV3IG9sRmVhdHVyZSh7XG4gICAgICAgICAgICBnZW9tZXRyeTogZm9ybWF0LnJlYWRHZW9tZXRyeShzdGVwLmdlb21ldHJ5LCBmb3JtYXRDb25maWcpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBwYXJzZWRSb3V0ZXMgPSAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgcGFyc2VkUm91dGVzXyk7XG4gICAgfSBlbHNlIGlmIChyb3V0ZS5nZW9tZXRyeSkge1xuICAgICAgcGFyc2VkUm91dGVzLnB1c2gobmV3IG9sRmVhdHVyZSh7XG4gICAgICAgIGdlb21ldHJ5OiBmb3JtYXQucmVhZEdlb21ldHJ5KHJvdXRlLmdlb21ldHJ5LCBmb3JtYXRDb25maWcpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZFJvdXRlcztcbiAgfTtcblxuICBfcHJvdG8uY2FsY3VsYXRlUm91dGUgPSBmdW5jdGlvbiBjYWxjdWxhdGVSb3V0ZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLnN0YXJ0RmVhdHVyZV8gJiYgdGhpcy50YXJnZXRGZWF0dXJlXykge1xuICAgICAgdGhpcy5yb3V0ZVNvdXJjZV8uY2xlYXIoKTtcbiAgICAgIHZhciBjb29yZEZyb20gPSB0aGlzLmdldExvbkxhdEZyb21Qb2ludF8odGhpcy5zdGFydEZlYXR1cmVfKTtcbiAgICAgIHZhciBjb29yZFRvID0gdGhpcy5nZXRMb25MYXRGcm9tUG9pbnRfKHRoaXMudGFyZ2V0RmVhdHVyZV8pO1xuICAgICAgdmFyIHZpYXMgPSB0aGlzLnZpYUFycmF5LmZpbHRlcihmdW5jdGlvbiAodmlhKSB7XG4gICAgICAgIHJldHVybiB2aWEuZmVhdHVyZSAhPT0gbnVsbDtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAodmlhKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuZ2V0TG9uTGF0RnJvbVBvaW50Xyh2aWEuZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciByb3V0ZSA9IFtjb29yZEZyb21dLmNvbmNhdCh2aWFzLCBbY29vcmRUb10pO1xuXG4gICAgICB2YXIgb25TdWNjZXNzXyA9IGZ1bmN0aW9uIG9uU3VjY2Vzc18ocmVzcCkge1xuICAgICAgICBpZiAoIV90aGlzMi5tYXAgfHwgIV90aGlzMi5zdGFydEZlYXR1cmVfIHx8ICFfdGhpczIudGFyZ2V0RmVhdHVyZV8pIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmZWF0dXJlcyA9IF90aGlzMi5wYXJzZVJvdXRlXyhyZXNwLmRhdGEucm91dGVzWzBdKTtcblxuICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05vIHJvdXRlIG9yIG5vdCBzdXBwb3J0ZWQgZm9ybWF0LicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi5yb3V0ZVNvdXJjZV8uYWRkRmVhdHVyZXMoZmVhdHVyZXMpO1xuXG4gICAgICAgIF90aGlzMi5tYXAuZ2V0VmlldygpLmZpdChfdGhpczIucm91dGVTb3VyY2VfLmdldEV4dGVudCgpKTtcblxuICAgICAgICBfdGhpczIucm91dGVEaXN0YW5jZSA9IHJlc3AuZGF0YS5yb3V0ZXNbMF0uZGlzdGFuY2U7XG4gICAgICAgIF90aGlzMi5yb3V0ZUR1cmF0aW9uID0gcmVzcC5kYXRhLnJvdXRlc1swXS5kdXJhdGlvbjtcbiAgICAgICAgdmFyIHN0YXJ0Um91dGUgPSBmZWF0dXJlc1swXS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVBdCgwKTtcbiAgICAgICAgdmFyIGVuZFJvdXRlID0gZmVhdHVyZXNbZmVhdHVyZXMubGVuZ3RoIC0gMV0uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlQXQoMSk7XG4gICAgICAgIHZhciBzdGFydFRvUm91dGUgPSBbX3RoaXMyLnN0YXJ0RmVhdHVyZV8uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpLCBzdGFydFJvdXRlXTtcbiAgICAgICAgdmFyIHJvdXRlVG9FbmQgPSBbZW5kUm91dGUsIF90aGlzMi50YXJnZXRGZWF0dXJlXy5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCldO1xuICAgICAgICB2YXIgcm91dGVDb25uZWN0aW9ucyA9IFtuZXcgb2xGZWF0dXJlKG5ldyBvbEdlb21MaW5lU3RyaW5nKHN0YXJ0VG9Sb3V0ZSkpLCBuZXcgb2xGZWF0dXJlKG5ldyBvbEdlb21MaW5lU3RyaW5nKHJvdXRlVG9FbmQpKV07XG5cbiAgICAgICAgX3RoaXMyLnJvdXRlU291cmNlXy5hZGRGZWF0dXJlcyhyb3V0ZUNvbm5lY3Rpb25zKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBvbkVycm9yXyA9IGZ1bmN0aW9uIG9uRXJyb3JfKHJlc3ApIHtcbiAgICAgICAgX3RoaXMyLmVycm9yTWVzc2FnZSA9ICdFcnJvcjogcm91dGluZyBzZXJ2ZXIgbm90IHJlc3BvbmRpbmcuJztcbiAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgICAgb3B0aW9ucy5zdGVwcyA9IHRydWU7XG4gICAgICBvcHRpb25zLm92ZXJ2aWV3ID0gZmFsc2U7XG4gICAgICBvcHRpb25zLmdlb21ldHJpZXMgPSAnZ2VvanNvbic7XG4gICAgICB2YXIgY29uZmlnID0ge307XG4gICAgICBjb25maWcub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm91dGluZ1Byb2ZpbGUpIHtcbiAgICAgICAgY29uZmlnLmluc3RhbmNlID0gdGhpcy5zZWxlY3RlZFJvdXRpbmdQcm9maWxlLnByb2ZpbGU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHFfLndoZW4odGhpcy5uZ2VvUm91dGluZ1NlcnZpY2VfLmdldFJvdXRlKHJvdXRlLCBjb25maWcpKS50aGVuKG9uU3VjY2Vzc18sIG9uRXJyb3JfKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFkZFZpYSA9IGZ1bmN0aW9uIGFkZFZpYSgpIHtcbiAgICB0aGlzLnZpYUFycmF5LnB1c2goe30pO1xuICB9O1xuXG4gIF9wcm90by5kZWxldGVWaWEgPSBmdW5jdGlvbiBkZWxldGVWaWEoaW5kZXgpIHtcbiAgICBpZiAodGhpcy52aWFBcnJheS5sZW5ndGggPiBpbmRleCkge1xuICAgICAgdGhpcy52aWFBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVSb3V0ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKTtcblxubW9kdWxlLmNvbXBvbmVudCgnbmdlb1JvdXRpbmcnLCB7XG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgJ21hcCc6ICc8bmdlb1JvdXRpbmdNYXAnXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiBuZ2VvUm91dGluZ1RlbXBsYXRlVXJsXG59KTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UuanMnO1xuaW1wb3J0IG5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnQgZnJvbSAnbmdlby9yb3V0aW5nL05vbWluYXRpbUlucHV0Q29tcG9uZW50LmpzJztcbmltcG9ydCAqIGFzIG9sUHJvaiBmcm9tICdvbC9wcm9qLmpzJztcbmltcG9ydCBvbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZS5qcyc7XG5pbXBvcnQgb2xDb2xsZWN0aW9uIGZyb20gJ29sL0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IG9sU291cmNlVmVjdG9yIGZyb20gJ29sL3NvdXJjZS9WZWN0b3IuanMnO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xuaW1wb3J0IG9sU3R5bGVUZXh0IGZyb20gJ29sL3N0eWxlL1RleHQuanMnO1xuaW1wb3J0IG9sU3R5bGVGaWxsIGZyb20gJ29sL3N0eWxlL0ZpbGwuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlLmpzJztcbmltcG9ydCBvbEdlb21Qb2ludCBmcm9tICdvbC9nZW9tL1BvaW50LmpzJztcbmltcG9ydCBvbEludGVyYWN0aW9uTW9kaWZ5IGZyb20gJ29sL2ludGVyYWN0aW9uL01vZGlmeS5qcyc7XG5pbXBvcnQgb2xJbnRlcmFjdGlvbkRyYXcgZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdy5qcyc7XG5pbXBvcnQgJ25nZW8vc2Fzcy9mb250LnNjc3MnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvUm91dGluZ0ZlYXR1cmVDb21wb25lbnQnLCBbbmdlb1JvdXRpbmdOb21pbmF0aW1TZXJ2aWNlLm5hbWUsIG5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnQubmFtZV0pO1xubW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCduZ2VvL3JvdXRpbmcvcm91dGluZ2ZlYXR1cmUnLCByZXF1aXJlKCcuL3JvdXRpbmdmZWF0dXJlLmh0bWwnKSk7XG59XSk7XG5tb2R1bGUudmFsdWUoJ25nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsJywgZnVuY3Rpb24gKCRhdHRycykge1xuICB2YXIgdGVtcGxhdGVVcmwgPSAkYXR0cnMubmdlb1JvdXRpbmdGZWF0dXJlVGVtcGxhdGVVcmw7XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnbmdlby9yb3V0aW5nL3JvdXRpbmdmZWF0dXJlJztcbn0pO1xubmdlb1JvdXRpbmdGZWF0dXJlVGVtcGxhdGVVcmwuJGluamVjdCA9IFtcIiRhdHRyc1wiLCBcIm5nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBuZ2VvUm91dGluZ0ZlYXR1cmVUZW1wbGF0ZVVybCgkYXR0cnMsIG5nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsKSB7XG4gIHJldHVybiBuZ2VvUm91dGluZ0ZlYXR1cmVUZW1wbGF0ZVVybCgkYXR0cnMpO1xufVxuXG52YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCIsIFwiJHRpbWVvdXRcIiwgXCIkcVwiLCBcIm5nZW9Ob21pbmF0aW1TZXJ2aWNlXCJdO1xuXG4gIGZ1bmN0aW9uIENvbnRyb2xsZXIoJHNjb3BlLCAkdGltZW91dCwgJHEsIG5nZW9Ob21pbmF0aW1TZXJ2aWNlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuc2NvcGVfID0gJHNjb3BlO1xuICAgIHRoaXMudGltZW91dF8gPSAkdGltZW91dDtcbiAgICB0aGlzLiRxXyA9ICRxO1xuICAgIHRoaXMubmdlb05vbWluYXRpbVNlcnZpY2VfID0gbmdlb05vbWluYXRpbVNlcnZpY2U7XG4gICAgdGhpcy5tYXAgPSBudWxsO1xuICAgIHRoaXMuZmVhdHVyZSA9IG51bGw7XG4gICAgdGhpcy5mZWF0dXJlTGFiZWwgPSAnJztcbiAgICB0aGlzLmZpbGxDb2xvciA9ICcnO1xuICAgIHRoaXMuc3Ryb2tlQ29sb3IgPSAnJztcbiAgICB0aGlzLm9uQ2hhbmdlID0gbnVsbDtcbiAgICB0aGlzLnZlY3RvckZlYXR1cmVzXyA9IG5ldyBvbENvbGxlY3Rpb24oKTtcbiAgICB0aGlzLnZlY3RvclNvdXJjZV8gPSBuZXcgb2xTb3VyY2VWZWN0b3Ioe1xuICAgICAgZmVhdHVyZXM6IHRoaXMudmVjdG9yRmVhdHVyZXNfXG4gICAgfSk7XG4gICAgdGhpcy52ZWN0b3JMYXllcl8gPSBuZXcgb2xMYXllclZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMudmVjdG9yU291cmNlXyxcbiAgICAgIHN0eWxlOiBmdW5jdGlvbiBzdHlsZShmZWF0dXJlLCByZXNvbHV0aW9uKSB7XG4gICAgICAgIHJldHVybiBbbmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgICAgICAgdGV4dDogbmV3IG9sU3R5bGVUZXh0KHtcbiAgICAgICAgICAgIGZpbGw6IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICAgICAgICAgIGNvbG9yOiBfdGhpcy5maWxsQ29sb3IgfHwgJyMwMDAwMDAnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZvbnQ6ICc5MDAgMzBweCBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIicsXG4gICAgICAgICAgICBvZmZzZXRZOiAtMTUsXG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICAgIGNvbG9yOiBfdGhpcy5zdHJva2VDb2xvciB8fCAnIzAwMDAwMCdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGV4dDogXCJcXHVGMDQxXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9KV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5tb2RpZnlGZWF0dXJlXyA9IG5ldyBvbEludGVyYWN0aW9uTW9kaWZ5KHtcbiAgICAgIGZlYXR1cmVzOiB0aGlzLnZlY3RvckZlYXR1cmVzX1xuICAgIH0pO1xuICAgIHRoaXMuZHJhd18gPSBudWxsO1xuICAgIHRoaXMub25TZWxlY3QgPSB0aGlzLm9uU2VsZWN0Xy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29udHJvbGxlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLiRvbkluaXQgPSBmdW5jdGlvbiAkb25Jbml0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMudmVjdG9yTGF5ZXJfKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmVfLnNldEFjdGl2ZSh0cnVlKTtcbiAgICB0aGlzLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLm1vZGlmeUZlYXR1cmVfKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmVfLm9uKCdtb2RpZnllbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBmZWF0dXJlID0gZXZlbnQuZmVhdHVyZXMuZ2V0QXJyYXkoKVswXTtcblxuICAgICAgX3RoaXMyLnZlY3RvclNvdXJjZV8uY2xlYXIoKTtcblxuICAgICAgX3RoaXMyLnNuYXBGZWF0dXJlXyhmZWF0dXJlKTtcbiAgICB9KTtcbiAgICB0aGlzLnNjb3BlXy4kd2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5mZWF0dXJlO1xuICAgIH0sIGZ1bmN0aW9uIChuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICBfdGhpczIub25GZWF0dXJlQ2hhbmdlXygpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3VmFsID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzMi52ZWN0b3JTb3VyY2VfLmNsZWFyKCk7XG5cbiAgICAgICAgX3RoaXMyLmZlYXR1cmVMYWJlbCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by4kb25EZXN0cm95ID0gZnVuY3Rpb24gJG9uRGVzdHJveSgpIHtcbiAgICBpZiAoIXRoaXMubWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy52ZWN0b3JMYXllcl8pO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZV8uc2V0QWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLm1vZGlmeUZlYXR1cmVfKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYXdfKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmRyYXdfKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdfID0gbmV3IG9sSW50ZXJhY3Rpb25EcmF3KHtcbiAgICAgIGZlYXR1cmVzOiB0aGlzLnZlY3RvckZlYXR1cmVzXyxcbiAgICAgIHR5cGU6ICdQb2ludCdcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdfLm9uKCdkcmF3c3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMzLmZlYXR1cmUpIHtcbiAgICAgICAgX3RoaXMzLnZlY3RvclNvdXJjZV8ucmVtb3ZlRmVhdHVyZShfdGhpczMuZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kcmF3Xy5vbignZHJhd2VuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzMy5kcmF3XyAmJiBfdGhpczMubWFwKSB7XG4gICAgICAgIF90aGlzMy5tYXAucmVtb3ZlSW50ZXJhY3Rpb24oX3RoaXMzLmRyYXdfKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMzLnNuYXBGZWF0dXJlXyhldmVudC5mZWF0dXJlKTtcblxuICAgICAgX3RoaXMzLm1vZGlmeUZlYXR1cmVfLnNldEFjdGl2ZSh0cnVlKTtcbiAgICB9KTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmVfLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5kcmF3Xyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldEZlYXR1cmVfID0gZnVuY3Rpb24gc2V0RmVhdHVyZV8oY29vcmRpbmF0ZSwgbGFiZWwpIHtcbiAgICBpZiAoIXRoaXMubWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zZm9ybWVkQ29vcmRpbmF0ZSA9IG9sUHJvai5mcm9tTG9uTGF0KGNvb3JkaW5hdGUsIHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkpO1xuXG4gICAgaWYgKGxhYmVsID09PSAnJykge1xuICAgICAgbGFiZWwgPSB0cmFuc2Zvcm1lZENvb3JkaW5hdGUuam9pbignLycpO1xuICAgIH1cblxuICAgIHRoaXMuZmVhdHVyZSA9IG5ldyBvbEZlYXR1cmUoe1xuICAgICAgZ2VvbWV0cnk6IG5ldyBvbEdlb21Qb2ludCh0cmFuc2Zvcm1lZENvb3JkaW5hdGUpLFxuICAgICAgbmFtZTogbGFiZWxcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25GZWF0dXJlQ2hhbmdlXyA9IGZ1bmN0aW9uIG9uRmVhdHVyZUNoYW5nZV8oKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuZmVhdHVyZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZmVhdHVyZUxhYmVsID0gdGhpcy5mZWF0dXJlLmdldCgnbmFtZScpIHx8ICcnO1xuICAgIHRoaXMudmVjdG9yU291cmNlXy5jbGVhcigpO1xuICAgIHRoaXMudmVjdG9yU291cmNlXy5hZGRGZWF0dXJlKHRoaXMuZmVhdHVyZSk7XG5cbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy50aW1lb3V0XyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczQuZmVhdHVyZSAmJiBfdGhpczQub25DaGFuZ2UpIHtcbiAgICAgICAgICBfdGhpczQub25DaGFuZ2UoX3RoaXM0LmZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uU2VsZWN0XyA9IGZ1bmN0aW9uIG9uU2VsZWN0XyhzZWxlY3RlZCkge1xuICAgIGlmICghdGhpcy5mZWF0dXJlIHx8ICF0aGlzLm1hcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjb29yZGluYXRlID0gc2VsZWN0ZWQuY29vcmRpbmF0ZS5tYXAocGFyc2VGbG9hdCk7XG4gICAgdmFyIGxhYmVsID0gc2VsZWN0ZWQubGFiZWw7XG4gICAgdGhpcy5zZXRGZWF0dXJlXyhjb29yZGluYXRlLCBsYWJlbCk7XG4gICAgdmFyIG5ld0Nvb3JkaW5hdGVzID0gdGhpcy5mZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICB0aGlzLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKG5ld0Nvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBfcHJvdG8uc25hcEZlYXR1cmVfID0gZnVuY3Rpb24gc25hcEZlYXR1cmVfKGZlYXR1cmUpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBjb29yZCA9IHRoaXMuZ2V0TG9uTGF0RnJvbVBvaW50XyhmZWF0dXJlKTtcblxuICAgIGlmICghY29vcmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICB2YXIgb25TdWNjZXNzID0gZnVuY3Rpb24gb25TdWNjZXNzKHJlc3ApIHtcbiAgICAgIHZhciBsb24gPSBwYXJzZUZsb2F0KHJlc3AuZGF0YS5sb24pO1xuICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQocmVzcC5kYXRhLmxhdCk7XG4gICAgICB2YXIgY29vcmRpbmF0ZSA9IFtsb24sIGxhdF07XG4gICAgICB2YXIgbGFiZWwgPSByZXNwLmRhdGEuZGlzcGxheV9uYW1lO1xuXG4gICAgICBfdGhpczUuc2V0RmVhdHVyZV8oY29vcmRpbmF0ZSwgbGFiZWwpO1xuICAgIH07XG5cbiAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IocmVzcCkge1xuICAgICAgX3RoaXM1LmVycm9yTWVzc2FnZSA9ICdFcnJvcjogbm9taW5hdGltIHNlcnZlciBub3QgcmVzcG9uZGluZy4nO1xuICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgfTtcblxuICAgIHRoaXMuJHFfLndoZW4odGhpcy5uZ2VvTm9taW5hdGltU2VydmljZV8ucmV2ZXJzZShjb29yZCwgY29uZmlnKSkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9O1xuXG4gIF9wcm90by5nZXRMb25MYXRGcm9tUG9pbnRfID0gZnVuY3Rpb24gZ2V0TG9uTGF0RnJvbVBvaW50Xyhwb2ludCkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBnZW9tZXRyeSA9IHBvaW50LmdldEdlb21ldHJ5KCk7XG5cbiAgICBpZiAoIShnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbVBvaW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyB0aW1lIHZhbHVlcyB0eXBlJyk7XG4gICAgfVxuXG4gICAgdmFyIGNvb3JkcyA9IGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHByb2plY3Rpb24gPSB0aGlzLm1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICAgIHJldHVybiBvbFByb2oudG9Mb25MYXQoY29vcmRzLCBwcm9qZWN0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKTtcblxudmFyIHJvdXRpbmdGZWF0dXJlQ29tcG9uZW50ID0ge1xuICBjb250cm9sbGVyOiBDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgICdtYXAnOiAnPG5nZW9Sb3V0aW5nRmVhdHVyZU1hcCcsXG4gICAgJ2ZlYXR1cmUnOiAnPW5nZW9Sb3V0aW5nRmVhdHVyZUZlYXR1cmUnLFxuICAgICdmaWxsQ29sb3InOiAnPD9uZ2VvUm91dGluZ0ZlYXR1cmVGaWxsQ29sb3InLFxuICAgICdzdHJva2VDb2xvcic6ICc8P25nZW9Sb3V0aW5nRmVhdHVyZVN0cm9rZUNvbG9yJyxcbiAgICAnb25DaGFuZ2UnOiAnPT9uZ2VvUm91dGluZ0ZlYXR1cmVPbkNoYW5nZSdcbiAgfSxcbiAgdGVtcGxhdGVVcmw6IG5nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsXG59O1xubW9kdWxlLmNvbXBvbmVudCgnbmdlb1JvdXRpbmdGZWF0dXJlJywgcm91dGluZ0ZlYXR1cmVDb21wb25lbnQpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIlJvdXRpbmdTZXJ2aWNlLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiRpbmplY3RvclwiXTtcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuZXhwb3J0IGZ1bmN0aW9uIFJvdXRpbmdTZXJ2aWNlKCRodHRwLCAkaW5qZWN0b3IpIHtcbiAgdGhpcy4kaHR0cF8gPSAkaHR0cDtcbiAgdGhpcy5yb3V0aW5nT3B0aW9uc18gPSAkaW5qZWN0b3IuaGFzKCduZ2VvUm91dGluZ09wdGlvbnMnKSA/ICRpbmplY3Rvci5nZXQoJ25nZW9Sb3V0aW5nT3B0aW9ucycpIDoge307XG4gIHRoaXMubmdlb09zcm1CYWNrZW5kVXJsXyA9IHRoaXMucm91dGluZ09wdGlvbnNfLmJhY2tlbmRVcmwgfHwgJ2h0dHBzOi8vcm91dGVyLnByb2plY3Qtb3NybS5vcmcvJztcblxuICBpZiAodGhpcy5uZ2VvT3NybUJhY2tlbmRVcmxfLnN1YnN0cigtMSkgIT09ICcvJykge1xuICAgIHRoaXMubmdlb09zcm1CYWNrZW5kVXJsXyArPSAnLyc7XG4gIH1cblxuICB0aGlzLnByb3RvY29sVmVyc2lvbl8gPSAndjEnO1xufVxuXG5Sb3V0aW5nU2VydmljZS5wcm90b3R5cGUuZ2V0Um91dGUgPSBmdW5jdGlvbiAoY29vcmRpbmF0ZXMsIGNvbmZpZykge1xuICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgaWYgKCFjb25maWcuc2VydmljZSkge1xuICAgIGNvbmZpZy5zZXJ2aWNlID0gJ3JvdXRlJztcbiAgfVxuXG4gIGlmICghY29uZmlnLnByb2ZpbGUpIHtcbiAgICBjb25maWcucHJvZmlsZSA9ICdjYXInO1xuICB9XG5cbiAgdmFyIHVybCA9IHRoaXMubmdlb09zcm1CYWNrZW5kVXJsXztcblxuICBpZiAoY29uZmlnLmluc3RhbmNlKSB7XG4gICAgdXJsICs9IGNvbmZpZy5pbnN0YW5jZSArIFwiL1wiO1xuICB9XG5cbiAgdXJsICs9IGNvbmZpZy5zZXJ2aWNlICsgXCIvXCIgKyB0aGlzLnByb3RvY29sVmVyc2lvbl8gKyBcIi9cIiArIGNvbmZpZy5wcm9maWxlICsgXCIvXCI7XG4gIHZhciBjb29yZGluYXRlU3RyaW5nID0gY29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuam9pbignLCcpO1xuICB9KS5qb2luKCc7Jyk7XG4gIHVybCArPSBjb29yZGluYXRlU3RyaW5nO1xuXG4gIGlmIChjb25maWcub3B0aW9ucykge1xuICAgIHVybCArPSAnPyc7XG4gICAgdmFyIG9wdGlvbnMgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnLm9wdGlvbnMpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBvcHRpb24gPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbiArIFwiPVwiICsgY29uZmlnLm9wdGlvbnNbb3B0aW9uXSk7XG4gICAgfVxuXG4gICAgdXJsICs9IG9wdGlvbnMuam9pbignJicpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuJGh0dHBfLmdldCh1cmwpO1xufTtcblxuUm91dGluZ1NlcnZpY2UucHJvdG90eXBlLmdldE5lYXJlc3QgPSBmdW5jdGlvbiAoY29vcmRpbmF0ZSwgY29uZmlnKSB7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgY29uZmlnLnNlcnZpY2UgPSAnbmVhcmVzdCc7XG5cbiAgaWYgKCFjb25maWcucHJvZmlsZSkge1xuICAgIGNvbmZpZy5wcm9maWxlID0gJ2Nhcic7XG4gIH1cblxuICB2YXIgdXJsID0gdGhpcy5uZ2VvT3NybUJhY2tlbmRVcmxfO1xuXG4gIGlmIChjb25maWcuaW5zdGFuY2UpIHtcbiAgICB1cmwgKz0gY29uZmlnLmluc3RhbmNlICsgXCIvXCI7XG4gIH1cblxuICB1cmwgKz0gY29uZmlnLnNlcnZpY2UgKyBcIi9cIiArIHRoaXMucHJvdG9jb2xWZXJzaW9uXyArIFwiL1wiICsgY29uZmlnLnByb2ZpbGUgKyBcIi9cIjtcbiAgdmFyIGNvb3JkaW5hdGVTdHJpbmcgPSBjb29yZGluYXRlLmpvaW4oJywnKTtcbiAgdXJsICs9IGNvb3JkaW5hdGVTdHJpbmc7XG5cbiAgaWYgKGNvbmZpZy5vcHRpb25zKSB7XG4gICAgdXJsICs9ICc/JztcbiAgICB2YXIgb3B0aW9ucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMCwgX09iamVjdCRrZXlzMiA9IE9iamVjdC5rZXlzKGNvbmZpZy5vcHRpb25zKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgb3B0aW9uID0gX09iamVjdCRrZXlzMltfaTJdO1xuICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbiArIFwiPVwiICsgY29uZmlnLm9wdGlvbnNbb3B0aW9uXSk7XG4gICAgfVxuXG4gICAgdXJsICs9IG9wdGlvbnMuam9pbignJicpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuJGh0dHBfLmdldCh1cmwpO1xufTtcblxudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvUm91dGluZ1NlcnZpY2UnLCBbXSk7XG5tb2R1bGUuc2VydmljZSgnbmdlb1JvdXRpbmdTZXJ2aWNlJywgUm91dGluZ1NlcnZpY2UpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9Sb3V0aW5nUm91dGluZ0NvbXBvbmVudCBmcm9tICduZ2VvL3JvdXRpbmcvUm91dGluZ0NvbXBvbmVudC5qcyc7XG5pbXBvcnQgJy4vcm91dGluZy5zY3NzJztcbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCduZ2VvUm91dGluZ01vZHVsZScsIFtuZ2VvUm91dGluZ1JvdXRpbmdDb21wb25lbnQubmFtZV0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxkaXYgY2xhc3M9XCJuZ2VvLW5vbWluYXRpbS1pbnB1dFwiPlxcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcXG4gICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXFxuICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyRjdHJsLnBsYWNlaG9sZGVyfX1cIlxcbiAgICAgICAgIG5nLW1vZGVsPVwiJGN0cmwuaW5wdXRWYWx1ZVwiXFxuICAgICAgICAgbmdlby1zZWFyY2g9XCIkY3RybC5vcHRpb25zXCJcXG4gICAgICAgICBuZ2VvLXNlYXJjaC1kYXRhc2V0cz1cIiRjdHJsLmRhdGFzZXRzXCJcXG4gICAgICAgICBuZ2VvLXNlYXJjaC1saXN0ZW5lcnM9XCIkY3RybC5saXN0ZW5lcnNcIj5cXG48L2Rpdj5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJyc7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPGRpdiBjbGFzcz1cIm5nZW8tcm91dGluZ1wiPlxcbiAgPGRpdiBjbGFzcz1cIm5nZW8tcm91dGluZy1zdGFydCBmb3JtLWdyb3VwXCI+XFxuICAgIDxuZ2VvLXJvdXRpbmctZmVhdHVyZVxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLW1hcD1cIiRjdHJsLm1hcFwiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtZmVhdHVyZT1cIiRjdHJsLnN0YXJ0RmVhdHVyZV9cIlxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLWZpbGwtY29sb3I9XCIkY3RybC5jb2xvcnNbXFwnc3RhcnQuZmlsbFxcJ11cIlxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLXN0cm9rZS1jb2xvcj1cIiRjdHJsLmNvbG9yc1tcXCdzdGFydC5zdHJva2VcXCddXCJcXG4gICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1vbi1jaGFuZ2U9XCIkY3RybC5oYW5kbGVDaGFuZ2VcIj5cXG4gICAgPC9uZ2VvLXJvdXRpbmctZmVhdHVyZT5cXG4gIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nLXZpYXMgZm9ybS1ncm91cFwiIG5nLXJlcGVhdD1cIihpbmRleCwgdmlhKSBpbiAkY3RybC52aWFBcnJheVwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cXG4gICAgICAgICAgPG5nZW8tcm91dGluZy1mZWF0dXJlXFxuICAgICAgICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtbWFwPVwiJGN0cmwubWFwXCJcXG4gICAgICAgICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1mZWF0dXJlPVwidmlhLmZlYXR1cmVcIlxcbiAgICAgICAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLWZpbGwtY29sb3I9XCIkY3RybC5jb2xvcnNbXFwndmlhLmZpbGxcXCddXCJcXG4gICAgICAgICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1zdHJva2UtY29sb3I9XCIkY3RybC5jb2xvcnNbXFwndmlhLnN0cm9rZVxcJ11cIlxcbiAgICAgICAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLW9uLWNoYW5nZT1cIiRjdHJsLmhhbmRsZUNoYW5nZVwiPlxcbiAgICAgICAgICA8L25nZW8tcm91dGluZy1mZWF0dXJlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBwcmltZSBkZWxldGUtdmlhXCIgbmctY2xpY2s9XCIkY3RybC5kZWxldGVWaWEoaW5kZXgpXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nLWRlc3RpbmF0aW9uIGZvcm0tZ3JvdXBcIj5cXG4gICAgPG5nZW8tcm91dGluZy1mZWF0dXJlXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtbWFwPVwiJGN0cmwubWFwXCJcXG4gICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1mZWF0dXJlPVwiJGN0cmwudGFyZ2V0RmVhdHVyZV9cIlxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLWZpbGwtY29sb3I9XCIkY3RybC5jb2xvcnNbXFwnZGVzdGluYXRpb24uZmlsbFxcJ11cIlxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLXN0cm9rZS1jb2xvcj1cIiRjdHJsLmNvbG9yc1tcXCdkZXN0aW5hdGlvbi5zdHJva2VcXCddXCJcXG4gICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1vbi1jaGFuZ2U9XCIkY3RybC5oYW5kbGVDaGFuZ2VcIj5cXG4gICAgPC9uZ2VvLXJvdXRpbmctZmVhdHVyZT5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZmlsbFwiPlxcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBwcmltZVwiIG5nLWNsaWNrPVwiJGN0cmwuY2xlYXJSb3V0ZSgpXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvc3Bhbj4gPHNwYW4gdHJhbnNsYXRlPkNsZWFyPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gcHJpbWVcIiBuZy1jbGljaz1cIiRjdHJsLnJldmVyc2VSb3V0ZSgpXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1leGNoYW5nZS1hbHRcIj48L3NwYW4+IDxzcGFuIHRyYW5zbGF0ZT5SZXZlcnNlPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gcHJpbWVcIiBuZy1jbGljaz1cIiRjdHJsLmFkZFZpYSgpXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9zcGFuPiA8c3BhbiB0cmFuc2xhdGU+QWRkIHZpYTwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxcblxcbiAgPGRpdiBuZy1pZj1cIiRjdHJsLnJvdXRpbmdQcm9maWxlcy5sZW5ndGggPiAxXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgY29sLW1kLTRcIiB0cmFuc2xhdGU+UHJvZmlsZTwvbGFiZWw+XFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XFxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmctbW9kZWw9XCIkY3RybC5zZWxlY3RlZFJvdXRpbmdQcm9maWxlXCI+XFxuICAgICAgICAgIDxvcHRpb24gbmctcmVwZWF0PVwicHJvZmlsZSBpbiAkY3RybC5yb3V0aW5nUHJvZmlsZXNcIiBuZy12YWx1ZT1cInByb2ZpbGVcIj57e3Byb2ZpbGUubGFiZWx9fTwvb3B0aW9uPlxcbiAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nLWVycm9yIGZvcm0tZ3JvdXAgY2xlYXJmaXhcIlxcbiAgICAgICBuZy1oaWRlPVwiJGN0cmwuZXJyb3JNZXNzYWdlID09PSBcXCdcXCdcIj5cXG4gICAge3skY3RybC5lcnJvck1lc3NhZ2V9fVxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cXG5cXG4gIDxkaXYgbmctaGlkZT1cIiRjdHJsLnJvdXRlRHVyYXRpb24gPT09IG51bGwgJiYgJGN0cmwucm91dGVEaXN0YW5jZSA8PSAwXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XFxuICAgICAgICA8c3Ryb25nIHRyYW5zbGF0ZT5Sb3V0ZSBzdGF0aXN0aWNzPC9zdHJvbmc+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctaGlkZT1cIiRjdHJsLnJvdXRlRHVyYXRpb24gPT09IG51bGxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgdGV4dC1yaWdodFwiIHRyYW5zbGF0ZT5cXG4gICAgICAgIER1cmF0aW9uXFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XFxuICAgICAgICB7eyRjdHJsLnJvdXRlRHVyYXRpb24gfCBuZ2VvRHVyYXRpb259fVxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIG5nLWhpZGU9XCIkY3RybC5yb3V0ZURpc3RhbmNlIDw9IDBcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgdGV4dC1yaWdodFwiIHRyYW5zbGF0ZT5cXG4gICAgICAgIERpc3RhbmNlXFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XFxuICAgICAgICB7eyRjdHJsLnJvdXRlRGlzdGFuY2UgfCBuZ2VvVW5pdFByZWZpeDpcXCdtXFwnfX1cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJyc7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPGRpdiBjbGFzcz1cIm5nZW8tcm91dGluZy1mZWF0dXJlXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbiAgICAgIDxuZ2VvLW5vbWluYXRpbS1pbnB1dFxcbiAgICAgICAgbmdlby1ub21pbmF0aW0taW5wdXQtdmFsdWU9XCIkY3RybC5mZWF0dXJlTGFiZWxcIlxcbiAgICAgICAgbmdlby1ub21pbmF0aW0taW5wdXQtcGxhY2Vob2xkZXI9XCJ7e1xcJ1NlYXJjaC4uLlxcJyB8IHRyYW5zbGF0ZX19XCJcXG4gICAgICAgIG5nZW8tbm9taW5hdGltLWlucHV0LW9uLXNlbGVjdD1cIiRjdHJsLm9uU2VsZWN0XCI+XFxuICAgICAgPC9uZ2VvLW5vbWluYXRpbS1pbnB1dD5cXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuXCIgbmctY2xpY2s9XCIkY3RybC5zZXQoKVwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyXCI+PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5T0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=