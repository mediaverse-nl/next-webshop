module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => __jsx("footer", {
  className: "jsx-2162771274" + " " + "bg-dark text-white mt-4"
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2162771274"
}, "footer.jsx-2162771274{position:absolute;bottom:0;width:100%;height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdGVzdC10ZXN0XFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW9CLEFBR21DLGtCQUNULFNBQ0UsV0FDRSxhQUNqQiIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHRlc3QtdGVzdFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgICBtYXJnaW5SaWdodDogMTVcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC13aGl0ZSBtdC00XCI+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2AgXHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+Rm9vdGVyPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdob21lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9J2ZhcSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PmZhcTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJjYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkNhdGVnb3JpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5JIHN0YXkgYXQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQhIDxzcGFuIGNsYXNzTmFtZT1cInNtYWxsXCI+PGJyLz5Vbmxlc3MgdGhlIHBhZ2UgY29udGVudCBwdXNoZXMgbWUgZnVydGhlci48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgdGV4dC1yaWdodCBzbWFsbCBhbGlnbi1zZWxmLWVuZFwiPsKpMjAxNyBCcmFuZCwgSW5jLjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\Projects\\test-test\\components\\Footer.js */"), __jsx("div", {
  className: "jsx-2162771274" + " " + "container py-3"
}, __jsx("div", {
  className: "jsx-2162771274" + " " + "row"
}, __jsx("div", {
  className: "jsx-2162771274" + " " + "col-md-3"
}, __jsx("h5", {
  className: "jsx-2162771274"
}, "Footer")), __jsx("div", {
  className: "jsx-2162771274" + " " + "col-md-3"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  route: "home"
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-2162771274"
}, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  route: "faq"
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-2162771274"
}, "faq")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  route: "categories"
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-2162771274"
}, "Categories")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  route: "about"
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-2162771274"
}, "About")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  route: "contact"
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-2162771274"
}, "Contact"))), __jsx("div", {
  className: "jsx-2162771274" + " " + "col-md-3"
}), __jsx("div", {
  className: "jsx-2162771274" + " " + "col-md-3"
})), __jsx("div", {
  className: "jsx-2162771274" + " " + "row"
}, __jsx("div", {
  className: "jsx-2162771274" + " " + "col-md-6"
}, "I stay at the bottom of the viewport! ", __jsx("span", {
  className: "jsx-2162771274" + " " + "small"
}, __jsx("br", {
  className: "jsx-2162771274"
}), "Unless the page content pushes me further.")), __jsx("div", {
  className: "jsx-2162771274" + " " + "col-md-3"
}), __jsx("div", {
  className: "jsx-2162771274" + " " + "col-md-3 text-right small align-self-end"
}, "\xA92017 Brand, Inc."))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => __jsx("nav", {
  className: "navbar navbar-expand-md navbar-dark fixed-top bg-dark"
}, __jsx("div", {
  className: "container"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  route: "home"
}, __jsx("a", {
  className: "navbar-brand"
}, __jsx("img", {
  src: "http://placehold.it/150x50?text=Logo",
  alt: ""
}))), __jsx("button", {
  className: "navbar-toggler",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarCollapse",
  "aria-controls": "navbarCollapse",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, __jsx("span", {
  className: "navbar-toggler-icon"
})), __jsx("div", {
  className: "collapse navbar-collapse",
  id: "navbarCollapse"
}, __jsx("ul", {
  className: "navbar-nav mr-auto"
}, __jsx("li", {
  className: "nav-item"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  route: "home"
}, __jsx("a", {
  className: "nav-link",
  style: linkStyle
}, "Home"))), __jsx("li", {
  className: "nav-item"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  route: "categories"
}, __jsx("a", {
  className: "nav-link",
  style: linkStyle
}, "Categories"))), __jsx("li", {
  className: "nav-item"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  route: "about"
}, __jsx("a", {
  className: "nav-link",
  style: linkStyle
}, "About"))), __jsx("li", {
  className: "nav-item"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  route: "contact"
}, __jsx("a", {
  className: "nav-link",
  style: linkStyle
}, "Contact")))), __jsx("ul", {
  className: "navbar-nav ml-auto"
}, __jsx("li", {
  className: "nav-item"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  route: "login"
}, __jsx("a", {
  className: "nav-link",
  style: linkStyle
}, "Inloggen"))), __jsx("li", {
  className: "nav-item"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  route: "register"
}, __jsx("a", {
  className: "nav-link"
}, "Registreren"))), __jsx("li", {
  className: "nav-item"
}, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  route: "cart"
}, __jsx("a", {
  className: "nav-link"
}, __jsx("i", {
  className: "fas fa-shopping-cart"
})))), __jsx("li", {
  className: "nav-item"
}, __jsx("a", {
  className: "header__summary snipcart-checkout snipcart-summary",
  href: "#",
  style: {
    textDecoration: "none"
  }
}, __jsx("span", {
  className: "header__price snipcart-total-price"
})))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/SildeShow.js":
/*!*********************************!*\
  !*** ./components/SildeShow.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class HomeSlideShow extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {
          max: 4000,
          min: 3000
        },
        items: 5
      },
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      }
    };
    return __jsx("div", {
      className: "jsx-3527542696" + " " + "container"
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3527542696"
    }, "img.jsx-3527542696{width:100%;}li.jsx-3527542696{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdGVzdC10ZXN0XFxjb21wb25lbnRzXFxTaWxkZVNob3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEI0QixBQUdrQyxBQUdXLFdBRnhCLFVBR0EiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx0ZXN0LXRlc3RcXGNvbXBvbmVudHNcXFNpbGRlU2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuXHJcbmNsYXNzIEhvbWVTbGlkZVNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zaXZlID0ge1xyXG4gICAgICAgICAgICBzdXBlckxhcmdlRGVza3RvcDoge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiA1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXNrdG9wOiB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGFibGV0OiB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2JpbGU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX0gc3NyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiaHR0cHM6Ly9wYXdlbGdyenliZWsuY29tL3NpZW1hL2Fzc2V0cy9zaWVtYS0teWVsbG93LnN2Z1wiIGFsdD1cIlNpZW1hIGltYWdlXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiaHR0cHM6Ly9wYXdlbGdyenliZWsuY29tL3NpZW1hL2Fzc2V0cy9zaWVtYS0tcGluay5zdmdcIiBhbHQ9XCJTaWVtYSBpbWFnZVwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cImh0dHBzOi8vcGF3ZWxncnp5YmVrLmNvbS9zaWVtYS9hc3NldHMvc2llbWEtLXllbGxvdy5zdmdcIiBhbHQ9XCJTaWVtYSBpbWFnZVwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cImh0dHBzOi8vcGF3ZWxncnp5YmVrLmNvbS9zaWVtYS9hc3NldHMvc2llbWEtLXBpbmsuc3ZnXCIgYWx0PVwiU2llbWEgaW1hZ2VcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJodHRwczovL3Bhd2VsZ3J6eWJlay5jb20vc2llbWEvYXNzZXRzL3NpZW1hLS15ZWxsb3cuc3ZnXCIgYWx0PVwiU2llbWEgaW1hZ2VcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVNsaWRlU2hvdzsiXX0= */\n/*@ sourceURL=C:\\Projects\\test-test\\components\\SildeShow.js */"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
      responsive: responsive,
      ssr: true
    }, __jsx("div", {
      className: "jsx-3527542696"
    }, __jsx("img", {
      src: "https://pawelgrzybek.com/siema/assets/siema--yellow.svg",
      alt: "Siema image",
      className: "jsx-3527542696"
    })), __jsx("div", {
      className: "jsx-3527542696"
    }, __jsx("img", {
      src: "https://pawelgrzybek.com/siema/assets/siema--pink.svg",
      alt: "Siema image",
      className: "jsx-3527542696"
    })), __jsx("div", {
      className: "jsx-3527542696"
    }, __jsx("img", {
      src: "https://pawelgrzybek.com/siema/assets/siema--yellow.svg",
      alt: "Siema image",
      className: "jsx-3527542696"
    })), __jsx("div", {
      className: "jsx-3527542696"
    }, __jsx("img", {
      src: "https://pawelgrzybek.com/siema/assets/siema--pink.svg",
      alt: "Siema image",
      className: "jsx-3527542696"
    })), __jsx("div", {
      className: "jsx-3527542696"
    }, __jsx("img", {
      src: "https://pawelgrzybek.com/siema/assets/siema--yellow.svg",
      alt: "Siema image",
      className: "jsx-3527542696"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeSlideShow);

/***/ }),

