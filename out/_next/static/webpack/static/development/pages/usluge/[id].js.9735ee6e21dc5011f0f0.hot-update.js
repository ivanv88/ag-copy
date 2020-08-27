webpackHotUpdate("static/development/pages/usluge/[id].js",{

/***/ "./components/common_components/servicenav/servicenav.js":
/*!***************************************************************!*\
  !*** ./components/common_components/servicenav/servicenav.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_serviceroutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/serviceroutes */ "./components/data/serviceroutes.js");
/* harmony import */ var _context_colorcontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/colorcontext */ "./components/context/colorcontext.js");
/* harmony import */ var _context_servicenavcontext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/servicenavcontext */ "./components/context/servicenavcontext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _servicenav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicenav.scss */ "./components/common_components/servicenav/servicenav.scss");
/* harmony import */ var _servicenav_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_servicenav_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/ivan/Projects/ag-copy/components/common_components/servicenav/servicenav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var ServiceNav = function ServiceNav() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_colorcontext__WEBPACK_IMPORTED_MODULE_3__["ColorContext"]),
      color = _useContext.color,
      setColor = _useContext.setColor;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_servicenavcontext__WEBPACK_IMPORTED_MODULE_4__["ServiceNavContext"]),
      active = _useContext2.active,
      setActive = _useContext2.setActive;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4242422067", [color]]]) + " " + " ".concat(_servicenav_scss__WEBPACK_IMPORTED_MODULE_6___default.a.navWrapper, " ").concat(!isOpen ? 'openDrawer' : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4242422067", [color]]]) + " " + (_servicenav_scss__WEBPACK_IMPORTED_MODULE_6___default.a.navSpacer || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4242422067", [color]]]) + " " + (_servicenav_scss__WEBPACK_IMPORTED_MODULE_6___default.a.nav || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _data_serviceroutes__WEBPACK_IMPORTED_MODULE_2__["routes"].map(function (v, i) {
    return __jsx("li", {
      key: i * 32,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4242422067", [color]]]) + " " + ((active == i ? "activeLink" : "") || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/usluge/[id]",
      as: "/usluge/".concat(v),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        setColor(_data_serviceroutes__WEBPACK_IMPORTED_MODULE_2__["links"][i].color);
        setActive(i);
        setOpen(!isOpen);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4242422067", [color]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, _data_serviceroutes__WEBPACK_IMPORTED_MODULE_2__["links"][i].link)));
  }), __jsx("li", {
    onClick: function onClick() {
      return setOpen(!isOpen);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4242422067", [color]]]) + " " + "drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "USLUGE")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4242422067",
    dynamic: [color],
    __self: this
  }, "ul.__jsx-style-dynamic-selector{background-color:".concat(color, ";}.activeLink.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#d03b28;}.drawer.__jsx-style-dynamic-selector{border-top:1px solid #d2d2d2;cursor:pointer;color:#333333;font-size:18px;padding-top:29px;padding-bottom:20px;margin-top:12px;box-shadow:rgba(0,0,0,0.2) 0px 1px 20px 0px;}.openDrawer.__jsx-style-dynamic-selector{-webkit-transform:translateY(-315px);-ms-transform:translateY(-315px);transform:translateY(-315px);}@media(min-width:761px){.drawer.__jsx-style-dynamic-selector{display:none;}.openDrawer.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l2YW4vUHJvamVjdHMvYWctY29weS9jb21wb25lbnRzL2NvbW1vbl9jb21wb25lbnRzL3NlcnZpY2VuYXYvc2VydmljZW5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCLEFBR3VFLEFBR2hDLEFBR2UsQUFVQSxBQUlaLEFBR1csYUFGNUIsQ0FqQkosZUFHa0IsZUFDQSxFQVBsQixZQVFtQixlQUNFLFdBY2pCLE1BYm9CLFNBTXhCLFdBTG9CLGdCQUMrQiw0Q0FDbkQiLCJmaWxlIjoiL2hvbWUvaXZhbi9Qcm9qZWN0cy9hZy1jb3B5L2NvbXBvbmVudHMvY29tbW9uX2NvbXBvbmVudHMvc2VydmljZW5hdi9zZXJ2aWNlbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByb3V0ZXMsIGxpbmtzIH0gZnJvbSAnLi4vLi4vZGF0YS9zZXJ2aWNlcm91dGVzJ1xuaW1wb3J0IHsgQ29sb3JDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb2xvcmNvbnRleHQnXG5pbXBvcnQgeyBTZXJ2aWNlTmF2Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvc2VydmljZW5hdmNvbnRleHQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VydmljZW5hdi5zY3NzJ1xuXG5jb25zdCBTZXJ2aWNlTmF2ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgeyBjb2xvciwgc2V0Q29sb3IgfSA9IHVzZUNvbnRleHQoQ29sb3JDb250ZXh0KTtcbiAgICBjb25zdCB7IGFjdGl2ZSwgc2V0QWN0aXZlIH0gPSB1c2VDb250ZXh0KFNlcnZpY2VOYXZDb250ZXh0KTtcbiAgICBjb25zdCBbIGlzT3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHsgc3R5bGVzLm5hdldyYXBwZXIgfSAkeyAhaXNPcGVuID8gJ29wZW5EcmF3ZXInIDogXCJcIn1gfSA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5uYXZTcGFjZXIgfSA+PC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsgc3R5bGVzLm5hdiB9ID5cbiAgICAgICAgICAgICAgICB7cm91dGVzLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9eyBpICogMzIgfSBjbGFzc05hbWU9eyBhY3RpdmUgPT0gaSA/IFwiYWN0aXZlTGlua1wiIDogXCJcIiB9ID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2x1Z2UvW2lkXVwiIGFzPXtgL3VzbHVnZS8keyB2IH1gfSAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17ICgpID0+IHtzZXRDb2xvcihsaW5rc1tpXS5jb2xvcik7IHNldEFjdGl2ZShpKTsgc2V0T3BlbighaXNPcGVuKSB9IH0gPntsaW5rc1tpXS5saW5rfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcImRyYXdlclwifSBvbkNsaWNrPXsgKCkgPT4gc2V0T3BlbighaXNPcGVuKSB9ID5VU0xVR0U8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hY3RpdmVMaW5rIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkMDNiMjg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRyYXdlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDIwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuRHJhd2VyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzE1cHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2MXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJhd2VyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm9wZW5EcmF3ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTmF2XG4iXX0= */\n/*@ sourceURL=/home/ivan/Projects/ag-copy/components/common_components/servicenav/servicenav.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceNav);

/***/ })

})
//# sourceMappingURL=[id].js.9735ee6e21dc5011f0f0.hot-update.js.map