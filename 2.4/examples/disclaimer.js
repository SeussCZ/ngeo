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
/******/ 		"disclaimer": 0
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
/******/ 	deferredModules.push([12,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/disclaimer.css":
/*!*********************************!*\
  !*** ./examples/disclaimer.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/disclaimer.js":
/*!********************************!*\
  !*** ./examples/disclaimer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _disclaimer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disclaimer.css */ "./examples/disclaimer.css");
/* harmony import */ var _disclaimer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_disclaimer_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_src_tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/src/tooltip.js */ "./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngeo_message_Disclaimer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/message/Disclaimer.js */ "./src/message/Disclaimer.js");
/* harmony import */ var ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/message/Message.js */ "./src/message/Message.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
MainController.$inject = ["ngeoDisclaimer"];










var module = angular__WEBPACK_IMPORTED_MODULE_2___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_9__["default"].name, ngeo_message_Disclaimer_js__WEBPACK_IMPORTED_MODULE_3__["default"].name]);

function MainController(ngeoDisclaimer) {
  this.disclaimer = ngeoDisclaimer;
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_8__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
      center: [0, 0],
      zoom: 4
    })
  });
  this.successMsg_ = 'Disclaimer with success style';
  this.infoMsg_ = 'Disclaimer with info style';
  this.warningMsg_ = 'Disclaimer with warning style';
  this.errorMsg_ = 'Disclaimer with error style';
  this.inMapMsgs_ = ['Disclaimer inside the map', 'An other message ', 'Map contributors', 'This is a long message inside a map'];
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    trigger: 'hover'
  });
}

MainController.prototype.success = function () {
  this.disclaimer.success(this.successMsg_);
};

MainController.prototype.info = function () {
  this.disclaimer.info(this.infoMsg_);
};

MainController.prototype.warn = function () {
  this.disclaimer.warn(this.warningMsg_);
};

MainController.prototype.error = function () {
  this.disclaimer.error(this.errorMsg_);
};

MainController.prototype.inMap = function () {
  this.inMapMsgs_.forEach(function (message) {
    this.disclaimer.alert({
      msg: message,
      target: '#disclaimers-in-map',
      type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_4__["MessageType"].WARNING
    });
  }, this);
};

MainController.prototype.closeAll = function () {
  this.disclaimer.close({
    msg: this.successMsg_,
    type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_4__["MessageType"].SUCCESS
  });
  this.disclaimer.close({
    msg: this.infoMsg_,
    type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_4__["MessageType"].INFORMATION
  });
  this.disclaimer.close({
    msg: this.warningMsg_,
    type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_4__["MessageType"].WARNING
  });
  this.disclaimer.close({
    msg: this.errorMsg_,
    type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_4__["MessageType"].ERROR
  });
  this.inMapMsgs_.forEach(function (message) {
    this.disclaimer.close({
      msg: message,
      type: ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_4__["MessageType"].WARNING
    });
  }, this);
};

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/message/Disclaimer.js":
/*!***********************************!*\
  !*** ./src/message/Disclaimer.js ***!
  \***********************************/
