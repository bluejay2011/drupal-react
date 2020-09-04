webpackHotUpdate("main",{

/***/ "./js/src/components/DrupalProjectStats.jsx":
/*!**************************************************!*\
  !*** ./js/src/components/DrupalProjectStats.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var DrupalProjectStats = function DrupalProjectStats(_ref) {
  var projectName = _ref.projectName;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(projectName),
      _useState2 = _slicedToArray(_useState, 2),
      project = _useState2[0],
      setProject = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      usage = _useState4[0],
      setUsage = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setUsage(false);
    var data = fetch("https://www.drupal.org/api-d7/node.json?field_project_machine_name=".concat(project)).then(function (response) {
      return response.json();
    }).then(function (result) {
      if (result.list[0].project_usage) {
        setUsage(result.list[0].project_usage);
      }
    })["catch"](function (error) {
      return console.log("error", error);
    });
  }, [project]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Choose a project:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setProject('drupal');
    }
  }, "Drupal core"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setProject('marquee');
    }
  }, "Marquee")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project--name"
  }, "Usage stats for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, project), " by version (test message):", usage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, Object.keys(usage).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatsItem, {
      count: usage[key],
      version: key,
      key: key
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "fetching data ...")));
}; // Provide type checking for props. Think of this as documentation for what
// props a component accepts.
// https://reactjs.org/docs/typechecking-with-proptypes.html


__signature__(DrupalProjectStats, "useState{[project, setProject](projectName)}\nuseState{[usage, setUsage](null)}\nuseEffect{}");

DrupalProjectStats.propTypes = {
  projectName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.required
}; // Set a default value for any required props.

DrupalProjectStats.defaultProps = {
  projectName: 'drupal'
};
/**
 * Another component: this one displays usage statistics for a specific version
 * of Drupal. It's not exported, so it can only be used in this file's scope.
 * Breaking things up like this can help make your code easier to maintain.
 */

var StatsItem = function StatsItem(_ref2) {
  var count = _ref2.count,
      version = _ref2.version;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, version), ": ", count);
};

StatsItem.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  version: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
var _default = DrupalProjectStats;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DrupalProjectStats, "DrupalProjectStats", "C:\\xampp74\\htdocs\\drupal\\themes\\custom\\react_example_theme\\js\\src\\components\\DrupalProjectStats.jsx");
  reactHotLoader.register(StatsItem, "StatsItem", "C:\\xampp74\\htdocs\\drupal\\themes\\custom\\react_example_theme\\js\\src\\components\\DrupalProjectStats.jsx");
  reactHotLoader.register(_default, "default", "C:\\xampp74\\htdocs\\drupal\\themes\\custom\\react_example_theme\\js\\src\\components\\DrupalProjectStats.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.0fdbcf7b692729105427.hot-update.js.map