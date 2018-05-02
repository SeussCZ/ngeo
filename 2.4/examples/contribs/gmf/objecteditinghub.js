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
/******/ 		"objecteditinghub": 0
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
/******/ 	deferredModules.push([19,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/objecteditinghub.css":
/*!****************************************************!*\
  !*** ./contribs/gmf/examples/objecteditinghub.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/objecteditinghub.js":
/*!***************************************************!*\
  !*** ./contribs/gmf/examples/objecteditinghub.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _objecteditinghub_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objecteditinghub.css */ "./contribs/gmf/examples/objecteditinghub.css");
/* harmony import */ var _objecteditinghub_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_objecteditinghub_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gmf_editing_XSDAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/editing/XSDAttributes.js */ "./contribs/gmf/src/editing/XSDAttributes.js");
/* harmony import */ var gmf_objectediting_Manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/objectediting/Manager.js */ "./contribs/gmf/src/objectediting/Manager.js");
/* harmony import */ var gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/theme/Themes.js */ "./contribs/gmf/src/theme/Themes.js");
/* harmony import */ var ol_format_WFS_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/format/WFS.js */ "./node_modules/ol/format/WFS.js");
/* harmony import */ var ngeo_format_XSDAttribute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/format/XSDAttribute.js */ "./src/format/XSDAttribute.js");
MainController.$inject = ["$http", "$q", "$scope", "gmfThemes", "gmfXSDAttributes"];








