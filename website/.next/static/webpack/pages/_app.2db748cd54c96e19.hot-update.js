"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/utils/Navbar.tsx":
/*!*****************************************!*\
  !*** ./src/components/utils/Navbar.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _ButtonLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLink */ \"./src/components/utils/ButtonLink.tsx\");\n/* harmony import */ var _NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextLink */ \"./src/components/utils/NextLink.tsx\");\n// combines Chakra Link and Next Link into a single component\n\n\n\n\n// this allows styling links with Chakra while also using the Next router\nfunction Navbar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n        backgroundColor: \"ditto.lightBlue\",\n        p: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/test\",\n                    variant: \"blue\",\n                    children: \"Test Navigation\"\n                }, void 0, false, {\n                    fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/components/utils/Navbar.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/components/utils/Navbar.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NextLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/random-route\",\n                    color: \"ditto.blue\",\n                    children: \"Test 404 Page\"\n                }, void 0, false, {\n                    fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/components/utils/Navbar.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/components/utils/Navbar.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/components/utils/Navbar.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91dGlscy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLDZEQUE2RDtBQUU3RDtBQUErQztBQUNUO0FBQ0o7QUFFbEMseUVBQXlFO0FBQzFELFNBQVNJLE1BQU0sR0FBRztJQUMvQixxQkFDRSw4REFBQ0gsb0RBQU07UUFBQ0ksZUFBZSxFQUFDLGlCQUFpQjtRQUFDQyxDQUFDLEVBQUUsQ0FBQzs7MEJBQzFDLDhEQUFDTixpREFBRzswQkFDRiw0RUFBQ0UsbURBQVU7b0JBQUNLLElBQUksRUFBQyxPQUFPO29CQUFDQyxPQUFPLEVBQUMsTUFBTTs4QkFBQyxpQkFFeEM7Ozs7O3dCQUFhOzs7OztvQkFDVDswQkFDTiw4REFBQ1IsaURBQUc7MEJBQ0YsNEVBQUNHLGlEQUFRO29CQUFDSSxJQUFJLEVBQUMsZUFBZTtvQkFBQ0UsS0FBSyxFQUFDLFlBQVk7OEJBQUMsZUFFbEQ7Ozs7O3dCQUFXOzs7OztvQkFDUDs7Ozs7O1lBQ0MsQ0FDWDtBQUNKLENBQUM7QUFmdUJMLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvTmF2YmFyLnRzeD9iOTkyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBjb21iaW5lcyBDaGFrcmEgTGluayBhbmQgTmV4dCBMaW5rIGludG8gYSBzaW5nbGUgY29tcG9uZW50XG5cbmltcG9ydCB7IEJveCwgSFN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gXCIuL0J1dHRvbkxpbmtcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwiLi9OZXh0TGlua1wiO1xuXG4vLyB0aGlzIGFsbG93cyBzdHlsaW5nIGxpbmtzIHdpdGggQ2hha3JhIHdoaWxlIGFsc28gdXNpbmcgdGhlIE5leHQgcm91dGVyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPEhTdGFjayBiYWNrZ3JvdW5kQ29sb3I9XCJkaXR0by5saWdodEJsdWVcIiBwPXs0fT5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8QnV0dG9uTGluayBocmVmPVwiL3Rlc3RcIiB2YXJpYW50PVwiYmx1ZVwiPlxuICAgICAgICAgICAgVGVzdCBOYXZpZ2F0aW9uXG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9yYW5kb20tcm91dGVcIiBjb2xvcj1cImRpdHRvLmJsdWVcIj5cbiAgICAgICAgICAgIFRlc3QgNDA0IFBhZ2VcbiAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvSFN0YWNrPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIkhTdGFjayIsIkJ1dHRvbkxpbmsiLCJOZXh0TGluayIsIk5hdmJhciIsImJhY2tncm91bmRDb2xvciIsInAiLCJocmVmIiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/utils/Navbar.tsx\n"));

/***/ })

});