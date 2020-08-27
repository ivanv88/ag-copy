webpackHotUpdate("static/development/pages/usluge/[id].js",{

/***/ "./components/page_components/service/service.js":
/*!*******************************************************!*\
  !*** ./components/page_components/service/service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_colorcontext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/colorcontext */ "./components/context/colorcontext.js");
/* harmony import */ var _data_services_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/services.json */ "./components/data/services.json");
var _data_services_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/services.json */ "./components/data/services.json", 1);


var _tableDataStyle,
    _jsxFileName = "/home/ivan/Projects/ag-copy/components/page_components/service/service.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var tableStyle = {
  padding: "1rem 0",
  borderTop: "1px solid #b2b2b2",
  marginTop: "4rem"
};
var tableTitleStyle = {
  fontFamily: "'Poppins', sans-serif",
  color: "#333333",
  fontSize: "1.2rem",
  textAlign: "center",
  letterSpacing: "3px",
  padding: "2rem 0 1rem 0",
  textTransform: "uppercase"
};
var titleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: "600",
  fontStyle: "italic",
  color: "#333333",
  fontSize: "3rem",
  textAlign: "center",
  letterSpacing: "2px",
  padding: "0 0 1rem 0"
};
var tableDataStyle = (_tableDataStyle = {
  fontFamily: "'Poppins', sans-serif",
  color: "#333333",
  fontSize: "1.2rem",
  textTransform: "uppercase"
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tableDataStyle, "color", "#333333"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tableDataStyle, "letterSpacing", "1px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tableDataStyle, "padding", "1rem 0 .4rem 1rem"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tableDataStyle, "borderBottom", "1px solid #b2b2b2"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_tableDataStyle, "wordBreak", "break-word"), _tableDataStyle);
var paragraphStyle = {
  width: "80%",
  margin: "0 auto",
  textAlign: "center",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "1.2rem",
  color: "#333333"
};
var tableNoteStyle = {
  fontFamily: "'Playfair Display', serif",
  color: "#333333",
  fontStyle: "italic"
};

var build = function build(body) {
  var bodyArray = [];

  if (body !== undefined && body !== null) {
    for (var i = 0; i < body.length; i++) {
      if (body[i].type === "p") {
        bodyArray.push(__jsx("div", {
          key: i * 789,
          style: paragraphStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("p", {
          key: i * 89,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, body[i].content)));
      }

      if (body[i].type === "h2") {
        bodyArray.push(__jsx("div", {
          key: i * 66,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, __jsx("h2", {
          style: titleStyle,
          key: i * 99,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, body[i].content)));
      }

      if (body[i].type === "h3") {
        bodyArray.push(__jsx("div", {
          key: i * 55,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, __jsx("h2", {
          style: tableTitleStyle,
          key: i * 97,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, body[i].content)));
      }

      if (body[i].type === "t") {
        bodyArray.push(__jsx("div", {
          className: "table",
          key: i * 71,
          style: tableStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("div", {
          key: i,
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(" + body[i].meta.width + ", 1fr)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("div", {
          className: "tableTitle",
          style: {
            gridColumn: "span " + body[i].meta.width
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("h2", {
          style: tableTitleStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, body[i].meta.title)), body[i].content.map(function (value, i) {
          return __jsx("div", {
            key: i * 77,
            style: tableDataStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, value);
        })), __jsx("div", {
          style: tableNoteStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, body[i].meta.note))));
      }
    }

    return bodyArray;
  } else return null;
};

var buildTables = function buildTables(tables) {
  var tablesArray = [];

  if (tables !== undefined) {
    for (var i = 0; i < tables.lenght; i++) {
      if (tables[i].type === "p") {
        tables.push(__jsx("p", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, content[i].content));
      }
    }

    return tablesArray;
  } else return null;
};

var Service = function Service() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_colorcontext__WEBPACK_IMPORTED_MODULE_4__["ColorContext"]),
      color = _useContext.color;

  var data = _data_services_json__WEBPACK_IMPORTED_MODULE_5__;
  var title = data[router.query.id] !== undefined ? data[router.query.id].title : null;
  var coverImage = data[router.query.id] !== undefined ? data[router.query.id].coverImage : null;
  var body = build(data[router.query.id] !== undefined ? data[router.query.id].body : null);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4153237158", [color, coverImage]]]) + " " + "serviceWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4153237158", [color, coverImage]]]) + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4153237158", [color, coverImage]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4153237158", [color, coverImage]]]) + " " + "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4153237158", [color, coverImage]]]) + " " + "coverImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4153237158", [color, coverImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, title), body)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4153237158",
    dynamic: [color, coverImage],
    __self: this
  }, ".spacer.__jsx-style-dynamic-selector{width:15vw;min-height:100vh;min-width:250px;}.serviceWrapper.__jsx-style-dynamic-selector{width:100%;height:100%;background-color:".concat(color, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:130px 0 0 0;}.container.__jsx-style-dynamic-selector{width:calc(100% - 15vw);min-width:calc(100% - 250px);}.container.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-align:center;}.service.__jsx-style-dynamic-selector{width:80%;min-width:500px;max-width:1000px;margin:0 auto;}.service.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-family:'Playfair Display',serif;font-weight:600;font-style:italic;color:#333333;font-size:3rem;text-align:center;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:0 0 1rem 0;}.coverImage.__jsx-style-dynamic-selector{height:20vw;width:100%;background-image:url('").concat(coverImage, "');background-size:cover;background-position:center;}@media(max-width:760px){.spacer.__jsx-style-dynamic-selector{display:none;}.container.__jsx-style-dynamic-selector{width:100%;}.service.__jsx-style-dynamic-selector{width:95%;min-width:0;}.coverImage.__jsx-style-dynamic-selector{height:250px;}.serviceWrapper.__jsx-style-dynamic-selector{padding-top:70px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l2YW4vUHJvamVjdHMvYWctY29weS9jb21wb25lbnRzL3BhZ2VfY29tcG9uZW50cy9zZXJ2aWNlL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElnQixBQUd3QixBQUtBLEFBT2EsQUFJTixBQUdSLEFBTTRCLEFBVTFCLEFBUUssQUFHRixBQUdELEFBSUcsQUFHSSxVQXBDTCxBQThCQSxDQWpEQyxBQUtMLEFBeUNaLENBWFcsQ0FRWCxBQVVBLElBR0EsQ0F4Q0osSUFrQ0ksQ0E1QzhDLEFBOEJPLENBeEJ4QixFQVFaLEVBbkJELFNBd0JBLE1BSkYsQ0FuQmxCLFNBV0EsQUFhc0IsSUFKdEIsWUFmaUIsRUFvQkMsS0FVUSxTQVRQLGFBVVksRUFUVCxrQkFDQyxPQVN2QixrQkEvQndCLG9CQUN4QixnREFzQnVCLG1CQUN2QiIsImZpbGUiOiIvaG9tZS9pdmFuL1Byb2plY3RzL2FnLWNvcHkvY29tcG9uZW50cy9wYWdlX2NvbXBvbmVudHMvc2VydmljZS9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ29sb3JDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb2xvcmNvbnRleHQnXG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi9kYXRhL3NlcnZpY2VzLmpzb24nXG5cblxuY29uc3QgdGFibGVTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBcIjFyZW0gMFwiLFxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgI2IyYjJiMlwiLFxuICAgIG1hcmdpblRvcDogXCI0cmVtXCJcbn1cblxuY29uc3QgdGFibGVUaXRsZVN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6IFwiJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjNweFwiLFxuICAgIHBhZGRpbmc6IFwiMnJlbSAwIDFyZW0gMFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbn1cblxuY29uc3QgdGl0bGVTdHlsZSA9IHtcbiAgICBmb250RmFtaWx5OiBcIidQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWZcIixcbiAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgZm9udFNpemU6IFwiM3JlbVwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjJweFwiLFxuICAgIHBhZGRpbmc6IFwiMCAwIDFyZW0gMFwiLFxufVxuXG5jb25zdCB0YWJsZURhdGFTdHlsZSA9IHtcbiAgICBmb250RmFtaWx5OiBcIidQb3BwaW5zJywgc2Fucy1zZXJpZlwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjFweFwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbSAwIC40cmVtIDFyZW1cIixcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNiMmIyYjJcIixcbiAgICB3b3JkQnJlYWs6IFwiYnJlYWstd29yZFwiXG59XG5cbmNvbnN0IHBhcmFncmFwaFN0eWxlID0ge1xuICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udEZhbWlseTogXCInUG9wcGlucycsIHNhbnMtc2VyaWZcIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG59XG5cbmNvbnN0IHRhYmxlTm90ZVN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6IFwiJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZlwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbn1cblxuY29uc3QgYnVpbGQgPSAoYm9keSkgPT4ge1xuICAgIGxldCBib2R5QXJyYXkgPSBbXTtcbiAgICBpZigoYm9keSAhPT0gdW5kZWZpbmVkKSAmJiAoYm9keSAhPT0gbnVsbCkpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGJvZHlbaV0udHlwZSA9PT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBib2R5QXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17IGkgKiA3ODkgfSBzdHlsZT17IHBhcmFncmFwaFN0eWxlIH0+ICAgIFxuICAgICAgICAgICAgICAgICAgICA8cCBrZXk9eyBpICogODl9PnsgYm9keVtpXS5jb250ZW50IH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmKGJvZHlbaV0udHlwZSA9PT0gXCJoMlwiKSB7XG4gICAgICAgICAgICAgICAgYm9keUFycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpICogNjYgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXsgdGl0bGVTdHlsZSB9IGtleT17IGkgKiA5OX0+eyBib2R5W2ldLmNvbnRlbnQgfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmKGJvZHlbaV0udHlwZSA9PT0gXCJoM1wiKSB7XG4gICAgICAgICAgICAgICAgYm9keUFycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpICogNTUgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXsgdGFibGVUaXRsZVN0eWxlIH0ga2V5PXsgaSAqIDk3IH0+eyBib2R5W2ldLmNvbnRlbnQgfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmKGJvZHlbaV0udHlwZSA9PT0gXCJ0XCIpIHtcbiAgICAgICAgICAgICAgICBib2R5QXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFwidGFibGVcIiB9IGtleT17IGkgKiA3MSB9IHN0eWxlPXsgdGFibGVTdHlsZSB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdChcIiArIGJvZHlbaV0ubWV0YS53aWR0aCArIFwiLCAxZnIpXCIgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVRpdGxlXCIgc3R5bGU9e3sgZ3JpZENvbHVtbjogXCJzcGFuIFwiICsgYm9keVtpXS5tZXRhLndpZHRoIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17IHRhYmxlVGl0bGVTdHlsZSB9ID57IGJvZHlbaV0ubWV0YS50aXRsZSB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBib2R5W2ldLmNvbnRlbnQubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsgaSAqIDc3IH0gc3R5bGU9eyB0YWJsZURhdGFTdHlsZSB9PnsgdmFsdWUgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgdGFibGVOb3RlU3R5bGUgfSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPntib2R5W2ldLm1ldGEubm90ZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvZHlBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG59XG5jb25zdCBidWlsZFRhYmxlcyA9ICh0YWJsZXMpID0+IHtcbiAgICBsZXQgdGFibGVzQXJyYXkgPSBbXTtcbiAgICBpZih0YWJsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFibGVzLmxlbmdodDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0YWJsZXNbaV0udHlwZSA9PT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICB0YWJsZXMucHVzaCg8cCBrZXk9e2l9PnsgY29udGVudFtpXS5jb250ZW50IH08L3A+KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFibGVzQXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBTZXJ2aWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHVzZUNvbnRleHQoQ29sb3JDb250ZXh0KTtcbiAgICBjb25zdCBkYXRhID0gRGF0YTtcbiAgICBjb25zdCB0aXRsZSA9IGRhdGFbcm91dGVyLnF1ZXJ5LmlkXSAhPT0gdW5kZWZpbmVkID8gZGF0YVtyb3V0ZXIucXVlcnkuaWRdLnRpdGxlIDogbnVsbDtcbiAgICBjb25zdCBjb3ZlckltYWdlID0gZGF0YVtyb3V0ZXIucXVlcnkuaWRdICE9PSB1bmRlZmluZWQgPyBkYXRhW3JvdXRlci5xdWVyeS5pZF0uY292ZXJJbWFnZSA6IG51bGw7XG4gICAgY29uc3QgYm9keSA9IGJ1aWxkKGRhdGFbcm91dGVyLnF1ZXJ5LmlkXSAhPT0gdW5kZWZpbmVkID8gZGF0YVtyb3V0ZXIucXVlcnkuaWRdLmJvZHkgOiBudWxsKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZVdyYXBwZXJcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlXCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVySW1hZ2VcIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgeyBib2R5IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZXJ2aWNlV3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzMHB4IDAgMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1dncpO1xuICAgICAgICAgICAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciBoMSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNlcnZpY2Uge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5zZXJ2aWNlIGgxIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvdmVySW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHZ3O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7IGNvdmVySW1hZ2UgfScpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjBweCkge1xuICAgICAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdmVySW1hZ2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZVdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2UiXX0= */\n/*@ sourceURL=/home/ivan/Projects/ag-copy/components/page_components/service/service.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ })

})
//# sourceMappingURL=[id].js.9084db0e50ffea1ba845.hot-update.js.map