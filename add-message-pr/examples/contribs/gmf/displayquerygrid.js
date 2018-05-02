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
/******/ 		"displayquerygrid": 0
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
/******/ 	deferredModules.push([4,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/displayquerygrid.css":
/*!****************************************************!*\
  !*** ./contribs/gmf/examples/displayquerygrid.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/displayquerygrid.js":
/*!***************************************************!*\
  !*** ./contribs/gmf/examples/displayquerygrid.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _displayquerygrid_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayquerygrid.css */ "./contribs/gmf/examples/displayquerygrid.css");
/* harmony import */ var _displayquerygrid_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_displayquerygrid_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gmf-hidden.inc.css */ "./contribs/gmf/examples/gmf-hidden.inc.css");
/* harmony import */ var _gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gmf_hidden_inc_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gmf_datasource_Manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/datasource/Manager.js */ "./contribs/gmf/src/datasource/Manager.js");
/* harmony import */ var gmf_layertree_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/layertree/component.js */ "./contribs/gmf/src/layertree/component.js");
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var gmf_query_gridComponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gmf/query/gridComponent.js */ "./contribs/gmf/src/query/gridComponent.js");
/* harmony import */ var gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gmf/theme/Themes.js */ "./contribs/gmf/src/theme/Themes.js");
/* harmony import */ var ngeo_grid_module_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/grid/module.js */ "./src/grid/module.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/misc/btnComponent.js */ "./src/misc/btnComponent.js");
/* harmony import */ var _geoblocks_proj_src_EPSG_2056_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_2056.js */ "./node_modules/@geoblocks/proj/src/EPSG_2056.js");
/* harmony import */ var ngeo_query_component_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/query/component.js */ "./src/query/component.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
MainController.$inject = ["gmfThemes", "gmfDataSourcesManager", "ngeoFeatureOverlayMgr"];
QueryresultController.$inject = ["ngeoQueryResult"];






















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_datasource_Manager_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_layertree_component_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, gmf_map_component_js__WEBPACK_IMPORTED_MODULE_6__["default"].name, gmf_query_gridComponent_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, ngeo_grid_module_js__WEBPACK_IMPORTED_MODULE_9__["default"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_10__["default"].name, ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_11__["default"].name, ngeo_query_component_js__WEBPACK_IMPORTED_MODULE_13__["default"].name]);
module.constant('ngeoQueryOptions', {
  'limit': 20,
  'queryCountFirst': true
});
module.constant('gmfTreeUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].GMF_THEMES);
module.constant('defaultTheme', 'Demo');
module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');
var queryresultComponent = {
  controller: 'gmfappQueryresultController',
  template: __webpack_require__(/*! ./partials/queryresult.html */ "./contribs/gmf/examples/partials/queryresult.html")
};
module.component('gmfappQueryresult', queryresultComponent);

function QueryresultController(ngeoQueryResult) {
  this.result = ngeoQueryResult;
}

module.controller('gmfappQueryresultController', QueryresultController);

function MainController(gmfThemes, gmfDataSourcesManager, ngeoFeatureOverlayMgr) {
  var _this = this;

  gmfThemes.loadThemes();
  var fill = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
    color: [255, 170, 0, 0.6]
  });
  var stroke = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
    color: [255, 170, 0, 1],
    width: 2
  });
  this.featureStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_21__["default"]({
    fill: fill,
    image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
      fill: fill,
      radius: 5,
      stroke: stroke
    }),
    stroke: stroke
  });
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_17__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
      projection: _geoblocks_proj_src_EPSG_2056_js__WEBPACK_IMPORTED_MODULE_12__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [2537635, 1152640],
      zoom: 3
    })
  });
  gmfDataSourcesManager.setDatasourceMap(this.map);
  this.themes = undefined;
  this.treeSource = undefined;
  this.queryActive = true;
  this.queryGridActive = true;
  gmfThemes.getThemesObject().then(function (themes) {
    if (themes) {
      _this.themes = themes;
      _this.treeSource = themes[3];
    }
  });
  ngeoFeatureOverlayMgr.init(this.map);
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./contribs/gmf/src/query/gridComponent.html":
/*!***************************************************!*\
  !*** ./contribs/gmf/src/query/gridComponent.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="gmf-displayquerygrid panel" ng-show="ctrl.active">\n  <div\n    class="close"\n    ng-click="ctrl.clear()">\n    &times;\n  </div>\n\n  <ul\n    class="nav nav-pills"\n    role="tablist">\n\n    <li\n      class="nav-item"\n      ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label"\n      role="presentation"\n      ng-click="ctrl.selectTab(gridSource)">\n\n      <a\n        class="nav-link"\n        href="#{{ctrl.escapeValue(gridSource.source.label)}}"\n        ng-class="{\'active\' : ctrl.isSelected(gridSource)}"\n        data-target="#{{ctrl.escapeValue(gridSource.source.label)}}"\n        aria-controls="{{ctrl.escapeValue(gridSource.source.label)}}"\n        role="tab"\n        data-toggle="tab">\n\n        <span ng-if="gridSource.source.tooManyResults !== true">\n          {{gridSource.source.label | translate}} ({{gridSource.source.features.length}})\n        </span>\n        <span ng-if="gridSource.source.tooManyResults === true">\n          {{gridSource.source.label | translate}} ({{gridSource.source.totalFeatureCount}}*)\n        </span>\n      </a>\n    </li>\n  </ul>\n\n  <div class="tab-content">\n    <div\n      ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label"\n      role="tabpanel"\n      class="tab-pane"\n      ng-class="{\'active\' : ctrl.isSelected(gridSource)}"\n      id="{{ctrl.escapeValue(gridSource.source.label)}}">\n\n      <ngeo-grid\n        ngeo-grid-configuration="gridSource.configuration"\n        ng-if="gridSource.source.tooManyResults !== true">\n      </ngeo-grid>\n\n      <div ng-if="gridSource.source.tooManyResults === true">\n        <div class="gmf-displayquerygrid-message alert alert-warning">\n          <p><span translate>The results can not be displayed because the maximum number has been reached</span> ({{gridSource.source.limit}}).</p>\n          <p translate>Please refine your query.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div ng-show="!ctrl.pending && ctrl.getActiveGridSource() && ctrl.getActiveGridSource().configuration !== null">\n\n    <ul class="nav justify-content-end">\n\n      <li\n        class="ng-hide"\n        ng-show="ctrl.isOneSelected()">\n        <div class="btn btn-sm ng-binding">\n          {{ctrl.getSelectedRowCount()}} <span translate>selected element(s)</span>\n        </div>\n      </li>\n\n      <li\n        ng-show="ctrl.isOneSelected()"\n        class="ng-hide">\n        <button\n          class="btn btn-link btn-sm"\n          title="{{\'Zoom to selection\' | translate}}"\n          ng-click="ctrl.zoomToSelection()">\n          <i class="fa fa-search-plus"></i> <span translate>Zoom to</span>\n        </button>\n      </li>\n\n      <li\n        ng-show="ctrl.isOneSelected()"\n        class="ng-hide">\n        <button\n          class="btn btn-link btn-sm"\n          title="{{\'Export selection as CSV\' | translate}}"\n          ng-click="ctrl.downloadCsv()">\n          <i class="fa fa-download"></i> <span translate>Export as CSV</span>\n        </button>\n      </li>\n\n      <li class="dropdown">\n        <button\n          type="button"\n          class="dropup btn btn-default btn-sm dropdown-toggle"\n          data-toggle="dropdown"\n          aria-haspopup="true"\n          aria-expanded="false">\n          <span translate>Select</span>\n        </button>\n        <ul\n          class="dropdown-menu"\n          aria-labelledby="dLabel">\n          <li>\n            <a\n              href=""\n              ng-click="ctrl.selectAll()" translate>All</a>\n          </li>\n          <li>\n            <a\n              href=""\n              ng-click="ctrl.unselectAll()" translate>None</a>\n          </li>\n          <li>\n            <a\n              href=""\n              ng-click="ctrl.invertSelection()" translate>Reverse selection</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n\n  <div\n    ng-show="ctrl.pending"\n    class="gmf-displayquerygrid-pending">\n    <span class="fa fa-spinner fa-spin"></span>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./contribs/gmf/src/query/gridComponent.js":
/*!*************************************************!*\
  !*** ./contribs/gmf/src/query/gridComponent.js ***!
  \*************************************************/
/*! exports provided: QueryGridController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryGridController", function() { return QueryGridController; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngeo_download_Csv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/download/Csv.js */ "./src/download/Csv.js");
/* harmony import */ var ngeo_download_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/download/service.js */ "./src/download/service.js");
/* harmony import */ var ngeo_grid_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/grid/component.js */ "./src/grid/component.js");
/* harmony import */ var ngeo_grid_Config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/grid/Config.js */ "./src/grid/Config.js");
/* harmony import */ var ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr.js */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_query_MapQuerent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/query/MapQuerent.js */ "./src/query/MapQuerent.js");
/* harmony import */ var ol_Collection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Collection.js */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var bootstrap_js_src_dropdown_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bootstrap/js/src/dropdown.js */ "./node_modules/bootstrap/js/src/dropdown.js");
QueryGridController.$inject = ["$injector", "$scope", "ngeoQueryResult", "ngeoMapQuerent", "ngeoFeatureOverlayMgr", "$timeout", "ngeoCsvDownload", "$element"];















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfQueryGridComponent', [ngeo_download_Csv_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, ngeo_download_service_js__WEBPACK_IMPORTED_MODULE_2__["default"].name, ngeo_grid_component_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, ngeo_query_MapQuerent_js__WEBPACK_IMPORTED_MODULE_6__["default"].name]);
module.value('gmfDisplayquerygridTemplateUrl', function ($element, $attrs) {
  var templateUrl = $attrs.gmfDisplayquerygridTemplateurl;
  return templateUrl !== undefined ? templateUrl : 'gmf/query/gridComponent';
});
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('gmf/query/gridComponent', __webpack_require__(/*! ./gridComponent.html */ "./contribs/gmf/src/query/gridComponent.html"));
}]);
gmfDisplayquerygridTemplateUrl.$inject = ["$element", "$attrs", "gmfDisplayquerygridTemplateUrl"];

function gmfDisplayquerygridTemplateUrl($element, $attrs, gmfDisplayquerygridTemplateUrl) {
  return gmfDisplayquerygridTemplateUrl($element, $attrs);
}

