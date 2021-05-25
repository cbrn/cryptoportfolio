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
                      children: [checkPrice(crypto.price_change_percentage_24h), " %"]
                    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jcnlwdG9zLmpzIl0sIm5hbWVzIjpbIkNyeXB0b3MiLCJwcm9wcyIsImNoZWNrUHJpY2UiLCJjb2luUHJpY2UiLCJjb2lucyIsIm1hcCIsImNyeXB0byIsImUiLCJSb3V0ZXIiLCJpZCIsImltYWdlIiwibmFtZSIsImN1cnJlbnRfcHJpY2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgiLCJtYXJrZXRfY2FwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBRXZCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFNBQUQsRUFBZTtBQUM5QixRQUFJQSxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDZiwwQkFBTztBQUFNLGlCQUFTLEVBQUMsMkZBQWhCO0FBQUEsa0JBQTZHQTtBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZELE1BR0ssSUFBSUEsU0FBUyxHQUFHLENBQWhCLEVBQW1CO0FBQ3BCLDBCQUFPO0FBQU0saUJBQVMsRUFBQyx1RkFBaEI7QUFBQSxrQkFBeUdBO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkksTUFHQTtBQUNELDBCQUFPO0FBQU0saUJBQVMsRUFBQyx5RkFBaEI7QUFBQSxrQkFBMkdBO0FBQTNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNIO0FBQ0osR0FWRDs7QUFZQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMseUNBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsMkRBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsK0RBQWY7QUFBQSxtQ0FDSTtBQUFPLHVCQUFTLEVBQUMscUNBQWpCO0FBQUEsc0NBQ0k7QUFBTyx5QkFBUyxFQUFDLFlBQWpCO0FBQUEsdUNBQ0k7QUFBQSwwQ0FDSTtBQUNJLHlCQUFLLEVBQUMsS0FEVjtBQUVJLDZCQUFTLEVBQUMsZ0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFLSTtBQUNJLHlCQUFLLEVBQUMsS0FEVjtBQUVJLDZCQUFTLEVBQUMsZ0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosZUFTSTtBQUNJLHlCQUFLLEVBQUMsS0FEVjtBQUVJLDZCQUFTLEVBQUMsZ0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEosZUFjSTtBQUNJLHlCQUFLLEVBQUMsS0FEVjtBQUVJLDZCQUFTLEVBQUMsZ0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQXVCSTtBQUFPLHlCQUFTLEVBQUMsbUNBQWpCO0FBQUEsMEJBQ0tGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLE1BQUQ7QUFBQSxzQ0FDYjtBQUFvQiwyQkFBTyxFQUFFLGlCQUFBQyxDQUFDO0FBQUEsNkJBQUlDLHVEQUFBLENBQVksY0FBWixvQkFBdUNGLE1BQU0sQ0FBQ0csRUFBOUMsRUFBSjtBQUFBLHFCQUE5QjtBQUFBLDRDQUNJO0FBQUksK0JBQVMsRUFBQyw2QkFBZDtBQUFBLDZDQUNJO0FBQUssaUNBQVMsRUFBQyxtQkFBZjtBQUFBLGdEQUNJO0FBQUssbUNBQVMsRUFBQyx5QkFBZjtBQUFBLGlEQUNJO0FBQUsscUNBQVMsRUFBQyx3QkFBZjtBQUF3QywrQkFBRyxFQUFFSCxNQUFNLENBQUNJLEtBQXBEO0FBQTJELCtCQUFHLEVBQUM7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREosZUFJSTtBQUFLLG1DQUFTLEVBQUMsTUFBZjtBQUFBLGlEQUNJO0FBQUsscUNBQVMsRUFBQyxtQ0FBZjtBQUFBLHNDQUFvREosTUFBTSxDQUFDSztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLGVBV0k7QUFBSSwrQkFBUyxFQUFDLDZCQUFkO0FBQUEsNkNBQ0k7QUFBTSxpQ0FBUyxFQUFDLHlGQUFoQjtBQUFBLHlDQUE2R0wsTUFBTSxDQUFDTSxhQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVhKLGVBY0k7QUFBSSwrQkFBUyxFQUFDLDZCQUFkO0FBQUEsaUNBQ0tWLFVBQVUsQ0FBQ0ksTUFBTSxDQUFDTywyQkFBUixDQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFkSixlQWlCSTtBQUFJLCtCQUFTLEVBQUMsbURBQWQ7QUFBQSx1Q0FBcUVQLE1BQU0sQ0FBQ1EsVUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWpCSjtBQUFBLHFCQUFTUixNQUFNLENBQUNHLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRGE7QUFBQSxpQkFBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMkRILENBekVEOztLQUFNVCxPO0FBMkVOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5NzlkNTljZjJkNDE2YjIzYzZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUFycm93VXAsIGZhQXJyb3dEb3duLCBmYU1vbmV5QmlsbFdhdmUsIGZhVHJvcGh5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBDcnlwdG9zID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2hlY2tQcmljZSA9IChjb2luUHJpY2UpID0+IHtcclxuICAgICAgICBpZiAoY29pblByaWNlID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBpbmxpbmUtZmxleCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDBcIj57Y29pblByaWNlfTwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29pblByaWNlIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBpbmxpbmUtZmxleCB0ZXh0LXhzIGxlYWRpbmctNSBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBiZy1yZWQtMTAwIHRleHQtcmVkLTgwMFwiPntjb2luUHJpY2V9PC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgaW5saW5lLWZsZXggdGV4dC14cyBsZWFkaW5nLTUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMFwiPntjb2luUHJpY2V9PC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXktMiBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgbGc6LW14LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgYWxpZ24tbWlkZGxlIGlubGluZS1ibG9jayBtaW4tdy1mdWxsIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHNtOnJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5OYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPkN1cnJlbnQgUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI0aCAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmtldCBDYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jb2lucy5tYXAoKGNyeXB0bykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Y3J5cHRvLmlkfSBvbkNsaWNrPXtlID0+IFJvdXRlci5wdXNoKCcvY3J5cHRvL1tpZF0nLCBgL2NyeXB0by8ke2NyeXB0by5pZH1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgaC0xMCB3LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtjcnlwdG8uaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+e2NyeXB0by5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIGlubGluZS1mbGV4IHRleHQteHMgbGVhZGluZy01IGZvbnQtc2VtaWJvbGQgcm91bmRlZC1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS04MDBcIj4kIHtjcnlwdG8uY3VycmVudF9wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja1ByaWNlKGNyeXB0by5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgpfSAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPiQge2NyeXB0by5tYXJrZXRfY2FwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0b3M7Il0sInNvdXJjZVJvb3QiOiIifQ==