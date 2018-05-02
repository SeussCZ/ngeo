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
/******/ 		"query": 0
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
/******/ 	deferredModules.push([33,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/partials/queryresult.html":
/*!********************************************!*\
  !*** ./examples/partials/queryresult.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(obj) {\nobj || (obj = {});\nvar __t, __p = '';\nwith (obj) {\n__p += '<h3>Total: {{ $ctrl.result.total }}</h3>\\n\\n<ul class=\"nav nav-tabs\"\\n    role=\"tablist\">\\n  <li ng-repeat=\"source in $ctrl.result.sources\"\\n      role=\"presentation\">\\n    <a href=\"#{{ ::source.label }}\"\\n       aria-controls=\"{{ ::source.label }}\"\\n       ng-attr-aria-selected=\"{{ $first }}\"\\n       class=\"nav-link\"\\n       id=\"{{ ::source.label }}-tab\"\\n       ng-class=\"::{active: $first}\"\\n       role=\"tab\"\\n       data-toggle=\"tab\">\\n      <span>{{ ::source.label }}</span>\\n      <span ng-switch=\"source.pending\">\\n        <span ng-switch-when=\"true\">(...)</span>\\n        <span ng-switch-default=\"\">({{ ::source.features.length }})</span>\\n      </span>\\n    </a>\\n  </li>\\n</ul>\\n\\n<div class=\"tab-content\">\\n  <div ng-repeat=\"source in $ctrl.result.sources\"\\n       aria-labelledby=\"{{ ::source.label }}-tab\"\\n       role=\"tabpanel\"\\n       class=\"tab-pane fade\"\\n       ng-class=\"::{active: $first, show: $first}\"\\n       id=\"{{ ::source.label }}\">\\n    <div ng-switch=\"source.features.length\">\\n      <div ng-switch-when=\"0\">\\n        <span ng-switch=\"source.pending\">\\n          <h3 ng-switch-when=\"true\">Pending...</h3>\\n          <h3 ng-switch-default=\"\">No result</h3>\\n        </span>\\n      </div>\\n      <div ng-switch-default=\"\">\\n        <div ng-repeat=\"feature in ::source.features\">\\n          <h3>{{ ::feature.get(\\'display_name\\') }}</h3>\\n          <div ng-repeat=\"(key, value) in ::feature.getProperties()\"\\n               ng-init=\"value = value !== undefined ? value : \\'\\'\">\\n            <span ng-if=\"::(key !== feature.getGeometryName() && key !== \\'ngeo_feature_type_\\')\">\\n              <span ng-bind=\"::key\"></span>:\\n              <span ng-bind=\"::value\"></span>\\n            </span>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n';\n\n}\nreturn __p\n}\n\n//# sourceURL=webpack:///./examples/partials/queryresult.html?");

/***/ }),

/***/ "./examples/query.css":
/*!****************************!*\
  !*** ./examples/query.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./examples/query.css?");

/***/ }),