var queryGridComponent = {
  controller: 'GmfDisplayquerygridController as ctrl',
  bindings: {
    'active': '=?gmfDisplayquerygridActive',
    'featuresStyleFn': '&gmfDisplayquerygridFeaturesstyle',
    'selectedFeatureStyleFn': '&gmfDisplayquerygridSelectedfeaturestyle',
    'getMapFn': '&gmfDisplayquerygridMap',
    'removeEmptyColumnsFn': '&?gmfDisplayquerygridRemoveemptycolumns',
    'maxResultsFn': '&?gmfDisplayquerygridMaxresults',
    'maxRecenterZoomFn': '&?gmfDisplayquerygridMaxrecenterzoom',
    'mergeTabs': '<?gmfDisplayquerygridMergetabs'
  },
  templateUrl: gmfDisplayquerygridTemplateUrl
};
module.component('gmfDisplayquerygrid', queryGridComponent);
function QueryGridController($injector, $scope, ngeoQueryResult, ngeoMapQuerent, ngeoFeatureOverlayMgr, $timeout, ngeoCsvDownload, $element) {
  var _this = this;

  var queryOptions = $injector.has('ngeoQueryOptions') ? $injector.get('ngeoQueryOptions') : {};
  this.$scope_ = $scope;
  this.$timeout_ = $timeout;
  this.ngeoQueryResult = ngeoQueryResult;
  this.ngeoMapQuerent_ = ngeoMapQuerent;
  this.ngeoCsvDownload_ = ngeoCsvDownload;
  this.$element_ = $element;
  this.maxResults = queryOptions.limit !== undefined ? queryOptions.limit : 50;
  this.active = false;
  this.pending = false;
  this.gridSources = {};
  this.loadedGridSources = [];
  this.selectedTab = null;
  this.removeEmptyColumns_ = false;
  this.maxRecenterZoom = null;
  this.mergeTabs = {};
  this.featuresForSources_ = {};
  this.features_ = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  this.ngeoFeatureOverlayMgr_ = ngeoFeatureOverlayMgr;
  this.highlightFeatures_ = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  this.filename_ = $injector.has('gmfCsvFilename') ? $injector.get('gmfCsvFilename') : 'query-results.csv';
  this.map_ = null;
  this.$scope_.$watchCollection(function () {
    return ngeoQueryResult;
  }, function (newQueryResult, oldQueryResult) {
    if (newQueryResult !== oldQueryResult) {
      _this.updateData_();
    }
  });
  this.unregisterSelectWatcher_ = null;

  this.removeEmptyColumnsFn = function () {
    return false;
  };

  this.maxRecenterZoomFn = function () {
    return null;
  };

  this.featuresStyleFn = null;
  this.selectedFeatureStyleFn = null;
  this.getMapFn = null;
}

QueryGridController.prototype.$onInit = function () {
  if (!this.getMapFn) {
    throw new Error('Missing getMapFn');
  }

  if (!this.featuresStyleFn) {
    throw new Error('Missing featuresStyleFn');
  }

  if (!this.selectedFeatureStyleFn) {
    throw new Error('Missing selectedFeatureStyleFn');
  }

  this.removeEmptyColumns_ = this.removeEmptyColumnsFn();
  this.maxRecenterZoom = this.maxRecenterZoomFn();
  var featuresOverlay = this.ngeoFeatureOverlayMgr_.getFeatureOverlay();
  featuresOverlay.setFeatures(this.features_);
  var featuresStyle = this.featuresStyleFn();

  if (featuresStyle !== undefined) {
    if (!(featuresStyle instanceof ol_style_Style_js__WEBPACK_IMPORTED_MODULE_13__["default"])) {
      throw new Error('Wrong featuresStyle type');
    }

    featuresOverlay.setStyle(featuresStyle);
  }

  var highlightFeaturesOverlay = this.ngeoFeatureOverlayMgr_.getFeatureOverlay();
  highlightFeaturesOverlay.setFeatures(this.highlightFeatures_);
  var highlightFeatureStyle = this.selectedFeatureStyleFn();

  if (highlightFeatureStyle !== undefined) {
    if (!(highlightFeatureStyle instanceof ol_style_Style_js__WEBPACK_IMPORTED_MODULE_13__["default"])) {
      throw new Error('Wrong highlightFeatureStyle type');
    }
  } else {
    var fill = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
      color: [255, 0, 0, 0.6]
    });
    var stroke = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      color: [255, 0, 0, 1],
      width: 2
    });
    highlightFeatureStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      fill: fill,
      image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
        fill: fill,
        radius: 5,
        stroke: stroke
      }),
      stroke: stroke,
      zIndex: 10
    });
  }

  highlightFeaturesOverlay.setStyle(highlightFeatureStyle);
  var mapFn = this.getMapFn;

  if (mapFn) {
    var map = mapFn();

    if (!(map instanceof ol_Map_js__WEBPACK_IMPORTED_MODULE_9__["default"])) {
      throw new Error('Wrong map type');
    }

    this.map_ = map;
  }
};

QueryGridController.prototype.getGridSources = function () {
  var _this2 = this;

  return this.loadedGridSources.map(function (sourceLabel) {
    return _this2.gridSources[sourceLabel];
  });
};

QueryGridController.prototype.updateData_ = function () {
  var _this3 = this;

  if ((this.ngeoQueryResult.pending || this.ngeoQueryResult.total === 0) && !this.hasOneWithTooManyResults_()) {
    var oldActive = this.active;
    this.clear();

    if (oldActive) {
      this.active = this.ngeoQueryResult.pending;
      this.pending = this.ngeoQueryResult.pending;
    }

    return;
  }

  this.active = true;
  this.pending = false;
  var sources = this.ngeoQueryResult.sources;

  if (Object.keys(this.mergeTabs).length > 0) {
    sources = this.getMergedSources_(sources);
  }

  sources.forEach(function (source) {
    if (source.tooManyResults) {
      _this3.makeGrid_(null, source);
    } else {
      source.id = _this3.escapeValue(source.id);
      var features = source.features;

      if (features.length > 0) {
        _this3.collectData_(source);
      }
    }
  });

  if (this.loadedGridSources.length === 0) {
    this.active = false;
    return;
  }

  if (this.selectedTab === null || !("" + this.selectedTab in this.gridSources)) {
    this.$timeout_(function () {
      var firstSourceId = _this3.loadedGridSources[0];

      _this3.selectTab(_this3.gridSources[firstSourceId]);
    }, 0);
  }
};

QueryGridController.prototype.hasOneWithTooManyResults_ = function () {
  return this.ngeoQueryResult.sources.some(function (source) {
    return source.tooManyResults;
  });
};

QueryGridController.prototype.escapeValue = function (value) {
  if (typeof value == 'number') {
    return value;
  } else {
    var toEscape = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\ |]/g;

    if (value.match(toEscape) !== null) {
      return value.replace(toEscape, '_');
    } else {
      return value;
    }
  }
};

QueryGridController.prototype.isSelected = function (gridSource) {
  return this.selectedTab === gridSource.source.label;
};

QueryGridController.prototype.getMergedSources_ = function (sources) {
  var _this4 = this;

  var allSources = [];
  var mergedSources = {};
  sources.forEach(function (source) {
    var mergedSource = _this4.getMergedSource_(source, mergedSources);

    if (mergedSource === null) {
      allSources.push(source);
    }
  });

  for (var mergedSourceId in mergedSources) {
    allSources.push(mergedSources[mergedSourceId]);
  }

  return allSources;
};

QueryGridController.prototype.getMergedSource_ = function (source, mergedSources) {
  var mergeSourceId = null;

  for (var currentMergeSourceId in this.mergeTabs) {
    var sourceLabels = this.mergeTabs[currentMergeSourceId];
    var containsSource = sourceLabels.some(function (sourceLabel) {
      return sourceLabel == source.label;
    });

    if (containsSource) {
      mergeSourceId = currentMergeSourceId;
      break;
    }
  }

  if (mergeSourceId === null) {
    return null;
  }

  var mergeSource;

  if (mergeSourceId in mergedSources) {
    mergeSource = mergedSources[mergeSourceId];
  } else {
    mergeSource = {
      features: [],
      id: mergeSourceId,
      label: mergeSourceId,
      limit: this.maxResults,
      pending: false,
      queried: true,
      tooManyResults: false
    };
    mergedSources[mergeSourceId] = mergeSource;
  }

  source.features.forEach(function (feature) {
    mergeSource.features.push(feature);
  });
  mergeSource.tooManyResults = mergeSource.tooManyResults || source.tooManyResults;

  if (mergeSource.tooManyResults) {
    mergeSource.totalFeatureCount = mergeSource.totalFeatureCount !== undefined ? mergeSource.totalFeatureCount + mergeSource.features.length : mergeSource.features.length;
    mergeSource.features = [];
  }

  if (source.totalFeatureCount !== undefined) {
    mergeSource.totalFeatureCount = mergeSource.totalFeatureCount !== undefined ? mergeSource.totalFeatureCount + source.totalFeatureCount : source.totalFeatureCount;
  }

  return mergeSource;
};

QueryGridController.prototype.collectData_ = function (source) {
  var features = source.features;
  var allProperties = [];
  var featureGeometriesNames = [];
  var featuresForSource = {};
  var properties, featureGeometryName;
  features.forEach(function (feature) {
    properties = feature.getProperties();

    if (properties !== undefined) {
      featureGeometryName = feature.getGeometryName();

      if (!featureGeometriesNames.includes(featureGeometryName)) {
        featureGeometriesNames.push(featureGeometryName);
      }

      allProperties.push(properties);
      featuresForSource[Object(ngeo_grid_Config_js__WEBPACK_IMPORTED_MODULE_4__["getRowUid"])(properties)] = feature;
    }
  });
  this.cleanProperties_(allProperties, featureGeometriesNames);

  if (allProperties.length > 0) {
    var gridCreated = this.makeGrid_(allProperties, source);

    if (gridCreated) {
      this.featuresForSources_["" + source.label] = featuresForSource;
    }
  }
};

QueryGridController.prototype.cleanProperties_ = function (allProperties, featureGeometriesNames) {
  allProperties.forEach(function (properties) {
    featureGeometriesNames.forEach(function (featureGeometryName) {
      delete properties[featureGeometryName];
    });
    delete properties.boundedBy;
    delete properties.ngeo_feature_type_;
  });

  if (this.removeEmptyColumns_ === true) {
    this.removeEmptyColumnsFn_(allProperties);
  }
};

