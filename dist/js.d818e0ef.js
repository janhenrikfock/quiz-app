// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.getAll = getAll;

function get(selector) {
  return document.querySelector(selector);
}

function getAll(selector) {
  return document.querySelectorAll(selector);
}
},{}],"src/js/createCards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCard = initCard;
exports.createQuestionCard = createQuestionCard;

var _util = require("./util");

var cardArray = [{
  question: 'Dies ist unsere Frage Nummer 1',
  answer: 'Dies ist unsere schlaue Antwort'
}, {
  question: 'Dies ist unsere Frage Nummer 2',
  answer: 'Dies ist unsere schlaue Antwort'
}, {
  question: 'Dies ist unsere Frage Nummer 3',
  answer: 'Dies ist unsere schlaue Antwort'
}];

function initCard() {
  cardArray.forEach(createQuestionCard);
}

function createQuestionCard() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$question = _ref.question,
      question = _ref$question === void 0 ? 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' : _ref$question,
      _ref$answer = _ref.answer,
      answer = _ref$answer === void 0 ? 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' : _ref$answer;

  var newCard = document.createElement('section');
  var target = (0, _util.get)('.page-home');
  newCard.className = 'quizcard';
  target.appendChild(newCard);
  newCard.innerHTML = "<h2 class=\"quizcard__headline serif\">Question</h2>\n<button class=\"quizcard__bookmark\">\n  <img src=\"/images/bookmark.png\" alt=\"\" />\n</button>\n<p class=\"quizcard__para quizcard__paragraph--question\">\n".concat(question, "\n</p>\n<button class=\"quizcard__button\" onclick=\"\">Show Answer</button>\n<p class=\"quizcard__para quizcard__paragraph--answer\">\n").concat(answer, "\n</p>\n<ul class=\"quizcard__answerlist\">\n  <li class=\"quizcard__answerlist__answer\">A</li>\n  <li class=\"quizcard__answerlist__answer\">B</li>\n  <li class=\"quizcard__answerlist__answer\">C</li>\n  <li class=\"quizcard__answerlist__answer\">D</li>\n</ul>");
}
},{"./util":"src/js/util.js"}],"src/js/bookmark.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeBookmark = initializeBookmark;

var _util = require("./util");

function initializeBookmark() {
  var cardList = (0, _util.getAll)('.quizcard');
  cardList.forEach(bookmarkQuestion);

  function bookmarkQuestion(quizCard) {
    var bookmarkButton = quizCard.querySelector('.quizcard__bookmark');
    bookmarkButton.addEventListener('click', function () {
      bookmarkButton.classList.toggle('active');
    });
  }
}
},{"./util":"src/js/util.js"}],"src/js/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeNavigation = initializeNavigation;

var _util = require("./util");

function initializeNavigation() {
  var buttonHome = (0, _util.get)('.link-home');
  var buttonBookmark = (0, _util.get)('.link-bookmark');
  var buttonCreate = (0, _util.get)('.link-create');
  var buttonProfile = (0, _util.get)('.link-profile');
  var pageHome = (0, _util.get)('.page-home');
  var pageBookmark = (0, _util.get)('.page-bookmarks');
  var pageCreate = (0, _util.get)('.page-create');
  var pageProfile = (0, _util.get)('.page-profile');
  buttonHome.addEventListener('click', function () {
    nav(pageHome);
  });
  buttonBookmark.addEventListener('click', function () {
    nav(pageBookmark);
  });
  buttonCreate.addEventListener('click', function () {
    nav(pageCreate);
  });
  buttonProfile.addEventListener('click', function () {
    nav(pageProfile);
  });

  function nav(newPage) {
    pageHome.classList.add('d-none');
    pageBookmark.classList.add('d-none');
    pageCreate.classList.add('d-none');
    pageProfile.classList.add('d-none');
    newPage.classList.remove('d-none');
  }
}
},{"./util":"src/js/util.js"}],"src/js/showanswer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeShowanswer = initializeShowanswer;

var _util = require("./util");

function initializeShowanswer() {
  var cardList = (0, _util.getAll)('.quizcard');
  cardList.forEach(showHideAnswerLogic);

  function showHideAnswerLogic(quizCard) {
    var buttonAnswer = quizCard.querySelector('.quizcard__button');
    var paraAnswer = quizCard.querySelector('.quizcard__paragraph--answer');
    buttonAnswer.addEventListener('click', function () {
      paraAnswer.classList.toggle('d-none');
    });
  }
}
},{"./util":"src/js/util.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _createCards = require("./createCards");

var _bookmark = require("./bookmark");

var _navigation = require("./navigation");

var _showanswer = require("./showanswer");

console.log('its me: index.js');
(0, _createCards.initCard)();
(0, _bookmark.initializeBookmark)();
(0, _navigation.initializeNavigation)();
(0, _showanswer.initializeShowanswer)();
},{"./createCards":"src/js/createCards.js","./bookmark":"src/js/bookmark.js","./navigation":"src/js/navigation.js","./showanswer":"src/js/showanswer.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62132" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map