/***/ "./examples/query.js":
/*!***************************!*\
  !*** ./examples/query.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ \"./examples/url.js\");\n/* harmony import */ var _query_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query.css */ \"./examples/query.css\");\n/* harmony import */ var _query_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_query_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ \"./node_modules/@geoblocks/proj/src/EPSG_21781.js\");\n/* harmony import */ var ngeo_datasource_DataSources_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/datasource/DataSources.js */ \"./src/datasource/DataSources.js\");\n/* harmony import */ var ngeo_datasource_OGC_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/datasource/OGC.js */ \"./src/datasource/OGC.js\");\n/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/map/module.js */ \"./src/map/module.js\");\n/* harmony import */ var ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/misc/btnComponent.js */ \"./src/misc/btnComponent.js\");\n/* harmony import */ var ngeo_misc_ToolActivate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/misc/ToolActivate.js */ \"./src/misc/ToolActivate.js\");\n/* harmony import */ var ngeo_misc_ToolActivateMgr_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/misc/ToolActivateMgr.js */ \"./src/misc/ToolActivateMgr.js\");\n/* harmony import */ var ngeo_query_component_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/query/component.js */ \"./src/query/component.js\");\n/* harmony import */ var ngeo_query_module_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/query/module.js */ \"./src/query/module.js\");\n/* harmony import */ var ngeo_query_ModeSelector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/query/ModeSelector.js */ \"./src/query/ModeSelector.js\");\n/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/Map.js */ \"./node_modules/ol/Map.js\");\n/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/View.js */ \"./node_modules/ol/View.js\");\n/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/layer/Image.js */ \"./node_modules/ol/layer/Image.js\");\n/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/layer/Tile.js */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/source/ImageWMS.js */ \"./node_modules/ol/source/ImageWMS.js\");\n/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/source/OSM.js */ \"./node_modules/ol/source/OSM.js\");\nMainController.$inject = [\"$scope\", \"ngeoDataSources\", \"ngeoToolActivateMgr\", \"ngeoQueryModeSelector\"];\nQueryresultController.$inject = [\"ngeoQueryResult\"];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', ['gettext', ngeo_datasource_DataSources_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].name, ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].name, ngeo_misc_ToolActivateMgr_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].name, ngeo_query_component_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].name, ngeo_query_module_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].name]);\nmodule.run([\"$templateCache\", function ($templateCache) {\n  $templateCache.put('partials/queryresult', __webpack_require__(/*! ./partials/queryresult.html */ \"./examples/partials/queryresult.html\"));\n}]);\nmodule.value('ngeoQueryOptions', {\n  'cursorHover': true,\n  'limit': 20\n});\nvar queryresultComponent = {\n  controller: 'AppQueryresultController',\n  templateUrl: 'partials/queryresult'\n};\nmodule.component('appQueryresult', queryresultComponent);\n\nfunction QueryresultController(ngeoQueryResult) {\n  this.result = ngeoQueryResult;\n}\n\nmodule.controller('AppQueryresultController', QueryresultController);\n\nfunction MainController($scope, ngeoDataSources, ngeoToolActivateMgr, ngeoQueryModeSelector) {\n  this.dummyActive = false;\n  this.queryActive = true;\n  this.queryAutoClear = true;\n  this.ngeoQueryModeSelector = ngeoQueryModeSelector;\n  var source1 = new ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]({\n    url: _url_js__WEBPACK_IMPORTED_MODULE_1__[\"MAPSERVER_PROXY\"],\n    projection: undefined,\n    params: {\n      'LAYERS': 'bus_stop'\n    }\n  });\n  var busStopLayer = new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]({\n    source: source1\n  });\n  var source2 = new ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]({\n    url: _url_js__WEBPACK_IMPORTED_MODULE_1__[\"MAPSERVER_PROXY\"],\n    projection: undefined,\n    params: {\n      'LAYERS': 'information'\n    }\n  });\n  var informationLayer = new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]({\n    source: source2\n  });\n  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]({\n    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]({\n      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]()\n    }), informationLayer, busStopLayer],\n    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]({\n      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],\n      center: [537635, 152640],\n      zoom: 4\n    })\n  });\n  ngeoDataSources.map = this.map;\n  ngeoDataSources.collection.push(new ngeo_datasource_OGC_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n    id: 1,\n    name: 'bus_stop',\n    visible: true,\n    wmsUrl: _url_js__WEBPACK_IMPORTED_MODULE_1__[\"MAPSERVER_PROXY\"],\n    wmsLayers: [{\n      name: 'bus_stop',\n      queryable: true\n    }],\n    wfsUrl: _url_js__WEBPACK_IMPORTED_MODULE_1__[\"MAPSERVER_PROXY\"],\n    wfsFeatureNS: _url_js__WEBPACK_IMPORTED_MODULE_1__[\"MAPSERVER_WFS_FEATURE_NS\"],\n    wfsLayers: [{\n      name: 'bus_stop',\n      queryable: true\n    }]\n  }));\n  ngeoDataSources.collection.push(new ngeo_datasource_OGC_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n    id: 2,\n    name: 'information',\n    visible: true,\n    wmsUrl: _url_js__WEBPACK_IMPORTED_MODULE_1__[\"MAPSERVER_PROXY\"],\n    wmsLayers: [{\n      name: 'information',\n      queryable: true\n    }],\n    wfsFeatureNS: _url_js__WEBPACK_IMPORTED_MODULE_1__[\"MAPSERVER_WFS_FEATURE_NS\"],\n    wfsUrl: _url_js__WEBPACK_IMPORTED_MODULE_1__[\"MAPSERVER_PROXY\"],\n    wfsLayers: [{\n      name: 'information',\n      queryable: true\n    }]\n  }));\n  var queryToolActivate = new ngeo_misc_ToolActivate_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, 'queryActive');\n  ngeoToolActivateMgr.registerTool('mapTools', queryToolActivate, true);\n  var dummyToolActivate = new ngeo_misc_ToolActivate_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this, 'dummyActive');\n  ngeoToolActivateMgr.registerTool('mapTools', dummyToolActivate);\n}\n\nMainController.prototype.getSetDummyActive = function (val) {\n  if (val !== undefined) {\n    this.dummyActive = val;\n  } else {\n    return this.dummyActive;\n  }\n};\n\nmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./examples/query.js?");

/***/ }),

/***/ 33:
/*!**************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/query.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/query.js */\"./examples/query.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/query.js?");

/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor;\n\n//# sourceURL=webpack:///external_%22vendor%22?");

/***/ })

/******/ });