QueryGridController.prototype.removeEmptyColumnsFn_ = function (allProperties) {
  var keysToKeep = [];
  var i, key;

  for (key in allProperties[0]) {
    for (i = 0; i < allProperties.length; i++) {
      if (allProperties[i][key] !== undefined) {
        keysToKeep.push(key);
        break;
      }
    }
  }

  var keyToRemove;
  allProperties.forEach(function (properties) {
    keyToRemove = [];

    for (key in properties) {
      if (!keysToKeep.includes(key)) {
        keyToRemove.push(key);
      }
    }

    keyToRemove.forEach(function (key) {
      delete properties[key];
    });
  });
};

QueryGridController.prototype.makeGrid_ = function (data, source) {
  var sourceLabel = "" + source.label;
  var gridConfig = null;

  if (data !== null) {
    gridConfig = this.getGridConfiguration_(data);

    if (gridConfig === null) {
      return false;
    }
  }

  if (!this.loadedGridSources.includes(sourceLabel)) {
    this.loadedGridSources.push(sourceLabel);
  }

  this.gridSources[sourceLabel] = {
    source: source
  };

  if (gridConfig) {
    this.gridSources[sourceLabel].configuration = gridConfig;
  }

  return true;
};

QueryGridController.prototype.getGridConfiguration_ = function (data) {
  if (!data.length) {
    throw new Error('Missing data');
  }

  var clone = {};
  Object.assign(clone, data[0]);
  delete clone.ol_uid;
  var columns = Object.keys(clone);
  var columnDefs = [];
  columns.forEach(function (column) {
    columnDefs.push({
      name: column
    });
  });

  if (columnDefs.length > 0) {
    return new ngeo_grid_Config_js__WEBPACK_IMPORTED_MODULE_4__["default"](data, columnDefs);
  } else {
    return null;
  }
};

QueryGridController.prototype.clear = function () {
  this.active = false;
  this.pending = false;
  this.gridSources = {};
  this.loadedGridSources = [];
  this.selectedTab = null;
  this.tooManyResults = false;
  this.features_.clear();
  this.highlightFeatures_.clear();
  this.ngeoMapQuerent_.clear();
  this.featuresForSources_ = {};

  if (this.unregisterSelectWatcher_) {
    this.unregisterSelectWatcher_();
  }
};

QueryGridController.prototype.selectTab = function (gridSource) {
  var _this5 = this;

  var source = gridSource.source;
  this.selectedTab = source.label;

  if (this.unregisterSelectWatcher_) {
    this.unregisterSelectWatcher_();
    this.unregisterSelectWatcher_ = null;
  }

  if (gridSource.configuration !== undefined) {
    this.unregisterSelectWatcher_ = this.$scope_.$watchCollection(function () {
      return gridSource.configuration.selectedRows;
    }, function (newSelected, oldSelectedRows) {
      if (Object.keys(newSelected) !== Object.keys(oldSelectedRows)) {
        _this5.onSelectionChanged_();
      }
    });
  }

  this.updateFeatures_(gridSource);
  this.reflowGrid_();
};

QueryGridController.prototype.reflowGrid_ = function () {
  var id = this.escapeValue(this.selectedTab || '');
  var activePane = this.$element_.find("div.tab-pane#" + id);
  activePane.removeClass('active').addClass('active');
  this.$timeout_(function () {
    activePane.find('div.ngeo-grid-table-container table').trigger('reflow');
  });
};

QueryGridController.prototype.onSelectionChanged_ = function () {
  if (this.selectedTab === null) {
    return;
  }

  var gridSource = this.gridSources["" + this.selectedTab];
  this.updateFeatures_(gridSource);
};

QueryGridController.prototype.updateFeatures_ = function (gridSource) {
  this.features_.clear();
  this.highlightFeatures_.clear();

  if (!gridSource.configuration) {
    return;
  }

  var sourceLabel = "" + gridSource.source.label;
  var featuresForSource = this.featuresForSources_[sourceLabel];
  var selectedRows = gridSource.configuration.selectedRows;

  for (var rowId in featuresForSource) {
    var feature = featuresForSource[rowId];

    if (rowId in selectedRows) {
      this.highlightFeatures_.push(feature);
    } else {
      this.features_.push(feature);
    }
  }
};

QueryGridController.prototype.getActiveGridSource = function () {
  if (this.selectedTab === null) {
    return null;
  } else {
    return this.gridSources["" + this.selectedTab];
  }
};

QueryGridController.prototype.isOneSelected = function () {
  var source = this.getActiveGridSource();

  if (source === null || source.configuration === null) {
    return false;
  } else {
    return source.configuration.getSelectedCount() > 0;
  }
};

QueryGridController.prototype.getSelectedRowCount = function () {
  var source = this.getActiveGridSource();

  if (source === null || source.configuration === null) {
    return 0;
  } else {
    return source.configuration.getSelectedCount();
  }
};

QueryGridController.prototype.selectAll = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.selectAll();
  }
};

QueryGridController.prototype.unselectAll = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.unselectAll();
  }
};

QueryGridController.prototype.invertSelection = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    source.configuration.invertSelection();
  }
};

QueryGridController.prototype.zoomToSelection = function () {
  if (!this.map_) {
    throw new Error('Missing map');
  }

  var source = this.getActiveGridSource();

  if (source !== null) {
    var extent = ol_extent_js__WEBPACK_IMPORTED_MODULE_8__["createEmpty"]();
    this.highlightFeatures_.forEach(function (feature) {
      var geometry = feature.getGeometry();

      if (!geometry) {
        throw new Error('Missing geometry');
      }

      ol_extent_js__WEBPACK_IMPORTED_MODULE_8__["extend"](extent, geometry.getExtent());
    });
    var size = this.map_.getSize();

    if (!size) {
      throw new Error('Missing size');
    }

    if (this.maxRecenterZoom === null) {
      throw new Error('Missing maxRecenterZoom');
    }

    this.map_.getView().fit(extent, {
      size: size,
      maxZoom: this.maxRecenterZoom
    });
  }
};

QueryGridController.prototype.downloadCsv = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    var columnDefs = source.configuration.columnDefs;

    if (!columnDefs) {
      throw new Error('Missing columnDefs');
    }

    var selectedRows = source.configuration.getSelectedRows();
    this.ngeoCsvDownload_.startDownload(selectedRows, columnDefs, this.filename_);
  }
};

