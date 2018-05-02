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
/******/ 		"layertree": 0
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
/******/ 	deferredModules.push([21,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/layertree.css":
/*!********************************!*\
  !*** ./examples/layertree.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/layertree.js":
/*!*******************************!*\
  !*** ./examples/layertree.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layertree_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layertree.css */ "./examples/layertree.css");
/* harmony import */ var _layertree_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layertree_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_Stamen_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Stamen.js */ "./node_modules/ol/source/Stamen.js");
/* harmony import */ var ngeo_layertree_module_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/layertree/module.js */ "./src/layertree/module.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/message/Popup.js */ "./src/message/Popup.js");
LayertreeController.$inject = ["$http", "$sce", "appGetLayer", "ngeoCreatePopup"];










var module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_layertree_module_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_9__["default"].name]);
var layertreeComponent = {
  bindings: {
    'map': '=appLayertreeMap'
  },
  controller: 'AppLayertreeController',
  template: '<div ngeo-layertree="::$ctrl.tree" ' + 'ngeo-layertree-templateurl="examples/layertree" ' + 'ngeo-layertree-map="$ctrl.map" ' + 'ngeo-layertree-nodelayer="$ctrl.getLayer(node)">' + '</div>'
};
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('examples/layertree', __webpack_require__(/*! ./partials/layertree.html */ "./examples/partials/layertree.html"));
}]);
module.component('appLayertree', layertreeComponent);

function LayertreeController($http, $sce, appGetLayer, ngeoCreatePopup) {
  var _this = this;

  this.tree = undefined;
  $http.get('data/tree.json').then(function (resp) {
    _this.tree = resp.data;
  });
  this.http_ = $http;
  this.sce_ = $sce;
  this.getLayer_ = appGetLayer;
  this.infoPopup_ = ngeoCreatePopup();
  this.promises_ = {};
}

LayertreeController.prototype.getLayer = function (node) {
  return this.getLayer_(node);
};

LayertreeController.prototype.onButtonClick = function (node, layer) {
  var _this2 = this;

  var layerType = node['layerType'];

  if (!(layerType in this.promises_)) {
    this.promises_[layerType] = this.http_.get('data/metadata.html').then(function (resp) {
      var html = _this2.sce_.trustAsHtml(resp.data);

      return html;
    });
  }

  var infoPopup = this.infoPopup_;
  this.promises_[layerType].then(function (html) {
    infoPopup.setTitle(node['name']);
    infoPopup.setContent(html);
    infoPopup.setOpen(true);
  });
};

module.controller('AppLayertreeController', LayertreeController);

var getLayer = function () {
  var layerCache = {};
  return function (node) {
    if (!('layerType' in node)) {
      return null;
    }

    var type = node['layerType'];

    if (type in layerCache) {
      return layerCache[type];
    }

    var source;

    if (type == 'stamenWatercolor') {
      source = new ol_source_Stamen_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        layer: 'watercolor'
      });
    } else if (type == 'stamenTerrain-labels') {
      source = new ol_source_Stamen_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        layer: 'terrain-labels'
      });
    } else if (type == 'osmHumanitarian') {
      source = new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        url: 'https://tile-{a-c}.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      });
    } else if (type == 'osmCycle') {
      source = new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png'
      });
    } else if (type == 'osmTransport') {
      source = new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        url: 'https://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png'
      });
    } else {
      source = new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    }

    var layer = new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      source: source
    });
    layer.set('type', type);
    layerCache[type] = layer;
    return layer;
  };
}();

module.value('appGetLayer', getLayer);

