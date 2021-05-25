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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {}, void 0, false, {
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
                  children: "Current Price"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  "class": "text-3xl font-bold text-black",
                  children: ["$ ", props.crypto.market_data.current_price.usd]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
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
                  lineNumber: 47,
                  columnNumber: 37
                }, _this), checkPrice(props.crypto.market_data.price_change_percentage_24h)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
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
                  lineNumber: 57,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  "class": "text-3xl font-bold text-black",
                  children: props.crypto.market_cap_rank
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
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
      lineNumber: 65,
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
      lineNumber: 67,
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
          lineNumber: 72,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          dangerouslySetInnerHTML: {
            __html: props.crypto.description.en
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvL1tpZF0uanMiXSwibmFtZXMiOlsiQ3J5cHRvIiwicHJvcHMiLCJzeW1ib2wiLCJjcnlwdG8iLCJjaGVja1ByaWNlIiwiY29pblByaWNlIiwibWFya2V0X2RhdGEiLCJjdXJyZW50X3ByaWNlIiwidXNkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwibWFya2V0X2NhcF9yYW5rIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJlbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicXVlcnkiLCJpZCIsInJlcyIsImpzb24iLCJyZXNKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBRXRCLE1BQU1DLE1BQU0sR0FBRyxhQUFhRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUQsTUFBMUIsR0FBbUMsTUFBbEQ7O0FBR0EsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsU0FBRCxFQUFlO0FBQzlCLFFBQUlBLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNmLDBCQUFPO0FBQUcsaUJBQU0sbUNBQVQ7QUFBQSx5QkFBZ0RBLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGRCxNQUdLLElBQUlBLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNwQiwwQkFBTztBQUFHLGlCQUFNLGlDQUFUO0FBQUEseUJBQThDQSxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkksTUFHQTtBQUNELDBCQUFPO0FBQUcsaUJBQU0sa0NBQVQ7QUFBQSxtQkFBNkNBLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0g7QUFDSixHQVZEOztBQVlBLHNCQUNJLDhEQUFDLDBEQUFEO0FBQUEsNEJBRUk7QUFBSyxlQUFNLGlEQUFYO0FBQUEsNkJBQ0k7QUFBSyxpQkFBTSxzQkFBWDtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLG1CQUFNLHNJQUFYO0FBQUEsaUNBQ0k7QUFBSyxxQkFBTSxjQUFYO0FBQUEsbUNBQ0k7QUFBSyx1QkFBTSx3QkFBWDtBQUFBLHFDQUNJO0FBQUsseUJBQU0sMENBQVg7QUFBQSx3Q0FDSTtBQUFJLDJCQUFNLDZDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUk7QUFBRywyQkFBTSwrQkFBVDtBQUFBLG1DQUE0Q0osS0FBSyxDQUFDRSxNQUFOLENBQWFHLFdBQWIsQ0FBeUJDLGFBQXpCLENBQXVDQyxHQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBWUk7QUFBSyxtQkFBTSxzSUFBWDtBQUFBLGlDQUNJO0FBQUsscUJBQU0sY0FBWDtBQUFBLG1DQUNJO0FBQUssdUJBQU0sd0JBQVg7QUFBQSxxQ0FDSTtBQUFLLHlCQUFNLDBDQUFYO0FBQUEsd0NBQ0k7QUFBSSwyQkFBTSw2Q0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVLSixVQUFVLENBQUNILEtBQUssQ0FBQ0UsTUFBTixDQUFhRyxXQUFiLENBQXlCRywyQkFBMUIsQ0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkosZUFzQkk7QUFBSyxtQkFBTSxzSUFBWDtBQUFBLGlDQUNJO0FBQUsscUJBQU0sY0FBWDtBQUFBLG1DQUNJO0FBQUssdUJBQU0sd0JBQVg7QUFBQSxxQ0FDSTtBQUFLLHlCQUFNLDBDQUFYO0FBQUEsd0NBQ0k7QUFBSSwyQkFBTSw2Q0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQUcsMkJBQU0sK0JBQVQ7QUFBQSw0QkFBMENSLEtBQUssQ0FBQ0UsTUFBTixDQUFhTztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBcUNJLDhEQUFDLGlFQUFEO0FBQW1CLFlBQU0sRUFBRVI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJDSixlQXVDSTtBQUFJLFdBQUssRUFBRTtBQUFFUyxpQkFBUyxFQUFFLE1BQWI7QUFBcUJDLG9CQUFZLEVBQUUsTUFBbkM7QUFBMkNDLGNBQU0sRUFBRSxHQUFuRDtBQUF3REMsaUJBQVMsRUFBRTtBQUFuRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Q0osZUEwQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFHLGlDQUF1QixFQUFFO0FBQUVDLGtCQUFNLEVBQUVkLEtBQUssQ0FBQ0UsTUFBTixDQUFhYSxXQUFiLENBQXlCQztBQUFuQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvREgsQ0FyRUQ7O0tBQU1qQixNOztBQXVFTkEsTUFBTSxDQUFDa0IsZUFBUDtBQUFBLHlWQUF5QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIQyxLQUFLLGtEQUEyQ0QsR0FBRyxDQUFDRSxLQUFKLENBQVVDLEVBQXJELEVBREY7O0FBQUE7QUFDZkMsZUFEZTtBQUFBO0FBQUEsbUJBRUNBLEdBQUcsQ0FBQ0MsSUFBSixFQUZEOztBQUFBO0FBRWZDLG1CQUZlO0FBQUEsNkNBSWQ7QUFBRXRCLG9CQUFNLEVBQUVzQjtBQUFWLGFBSmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUEsK0RBQWV6QixNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyeXB0by9baWRdLjQxNGNiMWNmM2M5NDVjNGQ5NjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBUcmFkaW5nVmlld1dpZGdldCBmcm9tICdyZWFjdC10cmFkaW5ndmlldy13aWRnZXQnO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFycm93VXAsIGZhQXJyb3dEb3duIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuXHJcbmNvbnN0IENyeXB0byA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHN5bWJvbCA9IFwiQklOQU5DRTpcIiArIHByb3BzLmNyeXB0by5zeW1ib2wgKyBcIlVTRFRcIjtcclxuXHJcblxyXG4gICAgY29uc3QgY2hlY2tQcmljZSA9IChjb2luUHJpY2UpID0+IHtcclxuICAgICAgICBpZiAoY29pblByaWNlID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmVlbi04MDBcIj4rIHtjb2luUHJpY2V9ICU8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvaW5QcmljZSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtcmVkLTgwMFwiPi0ge2NvaW5QcmljZX0gJTwvcD5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+e2NvaW5QcmljZX0gJTwvcD5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LWZ1bGwgbXgtNCBweS02IHNtOm14LWF1dG8gc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTpzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIG1iLTQgdy1mdWxsIHNtOnctMS8zIHNtOm15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgc206bXQtMCBzbTptbC0yIHNtOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+Q3VycmVudCBQcmljZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmxhY2tcIj4kIHtwcm9wcy5jcnlwdG8ubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIG1iLTQgdy1mdWxsIHNtOnctMS8zIHNtOm15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgc206bXQtMCBzbTptbC0yIHNtOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+QXZnLiAyNGggJTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja1ByaWNlKHByb3BzLmNyeXB0by5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIG1iLTQgdy1mdWxsIHNtOnctMS8zIHNtOm15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgc206bXQtMCBzbTptbC0yIHNtOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXNtIGxlYWRpbmctNiBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+TWFya2V0IENhcCBSYW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFja1wiPntwcm9wcy5jcnlwdG8ubWFya2V0X2NhcF9yYW5rfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRyYWRpbmdWaWV3V2lkZ2V0IHN5bWJvbD17c3ltYm9sfSAvPlxyXG5cclxuICAgICAgICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCBtYXJnaW5Cb3R0b206ICcxcmVtJywgYm9yZGVyOiAnMCcsIGJvcmRlclRvcDogJzJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSknIH19PlxyXG4gICAgICAgICAgICA8L2hyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkRlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuY3J5cHRvLmRlc2NyaXB0aW9uLmVuIH19PjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lciA+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5DcnlwdG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zLyR7Y3R4LnF1ZXJ5LmlkfWApO1xyXG4gICAgY29uc3QgcmVzSlNPTiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgY3J5cHRvOiByZXNKU09OIH1cclxuICAgIGNvbnNvbGUubG9nKGNyeXB0byk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0bzsiXSwic291cmNlUm9vdCI6IiJ9