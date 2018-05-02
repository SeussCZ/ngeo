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
/******/ 		"mapfishprint": 0
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
/******/ 	deferredModules.push([23,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/mapfishprint.css":
/*!***********************************!*\
  !*** ./examples/mapfishprint.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/mapfishprint.js":
/*!**********************************!*\
  !*** ./examples/mapfishprint.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./examples/url.js");
/* harmony import */ var _mapfishprint_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapfishprint.css */ "./examples/mapfishprint.css");
/* harmony import */ var _mapfishprint_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapfishprint_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ "./node_modules/@geoblocks/proj/src/EPSG_21781.js");
/* harmony import */ var ngeo_print_Service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/print/Service.js */ "./src/print/Service.js");
/* harmony import */ var ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/print/Utils.js */ "./src/print/Utils.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Image.js */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/ImageWMS.js */ "./node_modules/ol/source/ImageWMS.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
MainController.$inject = ["$timeout", "ngeoCreatePrint", "ngeoPrintUtils"];














var appmodule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_13__["default"].name, ngeo_print_Service_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, ngeo_print_Utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].name]);
var PRINT_SCALES_ = [100, 250, 500, 2500, 5000, 10000, 25000, 50000, 100000, 500000];
var PRINT_FORMAT_ = 'pdf';
var PRINT_LAYOUT_ = '1 A4 portrait';
var PRINT_DPI_ = 72;
var PRINT_PAPER_SIZE_ = [555, 675];

function MainController($timeout, ngeoCreatePrint, ngeoPrintUtils) {
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    layers: [new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      source: new ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
        url: _url_js__WEBPACK_IMPORTED_MODULE_1__["MAPSERVER_PROXY"],
        projection: undefined,
        params: {
          'LAYERS': 'osm'
        },
        serverType: 'mapserver'
      })
    }), new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      source: new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
        url: 'data/polygon-swizerland.json',
        format: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
          dataProjection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_3__["default"]
        })
      })
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1],
      center: [537635, 152640],
      zoom: 3
    })
  });
  this.printState = '';
  this.$timeout_ = $timeout;
  this.print_ = ngeoCreatePrint(_url_js__WEBPACK_IMPORTED_MODULE_1__["PRINT_PROXY"]);
  this.printUtils_ = ngeoPrintUtils;
  var postcomposeListener = ngeoPrintUtils.createPrintMaskPostcompose(function () {
    return PRINT_PAPER_SIZE_;
  }, function (frameState) {
    var mapSize = frameState.size;
    var mapResolution = frameState.viewState.resolution;
    return mapSize !== undefined && mapResolution !== undefined ? ngeoPrintUtils.getOptimalScale(mapSize, mapResolution, PRINT_PAPER_SIZE_, PRINT_SCALES_) : PRINT_SCALES_[0];
  });
  this.map.on('postcompose', postcomposeListener);
}

MainController.prototype.print = function () {
  var map = this.map;
  var mapSize = map.getSize();
  var viewResolution = map.getView().getResolution();
  var scale = mapSize !== undefined && viewResolution !== undefined ? this.printUtils_.getOptimalScale(mapSize, viewResolution, PRINT_PAPER_SIZE_, PRINT_SCALES_) : PRINT_SCALES_[0];
  var dpi = PRINT_DPI_;
  var format = PRINT_FORMAT_;
  var layout = PRINT_LAYOUT_;
  this.printState = 'Printing...';
  var spec = this.print_.createSpec(map, scale, dpi, layout, format, {
    'datasource': [],
    'debug': 0,
    'comments': 'My comments',
    'title': 'My print'
  });
  this.print_.createReport(spec).then(this.handleCreateReportSuccess_.bind(this), this.handleCreateReportError_.bind(this));
};

MainController.prototype.handleCreateReportSuccess_ = function (resp) {
  var mfResp = resp.data;
  this.getStatus_(mfResp.ref);
};

MainController.prototype.getStatus_ = function (ref) {
  this.print_.getStatus(ref).then(this.handleGetStatusSuccess_.bind(this, ref), this.handleGetStatusError_.bind(this));
};

MainController.prototype.handleCreateReportError_ = function (resp) {
  this.printState = 'Print error';
};

MainController.prototype.handleGetStatusSuccess_ = function (ref, resp) {
  var mfResp = resp.data;
  var done = mfResp.done;

  if (done) {
    this.printState = '';
    window.location.href = this.print_.getReportUrl(ref);
  } else {
    var that = this;
    this.$timeout_(function () {
      that.getStatus_(ref);
    }, 1000, false);
  }
};

MainController.prototype.handleGetStatusError_ = function (resp) {
  this.printState = 'Print error';
};

