(function(){"use strict";var a;a=angular.module("BrightlyApp",["angularMoment"]),moment.tz.add({zones:{"Etc/UTC":["0 - UTC"]},rules:{},links:{}}),void 0!==window.pageYOffset?a.value("viewportYOffset",function(){return window.pageYOffset}):a.value("viewportYOffset",function(){return document.documentElement.scrollTop}),a.value("isTouch",function(){return Modernizr.touch}),a.value("viewportHeight",function(){return document.documentElement.clientHeight}),a.factory("onScrollChange",["$document","viewportYOffset",function(a,b){var c,d,e,f;return f=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,d=[],e=void 0,c=function(){var a,g,h;if(h=b(),h!==e)for(e=h,a=0,g=d.length;g>a;)d[a](h),a++;return void 0!==f?f(c):void 0},void 0!==f&&f(c),a.bind("scroll",c),a.bind("touchmove",c),{attach:function(a){return d.push(a)},detach:function(a){return d.splice(d.indexOf(a),1)}}}]),a.controller("MainCtrl",["$scope","$http",function(a,b){var c;return a.getIcon=function(a){switch(a){case"instagram":return"&#xF641;";case"twitter":return"&#xF611;"}},a.$watch("toggle",function(){return a.toggle?a.view=!0:setTimeout(function(){return a.view=!1,a.$apply()},300)}),a.latest_gig=[],c=window.location.toString().match(/localhost/)&&!window.location.toString().match(/\?live=1/)?"http://localhost:5000":"http://brightly-server.herokuapp.com",a.latest_gig_endpoint=""+c+"/latest_gig.json?jsoncallback=JSON_CALLBACK",a.feeds=[],a.feeds_endpoint=""+c+"/feeds.json?jsoncallback=JSON_CALLBACK"}])}).call(this),function(){angular.module("BrightlyApp").filter("unsafe",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}])}.call(this),function(){angular.module("BrightlyApp").filter("map",function(){return function(a,b){return a.map(function(a){return a[b]})}})}.call(this),function(){"use strict";angular.module("BrightlyApp").directive("ngParallax",["$document","$window","onScrollChange","isTouch",function(a,b,c,d){return function(a,b,e){var f,g,h,i;return f=void 0,i=function(a){var b;return b=-(a/4),b>0?0:-Math.min(-b,300)},g=function(a){return Math.max(.5,1-a/350)},h=function(a){var c;return c="translate3d(0,"+i(a)+"px, 0",f!==c?(f=c,b.css("-webkit-transform",c),b.css("-moz-transform",c),b.css("-ms-transform",c),b.css("-o-transform",c),b.css("transform",c),b.css("opacity",g(a))):void 0},h(0),d()?void 0:c.attach(h)}}])}.call(this),function(){"use strict";angular.module("BrightlyApp").directive("ngLatestGig",["$http",function(a){return function(b,c,d){return a.jsonp(b.latest_gig_endpoint).success(function(a){return b.latest_gig=a})}}])}.call(this),function(){"use strict";angular.module("BrightlyApp").directive("ngFeeds",["$http",function(a){return function(b,c,d){return a.jsonp(b.feeds_endpoint).success(function(a){var c;return c=a,c.map(function(a){var c;return c=b.getIcon(a.service),a.icon=c}),b.feeds=c}),b.resetTouches=function(){return b.$broadcast("deactivateAll")}}}])}.call(this),function(){"use strict";angular.module("BrightlyApp").directive("ngGridItem",["$http","isTouch",function(a,b){return function(a,c,d){return a.$on("deactivateAll",function(){return a.deactivate()}),a.activate=function(){return b()?void 0:a.status="is-activated"},a.deactivate=function(){return a.status=""},a.touch=function(c){return b()&&"is-activated"!==a.status?(c.preventDefault(),a.resetTouches(),a.status="is-activated"):void 0}}}])}.call(this),function(){"use strict";angular.module("BrightlyApp").directive("ngEmbed",["$http","$sce",function(a,b){return function(a,c,d){return a.embed_url=b.trustAsResourceUrl(d.ngEmbed)}}])}.call(this);