/*! exports provided: MessageDisclaimerService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDisclaimerService", function() { return MessageDisclaimerService; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_src_alert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/src/alert.js */ "./node_modules/bootstrap/js/src/alert.js");
/* harmony import */ var ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/message/Popup.js */ "./src/message/Popup.js");
/* harmony import */ var ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/message/Message.js */ "./src/message/Message.js");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/sass/font.scss */ "./src/sass/font.scss");
/* harmony import */ var ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngeo_sass_font_scss__WEBPACK_IMPORTED_MODULE_4__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var MessageDisclaimerService = function (_ngeoMessageMessage) {
  MessageDisclaimerService.$inject = ["$sce", "gettextCatalog", "ngeoCreatePopup"];

  _inheritsLoose(MessageDisclaimerService, _ngeoMessageMessage);

  function MessageDisclaimerService($sce, gettextCatalog, ngeoCreatePopup) {
    var _this;

    _this = _ngeoMessageMessage.call(this) || this;
    _this.sce_ = $sce;
    _this.gettextCatalog_ = gettextCatalog;
    _this.createPopup_ = ngeoCreatePopup;
    var container = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element('<div class="ngeo-disclaimer"></div>');
    angular__WEBPACK_IMPORTED_MODULE_0___default.a.element(document.body).append(container);
    _this.container_ = container;
    _this.messages_ = {};
    _this.messagesConsumerCount_ = {};
    _this.uids_ = {};
    return _this;
  }

  var _proto = MessageDisclaimerService.prototype;

  _proto.alert = function alert(object) {
    this.show(object);
  };

  _proto.close = function close(object) {
    var _this2 = this;

    var msgObjects = this.getMessageObjects(object);
    msgObjects.forEach(function (message) {
      return _this2.closeMessage_(message);
    });
  };

  _proto.showMessage = function showMessage(message) {
    var _this3 = this;

    var gettextCatalog = this.gettextCatalog_;
    var type = message.type;
    console.assert(typeof type == 'string', 'Type should be set.');
    var uid = this.getMessageUid_(message);

    if (this.uids_[uid]) {
      return;
    }

    this.uids_[uid] = true;

    if (message.popup === true) {
      var popup = this.createPopup_();
      var content = this.sce_.trustAsHtml(message.msg);
      popup.open({
        autoDestroy: true,
        content: content,
        title: '&nbsp;'
      });
      popup.scope.$watch('open', function (newVal) {
        if (!newVal) {
          _this3.closeMessage_(message);
        }
      });
      this.messages_[uid] = popup;
    } else {
      var compatibleMessageUid = this.getCompatibleMessageUid_(message);

      if (this.messages_[compatibleMessageUid]) {
        this.messagesConsumerCount_[compatibleMessageUid]++;
        return;
      }

      var classNames = ['alert', 'fade', 'alert-dismissible', 'show'];

      switch (type) {
        case ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["MessageType"].ERROR:
          classNames.push('alert-danger');
          break;

        case ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["MessageType"].INFORMATION:
          classNames.push('alert-info');
          break;

        case ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SUCCESS:
          classNames.push('alert-success');
          break;

        case ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["MessageType"].WARNING:
          classNames.push('alert-warning');
          break;

        default:
          break;
      }

      var el = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element("<div role=\"alert\" class=\"" + classNames.join(' ') + "\"></div>");
      var button = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element("<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"" + gettextCatalog.getString('Close') + "\"><span aria-hidden=\"true\" class=\"fa fa-times\"></span></button>");
      var msg = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element('<span />').html(message.msg);
      el.append(button).append(msg);
      var container;

      if (message.target) {
        container = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element(message.target);
      } else {
        container = this.container_;
      }

      container.append(el);
      el.addClass('show');
      el.on('closed.bs.alert', function () {
        _this3.closeMessage_(message, true);
      });
      this.messages_[compatibleMessageUid] = el;
      this.messagesConsumerCount_[compatibleMessageUid] = 1;
    }
  };

  _proto.getMessageUid_ = function getMessageUid_(message) {
    return message.msg + "-" + message.type + "-" + message.layerUid;
  };

  _proto.getCompatibleMessageUid_ = function getCompatibleMessageUid_(message) {
    return message.msg + "-" + message.type;
  };

  _proto.closeMessage_ = function closeMessage_(message, force) {
    if (force === void 0) {
      force = false;
    }

    var uid = this.getMessageUid_(message);

    if (!this.uids_[uid]) {
      return;
    }

    delete this.uids_[uid];
    var compatibleMessageUid = this.getCompatibleMessageUid_(message);

    if (force) {
      this.messagesConsumerCount_[compatibleMessageUid] = 0;
    } else {
      this.messagesConsumerCount_[compatibleMessageUid]--;
    }

    if (this.messagesConsumerCount_[compatibleMessageUid] > 0) {
      return;
    }

    var obj = this.messages_[compatibleMessageUid];

    if (obj instanceof ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_2__["MessagePopup"]) {
      var mpObj = obj;

      if (mpObj.getOpen()) {
        mpObj.setOpen(false);
      }
    } else {
      var jqueryObj = obj;

      if (jqueryObj.hasClass('show')) {
        jqueryObj.alert('close');
      }
    }

    delete this.messages_[compatibleMessageUid];
    delete this.messagesConsumerCount_[compatibleMessageUid];
  };

  return MessageDisclaimerService;
}(ngeo_message_Message_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoDisclaimer', [ngeo_message_Popup_js__WEBPACK_IMPORTED_MODULE_2__["default"].name]);
module.service('ngeoDisclaimer', MessageDisclaimerService);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 12:
/*!*******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/disclaimer.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/disclaimer.js */"./examples/disclaimer.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY2xhaW1lci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kaXNjbGFpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlL0Rpc2NsYWltZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJkaXNjbGFpbWVyXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzEyLFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIk1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCJuZ2VvRGlzY2xhaW1lclwiXTtcbmltcG9ydCAnLi9kaXNjbGFpbWVyLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcC5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCBuZ2VvTWVzc2FnZURpc2NsYWltZXIgZnJvbSAnbmdlby9tZXNzYWdlL0Rpc2NsYWltZXIuanMnO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICduZ2VvL21lc3NhZ2UvTWVzc2FnZS5qcyc7XG5pbXBvcnQgb2xNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBvbFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xTb3VyY2VPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2dldHRleHQnLCBuZ2VvTWFwTW9kdWxlLm5hbWUsIG5nZW9NZXNzYWdlRGlzY2xhaW1lci5uYW1lXSk7XG5cbmZ1bmN0aW9uIE1haW5Db250cm9sbGVyKG5nZW9EaXNjbGFpbWVyKSB7XG4gIHRoaXMuZGlzY2xhaW1lciA9IG5nZW9EaXNjbGFpbWVyO1xuICB0aGlzLm1hcCA9IG5ldyBvbE1hcCh7XG4gICAgbGF5ZXJzOiBbbmV3IG9sTGF5ZXJUaWxlKHtcbiAgICAgIHNvdXJjZTogbmV3IG9sU291cmNlT1NNKClcbiAgICB9KV0sXG4gICAgdmlldzogbmV3IG9sVmlldyh7XG4gICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgIHpvb206IDRcbiAgICB9KVxuICB9KTtcbiAgdGhpcy5zdWNjZXNzTXNnXyA9ICdEaXNjbGFpbWVyIHdpdGggc3VjY2VzcyBzdHlsZSc7XG4gIHRoaXMuaW5mb01zZ18gPSAnRGlzY2xhaW1lciB3aXRoIGluZm8gc3R5bGUnO1xuICB0aGlzLndhcm5pbmdNc2dfID0gJ0Rpc2NsYWltZXIgd2l0aCB3YXJuaW5nIHN0eWxlJztcbiAgdGhpcy5lcnJvck1zZ18gPSAnRGlzY2xhaW1lciB3aXRoIGVycm9yIHN0eWxlJztcbiAgdGhpcy5pbk1hcE1zZ3NfID0gWydEaXNjbGFpbWVyIGluc2lkZSB0aGUgbWFwJywgJ0FuIG90aGVyIG1lc3NhZ2UgJywgJ01hcCBjb250cmlidXRvcnMnLCAnVGhpcyBpcyBhIGxvbmcgbWVzc2FnZSBpbnNpZGUgYSBtYXAnXTtcbiAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoe1xuICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgIHRyaWdnZXI6ICdob3ZlcidcbiAgfSk7XG59XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmRpc2NsYWltZXIuc3VjY2Vzcyh0aGlzLnN1Y2Nlc3NNc2dfKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmRpc2NsYWltZXIuaW5mbyh0aGlzLmluZm9Nc2dfKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmRpc2NsYWltZXIud2Fybih0aGlzLndhcm5pbmdNc2dfKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5kaXNjbGFpbWVyLmVycm9yKHRoaXMuZXJyb3JNc2dfKTtcbn07XG5cbk1haW5Db250cm9sbGVyLnByb3RvdHlwZS5pbk1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbk1hcE1zZ3NfLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmRpc2NsYWltZXIuYWxlcnQoe1xuICAgICAgbXNnOiBtZXNzYWdlLFxuICAgICAgdGFyZ2V0OiAnI2Rpc2NsYWltZXJzLWluLW1hcCcsXG4gICAgICB0eXBlOiBNZXNzYWdlVHlwZS5XQVJOSU5HXG4gICAgfSk7XG4gIH0sIHRoaXMpO1xufTtcblxuTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLmNsb3NlQWxsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmRpc2NsYWltZXIuY2xvc2Uoe1xuICAgIG1zZzogdGhpcy5zdWNjZXNzTXNnXyxcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TVUNDRVNTXG4gIH0pO1xuICB0aGlzLmRpc2NsYWltZXIuY2xvc2Uoe1xuICAgIG1zZzogdGhpcy5pbmZvTXNnXyxcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5JTkZPUk1BVElPTlxuICB9KTtcbiAgdGhpcy5kaXNjbGFpbWVyLmNsb3NlKHtcbiAgICBtc2c6IHRoaXMud2FybmluZ01zZ18sXG4gICAgdHlwZTogTWVzc2FnZVR5cGUuV0FSTklOR1xuICB9KTtcbiAgdGhpcy5kaXNjbGFpbWVyLmNsb3NlKHtcbiAgICBtc2c6IHRoaXMuZXJyb3JNc2dfLFxuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkVSUk9SXG4gIH0pO1xuICB0aGlzLmluTWFwTXNnc18uZm9yRWFjaChmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIHRoaXMuZGlzY2xhaW1lci5jbG9zZSh7XG4gICAgICBtc2c6IG1lc3NhZ2UsXG4gICAgICB0eXBlOiBNZXNzYWdlVHlwZS5XQVJOSU5HXG4gICAgfSk7XG4gIH0sIHRoaXMpO1xufTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9hbGVydC5qcyc7XG5pbXBvcnQgbmdlb01lc3NhZ2VQb3B1cCwgeyBNZXNzYWdlUG9wdXAgfSBmcm9tICduZ2VvL21lc3NhZ2UvUG9wdXAuanMnO1xuaW1wb3J0IG5nZW9NZXNzYWdlTWVzc2FnZSwgeyBNZXNzYWdlVHlwZSB9IGZyb20gJ25nZW8vbWVzc2FnZS9NZXNzYWdlLmpzJztcbmltcG9ydCAnbmdlby9zYXNzL2ZvbnQuc2Nzcyc7XG5leHBvcnQgdmFyIE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZSA9IGZ1bmN0aW9uIChfbmdlb01lc3NhZ2VNZXNzYWdlKSB7XG4gIE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZS4kaW5qZWN0ID0gW1wiJHNjZVwiLCBcImdldHRleHRDYXRhbG9nXCIsIFwibmdlb0NyZWF0ZVBvcHVwXCJdO1xuXG4gIF9pbmhlcml0c0xvb3NlKE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZSwgX25nZW9NZXNzYWdlTWVzc2FnZSk7XG5cbiAgZnVuY3Rpb24gTWVzc2FnZURpc2NsYWltZXJTZXJ2aWNlKCRzY2UsIGdldHRleHRDYXRhbG9nLCBuZ2VvQ3JlYXRlUG9wdXApIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9uZ2VvTWVzc2FnZU1lc3NhZ2UuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLnNjZV8gPSAkc2NlO1xuICAgIF90aGlzLmdldHRleHRDYXRhbG9nXyA9IGdldHRleHRDYXRhbG9nO1xuICAgIF90aGlzLmNyZWF0ZVBvcHVwXyA9IG5nZW9DcmVhdGVQb3B1cDtcbiAgICB2YXIgY29udGFpbmVyID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IGNsYXNzPVwibmdlby1kaXNjbGFpbWVyXCI+PC9kaXY+Jyk7XG4gICAgYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLmFwcGVuZChjb250YWluZXIpO1xuICAgIF90aGlzLmNvbnRhaW5lcl8gPSBjb250YWluZXI7XG4gICAgX3RoaXMubWVzc2FnZXNfID0ge307XG4gICAgX3RoaXMubWVzc2FnZXNDb25zdW1lckNvdW50XyA9IHt9O1xuICAgIF90aGlzLnVpZHNfID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFsZXJ0ID0gZnVuY3Rpb24gYWxlcnQob2JqZWN0KSB7XG4gICAgdGhpcy5zaG93KG9iamVjdCk7XG4gIH07XG5cbiAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2Uob2JqZWN0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgbXNnT2JqZWN0cyA9IHRoaXMuZ2V0TWVzc2FnZU9iamVjdHMob2JqZWN0KTtcbiAgICBtc2dPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBfdGhpczIuY2xvc2VNZXNzYWdlXyhtZXNzYWdlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uc2hvd01lc3NhZ2UgPSBmdW5jdGlvbiBzaG93TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZ2V0dGV4dENhdGFsb2cgPSB0aGlzLmdldHRleHRDYXRhbG9nXztcbiAgICB2YXIgdHlwZSA9IG1lc3NhZ2UudHlwZTtcbiAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgdHlwZSA9PSAnc3RyaW5nJywgJ1R5cGUgc2hvdWxkIGJlIHNldC4nKTtcbiAgICB2YXIgdWlkID0gdGhpcy5nZXRNZXNzYWdlVWlkXyhtZXNzYWdlKTtcblxuICAgIGlmICh0aGlzLnVpZHNfW3VpZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVpZHNfW3VpZF0gPSB0cnVlO1xuXG4gICAgaWYgKG1lc3NhZ2UucG9wdXAgPT09IHRydWUpIHtcbiAgICAgIHZhciBwb3B1cCA9IHRoaXMuY3JlYXRlUG9wdXBfKCk7XG4gICAgICB2YXIgY29udGVudCA9IHRoaXMuc2NlXy50cnVzdEFzSHRtbChtZXNzYWdlLm1zZyk7XG4gICAgICBwb3B1cC5vcGVuKHtcbiAgICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIHRpdGxlOiAnJm5ic3A7J1xuICAgICAgfSk7XG4gICAgICBwb3B1cC5zY29wZS4kd2F0Y2goJ29wZW4nLCBmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgICAgX3RoaXMzLmNsb3NlTWVzc2FnZV8obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXNzYWdlc19bdWlkXSA9IHBvcHVwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY29tcGF0aWJsZU1lc3NhZ2VVaWQgPSB0aGlzLmdldENvbXBhdGlibGVNZXNzYWdlVWlkXyhtZXNzYWdlKTtcblxuICAgICAgaWYgKHRoaXMubWVzc2FnZXNfW2NvbXBhdGlibGVNZXNzYWdlVWlkXSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzQ29uc3VtZXJDb3VudF9bY29tcGF0aWJsZU1lc3NhZ2VVaWRdKys7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBbJ2FsZXJ0JywgJ2ZhZGUnLCAnYWxlcnQtZGlzbWlzc2libGUnLCAnc2hvdyddO1xuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FUlJPUjpcbiAgICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2FsZXJ0LWRhbmdlcicpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuSU5GT1JNQVRJT046XG4gICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhbGVydC1pbmZvJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5TVUNDRVNTOlxuICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCgnYWxlcnQtc3VjY2VzcycpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuV0FSTklORzpcbiAgICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2FsZXJ0LXdhcm5pbmcnKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWwgPSBhbmd1bGFyLmVsZW1lbnQoXCI8ZGl2IHJvbGU9XFxcImFsZXJ0XFxcIiBjbGFzcz1cXFwiXCIgKyBjbGFzc05hbWVzLmpvaW4oJyAnKSArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICB2YXIgYnV0dG9uID0gYW5ndWxhci5lbGVtZW50KFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1sYWJlbD1cXFwiXCIgKyBnZXR0ZXh0Q2F0YWxvZy5nZXRTdHJpbmcoJ0Nsb3NlJykgKyBcIlxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9zcGFuPjwvYnV0dG9uPlwiKTtcbiAgICAgIHZhciBtc2cgPSBhbmd1bGFyLmVsZW1lbnQoJzxzcGFuIC8+JykuaHRtbChtZXNzYWdlLm1zZyk7XG4gICAgICBlbC5hcHBlbmQoYnV0dG9uKS5hcHBlbmQobXNnKTtcbiAgICAgIHZhciBjb250YWluZXI7XG5cbiAgICAgIGlmIChtZXNzYWdlLnRhcmdldCkge1xuICAgICAgICBjb250YWluZXIgPSBhbmd1bGFyLmVsZW1lbnQobWVzc2FnZS50YXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJfO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGVsKTtcbiAgICAgIGVsLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICBlbC5vbignY2xvc2VkLmJzLmFsZXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuY2xvc2VNZXNzYWdlXyhtZXNzYWdlLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXNzYWdlc19bY29tcGF0aWJsZU1lc3NhZ2VVaWRdID0gZWw7XG4gICAgICB0aGlzLm1lc3NhZ2VzQ29uc3VtZXJDb3VudF9bY29tcGF0aWJsZU1lc3NhZ2VVaWRdID0gMTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE1lc3NhZ2VVaWRfID0gZnVuY3Rpb24gZ2V0TWVzc2FnZVVpZF8obWVzc2FnZSkge1xuICAgIHJldHVybiBtZXNzYWdlLm1zZyArIFwiLVwiICsgbWVzc2FnZS50eXBlICsgXCItXCIgKyBtZXNzYWdlLmxheWVyVWlkO1xuICB9O1xuXG4gIF9wcm90by5nZXRDb21wYXRpYmxlTWVzc2FnZVVpZF8gPSBmdW5jdGlvbiBnZXRDb21wYXRpYmxlTWVzc2FnZVVpZF8obWVzc2FnZSkge1xuICAgIHJldHVybiBtZXNzYWdlLm1zZyArIFwiLVwiICsgbWVzc2FnZS50eXBlO1xuICB9O1xuXG4gIF9wcm90by5jbG9zZU1lc3NhZ2VfID0gZnVuY3Rpb24gY2xvc2VNZXNzYWdlXyhtZXNzYWdlLCBmb3JjZSkge1xuICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7XG4gICAgICBmb3JjZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1aWQgPSB0aGlzLmdldE1lc3NhZ2VVaWRfKG1lc3NhZ2UpO1xuXG4gICAgaWYgKCF0aGlzLnVpZHNfW3VpZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy51aWRzX1t1aWRdO1xuICAgIHZhciBjb21wYXRpYmxlTWVzc2FnZVVpZCA9IHRoaXMuZ2V0Q29tcGF0aWJsZU1lc3NhZ2VVaWRfKG1lc3NhZ2UpO1xuXG4gICAgaWYgKGZvcmNlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzQ29uc3VtZXJDb3VudF9bY29tcGF0aWJsZU1lc3NhZ2VVaWRdID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXNzYWdlc0NvbnN1bWVyQ291bnRfW2NvbXBhdGlibGVNZXNzYWdlVWlkXS0tO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1lc3NhZ2VzQ29uc3VtZXJDb3VudF9bY29tcGF0aWJsZU1lc3NhZ2VVaWRdID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvYmogPSB0aGlzLm1lc3NhZ2VzX1tjb21wYXRpYmxlTWVzc2FnZVVpZF07XG5cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgTWVzc2FnZVBvcHVwKSB7XG4gICAgICB2YXIgbXBPYmogPSBvYmo7XG5cbiAgICAgIGlmIChtcE9iai5nZXRPcGVuKCkpIHtcbiAgICAgICAgbXBPYmouc2V0T3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBqcXVlcnlPYmogPSBvYmo7XG5cbiAgICAgIGlmIChqcXVlcnlPYmouaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICBqcXVlcnlPYmouYWxlcnQoJ2Nsb3NlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMubWVzc2FnZXNfW2NvbXBhdGlibGVNZXNzYWdlVWlkXTtcbiAgICBkZWxldGUgdGhpcy5tZXNzYWdlc0NvbnN1bWVyQ291bnRfW2NvbXBhdGlibGVNZXNzYWdlVWlkXTtcbiAgfTtcblxuICByZXR1cm4gTWVzc2FnZURpc2NsYWltZXJTZXJ2aWNlO1xufShuZ2VvTWVzc2FnZU1lc3NhZ2UpO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvRGlzY2xhaW1lcicsIFtuZ2VvTWVzc2FnZVBvcHVwLm5hbWVdKTtcbm1vZHVsZS5zZXJ2aWNlKCduZ2VvRGlzY2xhaW1lcicsIE1lc3NhZ2VEaXNjbGFpbWVyU2VydmljZSk7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==