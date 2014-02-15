!function (a, b) {
  var c = {
      breakpoints: {},
      _namedEvents: {},
      _eventMatchCache: {},
      _globalEvents: [],
      onBreakpointChange: function () {
        var a = Array.prototype.slice.call(arguments), b = a.pop(), d = a.pop();
        console.log(d), 'undefined' == typeof d ? c._globalEvents.push(b) : (c._namedEvents[d] = []).push(b), l();
      },
      bind: function (a, b) {
        (c._namedEvents[a] = []).push(b);
      }
    }, d = function (c) {
      /in/.test(b.readyState) ? a.setTimeout(function () {
        d(c);
      }, 9) : c();
    }, e = function (a, c, d) {
      b.addEventListener ? a.addEventListener(c, d) : a.attachEvent('on' + c, d);
    }, f = function (b, c) {
      function d() {
        g = null, b.apply(f, e);
      }
      var e, f, g;
      return function () {
        a.clearTimeout(g), g = a.setTimeout(d, c);
      };
    }, g = function (a, b) {
      return -1 !== a.className.split(' ').indexOf(b);
    }, h = function (a, b) {
      var c = a.className.split(' '), d = c.indexOf(b);
      g(a, b) && (c.splice(d, 1), a.className = c.join(' '));
    }, i = function (a, b) {
      g(a, b) || (a.className = '' !== a.className ? a.className + ' ' + b : b);
    }, j = function (a, c) {
      var d = 'breakpoint-' + c, e = b.documentElement;
      a ? i(e, d) : h(e, d);
    }, k = function (a, c) {
      if (a)
        for (var d = b.getElementsByTagName('img'), e = 0; e < d.length; e++) {
          var f = d[e], g = f.getAttribute('data-mq-src');
          g && (f.src = g.replace('[breakpoint]', c));
        }
    }, l = function () {
      for (var b in c.breakpoints) {
        var d = c.breakpoints[b], e = a.matchMedia(d).matches;
        if (c._namedEvents[b] && c._eventMatchCache[b] !== e)
          for (var f = 0; f < c._namedEvents[b].length; f++) {
            var g = c._namedEvents[b][f];
            c._eventMatchCache[b] = e, 'function' == typeof g && g(e);
          }
        if (e)
          for (var h = 0; h < c._globalEvents.length; h++) {
            var i = c._globalEvents[h];
            'function' == typeof i && i();
          }
        j(e, b), k(e, b);
      }
    }, m = function () {
      for (var a = b.getElementsByTagName('meta'), d = 0; d < a.length; d++)
        if ('breakpoint' === a[d].name) {
          var e = a[d].getAttribute('content'), f = a[d].getAttribute('media');
          c.breakpoints[e] = f;
        }
    }, n = function () {
      m(), l();
    }, o = function () {
      m(), e(a, 'resize', f(function () {
        l();
      }, 50)), l();
    };
  a.metaQuery = c, n(), d(o);
}(this, this.document), function (a, b, c) {
  'use strict';
  function d(a) {
    return function () {
      var b, c, d = arguments[0], e = '[' + (a ? a + ':' : '') + d + '] ', f = arguments[1], g = arguments, h = function (a) {
          return 'function' == typeof a ? a.toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof a ? 'undefined' : 'string' != typeof a ? JSON.stringify(a) : a;
        };
      for (b = e + f.replace(/\{\d+\}/g, function (a) {
          var b, c = +a.slice(1, -1);
          return c + 2 < g.length ? (b = g[c + 2], 'function' == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, '') : 'undefined' == typeof b ? 'undefined' : 'string' != typeof b ? Q(b) : b) : a;
        }), b = b + '\nhttp://errors.angularjs.org/1.2.14-build.2267+sha.cceb455/' + (a ? a + '/' : '') + d, c = 2; c < arguments.length; c++)
        b = b + (2 == c ? '?' : '&') + 'p' + (c - 2) + '=' + encodeURIComponent(h(arguments[c]));
      return new Error(b);
    };
  }
  function e(a) {
    if (null == a || A(a))
      return !1;
    var b = a.length;
    return 1 === a.nodeType && b ? !0 : u(a) || x(a) || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a;
  }
  function f(a, b, c) {
    var d;
    if (a)
      if (y(a))
        for (d in a)
          'prototype' == d || 'length' == d || 'name' == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
      else if (a.forEach && a.forEach !== f)
        a.forEach(b, c);
      else if (e(a))
        for (d = 0; d < a.length; d++)
          b.call(c, a[d], d);
      else
        for (d in a)
          a.hasOwnProperty(d) && b.call(c, a[d], d);
    return a;
  }
  function g(a) {
    var b = [];
    for (var c in a)
      a.hasOwnProperty(c) && b.push(c);
    return b.sort();
  }
  function h(a, b, c) {
    for (var d = g(a), e = 0; e < d.length; e++)
      b.call(c, a[d[e]], d[e]);
    return d;
  }
  function i(a) {
    return function (b, c) {
      a(c, b);
    };
  }
  function j() {
    for (var a, b = ud.length; b;) {
      if (b--, a = ud[b].charCodeAt(0), 57 == a)
        return ud[b] = 'A', ud.join('');
      if (90 != a)
        return ud[b] = String.fromCharCode(a + 1), ud.join('');
      ud[b] = '0';
    }
    return ud.unshift('0'), ud.join('');
  }
  function k(a, b) {
    b ? a.$$hashKey = b : delete a.$$hashKey;
  }
  function l(a) {
    var b = a.$$hashKey;
    return f(arguments, function (b) {
      b !== a && f(b, function (b, c) {
        a[c] = b;
      });
    }), k(a, b), a;
  }
  function m(a) {
    return parseInt(a, 10);
  }
  function n(a, b) {
    return l(new (l(function () {
    }, { prototype: a }))(), b);
  }
  function o() {
  }
  function p(a) {
    return a;
  }
  function q(a) {
    return function () {
      return a;
    };
  }
  function r(a) {
    return 'undefined' == typeof a;
  }
  function s(a) {
    return 'undefined' != typeof a;
  }
  function t(a) {
    return null != a && 'object' == typeof a;
  }
  function u(a) {
    return 'string' == typeof a;
  }
  function v(a) {
    return 'number' == typeof a;
  }
  function w(a) {
    return '[object Date]' === rd.call(a);
  }
  function x(a) {
    return '[object Array]' === rd.call(a);
  }
  function y(a) {
    return 'function' == typeof a;
  }
  function z(a) {
    return '[object RegExp]' === rd.call(a);
  }
  function A(a) {
    return a && a.document && a.location && a.alert && a.setInterval;
  }
  function B(a) {
    return a && a.$evalAsync && a.$watch;
  }
  function C(a) {
    return '[object File]' === rd.call(a);
  }
  function D(a) {
    return !(!a || !(a.nodeName || a.on && a.find));
  }
  function E(a, b, c) {
    var d = [];
    return f(a, function (a, e, f) {
      d.push(b.call(c, a, e, f));
    }), d;
  }
  function F(a, b) {
    return -1 != G(a, b);
  }
  function G(a, b) {
    if (a.indexOf)
      return a.indexOf(b);
    for (var c = 0; c < a.length; c++)
      if (b === a[c])
        return c;
    return -1;
  }
  function H(a, b) {
    var c = G(a, b);
    return c >= 0 && a.splice(c, 1), b;
  }
  function I(a, b) {
    if (A(a) || B(a))
      throw sd('cpws', 'Can\'t copy! Making copies of Window or Scope instances is not supported.');
    if (b) {
      if (a === b)
        throw sd('cpi', 'Can\'t copy! Source and destination are identical.');
      if (x(a)) {
        b.length = 0;
        for (var c = 0; c < a.length; c++)
          b.push(I(a[c]));
      } else {
        var d = b.$$hashKey;
        f(b, function (a, c) {
          delete b[c];
        });
        for (var e in a)
          b[e] = I(a[e]);
        k(b, d);
      }
    } else
      b = a, a && (x(a) ? b = I(a, []) : w(a) ? b = new Date(a.getTime()) : z(a) ? b = new RegExp(a.source) : t(a) && (b = I(a, {})));
    return b;
  }
  function J(a, b) {
    b = b || {};
    for (var c in a)
      !a.hasOwnProperty(c) || '$' === c.charAt(0) && '$' === c.charAt(1) || (b[c] = a[c]);
    return b;
  }
  function K(a, b) {
    if (a === b)
      return !0;
    if (null === a || null === b)
      return !1;
    if (a !== a && b !== b)
      return !0;
    var d, e, f, g = typeof a, h = typeof b;
    if (g == h && 'object' == g) {
      if (!x(a)) {
        if (w(a))
          return w(b) && a.getTime() == b.getTime();
        if (z(a) && z(b))
          return a.toString() == b.toString();
        if (B(a) || B(b) || A(a) || A(b) || x(b))
          return !1;
        f = {};
        for (e in a)
          if ('$' !== e.charAt(0) && !y(a[e])) {
            if (!K(a[e], b[e]))
              return !1;
            f[e] = !0;
          }
        for (e in b)
          if (!f.hasOwnProperty(e) && '$' !== e.charAt(0) && b[e] !== c && !y(b[e]))
            return !1;
        return !0;
      }
      if (!x(b))
        return !1;
      if ((d = a.length) == b.length) {
        for (e = 0; d > e; e++)
          if (!K(a[e], b[e]))
            return !1;
        return !0;
      }
    }
    return !1;
  }
  function L() {
    return b.securityPolicy && b.securityPolicy.isActive || b.querySelector && !(!b.querySelector('[ng-csp]') && !b.querySelector('[data-ng-csp]'));
  }
  function M(a, b, c) {
    return a.concat(pd.call(b, c));
  }
  function N(a, b) {
    return pd.call(a, b || 0);
  }
  function O(a, b) {
    var c = arguments.length > 2 ? N(arguments, 2) : [];
    return !y(b) || b instanceof RegExp ? b : c.length ? function () {
      return arguments.length ? b.apply(a, c.concat(pd.call(arguments, 0))) : b.apply(a, c);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }
  function P(a, d) {
    var e = d;
    return 'string' == typeof a && '$' === a.charAt(0) ? e = c : A(d) ? e = '$WINDOW' : d && b === d ? e = '$DOCUMENT' : B(d) && (e = '$SCOPE'), e;
  }
  function Q(a, b) {
    return 'undefined' == typeof a ? c : JSON.stringify(a, P, b ? '  ' : null);
  }
  function R(a) {
    return u(a) ? JSON.parse(a) : a;
  }
  function S(a) {
    if ('function' == typeof a)
      a = !0;
    else if (a && 0 !== a.length) {
      var b = fd('' + a);
      a = !('f' == b || '0' == b || 'false' == b || 'no' == b || 'n' == b || '[]' == b);
    } else
      a = !1;
    return a;
  }
  function T(a) {
    a = ld(a).clone();
    try {
      a.empty();
    } catch (b) {
    }
    var c = 3, d = ld('<div>').append(a).html();
    try {
      return a[0].nodeType === c ? fd(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + fd(b);
      });
    } catch (b) {
      return fd(d);
    }
  }
  function U(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {
    }
  }
  function V(a) {
    var b, c, d = {};
    return f((a || '').split('&'), function (a) {
      if (a && (b = a.split('='), c = U(b[0]), s(c))) {
        var e = s(b[1]) ? U(b[1]) : !0;
        d[c] ? x(d[c]) ? d[c].push(e) : d[c] = [
          d[c],
          e
        ] : d[c] = e;
      }
    }), d;
  }
  function W(a) {
    var b = [];
    return f(a, function (a, c) {
      x(a) ? f(a, function (a) {
        b.push(Y(c, !0) + (a === !0 ? '' : '=' + Y(a, !0)));
      }) : b.push(Y(c, !0) + (a === !0 ? '' : '=' + Y(a, !0)));
    }), b.length ? b.join('&') : '';
  }
  function X(a) {
    return Y(a, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function Y(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, b ? '%20' : '+');
  }
  function Z(a, c) {
    function d(a) {
      a && h.push(a);
    }
    var e, g, h = [a], i = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    f(i, function (c) {
      i[c] = !0, d(b.getElementById(c)), c = c.replace(':', '\\:'), a.querySelectorAll && (f(a.querySelectorAll('.' + c), d), f(a.querySelectorAll('.' + c + '\\:'), d), f(a.querySelectorAll('[' + c + ']'), d));
    }), f(h, function (a) {
      if (!e) {
        var b = ' ' + a.className + ' ', c = j.exec(b);
        c ? (e = a, g = (c[2] || '').replace(/\s+/g, ',')) : f(a.attributes, function (b) {
          !e && i[b.name] && (e = a, g = b.value);
        });
      }
    }), e && c(e, g ? [g] : []);
  }
  function $(c, d) {
    var e = function () {
        if (c = ld(c), c.injector()) {
          var a = c[0] === b ? 'document' : T(c);
          throw sd('btstrpd', 'App Already Bootstrapped with this Element \'{0}\'', a);
        }
        d = d || [], d.unshift([
          '$provide',
          function (a) {
            a.value('$rootElement', c);
          }
        ]), d.unshift('ng');
        var e = Eb(d);
        return e.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          '$animate',
          function (a, b, c, d) {
            a.$apply(function () {
              b.data('$injector', d), c(b)(a);
            });
          }
        ]), e;
      }, g = /^NG_DEFER_BOOTSTRAP!/;
    return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ''), td.resumeBootstrap = function (a) {
      f(a, function (a) {
        d.push(a);
      }), e();
    }, void 0);
  }
  function _(a, b) {
    return b = b || '_', a.replace(wd, function (a, c) {
      return (c ? b : '') + a.toLowerCase();
    });
  }
  function ab() {
    md = a.jQuery, md ? (ld = md, l(md.fn, {
      scope: Gd.scope,
      isolateScope: Gd.isolateScope,
      controller: Gd.controller,
      injector: Gd.injector,
      inheritedData: Gd.inheritedData
    }), kb('remove', !0, !0, !1), kb('empty', !1, !1, !1), kb('html', !1, !1, !0)) : ld = lb, td.element = ld;
  }
  function bb(a, b, c) {
    if (!a)
      throw sd('areq', 'Argument \'{0}\' is {1}', b || '?', c || 'required');
    return a;
  }
  function cb(a, b, c) {
    return c && x(a) && (a = a[a.length - 1]), bb(y(a), b, 'not a function, got ' + (a && 'object' == typeof a ? a.constructor.name || 'Object' : typeof a)), a;
  }
  function db(a, b) {
    if ('hasOwnProperty' === a)
      throw sd('badname', 'hasOwnProperty is not a valid {0} name', b);
  }
  function eb(a, b, c) {
    if (!b)
      return a;
    for (var d, e = b.split('.'), f = a, g = e.length, h = 0; g > h; h++)
      d = e[h], a && (a = (f = a)[d]);
    return !c && y(a) ? O(f, a) : a;
  }
  function fb(a) {
    var b = a[0], c = a[a.length - 1];
    if (b === c)
      return ld(b);
    var d = b, e = [d];
    do {
      if (d = d.nextSibling, !d)
        break;
      e.push(d);
    } while (d !== c);
    return ld(e);
  }
  function gb(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }
    var c = d('$injector'), e = d('ng'), f = b(a, 'angular', Object);
    return f.$$minErr = f.$$minErr || d, b(f, 'module', function () {
      var a = {};
      return function (d, f, g) {
        var h = function (a, b) {
          if ('hasOwnProperty' === a)
            throw e('badname', 'hasOwnProperty is not a valid {0} name', b);
        };
        return h(d, 'module'), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function () {
          function a(a, c, d) {
            return function () {
              return b[d || 'push']([
                a,
                c,
                arguments
              ]), i;
            };
          }
          if (!f)
            throw c('nomod', 'Module \'{0}\' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.', d);
          var b = [], e = [], h = a('$injector', 'invoke'), i = {
              _invokeQueue: b,
              _runBlocks: e,
              requires: f,
              name: d,
              provider: a('$provide', 'provider'),
              factory: a('$provide', 'factory'),
              service: a('$provide', 'service'),
              value: a('$provide', 'value'),
              constant: a('$provide', 'constant', 'unshift'),
              animation: a('$animateProvider', 'register'),
              filter: a('$filterProvider', 'register'),
              controller: a('$controllerProvider', 'register'),
              directive: a('$compileProvider', 'directive'),
              config: h,
              run: function (a) {
                return e.push(a), this;
              }
            };
          return g && h(g), i;
        });
      };
    });
  }
  function hb(b) {
    l(b, {
      bootstrap: $,
      copy: I,
      extend: l,
      equals: K,
      element: ld,
      forEach: f,
      injector: Eb,
      noop: o,
      bind: O,
      toJson: Q,
      fromJson: R,
      identity: p,
      isUndefined: r,
      isDefined: s,
      isString: u,
      isFunction: y,
      isObject: t,
      isNumber: v,
      isElement: D,
      isArray: x,
      version: xd,
      isDate: w,
      lowercase: fd,
      uppercase: hd,
      callbacks: { counter: 0 },
      $$minErr: d,
      $$csp: L
    }), nd = gb(a);
    try {
      nd('ngLocale');
    } catch (c) {
      nd('ngLocale', []).provider('$locale', $b);
    }
    nd('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: yc }), a.provider('$compile', Kb).directive({
          a: me,
          input: we,
          textarea: we,
          form: qe,
          script: df,
          select: gf,
          style: jf,
          option: hf,
          ngBind: Ie,
          ngBindHtml: Ke,
          ngBindTemplate: Je,
          ngClass: Le,
          ngClassEven: Ne,
          ngClassOdd: Me,
          ngCloak: Oe,
          ngController: Pe,
          ngForm: re,
          ngHide: Ze,
          ngIf: Re,
          ngInclude: Se,
          ngInit: Ue,
          ngNonBindable: Ve,
          ngPluralize: We,
          ngRepeat: Xe,
          ngShow: Ye,
          ngStyle: $e,
          ngSwitch: _e,
          ngSwitchWhen: af,
          ngSwitchDefault: bf,
          ngOptions: ff,
          ngTransclude: cf,
          ngModel: Ce,
          ngList: Fe,
          ngChange: De,
          required: Ee,
          ngRequired: Ee,
          ngValue: He
        }).directive({ ngInclude: Te }).directive(ne).directive(Qe), a.provider({
          $anchorScroll: Fb,
          $animate: Pd,
          $browser: Hb,
          $cacheFactory: Ib,
          $controller: Nb,
          $document: Ob,
          $exceptionHandler: Pb,
          $filter: Jc,
          $interpolate: Yb,
          $interval: Zb,
          $http: Ub,
          $httpBackend: Wb,
          $location: lc,
          $log: mc,
          $parse: uc,
          $rootScope: xc,
          $q: vc,
          $sce: Dc,
          $sceDelegate: Cc,
          $sniffer: Ec,
          $templateCache: Jb,
          $timeout: Fc,
          $window: Ic
        });
      }
    ]);
  }
  function ib() {
    return ++Ad;
  }
  function jb(a) {
    return a.replace(Dd, function (a, b, c, d) {
      return d ? c.toUpperCase() : c;
    }).replace(Ed, 'Moz$1');
  }
  function kb(a, b, c, d) {
    function e(a) {
      var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this], n = b;
      if (!d || null != a)
        for (; m.length;)
          for (e = m.shift(), g = 0, h = e.length; h > g; g++)
            for (i = ld(e[g]), n ? i.triggerHandler('$destroy') : n = !n, j = 0, k = (l = i.children()).length; k > j; j++)
              m.push(md(l[j]));
      return f.apply(this, arguments);
    }
    var f = md.fn[a];
    f = f.$original || f, e.$original = f, md.fn[a] = e;
  }
  function lb(a) {
    if (a instanceof lb)
      return a;
    if (u(a) && (a = vd(a)), !(this instanceof lb)) {
      if (u(a) && '<' != a.charAt(0))
        throw Fd('nosel', 'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element');
      return new lb(a);
    }
    if (u(a)) {
      var c = b.createElement('div');
      c.innerHTML = '<div>&#160;</div>' + a, c.removeChild(c.firstChild), vb(this, c.childNodes);
      var d = ld(b.createDocumentFragment());
      d.append(this);
    } else
      vb(this, a);
  }
  function mb(a) {
    return a.cloneNode(!0);
  }
  function nb(a) {
    pb(a);
    for (var b = 0, c = a.childNodes || []; b < c.length; b++)
      nb(c[b]);
  }
  function ob(a, b, c, d) {
    if (s(d))
      throw Fd('offargs', 'jqLite#off() does not support the `selector` argument');
    var e = qb(a, 'events'), g = qb(a, 'handle');
    g && (r(b) ? f(e, function (b, c) {
      Cd(a, c, b), delete e[c];
    }) : f(b.split(' '), function (b) {
      r(c) ? (Cd(a, b, e[b]), delete e[b]) : H(e[b] || [], c);
    }));
  }
  function pb(a, b) {
    var d = a[zd], e = yd[d];
    if (e) {
      if (b)
        return delete yd[d].data[b], void 0;
      e.handle && (e.events.$destroy && e.handle({}, '$destroy'), ob(a)), delete yd[d], a[zd] = c;
    }
  }
  function qb(a, b, c) {
    var d = a[zd], e = yd[d || -1];
    return s(c) ? (e || (a[zd] = d = ib(), e = yd[d] = {}), e[b] = c, void 0) : e && e[b];
  }
  function rb(a, b, c) {
    var d = qb(a, 'data'), e = s(c), f = !e && s(b), g = f && !t(b);
    if (d || g || qb(a, 'data', d = {}), e)
      d[b] = c;
    else {
      if (!f)
        return d;
      if (g)
        return d && d[b];
      l(d, b);
    }
  }
  function sb(a, b) {
    return a.getAttribute ? (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + b + ' ') > -1 : !1;
  }
  function tb(a, b) {
    b && a.setAttribute && f(b.split(' '), function (b) {
      a.setAttribute('class', vd((' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + vd(b) + ' ', ' ')));
    });
  }
  function ub(a, b) {
    if (b && a.setAttribute) {
      var c = (' ' + (a.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      f(b.split(' '), function (a) {
        a = vd(a), -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      }), a.setAttribute('class', vd(c));
    }
  }
  function vb(a, b) {
    if (b) {
      b = b.nodeName || !s(b.length) || A(b) ? [b] : b;
      for (var c = 0; c < b.length; c++)
        a.push(b[c]);
    }
  }
  function wb(a, b) {
    return xb(a, '$' + (b || 'ngController') + 'Controller');
  }
  function xb(a, b, d) {
    a = ld(a), 9 == a[0].nodeType && (a = a.find('html'));
    for (var e = x(b) ? b : [b]; a.length;) {
      for (var f = 0, g = e.length; g > f; f++)
        if ((d = a.data(e[f])) !== c)
          return d;
      a = a.parent();
    }
  }
  function yb(a) {
    for (var b = 0, c = a.childNodes; b < c.length; b++)
      nb(c[b]);
    for (; a.firstChild;)
      a.removeChild(a.firstChild);
  }
  function zb(a, b) {
    var c = Hd[b.toLowerCase()];
    return c && Id[a.nodeName] && c;
  }
  function Ab(a, c) {
    var d = function (d, e) {
      if (d.preventDefault || (d.preventDefault = function () {
          d.returnValue = !1;
        }), d.stopPropagation || (d.stopPropagation = function () {
          d.cancelBubble = !0;
        }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
        var g = d.preventDefault;
        d.preventDefault = function () {
          d.defaultPrevented = !0, g.call(d);
        }, d.defaultPrevented = !1;
      }
      d.isDefaultPrevented = function () {
        return d.defaultPrevented || d.returnValue === !1;
      };
      var h = J(c[e || d.type] || []);
      f(h, function (b) {
        b.call(a, d);
      }), 8 >= kd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented);
    };
    return d.elem = a, d;
  }
  function Bb(a) {
    var b, d = typeof a;
    return 'object' == d && null !== a ? 'function' == typeof (b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = j()) : b = a, d + ':' + b;
  }
  function Cb(a) {
    f(a, this.put, this);
  }
  function Db(a) {
    var b, c, d, e;
    return 'function' == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Md, ''), d = c.match(Jd), f(d[1].split(Kd), function (a) {
      a.replace(Ld, function (a, c, d) {
        b.push(d);
      });
    })), a.$inject = b) : x(a) ? (e = a.length - 1, cb(a[e], 'fn'), b = a.slice(0, e)) : cb(a, 'fn', !0), b;
  }
  function Eb(a) {
    function b(a) {
      return function (b, c) {
        return t(b) ? (f(b, i(a)), void 0) : a(b, c);
      };
    }
    function c(a, b) {
      if (db(a, 'service'), (y(b) || x(b)) && (b = v.instantiate(b)), !b.$get)
        throw Nd('pget', 'Provider \'{0}\' must define $get factory method.', a);
      return s[a + n] = b;
    }
    function d(a, b) {
      return c(a, { $get: b });
    }
    function e(a, b) {
      return d(a, [
        '$injector',
        function (a) {
          return a.instantiate(b);
        }
      ]);
    }
    function g(a, b) {
      return d(a, q(b));
    }
    function h(a, b) {
      db(a, 'constant'), s[a] = b, w[a] = b;
    }
    function j(a, b) {
      var c = v.get(a + n), d = c.$get;
      c.$get = function () {
        var a = z.invoke(d, c);
        return z.invoke(b, null, { $delegate: a });
      };
    }
    function k(a) {
      var b, c, d, e, g = [];
      return f(a, function (a) {
        if (!r.get(a)) {
          r.put(a, !0);
          try {
            if (u(a))
              for (b = nd(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
                var f = c[d], h = v.get(f[0]);
                h[f[1]].apply(h, f[2]);
              }
            else
              y(a) ? g.push(v.invoke(a)) : x(a) ? g.push(v.invoke(a)) : cb(a, 'module');
          } catch (i) {
            throw x(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + '\n' + i.stack), Nd('modulerr', 'Failed to instantiate module {0} due to:\n{1}', a, i.stack || i.message || i);
          }
        }
      }), g;
    }
    function l(a, b) {
      function c(c) {
        if (a.hasOwnProperty(c)) {
          if (a[c] === m)
            throw Nd('cdep', 'Circular dependency found: {0}', p.join(' <- '));
          return a[c];
        }
        try {
          return p.unshift(c), a[c] = m, a[c] = b(c);
        } catch (d) {
          throw a[c] === m && delete a[c], d;
        } finally {
          p.shift();
        }
      }
      function d(a, b, d) {
        var e, f, g, h = [], i = Db(a);
        for (f = 0, e = i.length; e > f; f++) {
          if (g = i[f], 'string' != typeof g)
            throw Nd('itkn', 'Incorrect injection token! Expected service name as string, got {0}', g);
          h.push(d && d.hasOwnProperty(g) ? d[g] : c(g));
        }
        return a.$inject || (a = a[e]), a.apply(b, h);
      }
      function e(a, b) {
        var c, e, f = function () {
          };
        return f.prototype = (x(a) ? a[a.length - 1] : a).prototype, c = new f(), e = d(a, c, b), t(e) || y(e) ? e : c;
      }
      return {
        invoke: d,
        instantiate: e,
        get: c,
        annotate: Db,
        has: function (b) {
          return s.hasOwnProperty(b + n) || a.hasOwnProperty(b);
        }
      };
    }
    var m = {}, n = 'Provider', p = [], r = new Cb(), s = {
        $provide: {
          provider: b(c),
          factory: b(d),
          service: b(e),
          value: b(g),
          constant: b(h),
          decorator: j
        }
      }, v = s.$injector = l(s, function () {
        throw Nd('unpr', 'Unknown provider: {0}', p.join(' <- '));
      }), w = {}, z = w.$injector = l(w, function (a) {
        var b = v.get(a + n);
        return z.invoke(b.$get, b);
      });
    return f(k(a), function (a) {
      z.invoke(a || o);
    }), z;
  }
  function Fb() {
    var a = !0;
    this.disableAutoScrolling = function () {
      a = !1;
    }, this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (b, c, d) {
        function e(a) {
          var b = null;
          return f(a, function (a) {
            b || 'a' !== fd(a.nodeName) || (b = a);
          }), b;
        }
        function g() {
          var a, d = c.hash();
          d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : 'top' === d && b.scrollTo(0, 0) : b.scrollTo(0, 0);
        }
        var h = b.document;
        return a && d.$watch(function () {
          return c.hash();
        }, function () {
          d.$evalAsync(g);
        }), g;
      }
    ];
  }
  function Gb(a, b, d, e) {
    function g(a) {
      try {
        a.apply(null, N(arguments, 1));
      } finally {
        if (s--, 0 === s)
          for (; t.length;)
            try {
              t.pop()();
            } catch (b) {
              d.error(b);
            }
      }
    }
    function h(a, b) {
      !function c() {
        f(w, function (a) {
          a();
        }), v = b(c, a);
      }();
    }
    function i() {
      z = null, x != j.url() && (x = j.url(), f(A, function (a) {
        a(j.url());
      }));
    }
    var j = this, k = b[0], l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, q = {};
    j.isMock = !1;
    var s = 0, t = [];
    j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function () {
      s++;
    }, j.notifyWhenNoOutstandingRequests = function (a) {
      f(w, function (a) {
        a();
      }), 0 === s ? a() : t.push(a);
    };
    var v, w = [];
    j.addPollFn = function (a) {
      return r(v) && h(100, n), w.push(a), a;
    };
    var x = l.href, y = b.find('base'), z = null;
    j.url = function (b, c) {
      if (l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
        if (x == b)
          return;
        return x = b, e.history ? c ? m.replaceState(null, '', b) : (m.pushState(null, '', b), y.attr('href', y.attr('href'))) : (z = b, c ? l.replace(b) : l.href = b), j;
      }
      return z || l.href.replace(/%27/g, '\'');
    };
    var A = [], B = !1;
    j.onUrlChange = function (b) {
      return B || (e.history && ld(a).on('popstate', i), e.hashchange ? ld(a).on('hashchange', i) : j.addPollFn(i), B = !0), A.push(b), b;
    }, j.baseHref = function () {
      var a = y.attr('href');
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var C = {}, D = '', E = j.baseHref();
    j.cookies = function (a, b) {
      var e, f, g, h, i;
      if (!a) {
        if (k.cookie !== D)
          for (D = k.cookie, f = D.split('; '), C = {}, h = 0; h < f.length; h++)
            g = f[h], i = g.indexOf('='), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
        return C;
      }
      b === c ? k.cookie = escape(a) + '=;path=' + E + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : u(b) && (e = (k.cookie = escape(a) + '=' + escape(b) + ';path=' + E).length + 1, e > 4096 && d.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + e + ' > 4096 bytes)!'));
    }, j.defer = function (a, b) {
      var c;
      return s++, c = n(function () {
        delete q[c], g(a);
      }, b || 0), q[c] = !0, c;
    }, j.defer.cancel = function (a) {
      return q[a] ? (delete q[a], p(a), g(o), !0) : !1;
    };
  }
  function Hb() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (a, b, c, d) {
        return new Gb(a, d, b, c);
      }
    ];
  }
  function Ib() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null);
        }
        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (a in b)
          throw d('$cacheFactory')('iid', 'CacheId \'{0}\' is already taken!', a);
        var g = 0, h = l({}, c, { id: a }), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
        return b[a] = {
          put: function (a, b) {
            var c = k[a] || (k[a] = { key: a });
            return e(c), r(b) ? void 0 : (a in i || g++, i[a] = b, g > j && this.remove(n.key), b);
          },
          get: function (a) {
            var b = k[a];
            if (b)
              return e(b), i[a];
          },
          remove: function (a) {
            var b = k[a];
            b && (b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a], delete i[a], g--);
          },
          removeAll: function () {
            i = {}, g = 0, k = {}, m = n = null;
          },
          destroy: function () {
            i = null, h = null, k = null, delete b[a];
          },
          info: function () {
            return l({}, h, { size: g });
          }
        };
      }
      var b = {};
      return a.info = function () {
        var a = {};
        return f(b, function (b, c) {
          a[c] = b.info();
        }), a;
      }, a.get = function (a) {
        return b[a];
      }, a;
    };
  }
  function Jb() {
    this.$get = [
      '$cacheFactory',
      function (a) {
        return a('templates');
      }
    ];
  }
  function Kb(a, d) {
    var e = {}, g = 'Directive', h = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, j = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, k = /^<\s*(tr|th|td|tbody)(\s+[^>]*)?>/i, m = /^(on[a-z]+|formaction)$/;
    this.directive = function o(b, c) {
      return db(b, 'directive'), u(b) ? (bb(c, 'directiveFactory'), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, [
        '$injector',
        '$exceptionHandler',
        function (a, c) {
          var d = [];
          return f(e[b], function (e, f) {
            try {
              var g = a.invoke(e);
              y(g) ? g = { compile: q(g) } : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || 'A', d.push(g);
            } catch (h) {
              c(h);
            }
          }), d;
        }
      ])), e[b].push(c)) : f(b, i(o)), this;
    }, this.aHrefSanitizationWhitelist = function (a) {
      return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist();
    }, this.imgSrcSanitizationWhitelist = function (a) {
      return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist();
    }, this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (a, d, i, o, r, s, v, w, z, A, B, C) {
        function D(a, b, c, d, e) {
          a instanceof ld || (a = ld(a)), f(a, function (b, c) {
            3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = ld(b).wrap('<span></span>').parent()[0]);
          });
          var g = F(a, b, a, c, d, e);
          return E(a, 'ng-scope'), function (b, c, d) {
            bb(b, 'scope');
            var e = c ? Gd.clone.call(a) : a;
            f(d, function (a, b) {
              e.data('$' + b + 'Controller', a);
            });
            for (var h = 0, i = e.length; i > h; h++) {
              var j = e[h], k = j.nodeType;
              (1 === k || 9 === k) && e.eq(h).data('$scope', b);
            }
            return c && c(e, b), g && g(b, e, e), e;
          };
        }
        function E(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function F(a, b, d, e, f, g) {
          function h(a, d, e, f) {
            var g, h, i, j, k, l, m, n, p, q = d.length, r = new Array(q);
            for (m = 0; q > m; m++)
              r[m] = d[m];
            for (m = 0, p = 0, n = o.length; n > m; p++)
              i = r[p], g = o[m++], h = o[m++], j = ld(i), g ? (g.scope ? (k = a.$new(), j.data('$scope', k)) : k = a, l = g.transclude, l || !f && b ? g(h, k, i, e, G(a, l || b)) : g(h, k, i, e, f)) : h && h(a, i.childNodes, c, f);
          }
          for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++)
            i = new cb(), j = H(a[p], [], i, 0 === p ? e : c, f), k = j.length ? M(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && E(ld(a[p]), 'ng-scope'), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : F(l, k ? k.transclude : b), o.push(k, m), n = n || k || m, g = null;
          return n ? h : null;
        }
        function G(a, b) {
          return function (c, d, e) {
            var f = !1;
            c || (c = a.$new(), c.$$transcluded = !0, f = !0);
            var g = b(c, d, e);
            return f && g.on('$destroy', O(c, c.$destroy)), g;
          };
        }
        function H(a, b, c, d, e) {
          var f, g, i = a.nodeType, k = c.$attr;
          switch (i) {
          case 1:
            Q(b, Lb(od(a).toLowerCase()), 'E', d, e);
            for (var l, m, n, o, p, q = a.attributes, r = 0, s = q && q.length; s > r; r++) {
              var t = !1, v = !1;
              if (l = q[r], !kd || kd >= 8 || l.specified) {
                m = l.name, o = Lb(m), gb.test(o) && (m = _(o.substr(6), '-'));
                var w = o.replace(/(Start|End)$/, '');
                o === w + 'Start' && (t = m, v = m.substr(0, m.length - 5) + 'end', m = m.substr(0, m.length - 6)), n = Lb(m.toLowerCase()), k[n] = m, c[n] = p = vd(l.value), zb(a, n) && (c[n] = !0), Z(a, b, p, n), Q(b, n, 'A', d, e, t, v);
              }
            }
            if (g = a.className, u(g) && '' !== g)
              for (; f = j.exec(g);)
                n = Lb(f[2]), Q(b, n, 'C', d, e) && (c[n] = vd(f[3])), g = g.substr(f.index + f[0].length);
            break;
          case 3:
            X(b, a.nodeValue);
            break;
          case 8:
            try {
              f = h.exec(a.nodeValue), f && (n = Lb(f[1]), Q(b, n, 'M', d, e) && (c[n] = vd(f[2])));
            } catch (x) {
            }
          }
          return b.sort(V), b;
        }
        function I(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw Qd('uterdir', 'Unterminated attribute, found \'{0}\' but no matching \'{1}\' found.', b, c);
              1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling;
            } while (e > 0);
          } else
            d.push(a);
          return ld(d);
        }
        function L(a, b, c) {
          return function (d, e, f, g, h) {
            return e = I(e[0], b, c), a(d, e, f, g, h);
          };
        }
        function M(a, e, g, h, j, k, l, m, n) {
          function o(a, b, c, d) {
            a && (c && (a = L(a, c, d)), a.require = w.require, (M === w || w.$$isolateScope) && (a = ab(a, { isolateScope: !0 })), l.push(a)), b && (c && (b = L(b, c, d)), b.require = w.require, (M === w || w.$$isolateScope) && (b = ab(b, { isolateScope: !0 })), m.push(b));
          }
          function p(a, b, c) {
            var d, e = 'data', g = !1;
            if (u(a)) {
              for (; '^' == (d = a.charAt(0)) || '?' == d;)
                a = a.substr(1), '^' == d && (e = 'inheritedData'), g = g || '?' == d;
              if (d = null, c && 'data' === e && (d = c[a]), d = d || b[e]('$' + a + 'Controller'), !d && !g)
                throw Qd('ctreq', 'Controller \'{0}\', required by directive \'{1}\', can\'t be found!', a, z);
              return d;
            }
            return x(a) && (d = [], f(a, function (a) {
              d.push(p(a, b, c));
            })), d;
          }
          function q(a, b, h, j, k) {
            function n(a, b) {
              var d;
              return arguments.length < 2 && (b = a, a = c), X && (d = z), k(a, b, d);
            }
            var o, q, r, t, u, w, x, y, z = {};
            if (o = e === h ? g : J(g, new cb(ld(h), g.$attr)), q = o.$$element, M) {
              var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/, B = ld(h);
              x = b.$new(!0), O && O === M.$$originalDirective ? B.data('$isolateScope', x) : B.data('$isolateScopeNoTemplate', x), E(B, 'ng-isolate-scope'), f(M.scope, function (a, c) {
                var e, f, g, h, i = a.match(A) || [], j = i[3] || c, k = '?' == i[2], l = i[1];
                switch (x.$$isolateBindings[c] = l + j, l) {
                case '@':
                  o.$observe(j, function (a) {
                    x[c] = a;
                  }), o.$$observers[j].$$scope = b, o[j] && (x[c] = d(o[j])(b));
                  break;
                case '=':
                  if (k && !o[j])
                    return;
                  f = s(o[j]), h = f.literal ? K : function (a, b) {
                    return a === b;
                  }, g = f.assign || function () {
                    throw e = x[c] = f(b), Qd('nonassign', 'Expression \'{0}\' used with directive \'{1}\' is non-assignable!', o[j], M.name);
                  }, e = x[c] = f(b), x.$watch(function () {
                    var a = f(b);
                    return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a), e = a;
                  }, null, f.literal);
                  break;
                case '&':
                  f = s(o[j]), x[c] = function (a) {
                    return f(b, a);
                  };
                  break;
                default:
                  throw Qd('iscp', 'Invalid isolate scope definition for directive \'{0}\'. Definition: {... {1}: \'{2}\' ...}', M.name, c, a);
                }
              });
            }
            for (y = k && n, G && f(G, function (a) {
                var c, d = {
                    $scope: a === M || a.$$isolateScope ? x : b,
                    $element: q,
                    $attrs: o,
                    $transclude: y
                  };
                w = a.controller, '@' == w && (w = o[a.name]), c = v(w, d), z[a.name] = c, X || q.data('$' + a.name + 'Controller', c), a.controllerAs && (d.$scope[a.controllerAs] = c);
              }), r = 0, t = l.length; t > r; r++)
              try {
                u = l[r], u(u.isolateScope ? x : b, q, o, u.require && p(u.require, q, z), y);
              } catch (C) {
                i(C, T(q));
              }
            var D = b;
            for (M && (M.template || null === M.templateUrl) && (D = x), a && a(D, h.childNodes, c, k), r = m.length - 1; r >= 0; r--)
              try {
                u = m[r], u(u.isolateScope ? x : b, q, o, u.require && p(u.require, q, z), y);
              } catch (C) {
                i(C, T(q));
              }
          }
          n = n || {};
          for (var r, w, z, A, B, C, F = -Number.MAX_VALUE, G = n.controllerDirectives, M = n.newIsolateScopeDirective, O = n.templateDirective, Q = n.nonTlbTranscludeDirective, V = !1, X = n.hasElementTranscludeDirective, Y = g.$$element = ld(e), Z = k, _ = h, bb = 0, db = a.length; db > bb; bb++) {
            w = a[bb];
            var eb = w.$$start, gb = w.$$end;
            if (eb && (Y = I(e, eb, gb)), A = c, F > w.priority)
              break;
            if ((C = w.scope) && (r = r || w, w.templateUrl || (W('new/isolated scope', M, w, Y), t(C) && (M = w))), z = w.name, !w.templateUrl && w.controller && (C = w.controller, G = G || {}, W('\'' + z + '\' controller', G[z], w, Y), G[z] = w), (C = w.transclude) && (V = !0, w.$$tlb || (W('transclusion', Q, w, Y), Q = w), 'element' == C ? (X = !0, F = w.priority, A = I(e, eb, gb), Y = g.$$element = ld(b.createComment(' ' + z + ': ' + g[z] + ' ')), e = Y[0], $(j, ld(N(A)), e), _ = D(A, h, F, Z && Z.name, { nonTlbTranscludeDirective: Q })) : (A = ld(mb(e)).contents(), Y.empty(), _ = D(A, h))), w.template)
              if (W('template', O, w, Y), O = w, C = y(w.template) ? w.template(Y, g) : w.template, C = fb(C), w.replace) {
                if (Z = w, A = S(C), e = A[0], 1 != A.length || 1 !== e.nodeType)
                  throw Qd('tplrt', 'Template for directive \'{0}\' must have exactly one root element. {1}', z, '');
                $(j, Y, e);
                var hb = { $attr: {} }, ib = H(e, [], hb), jb = a.splice(bb + 1, a.length - (bb + 1));
                M && P(ib), a = a.concat(ib).concat(jb), R(g, hb), db = a.length;
              } else
                Y.html(C);
            if (w.templateUrl)
              W('template', O, w, Y), O = w, w.replace && (Z = w), q = U(a.splice(bb, a.length - bb), Y, g, j, _, l, m, {
                controllerDirectives: G,
                newIsolateScopeDirective: M,
                templateDirective: O,
                nonTlbTranscludeDirective: Q
              }), db = a.length;
            else if (w.compile)
              try {
                B = w.compile(Y, g, _), y(B) ? o(null, B, eb, gb) : B && o(B.pre, B.post, eb, gb);
              } catch (kb) {
                i(kb, T(Y));
              }
            w.terminal && (q.terminal = !0, F = Math.max(F, w.priority));
          }
          return q.scope = r && r.scope === !0, q.transclude = V && _, n.hasElementTranscludeDirective = X, q;
        }
        function P(a) {
          for (var b = 0, c = a.length; c > b; b++)
            a[b] = n(a[b], { $$isolateScope: !0 });
        }
        function Q(b, d, f, h, j, k, l) {
          if (d === j)
            return null;
          var m = null;
          if (e.hasOwnProperty(d))
            for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++)
              try {
                o = p[q], (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                  $$start: k,
                  $$end: l
                })), b.push(o), m = o);
              } catch (s) {
                i(s);
              }
          return m;
        }
        function R(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          f(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          }), f(b, function (b, f) {
            'class' == f ? (E(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == f ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
          });
        }
        function S(a) {
          var b;
          if (a = vd(a), b = k.exec(a)) {
            b = b[1].toLowerCase();
            var c = ld('<table>' + a + '</table>'), d = c.children('tbody'), e = /(td|th)/.test(b) && c.find('tr');
            return d.length && 'tbody' !== b && (c = d), e && e.length && (c = e), c.contents();
          }
          return ld('<div>' + a + '</div>').contents();
        }
        function U(a, b, c, d, e, g, h, i) {
          var j, k, m = [], n = b[0], p = a.shift(), q = l({}, p, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: p
            }), s = y(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl;
          return b.empty(), o.get(A.getTrustedResourceUrl(s), { cache: r }).success(function (l) {
            var o, r, u, v;
            if (l = fb(l), p.replace) {
              if (u = S(l), o = u[0], 1 != u.length || 1 !== o.nodeType)
                throw Qd('tplrt', 'Template for directive \'{0}\' must have exactly one root element. {1}', p.name, s);
              r = { $attr: {} }, $(d, b, o);
              var w = H(o, [], r);
              t(p.scope) && P(w), a = w.concat(a), R(c, r);
            } else
              o = n, b.html(l);
            for (a.unshift(q), j = M(a, o, c, e, b, p, g, h, i), f(d, function (a, c) {
                a == o && (d[c] = b[0]);
              }), k = F(b[0].childNodes, e); m.length;) {
              var x = m.shift(), y = m.shift(), z = m.shift(), A = m.shift(), B = b[0];
              if (y !== n) {
                var C = y.className;
                i.hasElementTranscludeDirective && p.replace || (B = mb(o)), $(z, ld(y), B), E(ld(B), C);
              }
              v = j.transclude ? G(x, j.transclude) : A, j(k, x, B, d, v);
            }
            m = null;
          }).error(function (a, b, c, d) {
            throw Qd('tpload', 'Failed to load template: {0}', d.url);
          }), function (a, b, c, d, e) {
            m ? (m.push(b), m.push(c), m.push(d), m.push(e)) : j(k, b, c, d, e);
          };
        }
        function V(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function W(a, b, c, d) {
          if (b)
            throw Qd('multidir', 'Multiple directives [{0}, {1}] asking for {2} on: {3}', b.name, c.name, a, T(d));
        }
        function X(a, b) {
          var c = d(b, !0);
          c && a.push({
            priority: 0,
            compile: q(function (a, b) {
              var d = b.parent(), e = d.data('$binding') || [];
              e.push(c), E(d.data('$binding', e), 'ng-binding'), a.$watch(c, function (a) {
                b[0].nodeValue = a;
              });
            })
          });
        }
        function Y(a, b) {
          if ('srcdoc' == b)
            return A.HTML;
          var c = od(a);
          return 'xlinkHref' == b || 'FORM' == c && 'action' == b || 'IMG' != c && ('src' == b || 'ngSrc' == b) ? A.RESOURCE_URL : void 0;
        }
        function Z(a, b, c, e) {
          var f = d(c, !0);
          if (f) {
            if ('multiple' === e && 'SELECT' === od(a))
              throw Qd('selmulti', 'Binding to the \'multiple\' attribute is not supported. Element: {0}', T(a));
            b.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (b, c, g) {
                    var h = g.$$observers || (g.$$observers = {});
                    if (m.test(e))
                      throw Qd('nodomevents', 'Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.');
                    f = d(g[e], !0, Y(a, e)), f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function (a, b) {
                      'class' === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                    }));
                  }
                };
              }
            });
          }
        }
        function $(a, c, d) {
          var e, f, g = c[0], h = c.length, i = g.parentNode;
          if (a)
            for (e = 0, f = a.length; f > e; e++)
              if (a[e] == g) {
                a[e++] = d;
                for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++)
                  l > k ? a[j] = a[k] : delete a[j];
                a.length -= h - 1;
                break;
              }
          i && i.replaceChild(d, g);
          var m = b.createDocumentFragment();
          m.appendChild(g), d[ld.expando] = g[ld.expando];
          for (var n = 1, o = c.length; o > n; n++) {
            var p = c[n];
            ld(p).remove(), m.appendChild(p), delete c[n];
          }
          c[0] = d, c.length = 1;
        }
        function ab(a, b) {
          return l(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        var cb = function (a, b) {
          this.$$element = a, this.$attr = b || {};
        };
        cb.prototype = {
          $normalize: Lb,
          $addClass: function (a) {
            a && a.length > 0 && B.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && a.length > 0 && B.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            var c = Mb(a, b), d = Mb(b, a);
            0 === c.length ? B.removeClass(this.$$element, d) : 0 === d.length ? B.addClass(this.$$element, c) : B.setClass(this.$$element, c, d);
          },
          $set: function (a, b, d, e) {
            var g, h = zb(this.$$element[0], a);
            h && (this.$$element.prop(a, b), e = h), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = _(a, '-'))), g = od(this.$$element), ('A' === g && 'href' === a || 'IMG' === g && 'src' === a) && (this[a] = b = C(b, 'src' === a)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
            var j = this.$$observers;
            j && f(j[a], function (a) {
              try {
                a(b);
              } catch (c) {
                i(c);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
            return e.push(b), w.$evalAsync(function () {
              e.$$inter || b(c[a]);
            }), b;
          }
        };
        var db = d.startSymbol(), eb = d.endSymbol(), fb = '{{' == db || '}}' == eb ? p : function (a) {
            return a.replace(/\{\{/g, db).replace(/}}/g, eb);
          }, gb = /^ngAttr[A-Z]/;
        return D;
      }
    ];
  }
  function Lb(a) {
    return jb(a.replace(Rd, ''));
  }
  function Mb(a, b) {
    var c = '', d = a.split(/\s+/), e = b.split(/\s+/);
    a:
      for (var f = 0; f < d.length; f++) {
        for (var g = d[f], h = 0; h < e.length; h++)
          if (g == e[h])
            continue a;
        c += (c.length > 0 ? ' ' : '') + g;
      }
    return c;
  }
  function Nb() {
    var a = {}, b = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (b, c) {
      db(b, 'controller'), t(b) ? l(a, b) : a[b] = c;
    }, this.$get = [
      '$injector',
      '$window',
      function (c, e) {
        return function (f, g) {
          var h, i, j, k;
          if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : eb(g.$scope, j, !0) || eb(e, j, !0), cb(f, j, !0)), h = c.instantiate(f, g), k) {
            if (!g || 'object' != typeof g.$scope)
              throw d('$controller')('noscp', 'Cannot export controller \'{0}\' as \'{1}\'! No $scope object provided via `locals`.', j || f.name, k);
            g.$scope[k] = h;
          }
          return h;
        };
      }
    ];
  }
  function Ob() {
    this.$get = [
      '$window',
      function (a) {
        return ld(a.document);
      }
    ];
  }
  function Pb() {
    this.$get = [
      '$log',
      function (a) {
        return function () {
          a.error.apply(a, arguments);
        };
      }
    ];
  }
  function Qb(a) {
    var b, c, d, e = {};
    return a ? (f(a.split('\n'), function (a) {
      d = a.indexOf(':'), b = fd(vd(a.substr(0, d))), c = vd(a.substr(d + 1)), b && (e[b] ? e[b] += ', ' + c : e[b] = c);
    }), e) : e;
  }
  function Rb(a) {
    var b = t(a) ? a : c;
    return function (c) {
      return b || (b = Qb(a)), c ? b[fd(c)] || null : b;
    };
  }
  function Sb(a, b, c) {
    return y(c) ? c(a, b) : (f(c, function (c) {
      a = c(a, b);
    }), a);
  }
  function Tb(a) {
    return a >= 200 && 300 > a;
  }
  function Ub() {
    var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, e = { 'Content-Type': 'application/json;charset=utf-8' }, g = this.defaults = {
        transformResponse: [function (c) {
            return u(c) && (c = c.replace(d, ''), a.test(c) && b.test(c) && (c = R(c))), c;
          }],
        transformRequest: [function (a) {
            return t(a) && !C(a) ? Q(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: I(e),
          put: I(e),
          patch: I(e)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      }, i = this.interceptors = [], j = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (a, b, d, e, k, m) {
        function n(a) {
          function d(a) {
            var b = l({}, a, { data: Sb(a.data, a.headers, h.transformResponse) });
            return Tb(a.status) ? b : k.reject(b);
          }
          function e(a) {
            function b(a) {
              var b;
              f(a, function (c, d) {
                y(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
              });
            }
            var c, d, e, h = g.headers, i = l({}, a.headers);
            h = l({}, h.common, h[fd(a.method)]), b(h), b(i);
            a:
              for (c in h) {
                d = fd(c);
                for (e in i)
                  if (fd(e) === d)
                    continue a;
                i[c] = h[c];
              }
            return i;
          }
          var h = {
              transformRequest: g.transformRequest,
              transformResponse: g.transformResponse
            }, i = e(a);
          l(h, a), h.headers = i, h.method = hd(h.method);
          var j = Hc(h.url) ? b.cookies()[h.xsrfCookieName || g.xsrfCookieName] : c;
          j && (i[h.xsrfHeaderName || g.xsrfHeaderName] = j);
          var m = function (a) {
              i = a.headers;
              var b = Sb(a.data, Rb(i), a.transformRequest);
              return r(a.data) && f(i, function (a, b) {
                'content-type' === fd(b) && delete i[b];
              }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, b, i).then(d, d);
            }, n = [
              m,
              c
            ], o = k.when(h);
          for (f(z, function (a) {
              (a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError);
            }); n.length;) {
            var p = n.shift(), s = n.shift();
            o = o.then(p, s);
          }
          return o.success = function (a) {
            return o.then(function (b) {
              a(b.data, b.status, b.headers, h);
            }), o;
          }, o.error = function (a) {
            return o.then(null, function (b) {
              a(b.data, b.status, b.headers, h);
            }), o;
          }, o;
        }
        function o() {
          f(arguments, function (a) {
            n[a] = function (b, c) {
              return n(l(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }
        function p() {
          f(arguments, function (a) {
            n[a] = function (b, c, d) {
              return n(l(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }
        function q(b, c, d) {
          function f(a, b, c) {
            j && (Tb(a) ? j.put(p, [
              a,
              b,
              Qb(c)
            ]) : j.remove(p)), h(b, a, c), e.$$phase || e.$apply();
          }
          function h(a, c, d) {
            c = Math.max(c, 0), (Tb(c) ? m.resolve : m.reject)({
              data: a,
              status: c,
              headers: Rb(d),
              config: b
            });
          }
          function i() {
            var a = G(n.pendingRequests, b);
            -1 !== a && n.pendingRequests.splice(a, 1);
          }
          var j, l, m = k.defer(), o = m.promise, p = v(b.url, b.params);
          if (n.pendingRequests.push(b), o.then(i, i), (b.cache || g.cache) && b.cache !== !1 && 'GET' == b.method && (j = t(b.cache) ? b.cache : t(g.cache) ? g.cache : w), j)
            if (l = j.get(p), s(l)) {
              if (l.then)
                return l.then(i, i), l;
              x(l) ? h(l[1], l[0], I(l[2])) : h(l, 200, {});
            } else
              j.put(p, o);
          return r(l) && a(b.method, p, c, f, d, b.timeout, b.withCredentials, b.responseType), o;
        }
        function v(a, b) {
          if (!b)
            return a;
          var c = [];
          return h(b, function (a, b) {
            null === a || r(a) || (x(a) || (a = [a]), f(a, function (a) {
              t(a) && (a = Q(a)), c.push(Y(b) + '=' + Y(a));
            }));
          }), a + (-1 == a.indexOf('?') ? '?' : '&') + c.join('&');
        }
        var w = d('$http'), z = [];
        return f(i, function (a) {
          z.unshift(u(a) ? m.get(a) : m.invoke(a));
        }), f(j, function (a, b) {
          var c = u(a) ? m.get(a) : m.invoke(a);
          z.splice(b, 0, {
            response: function (a) {
              return c(k.when(a));
            },
            responseError: function (a) {
              return c(k.reject(a));
            }
          });
        }), n.pendingRequests = [], o('get', 'delete', 'head', 'jsonp'), p('post', 'put'), n.defaults = g, n;
      }
    ];
  }
  function Vb(b) {
    if (8 >= kd && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest))
      return new a.ActiveXObject('Microsoft.XMLHTTP');
    if (a.XMLHttpRequest)
      return new a.XMLHttpRequest();
    throw d('$httpBackend')('noxhr', 'This browser does not support XMLHttpRequest.');
  }
  function Wb() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (a, b, c) {
        return Xb(a, Vb, a.defer, b.angular.callbacks, c[0]);
      }
    ];
  }
  function Xb(a, b, c, d, e) {
    function g(a, b) {
      var c = e.createElement('script'), d = function () {
          c.onreadystatechange = c.onload = c.onerror = null, e.body.removeChild(c), b && b();
        };
      return c.type = 'text/javascript', c.src = a, kd && 8 >= kd ? c.onreadystatechange = function () {
        /loaded|complete/.test(c.readyState) && d();
      } : c.onload = c.onerror = function () {
        d();
      }, e.body.appendChild(c), d;
    }
    var h = -1;
    return function (e, i, j, k, l, m, n, p) {
      function q() {
        t = h, v && v(), w && w.abort();
      }
      function r(b, d, e, f) {
        y && c.cancel(y), v = w = null, d = 0 === d ? e ? 200 : 404 : d, d = 1223 == d ? 204 : d, b(d, e, f), a.$$completeOutstandingRequest(o);
      }
      var t;
      if (a.$$incOutstandingRequestCount(), i = i || a.url(), 'jsonp' == fd(e)) {
        var u = '_' + (d.counter++).toString(36);
        d[u] = function (a) {
          d[u].data = a;
        };
        var v = g(i.replace('JSON_CALLBACK', 'angular.callbacks.' + u), function () {
            d[u].data ? r(k, 200, d[u].data) : r(k, t || -2), d[u] = td.noop;
          });
      } else {
        var w = b(e);
        if (w.open(e, i, !0), f(l, function (a, b) {
            s(a) && w.setRequestHeader(b, a);
          }), w.onreadystatechange = function () {
            if (w && 4 == w.readyState) {
              var a = null, b = null;
              t !== h && (a = w.getAllResponseHeaders(), b = 'response' in w ? w.response : w.responseText), r(k, t || w.status, b, a);
            }
          }, n && (w.withCredentials = !0), p)
          try {
            w.responseType = p;
          } catch (x) {
            if ('json' !== p)
              throw x;
          }
        w.send(j || null);
      }
      if (m > 0)
        var y = c(q, m);
      else
        m && m.then && m.then(q);
    };
  }
  function Yb() {
    var a = '{{', b = '}}';
    this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    }, this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    }, this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (c, d, e) {
        function f(f, i, j) {
          for (var k, l, m, n, o = 0, p = [], q = f.length, s = !1, t = []; q > o;)
            -1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, s = !0) : (o != q && p.push(f.substring(o)), o = q);
          if ((q = p.length) || (p.push(''), q = 1), j && p.length > 1)
            throw Sd('noconcat', 'Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce', f);
          return !i || s ? (t.length = q, m = function (a) {
            try {
              for (var b, c = 0, g = q; g > c; c++)
                'function' == typeof (b = p[c]) && (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null === b || r(b) ? b = '' : 'string' != typeof b && (b = Q(b))), t[c] = b;
              return t.join('');
            } catch (h) {
              var i = Sd('interr', 'Can\'t interpolate: {0}\n{1}', f, h.toString());
              d(i);
            }
          }, m.exp = f, m.parts = p, m) : void 0;
        }
        var g = a.length, h = b.length;
        return f.startSymbol = function () {
          return a;
        }, f.endSymbol = function () {
          return b;
        }, f;
      }
    ];
  }
  function Zb() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      function (a, b, c) {
        function d(d, f, g, h) {
          var i = b.setInterval, j = b.clearInterval, k = c.defer(), l = k.promise, m = 0, n = s(h) && !h;
          return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function () {
            k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply();
          }, f), e[l.$$intervalId] = k, l;
        }
        var e = {};
        return d.cancel = function (a) {
          return a && a.$$intervalId in e ? (e[a.$$intervalId].reject('canceled'), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1;
        }, d;
      }
    ];
  }
  function $b() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
          SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
          DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
          SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (a) {
          return 1 === a ? 'one' : 'other';
        }
      };
    };
  }
  function _b(a) {
    for (var b = a.split('/'), c = b.length; c--;)
      b[c] = X(b[c]);
    return b.join('/');
  }
  function ac(a, b, c) {
    var d = Gc(a, c);
    b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || Ud[d.protocol] || null;
  }
  function bc(a, b, c) {
    var d = '/' !== a.charAt(0);
    d && (a = '/' + a);
    var e = Gc(a, c);
    b.$$path = decodeURIComponent(d && '/' === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = V(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && '/' != b.$$path.charAt(0) && (b.$$path = '/' + b.$$path);
  }
  function cc(a, b) {
    return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
  }
  function dc(a) {
    var b = a.indexOf('#');
    return -1 == b ? a : a.substr(0, b);
  }
  function ec(a) {
    return a.substr(0, dc(a).lastIndexOf('/') + 1);
  }
  function fc(a) {
    return a.substring(0, a.indexOf('/', a.indexOf('//') + 2));
  }
  function gc(a, b) {
    this.$$html5 = !0, b = b || '';
    var d = ec(a);
    ac(a, this, a), this.$$parse = function (b) {
      var c = cc(d, b);
      if (!u(c))
        throw Vd('ipthprfx', 'Invalid url "{0}", missing path prefix "{1}".', b, d);
      bc(c, this, a), this.$$path || (this.$$path = '/'), this.$$compose();
    }, this.$$compose = function () {
      var a = W(this.$$search), b = this.$$hash ? '#' + X(this.$$hash) : '';
      this.$$url = _b(this.$$path) + (a ? '?' + a : '') + b, this.$$absUrl = d + this.$$url.substr(1);
    }, this.$$rewrite = function (e) {
      var f, g;
      return (f = cc(a, e)) !== c ? (g = f, (f = cc(b, f)) !== c ? d + (cc('/', f) || f) : a + g) : (f = cc(d, e)) !== c ? d + f : d == e + '/' ? d : void 0;
    };
  }
  function hc(a, b) {
    var c = ec(a);
    ac(a, this, a), this.$$parse = function (d) {
      function e(a, b, c) {
        var d, e = /^\/?.*?:(\/.*)/;
        return 0 === b.indexOf(c) && (b = b.replace(c, '')), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a);
      }
      var f = cc(a, d) || cc(c, d), g = '#' == f.charAt(0) ? cc(b, f) : this.$$html5 ? f : '';
      if (!u(g))
        throw Vd('ihshprfx', 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
      bc(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose();
    }, this.$$compose = function () {
      var c = W(this.$$search), d = this.$$hash ? '#' + X(this.$$hash) : '';
      this.$$url = _b(this.$$path) + (c ? '?' + c : '') + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : '');
    }, this.$$rewrite = function (b) {
      return dc(a) == dc(b) ? b : void 0;
    };
  }
  function ic(a, b) {
    this.$$html5 = !0, hc.apply(this, arguments);
    var c = ec(a);
    this.$$rewrite = function (d) {
      var e;
      return a == dc(d) ? d : (e = cc(c, d)) ? a + b + e : c === d + '/' ? c : void 0;
    };
  }
  function jc(a) {
    return function () {
      return this[a];
    };
  }
  function kc(a, b) {
    return function (c) {
      return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this);
    };
  }
  function lc() {
    var b = '', c = !1;
    this.hashPrefix = function (a) {
      return s(a) ? (b = a, this) : b;
    }, this.html5Mode = function (a) {
      return s(a) ? (c = a, this) : c;
    }, this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (d, e, f, g) {
        function h(a) {
          d.$broadcast('$locationChangeSuccess', i.absUrl(), a);
        }
        var i, j, k, l = e.baseHref(), m = e.url();
        c ? (k = fc(m) + (l || '/'), j = f.history ? gc : ic) : (k = dc(m), j = hc), i = new j(k, '#' + b), i.$$parse(i.$$rewrite(m)), g.on('click', function (b) {
          if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
            for (var c = ld(b.target); 'a' !== fd(c[0].nodeName);)
              if (c[0] === g[0] || !(c = c.parent())[0])
                return;
            var f = c.prop('href');
            t(f) && '[object SVGAnimatedString]' === f.toString() && (f = Gc(f.animVal).href);
            var h = i.$$rewrite(f);
            f && !c.attr('target') && h && !b.isDefaultPrevented() && (b.preventDefault(), h != e.url() && (i.$$parse(h), d.$apply(), a.angular['ff-684208-preventDefault'] = !0));
          }
        }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function (a) {
          i.absUrl() != a && (d.$evalAsync(function () {
            var b = i.absUrl();
            i.$$parse(a), d.$broadcast('$locationChangeStart', a, b).defaultPrevented ? (i.$$parse(b), e.url(b)) : h(b);
          }), d.$$phase || d.$digest());
        });
        var n = 0;
        return d.$watch(function () {
          var a = e.url(), b = i.$$replace;
          return n && a == i.absUrl() || (n++, d.$evalAsync(function () {
            d.$broadcast('$locationChangeStart', i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a));
          })), i.$$replace = !1, n;
        }), i;
      }
    ];
  }
  function mc() {
    var a = !0, b = this;
    this.debugEnabled = function (b) {
      return s(b) ? (a = b, this) : a;
    }, this.$get = [
      '$window',
      function (c) {
        function d(a) {
          return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line)), a;
        }
        function e(a) {
          var b = c.console || {}, e = b[a] || b.log || o, g = !1;
          try {
            g = !!e.apply;
          } catch (h) {
          }
          return g ? function () {
            var a = [];
            return f(arguments, function (b) {
              a.push(d(b));
            }), e.apply(b, a);
          } : function (a, b) {
            e(a, null == b ? '' : b);
          };
        }
        return {
          log: e('log'),
          info: e('info'),
          warn: e('warn'),
          error: e('error'),
          debug: function () {
            var c = e('debug');
            return function () {
              a && c.apply(b, arguments);
            };
          }()
        };
      }
    ];
  }
  function nc(a, b) {
    if ('constructor' === a)
      throw Xd('isecfld', 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', b);
    return a;
  }
  function oc(a, b) {
    if (a) {
      if (a.constructor === a)
        throw Xd('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', b);
      if (a.document && a.location && a.alert && a.setInterval)
        throw Xd('isecwindow', 'Referencing the Window in Angular expressions is disallowed! Expression: {0}', b);
      if (a.children && (a.nodeName || a.on && a.find))
        throw Xd('isecdom', 'Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}', b);
    }
    return a;
  }
  function pc(a, b, d, e, f) {
    f = f || {};
    for (var g, h = b.split('.'), i = 0; h.length > 1; i++) {
      g = nc(h.shift(), e);
      var j = a[g];
      j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && (Wd(e), '$$v' in a || !function (a) {
        a.then(function (b) {
          a.$$v = b;
        });
      }(a), a.$$v === c && (a.$$v = {}), a = a.$$v);
    }
    return g = nc(h.shift(), e), a[g] = d, d;
  }
  function qc(a, b, d, e, f, g, h) {
    return nc(a, g), nc(b, g), nc(d, g), nc(e, g), nc(f, g), h.unwrapPromises ? function (h, i) {
      var j, k = i && i.hasOwnProperty(a) ? i : h;
      return null == k ? k : (k = k[a], k && k.then && (Wd(g), '$$v' in k || (j = k, j.$$v = c, j.then(function (a) {
        j.$$v = a;
      })), k = k.$$v), b ? null == k ? c : (k = k[b], k && k.then && (Wd(g), '$$v' in k || (j = k, j.$$v = c, j.then(function (a) {
        j.$$v = a;
      })), k = k.$$v), d ? null == k ? c : (k = k[d], k && k.then && (Wd(g), '$$v' in k || (j = k, j.$$v = c, j.then(function (a) {
        j.$$v = a;
      })), k = k.$$v), e ? null == k ? c : (k = k[e], k && k.then && (Wd(g), '$$v' in k || (j = k, j.$$v = c, j.then(function (a) {
        j.$$v = a;
      })), k = k.$$v), f ? null == k ? c : (k = k[f], k && k.then && (Wd(g), '$$v' in k || (j = k, j.$$v = c, j.then(function (a) {
        j.$$v = a;
      })), k = k.$$v), k) : k) : k) : k) : k);
    } : function (g, h) {
      var i = h && h.hasOwnProperty(a) ? h : g;
      return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i);
    };
  }
  function rc(a, b) {
    return nc(a, b), function (b, d) {
      return null == b ? c : (d && d.hasOwnProperty(a) ? d : b)[a];
    };
  }
  function sc(a, b, d) {
    return nc(a, d), nc(b, d), function (d, e) {
      return null == d ? c : (d = (e && e.hasOwnProperty(a) ? e : d)[a], null == d ? c : d[b]);
    };
  }
  function tc(a, b, d) {
    if (be.hasOwnProperty(a))
      return be[a];
    var e, g = a.split('.'), h = g.length;
    if (b.unwrapPromises || 1 !== h)
      if (b.unwrapPromises || 2 !== h)
        if (b.csp)
          e = 6 > h ? qc(g[0], g[1], g[2], g[3], g[4], d, b) : function (a, e) {
            var f, i = 0;
            do
              f = qc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f;
            while (h > i);
            return f;
          };
        else {
          var i = 'var p;\n';
          f(g, function (a, c) {
            nc(a, d), i += 'if(s == null) return undefined;\ns=' + (c ? 's' : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, '\\$1') + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : '');
          }), i += 'return s;';
          var j = new Function('s', 'k', 'pw', i);
          j.toString = q(i), e = b.unwrapPromises ? function (a, b) {
            return j(a, b, Wd);
          } : j;
        }
      else
        e = sc(g[0], g[1], d);
    else
      e = rc(g[0], d);
    return 'hasOwnProperty' !== a && (be[a] = e), e;
  }
  function uc() {
    var a = {}, b = {
        csp: !1,
        unwrapPromises: !1,
        logPromiseWarnings: !0
      };
    this.unwrapPromises = function (a) {
      return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises;
    }, this.logPromiseWarnings = function (a) {
      return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings;
    }, this.$get = [
      '$filter',
      '$sniffer',
      '$log',
      function (c, d, e) {
        return b.csp = d.csp, Wd = function (a) {
          b.logPromiseWarnings && !Yd.hasOwnProperty(a) && (Yd[a] = !0, e.warn('[$parse] Promise found in the expression `' + a + '`. Automatic unwrapping of promises in Angular expressions is deprecated.'));
        }, function (d) {
          var e;
          switch (typeof d) {
          case 'string':
            if (a.hasOwnProperty(d))
              return a[d];
            var f = new _d(b), g = new ae(f, c, b);
            return e = g.parse(d, !1), 'hasOwnProperty' !== d && (a[d] = e), e;
          case 'function':
            return d;
          default:
            return o;
          }
        };
      }
    ];
  }
  function vc() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (a, b) {
        return wc(function (b) {
          a.$evalAsync(b);
        }, b);
      }
    ];
  }
  function wc(a, b) {
    function d(a) {
      return a;
    }
    function e(a) {
      return j(a);
    }
    function g(a) {
      var b = h(), c = 0, d = x(a) ? [] : {};
      return f(a, function (a, e) {
        c++, i(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      }), 0 === c && b.resolve(d), b.promise;
    }
    var h = function () {
        var f, g, j = [];
        return g = {
          resolve: function (b) {
            if (j) {
              var d = j;
              j = c, f = i(b), d.length && a(function () {
                for (var a, b = 0, c = d.length; c > b; b++)
                  a = d[b], f.then(a[0], a[1], a[2]);
              });
            }
          },
          reject: function (a) {
            g.resolve(k(a));
          },
          notify: function (b) {
            if (j) {
              var c = j;
              j.length && a(function () {
                for (var a, d = 0, e = c.length; e > d; d++)
                  a = c[d], a[2](b);
              });
            }
          },
          promise: {
            then: function (a, c, g) {
              var i = h(), k = function (c) {
                  try {
                    i.resolve((y(a) ? a : d)(c));
                  } catch (e) {
                    i.reject(e), b(e);
                  }
                }, l = function (a) {
                  try {
                    i.resolve((y(c) ? c : e)(a));
                  } catch (d) {
                    i.reject(d), b(d);
                  }
                }, m = function (a) {
                  try {
                    i.notify((y(g) ? g : d)(a));
                  } catch (c) {
                    b(c);
                  }
                };
              return j ? j.push([
                k,
                l,
                m
              ]) : f.then(k, l, m), i.promise;
            },
            'catch': function (a) {
              return this.then(null, a);
            },
            'finally': function (a) {
              function b(a, b) {
                var c = h();
                return b ? c.resolve(a) : c.reject(a), c.promise;
              }
              function c(c, e) {
                var f = null;
                try {
                  f = (a || d)();
                } catch (g) {
                  return b(g, !1);
                }
                return f && y(f.then) ? f.then(function () {
                  return b(c, e);
                }, function (a) {
                  return b(a, !1);
                }) : b(c, e);
              }
              return this.then(function (a) {
                return c(a, !0);
              }, function (a) {
                return c(a, !1);
              });
            }
          }
        };
      }, i = function (b) {
        return b && y(b.then) ? b : {
          then: function (c) {
            var d = h();
            return a(function () {
              d.resolve(c(b));
            }), d.promise;
          }
        };
      }, j = function (a) {
        var b = h();
        return b.reject(a), b.promise;
      }, k = function (c) {
        return {
          then: function (d, f) {
            var g = h();
            return a(function () {
              try {
                g.resolve((y(f) ? f : e)(c));
              } catch (a) {
                g.reject(a), b(a);
              }
            }), g.promise;
          }
        };
      }, l = function (c, f, g, k) {
        var l, m = h(), n = function (a) {
            try {
              return (y(f) ? f : d)(a);
            } catch (c) {
              return b(c), j(c);
            }
          }, o = function (a) {
            try {
              return (y(g) ? g : e)(a);
            } catch (c) {
              return b(c), j(c);
            }
          }, p = function (a) {
            try {
              return (y(k) ? k : d)(a);
            } catch (c) {
              b(c);
            }
          };
        return a(function () {
          i(c).then(function (a) {
            l || (l = !0, m.resolve(i(a).then(n, o, p)));
          }, function (a) {
            l || (l = !0, m.resolve(o(a)));
          }, function (a) {
            l || m.notify(p(a));
          });
        }), m.promise;
      };
    return {
      defer: h,
      reject: j,
      when: l,
      all: g
    };
  }
  function xc() {
    var a = 10, b = d('$rootScope'), c = null;
    this.digestTtl = function (b) {
      return arguments.length && (a = b), a;
    }, this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (d, g, h, i) {
        function k() {
          this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this['this'] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {};
        }
        function l(a) {
          if (r.$$phase)
            throw b('inprog', '{0} already in progress', r.$$phase);
          r.$$phase = a;
        }
        function m() {
          r.$$phase = null;
        }
        function n(a, b) {
          var c = h(a);
          return cb(c, b), c;
        }
        function p(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function q() {
        }
        k.prototype = {
          constructor: k,
          $new: function (a) {
            var b, c;
            return a ? (c = new k(), c.$root = this.$root, c.$$asyncQueue = this.$$asyncQueue, c.$$postDigestQueue = this.$$postDigestQueue) : (b = function () {
            }, b.prototype = this, c = new b(), c.$id = j()), c['this'] = c, c.$$listeners = {}, c.$$listenerCount = {}, c.$parent = this, c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c;
          },
          $watch: function (a, b, d) {
            var e = this, f = n(a, 'watch'), g = e.$$watchers, h = {
                fn: b,
                last: q,
                get: f,
                exp: a,
                eq: !!d
              };
            if (c = null, !y(b)) {
              var i = n(b || o, 'listener');
              h.fn = function (a, b, c) {
                i(c);
              };
            }
            if ('string' == typeof a && f.constant) {
              var j = h.fn;
              h.fn = function (a, b, c) {
                j.call(this, a, b, c), H(g, h);
              };
            }
            return g || (g = e.$$watchers = []), g.unshift(h), function () {
              H(g, h), c = null;
            };
          },
          $watchCollection: function (a, b) {
            function c() {
              g = k(i);
              var a, b;
              if (t(g))
                if (e(g)) {
                  f !== l && (f = l, n = f.length = 0, j++), a = g.length, n !== a && (j++, f.length = n = a);
                  for (var c = 0; a > c; c++)
                    f[c] !== g[c] && (j++, f[c] = g[c]);
                } else {
                  f !== m && (f = m = {}, n = 0, j++), a = 0;
                  for (b in g)
                    g.hasOwnProperty(b) && (a++, f.hasOwnProperty(b) ? f[b] !== g[b] && (j++, f[b] = g[b]) : (n++, f[b] = g[b], j++));
                  if (n > a) {
                    j++;
                    for (b in f)
                      f.hasOwnProperty(b) && !g.hasOwnProperty(b) && (n--, delete f[b]);
                  }
                }
              else
                f !== g && (f = g, j++);
              return j;
            }
            function d() {
              b(g, f, i);
            }
            var f, g, i = this, j = 0, k = h(a), l = [], m = {}, n = 0;
            return this.$watch(c, d);
          },
          $digest: function () {
            var d, e, f, h, i, j, k, n, o, p, r, s = this.$$asyncQueue, t = this.$$postDigestQueue, u = a, v = this, w = [];
            l('$digest'), c = null;
            do {
              for (j = !1, n = v; s.length;) {
                try {
                  r = s.shift(), r.scope.$eval(r.expression);
                } catch (x) {
                  m(), g(x);
                }
                c = null;
              }
              a:
                do {
                  if (h = n.$$watchers)
                    for (i = h.length; i--;)
                      try {
                        if (d = h[i])
                          if ((e = d.get(n)) === (f = d.last) || (d.eq ? K(e, f) : 'number' == typeof e && 'number' == typeof f && isNaN(e) && isNaN(f))) {
                            if (d === c) {
                              j = !1;
                              break a;
                            }
                          } else
                            j = !0, c = d, d.last = d.eq ? I(e) : e, d.fn(e, f === q ? e : f, n), 5 > u && (o = 4 - u, w[o] || (w[o] = []), p = y(d.exp) ? 'fn: ' + (d.exp.name || d.exp.toString()) : d.exp, p += '; newVal: ' + Q(e) + '; oldVal: ' + Q(f), w[o].push(p));
                      } catch (x) {
                        m(), g(x);
                      }
                  if (!(k = n.$$childHead || n !== v && n.$$nextSibling))
                    for (; n !== v && !(k = n.$$nextSibling);)
                      n = n.$parent;
                } while (n = k);
              if ((j || s.length) && !u--)
                throw m(), b('infdig', '{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}', a, Q(w));
            } while (j || s.length);
            for (m(); t.length;)
              try {
                t.shift()();
              } catch (x) {
                g(x);
              }
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy'), this.$$destroyed = !0, this !== r && (f(this.$$listenerCount, O(null, p, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null);
            }
          },
          $eval: function (a, b) {
            return h(a)(this, b);
          },
          $evalAsync: function (a) {
            r.$$phase || r.$$asyncQueue.length || i.defer(function () {
              r.$$asyncQueue.length && r.$digest();
            }), this.$$asyncQueue.push({
              scope: this,
              expression: a
            });
          },
          $$postDigest: function (a) {
            this.$$postDigestQueue.push(a);
          },
          $apply: function (a) {
            try {
              return l('$apply'), this.$eval(a);
            } catch (b) {
              g(b);
            } finally {
              m();
              try {
                r.$digest();
              } catch (b) {
                throw g(b), b;
              }
            }
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []), c.push(b);
            var d = this;
            do
              d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
            while (d = d.$parent);
            var e = this;
            return function () {
              c[G(c, b)] = null, p(e, 1, a);
            };
          },
          $emit: function (a) {
            var b, c, d, e = [], f = this, h = !1, i = {
                name: a,
                targetScope: f,
                stopPropagation: function () {
                  h = !0;
                },
                preventDefault: function () {
                  i.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, j = M([i], arguments, 1);
            do {
              for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)
                if (b[c])
                  try {
                    b[c].apply(null, j);
                  } catch (k) {
                    g(k);
                  }
                else
                  b.splice(c, 1), c--, d--;
              if (h)
                return i;
              f = f.$parent;
            } while (f);
            return i;
          },
          $broadcast: function (a) {
            for (var b, c, d, e = this, f = e, h = e, i = {
                  name: a,
                  targetScope: e,
                  preventDefault: function () {
                    i.defaultPrevented = !0;
                  },
                  defaultPrevented: !1
                }, j = M([i], arguments, 1); f = h;) {
              for (i.currentScope = f, b = f.$$listeners[a] || [], c = 0, d = b.length; d > c; c++)
                if (b[c])
                  try {
                    b[c].apply(null, j);
                  } catch (k) {
                    g(k);
                  }
                else
                  b.splice(c, 1), c--, d--;
              if (!(h = f.$$listenerCount[a] && f.$$childHead || f !== e && f.$$nextSibling))
                for (; f !== e && !(h = f.$$nextSibling);)
                  f = f.$parent;
            }
            return i;
          }
        };
        var r = new k();
        return r;
      }
    ];
  }
  function yc() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*(https?|ftp|file):|data:image\//;
    this.aHrefSanitizationWhitelist = function (b) {
      return s(b) ? (a = b, this) : a;
    }, this.imgSrcSanitizationWhitelist = function (a) {
      return s(a) ? (b = a, this) : b;
    }, this.$get = function () {
      return function (c, d) {
        var e, f = d ? b : a;
        return kd && !(kd >= 8) || (e = Gc(c).href, '' === e || e.match(f)) ? c : 'unsafe:' + e;
      };
    };
  }
  function zc(a) {
    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
  }
  function Ac(a) {
    if ('self' === a)
      return a;
    if (u(a)) {
      if (a.indexOf('***') > -1)
        throw ce('iwcard', 'Illegal sequence *** in string matcher.  String: {0}', a);
      return a = zc(a).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*'), new RegExp('^' + a + '$');
    }
    if (z(a))
      return new RegExp('^' + a.source + '$');
    throw ce('imatcher', 'Matchers may only be "self", string patterns or RegExp objects');
  }
  function Bc(a) {
    var b = [];
    return s(a) && f(a, function (a) {
      b.push(Ac(a));
    }), b;
  }
  function Cc() {
    this.SCE_CONTEXTS = de;
    var a = ['self'], b = [];
    this.resourceUrlWhitelist = function (b) {
      return arguments.length && (a = Bc(b)), a;
    }, this.resourceUrlBlacklist = function (a) {
      return arguments.length && (b = Bc(a)), b;
    }, this.$get = [
      '$injector',
      function (d) {
        function e(a, b) {
          return 'self' === a ? Hc(b) : !!a.exec(b.href);
        }
        function f(c) {
          var d, f, g = Gc(c.toString()), h = !1;
          for (d = 0, f = a.length; f > d; d++)
            if (e(a[d], g)) {
              h = !0;
              break;
            }
          if (h)
            for (d = 0, f = b.length; f > d; d++)
              if (e(b[d], g)) {
                h = !1;
                break;
              }
          return h;
        }
        function g(a) {
          var b = function (a) {
            this.$$unwrapTrustedValue = function () {
              return a;
            };
          };
          return a && (b.prototype = new a()), b.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          }, b.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          }, b;
        }
        function h(a, b) {
          var d = m.hasOwnProperty(a) ? m[a] : null;
          if (!d)
            throw ce('icontext', 'Attempted to trust a value in invalid context. Context: {0}; Value: {1}', a, b);
          if (null === b || b === c || '' === b)
            return b;
          if ('string' != typeof b)
            throw ce('itype', 'Attempted to trust a non-string value in a content requiring a string: Context: {0}', a);
          return new d(b);
        }
        function i(a) {
          return a instanceof l ? a.$$unwrapTrustedValue() : a;
        }
        function j(a, b) {
          if (null === b || b === c || '' === b)
            return b;
          var d = m.hasOwnProperty(a) ? m[a] : null;
          if (d && b instanceof d)
            return b.$$unwrapTrustedValue();
          if (a === de.RESOURCE_URL) {
            if (f(b))
              return b;
            throw ce('insecurl', 'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}', b.toString());
          }
          if (a === de.HTML)
            return k(b);
          throw ce('unsafe', 'Attempting to use an unsafe value in a safe context.');
        }
        var k = function () {
          throw ce('unsafe', 'Attempting to use an unsafe value in a safe context.');
        };
        d.has('$sanitize') && (k = d.get('$sanitize'));
        var l = g(), m = {};
        return m[de.HTML] = g(l), m[de.CSS] = g(l), m[de.URL] = g(l), m[de.JS] = g(l), m[de.RESOURCE_URL] = g(m[de.URL]), {
          trustAs: h,
          getTrusted: j,
          valueOf: i
        };
      }
    ];
  }
  function Dc() {
    var a = !0;
    this.enabled = function (b) {
      return arguments.length && (a = !!b), a;
    }, this.$get = [
      '$parse',
      '$sniffer',
      '$sceDelegate',
      function (b, c, d) {
        if (a && c.msie && c.msieDocumentMode < 8)
          throw ce('iequirks', 'Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.');
        var e = I(de);
        e.isEnabled = function () {
          return a;
        }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function (a, b) {
          return b;
        }, e.valueOf = p), e.parseAs = function (a, c) {
          var d = b(c);
          return d.literal && d.constant ? d : function (b, c) {
            return e.getTrusted(a, d(b, c));
          };
        };
        var g = e.parseAs, h = e.getTrusted, i = e.trustAs;
        return f(de, function (a, b) {
          var c = fd(b);
          e[jb('parse_as_' + c)] = function (b) {
            return g(a, b);
          }, e[jb('get_trusted_' + c)] = function (b) {
            return h(a, b);
          }, e[jb('trust_as_' + c)] = function (b) {
            return i(a, b);
          };
        }), e;
      }
    ];
  }
  function Ec() {
    this.$get = [
      '$window',
      '$document',
      function (a, b) {
        var c, d, e = {}, f = m((/android (\d+)/.exec(fd((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = h.documentMode, j = /^(Moz|webkit|O|ms)(?=[A-Z])/, k = h.body && h.body.style, l = !1, n = !1;
        if (k) {
          for (var o in k)
            if (d = j.exec(o)) {
              c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
              break;
            }
          c || (c = 'WebkitOpacity' in k && 'webkit'), l = !!('transition' in k || c + 'Transition' in k), n = !!('animation' in k || c + 'Animation' in k), !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation));
        }
        return {
          history: !(!a.history || !a.history.pushState || 4 > f || g),
          hashchange: 'onhashchange' in a && (!i || i > 7),
          hasEvent: function (a) {
            if ('input' == a && 9 == kd)
              return !1;
            if (r(e[a])) {
              var b = h.createElement('div');
              e[a] = 'on' + a in b;
            }
            return e[a];
          },
          csp: L(),
          vendorPrefix: c,
          transitions: l,
          animations: n,
          android: f,
          msie: kd,
          msieDocumentMode: i
        };
      }
    ];
  }
  function Fc() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function (a, b, c, d) {
        function e(e, g, h) {
          var i, j = c.defer(), k = j.promise, l = s(h) && !h;
          return i = b.defer(function () {
            try {
              j.resolve(e());
            } catch (b) {
              j.reject(b), d(b);
            } finally {
              delete f[k.$$timeoutId];
            }
            l || a.$apply();
          }, g), k.$$timeoutId = i, f[i] = j, k;
        }
        var f = {};
        return e.cancel = function (a) {
          return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject('canceled'), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
        }, e;
      }
    ];
  }
  function Gc(a) {
    var b = a;
    return kd && (ee.setAttribute('href', b), b = ee.href), ee.setAttribute('href', b), {
      href: ee.href,
      protocol: ee.protocol ? ee.protocol.replace(/:$/, '') : '',
      host: ee.host,
      search: ee.search ? ee.search.replace(/^\?/, '') : '',
      hash: ee.hash ? ee.hash.replace(/^#/, '') : '',
      hostname: ee.hostname,
      port: ee.port,
      pathname: '/' === ee.pathname.charAt(0) ? ee.pathname : '/' + ee.pathname
    };
  }
  function Hc(a) {
    var b = u(a) ? Gc(a) : a;
    return b.protocol === fe.protocol && b.host === fe.host;
  }
  function Ic() {
    this.$get = q(a);
  }
  function Jc(a) {
    function b(d, e) {
      if (t(d)) {
        var g = {};
        return f(d, function (a, c) {
          g[c] = b(c, a);
        }), g;
      }
      return a.factory(d + c, e);
    }
    var c = 'Filter';
    this.register = b, this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + c);
        };
      }
    ], b('currency', Lc), b('date', Tc), b('filter', Kc), b('json', Uc), b('limitTo', Vc), b('lowercase', ke), b('number', Mc), b('orderBy', Wc), b('uppercase', le);
  }
  function Kc() {
    return function (a, b, c) {
      if (!x(a))
        return a;
      var d = typeof c, e = [];
      e.check = function (a) {
        for (var b = 0; b < e.length; b++)
          if (!e[b](a))
            return !1;
        return !0;
      }, 'function' !== d && (c = 'boolean' === d && c ? function (a, b) {
        return td.equals(a, b);
      } : function (a, b) {
        if (a && b && 'object' == typeof a && 'object' == typeof b) {
          for (var d in a)
            if ('$' !== d.charAt(0) && gd.call(a, d) && c(a[d], b[d]))
              return !0;
          return !1;
        }
        return b = ('' + b).toLowerCase(), ('' + a).toLowerCase().indexOf(b) > -1;
      });
      var f = function (a, b) {
        if ('string' == typeof b && '!' === b.charAt(0))
          return !f(a, b.substr(1));
        switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
          return c(a, b);
        case 'object':
          switch (typeof b) {
          case 'object':
            return c(a, b);
          default:
            for (var d in a)
              if ('$' !== d.charAt(0) && f(a[d], b))
                return !0;
          }
          return !1;
        case 'array':
          for (var e = 0; e < a.length; e++)
            if (f(a[e], b))
              return !0;
          return !1;
        default:
          return !1;
        }
      };
      switch (typeof b) {
      case 'boolean':
      case 'number':
      case 'string':
        b = { $: b };
      case 'object':
        for (var g in b)
          !function (a) {
            'undefined' != typeof b[a] && e.push(function (c) {
              return f('$' == a ? c : c && c[a], b[a]);
            });
          }(g);
        break;
      case 'function':
        e.push(b);
        break;
      default:
        return a;
      }
      for (var h = [], i = 0; i < a.length; i++) {
        var j = a[i];
        e.check(j) && h.push(j);
      }
      return h;
    };
  }
  function Lc(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return r(c) && (c = b.CURRENCY_SYM), Nc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c);
    };
  }
  function Mc(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return Nc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }
  function Nc(a, b, c, d, e) {
    if (null == a || !isFinite(a) || t(a))
      return '';
    var f = 0 > a;
    a = Math.abs(a);
    var g = a + '', h = '', i = [], j = !1;
    if (-1 !== g.indexOf('e')) {
      var k = g.match(/([\d\.]+)e(-?)(\d+)/);
      k && '-' == k[2] && k[3] > e + 1 ? g = '0' : (h = g, j = !0);
    }
    if (j)
      e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
    else {
      var l = (g.split(ge)[1] || '').length;
      r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
      var m = Math.pow(10, e);
      a = Math.round(a * m) / m;
      var n = ('' + a).split(ge), o = n[0];
      n = n[1] || '';
      var p, q = 0, s = b.lgSize, u = b.gSize;
      if (o.length >= s + u)
        for (q = o.length - s, p = 0; q > p; p++)
          0 === (q - p) % u && 0 !== p && (h += c), h += o.charAt(p);
      for (p = q; p < o.length; p++)
        0 === (o.length - p) % s && 0 !== p && (h += c), h += o.charAt(p);
      for (; n.length < e;)
        n += '0';
      e && '0' !== e && (h += d + n.substr(0, e));
    }
    return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join('');
  }
  function Oc(a, b, c) {
    var d = '';
    for (0 > a && (d = '-', a = -a), a = '' + a; a.length < b;)
      a = '0' + a;
    return c && (a = a.substr(a.length - b)), d + a;
  }
  function Pc(a, b, c, d) {
    return c = c || 0, function (e) {
      var f = e['get' + a]();
      return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Oc(f, b, d);
    };
  }
  function Qc(a, b) {
    return function (c, d) {
      var e = c['get' + a](), f = hd(b ? 'SHORT' + a : a);
      return d[f][e];
    };
  }
  function Rc(a) {
    var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? '+' : '';
    return c += Oc(Math[b > 0 ? 'floor' : 'ceil'](b / 60), 2) + Oc(Math.abs(b % 60), 2);
  }
  function Sc(a, b) {
    return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
  }
  function Tc(a) {
    function b(a) {
      var b;
      if (b = a.match(c)) {
        var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
        b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
        var i = m(b[4] || 0) - e, j = m(b[5] || 0) - f, k = m(b[6] || 0), l = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        return h.call(d, i, j, k, l), d;
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, d) {
      var e, g, h = '', i = [];
      if (d = d || 'mediumDate', d = a.DATETIME_FORMATS[d] || d, u(c) && (c = je.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c))
        return c;
      for (; d;)
        g = ie.exec(d), g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null);
      return f(i, function (b) {
        e = he[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      }), h;
    };
  }
  function Uc() {
    return function (a) {
      return Q(a, !0);
    };
  }
  function Vc() {
    return function (a, b) {
      if (!x(a) && !u(a))
        return a;
      if (b = m(b), u(a))
        return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : '';
      var c, d, e = [];
      for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++)
        e.push(a[c]);
      return e;
    };
  }
  function Wc(a) {
    return function (b, c, d) {
      function e(a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }
      function f(a, b) {
        return S(b) ? function (b, c) {
          return a(c, b);
        } : a;
      }
      function g(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? ('string' == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1;
      }
      if (!x(b))
        return b;
      if (!c)
        return b;
      c = x(c) ? c : [c], c = E(c, function (b) {
        var c = !1, d = b || p;
        return u(b) && (('+' == b.charAt(0) || '-' == b.charAt(0)) && (c = '-' == b.charAt(0), b = b.substring(1)), d = a(b)), f(function (a, b) {
          return g(d(a), d(b));
        }, c);
      });
      for (var h = [], i = 0; i < b.length; i++)
        h.push(b[i]);
      return h.sort(f(e, d));
    };
  }
  function Xc(a) {
    return y(a) && (a = { link: a }), a.restrict = a.restrict || 'AC', q(a);
  }
  function Yc(a, b) {
    function c(b, c) {
      c = c ? '-' + _(c, '-') : '', a.removeClass((b ? ye : xe) + c).addClass((b ? xe : ye) + c);
    }
    var d = this, e = a.parent().controller('form') || oe, g = 0, h = d.$error = {}, i = [];
    d.$name = b.name || b.ngForm, d.$dirty = !1, d.$pristine = !0, d.$valid = !0, d.$invalid = !1, e.$addControl(d), a.addClass(ze), c(!0), d.$addControl = function (a) {
      db(a.$name, 'input'), i.push(a), a.$name && (d[a.$name] = a);
    }, d.$removeControl = function (a) {
      a.$name && d[a.$name] === a && delete d[a.$name], f(h, function (b, c) {
        d.$setValidity(c, !0, a);
      }), H(i, a);
    }, d.$setValidity = function (a, b, f) {
      var i = h[a];
      if (b)
        i && (H(i, f), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), h[a] = !1, c(!0, a), e.$setValidity(a, !0, d)));
      else {
        if (g || c(b), i) {
          if (F(i, f))
            return;
        } else
          h[a] = i = [], g++, c(!1, a), e.$setValidity(a, !1, d);
        i.push(f), d.$valid = !1, d.$invalid = !0;
      }
    }, d.$setDirty = function () {
      a.removeClass(ze).addClass(Ae), d.$dirty = !0, d.$pristine = !1, e.$setDirty();
    }, d.$setPristine = function () {
      a.removeClass(Ae).addClass(ze), d.$dirty = !1, d.$pristine = !0, f(i, function (a) {
        a.$setPristine();
      });
    };
  }
  function Zc(a, b, d, e) {
    return a.$setValidity(b, d), d ? e : c;
  }
  function $c(a, b, c, e, f, g) {
    if (!f.android) {
      var h = !1;
      b.on('compositionstart', function () {
        h = !0;
      }), b.on('compositionend', function () {
        h = !1, i();
      });
    }
    var i = function () {
      if (!h) {
        var d = b.val();
        S(c.ngTrim || 'T') && (d = vd(d)), e.$viewValue !== d && (a.$$phase ? e.$setViewValue(d) : a.$apply(function () {
          e.$setViewValue(d);
        }));
      }
    };
    if (f.hasEvent('input'))
      b.on('input', i);
    else {
      var j, k = function () {
          j || (j = g.defer(function () {
            i(), j = null;
          }));
        };
      b.on('keydown', function (a) {
        var b = a.keyCode;
        91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k();
      }), f.hasEvent('paste') && b.on('paste cut', k);
    }
    b.on('change', i), e.$render = function () {
      b.val(e.$isEmpty(e.$viewValue) ? '' : e.$viewValue);
    };
    var l, n, o = c.ngPattern;
    if (o) {
      var p = function (a, b) {
        return Zc(e, 'pattern', e.$isEmpty(b) || a.test(b), b);
      };
      n = o.match(/^\/(.*)\/([gim]*)$/), n ? (o = new RegExp(n[1], n[2]), l = function (a) {
        return p(o, a);
      }) : l = function (c) {
        var e = a.$eval(o);
        if (!e || !e.test)
          throw d('ngPattern')('noregexp', 'Expected {0} to be a RegExp but was {1}. Element: {2}', o, e, T(b));
        return p(e, c);
      }, e.$formatters.push(l), e.$parsers.push(l);
    }
    if (c.ngMinlength) {
      var q = m(c.ngMinlength), r = function (a) {
          return Zc(e, 'minlength', e.$isEmpty(a) || a.length >= q, a);
        };
      e.$parsers.push(r), e.$formatters.push(r);
    }
    if (c.ngMaxlength) {
      var s = m(c.ngMaxlength), t = function (a) {
          return Zc(e, 'maxlength', e.$isEmpty(a) || a.length <= s, a);
        };
      e.$parsers.push(t), e.$formatters.push(t);
    }
  }
  function _c(a, b, d, e, f, g) {
    if ($c(a, b, d, e, f, g), e.$parsers.push(function (a) {
        var b = e.$isEmpty(a);
        return b || ue.test(a) ? (e.$setValidity('number', !0), '' === a ? null : b ? a : parseFloat(a)) : (e.$setValidity('number', !1), c);
      }), e.$formatters.push(function (a) {
        return e.$isEmpty(a) ? '' : '' + a;
      }), d.min) {
      var h = function (a) {
        var b = parseFloat(d.min);
        return Zc(e, 'min', e.$isEmpty(a) || a >= b, a);
      };
      e.$parsers.push(h), e.$formatters.push(h);
    }
    if (d.max) {
      var i = function (a) {
        var b = parseFloat(d.max);
        return Zc(e, 'max', e.$isEmpty(a) || b >= a, a);
      };
      e.$parsers.push(i), e.$formatters.push(i);
    }
    e.$formatters.push(function (a) {
      return Zc(e, 'number', e.$isEmpty(a) || v(a), a);
    });
  }
  function ad(a, b, c, d, e, f) {
    $c(a, b, c, d, e, f);
    var g = function (a) {
      return Zc(d, 'url', d.$isEmpty(a) || se.test(a), a);
    };
    d.$formatters.push(g), d.$parsers.push(g);
  }
  function bd(a, b, c, d, e, f) {
    $c(a, b, c, d, e, f);
    var g = function (a) {
      return Zc(d, 'email', d.$isEmpty(a) || te.test(a), a);
    };
    d.$formatters.push(g), d.$parsers.push(g);
  }
  function cd(a, b, c, d) {
    r(c.name) && b.attr('name', j()), b.on('click', function () {
      b[0].checked && a.$apply(function () {
        d.$setViewValue(c.value);
      });
    }), d.$render = function () {
      var a = c.value;
      b[0].checked = a == d.$viewValue;
    }, c.$observe('value', d.$render);
  }
  function dd(a, b, c, d) {
    var e = c.ngTrueValue, f = c.ngFalseValue;
    u(e) || (e = !0), u(f) || (f = !1), b.on('click', function () {
      a.$apply(function () {
        d.$setViewValue(b[0].checked);
      });
    }), d.$render = function () {
      b[0].checked = d.$viewValue;
    }, d.$isEmpty = function (a) {
      return a !== e;
    }, d.$formatters.push(function (a) {
      return a === e;
    }), d.$parsers.push(function (a) {
      return a ? e : f;
    });
  }
  function ed(a, b) {
    return a = 'ngClass' + a, function () {
      return {
        restrict: 'AC',
        link: function (c, d, e) {
          function g(a) {
            if (b === !0 || c.$index % 2 === b) {
              var d = h(a || '');
              i ? K(a, i) || e.$updateClass(d, h(i)) : e.$addClass(d);
            }
            i = I(a);
          }
          function h(a) {
            if (x(a))
              return a.join(' ');
            if (t(a)) {
              var b = [];
              return f(a, function (a, c) {
                a && b.push(c);
              }), b.join(' ');
            }
            return a;
          }
          var i;
          c.$watch(e[a], g, !0), e.$observe('class', function () {
            g(c.$eval(e[a]));
          }), 'ngClass' !== a && c.$watch('$index', function (d, f) {
            var g = 1 & d;
            if (1 & g !== f) {
              var i = h(c.$eval(e[a]));
              g === b ? e.$addClass(i) : e.$removeClass(i);
            }
          });
        }
      };
    };
  }
  var fd = function (a) {
      return u(a) ? a.toLowerCase() : a;
    }, gd = Object.prototype.hasOwnProperty, hd = function (a) {
      return u(a) ? a.toUpperCase() : a;
    }, id = function (a) {
      return u(a) ? a.replace(/[A-Z]/g, function (a) {
        return String.fromCharCode(32 | a.charCodeAt(0));
      }) : a;
    }, jd = function (a) {
      return u(a) ? a.replace(/[a-z]/g, function (a) {
        return String.fromCharCode(-33 & a.charCodeAt(0));
      }) : a;
    };
  'i' !== 'I'.toLowerCase() && (fd = id, hd = jd);
  var kd, ld, md, nd, od, pd = [].slice, qd = [].push, rd = Object.prototype.toString, sd = d('ng'), td = (a.angular, a.angular || (a.angular = {})), ud = [
      '0',
      '0',
      '0'
    ];
  kd = m((/msie (\d+)/.exec(fd(navigator.userAgent)) || [])[1]), isNaN(kd) && (kd = m((/trident\/.*; rv:(\d+)/.exec(fd(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
  var vd = function () {
      return String.prototype.trim ? function (a) {
        return u(a) ? a.trim() : a;
      } : function (a) {
        return u(a) ? a.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : a;
      };
    }();
  od = 9 > kd ? function (a) {
    return a = a.nodeName ? a : a[0], a.scopeName && 'HTML' != a.scopeName ? hd(a.scopeName + ':' + a.nodeName) : a.nodeName;
  } : function (a) {
    return a.nodeName ? a.nodeName : a[0].nodeName;
  };
  var wd = /[A-Z]/g, xd = {
      full: '1.2.14-build.2267+sha.cceb455',
      major: 1,
      minor: 2,
      dot: 14,
      codeName: 'snapshot'
    }, yd = lb.cache = {}, zd = lb.expando = 'ng-' + new Date().getTime(), Ad = 1, Bd = a.document.addEventListener ? function (a, b, c) {
      a.addEventListener(b, c, !1);
    } : function (a, b, c) {
      a.attachEvent('on' + b, c);
    }, Cd = a.document.removeEventListener ? function (a, b, c) {
      a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
      a.detachEvent('on' + b, c);
    };
  lb._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };
  var Dd = /([\:\-\_]+(.))/g, Ed = /^moz([A-Z])/, Fd = d('jqLite'), Gd = lb.prototype = {
      ready: function (c) {
        function d() {
          e || (e = !0, c());
        }
        var e = !1;
        'complete' === b.readyState ? setTimeout(d) : (this.on('DOMContentLoaded', d), lb(a).on('load', d));
      },
      toString: function () {
        var a = [];
        return f(this, function (b) {
          a.push('' + b);
        }), '[' + a.join(', ') + ']';
      },
      eq: function (a) {
        return a >= 0 ? ld(this[a]) : ld(this[this.length + a]);
      },
      length: 0,
      push: qd,
      sort: [].sort,
      splice: [].splice
    }, Hd = {};
  f('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function (a) {
    Hd[fd(a)] = a;
  });
  var Id = {};
  f('input,select,option,textarea,button,form,details'.split(','), function (a) {
    Id[hd(a)] = !0;
  }), f({
    data: rb,
    inheritedData: xb,
    scope: function (a) {
      return ld(a).data('$scope') || xb(a.parentNode || a, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (a) {
      return ld(a).data('$isolateScope') || ld(a).data('$isolateScopeNoTemplate');
    },
    controller: wb,
    injector: function (a) {
      return xb(a, '$injector');
    },
    removeAttr: function (a, b) {
      a.removeAttribute(b);
    },
    hasClass: sb,
    css: function (a, b, d) {
      if (b = jb(b), !s(d)) {
        var e;
        return 8 >= kd && (e = a.currentStyle && a.currentStyle[b], '' === e && (e = 'auto')), e = e || a.style[b], 8 >= kd && (e = '' === e ? c : e), e;
      }
      a.style[b] = d;
    },
    attr: function (a, b, d) {
      var e = fd(b);
      if (Hd[e]) {
        if (!s(d))
          return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
        d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e));
      } else if (s(d))
        a.setAttribute(b, d);
      else if (a.getAttribute) {
        var f = a.getAttribute(b, 2);
        return null === f ? c : f;
      }
    },
    prop: function (a, b, c) {
      return s(c) ? (a[b] = c, void 0) : a[b];
    },
    text: function () {
      function a(a, c) {
        var d = b[a.nodeType];
        return r(c) ? d ? a[d] : '' : (a[d] = c, void 0);
      }
      var b = [];
      return 9 > kd ? (b[1] = 'innerText', b[3] = 'nodeValue') : b[1] = b[3] = 'textContent', a.$dv = '', a;
    }(),
    val: function (a, b) {
      if (r(b)) {
        if ('SELECT' === od(a) && a.multiple) {
          var c = [];
          return f(a.options, function (a) {
            a.selected && c.push(a.value || a.text);
          }), 0 === c.length ? null : c;
        }
        return a.value;
      }
      a.value = b;
    },
    html: function (a, b) {
      if (r(b))
        return a.innerHTML;
      for (var c = 0, d = a.childNodes; c < d.length; c++)
        nb(d[c]);
      a.innerHTML = b;
    },
    empty: yb
  }, function (a, b) {
    lb.prototype[b] = function (b, d) {
      var e, f;
      if (a !== yb && (2 == a.length && a !== sb && a !== wb ? b : d) === c) {
        if (t(b)) {
          for (e = 0; e < this.length; e++)
            if (a === rb)
              a(this[e], b);
            else
              for (f in b)
                a(this[e], f, b[f]);
          return this;
        }
        for (var g = a.$dv, h = g === c ? Math.min(this.length, 1) : this.length, i = 0; h > i; i++) {
          var j = a(this[i], b, d);
          g = g ? g + j : j;
        }
        return g;
      }
      for (e = 0; e < this.length; e++)
        a(this[e], b, d);
      return this;
    };
  }), f({
    removeData: pb,
    dealoc: nb,
    on: function kf(a, c, d, e) {
      if (s(e))
        throw Fd('onargs', 'jqLite#on() does not support the `selector` or `eventData` parameters');
      var g = qb(a, 'events'), h = qb(a, 'handle');
      g || qb(a, 'events', g = {}), h || qb(a, 'handle', h = Ab(a, g)), f(c.split(' '), function (c) {
        var e = g[c];
        if (!e) {
          if ('mouseenter' == c || 'mouseleave' == c) {
            var f = b.body.contains || b.body.compareDocumentPosition ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
              } : function (a, b) {
                if (b)
                  for (; b = b.parentNode;)
                    if (b === a)
                      return !0;
                return !1;
              };
            g[c] = [];
            var i = {
                mouseleave: 'mouseout',
                mouseenter: 'mouseover'
              };
            kf(a, i[c], function (a) {
              var b = this, d = a.relatedTarget;
              (!d || d !== b && !f(b, d)) && h(a, c);
            });
          } else
            Bd(a, c, h), g[c] = [];
          e = g[c];
        }
        e.push(d);
      });
    },
    off: ob,
    one: function (a, b, c) {
      a = ld(a), a.on(b, function d() {
        a.off(b, c), a.off(b, d);
      }), a.on(b, c);
    },
    replaceWith: function (a, b) {
      var c, d = a.parentNode;
      nb(a), f(new lb(b), function (b) {
        c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b;
      });
    },
    children: function (a) {
      var b = [];
      return f(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      }), b;
    },
    contents: function (a) {
      return a.childNodes || [];
    },
    append: function (a, b) {
      f(new lb(b), function (b) {
        (1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b);
      });
    },
    prepend: function (a, b) {
      if (1 === a.nodeType) {
        var c = a.firstChild;
        f(new lb(b), function (b) {
          a.insertBefore(b, c);
        });
      }
    },
    wrap: function (a, b) {
      b = ld(b)[0];
      var c = a.parentNode;
      c && c.replaceChild(b, a), b.appendChild(a);
    },
    remove: function (a) {
      nb(a);
      var b = a.parentNode;
      b && b.removeChild(a);
    },
    after: function (a, b) {
      var c = a, d = a.parentNode;
      f(new lb(b), function (a) {
        d.insertBefore(a, c.nextSibling), c = a;
      });
    },
    addClass: ub,
    removeClass: tb,
    toggleClass: function (a, b, c) {
      r(c) && (c = !sb(a, b)), (c ? ub : tb)(a, b);
    },
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    next: function (a) {
      if (a.nextElementSibling)
        return a.nextElementSibling;
      for (var b = a.nextSibling; null != b && 1 !== b.nodeType;)
        b = b.nextSibling;
      return b;
    },
    find: function (a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    },
    clone: mb,
    triggerHandler: function (a, b, c) {
      var d = (qb(a, 'events') || {})[b];
      c = c || [];
      var e = [{
            preventDefault: o,
            stopPropagation: o
          }];
      f(d, function (b) {
        b.apply(a, e.concat(c));
      });
    }
  }, function (a, b) {
    lb.prototype[b] = function (b, c, d) {
      for (var e, f = 0; f < this.length; f++)
        r(e) ? (e = a(this[f], b, c, d), s(e) && (e = ld(e))) : vb(e, a(this[f], b, c, d));
      return s(e) ? e : this;
    }, lb.prototype.bind = lb.prototype.on, lb.prototype.unbind = lb.prototype.off;
  }), Cb.prototype = {
    put: function (a, b) {
      this[Bb(a)] = b;
    },
    get: function (a) {
      return this[Bb(a)];
    },
    remove: function (a) {
      var b = this[a = Bb(a)];
      return delete this[a], b;
    }
  };
  var Jd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Kd = /,/, Ld = /^\s*(_?)(\S+?)\1\s*$/, Md = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Nd = d('$injector'), Od = d('$animate'), Pd = [
      '$provide',
      function (a) {
        this.$$selectors = {}, this.register = function (b, c) {
          var d = b + '-animation';
          if (b && '.' != b.charAt(0))
            throw Od('notcsel', 'Expecting class selector starting with \'.\' got \'{0}\'.', b);
          this.$$selectors[b.substr(1)] = d, a.factory(d, c);
        }, this.classNameFilter = function (a) {
          return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter;
        }, this.$get = [
          '$timeout',
          function (a) {
            return {
              enter: function (b, c, d, e) {
                d ? d.after(b) : (c && c[0] || (c = d.parent()), c.append(b)), e && a(e, 0, !1);
              },
              leave: function (b, c) {
                b.remove(), c && a(c, 0, !1);
              },
              move: function (a, b, c, d) {
                this.enter(a, b, c, d);
              },
              addClass: function (b, c, d) {
                c = u(c) ? c : x(c) ? c.join(' ') : '', f(b, function (a) {
                  ub(a, c);
                }), d && a(d, 0, !1);
              },
              removeClass: function (b, c, d) {
                c = u(c) ? c : x(c) ? c.join(' ') : '', f(b, function (a) {
                  tb(a, c);
                }), d && a(d, 0, !1);
              },
              setClass: function (b, c, d, e) {
                f(b, function (a) {
                  ub(a, c), tb(a, d);
                }), e && a(e, 0, !1);
              },
              enabled: o
            };
          }
        ];
      }
    ], Qd = d('$compile');
  Kb.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  var Rd = /^(x[\:\-_]|data[\:\-_])/i, Sd = d('$interpolate'), Td = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Ud = {
      http: 80,
      https: 443,
      ftp: 21
    }, Vd = d('$location');
  ic.prototype = hc.prototype = gc.prototype = {
    $$html5: !1,
    $$replace: !1,
    absUrl: jc('$$absUrl'),
    url: function (a, b) {
      if (r(a))
        return this.$$url;
      var c = Td.exec(a);
      return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ''), this.hash(c[5] || '', b), this;
    },
    protocol: jc('$$protocol'),
    host: jc('$$host'),
    port: jc('$$port'),
    path: kc('$$path', function (a) {
      return '/' == a.charAt(0) ? a : '/' + a;
    }),
    search: function (a, b) {
      switch (arguments.length) {
      case 0:
        return this.$$search;
      case 1:
        if (u(a))
          this.$$search = V(a);
        else {
          if (!t(a))
            throw Vd('isrcharg', 'The first argument of the `$location#search()` call must be a string or an object.');
          this.$$search = a;
        }
        break;
      default:
        r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
      }
      return this.$$compose(), this;
    },
    hash: kc('$$hash', p),
    replace: function () {
      return this.$$replace = !0, this;
    }
  };
  var Wd, Xd = d('$parse'), Yd = {}, Zd = {
      'null': function () {
        return null;
      },
      'true': function () {
        return !0;
      },
      'false': function () {
        return !1;
      },
      undefined: o,
      '+': function (a, b, d, e) {
        return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c;
      },
      '-': function (a, b, c, d) {
        return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0);
      },
      '*': function (a, b, c, d) {
        return c(a, b) * d(a, b);
      },
      '/': function (a, b, c, d) {
        return c(a, b) / d(a, b);
      },
      '%': function (a, b, c, d) {
        return c(a, b) % d(a, b);
      },
      '^': function (a, b, c, d) {
        return c(a, b) ^ d(a, b);
      },
      '=': o,
      '===': function (a, b, c, d) {
        return c(a, b) === d(a, b);
      },
      '!==': function (a, b, c, d) {
        return c(a, b) !== d(a, b);
      },
      '==': function (a, b, c, d) {
        return c(a, b) == d(a, b);
      },
      '!=': function (a, b, c, d) {
        return c(a, b) != d(a, b);
      },
      '<': function (a, b, c, d) {
        return c(a, b) < d(a, b);
      },
      '>': function (a, b, c, d) {
        return c(a, b) > d(a, b);
      },
      '<=': function (a, b, c, d) {
        return c(a, b) <= d(a, b);
      },
      '>=': function (a, b, c, d) {
        return c(a, b) >= d(a, b);
      },
      '&&': function (a, b, c, d) {
        return c(a, b) && d(a, b);
      },
      '||': function (a, b, c, d) {
        return c(a, b) || d(a, b);
      },
      '&': function (a, b, c, d) {
        return c(a, b) & d(a, b);
      },
      '|': function (a, b, c, d) {
        return d(a, b)(a, b, c(a, b));
      },
      '!': function (a, b, c) {
        return !c(a, b);
      }
    }, $d = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, _d = function (a) {
      this.options = a;
    };
  _d.prototype = {
    constructor: _d,
    lex: function (a) {
      this.text = a, this.index = 0, this.ch = c, this.lastCh = ':', this.tokens = [];
      for (var b, d = []; this.index < this.text.length;) {
        if (this.ch = this.text.charAt(this.index), this.is('"\''))
          this.readString(this.ch);
        else if (this.isNumber(this.ch) || this.is('.') && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdent(this.ch))
          this.readIdent(), this.was('{,') && '{' === d[0] && (b = this.tokens[this.tokens.length - 1]) && (b.json = -1 === b.text.indexOf('.'));
        else if (this.is('(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: this.ch,
            json: this.was(':[,') && this.is('{[') || this.is('}]:,')
          }), this.is('{[') && d.unshift(this.ch), this.is('}]') && d.shift(), this.index++;
        else {
          if (this.isWhitespace(this.ch)) {
            this.index++;
            continue;
          }
          var e = this.ch + this.peek(), f = e + this.peek(2), g = Zd[this.ch], h = Zd[e], i = Zd[f];
          i ? (this.tokens.push({
            index: this.index,
            text: f,
            fn: i
          }), this.index += 3) : h ? (this.tokens.push({
            index: this.index,
            text: e,
            fn: h
          }), this.index += 2) : g ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: g,
            json: this.was('[,:') && this.is('+-')
          }), this.index += 1) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
        this.lastCh = this.ch;
      }
      return this.tokens;
    },
    is: function (a) {
      return -1 !== a.indexOf(this.ch);
    },
    was: function (a) {
      return -1 !== a.indexOf(this.lastCh);
    },
    peek: function (a) {
      var b = a || 1;
      return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1;
    },
    isNumber: function (a) {
      return a >= '0' && '9' >= a;
    },
    isWhitespace: function (a) {
      return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xa0' === a;
    },
    isIdent: function (a) {
      return a >= 'a' && 'z' >= a || a >= 'A' && 'Z' >= a || '_' === a || '$' === a;
    },
    isExpOperator: function (a) {
      return '-' === a || '+' === a || this.isNumber(a);
    },
    throwError: function (a, b, c) {
      c = c || this.index;
      var d = s(b) ? 's ' + b + '-' + this.index + ' [' + this.text.substring(b, c) + ']' : ' ' + c;
      throw Xd('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].', a, d, this.text);
    },
    readNumber: function () {
      for (var a = '', b = this.index; this.index < this.text.length;) {
        var c = fd(this.text.charAt(this.index));
        if ('.' == c || this.isNumber(c))
          a += c;
        else {
          var d = this.peek();
          if ('e' == c && this.isExpOperator(d))
            a += c;
          else if (this.isExpOperator(c) && d && this.isNumber(d) && 'e' == a.charAt(a.length - 1))
            a += c;
          else {
            if (!this.isExpOperator(c) || d && this.isNumber(d) || 'e' != a.charAt(a.length - 1))
              break;
            this.throwError('Invalid exponent');
          }
        }
        this.index++;
      }
      a = 1 * a, this.tokens.push({
        index: b,
        text: a,
        json: !0,
        fn: function () {
          return a;
        }
      });
    },
    readIdent: function () {
      for (var a, b, c, d, e = this, f = '', g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), '.' === d || this.isIdent(d) || this.isNumber(d));)
        '.' === d && (a = this.index), f += d, this.index++;
      if (a)
        for (b = this.index; b < this.text.length;) {
          if (d = this.text.charAt(b), '(' === d) {
            c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
            break;
          }
          if (!this.isWhitespace(d))
            break;
          b++;
        }
      var h = {
          index: g,
          text: f
        };
      if (Zd.hasOwnProperty(f))
        h.fn = Zd[f], h.json = Zd[f];
      else {
        var i = tc(f, this.options, this.text);
        h.fn = l(function (a, b) {
          return i(a, b);
        }, {
          assign: function (a, b) {
            return pc(a, f, b, e.text, e.options);
          }
        });
      }
      this.tokens.push(h), c && (this.tokens.push({
        index: a,
        text: '.',
        json: !1
      }), this.tokens.push({
        index: a + 1,
        text: c,
        json: !1
      }));
    },
    readString: function (a) {
      var b = this.index;
      this.index++;
      for (var c = '', d = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index);
        if (d += f, e) {
          if ('u' === f) {
            var g = this.text.substring(this.index + 1, this.index + 5);
            g.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + g + ']'), this.index += 4, c += String.fromCharCode(parseInt(g, 16));
          } else {
            var h = $d[f];
            c += h ? h : f;
          }
          e = !1;
        } else if ('\\' === f)
          e = !0;
        else {
          if (f === a)
            return this.index++, this.tokens.push({
              index: b,
              text: d,
              string: c,
              json: !0,
              fn: function () {
                return c;
              }
            }), void 0;
          c += f;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', b);
    }
  };
  var ae = function (a, b, c) {
    this.lexer = a, this.$filter = b, this.options = c;
  };
  ae.ZERO = function () {
    return 0;
  }, ae.prototype = {
    constructor: ae,
    parse: function (a, b) {
      this.text = a, this.json = b, this.tokens = this.lexer.lex(a), b && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
        this.throwError('is not valid json', {
          text: a,
          index: 0
        });
      });
      var c = b ? this.primary() : this.statements();
      return 0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]), c.literal = !!c.literal, c.constant = !!c.constant, c;
    },
    primary: function () {
      var a;
      if (this.expect('('))
        a = this.filterChain(), this.consume(')');
      else if (this.expect('['))
        a = this.arrayDeclaration();
      else if (this.expect('{'))
        a = this.object();
      else {
        var b = this.expect();
        a = b.fn, a || this.throwError('not a primary expression', b), b.json && (a.constant = !0, a.literal = !0);
      }
      for (var c, d; c = this.expect('(', '[', '.');)
        '(' === c.text ? (a = this.functionCall(a, d), d = null) : '[' === c.text ? (d = a, a = this.objectIndex(a)) : '.' === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE');
      return a;
    },
    throwError: function (a, b) {
      throw Xd('syntax', 'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].', b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw Xd('ueoe', 'Unexpected end of expression: {0}', this.text);
      return this.tokens[0];
    },
    peek: function (a, b, c, d) {
      if (this.tokens.length > 0) {
        var e = this.tokens[0], f = e.text;
        if (f === a || f === b || f === c || f === d || !a && !b && !c && !d)
          return e;
      }
      return !1;
    },
    expect: function (a, b, c, d) {
      var e = this.peek(a, b, c, d);
      return e ? (this.json && !e.json && this.throwError('is not valid json', e), this.tokens.shift(), e) : !1;
    },
    consume: function (a) {
      this.expect(a) || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
    },
    unaryFn: function (a, b) {
      return l(function (c, d) {
        return a(c, d, b);
      }, { constant: b.constant });
    },
    ternaryFn: function (a, b, c) {
      return l(function (d, e) {
        return a(d, e) ? b(d, e) : c(d, e);
      }, { constant: a.constant && b.constant && c.constant });
    },
    binaryFn: function (a, b, c) {
      return l(function (d, e) {
        return b(d, e, a, c);
      }, { constant: a.constant && c.constant });
    },
    statements: function () {
      for (var a = [];;)
        if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';'))
          return 1 === a.length ? a[0] : function (b, c) {
            for (var d, e = 0; e < a.length; e++) {
              var f = a[e];
              f && (d = f(b, c));
            }
            return d;
          };
    },
    filterChain: function () {
      for (var a, b = this.expression();;) {
        if (!(a = this.expect('|')))
          return b;
        b = this.binaryFn(b, a.fn, this.filter());
      }
    },
    filter: function () {
      for (var a = this.expect(), b = this.$filter(a.text), c = [];;) {
        if (!(a = this.expect(':'))) {
          var d = function (a, d, e) {
            for (var f = [e], g = 0; g < c.length; g++)
              f.push(c[g](a, d));
            return b.apply(a, f);
          };
          return function () {
            return d;
          };
        }
        c.push(this.expression());
      }
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a, b, c = this.ternary();
      return (b = this.expect('=')) ? (c.assign || this.throwError('implies assignment but [' + this.text.substring(0, b.index) + '] can not be assigned to', b), a = this.ternary(), function (b, d) {
        return c.assign(b, a(b, d), d);
      }) : c;
    },
    ternary: function () {
      var a, b, c = this.logicalOR();
      return (b = this.expect('?')) ? (a = this.ternary(), (b = this.expect(':')) ? this.ternaryFn(c, a, this.ternary()) : (this.throwError('expected :', b), void 0)) : c;
    },
    logicalOR: function () {
      for (var a, b = this.logicalAND();;) {
        if (!(a = this.expect('||')))
          return b;
        b = this.binaryFn(b, a.fn, this.logicalAND());
      }
    },
    logicalAND: function () {
      var a, b = this.equality();
      return (a = this.expect('&&')) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b;
    },
    equality: function () {
      var a, b = this.relational();
      return (a = this.expect('==', '!=', '===', '!==')) && (b = this.binaryFn(b, a.fn, this.equality())), b;
    },
    relational: function () {
      var a, b = this.additive();
      return (a = this.expect('<', '>', '<=', '>=')) && (b = this.binaryFn(b, a.fn, this.relational())), b;
    },
    additive: function () {
      for (var a, b = this.multiplicative(); a = this.expect('+', '-');)
        b = this.binaryFn(b, a.fn, this.multiplicative());
      return b;
    },
    multiplicative: function () {
      for (var a, b = this.unary(); a = this.expect('*', '/', '%');)
        b = this.binaryFn(b, a.fn, this.unary());
      return b;
    },
    unary: function () {
      var a;
      return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn(ae.ZERO, a.fn, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.fn, this.unary()) : this.primary();
    },
    fieldAccess: function (a) {
      var b = this, c = this.expect().text, d = tc(c, this.options, this.text);
      return l(function (b, c, e) {
        return d(e || a(b, c));
      }, {
        assign: function (d, e, f) {
          return pc(a(d, f), c, e, b.text, b.options);
        }
      });
    },
    objectIndex: function (a) {
      var b = this, d = this.expression();
      return this.consume(']'), l(function (e, f) {
        var g, h, i = a(e, f), j = d(e, f);
        return i ? (g = oc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, '$$v' in g || (h.$$v = c, h.then(function (a) {
          h.$$v = a;
        })), g = g.$$v), g) : c;
      }, {
        assign: function (c, e, f) {
          var g = d(c, f), h = oc(a(c, f), b.text);
          return h[g] = e;
        }
      });
    },
    functionCall: function (a, b) {
      var c = [];
      if (')' !== this.peekToken().text)
        do
          c.push(this.expression());
        while (this.expect(','));
      this.consume(')');
      var d = this;
      return function (e, f) {
        for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++)
          g.push(c[i](e, f));
        var j = a(e, f, h) || o;
        oc(h, d.text), oc(j, d.text);
        var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
        return oc(k, d.text);
      };
    },
    arrayDeclaration: function () {
      var a = [], b = !0;
      if (']' !== this.peekToken().text)
        do {
          var c = this.expression();
          a.push(c), c.constant || (b = !1);
        } while (this.expect(','));
      return this.consume(']'), l(function (b, c) {
        for (var d = [], e = 0; e < a.length; e++)
          d.push(a[e](b, c));
        return d;
      }, {
        literal: !0,
        constant: b
      });
    },
    object: function () {
      var a = [], b = !0;
      if ('}' !== this.peekToken().text)
        do {
          var c = this.expect(), d = c.string || c.text;
          this.consume(':');
          var e = this.expression();
          a.push({
            key: d,
            value: e
          }), e.constant || (b = !1);
        } while (this.expect(','));
      return this.consume('}'), l(function (b, c) {
        for (var d = {}, e = 0; e < a.length; e++) {
          var f = a[e];
          d[f.key] = f.value(b, c);
        }
        return d;
      }, {
        literal: !0,
        constant: b
      });
    }
  };
  var be = {}, ce = d('$sce'), de = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, ee = b.createElement('a'), fe = Gc(a.location.href, !0);
  Jc.$inject = ['$provide'], Lc.$inject = ['$locale'], Mc.$inject = ['$locale'];
  var ge = '.', he = {
      yyyy: Pc('FullYear', 4),
      yy: Pc('FullYear', 2, 0, !0),
      y: Pc('FullYear', 1),
      MMMM: Qc('Month'),
      MMM: Qc('Month', !0),
      MM: Pc('Month', 2, 1),
      M: Pc('Month', 1, 1),
      dd: Pc('Date', 2),
      d: Pc('Date', 1),
      HH: Pc('Hours', 2),
      H: Pc('Hours', 1),
      hh: Pc('Hours', 2, -12),
      h: Pc('Hours', 1, -12),
      mm: Pc('Minutes', 2),
      m: Pc('Minutes', 1),
      ss: Pc('Seconds', 2),
      s: Pc('Seconds', 1),
      sss: Pc('Milliseconds', 3),
      EEEE: Qc('Day'),
      EEE: Qc('Day', !0),
      a: Sc,
      Z: Rc
    }, ie = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, je = /^\-?\d+$/;
  Tc.$inject = ['$locale'];
  var ke = q(fd), le = q(hd);
  Wc.$inject = ['$parse'];
  var me = q({
      restrict: 'E',
      compile: function (a, c) {
        return 8 >= kd && (c.href || c.name || c.$set('href', ''), a.append(b.createComment('IE fix'))), c.href || c.xlinkHref || c.name ? void 0 : function (a, b) {
          var c = '[object SVGAnimatedString]' === rd.call(b.prop('href')) ? 'xlink:href' : 'href';
          b.on('click', function (a) {
            b.attr(c) || a.preventDefault();
          });
        };
      }
    }), ne = {};
  f(Hd, function (a, b) {
    if ('multiple' != a) {
      var c = Lb('ng-' + b);
      ne[c] = function () {
        return {
          priority: 100,
          link: function (a, d, e) {
            a.$watch(e[c], function (a) {
              e.$set(b, !!a);
            });
          }
        };
      };
    }
  }), f([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var b = Lb('ng-' + a);
    ne[b] = function () {
      return {
        priority: 99,
        link: function (c, d, e) {
          e.$observe(b, function (b) {
            b && (e.$set(a, b), kd && d.prop(a, e[a]));
          });
        }
      };
    };
  });
  var oe = {
      $addControl: o,
      $removeControl: o,
      $setValidity: o,
      $setDirty: o,
      $setPristine: o
    };
  Yc.$inject = [
    '$element',
    '$attrs',
    '$scope'
  ];
  var pe = function (a) {
      return [
        '$timeout',
        function (b) {
          var d = {
              name: 'form',
              restrict: a ? 'EAC' : 'E',
              controller: Yc,
              compile: function () {
                return {
                  pre: function (a, d, e, f) {
                    if (!e.action) {
                      var g = function (a) {
                        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                      };
                      Bd(d[0], 'submit', g), d.on('$destroy', function () {
                        b(function () {
                          Cd(d[0], 'submit', g);
                        }, 0, !1);
                      });
                    }
                    var h = d.parent().controller('form'), i = e.name || e.ngForm;
                    i && pc(a, i, f, i), h && d.on('$destroy', function () {
                      h.$removeControl(f), i && pc(a, i, c, i), l(f, oe);
                    });
                  }
                };
              }
            };
          return d;
        }
      ];
    }, qe = pe(), re = pe(!0), se = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, te = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i, ue = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, ve = {
      text: $c,
      number: _c,
      url: ad,
      email: bd,
      radio: cd,
      checkbox: dd,
      hidden: o,
      button: o,
      submit: o,
      reset: o,
      file: o
    }, we = [
      '$browser',
      '$sniffer',
      function (a, b) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (c, d, e, f) {
            f && (ve[fd(e.type)] || ve.text)(c, d, e, f, b, a);
          }
        };
      }
    ], xe = 'ng-valid', ye = 'ng-invalid', ze = 'ng-pristine', Ae = 'ng-dirty', Be = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      function (a, b, c, e, g) {
        function h(a, b) {
          b = b ? '-' + _(b, '-') : '', e.removeClass((a ? ye : xe) + b).addClass((a ? xe : ye) + b);
        }
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
        var i = g(c.ngModel), j = i.assign;
        if (!j)
          throw d('ngModel')('nonassign', 'Expression \'{0}\' is non-assignable. Element: {1}', c.ngModel, T(e));
        this.$render = o, this.$isEmpty = function (a) {
          return r(a) || '' === a || null === a || a !== a;
        };
        var k = e.inheritedData('$formController') || oe, l = 0, m = this.$error = {};
        e.addClass(ze), h(!0), this.$setValidity = function (a, b) {
          m[a] !== !b && (b ? (m[a] && l--, l || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, l++), m[a] = !b, h(b, a), k.$setValidity(a, b, this));
        }, this.$setPristine = function () {
          this.$dirty = !1, this.$pristine = !0, e.removeClass(Ae).addClass(ze);
        }, this.$setViewValue = function (c) {
          this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(ze).addClass(Ae), k.$setDirty()), f(this.$parsers, function (a) {
            c = a(c);
          }), this.$modelValue !== c && (this.$modelValue = c, j(a, c), f(this.$viewChangeListeners, function (a) {
            try {
              a();
            } catch (c) {
              b(c);
            }
          }));
        };
        var n = this;
        a.$watch(function () {
          var b = i(a);
          if (n.$modelValue !== b) {
            var c = n.$formatters, d = c.length;
            for (n.$modelValue = b; d--;)
              b = c[d](b);
            n.$viewValue !== b && (n.$viewValue = b, n.$render());
          }
          return b;
        });
      }
    ], Ce = function () {
      return {
        require: [
          'ngModel',
          '^?form'
        ],
        controller: Be,
        link: function (a, b, c, d) {
          var e = d[0], f = d[1] || oe;
          f.$addControl(e), a.$on('$destroy', function () {
            f.$removeControl(e);
          });
        }
      };
    }, De = q({
      require: 'ngModel',
      link: function (a, b, c, d) {
        d.$viewChangeListeners.push(function () {
          a.$eval(c.ngChange);
        });
      }
    }), Ee = function () {
      return {
        require: '?ngModel',
        link: function (a, b, c, d) {
          if (d) {
            c.required = !0;
            var e = function (a) {
              return c.required && d.$isEmpty(a) ? (d.$setValidity('required', !1), void 0) : (d.$setValidity('required', !0), a);
            };
            d.$formatters.push(e), d.$parsers.unshift(e), c.$observe('required', function () {
              e(d.$viewValue);
            });
          }
        }
      };
    }, Fe = function () {
      return {
        require: 'ngModel',
        link: function (a, b, d, e) {
          var g = /\/(.*)\//.exec(d.ngList), h = g && new RegExp(g[1]) || d.ngList || ',', i = function (a) {
              if (!r(a)) {
                var b = [];
                return a && f(a.split(h), function (a) {
                  a && b.push(vd(a));
                }), b;
              }
            };
          e.$parsers.push(i), e.$formatters.push(function (a) {
            return x(a) ? a.join(', ') : c;
          }), e.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, Ge = /^(true|false|\d+)$/, He = function () {
      return {
        priority: 100,
        compile: function (a, b) {
          return Ge.test(b.ngValue) ? function (a, b, c) {
            c.$set('value', a.$eval(c.ngValue));
          } : function (a, b, c) {
            a.$watch(c.ngValue, function (a) {
              c.$set('value', a);
            });
          };
        }
      };
    }, Ie = Xc(function (a, b, d) {
      b.addClass('ng-binding').data('$binding', d.ngBind), a.$watch(d.ngBind, function (a) {
        b.text(a == c ? '' : a);
      });
    }), Je = [
      '$interpolate',
      function (a) {
        return function (b, c, d) {
          var e = a(c.attr(d.$attr.ngBindTemplate));
          c.addClass('ng-binding').data('$binding', e), d.$observe('ngBindTemplate', function (a) {
            c.text(a);
          });
        };
      }
    ], Ke = [
      '$sce',
      '$parse',
      function (a, b) {
        return function (c, d, e) {
          function f() {
            return (g(c) || '').toString();
          }
          d.addClass('ng-binding').data('$binding', e.ngBindHtml);
          var g = b(e.ngBindHtml);
          c.$watch(f, function () {
            d.html(a.getTrustedHtml(g(c)) || '');
          });
        };
      }
    ], Le = ed('', !0), Me = ed('Odd', 0), Ne = ed('Even', 1), Oe = Xc({
      compile: function (a, b) {
        b.$set('ngCloak', c), a.removeClass('ng-cloak');
      }
    }), Pe = [function () {
        return {
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], Qe = {};
  f('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var b = Lb('ng-' + a);
    Qe[b] = [
      '$parse',
      function (c) {
        return {
          compile: function (d, e) {
            var f = c(e[b]);
            return function (b, c) {
              c.on(fd(a), function (a) {
                b.$apply(function () {
                  f(b, { $event: a });
                });
              });
            };
          }
        };
      }
    ];
  });
  var Re = [
      '$animate',
      function (a) {
        return {
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (c, d, e, f, g) {
            var h, i;
            c.$watch(e.ngIf, function (f) {
              S(f) ? i || (i = c.$new(), g(i, function (c) {
                c[c.length++] = b.createComment(' end ngIf: ' + e.ngIf + ' '), h = { clone: c }, a.enter(c, d.parent(), d);
              })) : (i && (i.$destroy(), i = null), h && (a.leave(fb(h.clone)), h = null));
            });
          }
        };
      }
    ], Se = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$animate',
      '$sce',
      function (a, b, c, d, e) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: td.noop,
          compile: function (f, g) {
            var h = g.ngInclude || g.src, i = g.onload || '', j = g.autoscroll;
            return function (f, g, k, l, m) {
              var n, o, p = 0, q = function () {
                  n && (n.$destroy(), n = null), o && (d.leave(o), o = null);
                };
              f.$watch(e.parseAsResourceUrl(h), function (e) {
                var h = function () {
                    !s(j) || j && !f.$eval(j) || c();
                  }, k = ++p;
                e ? (a.get(e, { cache: b }).success(function (a) {
                  if (k === p) {
                    var b = f.$new();
                    l.template = a;
                    var c = m(b, function (a) {
                        q(), d.enter(a, null, g, h);
                      });
                    n = b, o = c, n.$emit('$includeContentLoaded'), f.$eval(i);
                  }
                }).error(function () {
                  k === p && q();
                }), f.$emit('$includeContentRequested')) : (q(), l.template = null);
              });
            };
          }
        };
      }
    ], Te = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (b, c, d, e) {
            c.html(e.template), a(c.contents())(b);
          }
        };
      }
    ], Ue = Xc({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, b, c) {
            a.$eval(c.ngInit);
          }
        };
      }
    }), Ve = Xc({
      terminal: !0,
      priority: 1000
    }), We = [
      '$locale',
      '$interpolate',
      function (a, b) {
        var c = /{}/g;
        return {
          restrict: 'EA',
          link: function (d, e, g) {
            var h = g.count, i = g.$attr.when && e.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i) || {}, l = {}, m = b.startSymbol(), n = b.endSymbol(), o = /^when(Minus)?(.+)$/;
            f(g, function (a, b) {
              o.test(b) && (k[fd(b.replace('when', '').replace('Minus', '-'))] = e.attr(g.$attr[b]));
            }), f(k, function (a, d) {
              l[d] = b(a.replace(c, m + h + '-' + j + n));
            }), d.$watch(function () {
              var b = parseFloat(d.$eval(h));
              return isNaN(b) ? '' : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0));
            }, function (a) {
              e.text(a);
            });
          }
        };
      }
    ], Xe = [
      '$parse',
      '$animate',
      function (a, c) {
        function g(a) {
          return a.clone[0];
        }
        function h(a) {
          return a.clone[a.clone.length - 1];
        }
        var i = '$$NG_REMOVED', j = d('ngRepeat');
        return {
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          link: function (d, k, l, m, n) {
            var o, p, q, r, s, t, u, v, w, x = l.ngRepeat, y = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), z = { $id: Bb };
            if (!y)
              throw j('iexp', 'Expected expression in form of \'_item_ in _collection_[ track by _id_]\' but got \'{0}\'.', x);
            if (t = y[1], u = y[2], o = y[3], o ? (p = a(o), q = function (a, b, c) {
                return w && (z[w] = a), z[v] = b, z.$index = c, p(d, z);
              }) : (r = function (a, b) {
                return Bb(b);
              }, s = function (a) {
                return a;
              }), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y)
              throw j('iidexp', '\'_item_\' in \'_item_ in _collection_\' should be an identifier or \'(_key_, _value_)\' expression, but got \'{0}\'.', t);
            v = y[3] || y[1], w = y[2];
            var A = {};
            d.$watchCollection(u, function (a) {
              var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0], G = {}, H = [];
              if (e(a))
                C = a, B = q || r;
              else {
                B = q || s, C = [];
                for (u in a)
                  a.hasOwnProperty(u) && '$' != u.charAt(0) && C.push(u);
                C.sort();
              }
              for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)
                if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), db(z, '`track by` id'), A.hasOwnProperty(z))
                  D = A[z], delete A[z], G[z] = D, H[l] = D;
                else {
                  if (G.hasOwnProperty(z))
                    throw f(H, function (a) {
                      a && a.scope && (A[a.id] = a);
                    }), j('dupes', 'Duplicates in a repeater are not allowed. Use \'track by\' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}', x, z);
                  H[l] = { id: z }, G[z] = !1;
                }
              for (u in A)
                A.hasOwnProperty(u) && (D = A[u], E = fb(D.clone), c.leave(E), f(E, function (a) {
                  a[i] = !0;
                }), D.scope.$destroy());
              for (l = 0, m = C.length; m > l; l++) {
                if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
                  t = D.scope, o = F;
                  do
                    o = o.nextSibling;
                  while (o && o[i]);
                  g(D) != o && c.move(fb(D.clone), null, ld(F)), F = h(D);
                } else
                  t = d.$new();
                t[v] = y, w && (t[w] = u), t.$index = l, t.$first = 0 === l, t.$last = l === p - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & l)), D.scope || n(t, function (a) {
                  a[a.length++] = b.createComment(' end ngRepeat: ' + x + ' '), c.enter(a, null, ld(F)), F = a, D.scope = t, D.clone = a, G[D.id] = D;
                });
              }
              A = G;
            });
          }
        };
      }
    ], Ye = [
      '$animate',
      function (a) {
        return function (b, c, d) {
          b.$watch(d.ngShow, function (b) {
            a[S(b) ? 'removeClass' : 'addClass'](c, 'ng-hide');
          });
        };
      }
    ], Ze = [
      '$animate',
      function (a) {
        return function (b, c, d) {
          b.$watch(d.ngHide, function (b) {
            a[S(b) ? 'addClass' : 'removeClass'](c, 'ng-hide');
          });
        };
      }
    ], $e = Xc(function (a, b, c) {
      a.$watch(c.ngStyle, function (a, c) {
        c && a !== c && f(c, function (a, c) {
          b.css(c, '');
        }), a && b.css(a);
      }, !0);
    }), _e = [
      '$animate',
      function (a) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (b, c, d, e) {
            var g, h, i = d.ngSwitch || d.on, j = [];
            b.$watch(i, function (c) {
              for (var i = 0, k = j.length; k > i; i++)
                j[i].$destroy(), a.leave(h[i]);
              h = [], j = [], (g = e.cases['!' + c] || e.cases['?']) && (b.$eval(d.change), f(g, function (c) {
                var d = b.$new();
                j.push(d), c.transclude(d, function (b) {
                  var d = c.element;
                  h.push(b), a.enter(b, d.parent(), d);
                });
              }));
            });
          }
        };
      }
    ], af = Xc({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, b, c, d, e) {
        d.cases['!' + c.ngSwitchWhen] = d.cases['!' + c.ngSwitchWhen] || [], d.cases['!' + c.ngSwitchWhen].push({
          transclude: e,
          element: b
        });
      }
    }), bf = Xc({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, b, c, d, e) {
        d.cases['?'] = d.cases['?'] || [], d.cases['?'].push({
          transclude: e,
          element: b
        });
      }
    }), cf = Xc({
      link: function (a, b, c, e, f) {
        if (!f)
          throw d('ngTransclude')('orphan', 'Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}', T(b));
        f(function (a) {
          b.empty(), b.append(a);
        });
      }
    }), df = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (b, c) {
            if ('text/ng-template' == c.type) {
              var d = c.id, e = b[0].text;
              a.put(d, e);
            }
          }
        };
      }
    ], ef = d('ngOptions'), ff = q({ terminal: !0 }), gf = [
      '$compile',
      '$parse',
      function (a, d) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = { $setViewValue: o };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function (a, b, c) {
              var d, e, f = this, g = {}, i = h;
              f.databound = c.ngModel, f.init = function (a, b, c) {
                i = a, d = b, e = c;
              }, f.addOption = function (b) {
                db(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove());
              }, f.removeOption = function (a) {
                this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a));
              }, f.renderUnknownOption = function (b) {
                var c = '? ' + Bb(b) + ' ?';
                e.val(c), a.prepend(e), a.val(c), e.prop('selected', !0);
              }, f.hasOption = function (a) {
                return g.hasOwnProperty(a);
              }, b.$on('$destroy', function () {
                f.renderUnknownOption = o;
              });
            }
          ],
          link: function (h, i, j, k) {
            function l(a, b, c, d) {
              c.$render = function () {
                var a = c.$viewValue;
                d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), '' === a && o.prop('selected', !0)) : r(a) && o ? b.val('') : d.renderUnknownOption(a);
              }, b.on('change', function () {
                a.$apply(function () {
                  z.parent() && z.remove(), c.$setViewValue(b.val());
                });
              });
            }
            function m(a, b, c) {
              var d;
              c.$render = function () {
                var a = new Cb(c.$viewValue);
                f(b.find('option'), function (b) {
                  b.selected = s(a.get(b.value));
                });
              }, a.$watch(function () {
                K(d, c.$viewValue) || (d = I(c.$viewValue), c.$render());
              }), b.on('change', function () {
                a.$apply(function () {
                  var a = [];
                  f(b.find('option'), function (b) {
                    b.selected && a.push(b.value);
                  }), c.$setViewValue(a);
                });
              });
            }
            function n(b, f, h) {
              function i() {
                var a, c, d, e, i, j, q, u, A, B, C, D, E, F, G, H = { '': [] }, I = [''], J = h.$modelValue, K = p(b) || [], L = m ? g(K) : K, M = {}, N = !1;
                if (t)
                  if (r && x(J)) {
                    N = new Cb([]);
                    for (var O = 0; O < J.length; O++)
                      M[l] = J[O], N.put(r(b, M), J[O]);
                  } else
                    N = new Cb(J);
                for (C = 0; A = L.length, A > C; C++) {
                  if (q = C, m) {
                    if (q = L[C], '$' === q.charAt(0))
                      continue;
                    M[m] = q;
                  }
                  if (M[l] = K[q], a = n(b, M) || '', (c = H[a]) || (c = H[a] = [], I.push(a)), t)
                    D = s(N.remove(r ? r(b, M) : o(b, M)));
                  else {
                    if (r) {
                      var P = {};
                      P[l] = J, D = r(b, P) === r(b, M);
                    } else
                      D = J === o(b, M);
                    N = N || D;
                  }
                  G = k(b, M), G = s(G) ? G : '', c.push({
                    id: r ? r(b, M) : m ? L[C] : C,
                    label: G,
                    selected: D
                  });
                }
                for (t || (v || null === J ? H[''].unshift({
                    id: '',
                    label: '',
                    selected: !N
                  }) : N || H[''].unshift({
                    id: '?',
                    label: '',
                    selected: !0
                  })), B = 0, u = I.length; u > B; B++) {
                  for (a = I[B], c = H[a], z.length <= B ? (e = {
                      element: y.clone().attr('label', a),
                      label: c.label
                    }, i = [e], z.push(i), f.append(e.element)) : (i = z[B], e = i[0], e.label != a && e.element.attr('label', e.label = a)), E = null, C = 0, A = c.length; A > C; C++)
                    d = c[C], (j = i[C + 1]) ? (E = j.element, j.label !== d.label && E.text(j.label = d.label), j.id !== d.id && E.val(j.id = d.id), E[0].selected !== d.selected && E.prop('selected', j.selected = d.selected)) : ('' === d.id && v ? F = v : (F = w.clone()).val(d.id).attr('selected', d.selected).text(d.label), i.push(j = {
                      element: F,
                      label: d.label,
                      id: d.id,
                      selected: d.selected
                    }), E ? E.after(F) : e.element.append(F), E = F);
                  for (C++; i.length > C;)
                    i.pop().element.remove();
                }
                for (; z.length > B;)
                  z.pop()[0].element.remove();
              }
              var j;
              if (!(j = u.match(e)))
                throw ef('iexp', 'Expected expression in form of \'_select_ (as _label_)? for (_key_,)?_value_ in _collection_\' but got \'{0}\'. Element: {1}', u, T(f));
              var k = d(j[2] || j[1]), l = j[4] || j[6], m = j[5], n = d(j[3] || ''), o = d(j[2] ? j[1] : l), p = d(j[7]), q = j[8], r = q ? d(j[8]) : null, z = [[{
                      element: f,
                      label: ''
                    }]];
              v && (a(v)(b), v.removeClass('ng-scope'), v.remove()), f.empty(), f.on('change', function () {
                b.$apply(function () {
                  var a, d, e, g, i, j, k, n, q, s = p(b) || [], u = {};
                  if (t) {
                    for (e = [], j = 0, n = z.length; n > j; j++)
                      for (a = z[j], i = 1, k = a.length; k > i; i++)
                        if ((g = a[i].element)[0].selected) {
                          if (d = g.val(), m && (u[m] = d), r)
                            for (q = 0; q < s.length && (u[l] = s[q], r(b, u) != d); q++);
                          else
                            u[l] = s[d];
                          e.push(o(b, u));
                        }
                  } else if (d = f.val(), '?' == d)
                    e = c;
                  else if ('' === d)
                    e = null;
                  else if (r) {
                    for (q = 0; q < s.length; q++)
                      if (u[l] = s[q], r(b, u) == d) {
                        e = o(b, u);
                        break;
                      }
                  } else
                    u[l] = s[d], m && (u[m] = d), e = o(b, u);
                  h.$setViewValue(e);
                });
              }), h.$render = i, b.$watch(i);
            }
            if (k[1]) {
              for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = ld(b.createElement('option')), y = ld(b.createElement('optgroup')), z = w.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)
                if ('' === B[A].value) {
                  o = v = B.eq(A);
                  break;
                }
              p.init(q, v, z), t && (q.$isEmpty = function (a) {
                return !a || 0 === a.length;
              }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p);
            }
          }
        };
      }
    ], hf = [
      '$interpolate',
      function (a) {
        var b = {
            addOption: o,
            removeOption: o
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (c, d) {
            if (r(d.value)) {
              var e = a(c.text(), !0);
              e || d.$set('value', c.text());
            }
            return function (a, c, d) {
              var f = '$selectController', g = c.parent(), h = g.data(f) || g.parent().data(f);
              h && h.databound ? c.prop('selected', !1) : h = b, e ? a.$watch(e, function (a, b) {
                d.$set('value', a), a !== b && h.removeOption(b), h.addOption(a);
              }) : h.addOption(d.value), c.on('$destroy', function () {
                h.removeOption(d.value);
              });
            };
          }
        };
      }
    ], jf = q({
      restrict: 'E',
      terminal: !0
    });
  ab(), hb(td), ld(b).ready(function () {
    Z(b, $);
  });
}(window, document), !angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>'), function (a) {
  function b(a, b) {
    return function (c) {
      return i(a.call(this, c), b);
    };
  }
  function c(a, b) {
    return function (c) {
      return this.lang().ordinal(a.call(this, c), b);
    };
  }
  function d() {
  }
  function e(a) {
    u(a), g(this, a);
  }
  function f(a) {
    var b = o(a), c = b.year || 0, d = b.month || 0, e = b.week || 0, f = b.day || 0, g = b.hour || 0, h = b.minute || 0, i = b.second || 0, j = b.millisecond || 0;
    this._input = a, this._milliseconds = +j + 1000 * i + 60000 * h + 3600000 * g, this._days = +f + 7 * e, this._months = +d + 12 * c, this._data = {}, this._bubble();
  }
  function g(a, b) {
    for (var c in b)
      b.hasOwnProperty(c) && (a[c] = b[c]);
    return b.hasOwnProperty('toString') && (a.toString = b.toString), b.hasOwnProperty('valueOf') && (a.valueOf = b.valueOf), a;
  }
  function h(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a);
  }
  function i(a, b) {
    for (var c = a + ''; c.length < b;)
      c = '0' + c;
    return c;
  }
  function j(a, b, c, d) {
    var e, f, g = b._milliseconds, h = b._days, i = b._months;
    g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), i && a.month(a.month() + i * c), g && !d && bb.updateOffset(a), (h || i) && (a.minute(e), a.hour(f));
  }
  function k(a) {
    return '[object Array]' === Object.prototype.toString.call(a);
  }
  function l(a) {
    return '[object Date]' === Object.prototype.toString.call(a) || a instanceof Date;
  }
  function m(a, b, c) {
    var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
    for (d = 0; e > d; d++)
      (c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
    return g + f;
  }
  function n(a) {
    if (a) {
      var b = a.toLowerCase().replace(/(.)s$/, '$1');
      a = Kb[a] || Lb[b] || b;
    }
    return a;
  }
  function o(a) {
    var b, c, d = {};
    for (c in a)
      a.hasOwnProperty(c) && (b = n(c), b && (d[b] = a[c]));
    return d;
  }
  function p(b) {
    var c, d;
    if (0 === b.indexOf('week'))
      c = 7, d = 'day';
    else {
      if (0 !== b.indexOf('month'))
        return;
      c = 12, d = 'month';
    }
    bb[b] = function (e, f) {
      var g, h, i = bb.fn._lang[b], j = [];
      if ('number' == typeof e && (f = e, e = a), h = function (a) {
          var b = bb().utc().set(d, a);
          return i.call(bb.fn._lang, b, e || '');
        }, null != f)
        return h(f);
      for (g = 0; c > g; g++)
        j.push(h(g));
      return j;
    };
  }
  function q(a) {
    var b = +a, c = 0;
    return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c;
  }
  function r(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }
  function s(a) {
    return t(a) ? 366 : 365;
  }
  function t(a) {
    return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400;
  }
  function u(a) {
    var b;
    a._a && -2 === a._pf.overflow && (b = a._a[gb] < 0 || a._a[gb] > 11 ? gb : a._a[hb] < 1 || a._a[hb] > r(a._a[fb], a._a[gb]) ? hb : a._a[ib] < 0 || a._a[ib] > 23 ? ib : a._a[jb] < 0 || a._a[jb] > 59 ? jb : a._a[kb] < 0 || a._a[kb] > 59 ? kb : a._a[lb] < 0 || a._a[lb] > 999 ? lb : -1, a._pf._overflowDayOfYear && (fb > b || b > hb) && (b = hb), a._pf.overflow = b);
  }
  function v(a) {
    a._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1
    };
  }
  function w(a) {
    return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid;
  }
  function x(a) {
    return a ? a.toLowerCase().replace('_', '-') : a;
  }
  function y(a, b) {
    return b.abbr = a, mb[a] || (mb[a] = new d()), mb[a].set(b), mb[a];
  }
  function z(a) {
    delete mb[a];
  }
  function A(a) {
    var b, c, d, e, f = 0, g = function (a) {
        if (!mb[a] && nb)
          try {
            require('./lang/' + a);
          } catch (b) {
          }
        return mb[a];
      };
    if (!a)
      return bb.fn._lang;
    if (!k(a)) {
      if (c = g(a))
        return c;
      a = [a];
    }
    for (; f < a.length;) {
      for (e = x(a[f]).split('-'), b = e.length, d = x(a[f + 1]), d = d ? d.split('-') : null; b > 0;) {
        if (c = g(e.slice(0, b).join('-')))
          return c;
        if (d && d.length >= b && m(e, d, !0) >= b - 1)
          break;
        b--;
      }
      f++;
    }
    return bb.fn._lang;
  }
  function B(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, '') : a.replace(/\\/g, '');
  }
  function C(a) {
    var b, c, d = a.match(rb);
    for (b = 0, c = d.length; c > b; b++)
      d[b] = Pb[d[b]] ? Pb[d[b]] : B(d[b]);
    return function (e) {
      var f = '';
      for (b = 0; c > b; b++)
        f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
      return f;
    };
  }
  function D(a, b) {
    return a.isValid() ? (b = E(b, a.lang()), Mb[b] || (Mb[b] = C(b)), Mb[b](a)) : a.lang().invalidDate();
  }
  function E(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }
    var d = 5;
    for (sb.lastIndex = 0; d >= 0 && sb.test(a);)
      a = a.replace(sb, c), sb.lastIndex = 0, d -= 1;
    return a;
  }
  function F(a, b) {
    var c;
    switch (a) {
    case 'DDDD':
      return vb;
    case 'YYYY':
    case 'GGGG':
    case 'gggg':
      return wb;
    case 'YYYYY':
    case 'GGGGG':
    case 'ggggg':
      return xb;
    case 'S':
    case 'SS':
    case 'SSS':
    case 'DDD':
      return ub;
    case 'MMM':
    case 'MMMM':
    case 'dd':
    case 'ddd':
    case 'dddd':
      return zb;
    case 'a':
    case 'A':
      return A(b._l)._meridiemParse;
    case 'X':
      return Cb;
    case 'Z':
    case 'ZZ':
      return Ab;
    case 'T':
      return Bb;
    case 'SSSS':
      return yb;
    case 'MM':
    case 'DD':
    case 'YY':
    case 'GG':
    case 'gg':
    case 'HH':
    case 'hh':
    case 'mm':
    case 'ss':
    case 'M':
    case 'D':
    case 'd':
    case 'H':
    case 'h':
    case 'm':
    case 's':
    case 'w':
    case 'ww':
    case 'W':
    case 'WW':
    case 'e':
    case 'E':
      return tb;
    default:
      return c = new RegExp(N(M(a.replace('\\', '')), 'i'));
    }
  }
  function G(a) {
    var b = (Ab.exec(a) || [])[0], c = (b + '').match(Hb) || [
        '-',
        0,
        0
      ], d = +(60 * c[1]) + q(c[2]);
    return '+' === c[0] ? -d : d;
  }
  function H(a, b, c) {
    var d, e = c._a;
    switch (a) {
    case 'M':
    case 'MM':
      null != b && (e[gb] = q(b) - 1);
      break;
    case 'MMM':
    case 'MMMM':
      d = A(c._l).monthsParse(b), null != d ? e[gb] = d : c._pf.invalidMonth = b;
      break;
    case 'D':
    case 'DD':
      null != b && (e[hb] = q(b));
      break;
    case 'DDD':
    case 'DDDD':
      null != b && (c._dayOfYear = q(b));
      break;
    case 'YY':
      e[fb] = q(b) + (q(b) > 68 ? 1900 : 2000);
      break;
    case 'YYYY':
    case 'YYYYY':
      e[fb] = q(b);
      break;
    case 'a':
    case 'A':
      c._isPm = A(c._l).isPM(b);
      break;
    case 'H':
    case 'HH':
    case 'h':
    case 'hh':
      e[ib] = q(b);
      break;
    case 'm':
    case 'mm':
      e[jb] = q(b);
      break;
    case 's':
    case 'ss':
      e[kb] = q(b);
      break;
    case 'S':
    case 'SS':
    case 'SSS':
    case 'SSSS':
      e[lb] = q(1000 * ('0.' + b));
      break;
    case 'X':
      c._d = new Date(1000 * parseFloat(b));
      break;
    case 'Z':
    case 'ZZ':
      c._useUTC = !0, c._tzm = G(b);
      break;
    case 'w':
    case 'ww':
    case 'W':
    case 'WW':
    case 'd':
    case 'dd':
    case 'ddd':
    case 'dddd':
    case 'e':
    case 'E':
      a = a.substr(0, 1);
    case 'gg':
    case 'gggg':
    case 'GG':
    case 'GGGG':
    case 'GGGGG':
      a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b);
    }
  }
  function I(a) {
    var b, c, d, e, f, g, h, i, j, k, l = [];
    if (!a._d) {
      for (d = K(a), a._w && null == a._a[hb] && null == a._a[gb] && (f = function (b) {
          return b ? b.length < 3 ? parseInt(b, 10) > 68 ? '19' + b : '20' + b : b : null == a._a[fb] ? bb().weekYear() : a._a[fb];
        }, g = a._w, null != g.GG || null != g.W || null != g.E ? h = X(f(g.GG), g.W || 1, g.E, 4, 1) : (i = A(a._l), j = null != g.d ? T(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = X(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[fb] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[fb] ? d[fb] : a._a[fb], a._dayOfYear > s(e) && (a._pf._overflowDayOfYear = !0), c = S(e, 0, a._dayOfYear), a._a[gb] = c.getUTCMonth(), a._a[hb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b)
        a._a[b] = l[b] = d[b];
      for (; 7 > b; b++)
        a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
      l[ib] += q((a._tzm || 0) / 60), l[jb] += q((a._tzm || 0) % 60), a._d = (a._useUTC ? S : R).apply(null, l);
    }
  }
  function J(a) {
    var b;
    a._d || (b = o(a._i), a._a = [
      b.year,
      b.month,
      b.day,
      b.hour,
      b.minute,
      b.second,
      b.millisecond
    ], I(a));
  }
  function K(a) {
    var b = new Date();
    return a._useUTC ? [
      b.getUTCFullYear(),
      b.getUTCMonth(),
      b.getUTCDate()
    ] : [
      b.getFullYear(),
      b.getMonth(),
      b.getDate()
    ];
  }
  function L(a) {
    a._a = [], a._pf.empty = !0;
    var b, c, d, e, f, g = A(a._l), h = '' + a._i, i = h.length, j = 0;
    for (d = E(a._f, g).match(rb) || [], b = 0; b < d.length; b++)
      e = d[b], c = (F(e, a).exec(h) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), Pb[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), H(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
    a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[ib] < 12 && (a._a[ib] += 12), a._isPm === !1 && 12 === a._a[ib] && (a._a[ib] = 0), I(a), u(a);
  }
  function M(a) {
    return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e;
    });
  }
  function N(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  function O(a) {
    var b, c, d, e, f;
    if (0 === a._f.length)
      return a._pf.invalidFormat = !0, a._d = new Date(0 / 0), void 0;
    for (e = 0; e < a._f.length; e++)
      f = 0, b = g({}, a), v(b), b._f = a._f[e], L(b), w(b) && (f += b._pf.charsLeftOver, f += 10 * b._pf.unusedTokens.length, b._pf.score = f, (null == d || d > f) && (d = f, c = b));
    g(a, c || b);
  }
  function P(a) {
    var b, c = a._i, d = Db.exec(c);
    if (d) {
      for (a._pf.iso = !0, b = 4; b > 0; b--)
        if (d[b]) {
          a._f = Fb[b - 1] + (d[6] || ' ');
          break;
        }
      for (b = 0; 4 > b; b++)
        if (Gb[b][1].exec(c)) {
          a._f += Gb[b][0];
          break;
        }
      Ab.exec(c) && (a._f += 'Z'), L(a);
    } else
      a._d = new Date(c);
  }
  function Q(b) {
    var c = b._i, d = ob.exec(c);
    c === a ? b._d = new Date() : d ? b._d = new Date(+d[1]) : 'string' == typeof c ? P(b) : k(c) ? (b._a = c.slice(0), I(b)) : l(c) ? b._d = new Date(+c) : 'object' == typeof c ? J(b) : b._d = new Date(c);
  }
  function R(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);
    return 1970 > a && h.setFullYear(a), h;
  }
  function S(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return 1970 > a && b.setUTCFullYear(a), b;
  }
  function T(a, b) {
    if ('string' == typeof a)
      if (isNaN(a)) {
        if (a = b.weekdaysParse(a), 'number' != typeof a)
          return null;
      } else
        a = parseInt(a, 10);
    return a;
  }
  function U(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }
  function V(a, b, c) {
    var d = eb(Math.abs(a) / 1000), e = eb(d / 60), f = eb(e / 60), g = eb(f / 24), h = eb(g / 365), i = 45 > d && [
        's',
        d
      ] || 1 === e && ['m'] || 45 > e && [
        'mm',
        e
      ] || 1 === f && ['h'] || 22 > f && [
        'hh',
        f
      ] || 1 === g && ['d'] || 25 >= g && [
        'dd',
        g
      ] || 45 >= g && ['M'] || 345 > g && [
        'MM',
        eb(g / 30)
      ] || 1 === h && ['y'] || [
        'yy',
        h
      ];
    return i[2] = b, i[3] = a > 0, i[4] = c, U.apply({}, i);
  }
  function W(a, b, c) {
    var d, e = c - b, f = c - a.day();
    return f > e && (f -= 7), e - 7 > f && (f += 7), d = bb(a).add('d', f), {
      week: Math.ceil(d.dayOfYear() / 7),
      year: d.year()
    };
  }
  function X(a, b, c, d, e) {
    var f, g, h = new Date(Date.UTC(a, 0)).getUTCDay();
    return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
      year: g > 0 ? a : a - 1,
      dayOfYear: g > 0 ? g : s(a - 1) + g
    };
  }
  function Y(a) {
    var b = a._i, c = a._f;
    return 'undefined' == typeof a._pf && v(a), null === b ? bb.invalid({ nullInput: !0 }) : ('string' == typeof b && (a._i = b = A().preparse(b)), bb.isMoment(b) ? (a = g({}, b), a._d = new Date(+b._d)) : c ? k(c) ? O(a) : L(a) : Q(a), new e(a));
  }
  function Z(a, b) {
    bb.fn[a] = bb.fn[a + 's'] = function (a) {
      var c = this._isUTC ? 'UTC' : '';
      return null != a ? (this._d['set' + c + b](a), bb.updateOffset(this), this) : this._d['get' + c + b]();
    };
  }
  function $(a) {
    bb.duration.fn[a] = function () {
      return this._data[a];
    };
  }
  function _(a, b) {
    bb.duration.fn['as' + a] = function () {
      return +this / b;
    };
  }
  function ab(a) {
    var b = !1, c = bb;
    'undefined' == typeof ender && (this.moment = a ? function () {
      return !b && console && console.warn && (b = !0, console.warn('Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.')), c.apply(null, arguments);
    } : bb);
  }
  for (var bb, cb, db = '2.4.0', eb = Math.round, fb = 0, gb = 1, hb = 2, ib = 3, jb = 4, kb = 5, lb = 6, mb = {}, nb = 'undefined' != typeof module && module.exports, ob = /^\/?Date\((\-?\d+)/i, pb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, qb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, rb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, sb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, tb = /\d\d?/, ub = /\d{1,3}/, vb = /\d{3}/, wb = /\d{1,4}/, xb = /[+\-]?\d{1,6}/, yb = /\d+/, zb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ab = /Z|[\+\-]\d\d:?\d\d/i, Bb = /T/i, Cb = /[\+\-]?\d+(\.\d{1,3})?/, Db = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/, Eb = 'YYYY-MM-DDTHH:mm:ssZ', Fb = [
        'YYYY-MM-DD',
        'GGGG-[W]WW',
        'GGGG-[W]WW-E',
        'YYYY-DDD'
      ], Gb = [
        [
          'HH:mm:ss.SSSS',
          /(T| )\d\d:\d\d:\d\d\.\d{1,3}/
        ],
        [
          'HH:mm:ss',
          /(T| )\d\d:\d\d:\d\d/
        ],
        [
          'HH:mm',
          /(T| )\d\d:\d\d/
        ],
        [
          'HH',
          /(T| )\d\d/
        ]
      ], Hb = /([\+\-]|\d\d)/gi, Ib = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'), Jb = {
        Milliseconds: 1,
        Seconds: 1000,
        Minutes: 60000,
        Hours: 3600000,
        Days: 86400000,
        Months: 2592000000,
        Years: 31536000000
      }, Kb = {
        ms: 'millisecond',
        s: 'second',
        m: 'minute',
        h: 'hour',
        d: 'day',
        D: 'date',
        w: 'week',
        W: 'isoWeek',
        M: 'month',
        y: 'year',
        DDD: 'dayOfYear',
        e: 'weekday',
        E: 'isoWeekday',
        gg: 'weekYear',
        GG: 'isoWeekYear'
      }, Lb = {
        dayofyear: 'dayOfYear',
        isoweekday: 'isoWeekday',
        isoweek: 'isoWeek',
        weekyear: 'weekYear',
        isoweekyear: 'isoWeekYear'
      }, Mb = {}, Nb = 'DDD w W M D d'.split(' '), Ob = 'M D H h m s w W'.split(' '), Pb = {
        M: function () {
          return this.month() + 1;
        },
        MMM: function (a) {
          return this.lang().monthsShort(this, a);
        },
        MMMM: function (a) {
          return this.lang().months(this, a);
        },
        D: function () {
          return this.date();
        },
        DDD: function () {
          return this.dayOfYear();
        },
        d: function () {
          return this.day();
        },
        dd: function (a) {
          return this.lang().weekdaysMin(this, a);
        },
        ddd: function (a) {
          return this.lang().weekdaysShort(this, a);
        },
        dddd: function (a) {
          return this.lang().weekdays(this, a);
        },
        w: function () {
          return this.week();
        },
        W: function () {
          return this.isoWeek();
        },
        YY: function () {
          return i(this.year() % 100, 2);
        },
        YYYY: function () {
          return i(this.year(), 4);
        },
        YYYYY: function () {
          return i(this.year(), 5);
        },
        gg: function () {
          return i(this.weekYear() % 100, 2);
        },
        gggg: function () {
          return this.weekYear();
        },
        ggggg: function () {
          return i(this.weekYear(), 5);
        },
        GG: function () {
          return i(this.isoWeekYear() % 100, 2);
        },
        GGGG: function () {
          return this.isoWeekYear();
        },
        GGGGG: function () {
          return i(this.isoWeekYear(), 5);
        },
        e: function () {
          return this.weekday();
        },
        E: function () {
          return this.isoWeekday();
        },
        a: function () {
          return this.lang().meridiem(this.hours(), this.minutes(), !0);
        },
        A: function () {
          return this.lang().meridiem(this.hours(), this.minutes(), !1);
        },
        H: function () {
          return this.hours();
        },
        h: function () {
          return this.hours() % 12 || 12;
        },
        m: function () {
          return this.minutes();
        },
        s: function () {
          return this.seconds();
        },
        S: function () {
          return q(this.milliseconds() / 100);
        },
        SS: function () {
          return i(q(this.milliseconds() / 10), 2);
        },
        SSS: function () {
          return i(this.milliseconds(), 3);
        },
        SSSS: function () {
          return i(this.milliseconds(), 3);
        },
        Z: function () {
          var a = -this.zone(), b = '+';
          return 0 > a && (a = -a, b = '-'), b + i(q(a / 60), 2) + ':' + i(q(a) % 60, 2);
        },
        ZZ: function () {
          var a = -this.zone(), b = '+';
          return 0 > a && (a = -a, b = '-'), b + i(q(10 * a / 6), 4);
        },
        z: function () {
          return this.zoneAbbr();
        },
        zz: function () {
          return this.zoneName();
        },
        X: function () {
          return this.unix();
        }
      }, Qb = [
        'months',
        'monthsShort',
        'weekdays',
        'weekdaysShort',
        'weekdaysMin'
      ]; Nb.length;)
    cb = Nb.pop(), Pb[cb + 'o'] = c(Pb[cb], cb);
  for (; Ob.length;)
    cb = Ob.pop(), Pb[cb + cb] = b(Pb[cb], 2);
  for (Pb.DDDD = b(Pb.DDD, 3), g(d.prototype, {
      set: function (a) {
        var b, c;
        for (c in a)
          b = a[c], 'function' == typeof b ? this[c] = b : this['_' + c] = b;
      },
      _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      months: function (a) {
        return this._months[a.month()];
      },
      _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      monthsShort: function (a) {
        return this._monthsShort[a.month()];
      },
      monthsParse: function (a) {
        var b, c, d;
        for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
          if (this._monthsParse[b] || (c = bb.utc([
              2000,
              b
            ]), d = '^' + this.months(c, '') + '|^' + this.monthsShort(c, ''), this._monthsParse[b] = new RegExp(d.replace('.', ''), 'i')), this._monthsParse[b].test(a))
            return b;
      },
      _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdays: function (a) {
        return this._weekdays[a.day()];
      },
      _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysShort: function (a) {
        return this._weekdaysShort[a.day()];
      },
      _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      weekdaysMin: function (a) {
        return this._weekdaysMin[a.day()];
      },
      weekdaysParse: function (a) {
        var b, c, d;
        for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
          if (this._weekdaysParse[b] || (c = bb([
              2000,
              1
            ]).day(b), d = '^' + this.weekdays(c, '') + '|^' + this.weekdaysShort(c, '') + '|^' + this.weekdaysMin(c, ''), this._weekdaysParse[b] = new RegExp(d.replace('.', ''), 'i')), this._weekdaysParse[b].test(a))
            return b;
      },
      _longDateFormat: {
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D YYYY',
        LLL: 'MMMM D YYYY LT',
        LLLL: 'dddd, MMMM D YYYY LT'
      },
      longDateFormat: function (a) {
        var b = this._longDateFormat[a];
        return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
          return a.slice(1);
        }), this._longDateFormat[a] = b), b;
      },
      isPM: function (a) {
        return 'p' === (a + '').toLowerCase().charAt(0);
      },
      _meridiemParse: /[ap]\.?m?\.?/i,
      meridiem: function (a, b, c) {
        return a > 11 ? c ? 'pm' : 'PM' : c ? 'am' : 'AM';
      },
      _calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      },
      calendar: function (a, b) {
        var c = this._calendar[a];
        return 'function' == typeof c ? c.apply(b) : c;
      },
      _relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      relativeTime: function (a, b, c, d) {
        var e = this._relativeTime[c];
        return 'function' == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a);
      },
      pastFuture: function (a, b) {
        var c = this._relativeTime[a > 0 ? 'future' : 'past'];
        return 'function' == typeof c ? c(b) : c.replace(/%s/i, b);
      },
      ordinal: function (a) {
        return this._ordinal.replace('%d', a);
      },
      _ordinal: '%d',
      preparse: function (a) {
        return a;
      },
      postformat: function (a) {
        return a;
      },
      week: function (a) {
        return W(a, this._week.dow, this._week.doy).week;
      },
      _week: {
        dow: 0,
        doy: 6
      },
      _invalidDate: 'Invalid date',
      invalidDate: function () {
        return this._invalidDate;
      }
    }), bb = function (b, c, d, e) {
      return 'boolean' == typeof d && (e = d, d = a), Y({
        _i: b,
        _f: c,
        _l: d,
        _strict: e,
        _isUTC: !1
      });
    }, bb.utc = function (b, c, d, e) {
      var f;
      return 'boolean' == typeof d && (e = d, d = a), f = Y({
        _useUTC: !0,
        _isUTC: !0,
        _l: d,
        _i: b,
        _f: c,
        _strict: e
      }).utc();
    }, bb.unix = function (a) {
      return bb(1000 * a);
    }, bb.duration = function (a, b) {
      var c, d, e, g = bb.isDuration(a), h = 'number' == typeof a, i = g ? a._input : h ? {} : a, j = null;
      return h ? b ? i[b] = a : i.milliseconds = a : (j = pb.exec(a)) ? (c = '-' === j[1] ? -1 : 1, i = {
        y: 0,
        d: q(j[hb]) * c,
        h: q(j[ib]) * c,
        m: q(j[jb]) * c,
        s: q(j[kb]) * c,
        ms: q(j[lb]) * c
      }) : (j = qb.exec(a)) && (c = '-' === j[1] ? -1 : 1, e = function (a) {
        var b = a && parseFloat(a.replace(',', '.'));
        return (isNaN(b) ? 0 : b) * c;
      }, i = {
        y: e(j[2]),
        M: e(j[3]),
        d: e(j[4]),
        h: e(j[5]),
        m: e(j[6]),
        s: e(j[7]),
        w: e(j[8])
      }), d = new f(i), g && a.hasOwnProperty('_lang') && (d._lang = a._lang), d;
    }, bb.version = db, bb.defaultFormat = Eb, bb.updateOffset = function () {
    }, bb.lang = function (a, b) {
      var c;
      return a ? (b ? y(x(a), b) : null === b ? (z(a), a = 'en') : mb[a] || A(a), c = bb.duration.fn._lang = bb.fn._lang = A(a), c._abbr) : bb.fn._lang._abbr;
    }, bb.langData = function (a) {
      return a && a._lang && a._lang._abbr && (a = a._lang._abbr), A(a);
    }, bb.isMoment = function (a) {
      return a instanceof e;
    }, bb.isDuration = function (a) {
      return a instanceof f;
    }, cb = Qb.length - 1; cb >= 0; --cb)
    p(Qb[cb]);
  for (bb.normalizeUnits = function (a) {
      return n(a);
    }, bb.invalid = function (a) {
      var b = bb.utc(0 / 0);
      return null != a ? g(b._pf, a) : b._pf.userInvalidated = !0, b;
    }, bb.parseZone = function (a) {
      return bb(a).parseZone();
    }, g(bb.fn = e.prototype, {
      clone: function () {
        return bb(this);
      },
      valueOf: function () {
        return +this._d + 60000 * (this._offset || 0);
      },
      unix: function () {
        return Math.floor(+this / 1000);
      },
      toString: function () {
        return this.clone().lang('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      },
      toDate: function () {
        return this._offset ? new Date(+this) : this._d;
      },
      toISOString: function () {
        return D(bb(this).utc(), 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      },
      toArray: function () {
        var a = this;
        return [
          a.year(),
          a.month(),
          a.date(),
          a.hours(),
          a.minutes(),
          a.seconds(),
          a.milliseconds()
        ];
      },
      isValid: function () {
        return w(this);
      },
      isDSTShifted: function () {
        return this._a ? this.isValid() && m(this._a, (this._isUTC ? bb.utc(this._a) : bb(this._a)).toArray()) > 0 : !1;
      },
      parsingFlags: function () {
        return g({}, this._pf);
      },
      invalidAt: function () {
        return this._pf.overflow;
      },
      utc: function () {
        return this.zone(0);
      },
      local: function () {
        return this.zone(0), this._isUTC = !1, this;
      },
      format: function (a) {
        var b = D(this, a || bb.defaultFormat);
        return this.lang().postformat(b);
      },
      add: function (a, b) {
        var c;
        return c = 'string' == typeof a ? bb.duration(+b, a) : bb.duration(a, b), j(this, c, 1), this;
      },
      subtract: function (a, b) {
        var c;
        return c = 'string' == typeof a ? bb.duration(+b, a) : bb.duration(a, b), j(this, c, -1), this;
      },
      diff: function (a, b, c) {
        var d, e, f = this._isUTC ? bb(a).zone(this._offset || 0) : bb(a).local(), g = 60000 * (this.zone() - f.zone());
        return b = n(b), 'year' === b || 'month' === b ? (d = 43200000 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - bb(this).startOf('month') - (f - bb(f).startOf('month'))) / d, e -= 60000 * (this.zone() - bb(this).startOf('month').zone() - (f.zone() - bb(f).startOf('month').zone())) / d, 'year' === b && (e /= 12)) : (d = this - f, e = 'second' === b ? d / 1000 : 'minute' === b ? d / 60000 : 'hour' === b ? d / 3600000 : 'day' === b ? (d - g) / 86400000 : 'week' === b ? (d - g) / 604800000 : d), c ? e : h(e);
      },
      from: function (a, b) {
        return bb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b);
      },
      fromNow: function (a) {
        return this.from(bb(), a);
      },
      calendar: function () {
        var a = this.diff(bb().zone(this.zone()).startOf('day'), 'days', !0), b = -6 > a ? 'sameElse' : -1 > a ? 'lastWeek' : 0 > a ? 'lastDay' : 1 > a ? 'sameDay' : 2 > a ? 'nextDay' : 7 > a ? 'nextWeek' : 'sameElse';
        return this.format(this.lang().calendar(b, this));
      },
      isLeapYear: function () {
        return t(this.year());
      },
      isDST: function () {
        return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone();
      },
      day: function (a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = T(a, this.lang()), this.add({ d: a - b })) : b;
      },
      month: function (a) {
        var b, c = this._isUTC ? 'UTC' : '';
        return null != a ? 'string' == typeof a && (a = this.lang().monthsParse(a), 'number' != typeof a) ? this : (b = this.date(), this.date(1), this._d['set' + c + 'Month'](a), this.date(Math.min(b, this.daysInMonth())), bb.updateOffset(this), this) : this._d['get' + c + 'Month']();
      },
      startOf: function (a) {
        switch (a = n(a)) {
        case 'year':
          this.month(0);
        case 'month':
          this.date(1);
        case 'week':
        case 'isoWeek':
        case 'day':
          this.hours(0);
        case 'hour':
          this.minutes(0);
        case 'minute':
          this.seconds(0);
        case 'second':
          this.milliseconds(0);
        }
        return 'week' === a ? this.weekday(0) : 'isoWeek' === a && this.isoWeekday(1), this;
      },
      endOf: function (a) {
        return a = n(a), this.startOf(a).add('isoWeek' === a ? 'week' : a, 1).subtract('ms', 1);
      },
      isAfter: function (a, b) {
        return b = 'undefined' != typeof b ? b : 'millisecond', +this.clone().startOf(b) > +bb(a).startOf(b);
      },
      isBefore: function (a, b) {
        return b = 'undefined' != typeof b ? b : 'millisecond', +this.clone().startOf(b) < +bb(a).startOf(b);
      },
      isSame: function (a, b) {
        return b = 'undefined' != typeof b ? b : 'millisecond', +this.clone().startOf(b) === +bb(a).startOf(b);
      },
      min: function (a) {
        return a = bb.apply(null, arguments), this > a ? this : a;
      },
      max: function (a) {
        return a = bb.apply(null, arguments), a > this ? this : a;
      },
      zone: function (a) {
        var b = this._offset || 0;
        return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ('string' == typeof a && (a = G(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && j(this, bb.duration(b - a, 'm'), 1, !0), this);
      },
      zoneAbbr: function () {
        return this._isUTC ? 'UTC' : '';
      },
      zoneName: function () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
      },
      parseZone: function () {
        return 'string' == typeof this._i && this.zone(this._i), this;
      },
      hasAlignedHourOffset: function (a) {
        return a = a ? bb(a).zone() : 0, 0 === (this.zone() - a) % 60;
      },
      daysInMonth: function () {
        return r(this.year(), this.month());
      },
      dayOfYear: function (a) {
        var b = eb((bb(this).startOf('day') - bb(this).startOf('year')) / 86400000) + 1;
        return null == a ? b : this.add('d', a - b);
      },
      weekYear: function (a) {
        var b = W(this, this.lang()._week.dow, this.lang()._week.doy).year;
        return null == a ? b : this.add('y', a - b);
      },
      isoWeekYear: function (a) {
        var b = W(this, 1, 4).year;
        return null == a ? b : this.add('y', a - b);
      },
      week: function (a) {
        var b = this.lang().week(this);
        return null == a ? b : this.add('d', 7 * (a - b));
      },
      isoWeek: function (a) {
        var b = W(this, 1, 4).week;
        return null == a ? b : this.add('d', 7 * (a - b));
      },
      weekday: function (a) {
        var b = (this.day() + 7 - this.lang()._week.dow) % 7;
        return null == a ? b : this.add('d', a - b);
      },
      isoWeekday: function (a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      },
      get: function (a) {
        return a = n(a), this[a]();
      },
      set: function (a, b) {
        return a = n(a), 'function' == typeof this[a] && this[a](b), this;
      },
      lang: function (b) {
        return b === a ? this._lang : (this._lang = A(b), this);
      }
    }), cb = 0; cb < Ib.length; cb++)
    Z(Ib[cb].toLowerCase().replace(/s$/, ''), Ib[cb]);
  Z('year', 'FullYear'), bb.fn.days = bb.fn.day, bb.fn.months = bb.fn.month, bb.fn.weeks = bb.fn.week, bb.fn.isoWeeks = bb.fn.isoWeek, bb.fn.toJSON = bb.fn.toISOString, g(bb.duration.fn = f.prototype, {
    _bubble: function () {
      var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, i = this._data;
      i.milliseconds = e % 1000, a = h(e / 1000), i.seconds = a % 60, b = h(a / 60), i.minutes = b % 60, c = h(b / 60), i.hours = c % 24, f += h(c / 24), i.days = f % 30, g += h(f / 30), i.months = g % 12, d = h(g / 12), i.years = d;
    },
    weeks: function () {
      return h(this.days() / 7);
    },
    valueOf: function () {
      return this._milliseconds + 86400000 * this._days + 2592000000 * (this._months % 12) + 31536000000 * q(this._months / 12);
    },
    humanize: function (a) {
      var b = +this, c = V(b, !a, this.lang());
      return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c);
    },
    add: function (a, b) {
      var c = bb.duration(a, b);
      return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this;
    },
    subtract: function (a, b) {
      var c = bb.duration(a, b);
      return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this;
    },
    get: function (a) {
      return a = n(a), this[a.toLowerCase() + 's']();
    },
    as: function (a) {
      return a = n(a), this['as' + a.charAt(0).toUpperCase() + a.slice(1) + 's']();
    },
    lang: bb.fn.lang,
    toIsoString: function () {
      var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1000);
      return this.asSeconds() ? (this.asSeconds() < 0 ? '-' : '') + 'P' + (a ? a + 'Y' : '') + (b ? b + 'M' : '') + (c ? c + 'D' : '') + (d || e || f ? 'T' : '') + (d ? d + 'H' : '') + (e ? e + 'M' : '') + (f ? f + 'S' : '') : 'P0D';
    }
  });
  for (cb in Jb)
    Jb.hasOwnProperty(cb) && (_(cb, Jb[cb]), $(cb.toLowerCase()));
  _('Weeks', 604800000), bb.duration.fn.asMonths = function () {
    return (+this - 31536000000 * this.years()) / 2592000000 + 12 * this.years();
  }, bb.lang('en', {
    ordinal: function (a) {
      var b = a % 10, c = 1 === q(a % 100 / 10) ? 'th' : 1 === b ? 'st' : 2 === b ? 'nd' : 3 === b ? 'rd' : 'th';
      return a + c;
    }
  }), nb ? (module.exports = bb, ab(!0)) : 'function' == typeof define && define.amd ? define('moment', function (b, c, d) {
    return d.config().noGlobal !== !0 && ab(d.config().noGlobal === a), bb;
  }) : ab();
}.call(this), angular.module('angularMoment', []).constant('amTimeAgoConfig', { withoutSuffix: !1 }).directive('amTimeAgo', [
  '$window',
  'amTimeAgoConfig',
  function (a, b) {
    'use strict';
    return function (c, d, e) {
      function f() {
        k && (a.clearTimeout(k), k = null);
      }
      function g(c) {
        d.text(c.fromNow(b.withoutSuffix));
        var e = a.moment().diff(c, 'minute'), f = 3600;
        1 > e ? f = 1 : 60 > e ? f = 30 : 180 > e && (f = 300), k = a.setTimeout(function () {
          g(c);
        }, 1000 * f);
      }
      function h() {
        f(), g(a.moment(i, j));
      }
      var i, j, k = null;
      c.$watch(e.amTimeAgo, function (a) {
        return 'undefined' == typeof a || null === a || '' === a ? (f(), i && (d.text(''), i = null), void 0) : (angular.isNumber(a) && (a = new Date(a)), i = a, h(), void 0);
      }), e.$observe('amFormat', function (a) {
        j = a, i && h();
      }), c.$on('$destroy', function () {
        f();
      });
    };
  }
]).filter('amCalendar', [
  '$window',
  function (a) {
    'use strict';
    return function (b) {
      return 'undefined' == typeof b || null === b ? '' : (!isNaN(parseFloat(b)) && isFinite(b) && (b = new Date(parseInt(b, 10))), a.moment(b).calendar());
    };
  }
]).filter('amDateFormat', [
  '$window',
  function (a) {
    'use strict';
    return function (b, c) {
      return 'undefined' == typeof b || null === b ? '' : (!isNaN(parseFloat(b)) && isFinite(b) && (b = new Date(parseInt(b, 10))), a.moment(b).format(c));
    };
  }
]).filter('amDurationFormat', [
  '$window',
  function (a) {
    'use strict';
    return function (b, c, d) {
      return 'undefined' == typeof b || null === b ? '' : a.moment.duration(b, c).humanize(d);
    };
  }
]);