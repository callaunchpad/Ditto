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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DittoApp; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/dist/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-error-boundary */ \"./node_modules/react-error-boundary/dist/react-error-boundary.umd.js\");\n/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.esm.js\");\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/theme */ \"./src/utils/theme.ts\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DittoApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var onClose = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)().onClose;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: _utils_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ditto\"\n                }, void 0, false, {\n                    fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_error_boundary__WEBPACK_IMPORTED_MODULE_4__.ErrorBoundary, {\n                FallbackComponent: function() {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                        isOpen: true,\n                        onClose: onClose,\n                        isCentered: true,\n                        preserveScrollBarGap: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalOverlay, {}, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalContent, {\n                                maxW: {\n                                    base: \"90%\",\n                                    sm: \"450px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                                        children: \"Unknown Error\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.WarningTwoIcon, {\n                                                boxSize: 16,\n                                                color: \"red.500\"\n                                            }, void 0, false, void 0, void 0)\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {\n                                        children: \"Unfortunately, an unexpected error has occurred. Please reload the page to try again.\"\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0);\n                },\n                onError: console.error,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        height: 5\n                    }, void 0, false, {\n                        fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tonyxin/Documents/GitHub/Ditto/website/src/pages/_app.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(DittoApp, \"qODNkTImfbztdqF5Q6UUfMX7nIo=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure\n    ];\n});\n_c = DittoApp;\nvar _c;\n$RefreshReg$(_c, \"DittoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBVzBCO0FBQ3FCO0FBQ007QUFDSDtBQUVYO0FBRXhCLFNBQVNhLFFBQVEsQ0FBQyxLQUFrQyxFQUFFO1FBQWxDQyxTQUFTLEdBQVgsS0FBa0MsQ0FBaENBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUFrQyxDQUFyQkEsU0FBUzs7SUFDckQsSUFBTSxPQUFTLEdBQUtkLCtEQUFhLEVBQUUsQ0FBM0JlLE9BQU87SUFDZixxQkFDRSw4REFBQ2hCLDREQUFjO1FBQUNZLEtBQUssRUFBRUEsK0NBQUs7OzBCQUMxQiw4REFBQ0ssSUFBSTswQkFDSCw0RUFBQ0MsT0FBSzs4QkFBQyxPQUFLOzs7Ozt3QkFBUTs7Ozs7b0JBQ2Y7MEJBQ1AsOERBQUNSLCtEQUFhO2dCQUNaUyxpQkFBaUIsRUFBRTt5Q0FDakIsOERBQUNqQixtREFBSzt3QkFBQ2tCLE1BQU07d0JBQUNKLE9BQU8sRUFBRUEsT0FBTzt3QkFBRUssVUFBVTt3QkFBQ0Msb0JBQW9COzswQ0FDN0QsOERBQUNqQiwwREFBWSxvQ0FBRzswQ0FDaEIsOERBQUNGLDBEQUFZO2dDQUFDb0IsSUFBSSxFQUFFO29DQUFFQyxJQUFJLEVBQUUsS0FBSztvQ0FBRUMsRUFBRSxFQUFFLE9BQU87aUNBQUU7O2tEQUM5Qyw4REFBQ3JCLHlEQUFXO2tEQUFDLGVBQWE7cUVBQWM7a0RBQ3hDLDhEQUFDRSx1REFBUztrREFDUiw0RUFBQ0Usb0RBQU07c0RBQ0wsNEVBQUNHLDREQUFjO2dEQUFDZSxPQUFPLEVBQUUsRUFBRTtnREFBRUMsS0FBSyxFQUFDLFNBQVM7NkVBQUc7eUVBQ3hDO3FFQUNDO2tEQUNaLDhEQUFDcEIseURBQVc7a0RBQUMsdUZBR2I7cUVBQWM7OzREQUNEOztvREFDVDtpQkFDVDtnQkFDRHFCLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxLQUFLOztrQ0FFdEIsOERBQUNyQiwyREFBYTt3QkFBQ3NCLE1BQU0sRUFBRSxDQUFDOzs7Ozs0QkFBSTtrQ0FDNUIsOERBQUNqQixTQUFTLHFGQUFLQyxTQUFTOzs7OzRCQUFJOzs7Ozs7b0JBQ2Q7Ozs7OztZQUNELENBQ2pCO0FBQ0osQ0FBQztHQWhDdUJGLFFBQVE7O1FBQ1ZaLDJEQUFhOzs7QUFEWFksS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHtcbiAgQ2hha3JhUHJvdmlkZXIsXG4gIHVzZURpc2Nsb3N1cmUsXG4gIE1vZGFsLFxuICBNb2RhbENvbnRlbnQsXG4gIE1vZGFsSGVhZGVyLFxuICBNb2RhbE92ZXJsYXksXG4gIE1vZGFsQm9keSxcbiAgTW9kYWxGb290ZXIsXG4gIENlbnRlcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOZXh0TlByb2dyZXNzIGZyb20gXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIjtcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tIFwicmVhY3QtZXJyb3ItYm91bmRhcnlcIjtcbmltcG9ydCB7IFdhcm5pbmdUd29JY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vdXRpbHMvdGhlbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGl0dG9BcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCB7IG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGl0dG88L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEVycm9yQm91bmRhcnlcbiAgICAgICAgRmFsbGJhY2tDb21wb25lbnQ9eygpID0+IChcbiAgICAgICAgICA8TW9kYWwgaXNPcGVuIG9uQ2xvc2U9e29uQ2xvc2V9IGlzQ2VudGVyZWQgcHJlc2VydmVTY3JvbGxCYXJHYXA+XG4gICAgICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgICAgICA8TW9kYWxDb250ZW50IG1heFc9e3sgYmFzZTogXCI5MCVcIiwgc206IFwiNDUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyPlVua25vd24gRXJyb3I8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8V2FybmluZ1R3b0ljb24gYm94U2l6ZT17MTZ9IGNvbG9yPVwicmVkLjUwMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgVW5mb3J0dW5hdGVseSwgYW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQuIFBsZWFzZSByZWxvYWRcbiAgICAgICAgICAgICAgICB0aGUgcGFnZSB0byB0cnkgYWdhaW4uXG4gICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApfVxuICAgICAgICBvbkVycm9yPXtjb25zb2xlLmVycm9yfVxuICAgICAgPlxuICAgICAgICA8TmV4dE5Qcm9ncmVzcyBoZWlnaHQ9ezV9IC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidXNlRGlzY2xvc3VyZSIsIk1vZGFsIiwiTW9kYWxDb250ZW50IiwiTW9kYWxIZWFkZXIiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbEJvZHkiLCJNb2RhbEZvb3RlciIsIkNlbnRlciIsIk5leHROUHJvZ3Jlc3MiLCJFcnJvckJvdW5kYXJ5IiwiV2FybmluZ1R3b0ljb24iLCJ0aGVtZSIsIkRpdHRvQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwib25DbG9zZSIsIkhlYWQiLCJ0aXRsZSIsIkZhbGxiYWNrQ29tcG9uZW50IiwiaXNPcGVuIiwiaXNDZW50ZXJlZCIsInByZXNlcnZlU2Nyb2xsQmFyR2FwIiwibWF4VyIsImJhc2UiLCJzbSIsImJveFNpemUiLCJjb2xvciIsIm9uRXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});