/***/ "./layouts/Main.js":
/*!*************************!*\
  !*** ./layouts/Main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  title = 'This is the default title'
}) => __jsx("div", {
  className: "jsx-2878025030" + " " + "main-container"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: "jsx-2878025030"
}, title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2878025030"
}, "*{box-sizing:border-box;}*:before,*:after{box-sizing:border-box;}html,body{height:100%;position:relative;}.main-container{padding-top:55px;min-height:100vh;overflow:hidden;display:block;position:relative;padding-bottom:200px;}.breadcrumb{background-color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdGVzdC10ZXN0XFxsYXlvdXRzXFxNYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVUyQixBQUdvQyxBQUlBLEFBSVYsQUFJSSxBQVFTLFlBWFAsS0FJRCxLQVpsQixBQUlBLEFBZ0JBLFFBWEEsSUFJaUIsZ0JBQ0YsY0FDSSxrQkFDRyxxQkFDdEIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx0ZXN0LXRlc3RcXGxheW91dHNcXE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGUgPnsgdGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YCBcclxuICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICo6YmVmb3JlLFxyXG4gICAgICAgICAgICAqOmFmdGVyIHtcclxuICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHRtbCxcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgIHBhZGRpbmctdG9wOjU1cHg7XHJcbiAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogd2lsbCBjb3ZlciB0aGUgMTAwJSBvZiB2aWV3cG9ydCAqL1xyXG4gICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwMHB4OyAvKiBoZWlnaHQgb2YgeW91ciBmb290ZXIgKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnJlYWRjcnVtYntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxIZWFkZXIvPlxyXG5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuKSJdfQ== */\n/*@ sourceURL=C:\\Projects\\test-test\\layouts\\Main.js */"), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("main", {
  className: "jsx-2878025030" + " " + ""
}, children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SildeShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SildeShow */ "./components/SildeShow.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Home() {
  return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
    className: "jumbotron"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h1", null, "Voorbeeld webshop"), __jsx("h1", null, "it works!"), __jsx("h1", null, "test"), __jsx("p", {
    className: "lead"
  }, "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "home"
  }, __jsx("a", {
    className: "btn btn-lg btn-primary"
  }, "Shop")))), __jsx("div", {
    className: "container"
  }, __jsx("p", null, "This is the ", __jsx("b", null, "Index"), " page"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-4"
  }, __jsx("div", {
    className: "card"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h2", null, "Categorieen"), __jsx("ul", null, __jsx("li", null, "sadasd"), __jsx("li", null, "sadasd"), __jsx("li", null, "sadasd"), __jsx("li", null, "sadasd"))))), __jsx("div", {
    className: "col-8"
  }, __jsx("div", {
    className: "card"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h2", null, "Voorbeeld card"), __jsx("p", {
    className: "lead"
  }, "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport."), __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "home"
  }, __jsx("a", {
    className: "btn btn-lg btn-primary"
  }, "Shop"))))))), __jsx("div", {
    className: "jsx-1036007322" + " " + "jumbotron"
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1036007322"
  }, ".jumbotron.jsx-1036007322{margin-top:50px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdGVzdC10ZXN0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkQ0QixBQUd3QyxnQkFDRyxtQkFDdEIiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx0ZXN0LXRlc3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL01haW4nO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IFNsaWRlU2hvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWxkZVNob3dcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Wb29yYmVlbGQgd2Vic2hvcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntwcm9jZXNzLmVudi5URVNUX1ZBUn08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT50ZXN0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+VGhpcyBleGFtcGxlIGlzIGEgcXVpY2sgZXhlcmNpc2UgdG8gaWxsdXN0cmF0ZSBob3cgZml4ZWQgdG8gdG9wIG5hdmJhciB3b3Jrcy4gQXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgeW91IHNjcm9sbCwgaXQgd2lsbCByZW1haW4gZml4ZWQgdG8gdGhlIHRvcCBvZiB5b3VyIGJyb3dzZXIncyB2aWV3cG9ydC48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdob21lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiID5TaG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgPGI+SW5kZXg8L2I+IHBhZ2U8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNhdGVnb3JpZWVuPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5zYWRhc2Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+c2FkYXNkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnNhZGFzZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5zYWRhc2Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlZvb3JiZWVsZCBjYXJkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+VGhpcyBleGFtcGxlIGlzIGEgcXVpY2sgZXhlcmNpc2UgdG8gaWxsdXN0cmF0ZSBob3cgZml4ZWQgdG8gdG9wIG5hdmJhciB3b3Jrcy4gQXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91IHNjcm9sbCwgaXQgd2lsbCByZW1haW4gZml4ZWQgdG8gdGhlIHRvcCBvZiB5b3VyIGJyb3dzZXIncyB2aWV3cG9ydC48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdob21lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiID5TaG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5wb3B1bGFpcmUgaXRlbXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+amUgemlldCBtZWVyIHZhbiBtZXJrZW4gZGllIGplIHZvbGd0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZVNob3c+PC9TbGlkZVNob3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxoMz5wcm9kdWN0IG5hYW08L2gzPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8cD5wcm9kdWN0IGJlc2NocmlqdmluZzwvcD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPGgzPnByb2R1Y3QgbmFhbTwvaDM+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxwPnByb2R1Y3QgYmVzY2hyaWp2aW5nPC9wPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8aDM+cHJvZHVjdCBuYWFtPC9oMz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgPHA+cHJvZHVjdCBiZXNjaHJpanZpbmc8L3A+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDxoMz5wcm9kdWN0IG5hYW08L2gzPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICA8cD5wcm9kdWN0IGJlc2NocmlqdmluZzwvcD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\Projects\\test-test\\pages\\index.js */"), __jsx("div", {
    className: "jsx-1036007322" + " " + "container"
  }, __jsx("h2", {
    className: "jsx-1036007322" + " " + "text-center"
  }, "populaire items"), __jsx("p", {
    className: "jsx-1036007322" + " " + "text-center"
  }, "je ziet meer van merken die je volgt"), __jsx("div", {
    className: "jsx-1036007322" + " " + "row"
  }, __jsx(_components_SildeShow__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
}

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();

routes //home pages
.add({
  name: '/',
  pattern: '/home',
  page: 'index'
}).add({
  name: 'home',
  pattern: '/',
  page: 'index'
}) //dynamic pages
.add({
  name: 'categories',
  pattern: '/categorieen',
  page: 'categories'
}).add({
  name: 'category',
  pattern: '/categorie/:id',
  page: 'category'
}).add({
  name: 'product',
  pattern: '/product/:id',
  page: 'product'
}) //default pages
.add({
  name: 'contact',
  pattern: '/klantenservice',
  page: 'contact'
}).add({
  name: 'about',
  pattern: '/over-ons',
  page: 'about'
}).add({
  name: 'cart',
  pattern: '/winkelwagen',
  page: 'cart'
}).add({
  name: 'faq',
  pattern: '/faq',
  page: 'faq'
}) //auth pages
.add({
  name: 'login',
  pattern: '/inloggen',
  page: 'login'
}).add({
  name: 'register',
  pattern: '/registreren',
  page: 'register'
}).add({
  name: 'auth.dashboard',
  pattern: '/auth/dashboard',
  page: 'auth/dashboard'
});

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\test-test\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map