(function(e){function r(r){var a=r[0];var l=r[1];var u=r[2];var i,c,s=0,p=[];for(;s<a.length;s++){c=a[s];if(o[c]){p.push(o[c][0])}o[c]=0}for(i in l){if(Object.prototype.hasOwnProperty.call(l,i)){e[i]=l[i]}}if(f)f(r);while(p.length){p.shift()()}t.push.apply(t,u||[]);return n()}function n(){var e;for(var r=0;r<t.length;r++){var n=t[r];var a=true;for(var u=1;u<n.length;u++){var i=n[u];if(o[i]!==0)a=false}if(a){t.splice(r--,1);e=l(l.s=n[0])}}return e}var a={};var o={13:0};var t=[];function l(r){if(a[r]){return a[r].exports}var n=a[r]={i:r,l:false,exports:{}};e[r].call(n.exports,n,n.exports,l);n.l=true;return n.exports}l.m=e;l.c=a;l.d=function(e,r,n){if(!l.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:n})}};l.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};l.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};l.d(r,"a",r);return r};l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};l.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var i=u.push.bind(u);u.push=r;u=u.slice();for(var c=0;c<u.length;c++)r(u[c]);var f=i;t.push([427,0]);return n()})({426:function(e,r,n){"use strict";n.r(r);var a=n(550);var o=n.n(a);var t=n(214);var l=n(316);var u=n(58);var i=n(36);var c=n(46);var f=n(30);var s=n(52);var p={};p.module=angular.module("gmfapp",["gettext",t["a"].name]);p.module.constant("defaultTheme","Demo");p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");p.MainController=function(){var e="Coordinates (m)&#58; {x}, {y}";this.projections=[{code:l["a"],label:"CH1903+ / LV95",filter:"ngeoNumberCoordinates:0:"+e},{code:u["a"],label:"CH1903 / LV03",filter:"ngeoNumberCoordinates:2:[{x} E; {y} N]"},{code:"EPSG:4326",label:"WGS84",filter:"ngeoDMSCoordinates:2"}];this.map=new i["a"]({layers:[new f["a"]({source:new s["a"]})],view:new c["a"]({center:[828042,5933739],zoom:8})})};p.module.controller("MainController",p.MainController);r["default"]=p},427:function(e,r,n){n(73);n(72);e.exports=n(426)},550:function(e,r){}});
//# sourceMappingURL=mouseposition.db9ec5.js.map