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
/******/ 	deferredModules.push([37,"commons"]);
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_search_searchDirective_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/search/searchDirective.js */ "./src/search/searchDirective.js");
/* harmony import */ var ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/routing/NominatimService.js */ "./src/routing/NominatimService.js");
Controller.$inject = ["$element", "$scope", "ngeoNominatimService"];



var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingNominatimInputComponent', [ngeo_search_searchDirective_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/nominatiminput', __webpack_require__(/*! ./nominatiminput.html */ "./src/routing/nominatiminput.html"));
}]);
module.value('ngeoRoutingNominatimInputComponentTemplateUrl', function ($attrs) {
  var templateUrl = $attrs['ngeoRoutingNominatimInputComponentTemplateUrl'];
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
  this.onSelect;
  this.inputValue;
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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
  params['format'] = 'json';

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
  params['lon'] = coordinate[0];
  params['lat'] = coordinate[1];
  params['format'] = 'json';

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

    asyncResults(resp.data.map(parse));
  };

  var onError_ = function onError_(resp) {
    asyncResults([]);
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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
Controller.$inject = ["$injector", "$scope", "ngeoRoutingService", "ngeoNominatimService", "$q", "ngeoDebounce"];
















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingComponent', [ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_misc_filters_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, ngeo_routing_RoutingService_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, ngeo_routing_RoutingFeatureComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"].name]);
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/routing', __webpack_require__(/*! ./routing.html */ "./src/routing/routing.html"));
}]);
module.value('ngeoRoutingTemplateUrl', function ($attrs) {
  var templateUrl = $attrs['ngeoRoutingTemplateUrl'];
  return templateUrl !== undefined ? templateUrl : 'ngeo/routing/routing';
});
ngeoRoutingTemplateUrl.$inject = ["$attrs", "ngeoRoutingTemplateUrl"];

function ngeoRoutingTemplateUrl($attrs, ngeoRoutingTemplateUrl) {
  return ngeoRoutingTemplateUrl($attrs);
}

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
  this.map;
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

Controller.prototype.$onInit = function () {
  this.map.addLayer(this.routeLayer_);
};

Controller.prototype.clearRoute = function () {
  this.startFeature_ = null;
  this.targetFeature_ = null;
  this.viaArray = [];
  this.routeDistance = 0;
  this.routeDuration = null;
  this.routeSource_.clear();
  this.errorMessage = '';
};

Controller.prototype.getLonLatFromPoint_ = function (point) {
  var geometry = point.getGeometry();
  var coords = geometry.getCoordinates();
  var projection = this.map.getView().getProjection();
  return Object(ol_proj_js__WEBPACK_IMPORTED_MODULE_12__["toLonLat"])(coords, projection);
};

Controller.prototype.reverseRoute = function () {
  var tmpFeature = this.startFeature_;
  this.startFeature_ = this.targetFeature_;
  this.targetFeature_ = tmpFeature;
  this.viaArray = this.viaArray.reverse();
};

Controller.prototype.parseRoute_ = function (route) {
  var parsedRoutes = [];
  var format = new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  var formatConfig = {
    dataProjection: 'EPSG:4326',
    featureProjection: this.map.getView().getProjection()
  };

  if (route.legs) {
    var _ref;

    parsedRoutes = route.legs.map(function (leg) {
      return leg.steps.map(function (step) {
        return new ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
          geometry: format.readGeometry(step.geometry, formatConfig)
        });
      });
    });
    parsedRoutes = (_ref = []).concat.apply(_ref, parsedRoutes);
  } else if (route.geometry) {
    parsedRoutes.push(new ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      geometry: format.readGeometry(route.geometry, formatConfig)
    }));
  }

  return parsedRoutes;
};

Controller.prototype.calculateRoute = function () {
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

    var onSuccess_ = function (resp) {
      var features = this.parseRoute_(resp.data.routes[0]);

      if (features.length === 0) {
        console.log('No route or not supported format.');
        return;
      }

      this.routeSource_.addFeatures(features);
      this.map.getView().fit(this.routeSource_.getExtent());
      this.routeDistance = parseInt(resp.data.routes[0].distance, 10);
      this.routeDuration = resp.data.routes[0].duration;
      var startRoute = features[0].getGeometry().getCoordinateAt(0);
      var endRoute = features[features.length - 1].getGeometry().getCoordinateAt(1);
      var startToRoute = [this.startFeature_.getGeometry().getCoordinates(), startRoute];
      var routeToEnd = [endRoute, this.targetFeature_.getGeometry().getCoordinates()];
      var routeConnections = [new ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__["default"](new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_14__["default"](startToRoute)), new ol_Feature_js__WEBPACK_IMPORTED_MODULE_13__["default"](new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_14__["default"](routeToEnd))];
      this.routeSource_.addFeatures(routeConnections);
    }.bind(this);

    var onError_ = function (resp) {
      this.errorMessage = 'Error: routing server not responding.';
      console.log(resp);
    }.bind(this);

    var options = {};
    options['steps'] = true;
    options['overview'] = false;
    options['geometries'] = 'geojson';
    var config = {};
    config['options'] = options;

    if (this.selectedRoutingProfile) {
      config['instance'] = this.selectedRoutingProfile['profile'];
    }

    this.$q_.when(this.ngeoRoutingService_.getRoute(route, config)).then(onSuccess_.bind(this), onError_.bind(this));
  }
};

Controller.prototype.addVia = function () {
  this.viaArray.push({
    feature: null,
    onSelect: null
  });
};

Controller.prototype.deleteVia = function (index) {
  if (this.viaArray.length > index) {
    this.viaArray.splice(index, 1);
    this.calculateRoute();
  }
};

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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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
Controller.$inject = ["$scope", "$timeout", "$q", "ngeoNominatimService"];
















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoRoutingFeatureComponent', [ngeo_routing_NominatimService_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_routing_NominatimInputComponent_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/routing/routingfeature', __webpack_require__(/*! ./routingfeature.html */ "./src/routing/routingfeature.html"));
}]);
module.value('ngeoRoutingFeatureTemplateUrl', function ($attrs) {
  var templateUrl = $attrs['ngeoRoutingFeatureTemplateUrl'];
  return templateUrl !== undefined ? templateUrl : 'ngeo/routing/routingfeature';
});
ngeoRoutingFeatureTemplateUrl.$inject = ["$attrs", "ngeoRoutingFeatureTemplateUrl"];

function ngeoRoutingFeatureTemplateUrl($attrs, ngeoRoutingFeatureTemplateUrl) {
  return ngeoRoutingFeatureTemplateUrl($attrs);
}

function Controller($scope, $timeout, $q, ngeoNominatimService) {
  this.scope_ = $scope;
  this.timeout_ = $timeout;
  this.$q_ = $q;
  this.ngeoNominatimService_ = ngeoNominatimService;
  this.map;
  this.feature;
  this.featureLabel = '';
  this.fillColor;
  this.strokeColor;
  this.onChange;
  this.vectorFeatures_ = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  this.vectorSource_ = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    features: this.vectorFeatures_
  });
  this.vectorLayer_ = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    source: this.vectorSource_,
    style: function (feature, resolution) {
      return [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        text: new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
          fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
            color: this.fillColor || '#000000'
          }),
          font: '900 30px "Font Awesome 5 Free"',
          offsetY: -15,
          stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
            width: 3,
            color: this.strokeColor || '#000000'
          }),
          text: "\uF041"
        })
      })];
    }.bind(this)
  });
  this.modifyFeature_ = new ol_interaction_Modify_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
    features: this.vectorFeatures_
  });
  this.draw_ = null;
  this.onSelect = this.onSelect_.bind(this);
  this.errorMessage = '';
}

Controller.prototype.$onInit = function () {
  var _this = this;

  this.map.addLayer(this.vectorLayer_);
  this.modifyFeature_.setActive(true);
  this.map.addInteraction(this.modifyFeature_);
  this.modifyFeature_.on('modifyend', function (event) {
    var feature = event.features.getArray()[0];

    _this.vectorSource_.clear();

    _this.snapFeature_(feature);
  });
  this.scope_.$watch(function () {
    return _this.feature;
  }, function (newVal, oldVal) {
    if (newVal) {
      _this.onFeatureChange_();
    }

    if (newVal === null) {
      _this.vectorSource_.clear();

      _this.featureLabel = '';
    }
  });
};

Controller.prototype.$onDestroy = function () {
  this.map.removeLayer(this.vectorLayer_);
  this.modifyFeature_.setActive(false);
  this.map.removeInteraction(this.modifyFeature_);
};

Controller.prototype.set = function () {
  var _this2 = this;

  if (this.draw_) {
    this.map.removeInteraction(this.draw_);
  }

  this.draw_ = new ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
    features: this.vectorFeatures_,
    type: 'Point'
  });
  this.draw_.on('drawstart', function () {
    if (_this2.feature) {
      _this2.vectorSource_.removeFeature(_this2.feature);
    }
  });
  this.draw_.on('drawend', function (event) {
    if (_this2.draw_) {
      _this2.map.removeInteraction(_this2.draw_);
    }

    _this2.snapFeature_(event.feature);

    _this2.modifyFeature_.setActive(true);
  });
  this.modifyFeature_.setActive(false);
  this.map.addInteraction(this.draw_);
};

