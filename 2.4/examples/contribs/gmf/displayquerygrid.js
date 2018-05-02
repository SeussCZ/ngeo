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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _displayquerygrid_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayquerygrid.css */ "./contribs/gmf/examples/displayquerygrid.css");
/* harmony import */ var _displayquerygrid_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_displayquerygrid_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gmf_datasource_Manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/datasource/Manager.js */ "./contribs/gmf/src/datasource/Manager.js");
/* harmony import */ var gmf_layertree_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/layertree/component.js */ "./contribs/gmf/src/layertree/component.js");
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var gmf_query_gridComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gmf/query/gridComponent.js */ "./contribs/gmf/src/query/gridComponent.js");
/* harmony import */ var gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gmf/theme/Themes.js */ "./contribs/gmf/src/theme/Themes.js");
/* harmony import */ var ngeo_grid_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/grid/module.js */ "./src/grid/module.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/misc/btnComponent.js */ "./src/misc/btnComponent.js");
/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ "./node_modules/@geoblocks/proj/src/EPSG_21781.js");
/* harmony import */ var ngeo_query_bboxQueryComponent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/query/bboxQueryComponent.js */ "./src/query/bboxQueryComponent.js");
/* harmony import */ var ngeo_query_mapQueryComponent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/query/mapQueryComponent.js */ "./src/query/mapQueryComponent.js");
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






















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_datasource_Manager_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, gmf_layertree_component_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_map_component_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, gmf_query_gridComponent_js__WEBPACK_IMPORTED_MODULE_6__["default"].name, gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_grid_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_9__["default"].name, ngeo_misc_btnComponent_js__WEBPACK_IMPORTED_MODULE_10__["default"].name, ngeo_query_bboxQueryComponent_js__WEBPACK_IMPORTED_MODULE_12__["default"].name, ngeo_query_mapQueryComponent_js__WEBPACK_IMPORTED_MODULE_13__["default"].name]);
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
      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_11__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [537635, 152640],
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
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
  var templateUrl = $attrs['gmfDisplayquerygridTemplateurl'];
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
  this.maxRecenterZoom;
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
}

