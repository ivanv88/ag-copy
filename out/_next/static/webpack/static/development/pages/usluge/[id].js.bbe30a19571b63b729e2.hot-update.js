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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1932127016", [color, coverImage]]]) + " " + "serviceWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1932127016", [color, coverImage]]]) + " " + "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1932127016", [color, coverImage]]]) + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1932127016", [color, coverImage]]]) + " " + "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1932127016", [color, coverImage]]]) + " " + "coverImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1932127016", [color, coverImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, title), body)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1932127016",
    dynamic: [color, coverImage],
    __self: this
  }, ".spacer.__jsx-style-dynamic-selector{width:15vw;min-height:100vh;min-width:250px;}.serviceWrapper.__jsx-style-dynamic-selector{width:100%;height:100%;background-color:".concat(color, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:130px 0 0 0;}.container.__jsx-style-dynamic-selector{width:calc(100% - 15vw);min-width:calc(100% - 250px);}.container.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{text-align:center;}.service.__jsx-style-dynamic-selector{width:80%;min-width:500px;max-width:1000px;margin:0 auto;}.service.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-family:'Playfair Display',serif;font-weight:600;font-style:italic;color:#333333;font-size:3rem;text-align:center;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:0 0 1rem 0;}.coverImage.__jsx-style-dynamic-selector{height:20vw;width:100%;background-image:url('").concat(coverImage, "');background-size:cover;background-position:center;}@media(max-width:760px){.spacer.__jsx-style-dynamic-selector{display:none;}.container.__jsx-style-dynamic-selector{width:100%;}.service.__jsx-style-dynamic-selector{width:95%;min-width:0;}.coverImage.__jsx-style-dynamic-selector{height:250px;}.serviceWrapper.__jsx-style-dynamic-selector{padding-top:70px;}.tableData{font-size:.9rem!important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l2YW4vUHJvamVjdHMvYWctY29weS9jb21wb25lbnRzL3BhZ2VfY29tcG9uZW50cy9zZXJ2aWNlL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElnQixBQUd3QixBQUtBLEFBT2EsQUFJTixBQUdSLEFBTTRCLEFBVTFCLEFBUUssQUFHRixBQUdELEFBSUcsQUFHSSxBQUdTLFVBdkNkLEFBOEJBLENBakRDLEFBS0wsQUF5Q1osQ0FYVyxDQVFYLEFBVUEsSUFHQSxDQXhDSixJQWtDSSxDQTVDOEMsQUE4Qk8sQ0F4QnhCLEVBUVosQUF1Q2pCLEVBMURnQixTQXdCQSxNQUpGLENBbkJsQixTQVdBLEFBYXNCLElBSnRCLFlBZmlCLEVBb0JDLEtBVVEsU0FUUCxhQVVZLEVBVFQsa0JBQ0MsT0FTdkIsa0JBL0J3QixvQkFDeEIsZ0RBc0J1QixtQkFDdkIiLCJmaWxlIjoiL2hvbWUvaXZhbi9Qcm9qZWN0cy9hZy1jb3B5L2NvbXBvbmVudHMvcGFnZV9jb21wb25lbnRzL3NlcnZpY2Uvc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IENvbG9yQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvY29sb3Jjb250ZXh0J1xuaW1wb3J0IERhdGEgZnJvbSAnLi4vLi4vZGF0YS9zZXJ2aWNlcy5qc29uJ1xuXG5cbmNvbnN0IHRhYmxlU3R5bGUgPSB7XG4gICAgcGFkZGluZzogXCIxcmVtIDBcIixcbiAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNiMmIyYjJcIixcbiAgICBtYXJnaW5Ub3A6IFwiNHJlbVwiXG59XG5cbmNvbnN0IHRhYmxlVGl0bGVTdHlsZSA9IHtcbiAgICBmb250RmFtaWx5OiBcIidQb3BwaW5zJywgc2Fucy1zZXJpZlwiLFxuICAgIGNvbG9yOiBcIiMzMzMzMzNcIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCIzcHhcIixcbiAgICBwYWRkaW5nOiBcIjJyZW0gMCAxcmVtIDBcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiXG59XG5cbmNvbnN0IHRpdGxlU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogXCInUGxheWZhaXIgRGlzcGxheScsIHNlcmlmXCIsXG4gICAgZm9udFdlaWdodDogXCI2MDBcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxuICAgIGZvbnRTaXplOiBcIjNyZW1cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCIycHhcIixcbiAgICBwYWRkaW5nOiBcIjAgMCAxcmVtIDBcIixcbn1cblxuY29uc3QgdGFibGVEYXRhU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogXCInUG9wcGlucycsIHNhbnMtc2VyaWZcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgbGV0dGVyU3BhY2luZzogXCIxcHhcIixcbiAgICBwYWRkaW5nOiBcIjFyZW0gMCAuNHJlbSAxcmVtXCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjYjJiMmIyXCIsXG4gICAgd29yZEJyZWFrOiBcImJyZWFrLXdvcmRcIlxufVxuXG5jb25zdCBwYXJhZ3JhcGhTdHlsZSA9IHtcbiAgICB3aWR0aDogXCI4MCVcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRGYW1pbHk6IFwiJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgY29sb3I6IFwiIzMzMzMzM1wiLFxufVxuXG5jb25zdCB0YWJsZU5vdGVTdHlsZSA9IHtcbiAgICBmb250RmFtaWx5OiBcIidQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWZcIixcbiAgICBjb2xvcjogXCIjMzMzMzMzXCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG59XG5cbmNvbnN0IGJ1aWxkID0gKGJvZHkpID0+IHtcbiAgICBsZXQgYm9keUFycmF5ID0gW107XG4gICAgaWYoKGJvZHkgIT09IHVuZGVmaW5lZCkgJiYgKGJvZHkgIT09IG51bGwpKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihib2R5W2ldLnR5cGUgPT09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgYm9keUFycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpICogNzg5IH0gc3R5bGU9eyBwYXJhZ3JhcGhTdHlsZSB9PiAgICBcbiAgICAgICAgICAgICAgICAgICAgPHAga2V5PXsgaSAqIDg5fT57IGJvZHlbaV0uY29udGVudCB9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZihib2R5W2ldLnR5cGUgPT09IFwiaDJcIikge1xuICAgICAgICAgICAgICAgIGJvZHlBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsgaSAqIDY2IH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17IHRpdGxlU3R5bGUgfSBrZXk9eyBpICogOTl9PnsgYm9keVtpXS5jb250ZW50IH08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZihib2R5W2ldLnR5cGUgPT09IFwiaDNcIikge1xuICAgICAgICAgICAgICAgIGJvZHlBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsgaSAqIDU1IH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17IHRhYmxlVGl0bGVTdHlsZSB9IGtleT17IGkgKiA5NyB9PnsgYm9keVtpXS5jb250ZW50IH08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZihib2R5W2ldLnR5cGUgPT09IFwidFwiKSB7XG4gICAgICAgICAgICAgICAgYm9keUFycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpICogNzEgfSBzdHlsZT17IHRhYmxlU3R5bGUgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoXCIgKyBib2R5W2ldLm1ldGEud2lkdGggKyBcIiwgMWZyKVwiICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVUaXRsZVwiIHN0eWxlPXt7IGdyaWRDb2x1bW46IFwic3BhbiBcIiArIGJvZHlbaV0ubWV0YS53aWR0aCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9eyB0YWJsZVRpdGxlU3R5bGUgfSA+eyBib2R5W2ldLm1ldGEudGl0bGUgfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYm9keVtpXS5jb250ZW50Lm1hcCgodmFsdWUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9eyBcInRhYmxlRGF0YVwiIH0ga2V5PXsgaSAqIDc3IH0gc3R5bGU9eyB0YWJsZURhdGFTdHlsZSB9PnsgdmFsdWUgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgdGFibGVOb3RlU3R5bGUgfSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPntib2R5W2ldLm1ldGEubm90ZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvZHlBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG59XG5jb25zdCBidWlsZFRhYmxlcyA9ICh0YWJsZXMpID0+IHtcbiAgICBsZXQgdGFibGVzQXJyYXkgPSBbXTtcbiAgICBpZih0YWJsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFibGVzLmxlbmdodDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0YWJsZXNbaV0udHlwZSA9PT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICB0YWJsZXMucHVzaCg8cCBrZXk9e2l9PnsgY29udGVudFtpXS5jb250ZW50IH08L3A+KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFibGVzQXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBTZXJ2aWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHVzZUNvbnRleHQoQ29sb3JDb250ZXh0KTtcbiAgICBjb25zdCBkYXRhID0gRGF0YTtcbiAgICBjb25zdCB0aXRsZSA9IGRhdGFbcm91dGVyLnF1ZXJ5LmlkXSAhPT0gdW5kZWZpbmVkID8gZGF0YVtyb3V0ZXIucXVlcnkuaWRdLnRpdGxlIDogbnVsbDtcbiAgICBjb25zdCBjb3ZlckltYWdlID0gZGF0YVtyb3V0ZXIucXVlcnkuaWRdICE9PSB1bmRlZmluZWQgPyBkYXRhW3JvdXRlci5xdWVyeS5pZF0uY292ZXJJbWFnZSA6IG51bGw7XG4gICAgY29uc3QgYm9keSA9IGJ1aWxkKGRhdGFbcm91dGVyLnF1ZXJ5LmlkXSAhPT0gdW5kZWZpbmVkID8gZGF0YVtyb3V0ZXIucXVlcnkuaWRdLmJvZHkgOiBudWxsKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZVdyYXBwZXJcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiID48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlXCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVySW1hZ2VcIiA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgeyBib2R5IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZXJ2aWNlV3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEzMHB4IDAgMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1dncpO1xuICAgICAgICAgICAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciBoMSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNlcnZpY2Uge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5zZXJ2aWNlIGgxIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvdmVySW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHZ3O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7IGNvdmVySW1hZ2UgfScpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjBweCkge1xuICAgICAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdmVySW1hZ2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZVdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOmdsb2JhbCgudGFibGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZSJdfQ== */\n/*@ sourceURL=/home/ivan/Projects/ag-copy/components/page_components/service/service.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ })

})
//# sourceMappingURL=[id].js.bbe30a19571b63b729e2.hot-update.js.map