module.controller('GmfDisplayquerygridController', QueryGridController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 4:
/*!**************************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/displayquerygrid.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/displayquerygrid.js */"./contribs/gmf/examples/displayquerygrid.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheXF1ZXJ5Z3JpZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvZXhhbXBsZXMvZGlzcGxheXF1ZXJ5Z3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvc3JjL3F1ZXJ5L2dyaWRDb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvc3JjL3F1ZXJ5L2dyaWRDb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImRpc3BsYXlxdWVyeWdyaWRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNCxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiZ21mVGhlbWVzXCIsIFwiZ21mRGF0YVNvdXJjZXNNYW5hZ2VyXCIsIFwibmdlb0ZlYXR1cmVPdmVybGF5TWdyXCJdO1xuUXVlcnlyZXN1bHRDb250cm9sbGVyLiRpbmplY3QgPSBbXCJuZ2VvUXVlcnlSZXN1bHRcIl07XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBhcHBVUkwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0ICcuL2Rpc3BsYXlxdWVyeWdyaWQuY3NzJztcbmltcG9ydCAnLi9nbWYtaGlkZGVuLmluYy5jc3MnO1xuaW1wb3J0IGdtZkRhdGFzb3VyY2VNYW5hZ2VyIGZyb20gJ2dtZi9kYXRhc291cmNlL01hbmFnZXIuanMnO1xuaW1wb3J0IGdtZkxheWVydHJlZUNvbXBvbmVudCBmcm9tICdnbWYvbGF5ZXJ0cmVlL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgZ21mTWFwQ29tcG9uZW50IGZyb20gJ2dtZi9tYXAvY29tcG9uZW50LmpzJztcbmltcG9ydCBnbWZRdWVyeUdyaWRDb21wb25lbnQgZnJvbSAnZ21mL3F1ZXJ5L2dyaWRDb21wb25lbnQuanMnO1xuaW1wb3J0IGdtZlRoZW1lVGhlbWVzIGZyb20gJ2dtZi90aGVtZS9UaGVtZXMuanMnO1xuaW1wb3J0IG5nZW9HcmlkTW9kdWxlIGZyb20gJ25nZW8vZ3JpZC9tb2R1bGUuanMnO1xuaW1wb3J0IG5nZW9NYXBNb2R1bGUgZnJvbSAnbmdlby9tYXAvbW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvTWlzY0J0bkNvbXBvbmVudCBmcm9tICduZ2VvL21pc2MvYnRuQ29tcG9uZW50LmpzJztcbmltcG9ydCBFUFNHMjA1NiBmcm9tICdAZ2VvYmxvY2tzL3Byb2ovc3JjL0VQU0dfMjA1Ni5qcyc7XG5pbXBvcnQgbmdlb1F1ZXJ5Q29tcG9uZW50IGZyb20gJ25nZW8vcXVlcnkvY29tcG9uZW50LmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3LmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNLmpzJztcbmltcG9ydCBvbFN0eWxlQ2lyY2xlIGZyb20gJ29sL3N0eWxlL0NpcmNsZS5qcyc7XG5pbXBvcnQgb2xTdHlsZUZpbGwgZnJvbSAnb2wvc3R5bGUvRmlsbC5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHlsZSBmcm9tICdvbC9zdHlsZS9TdHlsZS5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZmFwcCcsIFsnZ2V0dGV4dCcsIGdtZkRhdGFzb3VyY2VNYW5hZ2VyLm5hbWUsIGdtZkxheWVydHJlZUNvbXBvbmVudC5uYW1lLCBnbWZNYXBDb21wb25lbnQubmFtZSwgZ21mUXVlcnlHcmlkQ29tcG9uZW50Lm5hbWUsIGdtZlRoZW1lVGhlbWVzLm5hbWUsIG5nZW9HcmlkTW9kdWxlLm5hbWUsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb01pc2NCdG5Db21wb25lbnQubmFtZSwgbmdlb1F1ZXJ5Q29tcG9uZW50Lm5hbWVdKTtcbm1vZHVsZS5jb25zdGFudCgnbmdlb1F1ZXJ5T3B0aW9ucycsIHtcbiAgJ2xpbWl0JzogMjAsXG4gICdxdWVyeUNvdW50Rmlyc3QnOiB0cnVlXG59KTtcbm1vZHVsZS5jb25zdGFudCgnZ21mVHJlZVVybCcsIGFwcFVSTC5HTUZfVEhFTUVTKTtcbm1vZHVsZS5jb25zdGFudCgnZGVmYXVsdFRoZW1lJywgJ0RlbW8nKTtcbm1vZHVsZS5jb25zdGFudCgnYW5ndWxhckxvY2FsZVNjcmlwdCcsICcuLi9idWlsZC9hbmd1bGFyLWxvY2FsZV97e2xvY2FsZX19LmpzJyk7XG52YXIgcXVlcnlyZXN1bHRDb21wb25lbnQgPSB7XG4gIGNvbnRyb2xsZXI6ICdnbWZhcHBRdWVyeXJlc3VsdENvbnRyb2xsZXInLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9wYXJ0aWFscy9xdWVyeXJlc3VsdC5odG1sJylcbn07XG5tb2R1bGUuY29tcG9uZW50KCdnbWZhcHBRdWVyeXJlc3VsdCcsIHF1ZXJ5cmVzdWx0Q29tcG9uZW50KTtcblxuZnVuY3Rpb24gUXVlcnlyZXN1bHRDb250cm9sbGVyKG5nZW9RdWVyeVJlc3VsdCkge1xuICB0aGlzLnJlc3VsdCA9IG5nZW9RdWVyeVJlc3VsdDtcbn1cblxubW9kdWxlLmNvbnRyb2xsZXIoJ2dtZmFwcFF1ZXJ5cmVzdWx0Q29udHJvbGxlcicsIFF1ZXJ5cmVzdWx0Q29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKGdtZlRoZW1lcywgZ21mRGF0YVNvdXJjZXNNYW5hZ2VyLCBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBnbWZUaGVtZXMubG9hZFRoZW1lcygpO1xuICB2YXIgZmlsbCA9IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgY29sb3I6IFsyNTUsIDE3MCwgMCwgMC42XVxuICB9KTtcbiAgdmFyIHN0cm9rZSA9IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICBjb2xvcjogWzI1NSwgMTcwLCAwLCAxXSxcbiAgICB3aWR0aDogMlxuICB9KTtcbiAgdGhpcy5mZWF0dXJlU3R5bGUgPSBuZXcgb2xTdHlsZVN0eWxlKHtcbiAgICBmaWxsOiBmaWxsLFxuICAgIGltYWdlOiBuZXcgb2xTdHlsZUNpcmNsZSh7XG4gICAgICBmaWxsOiBmaWxsLFxuICAgICAgcmFkaXVzOiA1LFxuICAgICAgc3Ryb2tlOiBzdHJva2VcbiAgICB9KSxcbiAgICBzdHJva2U6IHN0cm9rZVxuICB9KTtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldLFxuICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgcHJvamVjdGlvbjogRVBTRzIwNTYsXG4gICAgICByZXNvbHV0aW9uczogWzIwMCwgMTAwLCA1MCwgMjAsIDEwLCA1LCAyLjUsIDIsIDEsIDAuNV0sXG4gICAgICBjZW50ZXI6IFsyNTM3NjM1LCAxMTUyNjQwXSxcbiAgICAgIHpvb206IDNcbiAgICB9KVxuICB9KTtcbiAgZ21mRGF0YVNvdXJjZXNNYW5hZ2VyLnNldERhdGFzb3VyY2VNYXAodGhpcy5tYXApO1xuICB0aGlzLnRoZW1lcyA9IHVuZGVmaW5lZDtcbiAgdGhpcy50cmVlU291cmNlID0gdW5kZWZpbmVkO1xuICB0aGlzLnF1ZXJ5QWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5xdWVyeUdyaWRBY3RpdmUgPSB0cnVlO1xuICBnbWZUaGVtZXMuZ2V0VGhlbWVzT2JqZWN0KCkudGhlbihmdW5jdGlvbiAodGhlbWVzKSB7XG4gICAgaWYgKHRoZW1lcykge1xuICAgICAgX3RoaXMudGhlbWVzID0gdGhlbWVzO1xuICAgICAgX3RoaXMudHJlZVNvdXJjZSA9IHRoZW1lc1szXTtcbiAgICB9XG4gIH0pO1xuICBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IuaW5pdCh0aGlzLm1hcCk7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwiZ21mLWRpc3BsYXlxdWVyeWdyaWQgcGFuZWxcIiBuZy1zaG93PVwiY3RybC5hY3RpdmVcIj5cXG4gIDxkaXZcXG4gICAgY2xhc3M9XCJjbG9zZVwiXFxuICAgIG5nLWNsaWNrPVwiY3RybC5jbGVhcigpXCI+XFxuICAgICZ0aW1lcztcXG4gIDwvZGl2PlxcblxcbiAgPHVsXFxuICAgIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiXFxuICAgIHJvbGU9XCJ0YWJsaXN0XCI+XFxuXFxuICAgIDxsaVxcbiAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxcbiAgICAgIG5nLXJlcGVhdD1cImdyaWRTb3VyY2UgaW4gY3RybC5nZXRHcmlkU291cmNlcygpIHRyYWNrIGJ5IGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsXCJcXG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcXG4gICAgICBuZy1jbGljaz1cImN0cmwuc2VsZWN0VGFiKGdyaWRTb3VyY2UpXCI+XFxuXFxuICAgICAgPGFcXG4gICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIlxcbiAgICAgICAgaHJlZj1cIiN7e2N0cmwuZXNjYXBlVmFsdWUoZ3JpZFNvdXJjZS5zb3VyY2UubGFiZWwpfX1cIlxcbiAgICAgICAgbmctY2xhc3M9XCJ7XFwnYWN0aXZlXFwnIDogY3RybC5pc1NlbGVjdGVkKGdyaWRTb3VyY2UpfVwiXFxuICAgICAgICBkYXRhLXRhcmdldD1cIiN7e2N0cmwuZXNjYXBlVmFsdWUoZ3JpZFNvdXJjZS5zb3VyY2UubGFiZWwpfX1cIlxcbiAgICAgICAgYXJpYS1jb250cm9scz1cInt7Y3RybC5lc2NhcGVWYWx1ZShncmlkU291cmNlLnNvdXJjZS5sYWJlbCl9fVwiXFxuICAgICAgICByb2xlPVwidGFiXCJcXG4gICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCI+XFxuXFxuICAgICAgICA8c3BhbiBuZy1pZj1cImdyaWRTb3VyY2Uuc291cmNlLnRvb01hbnlSZXN1bHRzICE9PSB0cnVlXCI+XFxuICAgICAgICAgIHt7Z3JpZFNvdXJjZS5zb3VyY2UubGFiZWwgfCB0cmFuc2xhdGV9fSAoe3tncmlkU291cmNlLnNvdXJjZS5mZWF0dXJlcy5sZW5ndGh9fSlcXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIG5nLWlmPVwiZ3JpZFNvdXJjZS5zb3VyY2UudG9vTWFueVJlc3VsdHMgPT09IHRydWVcIj5cXG4gICAgICAgICAge3tncmlkU291cmNlLnNvdXJjZS5sYWJlbCB8IHRyYW5zbGF0ZX19ICh7e2dyaWRTb3VyY2Uuc291cmNlLnRvdGFsRmVhdHVyZUNvdW50fX0qKVxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIDwvYT5cXG4gICAgPC9saT5cXG4gIDwvdWw+XFxuXFxuICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cXG4gICAgPGRpdlxcbiAgICAgIG5nLXJlcGVhdD1cImdyaWRTb3VyY2UgaW4gY3RybC5nZXRHcmlkU291cmNlcygpIHRyYWNrIGJ5IGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsXCJcXG4gICAgICByb2xlPVwidGFicGFuZWxcIlxcbiAgICAgIGNsYXNzPVwidGFiLXBhbmVcIlxcbiAgICAgIG5nLWNsYXNzPVwie1xcJ2FjdGl2ZVxcJyA6IGN0cmwuaXNTZWxlY3RlZChncmlkU291cmNlKX1cIlxcbiAgICAgIGlkPVwie3tjdHJsLmVzY2FwZVZhbHVlKGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsKX19XCI+XFxuXFxuICAgICAgPG5nZW8tZ3JpZFxcbiAgICAgICAgbmdlby1ncmlkLWNvbmZpZ3VyYXRpb249XCJncmlkU291cmNlLmNvbmZpZ3VyYXRpb25cIlxcbiAgICAgICAgbmctaWY9XCJncmlkU291cmNlLnNvdXJjZS50b29NYW55UmVzdWx0cyAhPT0gdHJ1ZVwiPlxcbiAgICAgIDwvbmdlby1ncmlkPlxcblxcbiAgICAgIDxkaXYgbmctaWY9XCJncmlkU291cmNlLnNvdXJjZS50b29NYW55UmVzdWx0cyA9PT0gdHJ1ZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImdtZi1kaXNwbGF5cXVlcnlncmlkLW1lc3NhZ2UgYWxlcnQgYWxlcnQtd2FybmluZ1wiPlxcbiAgICAgICAgICA8cD48c3BhbiB0cmFuc2xhdGU+VGhlIHJlc3VsdHMgY2FuIG5vdCBiZSBkaXNwbGF5ZWQgYmVjYXVzZSB0aGUgbWF4aW11bSBudW1iZXIgaGFzIGJlZW4gcmVhY2hlZDwvc3Bhbj4gKHt7Z3JpZFNvdXJjZS5zb3VyY2UubGltaXR9fSkuPC9wPlxcbiAgICAgICAgICA8cCB0cmFuc2xhdGU+UGxlYXNlIHJlZmluZSB5b3VyIHF1ZXJ5LjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBuZy1zaG93PVwiIWN0cmwucGVuZGluZyAmJiBjdHJsLmdldEFjdGl2ZUdyaWRTb3VyY2UoKSAmJiBjdHJsLmdldEFjdGl2ZUdyaWRTb3VyY2UoKS5jb25maWd1cmF0aW9uICE9PSBudWxsXCI+XFxuXFxuICAgIDx1bCBjbGFzcz1cIm5hdiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XFxuXFxuICAgICAgPGxpXFxuICAgICAgICBjbGFzcz1cIm5nLWhpZGVcIlxcbiAgICAgICAgbmctc2hvdz1cImN0cmwuaXNPbmVTZWxlY3RlZCgpXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi1zbSBuZy1iaW5kaW5nXCI+XFxuICAgICAgICAgIHt7Y3RybC5nZXRTZWxlY3RlZFJvd0NvdW50KCl9fSA8c3BhbiB0cmFuc2xhdGU+c2VsZWN0ZWQgZWxlbWVudChzKTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbGk+XFxuXFxuICAgICAgPGxpXFxuICAgICAgICBuZy1zaG93PVwiY3RybC5pc09uZVNlbGVjdGVkKClcIlxcbiAgICAgICAgY2xhc3M9XCJuZy1oaWRlXCI+XFxuICAgICAgICA8YnV0dG9uXFxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiXFxuICAgICAgICAgIHRpdGxlPVwie3tcXCdab29tIHRvIHNlbGVjdGlvblxcJyB8IHRyYW5zbGF0ZX19XCJcXG4gICAgICAgICAgbmctY2xpY2s9XCJjdHJsLnpvb21Ub1NlbGVjdGlvbigpXCI+XFxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L2k+IDxzcGFuIHRyYW5zbGF0ZT5ab29tIHRvPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9saT5cXG5cXG4gICAgICA8bGlcXG4gICAgICAgIG5nLXNob3c9XCJjdHJsLmlzT25lU2VsZWN0ZWQoKVwiXFxuICAgICAgICBjbGFzcz1cIm5nLWhpZGVcIj5cXG4gICAgICAgIDxidXR0b25cXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCJcXG4gICAgICAgICAgdGl0bGU9XCJ7e1xcJ0V4cG9ydCBzZWxlY3Rpb24gYXMgQ1NWXFwnIHwgdHJhbnNsYXRlfX1cIlxcbiAgICAgICAgICBuZy1jbGljaz1cImN0cmwuZG93bmxvYWRDc3YoKVwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCI+PC9pPiA8c3BhbiB0cmFuc2xhdGU+RXhwb3J0IGFzIENTVjwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvbGk+XFxuXFxuICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cXG4gICAgICAgIDxidXR0b25cXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgICAgIGNsYXNzPVwiZHJvcHVwIGJ0biBidG4tZGVmYXVsdCBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCJcXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXFxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XFxuICAgICAgICAgIDxzcGFuIHRyYW5zbGF0ZT5TZWxlY3Q8L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDx1bFxcbiAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkTGFiZWxcIj5cXG4gICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxhXFxuICAgICAgICAgICAgICBocmVmPVwiXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RBbGwoKVwiIHRyYW5zbGF0ZT5BbGw8L2E+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICA8YVxcbiAgICAgICAgICAgICAgaHJlZj1cIlwiXFxuICAgICAgICAgICAgICBuZy1jbGljaz1cImN0cmwudW5zZWxlY3RBbGwoKVwiIHRyYW5zbGF0ZT5Ob25lPC9hPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgPGFcXG4gICAgICAgICAgICAgIGhyZWY9XCJcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCJjdHJsLmludmVydFNlbGVjdGlvbigpXCIgdHJhbnNsYXRlPlJldmVyc2Ugc2VsZWN0aW9uPC9hPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2XFxuICAgIG5nLXNob3c9XCJjdHJsLnBlbmRpbmdcIlxcbiAgICBjbGFzcz1cImdtZi1kaXNwbGF5cXVlcnlncmlkLXBlbmRpbmdcIj5cXG4gICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIj48L3NwYW4+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59IiwiUXVlcnlHcmlkQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGluamVjdG9yXCIsIFwiJHNjb3BlXCIsIFwibmdlb1F1ZXJ5UmVzdWx0XCIsIFwibmdlb01hcFF1ZXJlbnRcIiwgXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIiwgXCIkdGltZW91dFwiLCBcIm5nZW9Dc3ZEb3dubG9hZFwiLCBcIiRlbGVtZW50XCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb0Rvd25sb2FkQ3N2IGZyb20gJ25nZW8vZG93bmxvYWQvQ3N2LmpzJztcbmltcG9ydCBuZ2VvRG93bmxvYWRTZXJ2aWNlIGZyb20gJ25nZW8vZG93bmxvYWQvc2VydmljZS5qcyc7XG5pbXBvcnQgbmdlb0dyaWRDb21wb25lbnQgZnJvbSAnbmdlby9ncmlkL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgbmdlb0dyaWRDb25maWcsIHsgZ2V0Um93VWlkIH0gZnJvbSAnbmdlby9ncmlkL0NvbmZpZy5qcyc7XG5pbXBvcnQgbmdlb01hcEZlYXR1cmVPdmVybGF5TWdyIGZyb20gJ25nZW8vbWFwL0ZlYXR1cmVPdmVybGF5TWdyLmpzJztcbmltcG9ydCBuZ2VvUXVlcnlNYXBRdWVyZW50IGZyb20gJ25nZW8vcXVlcnkvTWFwUXVlcmVudC5qcyc7XG5pbXBvcnQgb2xDb2xsZWN0aW9uIGZyb20gJ29sL0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0ICogYXMgb2xFeHRlbnQgZnJvbSAnb2wvZXh0ZW50LmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IG9sU3R5bGVDaXJjbGUgZnJvbSAnb2wvc3R5bGUvQ2lyY2xlLmpzJztcbmltcG9ydCBvbFN0eWxlRmlsbCBmcm9tICdvbC9zdHlsZS9GaWxsLmpzJztcbmltcG9ydCBvbFN0eWxlU3Ryb2tlIGZyb20gJ29sL3N0eWxlL1N0cm9rZS5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0eWxlIGZyb20gJ29sL3N0eWxlL1N0eWxlLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9kcm9wZG93bi5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZlF1ZXJ5R3JpZENvbXBvbmVudCcsIFtuZ2VvRG93bmxvYWRDc3YubmFtZSwgbmdlb0Rvd25sb2FkU2VydmljZS5uYW1lLCBuZ2VvR3JpZENvbXBvbmVudC5uYW1lLCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IubmFtZSwgbmdlb1F1ZXJ5TWFwUXVlcmVudC5uYW1lXSk7XG5tb2R1bGUudmFsdWUoJ2dtZkRpc3BsYXlxdWVyeWdyaWRUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uICgkZWxlbWVudCwgJGF0dHJzKSB7XG4gIHZhciB0ZW1wbGF0ZVVybCA9ICRhdHRycy5nbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGV1cmw7XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnZ21mL3F1ZXJ5L2dyaWRDb21wb25lbnQnO1xufSk7XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2dtZi9xdWVyeS9ncmlkQ29tcG9uZW50JywgcmVxdWlyZSgnLi9ncmlkQ29tcG9uZW50Lmh0bWwnKSk7XG59XSk7XG5nbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwuJGluamVjdCA9IFtcIiRlbGVtZW50XCIsIFwiJGF0dHJzXCIsIFwiZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBnbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycywgZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsKSB7XG4gIHJldHVybiBnbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycyk7XG59XG5cbnZhciBxdWVyeUdyaWRDb21wb25lbnQgPSB7XG4gIGNvbnRyb2xsZXI6ICdHbWZEaXNwbGF5cXVlcnlncmlkQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgYmluZGluZ3M6IHtcbiAgICAnYWN0aXZlJzogJz0/Z21mRGlzcGxheXF1ZXJ5Z3JpZEFjdGl2ZScsXG4gICAgJ2ZlYXR1cmVzU3R5bGVGbic6ICcmZ21mRGlzcGxheXF1ZXJ5Z3JpZEZlYXR1cmVzc3R5bGUnLFxuICAgICdzZWxlY3RlZEZlYXR1cmVTdHlsZUZuJzogJyZnbWZEaXNwbGF5cXVlcnlncmlkU2VsZWN0ZWRmZWF0dXJlc3R5bGUnLFxuICAgICdnZXRNYXBGbic6ICcmZ21mRGlzcGxheXF1ZXJ5Z3JpZE1hcCcsXG4gICAgJ3JlbW92ZUVtcHR5Q29sdW1uc0ZuJzogJyY/Z21mRGlzcGxheXF1ZXJ5Z3JpZFJlbW92ZWVtcHR5Y29sdW1ucycsXG4gICAgJ21heFJlc3VsdHNGbic6ICcmP2dtZkRpc3BsYXlxdWVyeWdyaWRNYXhyZXN1bHRzJyxcbiAgICAnbWF4UmVjZW50ZXJab29tRm4nOiAnJj9nbWZEaXNwbGF5cXVlcnlncmlkTWF4cmVjZW50ZXJ6b29tJyxcbiAgICAnbWVyZ2VUYWJzJzogJzw/Z21mRGlzcGxheXF1ZXJ5Z3JpZE1lcmdldGFicydcbiAgfSxcbiAgdGVtcGxhdGVVcmw6IGdtZkRpc3BsYXlxdWVyeWdyaWRUZW1wbGF0ZVVybFxufTtcbm1vZHVsZS5jb21wb25lbnQoJ2dtZkRpc3BsYXlxdWVyeWdyaWQnLCBxdWVyeUdyaWRDb21wb25lbnQpO1xuZXhwb3J0IGZ1bmN0aW9uIFF1ZXJ5R3JpZENvbnRyb2xsZXIoJGluamVjdG9yLCAkc2NvcGUsIG5nZW9RdWVyeVJlc3VsdCwgbmdlb01hcFF1ZXJlbnQsIG5nZW9GZWF0dXJlT3ZlcmxheU1nciwgJHRpbWVvdXQsIG5nZW9Dc3ZEb3dubG9hZCwgJGVsZW1lbnQpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgcXVlcnlPcHRpb25zID0gJGluamVjdG9yLmhhcygnbmdlb1F1ZXJ5T3B0aW9ucycpID8gJGluamVjdG9yLmdldCgnbmdlb1F1ZXJ5T3B0aW9ucycpIDoge307XG4gIHRoaXMuJHNjb3BlXyA9ICRzY29wZTtcbiAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgdGhpcy5uZ2VvUXVlcnlSZXN1bHQgPSBuZ2VvUXVlcnlSZXN1bHQ7XG4gIHRoaXMubmdlb01hcFF1ZXJlbnRfID0gbmdlb01hcFF1ZXJlbnQ7XG4gIHRoaXMubmdlb0NzdkRvd25sb2FkXyA9IG5nZW9Dc3ZEb3dubG9hZDtcbiAgdGhpcy4kZWxlbWVudF8gPSAkZWxlbWVudDtcbiAgdGhpcy5tYXhSZXN1bHRzID0gcXVlcnlPcHRpb25zLmxpbWl0ICE9PSB1bmRlZmluZWQgPyBxdWVyeU9wdGlvbnMubGltaXQgOiA1MDtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gIHRoaXMuZ3JpZFNvdXJjZXMgPSB7fTtcbiAgdGhpcy5sb2FkZWRHcmlkU291cmNlcyA9IFtdO1xuICB0aGlzLnNlbGVjdGVkVGFiID0gbnVsbDtcbiAgdGhpcy5yZW1vdmVFbXB0eUNvbHVtbnNfID0gZmFsc2U7XG4gIHRoaXMubWF4UmVjZW50ZXJab29tID0gbnVsbDtcbiAgdGhpcy5tZXJnZVRhYnMgPSB7fTtcbiAgdGhpcy5mZWF0dXJlc0ZvclNvdXJjZXNfID0ge307XG4gIHRoaXMuZmVhdHVyZXNfID0gbmV3IG9sQ29sbGVjdGlvbigpO1xuICB0aGlzLm5nZW9GZWF0dXJlT3ZlcmxheU1ncl8gPSBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3I7XG4gIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZXNfID0gbmV3IG9sQ29sbGVjdGlvbigpO1xuICB0aGlzLmZpbGVuYW1lXyA9ICRpbmplY3Rvci5oYXMoJ2dtZkNzdkZpbGVuYW1lJykgPyAkaW5qZWN0b3IuZ2V0KCdnbWZDc3ZGaWxlbmFtZScpIDogJ3F1ZXJ5LXJlc3VsdHMuY3N2JztcbiAgdGhpcy5tYXBfID0gbnVsbDtcbiAgdGhpcy4kc2NvcGVfLiR3YXRjaENvbGxlY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZ2VvUXVlcnlSZXN1bHQ7XG4gIH0sIGZ1bmN0aW9uIChuZXdRdWVyeVJlc3VsdCwgb2xkUXVlcnlSZXN1bHQpIHtcbiAgICBpZiAobmV3UXVlcnlSZXN1bHQgIT09IG9sZFF1ZXJ5UmVzdWx0KSB7XG4gICAgICBfdGhpcy51cGRhdGVEYXRhXygpO1xuICAgIH1cbiAgfSk7XG4gIHRoaXMudW5yZWdpc3RlclNlbGVjdFdhdGNoZXJfID0gbnVsbDtcblxuICB0aGlzLnJlbW92ZUVtcHR5Q29sdW1uc0ZuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB0aGlzLm1heFJlY2VudGVyWm9vbUZuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHRoaXMuZmVhdHVyZXNTdHlsZUZuID0gbnVsbDtcbiAgdGhpcy5zZWxlY3RlZEZlYXR1cmVTdHlsZUZuID0gbnVsbDtcbiAgdGhpcy5nZXRNYXBGbiA9IG51bGw7XG59XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5nZXRNYXBGbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBnZXRNYXBGbicpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmZlYXR1cmVzU3R5bGVGbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBmZWF0dXJlc1N0eWxlRm4nKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zZWxlY3RlZEZlYXR1cmVTdHlsZUZuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHNlbGVjdGVkRmVhdHVyZVN0eWxlRm4nKTtcbiAgfVxuXG4gIHRoaXMucmVtb3ZlRW1wdHlDb2x1bW5zXyA9IHRoaXMucmVtb3ZlRW1wdHlDb2x1bW5zRm4oKTtcbiAgdGhpcy5tYXhSZWNlbnRlclpvb20gPSB0aGlzLm1heFJlY2VudGVyWm9vbUZuKCk7XG4gIHZhciBmZWF0dXJlc092ZXJsYXkgPSB0aGlzLm5nZW9GZWF0dXJlT3ZlcmxheU1ncl8uZ2V0RmVhdHVyZU92ZXJsYXkoKTtcbiAgZmVhdHVyZXNPdmVybGF5LnNldEZlYXR1cmVzKHRoaXMuZmVhdHVyZXNfKTtcbiAgdmFyIGZlYXR1cmVzU3R5bGUgPSB0aGlzLmZlYXR1cmVzU3R5bGVGbigpO1xuXG4gIGlmIChmZWF0dXJlc1N0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoIShmZWF0dXJlc1N0eWxlIGluc3RhbmNlb2Ygb2xTdHlsZVN0eWxlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBmZWF0dXJlc1N0eWxlIHR5cGUnKTtcbiAgICB9XG5cbiAgICBmZWF0dXJlc092ZXJsYXkuc2V0U3R5bGUoZmVhdHVyZXNTdHlsZSk7XG4gIH1cblxuICB2YXIgaGlnaGxpZ2h0RmVhdHVyZXNPdmVybGF5ID0gdGhpcy5uZ2VvRmVhdHVyZU92ZXJsYXlNZ3JfLmdldEZlYXR1cmVPdmVybGF5KCk7XG4gIGhpZ2hsaWdodEZlYXR1cmVzT3ZlcmxheS5zZXRGZWF0dXJlcyh0aGlzLmhpZ2hsaWdodEZlYXR1cmVzXyk7XG4gIHZhciBoaWdobGlnaHRGZWF0dXJlU3R5bGUgPSB0aGlzLnNlbGVjdGVkRmVhdHVyZVN0eWxlRm4oKTtcblxuICBpZiAoaGlnaGxpZ2h0RmVhdHVyZVN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoIShoaWdobGlnaHRGZWF0dXJlU3R5bGUgaW5zdGFuY2VvZiBvbFN0eWxlU3R5bGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIGhpZ2hsaWdodEZlYXR1cmVTdHlsZSB0eXBlJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBmaWxsID0gbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgIGNvbG9yOiBbMjU1LCAwLCAwLCAwLjZdXG4gICAgfSk7XG4gICAgdmFyIHN0cm9rZSA9IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgIGNvbG9yOiBbMjU1LCAwLCAwLCAxXSxcbiAgICAgIHdpZHRoOiAyXG4gICAgfSk7XG4gICAgaGlnaGxpZ2h0RmVhdHVyZVN0eWxlID0gbmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgICBmaWxsOiBmaWxsLFxuICAgICAgaW1hZ2U6IG5ldyBvbFN0eWxlQ2lyY2xlKHtcbiAgICAgICAgZmlsbDogZmlsbCxcbiAgICAgICAgcmFkaXVzOiA1LFxuICAgICAgICBzdHJva2U6IHN0cm9rZVxuICAgICAgfSksXG4gICAgICBzdHJva2U6IHN0cm9rZSxcbiAgICAgIHpJbmRleDogMTBcbiAgICB9KTtcbiAgfVxuXG4gIGhpZ2hsaWdodEZlYXR1cmVzT3ZlcmxheS5zZXRTdHlsZShoaWdobGlnaHRGZWF0dXJlU3R5bGUpO1xuICB2YXIgbWFwRm4gPSB0aGlzLmdldE1hcEZuO1xuXG4gIGlmIChtYXBGbikge1xuICAgIHZhciBtYXAgPSBtYXBGbigpO1xuXG4gICAgaWYgKCEobWFwIGluc3RhbmNlb2Ygb2xNYXApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIG1hcCB0eXBlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXBfID0gbWFwO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRHcmlkU291cmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgcmV0dXJuIHRoaXMubG9hZGVkR3JpZFNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2VMYWJlbCkge1xuICAgIHJldHVybiBfdGhpczIuZ3JpZFNvdXJjZXNbc291cmNlTGFiZWxdO1xuICB9KTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZURhdGFfID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMzID0gdGhpcztcblxuICBpZiAoKHRoaXMubmdlb1F1ZXJ5UmVzdWx0LnBlbmRpbmcgfHwgdGhpcy5uZ2VvUXVlcnlSZXN1bHQudG90YWwgPT09IDApICYmICF0aGlzLmhhc09uZVdpdGhUb29NYW55UmVzdWx0c18oKSkge1xuICAgIHZhciBvbGRBY3RpdmUgPSB0aGlzLmFjdGl2ZTtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBpZiAob2xkQWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMubmdlb1F1ZXJ5UmVzdWx0LnBlbmRpbmc7XG4gICAgICB0aGlzLnBlbmRpbmcgPSB0aGlzLm5nZW9RdWVyeVJlc3VsdC5wZW5kaW5nO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gIHZhciBzb3VyY2VzID0gdGhpcy5uZ2VvUXVlcnlSZXN1bHQuc291cmNlcztcblxuICBpZiAoT2JqZWN0LmtleXModGhpcy5tZXJnZVRhYnMpLmxlbmd0aCA+IDApIHtcbiAgICBzb3VyY2VzID0gdGhpcy5nZXRNZXJnZWRTb3VyY2VzXyhzb3VyY2VzKTtcbiAgfVxuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZS50b29NYW55UmVzdWx0cykge1xuICAgICAgX3RoaXMzLm1ha2VHcmlkXyhudWxsLCBzb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2UuaWQgPSBfdGhpczMuZXNjYXBlVmFsdWUoc291cmNlLmlkKTtcbiAgICAgIHZhciBmZWF0dXJlcyA9IHNvdXJjZS5mZWF0dXJlcztcblxuICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3RoaXMzLmNvbGxlY3REYXRhXyhzb3VyY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRoaXMubG9hZGVkR3JpZFNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gbnVsbCB8fCAhKFwiXCIgKyB0aGlzLnNlbGVjdGVkVGFiIGluIHRoaXMuZ3JpZFNvdXJjZXMpKSB7XG4gICAgdGhpcy4kdGltZW91dF8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZpcnN0U291cmNlSWQgPSBfdGhpczMubG9hZGVkR3JpZFNvdXJjZXNbMF07XG5cbiAgICAgIF90aGlzMy5zZWxlY3RUYWIoX3RoaXMzLmdyaWRTb3VyY2VzW2ZpcnN0U291cmNlSWRdKTtcbiAgICB9LCAwKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuaGFzT25lV2l0aFRvb01hbnlSZXN1bHRzXyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubmdlb1F1ZXJ5UmVzdWx0LnNvdXJjZXMuc29tZShmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZS50b29NYW55UmVzdWx0cztcbiAgfSk7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5lc2NhcGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciB0b0VzY2FwZSA9IC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcIHxdL2c7XG5cbiAgICBpZiAodmFsdWUubWF0Y2godG9Fc2NhcGUpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSh0b0VzY2FwZSwgJ18nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuaXNTZWxlY3RlZCA9IGZ1bmN0aW9uIChncmlkU291cmNlKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdGVkVGFiID09PSBncmlkU291cmNlLnNvdXJjZS5sYWJlbDtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmdldE1lcmdlZFNvdXJjZXNfID0gZnVuY3Rpb24gKHNvdXJjZXMpIHtcbiAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgdmFyIGFsbFNvdXJjZXMgPSBbXTtcbiAgdmFyIG1lcmdlZFNvdXJjZXMgPSB7fTtcbiAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICB2YXIgbWVyZ2VkU291cmNlID0gX3RoaXM0LmdldE1lcmdlZFNvdXJjZV8oc291cmNlLCBtZXJnZWRTb3VyY2VzKTtcblxuICAgIGlmIChtZXJnZWRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgIGFsbFNvdXJjZXMucHVzaChzb3VyY2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgZm9yICh2YXIgbWVyZ2VkU291cmNlSWQgaW4gbWVyZ2VkU291cmNlcykge1xuICAgIGFsbFNvdXJjZXMucHVzaChtZXJnZWRTb3VyY2VzW21lcmdlZFNvdXJjZUlkXSk7XG4gIH1cblxuICByZXR1cm4gYWxsU291cmNlcztcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmdldE1lcmdlZFNvdXJjZV8gPSBmdW5jdGlvbiAoc291cmNlLCBtZXJnZWRTb3VyY2VzKSB7XG4gIHZhciBtZXJnZVNvdXJjZUlkID0gbnVsbDtcblxuICBmb3IgKHZhciBjdXJyZW50TWVyZ2VTb3VyY2VJZCBpbiB0aGlzLm1lcmdlVGFicykge1xuICAgIHZhciBzb3VyY2VMYWJlbHMgPSB0aGlzLm1lcmdlVGFic1tjdXJyZW50TWVyZ2VTb3VyY2VJZF07XG4gICAgdmFyIGNvbnRhaW5zU291cmNlID0gc291cmNlTGFiZWxzLnNvbWUoZnVuY3Rpb24gKHNvdXJjZUxhYmVsKSB7XG4gICAgICByZXR1cm4gc291cmNlTGFiZWwgPT0gc291cmNlLmxhYmVsO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbnRhaW5zU291cmNlKSB7XG4gICAgICBtZXJnZVNvdXJjZUlkID0gY3VycmVudE1lcmdlU291cmNlSWQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAobWVyZ2VTb3VyY2VJZCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1lcmdlU291cmNlO1xuXG4gIGlmIChtZXJnZVNvdXJjZUlkIGluIG1lcmdlZFNvdXJjZXMpIHtcbiAgICBtZXJnZVNvdXJjZSA9IG1lcmdlZFNvdXJjZXNbbWVyZ2VTb3VyY2VJZF07XG4gIH0gZWxzZSB7XG4gICAgbWVyZ2VTb3VyY2UgPSB7XG4gICAgICBmZWF0dXJlczogW10sXG4gICAgICBpZDogbWVyZ2VTb3VyY2VJZCxcbiAgICAgIGxhYmVsOiBtZXJnZVNvdXJjZUlkLFxuICAgICAgbGltaXQ6IHRoaXMubWF4UmVzdWx0cyxcbiAgICAgIHBlbmRpbmc6IGZhbHNlLFxuICAgICAgcXVlcmllZDogdHJ1ZSxcbiAgICAgIHRvb01hbnlSZXN1bHRzOiBmYWxzZVxuICAgIH07XG4gICAgbWVyZ2VkU291cmNlc1ttZXJnZVNvdXJjZUlkXSA9IG1lcmdlU291cmNlO1xuICB9XG5cbiAgc291cmNlLmZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICBtZXJnZVNvdXJjZS5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICB9KTtcbiAgbWVyZ2VTb3VyY2UudG9vTWFueVJlc3VsdHMgPSBtZXJnZVNvdXJjZS50b29NYW55UmVzdWx0cyB8fCBzb3VyY2UudG9vTWFueVJlc3VsdHM7XG5cbiAgaWYgKG1lcmdlU291cmNlLnRvb01hbnlSZXN1bHRzKSB7XG4gICAgbWVyZ2VTb3VyY2UudG90YWxGZWF0dXJlQ291bnQgPSBtZXJnZVNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCAhPT0gdW5kZWZpbmVkID8gbWVyZ2VTb3VyY2UudG90YWxGZWF0dXJlQ291bnQgKyBtZXJnZVNvdXJjZS5mZWF0dXJlcy5sZW5ndGggOiBtZXJnZVNvdXJjZS5mZWF0dXJlcy5sZW5ndGg7XG4gICAgbWVyZ2VTb3VyY2UuZmVhdHVyZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChzb3VyY2UudG90YWxGZWF0dXJlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgIG1lcmdlU291cmNlLnRvdGFsRmVhdHVyZUNvdW50ID0gbWVyZ2VTb3VyY2UudG90YWxGZWF0dXJlQ291bnQgIT09IHVuZGVmaW5lZCA/IG1lcmdlU291cmNlLnRvdGFsRmVhdHVyZUNvdW50ICsgc291cmNlLnRvdGFsRmVhdHVyZUNvdW50IDogc291cmNlLnRvdGFsRmVhdHVyZUNvdW50O1xuICB9XG5cbiAgcmV0dXJuIG1lcmdlU291cmNlO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuY29sbGVjdERhdGFfID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICB2YXIgZmVhdHVyZXMgPSBzb3VyY2UuZmVhdHVyZXM7XG4gIHZhciBhbGxQcm9wZXJ0aWVzID0gW107XG4gIHZhciBmZWF0dXJlR2VvbWV0cmllc05hbWVzID0gW107XG4gIHZhciBmZWF0dXJlc0ZvclNvdXJjZSA9IHt9O1xuICB2YXIgcHJvcGVydGllcywgZmVhdHVyZUdlb21ldHJ5TmFtZTtcbiAgZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIHByb3BlcnRpZXMgPSBmZWF0dXJlLmdldFByb3BlcnRpZXMoKTtcblxuICAgIGlmIChwcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZlYXR1cmVHZW9tZXRyeU5hbWUgPSBmZWF0dXJlLmdldEdlb21ldHJ5TmFtZSgpO1xuXG4gICAgICBpZiAoIWZlYXR1cmVHZW9tZXRyaWVzTmFtZXMuaW5jbHVkZXMoZmVhdHVyZUdlb21ldHJ5TmFtZSkpIHtcbiAgICAgICAgZmVhdHVyZUdlb21ldHJpZXNOYW1lcy5wdXNoKGZlYXR1cmVHZW9tZXRyeU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBhbGxQcm9wZXJ0aWVzLnB1c2gocHJvcGVydGllcyk7XG4gICAgICBmZWF0dXJlc0ZvclNvdXJjZVtnZXRSb3dVaWQocHJvcGVydGllcyldID0gZmVhdHVyZTtcbiAgICB9XG4gIH0pO1xuICB0aGlzLmNsZWFuUHJvcGVydGllc18oYWxsUHJvcGVydGllcywgZmVhdHVyZUdlb21ldHJpZXNOYW1lcyk7XG5cbiAgaWYgKGFsbFByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgIHZhciBncmlkQ3JlYXRlZCA9IHRoaXMubWFrZUdyaWRfKGFsbFByb3BlcnRpZXMsIHNvdXJjZSk7XG5cbiAgICBpZiAoZ3JpZENyZWF0ZWQpIHtcbiAgICAgIHRoaXMuZmVhdHVyZXNGb3JTb3VyY2VzX1tcIlwiICsgc291cmNlLmxhYmVsXSA9IGZlYXR1cmVzRm9yU291cmNlO1xuICAgIH1cbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuY2xlYW5Qcm9wZXJ0aWVzXyA9IGZ1bmN0aW9uIChhbGxQcm9wZXJ0aWVzLCBmZWF0dXJlR2VvbWV0cmllc05hbWVzKSB7XG4gIGFsbFByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIGZlYXR1cmVHZW9tZXRyaWVzTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZUdlb21ldHJ5TmFtZSkge1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbZmVhdHVyZUdlb21ldHJ5TmFtZV07XG4gICAgfSk7XG4gICAgZGVsZXRlIHByb3BlcnRpZXMuYm91bmRlZEJ5O1xuICAgIGRlbGV0ZSBwcm9wZXJ0aWVzLm5nZW9fZmVhdHVyZV90eXBlXztcbiAgfSk7XG5cbiAgaWYgKHRoaXMucmVtb3ZlRW1wdHlDb2x1bW5zXyA9PT0gdHJ1ZSkge1xuICAgIHRoaXMucmVtb3ZlRW1wdHlDb2x1bW5zRm5fKGFsbFByb3BlcnRpZXMpO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVFbXB0eUNvbHVtbnNGbl8gPSBmdW5jdGlvbiAoYWxsUHJvcGVydGllcykge1xuICB2YXIga2V5c1RvS2VlcCA9IFtdO1xuICB2YXIgaSwga2V5O1xuXG4gIGZvciAoa2V5IGluIGFsbFByb3BlcnRpZXNbMF0pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYWxsUHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbFByb3BlcnRpZXNbaV1ba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtleXNUb0tlZXAucHVzaChrZXkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIga2V5VG9SZW1vdmU7XG4gIGFsbFByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIGtleVRvUmVtb3ZlID0gW107XG5cbiAgICBmb3IgKGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIWtleXNUb0tlZXAuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBrZXlUb1JlbW92ZS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2V5VG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1trZXldO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLm1ha2VHcmlkXyA9IGZ1bmN0aW9uIChkYXRhLCBzb3VyY2UpIHtcbiAgdmFyIHNvdXJjZUxhYmVsID0gXCJcIiArIHNvdXJjZS5sYWJlbDtcbiAgdmFyIGdyaWRDb25maWcgPSBudWxsO1xuXG4gIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgZ3JpZENvbmZpZyA9IHRoaXMuZ2V0R3JpZENvbmZpZ3VyYXRpb25fKGRhdGEpO1xuXG4gICAgaWYgKGdyaWRDb25maWcgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXRoaXMubG9hZGVkR3JpZFNvdXJjZXMuaW5jbHVkZXMoc291cmNlTGFiZWwpKSB7XG4gICAgdGhpcy5sb2FkZWRHcmlkU291cmNlcy5wdXNoKHNvdXJjZUxhYmVsKTtcbiAgfVxuXG4gIHRoaXMuZ3JpZFNvdXJjZXNbc291cmNlTGFiZWxdID0ge1xuICAgIHNvdXJjZTogc291cmNlXG4gIH07XG5cbiAgaWYgKGdyaWRDb25maWcpIHtcbiAgICB0aGlzLmdyaWRTb3VyY2VzW3NvdXJjZUxhYmVsXS5jb25maWd1cmF0aW9uID0gZ3JpZENvbmZpZztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0R3JpZENvbmZpZ3VyYXRpb25fID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBkYXRhJyk7XG4gIH1cblxuICB2YXIgY2xvbmUgPSB7fTtcbiAgT2JqZWN0LmFzc2lnbihjbG9uZSwgZGF0YVswXSk7XG4gIGRlbGV0ZSBjbG9uZS5vbF91aWQ7XG4gIHZhciBjb2x1bW5zID0gT2JqZWN0LmtleXMoY2xvbmUpO1xuICB2YXIgY29sdW1uRGVmcyA9IFtdO1xuICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgIGNvbHVtbkRlZnMucHVzaCh7XG4gICAgICBuYW1lOiBjb2x1bW5cbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKGNvbHVtbkRlZnMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBuZXcgbmdlb0dyaWRDb25maWcoZGF0YSwgY29sdW1uRGVmcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgdGhpcy5ncmlkU291cmNlcyA9IHt9O1xuICB0aGlzLmxvYWRlZEdyaWRTb3VyY2VzID0gW107XG4gIHRoaXMuc2VsZWN0ZWRUYWIgPSBudWxsO1xuICB0aGlzLnRvb01hbnlSZXN1bHRzID0gZmFsc2U7XG4gIHRoaXMuZmVhdHVyZXNfLmNsZWFyKCk7XG4gIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZXNfLmNsZWFyKCk7XG4gIHRoaXMubmdlb01hcFF1ZXJlbnRfLmNsZWFyKCk7XG4gIHRoaXMuZmVhdHVyZXNGb3JTb3VyY2VzXyA9IHt9O1xuXG4gIGlmICh0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXykge1xuICAgIHRoaXMudW5yZWdpc3RlclNlbGVjdFdhdGNoZXJfKCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnNlbGVjdFRhYiA9IGZ1bmN0aW9uIChncmlkU291cmNlKSB7XG4gIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gIHZhciBzb3VyY2UgPSBncmlkU291cmNlLnNvdXJjZTtcbiAgdGhpcy5zZWxlY3RlZFRhYiA9IHNvdXJjZS5sYWJlbDtcblxuICBpZiAodGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8pIHtcbiAgICB0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXygpO1xuICAgIHRoaXMudW5yZWdpc3RlclNlbGVjdFdhdGNoZXJfID0gbnVsbDtcbiAgfVxuXG4gIGlmIChncmlkU291cmNlLmNvbmZpZ3VyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMudW5yZWdpc3RlclNlbGVjdFdhdGNoZXJfID0gdGhpcy4kc2NvcGVfLiR3YXRjaENvbGxlY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdyaWRTb3VyY2UuY29uZmlndXJhdGlvbi5zZWxlY3RlZFJvd3M7XG4gICAgfSwgZnVuY3Rpb24gKG5ld1NlbGVjdGVkLCBvbGRTZWxlY3RlZFJvd3MpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdTZWxlY3RlZCkgIT09IE9iamVjdC5rZXlzKG9sZFNlbGVjdGVkUm93cykpIHtcbiAgICAgICAgX3RoaXM1Lm9uU2VsZWN0aW9uQ2hhbmdlZF8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlRmVhdHVyZXNfKGdyaWRTb3VyY2UpO1xuICB0aGlzLnJlZmxvd0dyaWRfKCk7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5yZWZsb3dHcmlkXyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gdGhpcy5lc2NhcGVWYWx1ZSh0aGlzLnNlbGVjdGVkVGFiIHx8ICcnKTtcbiAgdmFyIGFjdGl2ZVBhbmUgPSB0aGlzLiRlbGVtZW50Xy5maW5kKFwiZGl2LnRhYi1wYW5lI1wiICsgaWQpO1xuICBhY3RpdmVQYW5lLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIHRoaXMuJHRpbWVvdXRfKGZ1bmN0aW9uICgpIHtcbiAgICBhY3RpdmVQYW5lLmZpbmQoJ2Rpdi5uZ2VvLWdyaWQtdGFibGUtY29udGFpbmVyIHRhYmxlJykudHJpZ2dlcigncmVmbG93Jyk7XG4gIH0pO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUub25TZWxlY3Rpb25DaGFuZ2VkXyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZ3JpZFNvdXJjZSA9IHRoaXMuZ3JpZFNvdXJjZXNbXCJcIiArIHRoaXMuc2VsZWN0ZWRUYWJdO1xuICB0aGlzLnVwZGF0ZUZlYXR1cmVzXyhncmlkU291cmNlKTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZUZlYXR1cmVzXyA9IGZ1bmN0aW9uIChncmlkU291cmNlKSB7XG4gIHRoaXMuZmVhdHVyZXNfLmNsZWFyKCk7XG4gIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZXNfLmNsZWFyKCk7XG5cbiAgaWYgKCFncmlkU291cmNlLmNvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc291cmNlTGFiZWwgPSBcIlwiICsgZ3JpZFNvdXJjZS5zb3VyY2UubGFiZWw7XG4gIHZhciBmZWF0dXJlc0ZvclNvdXJjZSA9IHRoaXMuZmVhdHVyZXNGb3JTb3VyY2VzX1tzb3VyY2VMYWJlbF07XG4gIHZhciBzZWxlY3RlZFJvd3MgPSBncmlkU291cmNlLmNvbmZpZ3VyYXRpb24uc2VsZWN0ZWRSb3dzO1xuXG4gIGZvciAodmFyIHJvd0lkIGluIGZlYXR1cmVzRm9yU291cmNlKSB7XG4gICAgdmFyIGZlYXR1cmUgPSBmZWF0dXJlc0ZvclNvdXJjZVtyb3dJZF07XG5cbiAgICBpZiAocm93SWQgaW4gc2VsZWN0ZWRSb3dzKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodEZlYXR1cmVzXy5wdXNoKGZlYXR1cmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZlYXR1cmVzXy5wdXNoKGZlYXR1cmUpO1xuICAgIH1cbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0QWN0aXZlR3JpZFNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5ncmlkU291cmNlc1tcIlwiICsgdGhpcy5zZWxlY3RlZFRhYl07XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmlzT25lU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlID09PSBudWxsIHx8IHNvdXJjZS5jb25maWd1cmF0aW9uID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb3VyY2UuY29uZmlndXJhdGlvbi5nZXRTZWxlY3RlZENvdW50KCkgPiAwO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRTZWxlY3RlZFJvd0NvdW50ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSA9PT0gbnVsbCB8fCBzb3VyY2UuY29uZmlndXJhdGlvbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb3VyY2UuY29uZmlndXJhdGlvbi5nZXRTZWxlY3RlZENvdW50KCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnNlbGVjdEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICBzb3VyY2UuY29uZmlndXJhdGlvbi5zZWxlY3RBbGwoKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUudW5zZWxlY3RBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgc291cmNlLmNvbmZpZ3VyYXRpb24udW5zZWxlY3RBbGwoKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuaW52ZXJ0U2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuICAgIHNvdXJjZS5jb25maWd1cmF0aW9uLmludmVydFNlbGVjdGlvbigpO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS56b29tVG9TZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5tYXBfKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG1hcCcpO1xuICB9XG5cbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICB2YXIgZXh0ZW50ID0gb2xFeHRlbnQuY3JlYXRlRW1wdHkoKTtcbiAgICB0aGlzLmhpZ2hsaWdodEZlYXR1cmVzXy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICB2YXIgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGdlb21ldHJ5Jyk7XG4gICAgICB9XG5cbiAgICAgIG9sRXh0ZW50LmV4dGVuZChleHRlbnQsIGdlb21ldHJ5LmdldEV4dGVudCgpKTtcbiAgICB9KTtcbiAgICB2YXIgc2l6ZSA9IHRoaXMubWFwXy5nZXRTaXplKCk7XG5cbiAgICBpZiAoIXNpemUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBzaXplJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF4UmVjZW50ZXJab29tID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbWF4UmVjZW50ZXJab29tJyk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXBfLmdldFZpZXcoKS5maXQoZXh0ZW50LCB7XG4gICAgICBzaXplOiBzaXplLFxuICAgICAgbWF4Wm9vbTogdGhpcy5tYXhSZWNlbnRlclpvb21cbiAgICB9KTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZG93bmxvYWRDc3YgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgdmFyIGNvbHVtbkRlZnMgPSBzb3VyY2UuY29uZmlndXJhdGlvbi5jb2x1bW5EZWZzO1xuXG4gICAgaWYgKCFjb2x1bW5EZWZzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY29sdW1uRGVmcycpO1xuICAgIH1cblxuICAgIHZhciBzZWxlY3RlZFJvd3MgPSBzb3VyY2UuY29uZmlndXJhdGlvbi5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICB0aGlzLm5nZW9Dc3ZEb3dubG9hZF8uc3RhcnREb3dubG9hZChzZWxlY3RlZFJvd3MsIGNvbHVtbkRlZnMsIHRoaXMuZmlsZW5hbWVfKTtcbiAgfVxufTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ0dtZkRpc3BsYXlxdWVyeWdyaWRDb250cm9sbGVyJywgUXVlcnlHcmlkQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=