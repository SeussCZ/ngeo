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
/******/ 		"attributes": 0
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
/******/ 	deferredModules.push([2,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/attributes.js":
/*!********************************!*\
  !*** ./examples/attributes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ngeo_format_XSDAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/format/XSDAttribute.js */ \"./src/format/XSDAttribute.js\");\n/* harmony import */ var ngeo_editing_attributesComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/editing/attributesComponent.js */ \"./src/editing/attributesComponent.js\");\n/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Feature.js */ \"./node_modules/ol/Feature.js\");\n/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/map/module.js */ \"./src/map/module.js\");\nMainController.$inject = [\"$http\", \"$timeout\", \"$scope\"];\n\n\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].name, ngeo_editing_attributesComponent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name]);\n\nfunction MainController($http, $timeout, $scope) {\n  var _this = this;\n\n  this.timeout_ = $timeout;\n  this.attributes = null;\n  this.disabled = false;\n  this.feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    'name': 'A feature',\n    'kind': 'house'\n  });\n  $http.get('data/xsdattributes.xml').then(this.handleXSDAttributeGet_.bind(this));\n  this.log = '';\n  $scope.$watch(function () {\n    return _this.feature.get('name');\n  }, function (newValue, oldValue) {\n    if (newValue !== oldValue) {\n      _this.appendLog(\"name changed from '\" + oldValue + \"' to '\" + newValue + \"'\");\n    }\n  });\n  $scope.$watch(function () {\n    return _this.feature.get('kind');\n  }, function (newValue, oldValue) {\n    if (newValue !== oldValue) {\n      _this.appendLog(\"kind changed from '\" + oldValue + \"' to '\" + newValue + \"'\");\n    }\n  });\n}\n\nMainController.prototype.handleXSDAttributeGet_ = function (resp) {\n  var format = new ngeo_format_XSDAttribute_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  var attributes = format.read(resp.data);\n  this.attributes = attributes;\n  return attributes;\n};\n\nMainController.prototype.updateName = function () {\n  var _this2 = this;\n\n  this.timeout_(function () {\n    _this2.feature.set('name', 'An alternate name');\n  }, 0);\n};\n\nMainController.prototype.appendLog = function (newMessage) {\n  this.log = newMessage + \"\\n\" + this.log;\n};\n\nmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./examples/attributes.js?");

/***/ }),

/***/ "./src/format/XSDAttribute.js":
/*!************************************!*\
  !*** ./src/format/XSDAttribute.js ***!
  \************************************/