function MainController() {
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_5__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      center: [-10983710.59086991, 4686507.078220731],
      zoom: 4
    })
  });
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./examples/partials/layertree.html":
/*!******************************************!*\
  !*** ./examples/partials/layertree.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<span ng-if="::!layertreeCtrl.isRoot">{{::layertreeCtrl.node.name}}</span>\n<input type="checkbox" ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children"\n    ng-model="layertreeCtrl.getSetActive" ng-model-options="{getterSetter: true}"/>\n<button ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children"\n        ng-click="ctrl.onButtonClick(layertreeCtrl.node, layertreeCtrl.layer)">i</button>\n<ul ng-if="::layertreeCtrl.node.children">\n  <li ng-repeat="node in ::layertreeCtrl.node.children"\n      ngeo-layertree="::node"\n      ngeo-layertree-templateurl="partials/layertree.html"\n      ngeo-layertree-notroot\n      ngeo-layertree-map="layertreeCtrl.map"\n      ngeo-layertree-nodelayerexpr="layertreeCtrl.nodelayerExpr">\n  </li>\n</ul>\n';

}
return __p
}

/***/ }),

/***/ 21:
/*!******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/layertree.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/layertree.js */"./examples/layertree.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ0cmVlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2xheWVydHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9wYXJ0aWFscy9sYXllcnRyZWUuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImxheWVydHJlZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsyMSxcImNvbW1vbnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJMYXllcnRyZWVDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiRzY2VcIiwgXCJhcHBHZXRMYXllclwiLCBcIm5nZW9DcmVhdGVQb3B1cFwiXTtcbmltcG9ydCAnLi9sYXllcnRyZWUuY3NzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgb2xWaWV3IGZyb20gJ29sL1ZpZXcuanMnO1xuaW1wb3J0IG9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IG9sU291cmNlU3RhbWVuIGZyb20gJ29sL3NvdXJjZS9TdGFtZW4uanMnO1xuaW1wb3J0IG5nZW9MYXllcnRyZWVNb2R1bGUgZnJvbSAnbmdlby9sYXllcnRyZWUvbW9kdWxlLmpzJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb01lc3NhZ2VQb3B1cCBmcm9tICduZ2VvL21lc3NhZ2UvUG9wdXAuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2dldHRleHQnLCBuZ2VvTGF5ZXJ0cmVlTW9kdWxlLm5hbWUsIG5nZW9NYXBNb2R1bGUubmFtZSwgbmdlb01lc3NhZ2VQb3B1cC5uYW1lXSk7XG52YXIgbGF5ZXJ0cmVlQ29tcG9uZW50ID0ge1xuICBiaW5kaW5nczoge1xuICAgICdtYXAnOiAnPWFwcExheWVydHJlZU1hcCdcbiAgfSxcbiAgY29udHJvbGxlcjogJ0FwcExheWVydHJlZUNvbnRyb2xsZXInLFxuICB0ZW1wbGF0ZTogJzxkaXYgbmdlby1sYXllcnRyZWU9XCI6OiRjdHJsLnRyZWVcIiAnICsgJ25nZW8tbGF5ZXJ0cmVlLXRlbXBsYXRldXJsPVwiZXhhbXBsZXMvbGF5ZXJ0cmVlXCIgJyArICduZ2VvLWxheWVydHJlZS1tYXA9XCIkY3RybC5tYXBcIiAnICsgJ25nZW8tbGF5ZXJ0cmVlLW5vZGVsYXllcj1cIiRjdHJsLmdldExheWVyKG5vZGUpXCI+JyArICc8L2Rpdj4nXG59O1xubW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCdleGFtcGxlcy9sYXllcnRyZWUnLCByZXF1aXJlKCcuL3BhcnRpYWxzL2xheWVydHJlZS5odG1sJykpO1xufV0pO1xubW9kdWxlLmNvbXBvbmVudCgnYXBwTGF5ZXJ0cmVlJywgbGF5ZXJ0cmVlQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gTGF5ZXJ0cmVlQ29udHJvbGxlcigkaHR0cCwgJHNjZSwgYXBwR2V0TGF5ZXIsIG5nZW9DcmVhdGVQb3B1cCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMudHJlZSA9IHVuZGVmaW5lZDtcbiAgJGh0dHAuZ2V0KCdkYXRhL3RyZWUuanNvbicpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICBfdGhpcy50cmVlID0gcmVzcC5kYXRhO1xuICB9KTtcbiAgdGhpcy5odHRwXyA9ICRodHRwO1xuICB0aGlzLnNjZV8gPSAkc2NlO1xuICB0aGlzLmdldExheWVyXyA9IGFwcEdldExheWVyO1xuICB0aGlzLmluZm9Qb3B1cF8gPSBuZ2VvQ3JlYXRlUG9wdXAoKTtcbiAgdGhpcy5wcm9taXNlc18gPSB7fTtcbn1cblxuTGF5ZXJ0cmVlQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICByZXR1cm4gdGhpcy5nZXRMYXllcl8obm9kZSk7XG59O1xuXG5MYXllcnRyZWVDb250cm9sbGVyLnByb3RvdHlwZS5vbkJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKG5vZGUsIGxheWVyKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHZhciBsYXllclR5cGUgPSBub2RlWydsYXllclR5cGUnXTtcblxuICBpZiAoIShsYXllclR5cGUgaW4gdGhpcy5wcm9taXNlc18pKSB7XG4gICAgdGhpcy5wcm9taXNlc19bbGF5ZXJUeXBlXSA9IHRoaXMuaHR0cF8uZ2V0KCdkYXRhL21ldGFkYXRhLmh0bWwnKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICB2YXIgaHRtbCA9IF90aGlzMi5zY2VfLnRydXN0QXNIdG1sKHJlc3AuZGF0YSk7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGluZm9Qb3B1cCA9IHRoaXMuaW5mb1BvcHVwXztcbiAgdGhpcy5wcm9taXNlc19bbGF5ZXJUeXBlXS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XG4gICAgaW5mb1BvcHVwLnNldFRpdGxlKG5vZGVbJ25hbWUnXSk7XG4gICAgaW5mb1BvcHVwLnNldENvbnRlbnQoaHRtbCk7XG4gICAgaW5mb1BvcHVwLnNldE9wZW4odHJ1ZSk7XG4gIH0pO1xufTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ0FwcExheWVydHJlZUNvbnRyb2xsZXInLCBMYXllcnRyZWVDb250cm9sbGVyKTtcblxudmFyIGdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGF5ZXJDYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoISgnbGF5ZXJUeXBlJyBpbiBub2RlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSBub2RlWydsYXllclR5cGUnXTtcblxuICAgIGlmICh0eXBlIGluIGxheWVyQ2FjaGUpIHtcbiAgICAgIHJldHVybiBsYXllckNhY2hlW3R5cGVdO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2U7XG5cbiAgICBpZiAodHlwZSA9PSAnc3RhbWVuV2F0ZXJjb2xvcicpIHtcbiAgICAgIHNvdXJjZSA9IG5ldyBvbFNvdXJjZVN0YW1lbih7XG4gICAgICAgIGxheWVyOiAnd2F0ZXJjb2xvcidcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnc3RhbWVuVGVycmFpbi1sYWJlbHMnKSB7XG4gICAgICBzb3VyY2UgPSBuZXcgb2xTb3VyY2VTdGFtZW4oe1xuICAgICAgICBsYXllcjogJ3RlcnJhaW4tbGFiZWxzJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdvc21IdW1hbml0YXJpYW4nKSB7XG4gICAgICBzb3VyY2UgPSBuZXcgb2xTb3VyY2VPU00oe1xuICAgICAgICB1cmw6ICdodHRwczovL3RpbGUte2EtY30ub3BlbnN0cmVldG1hcC5mci9ob3Qve3p9L3t4fS97eX0ucG5nJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdvc21DeWNsZScpIHtcbiAgICAgIHNvdXJjZSA9IG5ldyBvbFNvdXJjZU9TTSh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8ve2EtY30udGlsZS50aHVuZGVyZm9yZXN0LmNvbS9jeWNsZS97en0ve3h9L3t5fS5wbmcnXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ29zbVRyYW5zcG9ydCcpIHtcbiAgICAgIHNvdXJjZSA9IG5ldyBvbFNvdXJjZU9TTSh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8ve2EtY30udGlsZS50aHVuZGVyZm9yZXN0LmNvbS90cmFuc3BvcnQve3p9L3t4fS97eX0ucG5nJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvdXJjZSA9IG5ldyBvbFNvdXJjZU9TTSgpO1xuICAgIH1cblxuICAgIHZhciBsYXllciA9IG5ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH0pO1xuICAgIGxheWVyLnNldCgndHlwZScsIHR5cGUpO1xuICAgIGxheWVyQ2FjaGVbdHlwZV0gPSBsYXllcjtcbiAgICByZXR1cm4gbGF5ZXI7XG4gIH07XG59KCk7XG5cbm1vZHVsZS52YWx1ZSgnYXBwR2V0TGF5ZXInLCBnZXRMYXllcik7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCkge1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKClcbiAgICB9KV0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBjZW50ZXI6IFstMTA5ODM3MTAuNTkwODY5OTEsIDQ2ODY1MDcuMDc4MjIwNzMxXSxcbiAgICAgIHpvb206IDRcbiAgICB9KVxuICB9KTtcbn1cblxubW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxzcGFuIG5nLWlmPVwiOjohbGF5ZXJ0cmVlQ3RybC5pc1Jvb3RcIj57ezo6bGF5ZXJ0cmVlQ3RybC5ub2RlLm5hbWV9fTwvc3Bhbj5cXG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmctaWY9XCI6OmxheWVydHJlZUN0cmwubm9kZSAmJiAhbGF5ZXJ0cmVlQ3RybC5ub2RlLmNoaWxkcmVuXCJcXG4gICAgbmctbW9kZWw9XCJsYXllcnRyZWVDdHJsLmdldFNldEFjdGl2ZVwiIG5nLW1vZGVsLW9wdGlvbnM9XCJ7Z2V0dGVyU2V0dGVyOiB0cnVlfVwiLz5cXG48YnV0dG9uIG5nLWlmPVwiOjpsYXllcnRyZWVDdHJsLm5vZGUgJiYgIWxheWVydHJlZUN0cmwubm9kZS5jaGlsZHJlblwiXFxuICAgICAgICBuZy1jbGljaz1cImN0cmwub25CdXR0b25DbGljayhsYXllcnRyZWVDdHJsLm5vZGUsIGxheWVydHJlZUN0cmwubGF5ZXIpXCI+aTwvYnV0dG9uPlxcbjx1bCBuZy1pZj1cIjo6bGF5ZXJ0cmVlQ3RybC5ub2RlLmNoaWxkcmVuXCI+XFxuICA8bGkgbmctcmVwZWF0PVwibm9kZSBpbiA6OmxheWVydHJlZUN0cmwubm9kZS5jaGlsZHJlblwiXFxuICAgICAgbmdlby1sYXllcnRyZWU9XCI6Om5vZGVcIlxcbiAgICAgIG5nZW8tbGF5ZXJ0cmVlLXRlbXBsYXRldXJsPVwicGFydGlhbHMvbGF5ZXJ0cmVlLmh0bWxcIlxcbiAgICAgIG5nZW8tbGF5ZXJ0cmVlLW5vdHJvb3RcXG4gICAgICBuZ2VvLWxheWVydHJlZS1tYXA9XCJsYXllcnRyZWVDdHJsLm1hcFwiXFxuICAgICAgbmdlby1sYXllcnRyZWUtbm9kZWxheWVyZXhwcj1cImxheWVydHJlZUN0cmwubm9kZWxheWVyRXhwclwiPlxcbiAgPC9saT5cXG48L3VsPlxcbic7XG5cbn1cbnJldHVybiBfX3Bcbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9