Controller.prototype.setFeature_ = function (coordinate, label) {
  var transformedCoordinate = ol_proj_js__WEBPACK_IMPORTED_MODULE_3__["fromLonLat"](coordinate, this.map.getView().getProjection());

  if (label === '') {
    label = transformedCoordinate.join('/');
  }

  this.feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
    geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"](transformedCoordinate),
    name: label
  });
};

Controller.prototype.onFeatureChange_ = function () {
  var _this3 = this;

  this.featureLabel = this.feature.get('name') || '';
  this.vectorSource_.clear();
  this.vectorSource_.addFeature(this.feature);

  if (this.onChange) {
    this.timeout_(function () {
      _this3.onChange(_this3.feature);
    });
  }
};

Controller.prototype.onSelect_ = function (selected) {
  var coordinate = selected.coordinate.map(parseFloat);
  var label = selected.label;
  this.setFeature_(coordinate, label);
  var newCoordinates = this.feature.getGeometry().getCoordinates();
  this.map.getView().setCenter(newCoordinates);
};

Controller.prototype.snapFeature_ = function (feature) {
  var coord = this.getLonLatFromPoint_(feature);
  var config = {};

  var onSuccess = function (resp) {
    var lon = parseFloat(resp['data']['lon']);
    var lat = parseFloat(resp['data']['lat']);
    var coordinate = [lon, lat];
    var label = resp['data']['display_name'];
    this.setFeature_(coordinate, label);
  }.bind(this);

  var onError = function (resp) {
    this.errorMessage = 'Error: nominatim server not responding.';
    console.log(resp);
  }.bind(this);

  this.$q_.when(this.ngeoNominatimService_.reverse(coord, config)).then(onSuccess.bind(this), onError.bind(this));
};

Controller.prototype.getLonLatFromPoint_ = function (point) {
  var geometry = point.getGeometry();
  var coords = geometry.getCoordinates();
  var projection = this.map.getView().getProjection();
  return ol_proj_js__WEBPACK_IMPORTED_MODULE_3__["toLonLat"](coords, projection);
};

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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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

  if (!config['service']) {
    config['service'] = 'route';
  }

  if (!config['profile']) {
    config['profile'] = 'car';
  }

  var url = this.ngeoOsrmBackendUrl_;

  if (config['instance']) {
    url += config['instance'] + "/";
  }

  url += config['service'] + "/" + this.protocolVersion_ + "/" + config['profile'] + "/";
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
  config['service'] = 'nearest';

  if (!config['profile']) {
    config['profile'] = 'car';
  }

  var url = this.ngeoOsrmBackendUrl_;

  if (config['instance']) {
    url += config['instance'] + "/";
  }

  url += config['service'] + "/" + this.protocolVersion_ + "/" + config['profile'] + "/";
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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