var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_editing_XSDAttributes_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, gmf_objectediting_Manager_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_theme_Themes_js__WEBPACK_IMPORTED_MODULE_5__["default"].name]);
module.value('gmfTreeUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].GMF_THEMES);
module.value('gmfLayersUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].GMF_LAYERS);
module.constant('defaultTheme', 'Demo');
module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');

function MainController($http, $q, $scope, gmfThemes, gmfXSDAttributes) {
  var _this = this;

  this.http_ = $http;
  this.q_ = $q;
  this.gmfThemes_ = gmfThemes;
  this.gmfXSDAttributes_ = gmfXSDAttributes;
  this.urls = [{
    name: 'oeedit app. (hosted)',
    url: 'apps/oeedit/'
  }, {
    name: 'oeedit app. (dev)',
    url: '../apps/oeedit/'
  }, {
    name: 'example',
    url: 'objectediting.html'
  }];
  this.viewerUrlDev_ = '../apps/oeview/';
  this.viewerUrlHosted_ = 'apps/oeview/';
  this.selectedUrl = this.urls[0];
  this.gmfServers_;
  this.gmfServer_;
  this.gmfLayerNodes = [];
  this.selectedGmfLayerNode = null;
  this.featuresCache_ = {};
  this.features = null;
  this.selectedFeature = null;
  this.geomTypeCache_ = {};
  this.selectedGeomType = undefined;
  $scope.$watch(function () {
    return _this.selectedGmfLayerNode;
  }, function (newVal, oldVal) {
    _this.selectedFeature = null;

    if (newVal) {
      _this.getFeatures_(newVal).then(_this.handleGetFeatures_.bind(_this, newVal));

      _this.getGeometryType_(newVal).then(_this.handleGetGeometryType_.bind(_this, newVal));
    }
  });
  this.themeName = 'ObjectEditing';
  this.gmfThemes_.loadThemes();
  this.gmfThemes_.getOgcServersObject().then(function (ogcServers) {
    _this.gmfServers_ = ogcServers;

    _this.gmfThemes_.getThemesObject().then(function (themes) {
      if (!themes) {
        return;
      }

      var i, ii;
      var theme;

      for (i = 0, ii = themes.length; i < ii; i++) {
        if (themes[i].name === _this.themeName) {
          theme = themes[i];
          break;
        }
      }

      if (!theme) {
        return;
      }

      var groupNode = theme.children[0];
      console.assert(groupNode.ogcServer);
      var gmfServer = _this.gmfServers_[groupNode.ogcServer];

      if (gmfServer && gmfServer.wfsSupport === true && gmfServer.urlWfs) {
        _this.gmfServer_ = gmfServer;
      } else {
        return;
      }

      var gmfLayerNodes = [];

      for (i = 0, ii = groupNode.children.length; i < ii; i++) {
        if (groupNode.children[i].metadata.identifierAttributeField) {
          gmfLayerNodes.push(groupNode.children[i]);
        }
      }

      _this.gmfLayerNodes = gmfLayerNodes;
      _this.selectedGmfLayerNode = _this.gmfLayerNodes[1];
    });
  });
}

MainController.prototype.runEditor = function () {
  var geomType = this.selectedGeomType;
  var feature = this.selectedFeature;
  var layer = this.selectedGmfLayerNode.id;
  var property = this.selectedGmfLayerNode.metadata.identifierAttributeField;
  console.assert(property !== undefined);
  var id = feature.get(property);
  var params = {};
  params[gmf_objectediting_Manager_js__WEBPACK_IMPORTED_MODULE_4__["ObjecteditingParam"].GEOM_TYPE] = geomType;
  params[gmf_objectediting_Manager_js__WEBPACK_IMPORTED_MODULE_4__["ObjecteditingParam"].ID] = id;
  params[gmf_objectediting_Manager_js__WEBPACK_IMPORTED_MODULE_4__["ObjecteditingParam"].LAYER] = layer;
  params[gmf_objectediting_Manager_js__WEBPACK_IMPORTED_MODULE_4__["ObjecteditingParam"].THEME] = this.themeName;
  params[gmf_objectediting_Manager_js__WEBPACK_IMPORTED_MODULE_4__["ObjecteditingParam"].PROPERTY] = property;
  var url = MainController.appendParams(this.selectedUrl.url, params);
  window.open(url);
};

MainController.prototype.runViewerDev = function () {
  this.runViewer_(this.viewerUrlDev_);
};

MainController.prototype.runViewerHosted = function () {
  this.runViewer_(this.viewerUrlHosted_);
};

MainController.prototype.runViewer_ = function (baseUrl) {
  var node = this.selectedGmfLayerNode;
  var nodeId = node.id;
  var nodeName = node.name;
  var nodeIdAttrFieldName = node.metadata.identifierAttributeField;
  console.assert(nodeIdAttrFieldName !== undefined);
  var ids = [];
  var features = this.featuresCache_[nodeId];

  for (var i = 0, ii = features.length; i < ii; i++) {
    ids.push(features[i].get(nodeIdAttrFieldName));
  }

  var params = {};
  params['wfs_layer'] = nodeName;
  params["wfs_" + nodeIdAttrFieldName] = ids.join(',');
  var url = MainController.appendParams(baseUrl, params);
  window.open(url);
};

MainController.prototype.getFeatures_ = function (gmfLayerNode) {
  this.getFeaturesDeferred_ = this.q_.defer();
  var features = this.getFeaturesFromCache_(gmfLayerNode);

  if (features) {
    this.getFeaturesDeferred_.resolve();
  } else {
    this.issueGetFeatures_(gmfLayerNode);
  }

  return this.getFeaturesDeferred_.promise;
};

MainController.prototype.issueGetFeatures_ = function (gmfLayerNode) {
  var _this2 = this;

  var id = gmfLayerNode.id;
  var url = MainController.appendParams(this.gmfServer_.urlWfs, {
    'SERVICE': 'WFS',
    'REQUEST': 'GetFeature',
    'VERSION': '1.1.0',
    'TYPENAME': gmfLayerNode.layers
  });
  this.http_.get(url).then(function (response) {
    var features = new ol_format_WFS_js__WEBPACK_IMPORTED_MODULE_6__["default"]().readFeatures(response.data);
    _this2.featuresCache_[id] = features;

    _this2.getFeaturesDeferred_.resolve();
  });
};

MainController.prototype.handleGetFeatures_ = function (gmfLayerNode) {
  var features = this.getFeaturesFromCache_(gmfLayerNode);
  this.features = features;
  this.selectedFeature = this.features[0];
};

MainController.prototype.getFeaturesFromCache_ = function (gmfLayerNode) {
  var id = gmfLayerNode.id;
  var features = this.featuresCache_[id] || null;
  return features;
};

MainController.prototype.getGeometryType_ = function (gmfLayerNode) {
  this.getGeometryTypeDeferred_ = this.q_.defer();
  var geomType = this.getGeometryTypeFromCache_(gmfLayerNode);

  if (geomType) {
    this.getGeometryTypeDeferred_.resolve();
  } else {
    this.issueGetAttributesRequest_(gmfLayerNode);
  }

  return this.getGeometryTypeDeferred_.promise;
};

MainController.prototype.issueGetAttributesRequest_ = function (gmfLayerNode) {
  this.gmfXSDAttributes_.getAttributes(gmfLayerNode.id).then(function (gmfLayerNode, attributes) {
    var geomAttr = Object(ngeo_format_XSDAttribute_js__WEBPACK_IMPORTED_MODULE_7__["getGeometryAttribute"])(attributes);

    if (geomAttr && geomAttr.geomType) {
      this.geomTypeCache_[gmfLayerNode.id] = geomAttr.geomType;
      this.getGeometryTypeDeferred_.resolve();
    }
  }.bind(this, gmfLayerNode));
};

MainController.prototype.handleGetGeometryType_ = function (gmfLayerNode) {
  var geomType = this.getGeometryTypeFromCache_(gmfLayerNode);
  this.selectedGeomType = geomType;
};

MainController.prototype.getGeometryTypeFromCache_ = function (gmfLayerNode) {
  var id = gmfLayerNode.id;
  var geomType = this.geomTypeCache_[id];
  return geomType;
};

MainController.appendParams = function (uri, params) {
  var keyParams = [];
  Object.keys(params).forEach(function (k) {
    if (params[k] !== null && params[k] !== undefined) {
      keyParams.push(k + "=" + encodeURIComponent(params[k]));
    }
  });
  var qs = keyParams.join('&');
  uri = uri.replace(/[?&]$/, '');
  uri = uri.indexOf('?') === -1 ? uri + "?" : uri + "&";
  return uri + qs;
};

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 19:
/*!**************************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/objecteditinghub.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/objecteditinghub.js */"./contribs/gmf/examples/objecteditinghub.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0ZWRpdGluZ2h1Yi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb250cmlicy9nbWYvZXhhbXBsZXMvb2JqZWN0ZWRpdGluZ2h1Yi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm9iamVjdGVkaXRpbmdodWJcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMTksXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRodHRwXCIsIFwiJHFcIiwgXCIkc2NvcGVcIiwgXCJnbWZUaGVtZXNcIiwgXCJnbWZYU0RBdHRyaWJ1dGVzXCJdO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgYXBwVVJMIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCAnLi9vYmplY3RlZGl0aW5naHViLmNzcyc7XG5pbXBvcnQgZ21mRWRpdGluZ1hTREF0dHJpYnV0ZXMgZnJvbSAnZ21mL2VkaXRpbmcvWFNEQXR0cmlidXRlcy5qcyc7XG5pbXBvcnQgZ21mT2JqZWN0ZWRpdGluZ01hbmFnZXIsIHsgT2JqZWN0ZWRpdGluZ1BhcmFtIH0gZnJvbSAnZ21mL29iamVjdGVkaXRpbmcvTWFuYWdlci5qcyc7XG5pbXBvcnQgZ21mVGhlbWVUaGVtZXMgZnJvbSAnZ21mL3RoZW1lL1RoZW1lcy5qcyc7XG5pbXBvcnQgb2xGb3JtYXRXRlMgZnJvbSAnb2wvZm9ybWF0L1dGUy5qcyc7XG5pbXBvcnQgeyBnZXRHZW9tZXRyeUF0dHJpYnV0ZSB9IGZyb20gJ25nZW8vZm9ybWF0L1hTREF0dHJpYnV0ZS5qcyc7XG52YXIgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ2dtZmFwcCcsIFsnZ2V0dGV4dCcsIGdtZkVkaXRpbmdYU0RBdHRyaWJ1dGVzLm5hbWUsIGdtZk9iamVjdGVkaXRpbmdNYW5hZ2VyLm5hbWUsIGdtZlRoZW1lVGhlbWVzLm5hbWVdKTtcbm1vZHVsZS52YWx1ZSgnZ21mVHJlZVVybCcsIGFwcFVSTC5HTUZfVEhFTUVTKTtcbm1vZHVsZS52YWx1ZSgnZ21mTGF5ZXJzVXJsJywgYXBwVVJMLkdNRl9MQVlFUlMpO1xubW9kdWxlLmNvbnN0YW50KCdkZWZhdWx0VGhlbWUnLCAnRGVtbycpO1xubW9kdWxlLmNvbnN0YW50KCdhbmd1bGFyTG9jYWxlU2NyaXB0JywgJy4uL2J1aWxkL2FuZ3VsYXItbG9jYWxlX3t7bG9jYWxlfX0uanMnKTtcblxuZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIoJGh0dHAsICRxLCAkc2NvcGUsIGdtZlRoZW1lcywgZ21mWFNEQXR0cmlidXRlcykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMuaHR0cF8gPSAkaHR0cDtcbiAgdGhpcy5xXyA9ICRxO1xuICB0aGlzLmdtZlRoZW1lc18gPSBnbWZUaGVtZXM7XG4gIHRoaXMuZ21mWFNEQXR0cmlidXRlc18gPSBnbWZYU0RBdHRyaWJ1dGVzO1xuICB0aGlzLnVybHMgPSBbe1xuICAgIG5hbWU6ICdvZWVkaXQgYXBwLiAoaG9zdGVkKScsXG4gICAgdXJsOiAnYXBwcy9vZWVkaXQvJ1xuICB9LCB7XG4gICAgbmFtZTogJ29lZWRpdCBhcHAuIChkZXYpJyxcbiAgICB1cmw6ICcuLi9hcHBzL29lZWRpdC8nXG4gIH0sIHtcbiAgICBuYW1lOiAnZXhhbXBsZScsXG4gICAgdXJsOiAnb2JqZWN0ZWRpdGluZy5odG1sJ1xuICB9XTtcbiAgdGhpcy52aWV3ZXJVcmxEZXZfID0gJy4uL2FwcHMvb2V2aWV3Lyc7XG4gIHRoaXMudmlld2VyVXJsSG9zdGVkXyA9ICdhcHBzL29ldmlldy8nO1xuICB0aGlzLnNlbGVjdGVkVXJsID0gdGhpcy51cmxzWzBdO1xuICB0aGlzLmdtZlNlcnZlcnNfO1xuICB0aGlzLmdtZlNlcnZlcl87XG4gIHRoaXMuZ21mTGF5ZXJOb2RlcyA9IFtdO1xuICB0aGlzLnNlbGVjdGVkR21mTGF5ZXJOb2RlID0gbnVsbDtcbiAgdGhpcy5mZWF0dXJlc0NhY2hlXyA9IHt9O1xuICB0aGlzLmZlYXR1cmVzID0gbnVsbDtcbiAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBudWxsO1xuICB0aGlzLmdlb21UeXBlQ2FjaGVfID0ge307XG4gIHRoaXMuc2VsZWN0ZWRHZW9tVHlwZSA9IHVuZGVmaW5lZDtcbiAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzLnNlbGVjdGVkR21mTGF5ZXJOb2RlO1xuICB9LCBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBfdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBudWxsO1xuXG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgX3RoaXMuZ2V0RmVhdHVyZXNfKG5ld1ZhbCkudGhlbihfdGhpcy5oYW5kbGVHZXRGZWF0dXJlc18uYmluZChfdGhpcywgbmV3VmFsKSk7XG5cbiAgICAgIF90aGlzLmdldEdlb21ldHJ5VHlwZV8obmV3VmFsKS50aGVuKF90aGlzLmhhbmRsZUdldEdlb21ldHJ5VHlwZV8uYmluZChfdGhpcywgbmV3VmFsKSk7XG4gICAgfVxuICB9KTtcbiAgdGhpcy50aGVtZU5hbWUgPSAnT2JqZWN0RWRpdGluZyc7XG4gIHRoaXMuZ21mVGhlbWVzXy5sb2FkVGhlbWVzKCk7XG4gIHRoaXMuZ21mVGhlbWVzXy5nZXRPZ2NTZXJ2ZXJzT2JqZWN0KCkudGhlbihmdW5jdGlvbiAob2djU2VydmVycykge1xuICAgIF90aGlzLmdtZlNlcnZlcnNfID0gb2djU2VydmVycztcblxuICAgIF90aGlzLmdtZlRoZW1lc18uZ2V0VGhlbWVzT2JqZWN0KCkudGhlbihmdW5jdGlvbiAodGhlbWVzKSB7XG4gICAgICBpZiAoIXRoZW1lcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpLCBpaTtcbiAgICAgIHZhciB0aGVtZTtcblxuICAgICAgZm9yIChpID0gMCwgaWkgPSB0aGVtZXMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICBpZiAodGhlbWVzW2ldLm5hbWUgPT09IF90aGlzLnRoZW1lTmFtZSkge1xuICAgICAgICAgIHRoZW1lID0gdGhlbWVzW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZ3JvdXBOb2RlID0gdGhlbWUuY2hpbGRyZW5bMF07XG4gICAgICBjb25zb2xlLmFzc2VydChncm91cE5vZGUub2djU2VydmVyKTtcbiAgICAgIHZhciBnbWZTZXJ2ZXIgPSBfdGhpcy5nbWZTZXJ2ZXJzX1tncm91cE5vZGUub2djU2VydmVyXTtcblxuICAgICAgaWYgKGdtZlNlcnZlciAmJiBnbWZTZXJ2ZXIud2ZzU3VwcG9ydCA9PT0gdHJ1ZSAmJiBnbWZTZXJ2ZXIudXJsV2ZzKSB7XG4gICAgICAgIF90aGlzLmdtZlNlcnZlcl8gPSBnbWZTZXJ2ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBnbWZMYXllck5vZGVzID0gW107XG5cbiAgICAgIGZvciAoaSA9IDAsIGlpID0gZ3JvdXBOb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgaWYgKGdyb3VwTm9kZS5jaGlsZHJlbltpXS5tZXRhZGF0YS5pZGVudGlmaWVyQXR0cmlidXRlRmllbGQpIHtcbiAgICAgICAgICBnbWZMYXllck5vZGVzLnB1c2goZ3JvdXBOb2RlLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5nbWZMYXllck5vZGVzID0gZ21mTGF5ZXJOb2RlcztcbiAgICAgIF90aGlzLnNlbGVjdGVkR21mTGF5ZXJOb2RlID0gX3RoaXMuZ21mTGF5ZXJOb2Rlc1sxXTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5ydW5FZGl0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBnZW9tVHlwZSA9IHRoaXMuc2VsZWN0ZWRHZW9tVHlwZTtcbiAgdmFyIGZlYXR1cmUgPSB0aGlzLnNlbGVjdGVkRmVhdHVyZTtcbiAgdmFyIGxheWVyID0gdGhpcy5zZWxlY3RlZEdtZkxheWVyTm9kZS5pZDtcbiAgdmFyIHByb3BlcnR5ID0gdGhpcy5zZWxlY3RlZEdtZkxheWVyTm9kZS5tZXRhZGF0YS5pZGVudGlmaWVyQXR0cmlidXRlRmllbGQ7XG4gIGNvbnNvbGUuYXNzZXJ0KHByb3BlcnR5ICE9PSB1bmRlZmluZWQpO1xuICB2YXIgaWQgPSBmZWF0dXJlLmdldChwcm9wZXJ0eSk7XG4gIHZhciBwYXJhbXMgPSB7fTtcbiAgcGFyYW1zW09iamVjdGVkaXRpbmdQYXJhbS5HRU9NX1RZUEVdID0gZ2VvbVR5cGU7XG4gIHBhcmFtc1tPYmplY3RlZGl0aW5nUGFyYW0uSURdID0gaWQ7XG4gIHBhcmFtc1tPYmplY3RlZGl0aW5nUGFyYW0uTEFZRVJdID0gbGF5ZXI7XG4gIHBhcmFtc1tPYmplY3RlZGl0aW5nUGFyYW0uVEhFTUVdID0gdGhpcy50aGVtZU5hbWU7XG4gIHBhcmFtc1tPYmplY3RlZGl0aW5nUGFyYW0uUFJPUEVSVFldID0gcHJvcGVydHk7XG4gIHZhciB1cmwgPSBNYWluQ29udHJvbGxlci5hcHBlbmRQYXJhbXModGhpcy5zZWxlY3RlZFVybC51cmwsIHBhcmFtcyk7XG4gIHdpbmRvdy5vcGVuKHVybCk7XG59O1xuXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUucnVuVmlld2VyRGV2ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJ1blZpZXdlcl8odGhpcy52aWV3ZXJVcmxEZXZfKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5ydW5WaWV3ZXJIb3N0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucnVuVmlld2VyXyh0aGlzLnZpZXdlclVybEhvc3RlZF8pO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLnJ1blZpZXdlcl8gPSBmdW5jdGlvbiAoYmFzZVVybCkge1xuICB2YXIgbm9kZSA9IHRoaXMuc2VsZWN0ZWRHbWZMYXllck5vZGU7XG4gIHZhciBub2RlSWQgPSBub2RlLmlkO1xuICB2YXIgbm9kZU5hbWUgPSBub2RlLm5hbWU7XG4gIHZhciBub2RlSWRBdHRyRmllbGROYW1lID0gbm9kZS5tZXRhZGF0YS5pZGVudGlmaWVyQXR0cmlidXRlRmllbGQ7XG4gIGNvbnNvbGUuYXNzZXJ0KG5vZGVJZEF0dHJGaWVsZE5hbWUgIT09IHVuZGVmaW5lZCk7XG4gIHZhciBpZHMgPSBbXTtcbiAgdmFyIGZlYXR1cmVzID0gdGhpcy5mZWF0dXJlc0NhY2hlX1tub2RlSWRdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICBpZHMucHVzaChmZWF0dXJlc1tpXS5nZXQobm9kZUlkQXR0ckZpZWxkTmFtZSkpO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IHt9O1xuICBwYXJhbXNbJ3dmc19sYXllciddID0gbm9kZU5hbWU7XG4gIHBhcmFtc1tcIndmc19cIiArIG5vZGVJZEF0dHJGaWVsZE5hbWVdID0gaWRzLmpvaW4oJywnKTtcbiAgdmFyIHVybCA9IE1haW5Db250cm9sbGVyLmFwcGVuZFBhcmFtcyhiYXNlVXJsLCBwYXJhbXMpO1xuICB3aW5kb3cub3Blbih1cmwpO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmdldEZlYXR1cmVzXyA9IGZ1bmN0aW9uIChnbWZMYXllck5vZGUpIHtcbiAgdGhpcy5nZXRGZWF0dXJlc0RlZmVycmVkXyA9IHRoaXMucV8uZGVmZXIoKTtcbiAgdmFyIGZlYXR1cmVzID0gdGhpcy5nZXRGZWF0dXJlc0Zyb21DYWNoZV8oZ21mTGF5ZXJOb2RlKTtcblxuICBpZiAoZmVhdHVyZXMpIHtcbiAgICB0aGlzLmdldEZlYXR1cmVzRGVmZXJyZWRfLnJlc29sdmUoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzc3VlR2V0RmVhdHVyZXNfKGdtZkxheWVyTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXRGZWF0dXJlc0RlZmVycmVkXy5wcm9taXNlO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmlzc3VlR2V0RmVhdHVyZXNfID0gZnVuY3Rpb24gKGdtZkxheWVyTm9kZSkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB2YXIgaWQgPSBnbWZMYXllck5vZGUuaWQ7XG4gIHZhciB1cmwgPSBNYWluQ29udHJvbGxlci5hcHBlbmRQYXJhbXModGhpcy5nbWZTZXJ2ZXJfLnVybFdmcywge1xuICAgICdTRVJWSUNFJzogJ1dGUycsXG4gICAgJ1JFUVVFU1QnOiAnR2V0RmVhdHVyZScsXG4gICAgJ1ZFUlNJT04nOiAnMS4xLjAnLFxuICAgICdUWVBFTkFNRSc6IGdtZkxheWVyTm9kZS5sYXllcnNcbiAgfSk7XG4gIHRoaXMuaHR0cF8uZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICB2YXIgZmVhdHVyZXMgPSBuZXcgb2xGb3JtYXRXRlMoKS5yZWFkRmVhdHVyZXMocmVzcG9uc2UuZGF0YSk7XG4gICAgX3RoaXMyLmZlYXR1cmVzQ2FjaGVfW2lkXSA9IGZlYXR1cmVzO1xuXG4gICAgX3RoaXMyLmdldEZlYXR1cmVzRGVmZXJyZWRfLnJlc29sdmUoKTtcbiAgfSk7XG59O1xuXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuaGFuZGxlR2V0RmVhdHVyZXNfID0gZnVuY3Rpb24gKGdtZkxheWVyTm9kZSkge1xuICB2YXIgZmVhdHVyZXMgPSB0aGlzLmdldEZlYXR1cmVzRnJvbUNhY2hlXyhnbWZMYXllck5vZGUpO1xuICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZXM7XG4gIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gdGhpcy5mZWF0dXJlc1swXTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5nZXRGZWF0dXJlc0Zyb21DYWNoZV8gPSBmdW5jdGlvbiAoZ21mTGF5ZXJOb2RlKSB7XG4gIHZhciBpZCA9IGdtZkxheWVyTm9kZS5pZDtcbiAgdmFyIGZlYXR1cmVzID0gdGhpcy5mZWF0dXJlc0NhY2hlX1tpZF0gfHwgbnVsbDtcbiAgcmV0dXJuIGZlYXR1cmVzO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmdldEdlb21ldHJ5VHlwZV8gPSBmdW5jdGlvbiAoZ21mTGF5ZXJOb2RlKSB7XG4gIHRoaXMuZ2V0R2VvbWV0cnlUeXBlRGVmZXJyZWRfID0gdGhpcy5xXy5kZWZlcigpO1xuICB2YXIgZ2VvbVR5cGUgPSB0aGlzLmdldEdlb21ldHJ5VHlwZUZyb21DYWNoZV8oZ21mTGF5ZXJOb2RlKTtcblxuICBpZiAoZ2VvbVR5cGUpIHtcbiAgICB0aGlzLmdldEdlb21ldHJ5VHlwZURlZmVycmVkXy5yZXNvbHZlKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc3N1ZUdldEF0dHJpYnV0ZXNSZXF1ZXN0XyhnbWZMYXllck5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZ2V0R2VvbWV0cnlUeXBlRGVmZXJyZWRfLnByb21pc2U7XG59O1xuXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuaXNzdWVHZXRBdHRyaWJ1dGVzUmVxdWVzdF8gPSBmdW5jdGlvbiAoZ21mTGF5ZXJOb2RlKSB7XG4gIHRoaXMuZ21mWFNEQXR0cmlidXRlc18uZ2V0QXR0cmlidXRlcyhnbWZMYXllck5vZGUuaWQpLnRoZW4oZnVuY3Rpb24gKGdtZkxheWVyTm9kZSwgYXR0cmlidXRlcykge1xuICAgIHZhciBnZW9tQXR0ciA9IGdldEdlb21ldHJ5QXR0cmlidXRlKGF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKGdlb21BdHRyICYmIGdlb21BdHRyLmdlb21UeXBlKSB7XG4gICAgICB0aGlzLmdlb21UeXBlQ2FjaGVfW2dtZkxheWVyTm9kZS5pZF0gPSBnZW9tQXR0ci5nZW9tVHlwZTtcbiAgICAgIHRoaXMuZ2V0R2VvbWV0cnlUeXBlRGVmZXJyZWRfLnJlc29sdmUoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzLCBnbWZMYXllck5vZGUpKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5oYW5kbGVHZXRHZW9tZXRyeVR5cGVfID0gZnVuY3Rpb24gKGdtZkxheWVyTm9kZSkge1xuICB2YXIgZ2VvbVR5cGUgPSB0aGlzLmdldEdlb21ldHJ5VHlwZUZyb21DYWNoZV8oZ21mTGF5ZXJOb2RlKTtcbiAgdGhpcy5zZWxlY3RlZEdlb21UeXBlID0gZ2VvbVR5cGU7XG59O1xuXG5NYWluQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0R2VvbWV0cnlUeXBlRnJvbUNhY2hlXyA9IGZ1bmN0aW9uIChnbWZMYXllck5vZGUpIHtcbiAgdmFyIGlkID0gZ21mTGF5ZXJOb2RlLmlkO1xuICB2YXIgZ2VvbVR5cGUgPSB0aGlzLmdlb21UeXBlQ2FjaGVfW2lkXTtcbiAgcmV0dXJuIGdlb21UeXBlO1xufTtcblxuTWFpbkNvbnRyb2xsZXIuYXBwZW5kUGFyYW1zID0gZnVuY3Rpb24gKHVyaSwgcGFyYW1zKSB7XG4gIHZhciBrZXlQYXJhbXMgPSBbXTtcbiAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKHBhcmFtc1trXSAhPT0gbnVsbCAmJiBwYXJhbXNba10gIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5UGFyYW1zLnB1c2goayArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trXSkpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBxcyA9IGtleVBhcmFtcy5qb2luKCcmJyk7XG4gIHVyaSA9IHVyaS5yZXBsYWNlKC9bPyZdJC8sICcnKTtcbiAgdXJpID0gdXJpLmluZGV4T2YoJz8nKSA9PT0gLTEgPyB1cmkgKyBcIj9cIiA6IHVyaSArIFwiJlwiO1xuICByZXR1cm4gdXJpICsgcXM7XG59O1xuXG5tb2R1bGUuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9