(function(e){function t(t){var n=t[0];var i=t[1];var l=t[2];var s,u,d=0,f=[];for(;d<n.length;d++){u=n[d];if(a[u]){f.push(a[u][0])}a[u]=0}for(s in i){if(Object.prototype.hasOwnProperty.call(i,s)){e[s]=i[s]}}if(c)c(t);while(f.length){f.shift()()}o.push.apply(o,l||[]);return r()}function r(){var e;for(var t=0;t<o.length;t++){var r=o[t];var n=true;for(var l=1;l<r.length;l++){var s=r[l];if(a[s]!==0)n=false}if(n){o.splice(t--,1);e=i(i.s=r[0])}}return e}var n={};var a={26:0};var o=[];function i(t){if(n[t]){return n[t].exports}var r=n[t]={i:t,l:false,exports:{}};e[t].call(r.exports,r,r.exports,i);r.l=true;return r.exports}i.m=e;i.c=n;i.d=function(e,t,r){if(!i.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:r})}};i.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[];var s=l.push.bind(l);l.push=t;l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([463,0]);return r()})({400:function(e,t,r){"use strict";r.r(t);var n=r(567);var a=r(192);var o=r(109);var i=r(55);var l=r(1);var s=r(215);var u=r(220);var c=r(319);var d=r(234);var f=r(110);var g=r(149);var h=r(19);var p=r(4);var v=r(36);var m=r(67);var y=r(32);var _=r(31);var b=r(12);var S=r(184);var C=angular.module("gmfQueryGridComponent",[s["a"].module.name,u["a"].name,c["a"].name,d["a"].module.name,f["a"].module.name,g["a"].module.name]);C.value("gmfDisplayquerygridTemplateUrl",function(e,t){var r=t["gmfDisplayquerygridTemplateurl"];return r!==undefined?r:"gmf/query/gridComponent"});C.run(["$templateCache",function(e){e.put("gmf/query/gridComponent",r(462))}]);w.$inject=["$element","$attrs","gmfDisplayquerygridTemplateUrl"];function w(e,t,r){return r(e,t)}C.component_={controller:"GmfDisplayquerygridController as ctrl",bindings:{active:"=?gmfDisplayquerygridActive",featuresStyleFn:"&gmfDisplayquerygridFeaturesstyle",selectedFeatureStyleFn:"&gmfDisplayquerygridSelectedfeaturestyle",getMapFn:"&gmfDisplayquerygridMap",removeEmptyColumnsFn:"&?gmfDisplayquerygridRemoveemptycolumns",maxResultsFn:"&?gmfDisplayquerygridMaxresults",maxRecenterZoomFn:"&?gmfDisplayquerygridMaxrecenterzoom",mergeTabs:"<?gmfDisplayquerygridMergetabs"},templateUrl:w};C.component("gmfDisplayquerygrid",C.component_);C.Controller_=function(e,t,r,n,a,o,i,l){var s=this;var u=e.has("ngeoQueryOptions")?e.get("ngeoQueryOptions"):{};this.$scope_=t;this.$timeout_=o;this.ngeoQueryResult=r;this.ngeoMapQuerent_=n;this.ngeoCsvDownload_=i;this.$element_=l;this.maxResults=u.limit!==undefined?u.limit:50;this.active=false;this.pending=false;this.gridSources={};this.loadedGridSources=[];this.selectedTab=null;this.removeEmptyColumns_=false;this.maxRecenterZoom;this.mergeTabs={};this.featuresForSources_={};this.features_=new h["b"];this.ngeoFeatureOverlayMgr_=a;this.highlightFeatures_=new h["b"];this.filename_=e.has("gmfCsvFilename")?e.get("gmfCsvFilename"):"query-results.csv";this.map_=null;this.$scope_.$watchCollection(function(){return r},function(e,t){if(e!==t){s.updateData_()}});this.unregisterSelectWatcher_=null};C.Controller_.$inject=["$injector","$scope","ngeoQueryResult","ngeoMapQuerent","ngeoFeatureOverlayMgr","$timeout","ngeoCsvDownload","$element"];C.Controller_.prototype.$onInit=function(){this.removeEmptyColumns_=this["removeEmptyColumnsFn"]?this["removeEmptyColumnsFn"]()===true:false;this.maxRecenterZoom=this["maxRecenterZoomFn"]?this["maxRecenterZoomFn"]():undefined;var e=this.ngeoFeatureOverlayMgr_.getFeatureOverlay();e.setFeatures(this.features_);var t=this["featuresStyleFn"]();if(t!==undefined){l["a"].assertInstanceof(t,b["c"]);e.setStyle(t)}var r=this.ngeoFeatureOverlayMgr_.getFeatureOverlay();r.setFeatures(this.highlightFeatures_);var n=this["selectedFeatureStyleFn"]();if(n!==undefined){l["a"].assertInstanceof(n,b["c"])}else{var a=new y["a"]({color:[255,0,0,.6]});var o=new _["a"]({color:[255,0,0,1],width:2});n=new b["c"]({fill:a,image:new m["a"]({fill:a,radius:5,stroke:o}),stroke:o,zIndex:10})}r.setStyle(n);var i=this["getMapFn"];if(i){var s=i();l["a"].assertInstanceof(s,v["a"]);this.map_=s}};C.Controller_.prototype.getGridSources=function(){var e=this;return this.loadedGridSources.map(function(t){return e.gridSources[t]})};C.Controller_.prototype.updateData_=function(){var e=this;if(this.ngeoQueryResult.total===0&&!this.hasOneWithTooManyResults_()){var t=this.active;this.clear();if(t){this.active=this.ngeoQueryResult.pending;this.pending=this.ngeoQueryResult.pending}return}this.active=true;this.pending=false;var r=this.ngeoQueryResult.sources;if(Object.keys(this.mergeTabs).length>0){r=this.getMergedSources_(r)}r.forEach(function(t){if(t.tooManyResults){e.makeGrid_(null,t)}else{t.id=e.escapeValue(t.id);var r=t.features;if(r.length>0){e.collectData_(t)}}});if(this.loadedGridSources.length===0){this.active=false;return}if(this.selectedTab===null||!(""+this.selectedTab in this.gridSources)){this.$timeout_(function(){var t=e.loadedGridSources[0];e.selectTab(e.gridSources[t])},0)}};C.Controller_.prototype.hasOneWithTooManyResults_=function(){return this.ngeoQueryResult.sources.some(function(e){return e.tooManyResults})};C.Controller_.prototype.escapeValue=function(e){if(Number.isInteger(e)){return e}else{var t=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\ |]/g;if(e.match(t)!==null){return e.replace(t,"_")}else{return e}}};C.Controller_.prototype.isSelected=function(e){return this.selectedTab===e.source.label};C.Controller_.prototype.getMergedSources_=function(e){var t=this;var r=[];var n={};e.forEach(function(e){var a=t.getMergedSource_(e,n);if(a===null){r.push(e)}});for(var a in n){r.push(n[a])}return r};C.Controller_.prototype.getMergedSource_=function(e,t){var r=null;for(var n in this.mergeTabs){var a=this.mergeTabs[n];var o=a.some(function(t){return t==e.label});if(o){r=n;break}}if(r===null){return null}var i=void 0;if(r in t){i=t[r]}else{i={features:[],id:r,label:r,limit:this.maxResults,pending:false,queried:true,tooManyResults:false,totalFeatureCount:undefined};t[r]=i}e.features.forEach(function(e){i.features.push(e)});i.tooManyResults=i.tooManyResults||e.tooManyResults;if(i.tooManyResults){i.totalFeatureCount=i.totalFeatureCount!==undefined?i.totalFeatureCount+i.features.length:i.features.length;i.features=[]}if(e.totalFeatureCount!==undefined){i.totalFeatureCount=i.totalFeatureCount!==undefined?i.totalFeatureCount+e.totalFeatureCount:e.totalFeatureCount}return i};C.Controller_.prototype.collectData_=function(e){var t=e.features;var r=[];var n=[];var a={};var o=void 0,i=void 0;t.forEach(function(e){o=e.getProperties();if(o!==undefined){i=e.getGeometryName();if(n.indexOf(i)===-1){n.push(i)}r.push(o);a[d["a"].getRowUid(o)]=e}});this.cleanProperties_(r,n);if(r.length>0){var l=this.makeGrid_(r,e);if(l){this.featuresForSources_[""+e.label]=a}}};C.Controller_.prototype.cleanProperties_=function(e,t){e.forEach(function(e){t.forEach(function(t){delete e[t]});delete e["boundedBy"];delete e["ngeo_feature_type_"]});if(this.removeEmptyColumns_===true){this.removeEmptyColumnsFn_(e)}};C.Controller_.prototype.removeEmptyColumnsFn_=function(e){var t=[];var r=void 0,n=void 0;for(n in e[0]){for(r=0;r<e.length;r++){if(e[r][n]!==undefined){t.push(n);break}}}var a=void 0;e.forEach(function(e){a=[];for(n in e){if(t.indexOf(n)===-1){a.push(n)}}a.forEach(function(t){delete e[t]})})};C.Controller_.prototype.makeGrid_=function(e,t){var r=""+t.label;var n=null;if(e!==null){n=this.getGridConfiguration_(e);if(n===null){return false}}if(this.loadedGridSources.indexOf(r)==-1){this.loadedGridSources.push(r)}this.gridSources[r]={configuration:n,source:t};return true};C.Controller_.prototype.getGridConfiguration_=function(e){l["a"].assert(e.length>0);var t={};Object.assign(t,e[0]);delete t.ol_uid;var r=Object.keys(t);var n=[];r.forEach(function(e){n.push({name:e})});if(n.length>0){return new d["a"](e,n)}else{return null}};C.Controller_.prototype.clear=function(){this.active=false;this.pending=false;this.gridSources={};this.loadedGridSources=[];this.selectedTab=null;this.tooManyResults=false;this.features_.clear();this.highlightFeatures_.clear();this.ngeoMapQuerent_.clear();this.featuresForSources_={};if(this.unregisterSelectWatcher_){this.unregisterSelectWatcher_()}};C.Controller_.prototype.selectTab=function(e){var t=this;var r=e.source;this.selectedTab=r.label;if(this.unregisterSelectWatcher_){this.unregisterSelectWatcher_();this.unregisterSelectWatcher_=null}if(e.configuration!==null){this.unregisterSelectWatcher_=this.$scope_.$watchCollection(function(){return e.configuration.selectedRows},function(e,r){if(Object.keys(e)!==Object.keys(r)){t.onSelectionChanged_()}})}this.updateFeatures_(e);this.reflowGrid_()};C.Controller_.prototype.reflowGrid_=function(){var e=this.escapeValue(this.selectedTab||"");var t=this.$element_.find("div.tab-pane#"+e);t.removeClass("active").addClass("active");this.$timeout_(function(){t.find("div.ngeo-grid-table-container table")["trigger"]("reflow")})};C.Controller_.prototype.onSelectionChanged_=function(){if(this.selectedTab===null){return}var e=this.gridSources[""+this.selectedTab];this.updateFeatures_(e)};C.Controller_.prototype.updateFeatures_=function(e){this.features_.clear();this.highlightFeatures_.clear();if(e.configuration===null){return}var t=""+e.source.label;var r=this.featuresForSources_[t];var n=e.configuration.selectedRows;for(var a in r){var o=r[a];if(a in n){this.highlightFeatures_.push(o)}else{this.features_.push(o)}}};C.Controller_.prototype.getActiveGridSource=function(){if(this.selectedTab===null){return null}else{return this.gridSources[""+this.selectedTab]}};C.Controller_.prototype.isOneSelected=function(){var e=this.getActiveGridSource();if(e===null||e.configuration===null){return false}else{return e.configuration.getSelectedCount()>0}};C.Controller_.prototype.getSelectedRowCount=function(){var e=this.getActiveGridSource();if(e===null||e.configuration===null){return 0}else{return e.configuration.getSelectedCount()}};C.Controller_.prototype.selectAll=function(){var e=this.getActiveGridSource();if(e!==null){e.configuration.selectAll()}};C.Controller_.prototype.unselectAll=function(){var e=this.getActiveGridSource();if(e!==null){e.configuration.unselectAll()}};C.Controller_.prototype.invertSelection=function(){var e=this.getActiveGridSource();if(e!==null){e.configuration.invertSelection()}};C.Controller_.prototype.zoomToSelection=function(){var e=this.getActiveGridSource();if(e!==null){var t=p["j"]();this.highlightFeatures_.forEach(function(e){p["q"](t,e.getGeometry().getExtent())});var r=this.map_.getSize();l["a"].assert(r!==undefined);var n=this.maxRecenterZoom;this.map_.getView().fit(t,{size:r,maxZoom:n})}};C.Controller_.prototype.downloadCsv=function(){var e=this.getActiveGridSource();if(e!==null){var t=e.configuration.columnDefs;l["a"].assert(t!==undefined);var r=e.configuration.getSelectedRows();this.ngeoCsvDownload_.startDownload(r,t,this.filename_)}};C.controller("GmfDisplayquerygridController",C.Controller_);var F=C;var M=r(25);var R=r(320);var x=r(120);var G=r(121);var T=r(58);var O=r(187);var k=r(188);var q=r(46);var D=r(30);var $=r(52);var E={};E.module=angular.module("gmfapp",["gettext",a["a"].module.name,o["a"].name,i["a"].name,F.name,M["a"].module.name,R["a"].name,x["a"].name,G["a"].name,O["a"].name,k["a"].name]);E.module.constant("ngeoQueryOptions",{limit:20,queryCountFirst:true});E.module.constant("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?"+"version=2&background=background");E.module.constant("defaultTheme","Demo");E.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");E.queryresultComponent={controller:"gmfappQueryresultController",template:r(377)};E.module.component("gmfappQueryresult",E.queryresultComponent);E.QueryresultController=function(e){this.result=e};E.QueryresultController.$inject=["ngeoQueryResult"];E.module.controller("gmfappQueryresultController",E.QueryresultController);E.MainController=function(e,t,r){var n=this;e.loadThemes();var a=new y["a"]({color:[255,170,0,.6]});var o=new _["a"]({color:[255,170,0,1],width:2});this.featureStyle=new b["c"]({fill:a,image:new m["a"]({fill:a,radius:5,stroke:o}),stroke:o});this.map=new v["a"]({layers:[new D["a"]({source:new $["a"]})],view:new q["a"]({projection:T["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})});t.setDatasourceMap(this.map);this.themes=undefined;this.treeSource=undefined;this.queryActive=true;this.queryGridActive=true;e.getThemesObject().then(function(e){if(e){n.themes=e;n.treeSource=e[3]}});r.init(this.map)};E.MainController.$inject=["gmfThemes","gmfDataSourcesManager","ngeoFeatureOverlayMgr"];E.module.controller("MainController",E.MainController);var Q=t["default"]=E},462:function(e,t){e.exports='<div class="gmf-displayquerygrid panel" ng-show=ctrl.active> <div class=close ng-click=ctrl.clear()> &times; </div> <ul class="nav nav-pills" role=tablist> <li ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label" role=presentation ng-class="{\'active\' : ctrl.isSelected(gridSource)}" ng-click=ctrl.selectTab(gridSource)> <a href=#{{ctrl.escapeValue(gridSource.source.label)}} data-target=#{{ctrl.escapeValue(gridSource.source.label)}} aria-controls={{ctrl.escapeValue(gridSource.source.label)}} role=tab data-toggle=tab> <span ng-if="gridSource.source.tooManyResults !== true"> {{gridSource.source.label | translate}} ({{gridSource.source.features.length}}) </span> <span ng-if="gridSource.source.tooManyResults === true"> {{gridSource.source.label | translate}} ({{gridSource.source.totalFeatureCount}}*) </span> </a> </li> </ul> <div class=tab-content> <div ng-repeat="gridSource in ctrl.getGridSources() track by gridSource.source.label" role=tabpanel class=tab-pane ng-class="{\'active\' : ctrl.isSelected(gridSource)}" id={{ctrl.escapeValue(gridSource.source.label)}}> <ngeo-grid ngeo-grid-configuration=gridSource.configuration ng-if="gridSource.source.tooManyResults !== true"> </ngeo-grid> <div ng-if="gridSource.source.tooManyResults === true"> <div class="gmf-displayquerygrid-message alert alert-warning"> <p><span translate>The results can not be displayed because the maximum number has been reached</span> ({{gridSource.source.limit}}).</p> <p translate>Please refine your query.</p> </div> </div> </div> </div> <div class=navbar ng-show="!ctrl.pending && ctrl.getActiveGridSource() && ctrl.getActiveGridSource().configuration !== null"> <ul class="nav navbar-nav navbar-right"> <li class=ng-hide ng-show=ctrl.isOneSelected()> <p class="navbar-text ng-binding"> {{ctrl.getSelectedRowCount()}} <span translate>selected element(s)</span> </p> </li> <li ng-show=ctrl.isOneSelected() class=ng-hide> <button class="btn btn-link btn-xs" title="{{\'Zoom to selection\' | translate}}" ng-click=ctrl.zoomToSelection()> <i class="fa fa-search-plus"></i> <span translate>Zoom to</span> </button> </li> <li ng-show=ctrl.isOneSelected() class=ng-hide> <button class="btn btn-link btn-xs" title="{{\'Export selection as CSV\' | translate}}" ng-click=ctrl.downloadCsv()> <i class="fa fa-download"></i> <span translate>Export as CSV</span> </button> </li> <li class="dropdown navbar-link dropup"> <button type=button class="dropup btn btn-default btn-xs" data-toggle=dropdown aria-haspopup=true aria-expanded=false> <span translate>Select</span> <span class=caret></span> </button> <ul class=dropdown-menu aria-labelledby=dLabel> <li> <a href="" ng-click=ctrl.selectAll() translate>All</a> </li> <li> <a href="" ng-click=ctrl.unselectAll() translate>None</a> </li> <li> <a href="" ng-click=ctrl.invertSelection() translate>Reverse selection</a> </li> </ul> </li> </ul> </div> <div ng-show=ctrl.pending class=gmf-displayquerygrid-pending> <span class="fa fa-spinner fa-spin"></span> </div> </div> '},463:function(e,t,r){r(73);r(72);e.exports=r(400)},567:function(e,t){}});
//# sourceMappingURL=displayquerygrid.b5764d.js.map