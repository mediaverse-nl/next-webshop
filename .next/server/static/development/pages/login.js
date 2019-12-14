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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/AuthService */ "./utils/AuthService.js");
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const auth = new _utils_AuthService__WEBPACK_IMPORTED_MODULE_2__["default"]('https://api.mediaverse-dev.nl');

class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (auth.loggedIn()) {// this.props.url.replaceTo('/auth/dashboard')   // redirect if you're already logged in
    }
  } //polyfill, css, js functions als fetch


  handleSubmit(e) {
    e.preventDefault(); // yay uncontrolled forms!

    auth.login(this.refs.email.value, this.refs.password.value).then(res => {
      console.log('login function');
      console.log(res); // console.log(Promise.resolve(res))
      // console.log(res, 'res')
      // console.log('end login')
      // this.props.url.replaceTo('/auth/dashboard')
    }); // .catch(e => console.log(e))  // you would show/hide error messages with component state here
  }

  render() {
    return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3001018118"
    }, ".login-container.jsx-3001018118{margin-top:10vh;padding:15px;border:1px solid #CCD1D1;border-radius:5px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}.ads.jsx-3001018118{background-color:#eee;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff;text-align:center;}.ads.jsx-3001018118 h1.jsx-3001018118{margin-top:20%;}#fl.jsx-3001018118{font-weight:600;}#sl.jsx-3001018118{font-weight:100 !important;}.profile-img.jsx-3001018118{text-align:center;}.profile-img.jsx-3001018118 img.jsx-3001018118{border-radius:50%;}@-webkit-keyframes mymove-jsx-3001018118{from{border:1px solid #F2F3F4;}to{border:8px solid #F2F3F4;}}@keyframes mymove-jsx-3001018118{from{border:1px solid #F2F3F4;}to{border:8px solid #F2F3F4;}}.login-form.jsx-3001018118{padding:15px;}.login-form.jsx-3001018118 h3.jsx-3001018118{text-align:center;padding-top:15px;padding-bottom:15px;}.form-control.jsx-3001018118{font-size:14px;}.forget-password.jsx-3001018118 a.jsx-3001018118{font-weight:500;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcdGVzdC10ZXN0XFxwYWdlc1xcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUM0QixBQUl1QyxBQVFNLEFBUVAsQUFHQyxBQUdXLEFBR1QsQUFHQSxBQUlZLEFBQ0YsQUFHZixBQUdLLEFBS0gsQUFHQyxhQVZsQixFQXBCQSxBQTRCQSxDQTVDZSxBQW1CZixBQTRCdUIsRUF0QnZCLEFBSUEsQUFVbUIsSUEvQlUsR0F1QkksQUFDRixFQVYvQixFQXJCMkIsTUF1Q0wsY0EvQlUsS0FQWixDQXVDcEIsV0FPaUIsTUE3QzZELE9BT2pFLEVBdUNiLFNBckNvQixrQkFDcEIsaUNBUkEiLCJmaWxlIjoiQzpcXFByb2plY3RzXFx0ZXN0LXRlc3RcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi91dGlscy9BdXRoU2VydmljZSdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL01haW4nO1xyXG5cclxuY29uc3QgYXV0aCA9IG5ldyBBdXRoU2VydmljZSgnaHR0cHM6Ly9hcGkubWVkaWF2ZXJzZS1kZXYubmwnKVxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAgICAgaWYgKGF1dGgubG9nZ2VkSW4oKSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLnVybC5yZXBsYWNlVG8oJy9hdXRoL2Rhc2hib2FyZCcpICAgLy8gcmVkaXJlY3QgaWYgeW91J3JlIGFscmVhZHkgbG9nZ2VkIGluXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9wb2x5ZmlsbCwgY3NzLCBqcyBmdW5jdGlvbnMgYWxzIGZldGNoXHJcbiAgICBoYW5kbGVTdWJtaXQgKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAvLyB5YXkgdW5jb250cm9sbGVkIGZvcm1zIVxyXG4gICAgICAgIGF1dGgubG9naW4odGhpcy5yZWZzLmVtYWlsLnZhbHVlLCB0aGlzLnJlZnMucGFzc3dvcmQudmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coUHJvbWlzZS5yZXNvbHZlKHJlcykpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMsICdyZXMnKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VuZCBsb2dpbicpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy51cmwucmVwbGFjZVRvKCcvYXV0aC9kYXNoYm9hcmQnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSkgIC8vIHlvdSB3b3VsZCBzaG93L2hpZGUgZXJyb3IgbWVzc2FnZXMgd2l0aCBjb21wb25lbnQgc3RhdGUgaGVyZVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NEMUQxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkcyBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAjZmwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICNzbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtaW1nIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvKiBhbmltYXRpb246IG15bW92ZSAycyBpbmZpbml0ZTsgKi9cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbXltb3ZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb20ge2JvcmRlcjogMXB4IHNvbGlkICNGMkYzRjQ7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdG8ge2JvcmRlcjogOHB4IHNvbGlkICNGMkYzRjQ7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbi1mb3JtIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JnZXQtcGFzc3dvcmQgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7Lyo8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9ID4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJlbWFpbFwiIHZhbHVlPXsnYWRtaW5AYWRtaW4uY29tJ30gLz4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcmVmPVwicGFzc3dvcmRcIiAgLz4qL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIvPiovfVxyXG4gICAgICAgICAgICAgICAgey8qPC9mb3JtPiovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBhZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT48c3BhbiBpZD1cImZsXCI+V2Vic2hvcCBOYWFtPC9zcGFuPiA8c3BhbiBpZD1cInNsXCI+TG9nbyA8L3NwYW4+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpbWcqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgc3JjPVwiIFwiKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIGFsdD1cInByb2ZpbGVfaW1nXCIgaGVpZ2h0PVwiMTQwcHhcIiB3aWR0aD1cIjE0MHB4O1wiIC8+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPklubG9nZ2VuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIkdlYnJ1aWtlcnNuYWFtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJXYWNodHdvb3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2tcIj5JbmxvZ2dlbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JnZXQtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4gPGEgaHJlZj1cIiNcIj5XYWNodHdvb3JkIHZlcmdldGVuPzwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl19 */\n/*@ sourceURL=C:\\Projects\\test-test\\pages\\login.js */"), __jsx("div", {
      className: "jsx-3001018118" + " " + "container "
    }, __jsx("br", {
      className: "jsx-3001018118"
    }), __jsx("br", {
      className: "jsx-3001018118"
    }), __jsx("hr", {
      className: "jsx-3001018118"
    }), __jsx("div", {
      className: "jsx-3001018118" + " " + "row"
    }, __jsx("div", {
      className: "jsx-3001018118" + " " + "col-md-6 ads"
    }, __jsx("h1", {
      className: "jsx-3001018118"
    }, __jsx("span", {
      id: "fl",
      className: "jsx-3001018118"
    }, "Webshop Naam"), " ", __jsx("span", {
      id: "sl",
      className: "jsx-3001018118"
    }, "Logo "))), __jsx("div", {
      className: "jsx-3001018118" + " " + "col-md-6 login-form"
    }, __jsx("div", {
      className: "jsx-3001018118" + " " + "profile-img"
    }), __jsx("h1", {
      className: "jsx-3001018118" + " " + "text-center"
    }, "Inloggen"), __jsx("form", {
      className: "jsx-3001018118"
    }, __jsx("div", {
      className: "jsx-3001018118" + " " + "form-group"
    }, __jsx("input", {
      type: "text",
      name: "username",
      placeholder: "Gebruikersnaam",
      className: "jsx-3001018118" + " " + "form-control"
    })), __jsx("div", {
      className: "jsx-3001018118" + " " + "form-group"
    }, __jsx("input", {
      type: "text",
      name: "password",
      placeholder: "Wachtwoord",
      className: "jsx-3001018118" + " " + "form-control"
    })), __jsx("div", {
      className: "jsx-3001018118" + " " + "form-group"
    }, __jsx("button", {
      type: "button",
      className: "jsx-3001018118" + " " + "btn btn-primary btn-lg btn-block"
    }, "Inloggen")), __jsx("div", {
      className: "jsx-3001018118" + " " + "form-group forget-password"
    }, __jsx("p", {
      className: "jsx-3001018118" + " " + "text-center"
    }, " ", __jsx("a", {
      href: "#",
      className: "jsx-3001018118"
    }, "Wachtwoord vergeten?")))))), __jsx("hr", {
      className: "jsx-3001018118"
    }), __jsx("br", {
      className: "jsx-3001018118"
    }), __jsx("br", {
      className: "jsx-3001018118"
    }), __jsx("br", {
      className: "jsx-3001018118"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

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

/***/ "./utils/AuthService.js":
/*!******************************!*\
  !*** ./utils/AuthService.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthService; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

class AuthService {
  constructor(domain) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "fetch", (url, options) => {
      // performs api calls sending the required authentication headers
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      };

      if (this.loggedIn()) {
        headers['Authorization'] = 'Bearer ' + this.getToken();
      }

      const ComHeaders = _objectSpread({}, headers, {}, options);

      console.log(url, 'url'); // console.log([...headers, ...options], 'header');

      return fetch(url, ComHeaders) // .then(this._checkStatus)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('no error');
          return response.json();
        } else if (response.status >= 422) {
          console.log('fields are incorrect');
          return response.json();
        } else {
          console.log('error');
          return response;
        }
      }); //  .then(response => {
      //     return response;
      // })
    });

    this.domain = domain || 'https://api.mediaverse-dev.nl'; // this.fetch = this.fetch.bind(this)

    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(email, password) {
    // ?email=${email}&password=${password}
    return this.fetch(`/shop/api/v1/login`, {
      method: 'POST',
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()({
        email,
        password
      })
    }).then(function (response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response;
    }); //     .then(function(data) {
    //     // `data` is the parsed version of the JSON returned from the above endpoint.
    //     console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    // });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token; // && !isTokenExpired(token) // handwaiving here
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(profile));
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  _checkStatus(response) {
    console.log('error check'); // raises an error in case response status is not a success

    if (response.status >= 200 && response.status < 300) {
      console.log('no error');
      return response;
    } else {
      console.log('error for sure');
      var error = response;
      console.log('error for sure', error);
      error.response = response;
      console.log('end error for sure');
      throw error;
    }
  }

}

/***/ }),

/***/ 7:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\test-test\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map