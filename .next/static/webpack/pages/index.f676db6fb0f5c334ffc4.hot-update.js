self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/cryptos.js":
/*!*******************************!*\
  !*** ./components/cryptos.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\manue\\Desktop\\Programaci\xF3n 2021\\Webs\\ReactJS\\cryptoportfolio\\components\\cryptos.js",
    _this = undefined;





var Cryptos = function Cryptos(props) {
  var checkPrice = function checkPrice(coinPrice) {
    if (coinPrice > 0) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
        children: coinPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 20
      }, _this);
    } else if (coinPrice < 0) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800",
        children: coinPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 20
      }, _this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800",
        children: coinPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 20
      }, _this);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
              className: "min-w-full divide-y divide-gray-200",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
                className: "bg-gray-50",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Current Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "24h %"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                    scope: "col",
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Market Cap"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
                className: "bg-white divide-y divide-gray-200",
                children: props.coins.map(function (crypto) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                    onClick: function onClick(e) {
                      return next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/crypto/[id]', "/crypto/".concat(crypto.id));
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      className: "px-6 py-4 whitespace-nowrap",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          className: "flex-shrink-0 h-10 w-10",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                            className: "h-10 w-10 rounded-full",
                            src: crypto.image,
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 56,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          className: "ml-4",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "text-sm font-medium text-gray-900",
                            children: crypto.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 59,
                            columnNumber: 57
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 58,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      className: "px-6 py-4 whitespace-nowrap",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800",
                        children: ["$ ", crypto.current_price]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      className: "px-6 py-4 whitespace-nowrap",
                      children: checkPrice(crypto.price_change_percentage_24h)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                      children: ["$ ", crypto.market_cap]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 45
                    }, _this)]
                  }, crypto.id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, _this);
};

_c = Cryptos;
/* harmony default export */ __webpack_exports__["default"] = (Cryptos);

var _c;

