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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1771949629", [color]]]) + " " + " ".concat(_servicenav_scss__WEBPACK_IMPORTED_MODULE_6___default.a.navWrapper, " ").concat(!isOpen ? 'openDrawer' : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1771949629", [color]]]) + " " + (_servicenav_scss__WEBPACK_IMPORTED_MODULE_6___default.a.navSpacer || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1771949629", [color]]]) + " " + (_servicenav_scss__WEBPACK_IMPORTED_MODULE_6___default.a.nav || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _data_serviceroutes__WEBPACK_IMPORTED_MODULE_2__["routes"].map(function (v, i) {
    return __jsx("li", {
      key: i * 32,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1771949629", [color]]]) + " " + ((active == i ? "activeLink" : "") || ""),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1771949629", [color]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1771949629", [color]]]) + " " + "drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "USLUGE")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1771949629",
    dynamic: [color],
    __self: this
  }, "ul.__jsx-style-dynamic-selector{background-color:".concat(color, ";}.activeLink.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#d03b28;}.drawer.__jsx-style-dynamic-selector{border-top:1px solid #b2b2b2;cursor:pointer;color:#333333;font-size:18px;padding-top:29px;padding-bottom:20px;margin-top:12px;}.openDrawer.__jsx-style-dynamic-selector{-webkit-transform:translateY(-315px);-ms-transform:translateY(-315px);transform:translateY(-315px);}@media(min-width:761px){.drawer.__jsx-style-dynamic-selector{display:none;}.openDrawer.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l2YW4vUHJvamVjdHMvYWctY29weS9jb21wb25lbnRzL2NvbW1vbl9jb21wb25lbnRzL3NlcnZpY2VuYXYvc2VydmljZW5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCLEFBR3VFLEFBR2hDLEFBR2UsQUFTQSxBQUlaLEFBR1csYUFGNUIsQ0FoQkosZUFHa0IsZUFDQSxFQVBsQixZQVFtQixlQUNFLFdBYWpCLE1BWm9CLFNBS3hCLFdBSm9CLGdCQUNwQiIsImZpbGUiOiIvaG9tZS9pdmFuL1Byb2plY3RzL2FnLWNvcHkvY29tcG9uZW50cy9jb21tb25fY29tcG9uZW50cy9zZXJ2aWNlbmF2L3NlcnZpY2VuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJvdXRlcywgbGlua3MgfSBmcm9tICcuLi8uLi9kYXRhL3NlcnZpY2Vyb3V0ZXMnXG5pbXBvcnQgeyBDb2xvckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NvbG9yY29udGV4dCdcbmltcG9ydCB7IFNlcnZpY2VOYXZDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9zZXJ2aWNlbmF2Y29udGV4dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zZXJ2aWNlbmF2LnNjc3MnXG5cbmNvbnN0IFNlcnZpY2VOYXYgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB7IGNvbG9yLCBzZXRDb2xvciB9ID0gdXNlQ29udGV4dChDb2xvckNvbnRleHQpO1xuICAgIGNvbnN0IHsgYWN0aXZlLCBzZXRBY3RpdmUgfSA9IHVzZUNvbnRleHQoU2VydmljZU5hdkNvbnRleHQpO1xuICAgIGNvbnN0IFsgaXNPcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCAkeyBzdHlsZXMubmF2V3JhcHBlciB9ICR7ICFpc09wZW4gPyAnb3BlbkRyYXdlcicgOiBcIlwifWB9ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLm5hdlNwYWNlciB9ID48L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9eyBzdHlsZXMubmF2IH0gPlxuICAgICAgICAgICAgICAgIHtyb3V0ZXMubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17IGkgKiAzMiB9IGNsYXNzTmFtZT17IGFjdGl2ZSA9PSBpID8gXCJhY3RpdmVMaW5rXCIgOiBcIlwiIH0gPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzbHVnZS9baWRdXCIgYXM9e2AvdXNsdWdlLyR7IHYgfWB9ICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsgKCkgPT4ge3NldENvbG9yKGxpbmtzW2ldLmNvbG9yKTsgc2V0QWN0aXZlKGkpOyBzZXRPcGVuKCFpc09wZW4pIH0gfSA+e2xpbmtzW2ldLmxpbmt9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wiZHJhd2VyXCJ9IG9uQ2xpY2s9eyAoKSA9PiBzZXRPcGVuKCFpc09wZW4pIH0gPlVTTFVHRTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZUxpbmsgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2QwM2IyODtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZHJhd2VyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjJiMmIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5vcGVuRHJhd2VyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzE1cHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2MXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJhd2VyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm9wZW5EcmF3ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTmF2XG4iXX0= */\n/*@ sourceURL=/home/ivan/Projects/ag-copy/components/common_components/servicenav/servicenav.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceNav);

/***/ })

})
//# sourceMappingURL=[id].js.8465c143e018b565942c.hot-update.js.map