QueryGridController.prototype.$onInit = function () {
  this.removeEmptyColumns_ = this['removeEmptyColumnsFn'] ? this['removeEmptyColumnsFn']() === true : false;
  this.maxRecenterZoom = this['maxRecenterZoomFn'] ? this['maxRecenterZoomFn']() : undefined;
  var featuresOverlay = this.ngeoFeatureOverlayMgr_.getFeatureOverlay();
  featuresOverlay.setFeatures(this.features_);
  var featuresStyle = this['featuresStyleFn']();

  if (featuresStyle !== undefined) {
    console.assert(featuresStyle instanceof ol_style_Style_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
    featuresOverlay.setStyle(featuresStyle);
  }

  var highlightFeaturesOverlay = this.ngeoFeatureOverlayMgr_.getFeatureOverlay();
  highlightFeaturesOverlay.setFeatures(this.highlightFeatures_);
  var highlightFeatureStyle = this['selectedFeatureStyleFn']();

  if (highlightFeatureStyle !== undefined) {
    console.assert(highlightFeatureStyle instanceof ol_style_Style_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
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
  var mapFn = this['getMapFn'];

  if (mapFn) {
    var map = mapFn();
    console.assert(map instanceof ol_Map_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
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
      tooManyResults: false,
      totalFeatureCount: undefined
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

      if (featureGeometriesNames.indexOf(featureGeometryName) === -1) {
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
    delete properties['boundedBy'];
    delete properties['ngeo_feature_type_'];
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
      if (keysToKeep.indexOf(key) === -1) {
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

  if (this.loadedGridSources.indexOf(sourceLabel) == -1) {
    this.loadedGridSources.push(sourceLabel);
  }

  this.gridSources[sourceLabel] = {
    configuration: gridConfig,
    source: source
  };
  return true;
};

QueryGridController.prototype.getGridConfiguration_ = function (data) {
  console.assert(data.length > 0);
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

  if (gridSource.configuration !== null) {
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
    activePane.find('div.ngeo-grid-table-container table')['trigger']('reflow');
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

  if (gridSource.configuration === null) {
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
  var source = this.getActiveGridSource();

  if (source !== null) {
    var extent = ol_extent_js__WEBPACK_IMPORTED_MODULE_8__["createEmpty"]();
    this.highlightFeatures_.forEach(function (feature) {
      ol_extent_js__WEBPACK_IMPORTED_MODULE_8__["extend"](extent, feature.getGeometry().getExtent());
    });
    var size = this.map_.getSize();
    console.assert(size !== undefined);
    var maxZoom = this.maxRecenterZoom;
    this.map_.getView().fit(extent, {
      size: size,
      maxZoom: maxZoom
    });
  }
};

QueryGridController.prototype.downloadCsv = function () {
  var source = this.getActiveGridSource();

  if (source !== null) {
    var columnDefs = source.configuration.columnDefs;
    console.assert(columnDefs !== undefined);
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheXF1ZXJ5Z3JpZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvZXhhbXBsZXMvZGlzcGxheXF1ZXJ5Z3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvc3JjL3F1ZXJ5L2dyaWRDb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvc3JjL3F1ZXJ5L2dyaWRDb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJkaXNwbGF5cXVlcnlncmlkXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzQsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcImdtZlRoZW1lc1wiLCBcImdtZkRhdGFTb3VyY2VzTWFuYWdlclwiLCBcIm5nZW9GZWF0dXJlT3ZlcmxheU1nclwiXTtcblF1ZXJ5cmVzdWx0Q29udHJvbGxlci4kaW5qZWN0ID0gW1wibmdlb1F1ZXJ5UmVzdWx0XCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgYXBwVVJMIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCAnLi9kaXNwbGF5cXVlcnlncmlkLmNzcyc7XG5pbXBvcnQgZ21mRGF0YXNvdXJjZU1hbmFnZXIgZnJvbSAnZ21mL2RhdGFzb3VyY2UvTWFuYWdlci5qcyc7XG5pbXBvcnQgZ21mTGF5ZXJ0cmVlQ29tcG9uZW50IGZyb20gJ2dtZi9sYXllcnRyZWUvY29tcG9uZW50LmpzJztcbmltcG9ydCBnbWZNYXBDb21wb25lbnQgZnJvbSAnZ21mL21hcC9jb21wb25lbnQuanMnO1xuaW1wb3J0IGdtZlF1ZXJ5R3JpZENvbXBvbmVudCBmcm9tICdnbWYvcXVlcnkvZ3JpZENvbXBvbmVudC5qcyc7XG5pbXBvcnQgZ21mVGhlbWVUaGVtZXMgZnJvbSAnZ21mL3RoZW1lL1RoZW1lcy5qcyc7XG5pbXBvcnQgbmdlb0dyaWRNb2R1bGUgZnJvbSAnbmdlby9ncmlkL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUuanMnO1xuaW1wb3J0IG5nZW9NaXNjQnRuQ29tcG9uZW50IGZyb20gJ25nZW8vbWlzYy9idG5Db21wb25lbnQuanMnO1xuaW1wb3J0IEVQU0cyMTc4MSBmcm9tICdAZ2VvYmxvY2tzL3Byb2ovc3JjL0VQU0dfMjE3ODEuanMnO1xuaW1wb3J0IG5nZW9RdWVyeUJib3hRdWVyeUNvbXBvbmVudCBmcm9tICduZ2VvL3F1ZXJ5L2Jib3hRdWVyeUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgbmdlb1F1ZXJ5TWFwUXVlcnlDb21wb25lbnQgZnJvbSAnbmdlby9xdWVyeS9tYXBRdWVyeUNvbXBvbmVudC5qcyc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG5pbXBvcnQgb2xTdHlsZUNpcmNsZSBmcm9tICdvbC9zdHlsZS9DaXJjbGUuanMnO1xuaW1wb3J0IG9sU3R5bGVGaWxsIGZyb20gJ29sL3N0eWxlL0ZpbGwuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdnbWZhcHAnLCBbJ2dldHRleHQnLCBnbWZEYXRhc291cmNlTWFuYWdlci5uYW1lLCBnbWZMYXllcnRyZWVDb21wb25lbnQubmFtZSwgZ21mTWFwQ29tcG9uZW50Lm5hbWUsIGdtZlF1ZXJ5R3JpZENvbXBvbmVudC5uYW1lLCBnbWZUaGVtZVRoZW1lcy5uYW1lLCBuZ2VvR3JpZE1vZHVsZS5uYW1lLCBuZ2VvTWFwTW9kdWxlLm5hbWUsIG5nZW9NaXNjQnRuQ29tcG9uZW50Lm5hbWUsIG5nZW9RdWVyeUJib3hRdWVyeUNvbXBvbmVudC5uYW1lLCBuZ2VvUXVlcnlNYXBRdWVyeUNvbXBvbmVudC5uYW1lXSk7XG5tb2R1bGUuY29uc3RhbnQoJ25nZW9RdWVyeU9wdGlvbnMnLCB7XG4gICdsaW1pdCc6IDIwLFxuICAncXVlcnlDb3VudEZpcnN0JzogdHJ1ZVxufSk7XG5tb2R1bGUuY29uc3RhbnQoJ2dtZlRyZWVVcmwnLCBhcHBVUkwuR01GX1RIRU1FUyk7XG5tb2R1bGUuY29uc3RhbnQoJ2RlZmF1bHRUaGVtZScsICdEZW1vJyk7XG5tb2R1bGUuY29uc3RhbnQoJ2FuZ3VsYXJMb2NhbGVTY3JpcHQnLCAnLi4vYnVpbGQvYW5ndWxhci1sb2NhbGVfe3tsb2NhbGV9fS5qcycpO1xudmFyIHF1ZXJ5cmVzdWx0Q29tcG9uZW50ID0ge1xuICBjb250cm9sbGVyOiAnZ21mYXBwUXVlcnlyZXN1bHRDb250cm9sbGVyJyxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcGFydGlhbHMvcXVlcnlyZXN1bHQuaHRtbCcpXG59O1xubW9kdWxlLmNvbXBvbmVudCgnZ21mYXBwUXVlcnlyZXN1bHQnLCBxdWVyeXJlc3VsdENvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIFF1ZXJ5cmVzdWx0Q29udHJvbGxlcihuZ2VvUXVlcnlSZXN1bHQpIHtcbiAgdGhpcy5yZXN1bHQgPSBuZ2VvUXVlcnlSZXN1bHQ7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdnbWZhcHBRdWVyeXJlc3VsdENvbnRyb2xsZXInLCBRdWVyeXJlc3VsdENvbnRyb2xsZXIpO1xuXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcihnbWZUaGVtZXMsIGdtZkRhdGFTb3VyY2VzTWFuYWdlciwgbmdlb0ZlYXR1cmVPdmVybGF5TWdyKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgZ21mVGhlbWVzLmxvYWRUaGVtZXMoKTtcbiAgdmFyIGZpbGwgPSBuZXcgb2xTdHlsZUZpbGwoe1xuICAgIGNvbG9yOiBbMjU1LCAxNzAsIDAsIDAuNl1cbiAgfSk7XG4gIHZhciBzdHJva2UgPSBuZXcgb2xTdHlsZVN0cm9rZSh7XG4gICAgY29sb3I6IFsyNTUsIDE3MCwgMCwgMV0sXG4gICAgd2lkdGg6IDJcbiAgfSk7XG4gIHRoaXMuZmVhdHVyZVN0eWxlID0gbmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgZmlsbDogZmlsbCxcbiAgICBpbWFnZTogbmV3IG9sU3R5bGVDaXJjbGUoe1xuICAgICAgZmlsbDogZmlsbCxcbiAgICAgIHJhZGl1czogNSxcbiAgICAgIHN0cm9rZTogc3Ryb2tlXG4gICAgfSksXG4gICAgc3Ryb2tlOiBzdHJva2VcbiAgfSk7XG4gIHRoaXMubWFwID0gbmV3IG9sTWFwKHtcbiAgICBsYXllcnM6IFtuZXcgb2xMYXllclRpbGUoe1xuICAgICAgc291cmNlOiBuZXcgb2xTb3VyY2VPU00oKVxuICAgIH0pXSxcbiAgICB2aWV3OiBuZXcgb2xWaWV3KHtcbiAgICAgIHByb2plY3Rpb246IEVQU0cyMTc4MSxcbiAgICAgIHJlc29sdXRpb25zOiBbMjAwLCAxMDAsIDUwLCAyMCwgMTAsIDUsIDIuNSwgMiwgMSwgMC41XSxcbiAgICAgIGNlbnRlcjogWzUzNzYzNSwgMTUyNjQwXSxcbiAgICAgIHpvb206IDNcbiAgICB9KVxuICB9KTtcbiAgZ21mRGF0YVNvdXJjZXNNYW5hZ2VyLnNldERhdGFzb3VyY2VNYXAodGhpcy5tYXApO1xuICB0aGlzLnRoZW1lcyA9IHVuZGVmaW5lZDtcbiAgdGhpcy50cmVlU291cmNlID0gdW5kZWZpbmVkO1xuICB0aGlzLnF1ZXJ5QWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5xdWVyeUdyaWRBY3RpdmUgPSB0cnVlO1xuICBnbWZUaGVtZXMuZ2V0VGhlbWVzT2JqZWN0KCkudGhlbihmdW5jdGlvbiAodGhlbWVzKSB7XG4gICAgaWYgKHRoZW1lcykge1xuICAgICAgX3RoaXMudGhlbWVzID0gdGhlbWVzO1xuICAgICAgX3RoaXMudHJlZVNvdXJjZSA9IHRoZW1lc1szXTtcbiAgICB9XG4gIH0pO1xuICBuZ2VvRmVhdHVyZU92ZXJsYXlNZ3IuaW5pdCh0aGlzLm1hcCk7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwiZ21mLWRpc3BsYXlxdWVyeWdyaWQgcGFuZWxcIiBuZy1zaG93PVwiY3RybC5hY3RpdmVcIj5cXG4gIDxkaXZcXG4gICAgY2xhc3M9XCJjbG9zZVwiXFxuICAgIG5nLWNsaWNrPVwiY3RybC5jbGVhcigpXCI+XFxuICAgICZ0aW1lcztcXG4gIDwvZGl2PlxcblxcbiAgPHVsXFxuICAgIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiXFxuICAgIHJvbGU9XCJ0YWJsaXN0XCI+XFxuXFxuICAgIDxsaVxcbiAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxcbiAgICAgIG5nLXJlcGVhdD1cImdyaWRTb3VyY2UgaW4gY3RybC5nZXRHcmlkU291cmNlcygpIHRyYWNrIGJ5IGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsXCJcXG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcXG4gICAgICBuZy1jbGljaz1cImN0cmwuc2VsZWN0VGFiKGdyaWRTb3VyY2UpXCI+XFxuXFxuICAgICAgPGFcXG4gICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIlxcbiAgICAgICAgaHJlZj1cIiN7e2N0cmwuZXNjYXBlVmFsdWUoZ3JpZFNvdXJjZS5zb3VyY2UubGFiZWwpfX1cIlxcbiAgICAgICAgbmctY2xhc3M9XCJ7XFwnYWN0aXZlXFwnIDogY3RybC5pc1NlbGVjdGVkKGdyaWRTb3VyY2UpfVwiXFxuICAgICAgICBkYXRhLXRhcmdldD1cIiN7e2N0cmwuZXNjYXBlVmFsdWUoZ3JpZFNvdXJjZS5zb3VyY2UubGFiZWwpfX1cIlxcbiAgICAgICAgYXJpYS1jb250cm9scz1cInt7Y3RybC5lc2NhcGVWYWx1ZShncmlkU291cmNlLnNvdXJjZS5sYWJlbCl9fVwiXFxuICAgICAgICByb2xlPVwidGFiXCJcXG4gICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCI+XFxuXFxuICAgICAgICA8c3BhbiBuZy1pZj1cImdyaWRTb3VyY2Uuc291cmNlLnRvb01hbnlSZXN1bHRzICE9PSB0cnVlXCI+XFxuICAgICAgICAgIHt7Z3JpZFNvdXJjZS5zb3VyY2UubGFiZWwgfCB0cmFuc2xhdGV9fSAoe3tncmlkU291cmNlLnNvdXJjZS5mZWF0dXJlcy5sZW5ndGh9fSlcXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIG5nLWlmPVwiZ3JpZFNvdXJjZS5zb3VyY2UudG9vTWFueVJlc3VsdHMgPT09IHRydWVcIj5cXG4gICAgICAgICAge3tncmlkU291cmNlLnNvdXJjZS5sYWJlbCB8IHRyYW5zbGF0ZX19ICh7e2dyaWRTb3VyY2Uuc291cmNlLnRvdGFsRmVhdHVyZUNvdW50fX0qKVxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIDwvYT5cXG4gICAgPC9saT5cXG4gIDwvdWw+XFxuXFxuICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cXG4gICAgPGRpdlxcbiAgICAgIG5nLXJlcGVhdD1cImdyaWRTb3VyY2UgaW4gY3RybC5nZXRHcmlkU291cmNlcygpIHRyYWNrIGJ5IGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsXCJcXG4gICAgICByb2xlPVwidGFicGFuZWxcIlxcbiAgICAgIGNsYXNzPVwidGFiLXBhbmVcIlxcbiAgICAgIG5nLWNsYXNzPVwie1xcJ2FjdGl2ZVxcJyA6IGN0cmwuaXNTZWxlY3RlZChncmlkU291cmNlKX1cIlxcbiAgICAgIGlkPVwie3tjdHJsLmVzY2FwZVZhbHVlKGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsKX19XCI+XFxuXFxuICAgICAgPG5nZW8tZ3JpZFxcbiAgICAgICAgbmdlby1ncmlkLWNvbmZpZ3VyYXRpb249XCJncmlkU291cmNlLmNvbmZpZ3VyYXRpb25cIlxcbiAgICAgICAgbmctaWY9XCJncmlkU291cmNlLnNvdXJjZS50b29NYW55UmVzdWx0cyAhPT0gdHJ1ZVwiPlxcbiAgICAgIDwvbmdlby1ncmlkPlxcblxcbiAgICAgIDxkaXYgbmctaWY9XCJncmlkU291cmNlLnNvdXJjZS50b29NYW55UmVzdWx0cyA9PT0gdHJ1ZVwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImdtZi1kaXNwbGF5cXVlcnlncmlkLW1lc3NhZ2UgYWxlcnQgYWxlcnQtd2FybmluZ1wiPlxcbiAgICAgICAgICA8cD48c3BhbiB0cmFuc2xhdGU+VGhlIHJlc3VsdHMgY2FuIG5vdCBiZSBkaXNwbGF5ZWQgYmVjYXVzZSB0aGUgbWF4aW11bSBudW1iZXIgaGFzIGJlZW4gcmVhY2hlZDwvc3Bhbj4gKHt7Z3JpZFNvdXJjZS5zb3VyY2UubGltaXR9fSkuPC9wPlxcbiAgICAgICAgICA8cCB0cmFuc2xhdGU+UGxlYXNlIHJlZmluZSB5b3VyIHF1ZXJ5LjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBuZy1zaG93PVwiIWN0cmwucGVuZGluZyAmJiBjdHJsLmdldEFjdGl2ZUdyaWRTb3VyY2UoKSAmJiBjdHJsLmdldEFjdGl2ZUdyaWRTb3VyY2UoKS5jb25maWd1cmF0aW9uICE9PSBudWxsXCI+XFxuXFxuICAgIDx1bCBjbGFzcz1cIm5hdiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XFxuXFxuICAgICAgPGxpXFxuICAgICAgICBjbGFzcz1cIm5nLWhpZGVcIlxcbiAgICAgICAgbmctc2hvdz1cImN0cmwuaXNPbmVTZWxlY3RlZCgpXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi1zbSBuZy1iaW5kaW5nXCI+XFxuICAgICAgICAgIHt7Y3RybC5nZXRTZWxlY3RlZFJvd0NvdW50KCl9fSA8c3BhbiB0cmFuc2xhdGU+c2VsZWN0ZWQgZWxlbWVudChzKTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbGk+XFxuXFxuICAgICAgPGxpXFxuICAgICAgICBuZy1zaG93PVwiY3RybC5pc09uZVNlbGVjdGVkKClcIlxcbiAgICAgICAgY2xhc3M9XCJuZy1oaWRlXCI+XFxuICAgICAgICA8YnV0dG9uXFxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiXFxuICAgICAgICAgIHRpdGxlPVwie3tcXCdab29tIHRvIHNlbGVjdGlvblxcJyB8IHRyYW5zbGF0ZX19XCJcXG4gICAgICAgICAgbmctY2xpY2s9XCJjdHJsLnpvb21Ub1NlbGVjdGlvbigpXCI+XFxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L2k+IDxzcGFuIHRyYW5zbGF0ZT5ab29tIHRvPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9saT5cXG5cXG4gICAgICA8bGlcXG4gICAgICAgIG5nLXNob3c9XCJjdHJsLmlzT25lU2VsZWN0ZWQoKVwiXFxuICAgICAgICBjbGFzcz1cIm5nLWhpZGVcIj5cXG4gICAgICAgIDxidXR0b25cXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCJcXG4gICAgICAgICAgdGl0bGU9XCJ7e1xcJ0V4cG9ydCBzZWxlY3Rpb24gYXMgQ1NWXFwnIHwgdHJhbnNsYXRlfX1cIlxcbiAgICAgICAgICBuZy1jbGljaz1cImN0cmwuZG93bmxvYWRDc3YoKVwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCI+PC9pPiA8c3BhbiB0cmFuc2xhdGU+RXhwb3J0IGFzIENTVjwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvbGk+XFxuXFxuICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cXG4gICAgICAgIDxidXR0b25cXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXFxuICAgICAgICAgIGNsYXNzPVwiZHJvcHVwIGJ0biBidG4tZGVmYXVsdCBidG4tc20gZHJvcGRvd24tdG9nZ2xlXCJcXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXFxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XFxuICAgICAgICAgIDxzcGFuIHRyYW5zbGF0ZT5TZWxlY3Q8L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDx1bFxcbiAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkTGFiZWxcIj5cXG4gICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgIDxhXFxuICAgICAgICAgICAgICBocmVmPVwiXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiY3RybC5zZWxlY3RBbGwoKVwiIHRyYW5zbGF0ZT5BbGw8L2E+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICA8YVxcbiAgICAgICAgICAgICAgaHJlZj1cIlwiXFxuICAgICAgICAgICAgICBuZy1jbGljaz1cImN0cmwudW5zZWxlY3RBbGwoKVwiIHRyYW5zbGF0ZT5Ob25lPC9hPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgPGFcXG4gICAgICAgICAgICAgIGhyZWY9XCJcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCJjdHJsLmludmVydFNlbGVjdGlvbigpXCIgdHJhbnNsYXRlPlJldmVyc2Ugc2VsZWN0aW9uPC9hPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2XFxuICAgIG5nLXNob3c9XCJjdHJsLnBlbmRpbmdcIlxcbiAgICBjbGFzcz1cImdtZi1kaXNwbGF5cXVlcnlncmlkLXBlbmRpbmdcIj5cXG4gICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIj48L3NwYW4+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nO1xuXG59XG5yZXR1cm4gX19wXG59IiwiUXVlcnlHcmlkQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJGluamVjdG9yXCIsIFwiJHNjb3BlXCIsIFwibmdlb1F1ZXJ5UmVzdWx0XCIsIFwibmdlb01hcFF1ZXJlbnRcIiwgXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIiwgXCIkdGltZW91dFwiLCBcIm5nZW9Dc3ZEb3dubG9hZFwiLCBcIiRlbGVtZW50XCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgbmdlb0Rvd25sb2FkQ3N2IGZyb20gJ25nZW8vZG93bmxvYWQvQ3N2LmpzJztcbmltcG9ydCBuZ2VvRG93bmxvYWRTZXJ2aWNlIGZyb20gJ25nZW8vZG93bmxvYWQvc2VydmljZS5qcyc7XG5pbXBvcnQgbmdlb0dyaWRDb21wb25lbnQgZnJvbSAnbmdlby9ncmlkL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgbmdlb0dyaWRDb25maWcsIHsgZ2V0Um93VWlkIH0gZnJvbSAnbmdlby9ncmlkL0NvbmZpZy5qcyc7XG5pbXBvcnQgbmdlb01hcEZlYXR1cmVPdmVybGF5TWdyIGZyb20gJ25nZW8vbWFwL0ZlYXR1cmVPdmVybGF5TWdyLmpzJztcbmltcG9ydCBuZ2VvUXVlcnlNYXBRdWVyZW50IGZyb20gJ25nZW8vcXVlcnkvTWFwUXVlcmVudC5qcyc7XG5pbXBvcnQgb2xDb2xsZWN0aW9uIGZyb20gJ29sL0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0ICogYXMgb2xFeHRlbnQgZnJvbSAnb2wvZXh0ZW50LmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IG9sU3R5bGVDaXJjbGUgZnJvbSAnb2wvc3R5bGUvQ2lyY2xlLmpzJztcbmltcG9ydCBvbFN0eWxlRmlsbCBmcm9tICdvbC9zdHlsZS9GaWxsLmpzJztcbmltcG9ydCBvbFN0eWxlU3Ryb2tlIGZyb20gJ29sL3N0eWxlL1N0cm9rZS5qcyc7XG5pbXBvcnQgb2xTdHlsZVN0eWxlIGZyb20gJ29sL3N0eWxlL1N0eWxlLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9kcm9wZG93bi5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZlF1ZXJ5R3JpZENvbXBvbmVudCcsIFtuZ2VvRG93bmxvYWRDc3YubmFtZSwgbmdlb0Rvd25sb2FkU2VydmljZS5uYW1lLCBuZ2VvR3JpZENvbXBvbmVudC5uYW1lLCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IubmFtZSwgbmdlb1F1ZXJ5TWFwUXVlcmVudC5uYW1lXSk7XG5tb2R1bGUudmFsdWUoJ2dtZkRpc3BsYXlxdWVyeWdyaWRUZW1wbGF0ZVVybCcsIGZ1bmN0aW9uICgkZWxlbWVudCwgJGF0dHJzKSB7XG4gIHZhciB0ZW1wbGF0ZVVybCA9ICRhdHRyc1snZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRldXJsJ107XG4gIHJldHVybiB0ZW1wbGF0ZVVybCAhPT0gdW5kZWZpbmVkID8gdGVtcGxhdGVVcmwgOiAnZ21mL3F1ZXJ5L2dyaWRDb21wb25lbnQnO1xufSk7XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2dtZi9xdWVyeS9ncmlkQ29tcG9uZW50JywgcmVxdWlyZSgnLi9ncmlkQ29tcG9uZW50Lmh0bWwnKSk7XG59XSk7XG5nbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwuJGluamVjdCA9IFtcIiRlbGVtZW50XCIsIFwiJGF0dHJzXCIsIFwiZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsXCJdO1xuXG5mdW5jdGlvbiBnbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycywgZ21mRGlzcGxheXF1ZXJ5Z3JpZFRlbXBsYXRlVXJsKSB7XG4gIHJldHVybiBnbWZEaXNwbGF5cXVlcnlncmlkVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycyk7XG59XG5cbnZhciBxdWVyeUdyaWRDb21wb25lbnQgPSB7XG4gIGNvbnRyb2xsZXI6ICdHbWZEaXNwbGF5cXVlcnlncmlkQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgYmluZGluZ3M6IHtcbiAgICAnYWN0aXZlJzogJz0/Z21mRGlzcGxheXF1ZXJ5Z3JpZEFjdGl2ZScsXG4gICAgJ2ZlYXR1cmVzU3R5bGVGbic6ICcmZ21mRGlzcGxheXF1ZXJ5Z3JpZEZlYXR1cmVzc3R5bGUnLFxuICAgICdzZWxlY3RlZEZlYXR1cmVTdHlsZUZuJzogJyZnbWZEaXNwbGF5cXVlcnlncmlkU2VsZWN0ZWRmZWF0dXJlc3R5bGUnLFxuICAgICdnZXRNYXBGbic6ICcmZ21mRGlzcGxheXF1ZXJ5Z3JpZE1hcCcsXG4gICAgJ3JlbW92ZUVtcHR5Q29sdW1uc0ZuJzogJyY/Z21mRGlzcGxheXF1ZXJ5Z3JpZFJlbW92ZWVtcHR5Y29sdW1ucycsXG4gICAgJ21heFJlc3VsdHNGbic6ICcmP2dtZkRpc3BsYXlxdWVyeWdyaWRNYXhyZXN1bHRzJyxcbiAgICAnbWF4UmVjZW50ZXJab29tRm4nOiAnJj9nbWZEaXNwbGF5cXVlcnlncmlkTWF4cmVjZW50ZXJ6b29tJyxcbiAgICAnbWVyZ2VUYWJzJzogJzw/Z21mRGlzcGxheXF1ZXJ5Z3JpZE1lcmdldGFicydcbiAgfSxcbiAgdGVtcGxhdGVVcmw6IGdtZkRpc3BsYXlxdWVyeWdyaWRUZW1wbGF0ZVVybFxufTtcbm1vZHVsZS5jb21wb25lbnQoJ2dtZkRpc3BsYXlxdWVyeWdyaWQnLCBxdWVyeUdyaWRDb21wb25lbnQpO1xuZXhwb3J0IGZ1bmN0aW9uIFF1ZXJ5R3JpZENvbnRyb2xsZXIoJGluamVjdG9yLCAkc2NvcGUsIG5nZW9RdWVyeVJlc3VsdCwgbmdlb01hcFF1ZXJlbnQsIG5nZW9GZWF0dXJlT3ZlcmxheU1nciwgJHRpbWVvdXQsIG5nZW9Dc3ZEb3dubG9hZCwgJGVsZW1lbnQpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgcXVlcnlPcHRpb25zID0gJGluamVjdG9yLmhhcygnbmdlb1F1ZXJ5T3B0aW9ucycpID8gJGluamVjdG9yLmdldCgnbmdlb1F1ZXJ5T3B0aW9ucycpIDoge307XG4gIHRoaXMuJHNjb3BlXyA9ICRzY29wZTtcbiAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgdGhpcy5uZ2VvUXVlcnlSZXN1bHQgPSBuZ2VvUXVlcnlSZXN1bHQ7XG4gIHRoaXMubmdlb01hcFF1ZXJlbnRfID0gbmdlb01hcFF1ZXJlbnQ7XG4gIHRoaXMubmdlb0NzdkRvd25sb2FkXyA9IG5nZW9Dc3ZEb3dubG9hZDtcbiAgdGhpcy4kZWxlbWVudF8gPSAkZWxlbWVudDtcbiAgdGhpcy5tYXhSZXN1bHRzID0gcXVlcnlPcHRpb25zLmxpbWl0ICE9PSB1bmRlZmluZWQgPyBxdWVyeU9wdGlvbnMubGltaXQgOiA1MDtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gIHRoaXMuZ3JpZFNvdXJjZXMgPSB7fTtcbiAgdGhpcy5sb2FkZWRHcmlkU291cmNlcyA9IFtdO1xuICB0aGlzLnNlbGVjdGVkVGFiID0gbnVsbDtcbiAgdGhpcy5yZW1vdmVFbXB0eUNvbHVtbnNfID0gZmFsc2U7XG4gIHRoaXMubWF4UmVjZW50ZXJab29tO1xuICB0aGlzLm1lcmdlVGFicyA9IHt9O1xuICB0aGlzLmZlYXR1cmVzRm9yU291cmNlc18gPSB7fTtcbiAgdGhpcy5mZWF0dXJlc18gPSBuZXcgb2xDb2xsZWN0aW9uKCk7XG4gIHRoaXMubmdlb0ZlYXR1cmVPdmVybGF5TWdyXyA9IG5nZW9GZWF0dXJlT3ZlcmxheU1ncjtcbiAgdGhpcy5oaWdobGlnaHRGZWF0dXJlc18gPSBuZXcgb2xDb2xsZWN0aW9uKCk7XG4gIHRoaXMuZmlsZW5hbWVfID0gJGluamVjdG9yLmhhcygnZ21mQ3N2RmlsZW5hbWUnKSA/ICRpbmplY3Rvci5nZXQoJ2dtZkNzdkZpbGVuYW1lJykgOiAncXVlcnktcmVzdWx0cy5jc3YnO1xuICB0aGlzLm1hcF8gPSBudWxsO1xuICB0aGlzLiRzY29wZV8uJHdhdGNoQ29sbGVjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5nZW9RdWVyeVJlc3VsdDtcbiAgfSwgZnVuY3Rpb24gKG5ld1F1ZXJ5UmVzdWx0LCBvbGRRdWVyeVJlc3VsdCkge1xuICAgIGlmIChuZXdRdWVyeVJlc3VsdCAhPT0gb2xkUXVlcnlSZXN1bHQpIHtcbiAgICAgIF90aGlzLnVwZGF0ZURhdGFfKCk7XG4gICAgfVxuICB9KTtcbiAgdGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8gPSBudWxsO1xufVxuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJlbW92ZUVtcHR5Q29sdW1uc18gPSB0aGlzWydyZW1vdmVFbXB0eUNvbHVtbnNGbiddID8gdGhpc1sncmVtb3ZlRW1wdHlDb2x1bW5zRm4nXSgpID09PSB0cnVlIDogZmFsc2U7XG4gIHRoaXMubWF4UmVjZW50ZXJab29tID0gdGhpc1snbWF4UmVjZW50ZXJab29tRm4nXSA/IHRoaXNbJ21heFJlY2VudGVyWm9vbUZuJ10oKSA6IHVuZGVmaW5lZDtcbiAgdmFyIGZlYXR1cmVzT3ZlcmxheSA9IHRoaXMubmdlb0ZlYXR1cmVPdmVybGF5TWdyXy5nZXRGZWF0dXJlT3ZlcmxheSgpO1xuICBmZWF0dXJlc092ZXJsYXkuc2V0RmVhdHVyZXModGhpcy5mZWF0dXJlc18pO1xuICB2YXIgZmVhdHVyZXNTdHlsZSA9IHRoaXNbJ2ZlYXR1cmVzU3R5bGVGbiddKCk7XG5cbiAgaWYgKGZlYXR1cmVzU3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KGZlYXR1cmVzU3R5bGUgaW5zdGFuY2VvZiBvbFN0eWxlU3R5bGUpO1xuICAgIGZlYXR1cmVzT3ZlcmxheS5zZXRTdHlsZShmZWF0dXJlc1N0eWxlKTtcbiAgfVxuXG4gIHZhciBoaWdobGlnaHRGZWF0dXJlc092ZXJsYXkgPSB0aGlzLm5nZW9GZWF0dXJlT3ZlcmxheU1ncl8uZ2V0RmVhdHVyZU92ZXJsYXkoKTtcbiAgaGlnaGxpZ2h0RmVhdHVyZXNPdmVybGF5LnNldEZlYXR1cmVzKHRoaXMuaGlnaGxpZ2h0RmVhdHVyZXNfKTtcbiAgdmFyIGhpZ2hsaWdodEZlYXR1cmVTdHlsZSA9IHRoaXNbJ3NlbGVjdGVkRmVhdHVyZVN0eWxlRm4nXSgpO1xuXG4gIGlmIChoaWdobGlnaHRGZWF0dXJlU3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KGhpZ2hsaWdodEZlYXR1cmVTdHlsZSBpbnN0YW5jZW9mIG9sU3R5bGVTdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZpbGwgPSBuZXcgb2xTdHlsZUZpbGwoe1xuICAgICAgY29sb3I6IFsyNTUsIDAsIDAsIDAuNl1cbiAgICB9KTtcbiAgICB2YXIgc3Ryb2tlID0gbmV3IG9sU3R5bGVTdHJva2Uoe1xuICAgICAgY29sb3I6IFsyNTUsIDAsIDAsIDFdLFxuICAgICAgd2lkdGg6IDJcbiAgICB9KTtcbiAgICBoaWdobGlnaHRGZWF0dXJlU3R5bGUgPSBuZXcgb2xTdHlsZVN0eWxlKHtcbiAgICAgIGZpbGw6IGZpbGwsXG4gICAgICBpbWFnZTogbmV3IG9sU3R5bGVDaXJjbGUoe1xuICAgICAgICBmaWxsOiBmaWxsLFxuICAgICAgICByYWRpdXM6IDUsXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlXG4gICAgICB9KSxcbiAgICAgIHN0cm9rZTogc3Ryb2tlLFxuICAgICAgekluZGV4OiAxMFxuICAgIH0pO1xuICB9XG5cbiAgaGlnaGxpZ2h0RmVhdHVyZXNPdmVybGF5LnNldFN0eWxlKGhpZ2hsaWdodEZlYXR1cmVTdHlsZSk7XG4gIHZhciBtYXBGbiA9IHRoaXNbJ2dldE1hcEZuJ107XG5cbiAgaWYgKG1hcEZuKSB7XG4gICAgdmFyIG1hcCA9IG1hcEZuKCk7XG4gICAgY29uc29sZS5hc3NlcnQobWFwIGluc3RhbmNlb2Ygb2xNYXApO1xuICAgIHRoaXMubWFwXyA9IG1hcDtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0R3JpZFNvdXJjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHJldHVybiB0aGlzLmxvYWRlZEdyaWRTb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlTGFiZWwpIHtcbiAgICByZXR1cm4gX3RoaXMyLmdyaWRTb3VyY2VzW3NvdXJjZUxhYmVsXTtcbiAgfSk7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVEYXRhXyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgaWYgKCh0aGlzLm5nZW9RdWVyeVJlc3VsdC5wZW5kaW5nIHx8IHRoaXMubmdlb1F1ZXJ5UmVzdWx0LnRvdGFsID09PSAwKSAmJiAhdGhpcy5oYXNPbmVXaXRoVG9vTWFueVJlc3VsdHNfKCkpIHtcbiAgICB2YXIgb2xkQWN0aXZlID0gdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKG9sZEFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLm5nZW9RdWVyeVJlc3VsdC5wZW5kaW5nO1xuICAgICAgdGhpcy5wZW5kaW5nID0gdGhpcy5uZ2VvUXVlcnlSZXN1bHQucGVuZGluZztcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICB2YXIgc291cmNlcyA9IHRoaXMubmdlb1F1ZXJ5UmVzdWx0LnNvdXJjZXM7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHRoaXMubWVyZ2VUYWJzKS5sZW5ndGggPiAwKSB7XG4gICAgc291cmNlcyA9IHRoaXMuZ2V0TWVyZ2VkU291cmNlc18oc291cmNlcyk7XG4gIH1cblxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UudG9vTWFueVJlc3VsdHMpIHtcbiAgICAgIF90aGlzMy5tYWtlR3JpZF8obnVsbCwgc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlLmlkID0gX3RoaXMzLmVzY2FwZVZhbHVlKHNvdXJjZS5pZCk7XG4gICAgICB2YXIgZmVhdHVyZXMgPSBzb3VyY2UuZmVhdHVyZXM7XG5cbiAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF90aGlzMy5jb2xsZWN0RGF0YV8oc291cmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0aGlzLmxvYWRlZEdyaWRTb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09IG51bGwgfHwgIShcIlwiICsgdGhpcy5zZWxlY3RlZFRhYiBpbiB0aGlzLmdyaWRTb3VyY2VzKSkge1xuICAgIHRoaXMuJHRpbWVvdXRfKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmaXJzdFNvdXJjZUlkID0gX3RoaXMzLmxvYWRlZEdyaWRTb3VyY2VzWzBdO1xuXG4gICAgICBfdGhpczMuc2VsZWN0VGFiKF90aGlzMy5ncmlkU291cmNlc1tmaXJzdFNvdXJjZUlkXSk7XG4gICAgfSwgMCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmhhc09uZVdpdGhUb29NYW55UmVzdWx0c18gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLm5nZW9RdWVyeVJlc3VsdC5zb3VyY2VzLnNvbWUoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIHJldHVybiBzb3VyY2UudG9vTWFueVJlc3VsdHM7XG4gIH0pO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZXNjYXBlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdG9Fc2NhcGUgPSAvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXCB8XS9nO1xuXG4gICAgaWYgKHZhbHVlLm1hdGNoKHRvRXNjYXBlKSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodG9Fc2NhcGUsICdfJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmlzU2VsZWN0ZWQgPSBmdW5jdGlvbiAoZ3JpZFNvdXJjZSkge1xuICByZXR1cm4gdGhpcy5zZWxlY3RlZFRhYiA9PT0gZ3JpZFNvdXJjZS5zb3VyY2UubGFiZWw7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRNZXJnZWRTb3VyY2VzXyA9IGZ1bmN0aW9uIChzb3VyY2VzKSB7XG4gIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gIHZhciBhbGxTb3VyY2VzID0gW107XG4gIHZhciBtZXJnZWRTb3VyY2VzID0ge307XG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgdmFyIG1lcmdlZFNvdXJjZSA9IF90aGlzNC5nZXRNZXJnZWRTb3VyY2VfKHNvdXJjZSwgbWVyZ2VkU291cmNlcyk7XG5cbiAgICBpZiAobWVyZ2VkU291cmNlID09PSBudWxsKSB7XG4gICAgICBhbGxTb3VyY2VzLnB1c2goc291cmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZvciAodmFyIG1lcmdlZFNvdXJjZUlkIGluIG1lcmdlZFNvdXJjZXMpIHtcbiAgICBhbGxTb3VyY2VzLnB1c2gobWVyZ2VkU291cmNlc1ttZXJnZWRTb3VyY2VJZF0pO1xuICB9XG5cbiAgcmV0dXJuIGFsbFNvdXJjZXM7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5nZXRNZXJnZWRTb3VyY2VfID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVyZ2VkU291cmNlcykge1xuICB2YXIgbWVyZ2VTb3VyY2VJZCA9IG51bGw7XG5cbiAgZm9yICh2YXIgY3VycmVudE1lcmdlU291cmNlSWQgaW4gdGhpcy5tZXJnZVRhYnMpIHtcbiAgICB2YXIgc291cmNlTGFiZWxzID0gdGhpcy5tZXJnZVRhYnNbY3VycmVudE1lcmdlU291cmNlSWRdO1xuICAgIHZhciBjb250YWluc1NvdXJjZSA9IHNvdXJjZUxhYmVscy5zb21lKGZ1bmN0aW9uIChzb3VyY2VMYWJlbCkge1xuICAgICAgcmV0dXJuIHNvdXJjZUxhYmVsID09IHNvdXJjZS5sYWJlbDtcbiAgICB9KTtcblxuICAgIGlmIChjb250YWluc1NvdXJjZSkge1xuICAgICAgbWVyZ2VTb3VyY2VJZCA9IGN1cnJlbnRNZXJnZVNvdXJjZUlkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1lcmdlU291cmNlSWQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtZXJnZVNvdXJjZTtcblxuICBpZiAobWVyZ2VTb3VyY2VJZCBpbiBtZXJnZWRTb3VyY2VzKSB7XG4gICAgbWVyZ2VTb3VyY2UgPSBtZXJnZWRTb3VyY2VzW21lcmdlU291cmNlSWRdO1xuICB9IGVsc2Uge1xuICAgIG1lcmdlU291cmNlID0ge1xuICAgICAgZmVhdHVyZXM6IFtdLFxuICAgICAgaWQ6IG1lcmdlU291cmNlSWQsXG4gICAgICBsYWJlbDogbWVyZ2VTb3VyY2VJZCxcbiAgICAgIGxpbWl0OiB0aGlzLm1heFJlc3VsdHMsXG4gICAgICBwZW5kaW5nOiBmYWxzZSxcbiAgICAgIHF1ZXJpZWQ6IHRydWUsXG4gICAgICB0b29NYW55UmVzdWx0czogZmFsc2UsXG4gICAgICB0b3RhbEZlYXR1cmVDb3VudDogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBtZXJnZWRTb3VyY2VzW21lcmdlU291cmNlSWRdID0gbWVyZ2VTb3VyY2U7XG4gIH1cblxuICBzb3VyY2UuZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIG1lcmdlU291cmNlLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gIH0pO1xuICBtZXJnZVNvdXJjZS50b29NYW55UmVzdWx0cyA9IG1lcmdlU291cmNlLnRvb01hbnlSZXN1bHRzIHx8IHNvdXJjZS50b29NYW55UmVzdWx0cztcblxuICBpZiAobWVyZ2VTb3VyY2UudG9vTWFueVJlc3VsdHMpIHtcbiAgICBtZXJnZVNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCA9IG1lcmdlU291cmNlLnRvdGFsRmVhdHVyZUNvdW50ICE9PSB1bmRlZmluZWQgPyBtZXJnZVNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCArIG1lcmdlU291cmNlLmZlYXR1cmVzLmxlbmd0aCA6IG1lcmdlU291cmNlLmZlYXR1cmVzLmxlbmd0aDtcbiAgICBtZXJnZVNvdXJjZS5mZWF0dXJlcyA9IFtdO1xuICB9XG5cbiAgaWYgKHNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVyZ2VTb3VyY2UudG90YWxGZWF0dXJlQ291bnQgPSBtZXJnZVNvdXJjZS50b3RhbEZlYXR1cmVDb3VudCAhPT0gdW5kZWZpbmVkID8gbWVyZ2VTb3VyY2UudG90YWxGZWF0dXJlQ291bnQgKyBzb3VyY2UudG90YWxGZWF0dXJlQ291bnQgOiBzb3VyY2UudG90YWxGZWF0dXJlQ291bnQ7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VTb3VyY2U7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5jb2xsZWN0RGF0YV8gPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gIHZhciBmZWF0dXJlcyA9IHNvdXJjZS5mZWF0dXJlcztcbiAgdmFyIGFsbFByb3BlcnRpZXMgPSBbXTtcbiAgdmFyIGZlYXR1cmVHZW9tZXRyaWVzTmFtZXMgPSBbXTtcbiAgdmFyIGZlYXR1cmVzRm9yU291cmNlID0ge307XG4gIHZhciBwcm9wZXJ0aWVzLCBmZWF0dXJlR2VvbWV0cnlOYW1lO1xuICBmZWF0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcHJvcGVydGllcyA9IGZlYXR1cmUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgaWYgKHByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZmVhdHVyZUdlb21ldHJ5TmFtZSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnlOYW1lKCk7XG5cbiAgICAgIGlmIChmZWF0dXJlR2VvbWV0cmllc05hbWVzLmluZGV4T2YoZmVhdHVyZUdlb21ldHJ5TmFtZSkgPT09IC0xKSB7XG4gICAgICAgIGZlYXR1cmVHZW9tZXRyaWVzTmFtZXMucHVzaChmZWF0dXJlR2VvbWV0cnlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgYWxsUHJvcGVydGllcy5wdXNoKHByb3BlcnRpZXMpO1xuICAgICAgZmVhdHVyZXNGb3JTb3VyY2VbZ2V0Um93VWlkKHByb3BlcnRpZXMpXSA9IGZlYXR1cmU7XG4gICAgfVxuICB9KTtcbiAgdGhpcy5jbGVhblByb3BlcnRpZXNfKGFsbFByb3BlcnRpZXMsIGZlYXR1cmVHZW9tZXRyaWVzTmFtZXMpO1xuXG4gIGlmIChhbGxQcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgZ3JpZENyZWF0ZWQgPSB0aGlzLm1ha2VHcmlkXyhhbGxQcm9wZXJ0aWVzLCBzb3VyY2UpO1xuXG4gICAgaWYgKGdyaWRDcmVhdGVkKSB7XG4gICAgICB0aGlzLmZlYXR1cmVzRm9yU291cmNlc19bXCJcIiArIHNvdXJjZS5sYWJlbF0gPSBmZWF0dXJlc0ZvclNvdXJjZTtcbiAgICB9XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmNsZWFuUHJvcGVydGllc18gPSBmdW5jdGlvbiAoYWxsUHJvcGVydGllcywgZmVhdHVyZUdlb21ldHJpZXNOYW1lcykge1xuICBhbGxQcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICBmZWF0dXJlR2VvbWV0cmllc05hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmVHZW9tZXRyeU5hbWUpIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzW2ZlYXR1cmVHZW9tZXRyeU5hbWVdO1xuICAgIH0pO1xuICAgIGRlbGV0ZSBwcm9wZXJ0aWVzWydib3VuZGVkQnknXTtcbiAgICBkZWxldGUgcHJvcGVydGllc1snbmdlb19mZWF0dXJlX3R5cGVfJ107XG4gIH0pO1xuXG4gIGlmICh0aGlzLnJlbW92ZUVtcHR5Q29sdW1uc18gPT09IHRydWUpIHtcbiAgICB0aGlzLnJlbW92ZUVtcHR5Q29sdW1uc0ZuXyhhbGxQcm9wZXJ0aWVzKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlRW1wdHlDb2x1bW5zRm5fID0gZnVuY3Rpb24gKGFsbFByb3BlcnRpZXMpIHtcbiAgdmFyIGtleXNUb0tlZXAgPSBbXTtcbiAgdmFyIGksIGtleTtcblxuICBmb3IgKGtleSBpbiBhbGxQcm9wZXJ0aWVzWzBdKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGFsbFByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbGxQcm9wZXJ0aWVzW2ldW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlzVG9LZWVwLnB1c2goa2V5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGtleVRvUmVtb3ZlO1xuICBhbGxQcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICBrZXlUb1JlbW92ZSA9IFtdO1xuXG4gICAgZm9yIChrZXkgaW4gcHJvcGVydGllcykge1xuICAgICAgaWYgKGtleXNUb0tlZXAuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICBrZXlUb1JlbW92ZS5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2V5VG9SZW1vdmUuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1trZXldO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLm1ha2VHcmlkXyA9IGZ1bmN0aW9uIChkYXRhLCBzb3VyY2UpIHtcbiAgdmFyIHNvdXJjZUxhYmVsID0gXCJcIiArIHNvdXJjZS5sYWJlbDtcbiAgdmFyIGdyaWRDb25maWcgPSBudWxsO1xuXG4gIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgZ3JpZENvbmZpZyA9IHRoaXMuZ2V0R3JpZENvbmZpZ3VyYXRpb25fKGRhdGEpO1xuXG4gICAgaWYgKGdyaWRDb25maWcgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5sb2FkZWRHcmlkU291cmNlcy5pbmRleE9mKHNvdXJjZUxhYmVsKSA9PSAtMSkge1xuICAgIHRoaXMubG9hZGVkR3JpZFNvdXJjZXMucHVzaChzb3VyY2VMYWJlbCk7XG4gIH1cblxuICB0aGlzLmdyaWRTb3VyY2VzW3NvdXJjZUxhYmVsXSA9IHtcbiAgICBjb25maWd1cmF0aW9uOiBncmlkQ29uZmlnLFxuICAgIHNvdXJjZTogc291cmNlXG4gIH07XG4gIHJldHVybiB0cnVlO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0R3JpZENvbmZpZ3VyYXRpb25fID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc29sZS5hc3NlcnQoZGF0YS5sZW5ndGggPiAwKTtcbiAgdmFyIGNsb25lID0ge307XG4gIE9iamVjdC5hc3NpZ24oY2xvbmUsIGRhdGFbMF0pO1xuICBkZWxldGUgY2xvbmUub2xfdWlkO1xuICB2YXIgY29sdW1ucyA9IE9iamVjdC5rZXlzKGNsb25lKTtcbiAgdmFyIGNvbHVtbkRlZnMgPSBbXTtcbiAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICBjb2x1bW5EZWZzLnB1c2goe1xuICAgICAgbmFtZTogY29sdW1uXG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChjb2x1bW5EZWZzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gbmV3IG5nZW9HcmlkQ29uZmlnKGRhdGEsIGNvbHVtbkRlZnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gIHRoaXMuZ3JpZFNvdXJjZXMgPSB7fTtcbiAgdGhpcy5sb2FkZWRHcmlkU291cmNlcyA9IFtdO1xuICB0aGlzLnNlbGVjdGVkVGFiID0gbnVsbDtcbiAgdGhpcy50b29NYW55UmVzdWx0cyA9IGZhbHNlO1xuICB0aGlzLmZlYXR1cmVzXy5jbGVhcigpO1xuICB0aGlzLmhpZ2hsaWdodEZlYXR1cmVzXy5jbGVhcigpO1xuICB0aGlzLm5nZW9NYXBRdWVyZW50Xy5jbGVhcigpO1xuICB0aGlzLmZlYXR1cmVzRm9yU291cmNlc18gPSB7fTtcblxuICBpZiAodGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8pIHtcbiAgICB0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXygpO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5zZWxlY3RUYWIgPSBmdW5jdGlvbiAoZ3JpZFNvdXJjZSkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB2YXIgc291cmNlID0gZ3JpZFNvdXJjZS5zb3VyY2U7XG4gIHRoaXMuc2VsZWN0ZWRUYWIgPSBzb3VyY2UubGFiZWw7XG5cbiAgaWYgKHRoaXMudW5yZWdpc3RlclNlbGVjdFdhdGNoZXJfKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8oKTtcbiAgICB0aGlzLnVucmVnaXN0ZXJTZWxlY3RXYXRjaGVyXyA9IG51bGw7XG4gIH1cblxuICBpZiAoZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyU2VsZWN0V2F0Y2hlcl8gPSB0aGlzLiRzY29wZV8uJHdhdGNoQ29sbGVjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uLnNlbGVjdGVkUm93cztcbiAgICB9LCBmdW5jdGlvbiAobmV3U2VsZWN0ZWQsIG9sZFNlbGVjdGVkUm93cykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG5ld1NlbGVjdGVkKSAhPT0gT2JqZWN0LmtleXMob2xkU2VsZWN0ZWRSb3dzKSkge1xuICAgICAgICBfdGhpczUub25TZWxlY3Rpb25DaGFuZ2VkXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGhpcy51cGRhdGVGZWF0dXJlc18oZ3JpZFNvdXJjZSk7XG4gIHRoaXMucmVmbG93R3JpZF8oKTtcbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnJlZmxvd0dyaWRfID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSB0aGlzLmVzY2FwZVZhbHVlKHRoaXMuc2VsZWN0ZWRUYWIgfHwgJycpO1xuICB2YXIgYWN0aXZlUGFuZSA9IHRoaXMuJGVsZW1lbnRfLmZpbmQoXCJkaXYudGFiLXBhbmUjXCIgKyBpZCk7XG4gIGFjdGl2ZVBhbmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgdGhpcy4kdGltZW91dF8oZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZVBhbmUuZmluZCgnZGl2Lm5nZW8tZ3JpZC10YWJsZS1jb250YWluZXIgdGFibGUnKVsndHJpZ2dlciddKCdyZWZsb3cnKTtcbiAgfSk7XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5vblNlbGVjdGlvbkNoYW5nZWRfID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBncmlkU291cmNlID0gdGhpcy5ncmlkU291cmNlc1tcIlwiICsgdGhpcy5zZWxlY3RlZFRhYl07XG4gIHRoaXMudXBkYXRlRmVhdHVyZXNfKGdyaWRTb3VyY2UpO1xufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUudXBkYXRlRmVhdHVyZXNfID0gZnVuY3Rpb24gKGdyaWRTb3VyY2UpIHtcbiAgdGhpcy5mZWF0dXJlc18uY2xlYXIoKTtcbiAgdGhpcy5oaWdobGlnaHRGZWF0dXJlc18uY2xlYXIoKTtcblxuICBpZiAoZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNvdXJjZUxhYmVsID0gXCJcIiArIGdyaWRTb3VyY2Uuc291cmNlLmxhYmVsO1xuICB2YXIgZmVhdHVyZXNGb3JTb3VyY2UgPSB0aGlzLmZlYXR1cmVzRm9yU291cmNlc19bc291cmNlTGFiZWxdO1xuICB2YXIgc2VsZWN0ZWRSb3dzID0gZ3JpZFNvdXJjZS5jb25maWd1cmF0aW9uLnNlbGVjdGVkUm93cztcblxuICBmb3IgKHZhciByb3dJZCBpbiBmZWF0dXJlc0ZvclNvdXJjZSkge1xuICAgIHZhciBmZWF0dXJlID0gZmVhdHVyZXNGb3JTb3VyY2Vbcm93SWRdO1xuXG4gICAgaWYgKHJvd0lkIGluIHNlbGVjdGVkUm93cykge1xuICAgICAgdGhpcy5oaWdobGlnaHRGZWF0dXJlc18ucHVzaChmZWF0dXJlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mZWF0dXJlc18ucHVzaChmZWF0dXJlKTtcbiAgICB9XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmdldEFjdGl2ZUdyaWRTb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZFNvdXJjZXNbXCJcIiArIHRoaXMuc2VsZWN0ZWRUYWJdO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5pc09uZVNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSA9PT0gbnVsbCB8fCBzb3VyY2UuY29uZmlndXJhdGlvbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc291cmNlLmNvbmZpZ3VyYXRpb24uZ2V0U2VsZWN0ZWRDb3VudCgpID4gMDtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRSb3dDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgPT09IG51bGwgfHwgc291cmNlLmNvbmZpZ3VyYXRpb24gPT09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc291cmNlLmNvbmZpZ3VyYXRpb24uZ2V0U2VsZWN0ZWRDb3VudCgpO1xuICB9XG59O1xuXG5RdWVyeUdyaWRDb250cm9sbGVyLnByb3RvdHlwZS5zZWxlY3RBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzLmdldEFjdGl2ZUdyaWRTb3VyY2UoKTtcblxuICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgc291cmNlLmNvbmZpZ3VyYXRpb24uc2VsZWN0QWxsKCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLnVuc2VsZWN0QWxsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuICAgIHNvdXJjZS5jb25maWd1cmF0aW9uLnVuc2VsZWN0QWxsKCk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmludmVydFNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0QWN0aXZlR3JpZFNvdXJjZSgpO1xuXG4gIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICBzb3VyY2UuY29uZmlndXJhdGlvbi5pbnZlcnRTZWxlY3Rpb24oKTtcbiAgfVxufTtcblxuUXVlcnlHcmlkQ29udHJvbGxlci5wcm90b3R5cGUuem9vbVRvU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuICAgIHZhciBleHRlbnQgPSBvbEV4dGVudC5jcmVhdGVFbXB0eSgpO1xuICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZXNfLmZvckVhY2goZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgIG9sRXh0ZW50LmV4dGVuZChleHRlbnQsIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKSk7XG4gICAgfSk7XG4gICAgdmFyIHNpemUgPSB0aGlzLm1hcF8uZ2V0U2l6ZSgpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KHNpemUgIT09IHVuZGVmaW5lZCk7XG4gICAgdmFyIG1heFpvb20gPSB0aGlzLm1heFJlY2VudGVyWm9vbTtcbiAgICB0aGlzLm1hcF8uZ2V0VmlldygpLmZpdChleHRlbnQsIHtcbiAgICAgIHNpemU6IHNpemUsXG4gICAgICBtYXhab29tOiBtYXhab29tXG4gICAgfSk7XG4gIH1cbn07XG5cblF1ZXJ5R3JpZENvbnRyb2xsZXIucHJvdG90eXBlLmRvd25sb2FkQ3N2ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc291cmNlID0gdGhpcy5nZXRBY3RpdmVHcmlkU291cmNlKCk7XG5cbiAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuICAgIHZhciBjb2x1bW5EZWZzID0gc291cmNlLmNvbmZpZ3VyYXRpb24uY29sdW1uRGVmcztcbiAgICBjb25zb2xlLmFzc2VydChjb2x1bW5EZWZzICE9PSB1bmRlZmluZWQpO1xuICAgIHZhciBzZWxlY3RlZFJvd3MgPSBzb3VyY2UuY29uZmlndXJhdGlvbi5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICB0aGlzLm5nZW9Dc3ZEb3dubG9hZF8uc3RhcnREb3dubG9hZChzZWxlY3RlZFJvd3MsIGNvbHVtbkRlZnMsIHRoaXMuZmlsZW5hbWVfKTtcbiAgfVxufTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ0dtZkRpc3BsYXlxdWVyeWdyaWRDb250cm9sbGVyJywgUXVlcnlHcmlkQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=