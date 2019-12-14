webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_10__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var AnyReactComponent = function AnyReactComponent(_ref) {
  var text = _ref.text;
  return __jsx("div", null, text);
};

var Contact =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact, _Component);

  function Contact(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Contact);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact).call(this, props));
    _this.state = {
      submitting: false,
      submitted: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Contact, [{
    key: "submitForm",
    value: function submitForm(data) {
      var _this2 = this;

      fetch('/api/contact', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
      }).then(function (res) {
        res.status === 200 ? _this2.setState({
          submitted: true
        }) : '';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var title = 'Contact Page';
      return __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("div", {
        className: "jumbotron jumbotron-fluid"
      }, __jsx("div", {
        className: "container"
      }, __jsx("h1", null, "Contact"), __jsx("nav", {
        "aria-label": "breadcrumb"
      }, __jsx("ol", {
        className: "breadcrumb"
      }, __jsx("li", {
        className: "breadcrumb-item"
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "home"
      }, __jsx("a", null, "Home"))), __jsx("li", {
        className: "breadcrumb-item"
      }, __jsx("a", null, "Contact")))))), __jsx("div", {
        className: "container"
      }, "asd", __jsx("form", null, function (_ref2) {
        var validateForm = _ref2.validateForm,
            getPayload = _ref2.getPayload;
        return __jsx("form", {
          className: "board-form",
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            validateForm() && _this3.submitForm(getPayload());
          }
        }, __jsx("h2", null, "Contact"), __jsx("div", {
          className: "f fw grid-row--s"
        }, __jsx("div", {
          className: "mb1 pb05"
        }, __jsx(Input, {
          name: "name",
          label: "Name",
          required: true
        })), __jsx("div", {
          className: "mb1 pb05"
        }, __jsx(Input, {
          name: "email",
          label: "Email",
          required: true
        }))), __jsx(ProgressButton, {
          className: "button green",
          formNoValidate: true,
          inProgress: _this3.state.submitting,
          inProgressText: "Submitting",
          isDone: _this3.state.submitted,
          isDoneText: "Submitted"
        }, "Submit Form"));
      }), __jsx("p", null, "This is the ", __jsx("b", null, "Contact"), " page"), __jsx("div", {
        style: {
          height: '200px',
          width: '100%'
        }
      }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_10___default.a, {
        bootstrapURLKeys: {
          key: this.props.api
        },
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom
      }, __jsx(AnyReactComponent, {
        lat: 59.955413,
        lng: 30.337844,
        text: "My Marker"
      }))), "test2"));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Contact, "defaultProps", {
  api: 'AIzaSyCkb7vvU9U7_uvJxXdADV4P1BMZv_6Zfas',
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
});

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.0aeacba4b8b5a1023998.hot-update.js.map