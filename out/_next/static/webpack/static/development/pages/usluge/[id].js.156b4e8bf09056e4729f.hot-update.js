webpackHotUpdate("static/development/pages/usluge/[id].js",{

/***/ "./components/common_components/navigation/navigation.js":
/*!***************************************************************!*\
  !*** ./components/common_components/navigation/navigation.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.scss */ "./components/common_components/navigation/navigation.scss");
/* harmony import */ var _navigation_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_navigation_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/ivan/Projects/ag-copy/components/common_components/navigation/navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Navigation = function Navigation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var links = ["Početna", "Usluge", "O nama", "Kontakt"];
  var hrefs = links.map(function (value) {
    if (value.indexOf(" ") >= 0) {
      return "/" + value.replace(/ /, "-").toLocaleLowerCase();
    } else if (value.toLocaleLowerCase() === "početna") {
      return "/";
    } else if (value.toLocaleLowerCase() === "usluge") {
      return "/usluge/štampanje-kopiranje-i-skeniranje";
    } else {
      return "/" + value.toLocaleLowerCase();
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: "jsx-3310031619" + " " + " ".concat(_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.overlay, " ").concat(open ? "overlayOpen" : "overlayClosed"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3310031619" + " " + " ".concat(_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.verticalNavbarWrapper, " ").concat(open ? "menuOpen" : "menuClosed"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuButton || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.topSpan || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bottomSpan || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bottomSpan || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.verticalNavbarContainer || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logo || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "AG Copy"), __jsx("div", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuWrapper || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menuContainer || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.links || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, links.map(function (val, i) {
    return __jsx("li", {
      key: val,
      className: "jsx-3310031619",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, val === 'Usluge' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/usluge/[id]",
      as: hrefs[i],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, val)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: hrefs[i],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, val)));
  })))), __jsx("div", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.address || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icons || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    href: "",
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3310031619" + " " + "".concat(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fab, " ").concat(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a['fa-facebook']),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), __jsx("li", {
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("a", {
    href: "https://instagram.com/a.g.copy?igshid=e8ekgkvg6h2l",
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3310031619" + " " + "".concat(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fab, " ").concat(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a['fa-instagram']),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), __jsx("li", {
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    href: "https://goo.gl/maps/NX64qxvgth81Qw7x5",
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3310031619" + " " + "".concat(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fas, " ").concat(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a['fa-map-marked-alt']),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })))), __jsx("ul", {
    className: "jsx-3310031619" + " " + (_navigation_scss__WEBPACK_IMPORTED_MODULE_3___default.a.info || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Bulevar Despota Stefana 68a (U Pasa\u017Eu)"), __jsx("li", {
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "011/ 3294 756"), __jsx("li", {
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "066/ 5000 456"), __jsx("li", {
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:kopirnica.ag@gmail.com",
    className: "jsx-3310031619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "kopirnica.ag@gmail.com")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3310031619",
    __self: this
  }, ".menuOpen.jsx-3310031619,.menuClosed.jsx-3310031619{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.overlayOpen.jsx-3310031619,.overlayClosed.jsx-3310031619{display:none;}@media(max-width:760px){.menuOpen.jsx-3310031619{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.menuClosed.jsx-3310031619{-webkit-transform:translateX(-250px);-ms-transform:translateX(-250px);transform:translateX(-250px);}.overlayOpen.jsx-3310031619{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l2YW4vUHJvamVjdHMvYWctY29weS9jb21wb25lbnRzL2NvbW1vbl9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CLEFBR3lDLEFBR1gsQUFJZSxBQUdLLEFBR2YsYUFUdEIsQ0FVSSxzRUFiSixBQU9JLGVBR0EiLCJmaWxlIjoiL2hvbWUvaXZhbi9Qcm9qZWN0cy9hZy1jb3B5L2NvbXBvbmVudHMvY29tbW9uX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi5zY3NzJ1xuaW1wb3J0IGljb25zIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvc3R5bGVzLnNjc3NcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbGlua3MgPSBbIFwiUG/EjWV0bmFcIiwgXCJVc2x1Z2VcIiAsXCJPIG5hbWFcIiwgXCJLb250YWt0XCIgXTtcbiAgICBjb25zdCBocmVmcyA9IGxpbmtzLm1hcCggdmFsdWUgID0+IHtcbiAgICAgICAgaWYodmFsdWUuaW5kZXhPZihcIiBcIikgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiL1wiICsgdmFsdWUucmVwbGFjZSgvIC8sIFwiLVwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IFwicG/EjWV0bmFcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiL1wiXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gXCJ1c2x1Z2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiL3VzbHVnZS/FoXRhbXBhbmplLWtvcGlyYW5qZS1pLXNrZW5pcmFuamVcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiL1wiICsgdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgICR7IHN0eWxlcy5vdmVybGF5IH0gJHsgb3BlbiA/ICBcIm92ZXJsYXlPcGVuXCIgOiBcIm92ZXJsYXlDbG9zZWRcIiB9YH0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCAkeyBzdHlsZXMudmVydGljYWxOYXZiYXJXcmFwcGVyIH0gJHsgb3BlbiA/ICBcIm1lbnVPcGVuXCIgOiBcIm1lbnVDbG9zZWRcIiB9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5tZW51QnV0dG9uIH0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9ID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBzdHlsZXMudG9wU3BhbiB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBzdHlsZXMuYm90dG9tU3BhbiB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBzdHlsZXMuYm90dG9tU3BhbiB9Pjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudmVydGljYWxOYXZiYXJDb250YWluZXIgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5sb2dvIH0+QUcgQ29weTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLm1lbnVXcmFwcGVyIH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLm1lbnVDb250YWluZXIgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9eyBzdHlsZXMubGlua3MgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxpbmtzLm1hcCgodmFsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17IHZhbCB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsID09PSAnVXNsdWdlJyA/ICg8TGluayBocmVmPScvdXNsdWdlL1tpZF0nIGFzPXtocmVmc1tpXX0+PGEgY2xhc3NOYW1lPXsgc3R5bGVzLmxpbmsgfSA+eyB2YWwgfTwvYT48L0xpbms+KSA6ICg8TGluayBocmVmPXsgaHJlZnNbaV0gfT48YSBjbGFzc05hbWU9eyBzdHlsZXMubGluayB9ID57IHZhbCB9PC9hPjwvTGluaz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5hZGRyZXNzIH0+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9JycgPjxpIGNsYXNzTmFtZT17YCR7aWNvbnMuZmFifSAke2ljb25zWydmYS1mYWNlYm9vayddfWB9PjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSdodHRwczovL2luc3RhZ3JhbS5jb20vYS5nLmNvcHk/aWdzaGlkPWU4ZWtna3ZnNmgybCcgPjxpIGNsYXNzTmFtZT17YCR7aWNvbnMuZmFifSAke2ljb25zWydmYS1pbnN0YWdyYW0nXX1gfT48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cHM6Ly9nb28uZ2wvbWFwcy9OWDY0cXh2Z3RoODFRdzd4NScgPjxpIGNsYXNzTmFtZT17YCR7aWNvbnMuZmFzfSAke2ljb25zWydmYS1tYXAtbWFya2VkLWFsdCddfWB9PjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17IHN0eWxlcy5pbmZvIH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJ1bGV2YXIgRGVzcG90YSBTdGVmYW5hIDY4YSAoVSBQYXNhxb51KTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MDExLyAzMjk0IDc1NjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MDY2LyA1MDAwIDQ1NjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIm1haWx0bzprb3Bpcm5pY2EuYWdAZ21haWwuY29tXCI+a29waXJuaWNhLmFnQGdtYWlsLmNvbTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWVudU9wZW4sIC5tZW51Q2xvc2VkIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3ZlcmxheU9wZW4sIC5vdmVybGF5Q2xvc2VkIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICAgICAgICAgICAgICAubWVudU9wZW4ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZW51Q2xvc2VkIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdmVybGF5T3BlbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG4iXX0= */\n/*@ sourceURL=/home/ivan/Projects/ag-copy/components/common_components/navigation/navigation.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=[id].js.156b4e8bf09056e4729f.hot-update.js.map