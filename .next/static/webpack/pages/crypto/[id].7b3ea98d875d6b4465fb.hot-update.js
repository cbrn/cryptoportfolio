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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        className: "h-10 w-10 rounded-full",
        src: props.crypto.image.large,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
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
        lineNumber: 32,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvL1tpZF0uanMiXSwibmFtZXMiOlsiQ3J5cHRvIiwicHJvcHMiLCJzeW1ib2wiLCJjcnlwdG8iLCJjaGVja1ByaWNlIiwiY29pblByaWNlIiwiaW1hZ2UiLCJsYXJnZSIsIm1hcmtldF9kYXRhIiwiY3VycmVudF9wcmljZSIsInVzZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsIm1hcmtldF9jYXBfcmFuayIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsImJvcmRlclRvcCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiZW4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJyZXMiLCJqc29uIiwicmVzSlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUV0QixNQUFNQyxNQUFNLEdBQUcsYUFBYUQsS0FBSyxDQUFDRSxNQUFOLENBQWFELE1BQTFCLEdBQW1DLE1BQWxEOztBQUdBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFNBQUQsRUFBZTtBQUM5QixRQUFJQSxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDZiwwQkFBTztBQUFHLGlCQUFNLG1DQUFUO0FBQUEseUJBQWdEQSxTQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkQsTUFHSyxJQUFJQSxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDcEIsMEJBQU87QUFBRyxpQkFBTSxpQ0FBVDtBQUFBLHlCQUE4Q0EsU0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZJLE1BR0E7QUFDRCwwQkFBTztBQUFHLGlCQUFNLGtDQUFUO0FBQUEsbUJBQTZDQSxT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aEIsS0FBSyxDQUFDRSxNQUFOLENBQWFlLFdBQWIsQ0FBeUJDO0FBQW5DO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9ESCxDQXJFRDs7S0FBTW5CLE07O0FBdUVOQSxNQUFNLENBQUNvQixlQUFQO0FBQUEseVZBQXlCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0hDLEtBQUssa0RBQTJDRCxHQUFHLENBQUNFLEtBQUosQ0FBVUMsRUFBckQsRUFERjs7QUFBQTtBQUNmQyxlQURlO0FBQUE7QUFBQSxtQkFFQ0EsR0FBRyxDQUFDQyxJQUFKLEVBRkQ7O0FBQUE7QUFFZkMsbUJBRmU7QUFBQSw2Q0FJZDtBQUFFeEIsb0JBQU0sRUFBRXdCO0FBQVYsYUFKYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSwrREFBZTNCLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3J5cHRvL1tpZF0uN2IzZWE5OGQ4NzVkNmI0NDY1ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFRyYWRpbmdWaWV3V2lkZ2V0IGZyb20gJ3JlYWN0LXRyYWRpbmd2aWV3LXdpZGdldCc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhQXJyb3dVcCwgZmFBcnJvd0Rvd24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5cclxuY29uc3QgQ3J5cHRvID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc3ltYm9sID0gXCJCSU5BTkNFOlwiICsgcHJvcHMuY3J5cHRvLnN5bWJvbCArIFwiVVNEVFwiO1xyXG5cclxuXHJcbiAgICBjb25zdCBjaGVja1ByaWNlID0gKGNvaW5QcmljZSkgPT4ge1xyXG4gICAgICAgIGlmIChjb2luUHJpY2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTgwMFwiPisge2NvaW5QcmljZX0gJTwvcD5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29pblByaWNlIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1yZWQtODAwXCI+LSB7Y29pblByaWNlfSAlPC9wPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj57Y29pblByaWNlfSAlPC9wPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctZnVsbCBteC00IHB5LTYgc206bXgtYXV0byBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17cHJvcHMuY3J5cHRvLmltYWdlLmxhcmdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206c3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5DdXJyZW50IFByaWNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFja1wiPiQge3Byb3BzLmNyeXB0by5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLnVzZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5BdmcuIDI0aCAlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrUHJpY2UocHJvcHMuY3J5cHRvLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5NYXJrZXQgQ2FwIFJhbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+e3Byb3BzLmNyeXB0by5tYXJrZXRfY2FwX3Jhbmt9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VHJhZGluZ1ZpZXdXaWRnZXQgc3ltYm9sPXtzeW1ib2x9IC8+XHJcblxyXG4gICAgICAgICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzFyZW0nLCBib3JkZXI6ICcwJywgYm9yZGVyVG9wOiAnMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKScgfX0+XHJcbiAgICAgICAgICAgIDwvaHI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5jcnlwdG8uZGVzY3JpcHRpb24uZW4gfX0+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyID5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbkNyeXB0by5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvJHtjdHgucXVlcnkuaWR9YCk7XHJcbiAgICBjb25zdCByZXNKU09OID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4geyBjcnlwdG86IHJlc0pTT04gfVxyXG4gICAgY29uc29sZS5sb2coY3J5cHRvKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3J5cHRvOyJdLCJzb3VyY2VSb290IjoiIn0=