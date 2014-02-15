(function () {
  'use strict';
  var a;
  a = angular.module('BrightlyApp', ['angularMoment']), void 0 !== window.pageYOffset ? a.value('viewportYOffset', function () {
    return window.pageYOffset;
  }) : a.value('viewportYOffset', function () {
    return document.documentElement.scrollTop;
  }), a.value('isTouch', function () {
    return Modernizr.touch;
  }), a.value('viewportHeight', function () {
    return document.documentElement.clientHeight;
  }), a.factory('onScrollChange', function (a, b) {
    var c, d, e, f;
    return f = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, d = [], e = void 0, c = function () {
      var a, g, h;
      if (h = b(), h !== e)
        for (e = h, a = 0, g = d.length; g > a;)
          d[a](h), a++;
      return void 0 !== f ? f(c) : void 0;
    }, void 0 !== f && f(c), a.bind('scroll', c), a.bind('touchmove', c), {
      attach: function (a) {
        return d.push(a);
      },
      detach: function (a) {
        return d.splice(d.indexOf(a), 1);
      }
    };
  }), a.controller('MainCtrl', [
    '$scope',
    '$http',
    function (a) {
      var b;
      return a.getIcon = function (a) {
        switch (a) {
        case 'instagram':
          return '&#xF641;';
        case 'twitter':
          return '&#xF611;';
        }
      }, a.latest_gig = [], b = window.location.toString().match(/localhost/) && !window.location.toString().match(/\?live=1/) ? 'http://localhost:5000' : 'http://brightly-server.herokuapp.com', a.latest_gig_endpoint = '' + b + '/latest_gig.json?jsoncallback=JSON_CALLBACK', a.feeds = [], a.feeds_endpoint = '' + b + '/feeds.json?jsoncallback=JSON_CALLBACK';
    }
  ]);
}.call(this), function () {
  angular.module('BrightlyApp').filter('unsafe', [
    'a',
    function (a) {
      return function (b) {
        return a.trustAsHtml(b);
      };
    }
  ]);
}.call(this), function () {
  angular.module('BrightlyApp').filter('map', function () {
    return function (a, b) {
      return a.map(function (a) {
        return a[b];
      });
    };
  });
}.call(this), function () {
  'use strict';
  angular.module('BrightlyApp').directive('ngParallax', [
    'a',
    'b',
    'c',
    'd',
    function (a, b, c, d) {
      return function (a, b) {
        var e, f, g, h;
        return e = void 0, h = function (a) {
          var b;
          return b = -(a / 4), b > 0 ? 0 : -Math.min(-b, 100);
        }, f = function (a) {
          return Math.max(0.5, 1 - a / 350);
        }, g = function (a) {
          var c;
          return c = 'translate3d(0,' + h(a) + 'px, 0', e !== c ? (e = c, b.css('-webkit-transform', c), b.css('-moz-transform', c), b.css('-ms-transform', c), b.css('-o-transform', c), b.css('transform', c), b.css('opacity', f(a))) : void 0;
        }, g(0), d() ? void 0 : c.attach(g);
      };
    }
  ]);
}.call(this), function () {
  'use strict';
  angular.module('BrightlyApp').directive('ngLatestGig', [
    'a',
    function (a) {
      return function (b) {
        return a.jsonp(b.latest_gig_endpoint).success(function (a) {
          return b.latest_gig = a;
        });
      };
    }
  ]);
}.call(this), function () {
  'use strict';
  angular.module('BrightlyApp').directive('ngFeeds', [
    'a',
    function (a) {
      return function (b) {
        return a.jsonp(b.feeds_endpoint).success(function (a) {
          var c;
          return c = a, c.map(function (a) {
            var c;
            return c = b.getIcon(a.service), a.icon = c;
          }), b.feeds = c;
        }), b.resetTouches = function () {
          return b.$broadcast('deactivateAll');
        };
      };
    }
  ]);
}.call(this), function () {
  'use strict';
  angular.module('BrightlyApp').directive('ngGridItem', [
    'a',
    'b',
    function (a, b) {
      return function (a) {
        return a.$on('deactivateAll', function () {
          return a.deactivate();
        }), a.activate = function () {
          return b() ? void 0 : a.status = 'is-activated';
        }, a.deactivate = function () {
          return a.status = '';
        }, a.touch = function (c) {
          return b() && 'is-activated' !== a.status ? (c.preventDefault(), a.resetTouches(), a.status = 'is-activated') : void 0;
        };
      };
    }
  ]);
}.call(this), function () {
  'use strict';
  angular.module('BrightlyApp').directive('ngEmbed', [
    'a',
    'b',
    function (a, b) {
      return function (a, c, d) {
        return a.embed_url = b.trustAsResourceUrl(d.ngEmbed);
      };
    }
  ]);
}.call(this));