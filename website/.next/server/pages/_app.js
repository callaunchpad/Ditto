"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DittoApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
;// CONCATENATED MODULE: external "react-error-boundary"
const external_react_error_boundary_namespaceObject = require("react-error-boundary");
;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./src/utils/theme.ts

const theme = (0,react_.extendTheme)({
    colors: {
        ditto: {
            blue: "#1e40af",
            lightBlue: "#456ced",
            veryLightBlue: "#99e6ff",
            purple: "#9c1092",
            lighterPurple: "#d618c9",
            lightPurple: "#f08be9",
            veryLightPurple: "#f2d2f7"
        }
    },
    fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif"
    },
    styles: {
        global: {
            "*": {
                boxSizing: "border-box"
            },
            "html, body": {
                padding: 0,
                margin: 0,
                height: "100%",
                width: "100%"
            },
            a: {
                color: "inherit",
                textDecoration: "none"
            }
        }
    },
    components: {
        Box: {
            baseStyle: {
                overflowWrap: "anywhere"
            }
        },
        Text: {
            baseStyle: {
                overflowWrap: "anywhere"
            }
        },
        Button: {
            variants: {
                blue: {
                    bg: "ditto.purple",
                    borderRadius: "20",
                    color: "white",
                    _hover: {
                        bg: "ditto.lighterPurple",
                        _active: {
                            bg: "ditto.veryLightPurple"
                        }
                    }
                }
            }
        }
    }
});

// EXTERNAL MODULE: ./src/components/utils/ButtonLink.tsx
var ButtonLink = __webpack_require__(1576);
// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__(1271);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/utils/NextLink.tsx



// combines Chakra Link and Next Link into a single component
// this allows styling links with Chakra while also using the Next router
function NextLink({ href , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_.Link, {
            ...props
        })
    });
}

;// CONCATENATED MODULE: ./src/components/utils/Navbar.tsx
// combines Chakra Link and Next Link into a single component




// this allows styling links with Chakra while also using the Next router
function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        backgroundColor: "ditto.lightPurple",
        borderBottomRadius: "20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                p: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink, {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        p: 3,
                        backgroundColor: "ditto.purple",
                        borderRadius: 10,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            color: "white",
                            children: "DITTO"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                p: 4,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonLink/* default */.Z, {
                        href: "/about",
                        variant: "blue",
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonLink/* default */.Z, {
                        href: "/test",
                        variant: "blue",
                        children: "Test Model"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonLink/* default */.Z, {
                        href: "/test",
                        variant: "blue",
                        children: "Battle"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx








function DittoApp({ Component , pageProps  }) {
    const { onClose  } = (0,react_.useDisclosure)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_error_boundary_namespaceObject.ErrorBoundary, {
            FallbackComponent: ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
                    isOpen: true,
                    onClose: onClose,
                    isCentered: true,
                    preserveScrollBarGap: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalOverlay, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalContent, {
                            maxW: {
                                base: "90%",
                                sm: "450px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalHeader, {
                                    children: "Unknown Error"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalBody, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.WarningTwoIcon, {
                                            boxSize: 16,
                                            color: "red.500"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalFooter, {
                                    children: "Unfortunately, an unexpected error has occurred. Please reload the page to try again."
                                })
                            ]
                        })
                    ]
                }),
            onError: console.error,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                    height: 5
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    backgroundColor: "ditto.veryLightPurple",
                    minHeight: "calc(100vh)",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@chakra-ui/button");

/***/ }),

/***/ 1271:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,576], () => (__webpack_exec__(2187)));
module.exports = __webpack_exports__;

})();