/*! exports provided: getGeometryAttribute, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGeometryAttribute\", function() { return getGeometryAttribute; });\n/* harmony import */ var ngeo_format_Attribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/format/Attribute.js */ \"./src/format/Attribute.js\");\n/* harmony import */ var ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/format/AttributeType.js */ \"./src/format/AttributeType.js\");\n/* harmony import */ var ol_format_XML_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/format/XML.js */ \"./node_modules/ol/format/XML.js\");\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\n\n\n\n\nvar XSDAttribute = function (_olFormatXML) {\n  _inheritsLoose(XSDAttribute, _olFormatXML);\n\n  function XSDAttribute() {\n    return _olFormatXML.apply(this, arguments) || this;\n  }\n\n  var _proto = XSDAttribute.prototype;\n\n  _proto.read = function read(source) {\n    return ol_format_XML_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prototype.read.call(this, source);\n  };\n\n  _proto.readFromDocument = function readFromDocument(doc) {\n    console.assert(doc.nodeType == Node.DOCUMENT_NODE, 'doc.nodeType should be DOCUMENT');\n    var n;\n\n    for (n = doc.firstChild; n; n = n.nextSibling) {\n      if (n.nodeType == Node.ELEMENT_NODE) {\n        if (!(n instanceof Element)) {\n          throw new Error('Wrong type');\n        }\n\n        return this.readFromNode(n);\n      }\n    }\n\n    return null;\n  };\n\n  _proto.readFromNode = function readFromNode(node) {\n    console.assert(node.localName == 'schema', 'localName should be schema');\n    var elements = node.getElementsByTagName('element');\n\n    if (!elements.length) {\n      elements = node.getElementsByTagName('xsd:element');\n    }\n\n    var attributes = [];\n    var attribute;\n\n    for (var i = 0, ii = elements.length; i < ii; i++) {\n      attribute = this.readFromElementNode_(elements[i]);\n\n      if (attribute) {\n        attributes.push(attribute);\n      }\n    }\n\n    return attributes;\n  };\n\n  _proto.readFromElementNode_ = function readFromElementNode_(node) {\n    console.assert(node.nodeType == Node.ELEMENT_NODE, 'node.nodeType should be ELEMENT');\n    var elementNode = node;\n    var name = elementNode.getAttribute('name');\n\n    if (!name) {\n      throw new Error('name should be defined in element node');\n    }\n\n    var alias = elementNode.getAttribute('alias');\n    var nillable = elementNode.getAttribute('nillable');\n    var required = nillable !== 'true';\n    var readonlyEls = elementNode.getElementsByTagName('readonly');\n    var readonly = readonlyEls[0] ? readonlyEls[0].getAttribute('value') === 'true' : false;\n    var attribute = {\n      name: name,\n      readonly: readonly,\n      required: required\n    };\n\n    if (alias) {\n      attribute.alias = alias;\n    }\n\n    var type = elementNode.getAttribute('type');\n\n    if (type) {\n      if (!Object(ngeo_format_Attribute_js__WEBPACK_IMPORTED_MODULE_0__[\"setGeometryType\"])(attribute, type)) {\n        this.setAttributeByXsdType_(attribute, type);\n      }\n    } else {\n      var enumerations = elementNode.getElementsByTagName('enumeration');\n\n      if (!enumerations.length) {\n        enumerations = elementNode.getElementsByTagName('xsd:enumeration');\n      }\n\n      if (enumerations.length) {\n        attribute.type = ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SELECT;\n        var choices = [];\n\n        for (var i = 0, ii = enumerations.length; i < ii; i++) {\n          var value = enumerations[i].getAttribute('value');\n\n          if (!value) {\n            throw new Error('Missing value');\n          }\n\n          choices.push(value);\n        }\n\n        attribute.choices = choices;\n      } else {\n        var restrictions = elementNode.getElementsByTagName('restriction');\n\n        if (!restrictions.length) {\n          restrictions = elementNode.getElementsByTagName('xsd:restriction');\n        }\n\n        if (restrictions.length && restrictions[0]) {\n          var restrictionNode = restrictions[0];\n          var base = restrictionNode.getAttribute('base');\n\n          if (!base) {\n            throw new Error('Missing base');\n          }\n\n          this.setAttributeByXsdType_(attribute, base);\n          var maxLengths = elementNode.getElementsByTagName('maxLength');\n\n          if (!maxLengths.length) {\n            maxLengths = elementNode.getElementsByTagName('xsd:maxLength');\n          }\n\n          if (maxLengths.length && maxLengths[0]) {\n            attribute.maxLength = Number(maxLengths[0].getAttribute('value'));\n          }\n        }\n      }\n    }\n\n    if (!attribute.type) {\n      return null;\n    }\n\n    console.assert(attribute.type);\n    return attribute;\n  };\n\n  _proto.setAttributeByXsdType_ = function setAttributeByXsdType_(attribute, type) {\n    if (type === 'xsd:boolean') {\n      attribute.type = ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BOOLEAN;\n    } else if (type === 'xsd:date') {\n      attribute.type = ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DATE;\n    } else if (type === 'xsd:dateTime') {\n      attribute.type = ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DATETIME;\n    } else if (type === 'xsd:time') {\n      attribute.type = ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TIME;\n    } else if (type === 'xsd:decimal' || type === 'xsd:double') {\n      attribute.type = ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].NUMBER;\n      attribute.numType = 'float';\n    } else if (type === 'xsd:integer') {\n      attribute.type = ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].NUMBER;\n      attribute.numType = 'integer';\n    } else if (type === 'xsd:string') {\n      attribute.type = ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TEXT;\n    }\n  };\n\n  return XSDAttribute;\n}(ol_format_XML_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nfunction getGeometryAttribute(attributes) {\n  var geomAttribute = null;\n\n  for (var i = 0, ii = attributes.length; i < ii; i++) {\n    if (attributes[i].type === ngeo_format_AttributeType_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GEOMETRY) {\n      geomAttribute = attributes[i];\n      break;\n    }\n  }\n\n  return geomAttribute;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (XSDAttribute);\n\n//# sourceURL=webpack:///./src/format/XSDAttribute.js?");

/***/ }),

/***/ 2:
/*!*******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/attributes.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/attributes.js */\"./examples/attributes.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/attributes.js?");

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