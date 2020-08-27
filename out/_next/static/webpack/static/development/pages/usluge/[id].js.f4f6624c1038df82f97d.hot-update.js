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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3585865220", [color, coverImage]]]) + " " + "serviceWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3585865220", [color, coverImage]]]) + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3585865220", [color, coverImage]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3585865220", [color, coverImage]]]) + " " + "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3585865220", [color, coverImage]]]) + " " + "coverImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3585865220", [color, coverImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, title), body)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3585865220",
    dynamic: [color, coverImage],
    __self: this
  }, ".spacer.__jsx-style-dynamic-selector{width:15vw;min-height:100vh;min-width:250px;}.serviceWrapper.__jsx-style-dynamic-selector{width:100%;height:100%;background-color:".concat(color, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:130px 0 0 0;}.container.__jsx-style-dynamic-selector{width:calc(100% - 15vw);min-width:calc(100% - 250px);}.container.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-align:center;}.service.__jsx-style-dynamic-selector{width:80%;min-width:500px;max-width:1000px;margin:0 auto;}.service.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-family:'Playfair Display',serif;font-weight:600;font-style:italic;color:#333333;font-size:3rem;text-align:center;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:0 0 1rem 0;}.coverImage.__jsx-style-dynamic-selector{height:20vw;width:100%;background-image:url('").concat(coverImage, "');background-size:cover;background-position:center;}@media(max-width:760px){.spacer.__jsx-style-dynamic-selector{display:none;}.container.__jsx-style-dynamic-selector{width:100%;}.service.__jsx-style-dynamic-selector{width:95%;min-width:0;}.coverImage.__jsx-style-dynamic-selector{height:250px;}.serviceWrapper.__jsx-style-dynamic-selector{padding-top:70px;}.tableData{font-size:1rem!important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l2YW4vUHJvamVjdHMvYWctY29weS9jb21wb25lbnRzL3BhZ2VfY29tcG9uZW50cy9zZXJ2aWNlL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElnQixBQUd3QixBQUtBLEFBT2EsQUFJTixBQUdSLEFBTTRCLEFBVTFCLEFBUUssQUFHRixBQUdELEFBSUcsQUFHSSxBQUdRLFVBdkNiLEFBOEJBLENBakRDLEFBS0wsQUF5Q1osQ0FYVyxDQVFYLEFBVUEsSUFHQSxDQXhDSixJQWtDSSxDQTVDOEMsQUE4Qk8sQ0F4QnhCLENBK0M3QixDQXZDaUIsRUFuQkQsU0F3QkEsTUFKRixDQW5CbEIsU0FXQSxBQWFzQixJQUp0QixZQWZpQixFQW9CQyxLQVVRLFNBVFAsYUFVWSxFQVRULGtCQUNDLE9BU3ZCLGtCQS9Cd0Isb0JBQ3hCLGdEQXNCdUIsbUJBQ3ZCIiwiZmlsZSI6Ii9ob21lL2l2YW4vUHJvamVjdHMvYWctY29weS9jb21wb25lbnRzL3BhZ2VfY29tcG9uZW50cy9zZXJ2aWNlL3NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBDb2xvckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NvbG9yY29udGV4dCdcbmltcG9ydCBEYXRhIGZyb20gJy4uLy4uL2RhdGEvc2VydmljZXMuanNvbidcblxuXG5jb25zdCB0YWJsZVN0eWxlID0ge1xuICAgIHBhZGRpbmc6IFwiMXJlbSAwXCIsXG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjYjJiMmIyXCIsXG4gICAgbWFyZ2luVG9wOiBcIjRyZW1cIlxufVxuXG5jb25zdCB0YWJsZVRpdGxlU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogXCInUG9wcGlucycsIHNhbnMtc2VyaWZcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwiM3B4XCIsXG4gICAgcGFkZGluZzogXCIycmVtIDAgMXJlbSAwXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIlxufVxuXG5jb25zdCB0aXRsZVN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6IFwiJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZlwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBmb250U2l6ZTogXCIzcmVtXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwiMnB4XCIsXG4gICAgcGFkZGluZzogXCIwIDAgMXJlbSAwXCIsXG59XG5cbmNvbnN0IHRhYmxlRGF0YVN0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6IFwiJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIGxldHRlclNwYWNpbmc6IFwiMXB4XCIsXG4gICAgcGFkZGluZzogXCIxcmVtIDAgLjRyZW0gMXJlbVwiLFxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2IyYjJiMlwiLFxuICAgIHdvcmRCcmVhazogXCJicmVhay13b3JkXCJcbn1cblxuY29uc3QgcGFyYWdyYXBoU3R5bGUgPSB7XG4gICAgd2lkdGg6IFwiODAlXCIsXG4gICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250RmFtaWx5OiBcIidQb3BwaW5zJywgc2Fucy1zZXJpZlwiLFxuICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbn1cblxuY29uc3QgdGFibGVOb3RlU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogXCInUGxheWZhaXIgRGlzcGxheScsIHNlcmlmXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxufVxuXG5jb25zdCBidWlsZCA9IChib2R5KSA9PiB7XG4gICAgbGV0IGJvZHlBcnJheSA9IFtdO1xuICAgIGlmKChib2R5ICE9PSB1bmRlZmluZWQpICYmIChib2R5ICE9PSBudWxsKSkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoYm9keVtpXS50eXBlID09PSBcInBcIikge1xuICAgICAgICAgICAgICAgIGJvZHlBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsgaSAqIDc4OSB9IHN0eWxlPXsgcGFyYWdyYXBoU3R5bGUgfT4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxwIGtleT17IGkgKiA4OX0+eyBib2R5W2ldLmNvbnRlbnQgfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYoYm9keVtpXS50eXBlID09PSBcImgyXCIpIHtcbiAgICAgICAgICAgICAgICBib2R5QXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17IGkgKiA2NiB9PlxuICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9eyB0aXRsZVN0eWxlIH0ga2V5PXsgaSAqIDk5fT57IGJvZHlbaV0uY29udGVudCB9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYoYm9keVtpXS50eXBlID09PSBcImgzXCIpIHtcbiAgICAgICAgICAgICAgICBib2R5QXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17IGkgKiA1NSB9PlxuICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9eyB0YWJsZVRpdGxlU3R5bGUgfSBrZXk9eyBpICogOTcgfT57IGJvZHlbaV0uY29udGVudCB9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYoYm9keVtpXS50eXBlID09PSBcInRcIikge1xuICAgICAgICAgICAgICAgIGJvZHlBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsgaSAqIDcxIH0gc3R5bGU9eyB0YWJsZVN0eWxlIH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KFwiICsgYm9keVtpXS5tZXRhLndpZHRoICsgXCIsIDFmcilcIiAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlVGl0bGVcIiBzdHlsZT17eyBncmlkQ29sdW1uOiBcInNwYW4gXCIgKyBib2R5W2ldLm1ldGEud2lkdGggfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXsgdGFibGVUaXRsZVN0eWxlIH0gPnsgYm9keVtpXS5tZXRhLnRpdGxlIH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJvZHlbaV0uY29udGVudC5tYXAoKHZhbHVlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXsgXCJ0YWJsZURhdGFcIiB9IGtleT17IGkgKiA3NyB9IHN0eWxlPXsgdGFibGVEYXRhU3R5bGUgfT57IHZhbHVlIH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17IHRhYmxlTm90ZVN0eWxlIH0gPlxuICAgICAgICAgICAgICAgICAgICA8cD57Ym9keVtpXS5tZXRhLm5vdGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2R5QXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiBudWxsO1xufVxuY29uc3QgYnVpbGRUYWJsZXMgPSAodGFibGVzKSA9PiB7XG4gICAgbGV0IHRhYmxlc0FycmF5ID0gW107XG4gICAgaWYodGFibGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhYmxlcy5sZW5naHQ7IGkrKykge1xuICAgICAgICAgICAgaWYodGFibGVzW2ldLnR5cGUgPT09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgdGFibGVzLnB1c2goPHAga2V5PXtpfT57IGNvbnRlbnRbaV0uY29udGVudCB9PC9wPilcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhYmxlc0FycmF5O1xuICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgU2VydmljZSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGNvbG9yIH0gPSB1c2VDb250ZXh0KENvbG9yQ29udGV4dCk7XG4gICAgY29uc3QgZGF0YSA9IERhdGE7XG4gICAgY29uc3QgdGl0bGUgPSBkYXRhW3JvdXRlci5xdWVyeS5pZF0gIT09IHVuZGVmaW5lZCA/IGRhdGFbcm91dGVyLnF1ZXJ5LmlkXS50aXRsZSA6IG51bGw7XG4gICAgY29uc3QgY292ZXJJbWFnZSA9IGRhdGFbcm91dGVyLnF1ZXJ5LmlkXSAhPT0gdW5kZWZpbmVkID8gZGF0YVtyb3V0ZXIucXVlcnkuaWRdLmNvdmVySW1hZ2UgOiBudWxsO1xuICAgIGNvbnN0IGJvZHkgPSBidWlsZChkYXRhW3JvdXRlci5xdWVyeS5pZF0gIT09IHVuZGVmaW5lZCA/IGRhdGFbcm91dGVyLnF1ZXJ5LmlkXS5ib2R5IDogbnVsbCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VXcmFwcGVyXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiA+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZVwiID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlckltYWdlXCIgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIHsgYm9keSB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VydmljZVdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMzBweCAwIDAgMDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXZ3KTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIgaDEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zZXJ2aWNlIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc2VydmljZSBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMXJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb3ZlckltYWdlIHtcbiAgICAgICAgICAgIGhlaWdodDogMjB2dztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckeyBjb3ZlckltYWdlIH0nKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICAgICAgICAgIC5zcGFjZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb3ZlckltYWdlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2VXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDpnbG9iYWwoLnRhYmxlRGF0YSkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZSJdfQ== */\n/*@ sourceURL=/home/ivan/Projects/ag-copy/components/page_components/service/service.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ })

})
//# sourceMappingURL=[id].js.f4f6624c1038df82f97d.hot-update.js.map