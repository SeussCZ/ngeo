(function(r){function e(e){var n=e[0];var l=e[1];var u=e[2];var c,i,p=0,d=[];for(;p<n.length;p++){i=n[p];if(t[i]){d.push(t[i][0])}t[i]=0}for(c in l){if(Object.prototype.hasOwnProperty.call(l,c)){r[c]=l[c]}}if(s)s(e);while(d.length){d.shift()()}o.push.apply(o,u||[]);return a()}function a(){var r;for(var e=0;e<o.length;e++){var a=o[e];var n=true;for(var u=1;u<a.length;u++){var c=a[u];if(t[c]!==0)n=false}if(n){o.splice(e--,1);r=l(l.s=a[0])}}return r}var n={};var t={38:0};var o=[];function l(e){if(n[e]){return n[e].exports}var a=n[e]={i:e,l:false,exports:{}};r[e].call(a.exports,a,a.exports,l);a.l=true;return a.exports}l.m=r;l.c=n;l.d=function(r,e,a){if(!l.o(r,e)){Object.defineProperty(r,e,{configurable:false,enumerable:true,get:a})}};l.r=function(r){Object.defineProperty(r,"__esModule",{value:true})};l.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};l.d(e,"a",e);return e};l.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)};l.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var c=u.push.bind(u);u.push=e;u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var s=c;o.push([422,0]);return a()})({420:function(r,e){r.exports='<div class=dropdown> <button type=button class="btn btn-primary" data-toggle=dropdown> {{$ctrl.currentBgLayer.name}} <span class=caret></span> </button> <ul class=dropdown-menu role=menu> <li ng-repeat="layer in ::$ctrl.bgLayers"> <a href ng-click=$ctrl.setLayer(layer)>{{::layer.name}}</a> </li> </ul> </div> '},421:function(r,e,a){"use strict";a.r(e);var n=a(504);var t=a.n(n);var o=a(184);var l=a(89);var u=a(19);var c=a(28);var i=a(78);var s=a(18);var p=a(74);var d=a(24);var v={};v.module=angular.module("app",["gettext",d["a"].name]);v.backgroundlayerComponent={bindings:{map:"=appBackgroundlayerMap"},template:a(420),controller:"AppBackgroundlayerController"};v.module.component("appBackgroundlayer",v.backgroundlayerComponent);v.BackgroundlayerController=function(r,e){var a=this;r.get("data/backgroundlayers.json").then(function(r){var e=r.data;a["bgLayers"]=e;a.setLayer(e[0])});this.backgroundLayerMgr_=e};v.BackgroundlayerController.$inject=["$http","ngeoBackgroundLayerMgr"];v.BackgroundlayerController.prototype.setLayer=function(r){this["currentBgLayer"]=r;var e=this.createLayer_(r["name"]);this.backgroundLayerMgr_.set(this["map"],e)};v.BackgroundlayerController.prototype.createLayer_=function(r){if(r==="blank"){return new s["a"]}var e=new o["a"]({layer:r});return new s["a"]({source:e})};v.module.controller("AppBackgroundlayerController",v.BackgroundlayerController);v.MainController=function(r){var e=new u["a"]({view:new c["a"]({projection:l["a"],resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});this["map"]=e;var a=new i["a"]({source:new p["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});e.addLayer(a)};v.MainController.$inject=["$scope"];v.module.controller("MainController",v.MainController);e["default"]=v},422:function(r,e,a){a(55);a(54);r.exports=a(421)},504:function(r,e){}});
//# sourceMappingURL=backgroundlayerdropdown.7601b3.js.map