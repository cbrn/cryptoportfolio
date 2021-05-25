self["webpackHotUpdate_N_E"]("pages/crypto/[id]",{

/***/ "./pages/crypto/[id].js":
/*!******************************!*\
  !*** ./pages/crypto/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_manue_Desktop_Programaci_n_2021_Webs_ReactJS_cryptoportfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_manue_Desktop_Programaci_n_2021_Webs_ReactJS_cryptoportfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_manue_Desktop_Programaci_n_2021_Webs_ReactJS_cryptoportfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_manue_Desktop_Programaci_n_2021_Webs_ReactJS_cryptoportfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tradingview_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tradingview-widget */ "./node_modules/react-tradingview-widget/index.js");
/* harmony import */ var react_tradingview_widget__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tradingview_widget__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\manue\\Desktop\\Programaci\xF3n 2021\\Webs\\ReactJS\\cryptoportfolio\\pages\\crypto\\[id].js",
    _this = undefined;







var Crypto = function Crypto(props) {
  var symbol = "BINANCE:" + props.crypto.symbol + "USDT";

  var checkPrice = function checkPrice(coinPrice) {
    if (coinPrice > 0) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        "class": "text-3xl font-bold text-green-800",
        children: ["+ ", coinPrice, " %"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 20
      }, _this);
    } else if (coinPrice < 0) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        "class": "text-3xl font-bold text-red-800",
        children: [coinPrice, " %"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 20
      }, _this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        "class": "text-3xl font-bold text-gray-800",
        children: [coinPrice, " %"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 20
      }, _this);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      "class": "max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        "class": "sm:flex sm:space-x-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            "class": "bg-white p-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              "class": "sm:flex sm:items-start",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                "class": "text-center sm:mt-0 sm:ml-2 sm:text-left",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  "class": "text-sm leading-6 font-medium text-gray-400",
                  children: "Current Price"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  "class": "text-3xl font-bold text-black",
                  children: ["$ ", props.crypto.market_data.current_price.usd]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            "class": "bg-white p-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              "class": "sm:flex sm:items-start",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                "class": "text-center sm:mt-0 sm:ml-2 sm:text-left",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  "class": "text-sm leading-6 font-medium text-gray-400",
                  children: "Avg. 24h %"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 37
                }, _this), checkPrice(props.crypto.market_data.price_change_percentage_24h)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            "class": "bg-white p-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              "class": "sm:flex sm:items-start",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                "class": "text-center sm:mt-0 sm:ml-2 sm:text-left",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  "class": "text-sm leading-6 font-medium text-gray-400",
                  children: "Market Cap Rank"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  "class": "text-3xl font-bold text-black",
                  children: props.crypto.market_cap_rank
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "text-center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_tradingview_widget__WEBPACK_IMPORTED_MODULE_5___default()), {
        symbol: symbol
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {
        style: {
          marginTop: '1rem',
          marginBottom: '1rem',
          border: '0',
          borderTop: '2px solid rgba(0,0,0,0.1)'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "col",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: "text-muted",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            dangerouslySetInnerHTML: {
              __html: props.crypto.description.en
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};

_c = Crypto;

Crypto.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_Users_manue_Desktop_Programaci_n_2021_Webs_ReactJS_cryptoportfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_manue_Desktop_Programaci_n_2021_Webs_ReactJS_cryptoportfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
    var res, resJSON;
    return C_Users_manue_Desktop_Programaci_n_2021_Webs_ReactJS_cryptoportfolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.coingecko.com/api/v3/coins/".concat(ctx.query.id));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            resJSON = _context.sent;
            return _context.abrupt("return", {
              crypto: resJSON
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Crypto);

var _c;

$RefreshReg$(_c, "Crypto");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvL1tpZF0uanMiXSwibmFtZXMiOlsiQ3J5cHRvIiwicHJvcHMiLCJzeW1ib2wiLCJjcnlwdG8iLCJjaGVja1ByaWNlIiwiY29pblByaWNlIiwibWFya2V0X2RhdGEiLCJjdXJyZW50X3ByaWNlIiwidXNkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwibWFya2V0X2NhcF9yYW5rIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJlbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicXVlcnkiLCJpZCIsInJlcyIsImpzb24iLCJyZXNKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBRXRCLE1BQU1DLE1BQU0sR0FBRyxhQUFhRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQsTUFBMUIsR0FBbUMsTUFBbEQ7O0FBR0EsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsU0FBRCxFQUFlO0FBQzlCLFFBQUlBLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNmLDBCQUFPO0FBQUcsaUJBQU0sbUNBQVQ7QUFBQSx5QkFBZ0RBLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGRCxNQUdLLElBQUlBLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNwQiwwQkFBTztBQUFHLGlCQUFNLGlDQUFUO0FBQUEsbUJBQTRDQSxTQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkksTUFHQTtBQUNELDBCQUFPO0FBQUcsaUJBQU0sa0NBQVQ7QUFBQSxtQkFBNkNBLFNBQTdDO0FBQUE7QUFBQTtB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QSxlQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxREgsQ0F0RUQ7O0tBQU1qQixNOztBQXdFTkEsTUFBTSxDQUFDa0IsZUFBUDtBQUFBLHlWQUF5QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIQyxLQUFLLGtEQUEyQ0QsR0FBRyxDQUFDRSxLQUFKLENBQVVDLEVBQXJELEVBREY7O0FBQUE7QUFDZkMsZUFEZTtBQUFBO0FBQUEsbUJBRUNBLEdBQUcsQ0FBQ0MsSUFBSixFQUZEOztBQUFBO0FBRWZDLG1CQUZlO0FBQUEsNkNBSWQ7QUFBRXRCLG9CQUFNLEVBQUVzQjtBQUFWLGFBSmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUEsK0RBQWV6QixNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyeXB0by9baWRdLjFjNjM2ODRmODFjYTViYmU2ZTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBUcmFkaW5nVmlld1dpZGdldCBmcm9tICdyZWFjdC10cmFkaW5ndmlldy13aWRnZXQnO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFycm93VXAsIGZhQXJyb3dEb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuXHJcbmNvbnN0IENyeXB0byA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHN5bWJvbCA9IFwiQklOQU5DRTpcIiArIHByb3BzLmNyeXB0by5zeW1ib2wgKyBcIlVTRFRcIjtcclxuXHJcblxyXG4gICAgY29uc3QgY2hlY2tQcmljZSA9IChjb2luUHJpY2UpID0+IHtcclxuICAgICAgICBpZiAoY29pblByaWNlID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmVlbi04MDBcIj4rIHtjb2luUHJpY2V9ICU8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvaW5QcmljZSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtcmVkLTgwMFwiPntjb2luUHJpY2V9ICU8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPntjb2luUHJpY2V9ICU8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1mdWxsIG14LTQgcHktNiBzbTpteC1hdXRvIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206c3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5DdXJyZW50IFByaWNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFja1wiPiQge3Byb3BzLmNyeXB0by5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLnVzZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5BdmcuIDI0aCAlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrUHJpY2UocHJvcHMuY3J5cHRvLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5NYXJrZXQgQ2FwIFJhbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+e3Byb3BzLmNyeXB0by5tYXJrZXRfY2FwX3Jhbmt9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRyYWRpbmdWaWV3V2lkZ2V0IHN5bWJvbD17c3ltYm9sfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxociBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJywgbWFyZ2luQm90dG9tOiAnMXJlbScsIGJvcmRlcjogJzAnLCBib3JkZXJUb3A6ICcycHggc29saWQgcmdiYSgwLDAsMCwwLjEpJyB9fT5cclxuICAgICAgICAgICAgICAgIDwvaHI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuY3J5cHRvLmRlc2NyaXB0aW9uLmVuIH19PjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lciA+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5DcnlwdG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zLyR7Y3R4LnF1ZXJ5LmlkfWApO1xyXG4gICAgY29uc3QgcmVzSlNPTiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgY3J5cHRvOiByZXNKU09OIH1cclxuICAgIGNvbnNvbGUubG9nKGNyeXB0byk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0bzsiXSwic291cmNlUm9vdCI6IiJ9