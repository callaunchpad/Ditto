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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DittoApp; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/dist/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-error-boundary */ \"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js\");\n/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.esm.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/theme */ \"./src/utils/theme.ts\");\n/* harmony import */ var _components_utils_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utils/Navbar */ \"./src/components/utils/Navbar.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DittoApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var onClose = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useDisclosure)().onClose;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ChakraProvider, {\n        theme: _utils_theme__WEBPACK_IMPORTED_MODULE_3__.theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_error_boundary__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundary, {\n            FallbackComponent: function() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                    isOpen: true,\n                    onClose: onClose,\n                    isCentered: true,\n                    preserveScrollBarGap: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalOverlay, {}, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalContent, {\n                            maxW: {\n                                base: \"90%\",\n                                sm: \"450px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalHeader, {\n                                    children: \"Unknown Error\"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalBody, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.WarningTwoIcon, {\n                                            boxSize: 16,\n                                            color: \"red.500\"\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ModalFooter, {\n                                    children: \"Unfortunately, an unexpected error has occurred. Please reload the page to try again.\"\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                    ]\n                }, void 0, true, void 0, void 0);\n            },\n            onError: console.error,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    height: 5\n                }, void 0, false, {\n                    fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    backgroundColor: \"ditto.veryLightPurple\",\n                    minHeight: \"100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, pageProps), void 0, false, {\n                            fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(DittoApp, \"qODNkTImfbztdqF5Q6UUfMX7nIo=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useDisclosure\n    ];\n});\n_c = DittoApp;\nvar _c;\n$RefreshReg$(_c, \"DittoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBWTBCO0FBQ3FCO0FBQ007QUFDSDtBQUU1QjtBQUNpQjtBQUNTO0FBRWpDLFNBQVNlLFFBQVEsQ0FBQyxLQUFrQyxFQUFFO1FBQWxDQyxTQUFTLEdBQVgsS0FBa0MsQ0FBaENBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUFrQyxDQUFyQkEsU0FBUzs7SUFDckQsSUFBTSxPQUFTLEdBQUtoQiwrREFBYSxFQUFFLENBQTNCaUIsT0FBTztJQUNmLHFCQUNFLDhEQUFDbEIsNERBQWM7UUFBQ2EsS0FBSyxFQUFFQSwrQ0FBSztrQkFDMUIsNEVBQUNGLCtEQUFhO1lBQ1pRLGlCQUFpQixFQUFFO3FDQUNqQiw4REFBQ2pCLG1EQUFLO29CQUFDa0IsTUFBTTtvQkFBQ0YsT0FBTyxFQUFFQSxPQUFPO29CQUFFRyxVQUFVO29CQUFDQyxvQkFBb0I7O3NDQUM3RCw4REFBQ2pCLDBEQUFZLG9DQUFHO3NDQUNoQiw4REFBQ0YsMERBQVk7NEJBQUNvQixJQUFJLEVBQUU7Z0NBQUVDLElBQUksRUFBRSxLQUFLO2dDQUFFQyxFQUFFLEVBQUUsT0FBTzs2QkFBRTs7OENBQzlDLDhEQUFDckIseURBQVc7OENBQUMsZUFBYTtpRUFBYzs4Q0FDeEMsOERBQUNFLHVEQUFTOzhDQUNSLDRFQUFDRSxvREFBTTtrREFDTCw0RUFBQ0ksNERBQWM7NENBQUNjLE9BQU8sRUFBRSxFQUFFOzRDQUFFQyxLQUFLLEVBQUMsU0FBUzt5RUFBRztxRUFDeEM7aUVBQ0M7OENBQ1osOERBQUNwQix5REFBVzs4Q0FBQyx1RkFHYjtpRUFBYzs7d0RBQ0Q7O2dEQUNUO2FBQ1Q7WUFDRHFCLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxLQUFLOzs4QkFFdEIsOERBQUNwQiwyREFBYTtvQkFBQ3FCLE1BQU0sRUFBRSxDQUFDOzs7Ozt3QkFBSTs4QkFDNUIsOERBQUN0QixpREFBRztvQkFBQ3VCLGVBQWUsRUFBQyx1QkFBdUI7b0JBQUNDLFNBQVMsRUFBQyxLQUFLOztzQ0FDMUQsOERBQUNuQixnRUFBTTs7OztnQ0FBVTtzQ0FDakIsOERBQUNFLFNBQVMscUZBQUtDLFNBQVM7Ozs7Z0NBQUc7Ozs7Ozt3QkFDdkI7Ozs7OztnQkFDUTs7Ozs7WUFDRCxDQUNqQjtBQUNKLENBQUM7R0FoQ3VCRixRQUFROztRQUNWZCwyREFBYTs7O0FBRFhjLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7XG4gIENoYWtyYVByb3ZpZGVyLFxuICB1c2VEaXNjbG9zdXJlLFxuICBNb2RhbCxcbiAgTW9kYWxDb250ZW50LFxuICBNb2RhbEhlYWRlcixcbiAgTW9kYWxPdmVybGF5LFxuICBNb2RhbEJvZHksXG4gIE1vZGFsRm9vdGVyLFxuICBDZW50ZXIsXG4gIEJveCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOZXh0TlByb2dyZXNzIGZyb20gXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIjtcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tIFwicmVhY3QtZXJyb3ItYm91bmRhcnlcIjtcbmltcG9ydCB7IFdhcm5pbmdUd29JY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcblxuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vdXRpbHMvdGhlbWVcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMvTmF2YmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpdHRvQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgeyBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8RXJyb3JCb3VuZGFyeVxuICAgICAgICBGYWxsYmFja0NvbXBvbmVudD17KCkgPT4gKFxuICAgICAgICAgIDxNb2RhbCBpc09wZW4gb25DbG9zZT17b25DbG9zZX0gaXNDZW50ZXJlZCBwcmVzZXJ2ZVNjcm9sbEJhckdhcD5cbiAgICAgICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgICAgIDxNb2RhbENvbnRlbnQgbWF4Vz17eyBiYXNlOiBcIjkwJVwiLCBzbTogXCI0NTBweFwiIH19PlxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXI+VW5rbm93biBFcnJvcjwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxXYXJuaW5nVHdvSWNvbiBib3hTaXplPXsxNn0gY29sb3I9XCJyZWQuNTAwXCIgLz5cbiAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICBVbmZvcnR1bmF0ZWx5LCBhbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZC4gUGxlYXNlIHJlbG9hZFxuICAgICAgICAgICAgICAgIHRoZSBwYWdlIHRvIHRyeSBhZ2Fpbi5cbiAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICl9XG4gICAgICAgIG9uRXJyb3I9e2NvbnNvbGUuZXJyb3J9XG4gICAgICA+XG4gICAgICAgIDxOZXh0TlByb2dyZXNzIGhlaWdodD17NX0gLz5cbiAgICAgICAgPEJveCBiYWNrZ3JvdW5kQ29sb3I9XCJkaXR0by52ZXJ5TGlnaHRQdXJwbGVcIiBtaW5IZWlnaHQ9XCIxMDBcIj5cbiAgICAgICAgICA8TmF2YmFyPjwvTmF2YmFyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidXNlRGlzY2xvc3VyZSIsIk1vZGFsIiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbEJvZHkiLCJNb2RhbEZvb3RlciIsIkNlbnRlciIsIkJveCIsIk5leHROUHJvZ3Jlc3MiLCJFcnJvckJvdW5kYXJ5IiwiV2FybmluZ1R3b0ljb24iLCJ0aGVtZSIsIk5hdmJhciIsIkRpdHRvQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwib25DbG9zZSIsIkZhbGxiYWNrQ29tcG9uZW50IiwiaXNPcGVuIiwiaXNDZW50ZXJlZCIsInByZXNlcnZlU2Nyb2xsQmFyR2FwIiwibWF4VyIsImJhc2UiLCJzbSIsImJveFNpemUiLCJjb2xvciIsIm9uRXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});