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
        children: ["- ", coinPrice, " %"]
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      "class": "max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
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
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_tradingview_widget__WEBPACK_IMPORTED_MODULE_5___default()), {
      symbol: symbol
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {
      style: {
        marginTop: '1rem',
        marginBottom: '1rem',
        border: '0',
        borderTop: '2px solid rgba(0,0,0,0.1)'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "text-muted",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          dangerouslySetInnerHTML: {
            __html: props.crypto.description.en
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvL1tpZF0uanMiXSwibmFtZXMiOlsiQ3J5cHRvIiwicHJvcHMiLCJzeW1ib2wiLCJjcnlwdG8iLCJjaGVja1ByaWNlIiwiY29pblByaWNlIiwibWFya2V0X2RhdGEiLCJjdXJyZW50X3ByaWNlIiwidXNkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwibWFya2V0X2NhcF9yYW5rIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJlbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicXVlcnkiLCJpZCIsInJlcyIsImpzb24iLCJyZXNKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBRXRCLE1BQU1DLE1BQU0sR0FBRyxhQUFhRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQsTUFBMUIsR0FBbUMsTUFBbEQ7O0FBR0EsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsU0FBRCxFQUFlO0FBQzlCLFFBQUlBLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNmLDBCQUFPO0FBQUcsaUJBQU0sbUNBQVQ7QUFBQSx5QkFBZ0RBLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGRCxNQUdLLElBQUlBLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNwQiwwQkFBTztBQUFHLGlCQUFNLGlDQUFUO0FBQUEseUJBQThDQSxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkksTUFHQTtBQUNELDBCQUFPO0FBQUcsaUJBQU0sa0NBQVQ7QUFBQSxtQkFBNkNBLFNBQTdDO0FBQUE7QUFBQTtB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QUEsV0FESjtBQW1ESCxDQXBFRDs7S0FBTWpCLE07O0FBc0VOQSxNQUFNLENBQUNrQixlQUFQO0FBQUEseVZBQXlCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0hDLEtBQUssa0RBQTJDRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsRUFBckQsRUFERjs7QUFBQTtBQUNmQyxlQURlO0FBQUE7QUFBQSxtQkFFQ0EsR0FBRyxDQUFDQyxJQUFKLEVBRkQ7O0FBQUE7QUFFZkMsbUJBRmU7QUFBQSw2Q0FJZDtBQUFFdEIsb0JBQU0sRUFBRXNCO0FBQVYsYUFKYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSwrREFBZXpCLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3J5cHRvL1tpZF0uYTVjMmQwOWFjZDI0Yjk2ZWY5MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFRyYWRpbmdWaWV3V2lkZ2V0IGZyb20gJ3JlYWN0LXRyYWRpbmd2aWV3LXdpZGdldCc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhQXJyb3dVcCwgZmFBcnJvd0Rvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5cclxuY29uc3QgQ3J5cHRvID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc3ltYm9sID0gXCJCSU5BTkNFOlwiICsgcHJvcHMuY3J5cHRvLnN5bWJvbCArIFwiVVNEVFwiO1xyXG5cclxuXHJcbiAgICBjb25zdCBjaGVja1ByaWNlID0gKGNvaW5QcmljZSkgPT4ge1xyXG4gICAgICAgIGlmIChjb2luUHJpY2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTgwMFwiPisge2NvaW5QcmljZX0gJTwvcD5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29pblByaWNlIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1yZWQtODAwXCI+LSB7Y29pblByaWNlfSAlPC9wPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj57Y29pblByaWNlfSAlPC9wPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctZnVsbCBteC00IHB5LTYgc206bXgtYXV0byBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbTpmbGV4IHNtOnNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIG1iLTQgdy1mdWxsIHNtOnctMS8zIHNtOm15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgc206bXQtMCBzbTptbC0yIHNtOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+Q3VycmVudCBQcmljZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj4kIHtwcm9wcy5jcnlwdG8ubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIG1iLTQgdy1mdWxsIHNtOnctMS8zIHNtOm15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgc206bXQtMCBzbTptbC0yIHNtOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+QXZnLiAyNGggJTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja1ByaWNlKHByb3BzLmNyeXB0by5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIG1iLTQgdy1mdWxsIHNtOnctMS8zIHNtOm15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgc206bXQtMCBzbTptbC0yIHNtOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+TWFya2V0IENhcCBSYW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFja1wiPntwcm9wcy5jcnlwdG8ubWFya2V0X2NhcF9yYW5rfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRyYWRpbmdWaWV3V2lkZ2V0IHN5bWJvbD17c3ltYm9sfSAvPlxyXG5cclxuICAgICAgICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCBtYXJnaW5Cb3R0b206ICcxcmVtJywgYm9yZGVyOiAnMCcsIGJvcmRlclRvcDogJzJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSknIH19PlxyXG4gICAgICAgICAgICA8L2hyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkRlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuY3J5cHRvLmRlc2NyaXB0aW9uLmVuIH19PjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lciA+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5DcnlwdG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zLyR7Y3R4LnF1ZXJ5LmlkfWApO1xyXG4gICAgY29uc3QgcmVzSlNPTiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgY3J5cHRvOiByZXNKU09OIH1cclxuICAgIGNvbnNvbGUubG9nKGNyeXB0byk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0bzsiXSwic291cmNlUm9vdCI6IiJ9