/***/ 37:
/*!****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/routing.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/routing.js */"./examples/routing.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0aW5nL05vbWluYXRpbUlucHV0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvUm91dGluZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9Sb3V0aW5nRmVhdHVyZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9Sb3V0aW5nU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvbm9taW5hdGltaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGluZy9yb3V0aW5nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRpbmcvcm91dGluZ2ZlYXR1cmUuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInJvdXRpbmdcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMzcsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICcuL3JvdXRpbmcuY3NzJztcbmltcG9ydCAnb2wvb2wuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvZm9udGF3ZXNvbWUubWluLmNzcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb1JvdXRpbmdNb2R1bGUgZnJvbSAnbmdlby9yb3V0aW5nL21vZHVsZS5qcyc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnZ2V0dGV4dCcsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb1JvdXRpbmdNb2R1bGUubmFtZV0pO1xuXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcigpIHtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldLFxuICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgY2VudGVyOiBbOTMxMDEwLjE1MzU5ODk0NDIsIDU5NjE3MDUuODQyMjk3MjU0XSxcbiAgICAgIHpvb206IDlcbiAgICB9KVxuICB9KTtcbiAgdGhpcy5yb3V0aW5nZmVhdHVyZUFjdGl2ZSA9IHRydWU7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkZWxlbWVudFwiLCBcIiRzY29wZVwiLCBcIm5nZW9Ob21pbmF0aW1TZXJ2aWNlXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb1NlYXJjaFNlYXJjaERpcmVjdGl2ZSBmcm9tICduZ2VvL3NlYXJjaC9zZWFyY2hEaXJlY3RpdmUuanMnO1xuaW1wb3J0IG5nZW9Sb3V0aW5nTm9taW5hdGltU2VydmljZSBmcm9tICduZ2VvL3JvdXRpbmcvTm9taW5hdGltU2VydmljZS5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnQnLCBbbmdlb1NlYXJjaFNlYXJjaERpcmVjdGl2ZS5uYW1lLCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UubmFtZV0pO1xubW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCduZ2VvL3JvdXRpbmcvbm9taW5hdGltaW5wdXQnLCByZXF1aXJlKCcuL25vbWluYXRpbWlucHV0Lmh0bWwnKSk7XG59XSk7XG5tb2R1bGUudmFsdWUoJ25nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnRUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uICgkYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gJGF0dHJzWyduZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmwnXTtcbiAgcmV0dXJuIHRlbXBsYXRlVXJsICE9PSB1bmRlZmluZWQgPyB0ZW1wbGF0ZVVybCA6ICduZ2VvL3JvdXRpbmcvbm9taW5hdGltaW5wdXQnO1xufSk7XG5uZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmwuJGluamVjdCA9IFtcIiRhdHRyc1wiLCBcIm5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnRUZW1wbGF0ZVVybFwiXTtcblxuZnVuY3Rpb24gbmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudFRlbXBsYXRlVXJsKCRhdHRycywgbmdlb1JvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudFRlbXBsYXRlVXJsKSB7XG4gIHJldHVybiBuZ2VvUm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50VGVtcGxhdGVVcmwoJGF0dHJzKTtcbn1cblxuZnVuY3Rpb24gQ29udHJvbGxlcigkZWxlbWVudCwgJHNjb3BlLCBuZ2VvTm9taW5hdGltU2VydmljZSkge1xuICB0aGlzLmVsZW1lbnRfID0gJGVsZW1lbnQ7XG4gIHRoaXMuJHNjb3BlXyA9ICRzY29wZTtcbiAgdGhpcy5uZ2VvTm9taW5hdGltU2VydmljZSA9IG5nZW9Ob21pbmF0aW1TZXJ2aWNlO1xuICB0aGlzLm9uU2VsZWN0O1xuICB0aGlzLmlucHV0VmFsdWU7XG4gIHRoaXMub3B0aW9ucyA9IHt9O1xuICB0aGlzLmRhdGFzZXRzID0gW3tcbiAgICBuYW1lOiAnbm9taW5hdGltJyxcbiAgICBkaXNwbGF5OiAnbmFtZScsXG4gICAgc291cmNlOiB0aGlzLm5nZW9Ob21pbmF0aW1TZXJ2aWNlLnR5cGVhaGVhZFNvdXJjZURlYm91bmNlZFxuICB9XTtcbiAgdGhpcy5saXN0ZW5lcnMgPSB7XG4gICAgc2VsZWN0OiB0aGlzLnNlbGVjdF8uYmluZCh0aGlzKVxuICB9O1xuICB0aGlzLnBsYWNlaG9sZGVyID0gJyc7XG59XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLnNlbGVjdF8gPSBmdW5jdGlvbiAoZXZlbnQsIHN1Z2dlc3Rpb24sIGRhdGFzZXQpIHtcbiAgaWYgKHRoaXMub25TZWxlY3QpIHtcbiAgICB0aGlzLm9uU2VsZWN0KHN1Z2dlc3Rpb24pO1xuICB9XG59O1xuXG52YXIgcm91dGluZ05vbWluYXRpbUlucHV0Q29tcG9uZW50ID0ge1xuICBjb250cm9sbGVyOiBDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgICdvblNlbGVjdCc6ICc9P25nZW9Ob21pbmF0aW1JbnB1dE9uU2VsZWN0JyxcbiAgICAnaW5wdXRWYWx1ZSc6ICc9P25nZW9Ob21pbmF0aW1JbnB1dFZhbHVlJyxcbiAgICAncGxhY2Vob2xkZXInOiAnQD9uZ2VvTm9taW5hdGltSW5wdXRQbGFjZWhvbGRlcidcbiAgfSxcbiAgdGVtcGxhdGVVcmw6IG5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnRUZW1wbGF0ZVVybFxufTtcbm1vZHVsZS5jb21wb25lbnQoJ25nZW9Ob21pbmF0aW1JbnB1dCcsIHJvdXRpbmdOb21pbmF0aW1JbnB1dENvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiTm9taW5hdGltU2VydmljZS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkaW5qZWN0b3JcIiwgXCJuZ2VvRGVib3VuY2VcIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZS5qcyc7XG5leHBvcnQgZnVuY3Rpb24gTm9taW5hdGltU2VydmljZSgkaHR0cCwgJGluamVjdG9yLCBuZ2VvRGVib3VuY2UpIHtcbiAgdGhpcy4kaHR0cF8gPSAkaHR0cDtcbiAgdGhpcy5uZ2VvRGVib3VuY2VfID0gbmdlb0RlYm91bmNlO1xuICB0aGlzLm5vbWluYXRpbVVybF8gPSAnaHR0cHM6Ly9ub21pbmF0aW0ub3BlbnN0cmVldG1hcC5vcmcvJztcblxuICBpZiAoJGluamVjdG9yLmhhcygnbmdlb05vbWluYXRpbVVybCcpKSB7XG4gICAgdGhpcy5ub21pbmF0aW1VcmxfID0gJGluamVjdG9yLmdldCgnbmdlb05vbWluYXRpbVVybCcpO1xuXG4gICAgaWYgKHRoaXMubm9taW5hdGltVXJsXy5zdWJzdHIoLTEpICE9PSAnLycpIHtcbiAgICAgIHRoaXMubm9taW5hdGltVXJsXyArPSAnLyc7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5zZWFyY2hEZWZhdWx0UGFyYW1zXyA9IHt9O1xuXG4gIGlmICgkaW5qZWN0b3IuaGFzKCduZ2VvTm9taW5hdGltU2VhcmNoRGVmYXVsdFBhcmFtcycpKSB7XG4gICAgdGhpcy5zZWFyY2hEZWZhdWx0UGFyYW1zXyA9ICRpbmplY3Rvci5nZXQoJ25nZW9Ob21pbmF0aW1TZWFyY2hEZWZhdWx0UGFyYW1zJyk7XG4gIH1cblxuICB0aGlzLnR5cGVhaGVhZERlYm91bmNlRGVsYXlfID0gNTAwO1xuICB0aGlzLnR5cGVhaGVhZFNvdXJjZURlYm91bmNlZCA9IHRoaXMubmdlb0RlYm91bmNlXyh0aGlzLnR5cGVhaGVhZFNvdXJjZV8uYmluZCh0aGlzKSwgdGhpcy50eXBlYWhlYWREZWJvdW5jZURlbGF5XywgdHJ1ZSk7XG59XG5cbk5vbWluYXRpbVNlcnZpY2UucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uIChxdWVyeSwgcGFyYW1zKSB7XG4gIHZhciB1cmwgPSB0aGlzLm5vbWluYXRpbVVybF8gKyBcInNlYXJjaD9xPVwiICsgcXVlcnk7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZWFyY2hEZWZhdWx0UGFyYW1zXywgcGFyYW1zKTtcbiAgcGFyYW1zWydmb3JtYXQnXSA9ICdqc29uJztcblxuICBpZiAocGFyYW1zKSB7XG4gICAgdXJsICs9ICcmJztcbiAgICB2YXIgb3B0aW9ucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBvcHRpb24gPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbiArIFwiPVwiICsgcGFyYW1zW29wdGlvbl0pO1xuICAgIH1cblxuICAgIHVybCArPSBvcHRpb25zLmpvaW4oJyYnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLiRodHRwXy5nZXQodXJsKTtcbn07XG5cbk5vbWluYXRpbVNlcnZpY2UucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoY29vcmRpbmF0ZSwgcGFyYW1zKSB7XG4gIHZhciB1cmwgPSB0aGlzLm5vbWluYXRpbVVybF8gKyBcInJldmVyc2VcIjtcbiAgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTtcbiAgcGFyYW1zWydsb24nXSA9IGNvb3JkaW5hdGVbMF07XG4gIHBhcmFtc1snbGF0J10gPSBjb29yZGluYXRlWzFdO1xuICBwYXJhbXNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXG4gIGlmIChwYXJhbXMpIHtcbiAgICB1cmwgKz0gJz8nO1xuICAgIHZhciBvcHRpb25zID0gW107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMocGFyYW1zKTsgX2kyIDwgX09iamVjdCRrZXlzMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgb3B0aW9uID0gX09iamVjdCRrZXlzMltfaTJdO1xuICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbiArIFwiPVwiICsgcGFyYW1zW29wdGlvbl0pO1xuICAgIH1cblxuICAgIHVybCArPSBvcHRpb25zLmpvaW4oJyYnKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLiRodHRwXy5nZXQodXJsKTtcbn07XG5cbk5vbWluYXRpbVNlcnZpY2UucHJvdG90eXBlLnR5cGVhaGVhZFNvdXJjZV8gPSBmdW5jdGlvbiAocXVlcnksIHN5bmNSZXN1bHRzLCBhc3luY1Jlc3VsdHMpIHtcbiAgdmFyIG9uU3VjY2Vzc18gPSBmdW5jdGlvbiBvblN1Y2Nlc3NfKHJlc3ApIHtcbiAgICB2YXIgcGFyc2UgPSBmdW5jdGlvbiBwYXJzZShyZXN1bHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvb3JkaW5hdGU6IFtyZXN1bHQubG9uLCByZXN1bHQubGF0XSxcbiAgICAgICAgbmFtZTogcmVzdWx0LmRpc3BsYXlfbmFtZVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgYXN5bmNSZXN1bHRzKHJlc3AuZGF0YS5tYXAocGFyc2UpKTtcbiAgfTtcblxuICB2YXIgb25FcnJvcl8gPSBmdW5jdGlvbiBvbkVycm9yXyhyZXNwKSB7XG4gICAgYXN5bmNSZXN1bHRzKFtdKTtcbiAgfTtcblxuICB0aGlzLnNlYXJjaChxdWVyeSwge30pLnRoZW4ob25TdWNjZXNzXywgb25FcnJvcl8pO1xufTtcblxudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvTm9taW5hdGltU2VydmljZScsIFtuZ2VvTWlzY0RlYm91bmNlLm5hbWVdKTtcbm1vZHVsZS5zZXJ2aWNlKCduZ2VvTm9taW5hdGltU2VydmljZScsIE5vbWluYXRpbVNlcnZpY2UpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRpbmplY3RvclwiLCBcIiRzY29wZVwiLCBcIm5nZW9Sb3V0aW5nU2VydmljZVwiLCBcIm5nZW9Ob21pbmF0aW1TZXJ2aWNlXCIsIFwiJHFcIiwgXCJuZ2VvRGVib3VuY2VcIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgbmdlb01pc2NGaWx0ZXJzIGZyb20gJ25nZW8vbWlzYy9maWx0ZXJzLmpzJztcbmltcG9ydCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UuanMnO1xuaW1wb3J0IG5nZW9Sb3V0aW5nUm91dGluZ1NlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL1JvdXRpbmdTZXJ2aWNlLmpzJztcbmltcG9ydCBuZ2VvUm91dGluZ1JvdXRpbmdGZWF0dXJlQ29tcG9uZW50IGZyb20gJ25nZW8vcm91dGluZy9Sb3V0aW5nRmVhdHVyZUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgb2xGb3JtYXRHZW9KU09OIGZyb20gJ29sL2Zvcm1hdC9HZW9KU09OLmpzJztcbmltcG9ydCBvbFNvdXJjZVZlY3RvciBmcm9tICdvbC9zb3VyY2UvVmVjdG9yLmpzJztcbmltcG9ydCBvbExheWVyVmVjdG9yIGZyb20gJ29sL2xheWVyL1ZlY3Rvci5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0eWxlIGZyb20gJ29sL3N0eWxlL1N0eWxlLmpzJztcbmltcG9ydCBvbFN0eWxlRmlsbCBmcm9tICdvbC9zdHlsZS9GaWxsLmpzJztcbmltcG9ydCBvbFN0eWxlU3Ryb2tlIGZyb20gJ29sL3N0eWxlL1N0cm9rZS5qcyc7XG5pbXBvcnQgeyB0b0xvbkxhdCB9IGZyb20gJ29sL3Byb2ouanMnO1xuaW1wb3J0IG9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlLmpzJztcbmltcG9ydCBvbEdlb21MaW5lU3RyaW5nIGZyb20gJ29sL2dlb20vTGluZVN0cmluZy5qcyc7XG5pbXBvcnQgJ25nZW8vc2Fzcy9mb250LnNjc3MnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvUm91dGluZ0NvbXBvbmVudCcsIFtuZ2VvTWlzY0RlYm91bmNlLm5hbWUsIG5nZW9NaXNjRmlsdGVycy5uYW1lLCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UubmFtZSwgbmdlb1JvdXRpbmdSb3V0aW5nU2VydmljZS5uYW1lLCBuZ2VvUm91dGluZ1JvdXRpbmdGZWF0dXJlQ29tcG9uZW50Lm5hbWVdKTtcbm1vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnbmdlby9yb3V0aW5nL3JvdXRpbmcnLCByZXF1aXJlKCcuL3JvdXRpbmcuaHRtbCcpKTtcbn1dKTtcbm1vZHVsZS52YWx1ZSgnbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uICgkYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gJGF0dHJzWyduZ2VvUm91dGluZ1RlbXBsYXRlVXJsJ107XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnbmdlby9yb3V0aW5nL3JvdXRpbmcnO1xufSk7XG5uZ2VvUm91dGluZ1RlbXBsYXRlVXJsLiRpbmplY3QgPSBbXCIkYXR0cnNcIiwgXCJuZ2VvUm91dGluZ1RlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBuZ2VvUm91dGluZ1RlbXBsYXRlVXJsKCRhdHRycywgbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCkge1xuICByZXR1cm4gbmdlb1JvdXRpbmdUZW1wbGF0ZVVybCgkYXR0cnMpO1xufVxuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRpbmplY3RvciwgJHNjb3BlLCBuZ2VvUm91dGluZ1NlcnZpY2UsIG5nZW9Ob21pbmF0aW1TZXJ2aWNlLCAkcSwgbmdlb0RlYm91bmNlKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy4kc2NvcGVfID0gJHNjb3BlO1xuICB0aGlzLm5nZW9Sb3V0aW5nU2VydmljZV8gPSBuZ2VvUm91dGluZ1NlcnZpY2U7XG4gIHRoaXMubmdlb05vbWluYXRpbVNlcnZpY2VfID0gbmdlb05vbWluYXRpbVNlcnZpY2U7XG4gIHRoaXMucm91dGluZ09wdGlvbnNfID0gJGluamVjdG9yLmhhcygnbmdlb1JvdXRpbmdPcHRpb25zJykgPyAkaW5qZWN0b3IuZ2V0KCduZ2VvUm91dGluZ09wdGlvbnMnKSA6IHt9O1xuICB0aGlzLnJvdXRpbmdQcm9maWxlcyA9IHRoaXMucm91dGluZ09wdGlvbnNfLnByb2ZpbGVzIHx8IFtdO1xuICB0aGlzLnNlbGVjdGVkUm91dGluZ1Byb2ZpbGUgPSB0aGlzLnJvdXRpbmdQcm9maWxlcy5sZW5ndGggPiAwID8gdGhpcy5yb3V0aW5nUHJvZmlsZXNbMF0gOiBudWxsO1xuICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMuc2VsZWN0ZWRSb3V0aW5nUHJvZmlsZTtcbiAgfSwgdGhpcy5jYWxjdWxhdGVSb3V0ZS5iaW5kKHRoaXMpKTtcbiAgdGhpcy4kcV8gPSAkcTtcbiAgdGhpcy5tYXA7XG4gIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gIHRoaXMuc3RhcnRGZWF0dXJlXyA9IG51bGw7XG4gIHRoaXMudGFyZ2V0RmVhdHVyZV8gPSBudWxsO1xuICB0aGlzLnZpYUFycmF5ID0gW107XG4gIHRoaXMuY29sb3JzID0ge1xuICAgICdzdGFydC5maWxsJzogJyM2QkU2MkUnLFxuICAgICdzdGFydC5zdHJva2UnOiAnIzRDQjAxRScsXG4gICAgJ2Rlc3RpbmF0aW9uLmZpbGwnOiAnI0ZGM0UxMycsXG4gICAgJ2Rlc3RpbmF0aW9uLnN0cm9rZSc6ICcjQ0QzNDEyJyxcbiAgICAndmlhLmZpbGwnOiAnIzc2NzY3NicsXG4gICAgJ3ZpYS5zdHJva2UnOiAnIzAwMDAwMCdcbiAgfTtcbiAgdGhpcy5yb3V0ZVNvdXJjZV8gPSBuZXcgb2xTb3VyY2VWZWN0b3Ioe1xuICAgIGZlYXR1cmVzOiBbXVxuICB9KTtcbiAgdGhpcy5yb3V0ZUxheWVyXyA9IG5ldyBvbExheWVyVmVjdG9yKHtcbiAgICBzb3VyY2U6IHRoaXMucm91dGVTb3VyY2VfLFxuICAgIHN0eWxlOiBuZXcgb2xTdHlsZVN0eWxlKHtcbiAgICAgIGZpbGw6IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICAgIGNvbG9yOiAncmdiYSgxNiwgMTEyLCAyOSwgMC42KSdcbiAgICAgIH0pLFxuICAgICAgc3Ryb2tlOiBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgICAgIGNvbG9yOiAncmdiYSgxNiwgMTEyLCAyOSwgMC42KScsXG4gICAgICAgIHdpZHRoOiA1XG4gICAgICB9KVxuICAgIH0pXG4gIH0pO1xuICB0aGlzLnJvdXRlRGlzdGFuY2UgPSAwO1xuICB0aGlzLnJvdXRlRHVyYXRpb24gPSBudWxsO1xuICB0aGlzLnJlZ2V4SXNGb3JtYXR0ZWRDb29yZCA9IC9cXGQrXFwuXFxkK1xcL1xcZCtcXC5cXGQrLztcbiAgdGhpcy5kcmF3XyA9IG51bGw7XG4gIHZhciBkZWJvdW5jZURlbGF5ID0gMjAwO1xuICB0aGlzLmhhbmRsZUNoYW5nZSA9IG5nZW9EZWJvdW5jZSh0aGlzLmNhbGN1bGF0ZVJvdXRlLmJpbmQodGhpcyksIGRlYm91bmNlRGVsYXksIHRydWUpO1xufVxuXG5Db250cm9sbGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLnJvdXRlTGF5ZXJfKTtcbn07XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLmNsZWFyUm91dGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc3RhcnRGZWF0dXJlXyA9IG51bGw7XG4gIHRoaXMudGFyZ2V0RmVhdHVyZV8gPSBudWxsO1xuICB0aGlzLnZpYUFycmF5ID0gW107XG4gIHRoaXMucm91dGVEaXN0YW5jZSA9IDA7XG4gIHRoaXMucm91dGVEdXJhdGlvbiA9IG51bGw7XG4gIHRoaXMucm91dGVTb3VyY2VfLmNsZWFyKCk7XG4gIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5nZXRMb25MYXRGcm9tUG9pbnRfID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gIHZhciBnZW9tZXRyeSA9IHBvaW50LmdldEdlb21ldHJ5KCk7XG4gIHZhciBjb29yZHMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICB2YXIgcHJvamVjdGlvbiA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gIHJldHVybiB0b0xvbkxhdChjb29yZHMsIHByb2plY3Rpb24pO1xufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUucmV2ZXJzZVJvdXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG1wRmVhdHVyZSA9IHRoaXMuc3RhcnRGZWF0dXJlXztcbiAgdGhpcy5zdGFydEZlYXR1cmVfID0gdGhpcy50YXJnZXRGZWF0dXJlXztcbiAgdGhpcy50YXJnZXRGZWF0dXJlXyA9IHRtcEZlYXR1cmU7XG4gIHRoaXMudmlhQXJyYXkgPSB0aGlzLnZpYUFycmF5LnJldmVyc2UoKTtcbn07XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLnBhcnNlUm91dGVfID0gZnVuY3Rpb24gKHJvdXRlKSB7XG4gIHZhciBwYXJzZWRSb3V0ZXMgPSBbXTtcbiAgdmFyIGZvcm1hdCA9IG5ldyBvbEZvcm1hdEdlb0pTT04oKTtcbiAgdmFyIGZvcm1hdENvbmZpZyA9IHtcbiAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgZmVhdHVyZVByb2plY3Rpb246IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKClcbiAgfTtcblxuICBpZiAocm91dGUubGVncykge1xuICAgIHZhciBfcmVmO1xuXG4gICAgcGFyc2VkUm91dGVzID0gcm91dGUubGVncy5tYXAoZnVuY3Rpb24gKGxlZykge1xuICAgICAgcmV0dXJuIGxlZy5zdGVwcy5tYXAoZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBvbEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiBmb3JtYXQucmVhZEdlb21ldHJ5KHN0ZXAuZ2VvbWV0cnksIGZvcm1hdENvbmZpZylcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBwYXJzZWRSb3V0ZXMgPSAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgcGFyc2VkUm91dGVzKTtcbiAgfSBlbHNlIGlmIChyb3V0ZS5nZW9tZXRyeSkge1xuICAgIHBhcnNlZFJvdXRlcy5wdXNoKG5ldyBvbEZlYXR1cmUoe1xuICAgICAgZ2VvbWV0cnk6IGZvcm1hdC5yZWFkR2VvbWV0cnkocm91dGUuZ2VvbWV0cnksIGZvcm1hdENvbmZpZylcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkUm91dGVzO1xufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuY2FsY3VsYXRlUm91dGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnN0YXJ0RmVhdHVyZV8gJiYgdGhpcy50YXJnZXRGZWF0dXJlXykge1xuICAgIHRoaXMucm91dGVTb3VyY2VfLmNsZWFyKCk7XG4gICAgdmFyIGNvb3JkRnJvbSA9IHRoaXMuZ2V0TG9uTGF0RnJvbVBvaW50Xyh0aGlzLnN0YXJ0RmVhdHVyZV8pO1xuICAgIHZhciBjb29yZFRvID0gdGhpcy5nZXRMb25MYXRGcm9tUG9pbnRfKHRoaXMudGFyZ2V0RmVhdHVyZV8pO1xuICAgIHZhciB2aWFzID0gdGhpcy52aWFBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHZpYSkge1xuICAgICAgcmV0dXJuIHZpYS5mZWF0dXJlICE9PSBudWxsO1xuICAgIH0pLm1hcChmdW5jdGlvbiAodmlhKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmdldExvbkxhdEZyb21Qb2ludF8odmlhLmZlYXR1cmUpO1xuICAgIH0pO1xuICAgIHZhciByb3V0ZSA9IFtjb29yZEZyb21dLmNvbmNhdCh2aWFzLCBbY29vcmRUb10pO1xuXG4gICAgdmFyIG9uU3VjY2Vzc18gPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgdmFyIGZlYXR1cmVzID0gdGhpcy5wYXJzZVJvdXRlXyhyZXNwLmRhdGEucm91dGVzWzBdKTtcblxuICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gcm91dGUgb3Igbm90IHN1cHBvcnRlZCBmb3JtYXQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yb3V0ZVNvdXJjZV8uYWRkRmVhdHVyZXMoZmVhdHVyZXMpO1xuICAgICAgdGhpcy5tYXAuZ2V0VmlldygpLmZpdCh0aGlzLnJvdXRlU291cmNlXy5nZXRFeHRlbnQoKSk7XG4gICAgICB0aGlzLnJvdXRlRGlzdGFuY2UgPSBwYXJzZUludChyZXNwLmRhdGEucm91dGVzWzBdLmRpc3RhbmNlLCAxMCk7XG4gICAgICB0aGlzLnJvdXRlRHVyYXRpb24gPSByZXNwLmRhdGEucm91dGVzWzBdLmR1cmF0aW9uO1xuICAgICAgdmFyIHN0YXJ0Um91dGUgPSBmZWF0dXJlc1swXS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVBdCgwKTtcbiAgICAgIHZhciBlbmRSb3V0ZSA9IGZlYXR1cmVzW2ZlYXR1cmVzLmxlbmd0aCAtIDFdLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZUF0KDEpO1xuICAgICAgdmFyIHN0YXJ0VG9Sb3V0ZSA9IFt0aGlzLnN0YXJ0RmVhdHVyZV8uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpLCBzdGFydFJvdXRlXTtcbiAgICAgIHZhciByb3V0ZVRvRW5kID0gW2VuZFJvdXRlLCB0aGlzLnRhcmdldEZlYXR1cmVfLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKV07XG4gICAgICB2YXIgcm91dGVDb25uZWN0aW9ucyA9IFtuZXcgb2xGZWF0dXJlKG5ldyBvbEdlb21MaW5lU3RyaW5nKHN0YXJ0VG9Sb3V0ZSkpLCBuZXcgb2xGZWF0dXJlKG5ldyBvbEdlb21MaW5lU3RyaW5nKHJvdXRlVG9FbmQpKV07XG4gICAgICB0aGlzLnJvdXRlU291cmNlXy5hZGRGZWF0dXJlcyhyb3V0ZUNvbm5lY3Rpb25zKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB2YXIgb25FcnJvcl8gPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnRXJyb3I6IHJvdXRpbmcgc2VydmVyIG5vdCByZXNwb25kaW5nLic7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgIG9wdGlvbnNbJ3N0ZXBzJ10gPSB0cnVlO1xuICAgIG9wdGlvbnNbJ292ZXJ2aWV3J10gPSBmYWxzZTtcbiAgICBvcHRpb25zWydnZW9tZXRyaWVzJ10gPSAnZ2VvanNvbic7XG4gICAgdmFyIGNvbmZpZyA9IHt9O1xuICAgIGNvbmZpZ1snb3B0aW9ucyddID0gb3B0aW9ucztcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkUm91dGluZ1Byb2ZpbGUpIHtcbiAgICAgIGNvbmZpZ1snaW5zdGFuY2UnXSA9IHRoaXMuc2VsZWN0ZWRSb3V0aW5nUHJvZmlsZVsncHJvZmlsZSddO1xuICAgIH1cblxuICAgIHRoaXMuJHFfLndoZW4odGhpcy5uZ2VvUm91dGluZ1NlcnZpY2VfLmdldFJvdXRlKHJvdXRlLCBjb25maWcpKS50aGVuKG9uU3VjY2Vzc18uYmluZCh0aGlzKSwgb25FcnJvcl8uYmluZCh0aGlzKSk7XG4gIH1cbn07XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLmFkZFZpYSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy52aWFBcnJheS5wdXNoKHtcbiAgICBmZWF0dXJlOiBudWxsLFxuICAgIG9uU2VsZWN0OiBudWxsXG4gIH0pO1xufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuZGVsZXRlVmlhID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gIGlmICh0aGlzLnZpYUFycmF5Lmxlbmd0aCA+IGluZGV4KSB7XG4gICAgdGhpcy52aWFBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuY2FsY3VsYXRlUm91dGUoKTtcbiAgfVxufTtcblxubW9kdWxlLmNvbXBvbmVudCgnbmdlb1JvdXRpbmcnLCB7XG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgJ21hcCc6ICc8bmdlb1JvdXRpbmdNYXAnXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiBuZ2VvUm91dGluZ1RlbXBsYXRlVXJsXG59KTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIiwgXCIkdGltZW91dFwiLCBcIiRxXCIsIFwibmdlb05vbWluYXRpbVNlcnZpY2VcIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvUm91dGluZ05vbWluYXRpbVNlcnZpY2UgZnJvbSAnbmdlby9yb3V0aW5nL05vbWluYXRpbVNlcnZpY2UuanMnO1xuaW1wb3J0IG5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnQgZnJvbSAnbmdlby9yb3V0aW5nL05vbWluYXRpbUlucHV0Q29tcG9uZW50LmpzJztcbmltcG9ydCAqIGFzIG9sUHJvaiBmcm9tICdvbC9wcm9qLmpzJztcbmltcG9ydCBvbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZS5qcyc7XG5pbXBvcnQgb2xDb2xsZWN0aW9uIGZyb20gJ29sL0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IG9sU291cmNlVmVjdG9yIGZyb20gJ29sL3NvdXJjZS9WZWN0b3IuanMnO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xuaW1wb3J0IG9sU3R5bGVUZXh0IGZyb20gJ29sL3N0eWxlL1RleHQuanMnO1xuaW1wb3J0IG9sU3R5bGVGaWxsIGZyb20gJ29sL3N0eWxlL0ZpbGwuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlLmpzJztcbmltcG9ydCBvbEdlb21Qb2ludCBmcm9tICdvbC9nZW9tL1BvaW50LmpzJztcbmltcG9ydCBvbEludGVyYWN0aW9uTW9kaWZ5IGZyb20gJ29sL2ludGVyYWN0aW9uL01vZGlmeS5qcyc7XG5pbXBvcnQgb2xJbnRlcmFjdGlvbkRyYXcgZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdy5qcyc7XG5pbXBvcnQgJ25nZW8vc2Fzcy9mb250LnNjc3MnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvUm91dGluZ0ZlYXR1cmVDb21wb25lbnQnLCBbbmdlb1JvdXRpbmdOb21pbmF0aW1TZXJ2aWNlLm5hbWUsIG5nZW9Sb3V0aW5nTm9taW5hdGltSW5wdXRDb21wb25lbnQubmFtZV0pO1xubW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCduZ2VvL3JvdXRpbmcvcm91dGluZ2ZlYXR1cmUnLCByZXF1aXJlKCcuL3JvdXRpbmdmZWF0dXJlLmh0bWwnKSk7XG59XSk7XG5tb2R1bGUudmFsdWUoJ25nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsJywgZnVuY3Rpb24gKCRhdHRycykge1xuICB2YXIgdGVtcGxhdGVVcmwgPSAkYXR0cnNbJ25nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsJ107XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnbmdlby9yb3V0aW5nL3JvdXRpbmdmZWF0dXJlJztcbn0pO1xubmdlb1JvdXRpbmdGZWF0dXJlVGVtcGxhdGVVcmwuJGluamVjdCA9IFtcIiRhdHRyc1wiLCBcIm5nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBuZ2VvUm91dGluZ0ZlYXR1cmVUZW1wbGF0ZVVybCgkYXR0cnMsIG5nZW9Sb3V0aW5nRmVhdHVyZVRlbXBsYXRlVXJsKSB7XG4gIHJldHVybiBuZ2VvUm91dGluZ0ZlYXR1cmVUZW1wbGF0ZVVybCgkYXR0cnMpO1xufVxuXG5mdW5jdGlvbiBDb250cm9sbGVyKCRzY29wZSwgJHRpbWVvdXQsICRxLCBuZ2VvTm9taW5hdGltU2VydmljZSkge1xuICB0aGlzLnNjb3BlXyA9ICRzY29wZTtcbiAgdGhpcy50aW1lb3V0XyA9ICR0aW1lb3V0O1xuICB0aGlzLiRxXyA9ICRxO1xuICB0aGlzLm5nZW9Ob21pbmF0aW1TZXJ2aWNlXyA9IG5nZW9Ob21pbmF0aW1TZXJ2aWNlO1xuICB0aGlzLm1hcDtcbiAgdGhpcy5mZWF0dXJlO1xuICB0aGlzLmZlYXR1cmVMYWJlbCA9ICcnO1xuICB0aGlzLmZpbGxDb2xvcjtcbiAgdGhpcy5zdHJva2VDb2xvcjtcbiAgdGhpcy5vbkNoYW5nZTtcbiAgdGhpcy52ZWN0b3JGZWF0dXJlc18gPSBuZXcgb2xDb2xsZWN0aW9uKCk7XG4gIHRoaXMudmVjdG9yU291cmNlXyA9IG5ldyBvbFNvdXJjZVZlY3Rvcih7XG4gICAgZmVhdHVyZXM6IHRoaXMudmVjdG9yRmVhdHVyZXNfXG4gIH0pO1xuICB0aGlzLnZlY3RvckxheWVyXyA9IG5ldyBvbExheWVyVmVjdG9yKHtcbiAgICBzb3VyY2U6IHRoaXMudmVjdG9yU291cmNlXyxcbiAgICBzdHlsZTogZnVuY3Rpb24gKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICAgIHJldHVybiBbbmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgICAgIHRleHQ6IG5ldyBvbFN0eWxlVGV4dCh7XG4gICAgICAgICAgZmlsbDogbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmZpbGxDb2xvciB8fCAnIzAwMDAwMCdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb250OiAnOTAwIDMwcHggXCJGb250IEF3ZXNvbWUgNSBGcmVlXCInLFxuICAgICAgICAgIG9mZnNldFk6IC0xNSxcbiAgICAgICAgICBzdHJva2U6IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgICAgICAgIHdpZHRoOiAzLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuc3Ryb2tlQ29sb3IgfHwgJyMwMDAwMDAnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGV4dDogXCJcXHVGMDQxXCJcbiAgICAgICAgfSlcbiAgICAgIH0pXTtcbiAgICB9LmJpbmQodGhpcylcbiAgfSk7XG4gIHRoaXMubW9kaWZ5RmVhdHVyZV8gPSBuZXcgb2xJbnRlcmFjdGlvbk1vZGlmeSh7XG4gICAgZmVhdHVyZXM6IHRoaXMudmVjdG9yRmVhdHVyZXNfXG4gIH0pO1xuICB0aGlzLmRyYXdfID0gbnVsbDtcbiAgdGhpcy5vblNlbGVjdCA9IHRoaXMub25TZWxlY3RfLmJpbmQodGhpcyk7XG4gIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG59XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy52ZWN0b3JMYXllcl8pO1xuICB0aGlzLm1vZGlmeUZlYXR1cmVfLnNldEFjdGl2ZSh0cnVlKTtcbiAgdGhpcy5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5tb2RpZnlGZWF0dXJlXyk7XG4gIHRoaXMubW9kaWZ5RmVhdHVyZV8ub24oJ21vZGlmeWVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBmZWF0dXJlID0gZXZlbnQuZmVhdHVyZXMuZ2V0QXJyYXkoKVswXTtcblxuICAgIF90aGlzLnZlY3RvclNvdXJjZV8uY2xlYXIoKTtcblxuICAgIF90aGlzLnNuYXBGZWF0dXJlXyhmZWF0dXJlKTtcbiAgfSk7XG4gIHRoaXMuc2NvcGVfLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzLmZlYXR1cmU7XG4gIH0sIGZ1bmN0aW9uIChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIF90aGlzLm9uRmVhdHVyZUNoYW5nZV8oKTtcbiAgICB9XG5cbiAgICBpZiAobmV3VmFsID09PSBudWxsKSB7XG4gICAgICBfdGhpcy52ZWN0b3JTb3VyY2VfLmNsZWFyKCk7XG5cbiAgICAgIF90aGlzLmZlYXR1cmVMYWJlbCA9ICcnO1xuICAgIH1cbiAgfSk7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS4kb25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLnZlY3RvckxheWVyXyk7XG4gIHRoaXMubW9kaWZ5RmVhdHVyZV8uc2V0QWN0aXZlKGZhbHNlKTtcbiAgdGhpcy5tYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5tb2RpZnlGZWF0dXJlXyk7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIGlmICh0aGlzLmRyYXdfKSB7XG4gICAgdGhpcy5tYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5kcmF3Xyk7XG4gIH1cblxuICB0aGlzLmRyYXdfID0gbmV3IG9sSW50ZXJhY3Rpb25EcmF3KHtcbiAgICBmZWF0dXJlczogdGhpcy52ZWN0b3JGZWF0dXJlc18sXG4gICAgdHlwZTogJ1BvaW50J1xuICB9KTtcbiAgdGhpcy5kcmF3Xy5vbignZHJhd3N0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczIuZmVhdHVyZSkge1xuICAgICAgX3RoaXMyLnZlY3RvclNvdXJjZV8ucmVtb3ZlRmVhdHVyZShfdGhpczIuZmVhdHVyZSk7XG4gICAgfVxuICB9KTtcbiAgdGhpcy5kcmF3Xy5vbignZHJhd2VuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChfdGhpczIuZHJhd18pIHtcbiAgICAgIF90aGlzMi5tYXAucmVtb3ZlSW50ZXJhY3Rpb24oX3RoaXMyLmRyYXdfKTtcbiAgICB9XG5cbiAgICBfdGhpczIuc25hcEZlYXR1cmVfKGV2ZW50LmZlYXR1cmUpO1xuXG4gICAgX3RoaXMyLm1vZGlmeUZlYXR1cmVfLnNldEFjdGl2ZSh0cnVlKTtcbiAgfSk7XG4gIHRoaXMubW9kaWZ5RmVhdHVyZV8uc2V0QWN0aXZlKGZhbHNlKTtcbiAgdGhpcy5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5kcmF3Xyk7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5zZXRGZWF0dXJlXyA9IGZ1bmN0aW9uIChjb29yZGluYXRlLCBsYWJlbCkge1xuICB2YXIgdHJhbnNmb3JtZWRDb29yZGluYXRlID0gb2xQcm9qLmZyb21Mb25MYXQoY29vcmRpbmF0ZSwgdGhpcy5tYXAuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKSk7XG5cbiAgaWYgKGxhYmVsID09PSAnJykge1xuICAgIGxhYmVsID0gdHJhbnNmb3JtZWRDb29yZGluYXRlLmpvaW4oJy8nKTtcbiAgfVxuXG4gIHRoaXMuZmVhdHVyZSA9IG5ldyBvbEZlYXR1cmUoe1xuICAgIGdlb21ldHJ5OiBuZXcgb2xHZW9tUG9pbnQodHJhbnNmb3JtZWRDb29yZGluYXRlKSxcbiAgICBuYW1lOiBsYWJlbFxuICB9KTtcbn07XG5cbkNvbnRyb2xsZXIucHJvdG90eXBlLm9uRmVhdHVyZUNoYW5nZV8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gIHRoaXMuZmVhdHVyZUxhYmVsID0gdGhpcy5mZWF0dXJlLmdldCgnbmFtZScpIHx8ICcnO1xuICB0aGlzLnZlY3RvclNvdXJjZV8uY2xlYXIoKTtcbiAgdGhpcy52ZWN0b3JTb3VyY2VfLmFkZEZlYXR1cmUodGhpcy5mZWF0dXJlKTtcblxuICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgIHRoaXMudGltZW91dF8oZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLm9uQ2hhbmdlKF90aGlzMy5mZWF0dXJlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUub25TZWxlY3RfID0gZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gIHZhciBjb29yZGluYXRlID0gc2VsZWN0ZWQuY29vcmRpbmF0ZS5tYXAocGFyc2VGbG9hdCk7XG4gIHZhciBsYWJlbCA9IHNlbGVjdGVkLmxhYmVsO1xuICB0aGlzLnNldEZlYXR1cmVfKGNvb3JkaW5hdGUsIGxhYmVsKTtcbiAgdmFyIG5ld0Nvb3JkaW5hdGVzID0gdGhpcy5mZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgdGhpcy5tYXAuZ2V0VmlldygpLnNldENlbnRlcihuZXdDb29yZGluYXRlcyk7XG59O1xuXG5Db250cm9sbGVyLnByb3RvdHlwZS5zbmFwRmVhdHVyZV8gPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICB2YXIgY29vcmQgPSB0aGlzLmdldExvbkxhdEZyb21Qb2ludF8oZmVhdHVyZSk7XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgb25TdWNjZXNzID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICB2YXIgbG9uID0gcGFyc2VGbG9hdChyZXNwWydkYXRhJ11bJ2xvbiddKTtcbiAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdChyZXNwWydkYXRhJ11bJ2xhdCddKTtcbiAgICB2YXIgY29vcmRpbmF0ZSA9IFtsb24sIGxhdF07XG4gICAgdmFyIGxhYmVsID0gcmVzcFsnZGF0YSddWydkaXNwbGF5X25hbWUnXTtcbiAgICB0aGlzLnNldEZlYXR1cmVfKGNvb3JkaW5hdGUsIGxhYmVsKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdFcnJvcjogbm9taW5hdGltIHNlcnZlciBub3QgcmVzcG9uZGluZy4nO1xuICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgdGhpcy4kcV8ud2hlbih0aGlzLm5nZW9Ob21pbmF0aW1TZXJ2aWNlXy5yZXZlcnNlKGNvb3JkLCBjb25maWcpKS50aGVuKG9uU3VjY2Vzcy5iaW5kKHRoaXMpLCBvbkVycm9yLmJpbmQodGhpcykpO1xufTtcblxuQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0TG9uTGF0RnJvbVBvaW50XyA9IGZ1bmN0aW9uIChwb2ludCkge1xuICB2YXIgZ2VvbWV0cnkgPSBwb2ludC5nZXRHZW9tZXRyeSgpO1xuICB2YXIgY29vcmRzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgdmFyIHByb2plY3Rpb24gPSB0aGlzLm1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICByZXR1cm4gb2xQcm9qLnRvTG9uTGF0KGNvb3JkcywgcHJvamVjdGlvbik7XG59O1xuXG52YXIgcm91dGluZ0ZlYXR1cmVDb21wb25lbnQgPSB7XG4gIGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgJ21hcCc6ICc8bmdlb1JvdXRpbmdGZWF0dXJlTWFwJyxcbiAgICAnZmVhdHVyZSc6ICc9bmdlb1JvdXRpbmdGZWF0dXJlRmVhdHVyZScsXG4gICAgJ2ZpbGxDb2xvcic6ICc8P25nZW9Sb3V0aW5nRmVhdHVyZUZpbGxDb2xvcicsXG4gICAgJ3N0cm9rZUNvbG9yJzogJzw/bmdlb1JvdXRpbmdGZWF0dXJlU3Ryb2tlQ29sb3InLFxuICAgICdvbkNoYW5nZSc6ICc9P25nZW9Sb3V0aW5nRmVhdHVyZU9uQ2hhbmdlJ1xuICB9LFxuICB0ZW1wbGF0ZVVybDogbmdlb1JvdXRpbmdGZWF0dXJlVGVtcGxhdGVVcmxcbn07XG5tb2R1bGUuY29tcG9uZW50KCduZ2VvUm91dGluZ0ZlYXR1cmUnLCByb3V0aW5nRmVhdHVyZUNvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiUm91dGluZ1NlcnZpY2UuJGluamVjdCA9IFtcIiRodHRwXCIsIFwiJGluamVjdG9yXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5leHBvcnQgZnVuY3Rpb24gUm91dGluZ1NlcnZpY2UoJGh0dHAsICRpbmplY3Rvcikge1xuICB0aGlzLiRodHRwXyA9ICRodHRwO1xuICB0aGlzLnJvdXRpbmdPcHRpb25zXyA9ICRpbmplY3Rvci5oYXMoJ25nZW9Sb3V0aW5nT3B0aW9ucycpID8gJGluamVjdG9yLmdldCgnbmdlb1JvdXRpbmdPcHRpb25zJykgOiB7fTtcbiAgdGhpcy5uZ2VvT3NybUJhY2tlbmRVcmxfID0gdGhpcy5yb3V0aW5nT3B0aW9uc18uYmFja2VuZFVybCB8fCAnaHR0cHM6Ly9yb3V0ZXIucHJvamVjdC1vc3JtLm9yZy8nO1xuXG4gIGlmICh0aGlzLm5nZW9Pc3JtQmFja2VuZFVybF8uc3Vic3RyKC0xKSAhPT0gJy8nKSB7XG4gICAgdGhpcy5uZ2VvT3NybUJhY2tlbmRVcmxfICs9ICcvJztcbiAgfVxuXG4gIHRoaXMucHJvdG9jb2xWZXJzaW9uXyA9ICd2MSc7XG59XG5cblJvdXRpbmdTZXJ2aWNlLnByb3RvdHlwZS5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChjb29yZGluYXRlcywgY29uZmlnKSB7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICBpZiAoIWNvbmZpZ1snc2VydmljZSddKSB7XG4gICAgY29uZmlnWydzZXJ2aWNlJ10gPSAncm91dGUnO1xuICB9XG5cbiAgaWYgKCFjb25maWdbJ3Byb2ZpbGUnXSkge1xuICAgIGNvbmZpZ1sncHJvZmlsZSddID0gJ2Nhcic7XG4gIH1cblxuICB2YXIgdXJsID0gdGhpcy5uZ2VvT3NybUJhY2tlbmRVcmxfO1xuXG4gIGlmIChjb25maWdbJ2luc3RhbmNlJ10pIHtcbiAgICB1cmwgKz0gY29uZmlnWydpbnN0YW5jZSddICsgXCIvXCI7XG4gIH1cblxuICB1cmwgKz0gY29uZmlnWydzZXJ2aWNlJ10gKyBcIi9cIiArIHRoaXMucHJvdG9jb2xWZXJzaW9uXyArIFwiL1wiICsgY29uZmlnWydwcm9maWxlJ10gKyBcIi9cIjtcbiAgdmFyIGNvb3JkaW5hdGVTdHJpbmcgPSBjb29yZGluYXRlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5qb2luKCcsJyk7XG4gIH0pLmpvaW4oJzsnKTtcbiAgdXJsICs9IGNvb3JkaW5hdGVTdHJpbmc7XG5cbiAgaWYgKGNvbmZpZy5vcHRpb25zKSB7XG4gICAgdXJsICs9ICc/JztcbiAgICB2YXIgb3B0aW9ucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcub3B0aW9ucyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIG9wdGlvbiA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgICBvcHRpb25zLnB1c2gob3B0aW9uICsgXCI9XCIgKyBjb25maWcub3B0aW9uc1tvcHRpb25dKTtcbiAgICB9XG5cbiAgICB1cmwgKz0gb3B0aW9ucy5qb2luKCcmJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy4kaHR0cF8uZ2V0KHVybCk7XG59O1xuXG5Sb3V0aW5nU2VydmljZS5wcm90b3R5cGUuZ2V0TmVhcmVzdCA9IGZ1bmN0aW9uIChjb29yZGluYXRlLCBjb25maWcpIHtcbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICBjb25maWdbJ3NlcnZpY2UnXSA9ICduZWFyZXN0JztcblxuICBpZiAoIWNvbmZpZ1sncHJvZmlsZSddKSB7XG4gICAgY29uZmlnWydwcm9maWxlJ10gPSAnY2FyJztcbiAgfVxuXG4gIHZhciB1cmwgPSB0aGlzLm5nZW9Pc3JtQmFja2VuZFVybF87XG5cbiAgaWYgKGNvbmZpZ1snaW5zdGFuY2UnXSkge1xuICAgIHVybCArPSBjb25maWdbJ2luc3RhbmNlJ10gKyBcIi9cIjtcbiAgfVxuXG4gIHVybCArPSBjb25maWdbJ3NlcnZpY2UnXSArIFwiL1wiICsgdGhpcy5wcm90b2NvbFZlcnNpb25fICsgXCIvXCIgKyBjb25maWdbJ3Byb2ZpbGUnXSArIFwiL1wiO1xuICB2YXIgY29vcmRpbmF0ZVN0cmluZyA9IGNvb3JkaW5hdGUuam9pbignLCcpO1xuICB1cmwgKz0gY29vcmRpbmF0ZVN0cmluZztcblxuICBpZiAoY29uZmlnLm9wdGlvbnMpIHtcbiAgICB1cmwgKz0gJz8nO1xuICAgIHZhciBvcHRpb25zID0gW107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMoY29uZmlnLm9wdGlvbnMpOyBfaTIgPCBfT2JqZWN0JGtleXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBvcHRpb24gPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICBvcHRpb25zLnB1c2gob3B0aW9uICsgXCI9XCIgKyBjb25maWcub3B0aW9uc1tvcHRpb25dKTtcbiAgICB9XG5cbiAgICB1cmwgKz0gb3B0aW9ucy5qb2luKCcmJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy4kaHR0cF8uZ2V0KHVybCk7XG59O1xuXG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9Sb3V0aW5nU2VydmljZScsIFtdKTtcbm1vZHVsZS5zZXJ2aWNlKCduZ2VvUm91dGluZ1NlcnZpY2UnLCBSb3V0aW5nU2VydmljZSk7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb1JvdXRpbmdSb3V0aW5nQ29tcG9uZW50IGZyb20gJ25nZW8vcm91dGluZy9Sb3V0aW5nQ29tcG9uZW50LmpzJztcbmltcG9ydCAnLi9yb3V0aW5nLnNjc3MnO1xuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ25nZW9Sb3V0aW5nTW9kdWxlJywgW25nZW9Sb3V0aW5nUm91dGluZ0NvbXBvbmVudC5uYW1lXSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbm9iaiB8fCAob2JqID0ge30pO1xudmFyIF9fdCwgX19wID0gJyc7XG53aXRoIChvYmopIHtcbl9fcCArPSAnPGRpdiBjbGFzcz1cIm5nZW8tbm9taW5hdGltLWlucHV0XCI+XFxuICA8aW5wdXQgdHlwZT1cInRleHRcIlxcbiAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcXG4gICAgICAgICBwbGFjZWhvbGRlcj1cInt7JGN0cmwucGxhY2Vob2xkZXJ9fVwiXFxuICAgICAgICAgbmctbW9kZWw9XCIkY3RybC5pbnB1dFZhbHVlXCJcXG4gICAgICAgICBuZ2VvLXNlYXJjaD1cIiRjdHJsLm9wdGlvbnNcIlxcbiAgICAgICAgIG5nZW8tc2VhcmNoLWRhdGFzZXRzPVwiJGN0cmwuZGF0YXNldHNcIlxcbiAgICAgICAgIG5nZW8tc2VhcmNoLWxpc3RlbmVycz1cIiRjdHJsLmxpc3RlbmVyc1wiPlxcbjwvZGl2Plxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nXCI+XFxuICA8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nLXN0YXJ0IGZvcm0tZ3JvdXBcIj5cXG4gICAgPG5nZW8tcm91dGluZy1mZWF0dXJlXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtbWFwPVwiJGN0cmwubWFwXCJcXG4gICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1mZWF0dXJlPVwiJGN0cmwuc3RhcnRGZWF0dXJlX1wiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtZmlsbC1jb2xvcj1cIiRjdHJsLmNvbG9yc1tcXCdzdGFydC5maWxsXFwnXVwiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtc3Ryb2tlLWNvbG9yPVwiJGN0cmwuY29sb3JzW1xcJ3N0YXJ0LnN0cm9rZVxcJ11cIlxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLW9uLWNoYW5nZT1cIiRjdHJsLmhhbmRsZUNoYW5nZVwiPlxcbiAgICA8L25nZW8tcm91dGluZy1mZWF0dXJlPlxcbiAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCJuZ2VvLXJvdXRpbmctdmlhcyBmb3JtLWdyb3VwXCIgbmctcmVwZWF0PVwiKGluZGV4LCB2aWEpIGluICRjdHJsLnZpYUFycmF5XCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5saW5lXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcbiAgICAgICAgICA8bmdlby1yb3V0aW5nLWZlYXR1cmVcXG4gICAgICAgICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1tYXA9XCIkY3RybC5tYXBcIlxcbiAgICAgICAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLWZlYXR1cmU9XCJ2aWEuZmVhdHVyZVwiXFxuICAgICAgICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtZmlsbC1jb2xvcj1cIiRjdHJsLmNvbG9yc1tcXCd2aWEuZmlsbFxcJ11cIlxcbiAgICAgICAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLXN0cm9rZS1jb2xvcj1cIiRjdHJsLmNvbG9yc1tcXCd2aWEuc3Ryb2tlXFwnXVwiXFxuICAgICAgICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtb24tY2hhbmdlPVwiJGN0cmwuaGFuZGxlQ2hhbmdlXCI+XFxuICAgICAgICAgIDwvbmdlby1yb3V0aW5nLWZlYXR1cmU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIHByaW1lIGRlbGV0ZS12aWFcIiBuZy1jbGljaz1cIiRjdHJsLmRlbGV0ZVZpYShpbmRleClcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XCJuZ2VvLXJvdXRpbmctZGVzdGluYXRpb24gZm9ybS1ncm91cFwiPlxcbiAgICA8bmdlby1yb3V0aW5nLWZlYXR1cmVcXG4gICAgICBuZ2VvLXJvdXRpbmctZmVhdHVyZS1tYXA9XCIkY3RybC5tYXBcIlxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLWZlYXR1cmU9XCIkY3RybC50YXJnZXRGZWF0dXJlX1wiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtZmlsbC1jb2xvcj1cIiRjdHJsLmNvbG9yc1tcXCdkZXN0aW5hdGlvbi5maWxsXFwnXVwiXFxuICAgICAgbmdlby1yb3V0aW5nLWZlYXR1cmUtc3Ryb2tlLWNvbG9yPVwiJGN0cmwuY29sb3JzW1xcJ2Rlc3RpbmF0aW9uLnN0cm9rZVxcJ11cIlxcbiAgICAgIG5nZW8tcm91dGluZy1mZWF0dXJlLW9uLWNoYW5nZT1cIiRjdHJsLmhhbmRsZUNoYW5nZVwiPlxcbiAgICA8L25nZW8tcm91dGluZy1mZWF0dXJlPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmaWxsXCI+XFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIHByaW1lXCIgbmctY2xpY2s9XCIkY3RybC5jbGVhclJvdXRlKClcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9zcGFuPiA8c3BhbiB0cmFuc2xhdGU+Q2xlYXI8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBwcmltZVwiIG5nLWNsaWNrPVwiJGN0cmwucmV2ZXJzZVJvdXRlKClcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWV4Y2hhbmdlLWFsdFwiPjwvc3Bhbj4gPHNwYW4gdHJhbnNsYXRlPlJldmVyc2U8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBwcmltZVwiIG5nLWNsaWNrPVwiJGN0cmwuYWRkVmlhKClcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXBsdXNcIj48L3NwYW4+IDxzcGFuIHRyYW5zbGF0ZT5BZGQgdmlhPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XFxuXFxuICA8ZGl2IG5nLWlmPVwiJGN0cmwucm91dGluZ1Byb2ZpbGVzLmxlbmd0aCA+IDFcIj5cXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cXG4gICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbWQtNFwiIHRyYW5zbGF0ZT5Qcm9maWxlPC9sYWJlbD5cXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cXG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuZy1tb2RlbD1cIiRjdHJsLnNlbGVjdGVkUm91dGluZ1Byb2ZpbGVcIj5cXG4gICAgICAgICAgPG9wdGlvbiBuZy1yZXBlYXQ9XCJwcm9maWxlIGluICRjdHJsLnJvdXRpbmdQcm9maWxlc1wiIG5nLXZhbHVlPVwicHJvZmlsZVwiPnt7cHJvZmlsZS5sYWJlbH19PC9vcHRpb24+XFxuICAgICAgICA8L3NlbGVjdD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XCJuZ2VvLXJvdXRpbmctZXJyb3IgZm9ybS1ncm91cCBjbGVhcmZpeFwiXFxuICAgICAgIG5nLWhpZGU9XCIkY3RybC5lcnJvck1lc3NhZ2UgPT09IFxcJ1xcJ1wiPlxcbiAgICB7eyRjdHJsLmVycm9yTWVzc2FnZX19XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxcblxcbiAgPGRpdiBuZy1oaWRlPVwiJGN0cmwucm91dGVEdXJhdGlvbiA9PT0gbnVsbCAmJiAkY3RybC5yb3V0ZURpc3RhbmNlIDw9IDBcIj5cXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cXG4gICAgICAgIDxzdHJvbmcgdHJhbnNsYXRlPlJvdXRlIHN0YXRpc3RpY3M8L3N0cm9uZz5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1oaWRlPVwiJGN0cmwucm91dGVEdXJhdGlvbiA9PT0gbnVsbFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCB0ZXh0LXJpZ2h0XCIgdHJhbnNsYXRlPlxcbiAgICAgICAgRHVyYXRpb25cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cXG4gICAgICAgIHt7JGN0cmwucm91dGVEdXJhdGlvbiB8IG5nZW9EdXJhdGlvbn19XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctaGlkZT1cIiRjdHJsLnJvdXRlRGlzdGFuY2UgPD0gMFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCB0ZXh0LXJpZ2h0XCIgdHJhbnNsYXRlPlxcbiAgICAgICAgRGlzdGFuY2VcXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cXG4gICAgICAgIHt7JGN0cmwucm91dGVEaXN0YW5jZSB8IG5nZW9Vbml0UHJlZml4OlxcJ21cXCd9fVxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2Plxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibmdlby1yb3V0aW5nLWZlYXR1cmVcIj5cXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuICAgICAgPG5nZW8tbm9taW5hdGltLWlucHV0XFxuICAgICAgICBuZ2VvLW5vbWluYXRpbS1pbnB1dC12YWx1ZT1cIiRjdHJsLmZlYXR1cmVMYWJlbFwiXFxuICAgICAgICBuZ2VvLW5vbWluYXRpbS1pbnB1dC1wbGFjZWhvbGRlcj1cInt7XFwnU2VhcmNoLi4uXFwnIHwgdHJhbnNsYXRlfX1cIlxcbiAgICAgICAgbmdlby1ub21pbmF0aW0taW5wdXQtb24tc2VsZWN0PVwiJGN0cmwub25TZWxlY3RcIj5cXG4gICAgICA8L25nZW8tbm9taW5hdGltLWlucHV0PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG5cIiBuZy1jbGljaz1cIiRjdHJsLnNldCgpXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIj48L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2Plxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==