$RefreshReg$(_c, "Cryptos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnlwdG9zLmpzIl0sIm5hbWVzIjpbIkNyeXB0b3MiLCJwcm9wcyIsImNoZWNrUHJpY2UiLCJjb2luUHJpY2UiLCJjb2lucyIsIm1hcCIsImNyeXB0byIsImUiLCJSb3V0ZXIiLCJpZCIsImltYWdlIiwibmFtZSIsImN1cnJlbnRfcHJpY2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgiLCJtYXJrZXRfY2FwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBRXZCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFNBQUQsRUFBZTtBQUM5QixRQUFJQSxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDZiwwQkFBTztBQUFNLGlCQUFTLEVBQUMsMkZBQWhCO0FBQUEsa0JBQTZHQTtBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZELE1BR0ssSUFBSUEsU0FBUyxHQUFHLENBQWhCLEVBQW1CO0FBQ3BCLDBCQUFPO0FBQU0saUJBQVMsRUFBQyx1RkFBaEI7QUFBQSxrQkFBeUdBO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkksTUFHQTtBQUNELDBCQUFPO0FBQU0saUJBQVMsRUFBQyx5RkFBaEI7QUFBQSxrQkFBMkdBO0FBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNIO0FBQ0osR0FWRDs7QUFZQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMseUNBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsMkRBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsK0RBQWY7QUFBQSxtQ0FDSTtBQUFPLHVCQUFTLEVBQUMscUNBQWpCO0FBQUEsc0NBQ0k7QUFBTyx5QkFBUyxFQUFDLFlBQWpCO0FBQUEsdUNBQ0k7QUFBQSwwQ0FDSTtBQUNJLHlCQUFLLEVBQUMsS0FEVjtBQUVJLDZCQUFTLEVBQUMsZ0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFLSTtBQUNJLHlCQUFLLEVBQUMsS0FEVjtBQUVJLDZCQUFTLEVBQUMsZ0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosZUFTSTtBQUNJLHlCQUFLLEVBQUMsS0FEVjtBQUVJLDZCQUFTLEVBQUMsZ0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEosZUFjSTtBQUNJLHlCQUFLLEVBQUMsS0FEVjtBQUVJLDZCQUFTLEVBQUMsZ0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQXVCSTtBQUFPLHlCQUFTLEVBQUMsbUNBQWpCO0FBQUEsMEJBQ0tGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLE1BQUQ7QUFBQSxzQ0FDYjtBQUFvQiwyQkFBTyxFQUFFLGlCQUFBQyxDQUFDO0FBQUEsNkJBQUlDLHVEQUFBLENBQVksY0FBWixvQkFBdUNGLE1BQU0sQ0FBQ0csRUFBOUMsRUFBSjtBQUFBLHFCQUE5QjtBQUFBLDRDQUNJO0FBQUksK0JBQVMsRUFBQyw2QkFBZDtBQUFBLDZDQUNJO0FBQUssaUNBQVMsRUFBQyxtQkFBZjtBQUFBLGdEQUNJO0FBQUssbUNBQVMsRUFBQyx5QkFBZjtBQUFBLGlEQUNJO0FBQUsscUNBQVMsRUFBQyx3QkFBZjtBQUF3QywrQkFBRyxFQUFFSCxNQUFNLENBQUNJLEtBQXBEO0FBQTJELCtCQUFHLEVBQUM7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREosZUFJSTtBQUFLLG1DQUFTLEVBQUMsTUFBZjtBQUFBLGlEQUNJO0FBQUsscUNBQVMsRUFBQyxtQ0FBZjtBQUFBLHNDQUFvREosTUFBTSxDQUFDSztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBV0k7QUFBSSwrQkFBUyxFQUFDLDZCQUFkO0FBQUEsNkNBQ0k7QUFBTSxpQ0FBUyxFQUFDLHlGQUFoQjtBQUFBLHlDQUE2R0wsTUFBTSxDQUFDTSxhQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVhKLGVBY0k7QUFBSSwrQkFBUyxFQUFDLDZCQUFkO0FBQUEsZ0NBQ0tWLFVBQVUsQ0FBQ0ksTUFBTSxDQUFDTywyQkFBUjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBZEosZUFpQkk7QUFBSSwrQkFBUyxFQUFDLG1EQUFkO0FBQUEsdUNBQXFFUCxNQUFNLENBQUNRLFVBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFqQko7QUFBQSxxQkFBU1IsTUFBTSxDQUFDRyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURhO0FBQUEsaUJBQWhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJESCxDQXpFRDs7S0FBTVQsTztBQTJFTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjc2ZGI2ZmIwZjVjMzM0ZmZjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd1VwLCBmYUFycm93RG93biwgZmFNb25leUJpbGxXYXZlLCBmYVRyb3BoeSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQ3J5cHRvcyA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNoZWNrUHJpY2UgPSAoY29pblByaWNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvaW5QcmljZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgaW5saW5lLWZsZXggdGV4dC14cyBsZWFkaW5nLTUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tODAwXCI+e2NvaW5QcmljZX08L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvaW5QcmljZSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgaW5saW5lLWZsZXggdGV4dC14cyBsZWFkaW5nLTUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGwgYmctcmVkLTEwMCB0ZXh0LXJlZC04MDBcIj57Y29pblByaWNlfTwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJweC0yIGlubGluZS1mbGV4IHRleHQteHMgbGVhZGluZy01IGZvbnQtc2VtaWJvbGQgcm91bmRlZC1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS04MDBcIj57Y29pblByaWNlfTwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW15LTIgb3ZlcmZsb3cteC1hdXRvIHNtOi1teC02IGxnOi1teC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIGFsaWduLW1pZGRsZSBpbmxpbmUtYmxvY2sgbWluLXctZnVsbCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBzbTpyb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5DdXJyZW50IFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNGggJVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrZXQgQ2FwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY29pbnMubWFwKChjcnlwdG8pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2NyeXB0by5pZH0gb25DbGljaz17ZSA9PiBSb3V0ZXIucHVzaCgnL2NyeXB0by9baWRdJywgYC9jcnlwdG8vJHtjcnlwdG8uaWR9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGgtMTAgdy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17Y3J5cHRvLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPntjcnlwdG8ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBpbmxpbmUtZmxleCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktODAwXCI+JCB7Y3J5cHRvLmN1cnJlbnRfcHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hlY2tQcmljZShjcnlwdG8ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+JCB7Y3J5cHRvLm1hcmtldF9jYXB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3J5cHRvczsiXSwic291cmNlUm9vdCI6IiJ9