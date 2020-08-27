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
            className: "tableData",
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
  }, ".spacer.__jsx-style-dynamic-selector{width:15vw;min-height:100vh;min-width:250px;}.serviceWrapper.__jsx-style-dynamic-selector{width:100%;height:100%;background-color:".concat(color, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:130px 0 0 0;}.container.__jsx-style-dynamic-selector{width:calc(100% - 15vw);min-width:calc(100% - 250px);}.container.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-align:center;}.service.__jsx-style-dynamic-selector{width:80%;min-width:500px;max-width:1000px;margin:0 auto;}.service.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-family:'Playfair Display',serif;font-weight:600;font-style:italic;color:#333333;font-size:3rem;text-align:center;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:0 0 1rem 0;}.coverImage.__jsx-style-dynamic-selector{height:20vw;width:100%;background-image:url('").concat(coverImage, "');background-size:cover;background-position:center;}@media(max-width:760px){.spacer.__jsx-style-dynamic-selector{display:none;}.container.__jsx-style-dynamic-selector{width:100%;}.service.__jsx-style-dynamic-selector{width:95%;min-width:0;}.coverImage.__jsx-style-dynamic-selector{height:250px;}.serviceWrapper.__jsx-style-dynamic-selector{padding-top:70px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l2YW4vUHJvamVjdHMvYWctY29weS9jb21wb25lbnRzL3BhZ2VfY29tcG9uZW50cy9zZXJ2aWNlL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElnQixBQUd3QixBQUtBLEFBT2EsQUFJTixBQUdSLEFBTTRCLEFBVTFCLEFBUUssQUFHRixBQUdELEFBSUcsQUFHSSxVQXBDTCxBQThCQSxDQWpEQyxBQUtMLEFBeUNaLENBWFcsQ0FRWCxBQVVBLElBR0EsQ0F4Q0osSUFrQ0ksQ0E1QzhDLEFBOEJPLENBeEJ4QixFQVFaLEVBbkJELFNBd0JBLE1BSkYsQ0FuQmxCLFNBV0EsQUFhc0IsSUFKdEIsWUFmaUIsRUFvQkMsS0FVUSxTQVRQLGFBVVksRUFUVCxrQkFDQyxPQVN2QixrQkEvQndCLG9CQUN4QixnREFzQnVCLG1CQUN2QiIsImZpbGUiOiIvaG9tZS9pdmFuL1Byb2plY3RzL2FnLWNvcHkvY29tcG9uZW50cy9wYWdlX2NvbXBvbmVudHMvc2VydmljZS9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ29sb3JDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb2xvcmNvbnRleHQnXG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi9kYXRhL3NlcnZpY2VzLmpzb24nXG5cblxuY29uc3QgdGFibGVTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBcIjFyZW0gMFwiLFxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgI2IyYjJiMlwiLFxuICAgIG1hcmdpblRvcDogXCI0cmVtXCJcbn1cblxuY29uc3QgdGFibGVUaXRsZVN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6IFwiJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjNweFwiLFxuICAgIHBhZGRpbmc6IFwiMnJlbSAwIDFyZW0gMFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbn1cblxuY29uc3QgdGl0bGVTdHlsZSA9IHtcbiAgICBmb250RmFtaWx5OiBcIidQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWZcIixcbiAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgZm9udFNpemU6IFwiM3JlbVwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjJweFwiLFxuICAgIHBhZGRpbmc6IFwiMCAwIDFyZW0gMFwiLFxufVxuXG5jb25zdCB0YWJsZURhdGFTdHlsZSA9IHtcbiAgICBmb250RmFtaWx5OiBcIidQb3BwaW5zJywgc2Fucy1zZXJpZlwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjFweFwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbSAwIC40cmVtIDFyZW1cIixcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNiMmIyYjJcIixcbiAgICB3b3JkQnJlYWs6IFwiYnJlYWstd29yZFwiXG59XG5cbmNvbnN0IHBhcmFncmFwaFN0eWxlID0ge1xuICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udEZhbWlseTogXCInUG9wcGlucycsIHNhbnMtc2VyaWZcIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG59XG5cbmNvbnN0IHRhYmxlTm90ZVN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6IFwiJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZlwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbn1cblxuY29uc3QgYnVpbGQgPSAoYm9keSkgPT4ge1xuICAgIGxldCBib2R5QXJyYXkgPSBbXTtcbiAgICBpZigoYm9keSAhPT0gdW5kZWZpbmVkKSAmJiAoYm9keSAhPT0gbnVsbCkpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGJvZHlbaV0udHlwZSA9PT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBib2R5QXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17IGkgKiA3ODkgfSBzdHlsZT17IHBhcmFncmFwaFN0eWxlIH0+ICAgIFxuICAgICAgICAgICAgICAgICAgICA8cCBrZXk9eyBpICogODl9PnsgYm9keVtpXS5jb250ZW50IH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmKGJvZHlbaV0udHlwZSA9PT0gXCJoMlwiKSB7XG4gICAgICAgICAgICAgICAgYm9keUFycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpICogNjYgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXsgdGl0bGVTdHlsZSB9IGtleT17IGkgKiA5OX0+eyBib2R5W2ldLmNvbnRlbnQgfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmKGJvZHlbaV0udHlwZSA9PT0gXCJoM1wiKSB7XG4gICAgICAgICAgICAgICAgYm9keUFycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpICogNTUgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXsgdGFibGVUaXRsZVN0eWxlIH0ga2V5PXsgaSAqIDk3IH0+eyBib2R5W2ldLmNvbnRlbnQgfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmKGJvZHlbaV0udHlwZSA9PT0gXCJ0XCIpIHtcbiAgICAgICAgICAgICAgICBib2R5QXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17IGkgKiA3MSB9IHN0eWxlPXsgdGFibGVTdHlsZSB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdChcIiArIGJvZHlbaV0ubWV0YS53aWR0aCArIFwiLCAxZnIpXCIgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVRpdGxlXCIgc3R5bGU9e3sgZ3JpZENvbHVtbjogXCJzcGFuIFwiICsgYm9keVtpXS5tZXRhLndpZHRoIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17IHRhYmxlVGl0bGVTdHlsZSB9ID57IGJvZHlbaV0ubWV0YS50aXRsZSB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBib2R5W2ldLmNvbnRlbnQubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17IFwidGFibGVEYXRhXCIgfSBrZXk9eyBpICogNzcgfSBzdHlsZT17IHRhYmxlRGF0YVN0eWxlIH0+eyB2YWx1ZSB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyB0YWJsZU5vdGVTdHlsZSB9ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2JvZHlbaV0ubWV0YS5ub3RlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9keUFycmF5O1xuICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbn1cbmNvbnN0IGJ1aWxkVGFibGVzID0gKHRhYmxlcykgPT4ge1xuICAgIGxldCB0YWJsZXNBcnJheSA9IFtdO1xuICAgIGlmKHRhYmxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YWJsZXMubGVuZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRhYmxlc1tpXS50eXBlID09PSBcInBcIikge1xuICAgICAgICAgICAgICAgIHRhYmxlcy5wdXNoKDxwIGtleT17aX0+eyBjb250ZW50W2ldLmNvbnRlbnQgfTwvcD4pXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJsZXNBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IFNlcnZpY2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBjb2xvciB9ID0gdXNlQ29udGV4dChDb2xvckNvbnRleHQpO1xuICAgIGNvbnN0IGRhdGEgPSBEYXRhO1xuICAgIGNvbnN0IHRpdGxlID0gZGF0YVtyb3V0ZXIucXVlcnkuaWRdICE9PSB1bmRlZmluZWQgPyBkYXRhW3JvdXRlci5xdWVyeS5pZF0udGl0bGUgOiBudWxsO1xuICAgIGNvbnN0IGNvdmVySW1hZ2UgPSBkYXRhW3JvdXRlci5xdWVyeS5pZF0gIT09IHVuZGVmaW5lZCA/IGRhdGFbcm91dGVyLnF1ZXJ5LmlkXS5jb3ZlckltYWdlIDogbnVsbDtcbiAgICBjb25zdCBib2R5ID0gYnVpbGQoZGF0YVtyb3V0ZXIucXVlcnkuaWRdICE9PSB1bmRlZmluZWQgPyBkYXRhW3JvdXRlci5xdWVyeS5pZF0uYm9keSA6IG51bGwpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlV3JhcHBlclwiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCIgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJJbWFnZVwiID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICB7IGJvZHkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zcGFjZXIge1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlcnZpY2VXcmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMTMwcHggMCAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTV2dyk7XG4gICAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIGgxIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc2VydmljZSB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnNlcnZpY2UgaDEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDFyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAuY292ZXJJbWFnZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwdnc7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHsgY292ZXJJbWFnZSB9Jyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY292ZXJJbWFnZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZSJdfQ== */\n/*@ sourceURL=/home/ivan/Projects/ag-copy/components/page_components/service/service.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ })

})
//# sourceMappingURL=[id].js.95943ace7046f96fc36d.hot-update.js.map