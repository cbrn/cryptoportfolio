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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        className: "h-10 w-10 rounded-full",
        src: props.crypto.image.large,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
      lineNumber: 67,
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
      lineNumber: 69,
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
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          dangerouslySetInnerHTML: {
            __html: props.crypto.description.en
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3J5cHRvL1tpZF0uanMiXSwibmFtZXMiOlsiQ3J5cHRvIiwicHJvcHMiLCJzeW1ib2wiLCJjcnlwdG8iLCJjaGVja1ByaWNlIiwiY29pblByaWNlIiwibWFya2V0X2RhdGEiLCJjdXJyZW50X3ByaWNlIiwidXNkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwibWFya2V0X2NhcF9yYW5rIiwiaW1hZ2UiLCJsYXJnZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsImJvcmRlclRvcCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiZW4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJyZXMiLCJqc29uIiwicmVzSlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUV0QixNQUFNQyxNQUFNLEdBQUcsYUFBYUQsS0FBSyxDQUFDRSxNQUFOLENBQWFELE1BQTFCLEdBQW1DLE1BQWxEOztBQUdBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFNBQUQsRUFBZTtBQUM5QixRQUFJQSxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDZiwwQkFBTztBQUFHLGlCQUFNLG1DQUFUO0FBQUEseUJBQWdEQSxTQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkQsTUFHSyxJQUFJQSxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDcEIsMEJBQU87QUFBRyxpQkFBTSxpQ0FBVDtBQUFBLHlCQUE4Q0EsU0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZJLE1BR0E7QUFDRCwwQkFBTztBQUFHLGlCQUFNLGtDQUFUO0FBQUEsbUJBQTZDQSxT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QUVoQixLQUFLLENBQUNFLE1BQU4sQ0FBYWUsV0FBYixDQUF5QkM7QUFBbkM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0RILENBdkVEOztLQUFNbkIsTTs7QUF5RU5BLE1BQU0sQ0FBQ29CLGVBQVA7QUFBQSx5VkFBeUIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSEMsS0FBSyxrREFBMkNELEdBQUcsQ0FBQ0UsS0FBSixDQUFVQyxFQUFyRCxFQURGOztBQUFBO0FBQ2ZDLGVBRGU7QUFBQTtBQUFBLG1CQUVDQSxHQUFHLENBQUNDLElBQUosRUFGRDs7QUFBQTtBQUVmQyxtQkFGZTtBQUFBLDZDQUlkO0FBQUV4QixvQkFBTSxFQUFFd0I7QUFBVixhQUpjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFBLCtEQUFlM0IsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcnlwdG8vW2lkXS45MGFjMTJkY2MyMjZjMDc4NGUxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgVHJhZGluZ1ZpZXdXaWRnZXQgZnJvbSAncmVhY3QtdHJhZGluZ3ZpZXctd2lkZ2V0JztcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1VwLCBmYUFycm93RG93biB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcblxyXG5jb25zdCBDcnlwdG8gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBzeW1ib2wgPSBcIkJJTkFOQ0U6XCIgKyBwcm9wcy5jcnlwdG8uc3ltYm9sICsgXCJVU0RUXCI7XHJcblxyXG5cclxuICAgIGNvbnN0IGNoZWNrUHJpY2UgPSAoY29pblByaWNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvaW5QcmljZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JlZW4tODAwXCI+KyB7Y29pblByaWNlfSAlPC9wPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2luUHJpY2UgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8cCBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXJlZC04MDBcIj4tIHtjb2luUHJpY2V9ICU8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPntjb2luUHJpY2V9ICU8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1mdWxsIG14LTQgcHktNiBzbTpteC1hdXRvIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtOmZsZXggc206c3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5DdXJyZW50IFByaWNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFja1wiPiQge3Byb3BzLmNyeXB0by5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLnVzZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5BdmcuIDI0aCAlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrUHJpY2UocHJvcHMuY3J5cHRvLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgbWItNCB3LWZ1bGwgc206dy0xLzMgc206bXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTIgc206dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtc20gbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj5NYXJrZXQgQ2FwIFJhbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+e3Byb3BzLmNyeXB0by5tYXJrZXRfY2FwX3Jhbmt9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtwcm9wcy5jcnlwdG8uaW1hZ2UubGFyZ2V9IGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRyYWRpbmdWaWV3V2lkZ2V0IHN5bWJvbD17c3ltYm9sfSAvPlxyXG5cclxuICAgICAgICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCBtYXJnaW5Cb3R0b206ICcxcmVtJywgYm9yZGVyOiAnMCcsIGJvcmRlclRvcDogJzJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSknIH19PlxyXG4gICAgICAgICAgICA8L2hyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPkRlc2NyaXB0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuY3J5cHRvLmRlc2NyaXB0aW9uLmVuIH19PjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lciA+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5DcnlwdG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zLyR7Y3R4LnF1ZXJ5LmlkfWApO1xyXG4gICAgY29uc3QgcmVzSlNPTiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgY3J5cHRvOiByZXNKU09OIH1cclxuICAgIGNvbnNvbGUubG9nKGNyeXB0byk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0bzsiXSwic291cmNlUm9vdCI6IiJ9