appmodule.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 23:
/*!*********************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/mapfishprint.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/mapfishprint.js */"./examples/mapfishprint.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwZmlzaHByaW50LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL21hcGZpc2hwcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1hcGZpc2hwcmludFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsyMyxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJNYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIiwgXCJuZ2VvQ3JlYXRlUHJpbnRcIiwgXCJuZ2VvUHJpbnRVdGlsc1wiXTtcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgTUFQU0VSVkVSX1BST1hZLCBQUklOVF9QUk9YWSB9IGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCAnLi9tYXBmaXNocHJpbnQuY3NzJztcbmltcG9ydCBFUFNHMjE3ODEgZnJvbSAnQGdlb2Jsb2Nrcy9wcm9qL3NyYy9FUFNHXzIxNzgxLmpzJztcbmltcG9ydCBuZ2VvUHJpbnRTZXJ2aWNlIGZyb20gJ25nZW8vcHJpbnQvU2VydmljZS5qcyc7XG5pbXBvcnQgbmdlb1ByaW50VXRpbHMgZnJvbSAnbmdlby9wcmludC9VdGlscy5qcyc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgb2xGb3JtYXRHZW9KU09OIGZyb20gJ29sL2Zvcm1hdC9HZW9KU09OLmpzJztcbmltcG9ydCBvbExheWVySW1hZ2UgZnJvbSAnb2wvbGF5ZXIvSW1hZ2UuanMnO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yLmpzJztcbmltcG9ydCBvbFNvdXJjZUltYWdlV01TIGZyb20gJ29sL3NvdXJjZS9JbWFnZVdNUy5qcyc7XG5pbXBvcnQgb2xTb3VyY2VWZWN0b3IgZnJvbSAnb2wvc291cmNlL1ZlY3Rvci5qcyc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUuanMnO1xudmFyIGFwcG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2dldHRleHQnLCBuZ2VvTWFwTW9kdWxlLm5hbWUsIG5nZW9QcmludFNlcnZpY2UubmFtZSwgbmdlb1ByaW50VXRpbHMubmFtZV0pO1xudmFyIFBSSU5UX1NDQUxFU18gPSBbMTAwLCAyNTAsIDUwMCwgMjUwMCwgNTAwMCwgMTAwMDAsIDI1MDAwLCA1MDAwMCwgMTAwMDAwLCA1MDAwMDBdO1xudmFyIFBSSU5UX0ZPUk1BVF8gPSAncGRmJztcbnZhciBQUklOVF9MQVlPVVRfID0gJzEgQTQgcG9ydHJhaXQnO1xudmFyIFBSSU5UX0RQSV8gPSA3MjtcbnZhciBQUklOVF9QQVBFUl9TSVpFXyA9IFs1NTUsIDY3NV07XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCR0aW1lb3V0LCBuZ2VvQ3JlYXRlUHJpbnQsIG5nZW9QcmludFV0aWxzKSB7XG4gIHRoaXMubWFwID0gbmV3IG9sTWFwKHtcbiAgICBsYXllcnM6IFtuZXcgb2xMYXllckltYWdlKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlSW1hZ2VXTVMoe1xuICAgICAgICB1cmw6IE1BUFNFUlZFUl9QUk9YWSxcbiAgICAgICAgcHJvamVjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAnTEFZRVJTJzogJ29zbSdcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmVyVHlwZTogJ21hcHNlcnZlcidcbiAgICAgIH0pXG4gICAgfSksIG5ldyBvbExheWVyVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlVmVjdG9yKHtcbiAgICAgICAgdXJsOiAnZGF0YS9wb2x5Z29uLXN3aXplcmxhbmQuanNvbicsXG4gICAgICAgIGZvcm1hdDogbmV3IG9sRm9ybWF0R2VvSlNPTih7XG4gICAgICAgICAgZGF0YVByb2plY3Rpb246IEVQU0cyMTc4MVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KV0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBwcm9qZWN0aW9uOiBFUFNHMjE3ODEsXG4gICAgICByZXNvbHV0aW9uczogWzIwMCwgMTAwLCA1MCwgMjAsIDEwLCA1LCAyLjUsIDIsIDFdLFxuICAgICAgY2VudGVyOiBbNTM3NjM1LCAxNTI2NDBdLFxuICAgICAgem9vbTogM1xuICAgIH0pXG4gIH0pO1xuICB0aGlzLnByaW50U3RhdGUgPSAnJztcbiAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgdGhpcy5wcmludF8gPSBuZ2VvQ3JlYXRlUHJpbnQoUFJJTlRfUFJPWFkpO1xuICB0aGlzLnByaW50VXRpbHNfID0gbmdlb1ByaW50VXRpbHM7XG4gIHZhciBwb3N0Y29tcG9zZUxpc3RlbmVyID0gbmdlb1ByaW50VXRpbHMuY3JlYXRlUHJpbnRNYXNrUG9zdGNvbXBvc2UoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBQUklOVF9QQVBFUl9TSVpFXztcbiAgfSwgZnVuY3Rpb24gKGZyYW1lU3RhdGUpIHtcbiAgICB2YXIgbWFwU2l6ZSA9IGZyYW1lU3RhdGUuc2l6ZTtcbiAgICB2YXIgbWFwUmVzb2x1dGlvbiA9IGZyYW1lU3RhdGUudmlld1N0YXRlLnJlc29sdXRpb247XG4gICAgcmV0dXJuIG1hcFNpemUgIT09IHVuZGVmaW5lZCAmJiBtYXBSZXNvbHV0aW9uICE9PSB1bmRlZmluZWQgPyBuZ2VvUHJpbnRVdGlscy5nZXRPcHRpbWFsU2NhbGUobWFwU2l6ZSwgbWFwUmVzb2x1dGlvbiwgUFJJTlRfUEFQRVJfU0laRV8sIFBSSU5UX1NDQUxFU18pIDogUFJJTlRfU0NBTEVTX1swXTtcbiAgfSk7XG4gIHRoaXMubWFwLm9uKCdwb3N0Y29tcG9zZScsIHBvc3Rjb21wb3NlTGlzdGVuZXIpO1xufVxuXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUucHJpbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXAgPSB0aGlzLm1hcDtcbiAgdmFyIG1hcFNpemUgPSBtYXAuZ2V0U2l6ZSgpO1xuICB2YXIgdmlld1Jlc29sdXRpb24gPSBtYXAuZ2V0VmlldygpLmdldFJlc29sdXRpb24oKTtcbiAgdmFyIHNjYWxlID0gbWFwU2l6ZSAhPT0gdW5kZWZpbmVkICYmIHZpZXdSZXNvbHV0aW9uICE9PSB1bmRlZmluZWQgPyB0aGlzLnByaW50VXRpbHNfLmdldE9wdGltYWxTY2FsZShtYXBTaXplLCB2aWV3UmVzb2x1dGlvbiwgUFJJTlRfUEFQRVJfU0laRV8sIFBSSU5UX1NDQUxFU18pIDogUFJJTlRfU0NBTEVTX1swXTtcbiAgdmFyIGRwaSA9IFBSSU5UX0RQSV87XG4gIHZhciBmb3JtYXQgPSBQUklOVF9GT1JNQVRfO1xuICB2YXIgbGF5b3V0ID0gUFJJTlRfTEFZT1VUXztcbiAgdGhpcy5wcmludFN0YXRlID0gJ1ByaW50aW5nLi4uJztcbiAgdmFyIHNwZWMgPSB0aGlzLnByaW50Xy5jcmVhdGVTcGVjKG1hcCwgc2NhbGUsIGRwaSwgbGF5b3V0LCBmb3JtYXQsIHtcbiAgICAnZGF0YXNvdXJjZSc6IFtdLFxuICAgICdkZWJ1Zyc6IDAsXG4gICAgJ2NvbW1lbnRzJzogJ015IGNvbW1lbnRzJyxcbiAgICAndGl0bGUnOiAnTXkgcHJpbnQnXG4gIH0pO1xuICB0aGlzLnByaW50Xy5jcmVhdGVSZXBvcnQoc3BlYykudGhlbih0aGlzLmhhbmRsZUNyZWF0ZVJlcG9ydFN1Y2Nlc3NfLmJpbmQodGhpcyksIHRoaXMuaGFuZGxlQ3JlYXRlUmVwb3J0RXJyb3JfLmJpbmQodGhpcykpO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZUNyZWF0ZVJlcG9ydFN1Y2Nlc3NfID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgdmFyIG1mUmVzcCA9IHJlc3AuZGF0YTtcbiAgdGhpcy5nZXRTdGF0dXNfKG1mUmVzcC5yZWYpO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmdldFN0YXR1c18gPSBmdW5jdGlvbiAocmVmKSB7XG4gIHRoaXMucHJpbnRfLmdldFN0YXR1cyhyZWYpLnRoZW4odGhpcy5oYW5kbGVHZXRTdGF0dXNTdWNjZXNzXy5iaW5kKHRoaXMsIHJlZiksIHRoaXMuaGFuZGxlR2V0U3RhdHVzRXJyb3JfLmJpbmQodGhpcykpO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmhhbmRsZUNyZWF0ZVJlcG9ydEVycm9yXyA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gIHRoaXMucHJpbnRTdGF0ZSA9ICdQcmludCBlcnJvcic7XG59O1xuXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlR2V0U3RhdHVzU3VjY2Vzc18gPSBmdW5jdGlvbiAocmVmLCByZXNwKSB7XG4gIHZhciBtZlJlc3AgPSByZXNwLmRhdGE7XG4gIHZhciBkb25lID0gbWZSZXNwLmRvbmU7XG5cbiAgaWYgKGRvbmUpIHtcbiAgICB0aGlzLnByaW50U3RhdGUgPSAnJztcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucHJpbnRfLmdldFJlcG9ydFVybChyZWYpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLiR0aW1lb3V0XyhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LmdldFN0YXR1c18ocmVmKTtcbiAgICB9LCAxMDAwLCBmYWxzZSk7XG4gIH1cbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5oYW5kbGVHZXRTdGF0dXNFcnJvcl8gPSBmdW5jdGlvbiAocmVzcCkge1xuICB0aGlzLnByaW50U3RhdGUgPSAnUHJpbnQgZXJyb3InO1xufTtcblxuYXBwbW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9