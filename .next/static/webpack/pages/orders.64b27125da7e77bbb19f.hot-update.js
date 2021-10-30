self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./src/components/Order.js":
/*!*********************************!*\
  !*** ./src/components/Order.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\nextjs\\Amazon-starter-template-nextjs\\src\\components\\Order.js";



function Order(_ref) {
  var _this = this;

  var id = _ref.id,
      amount = _ref.amount,
      amountShipping = _ref.amountShipping,
      items = _ref.items,
      timestamp = _ref.timestamp,
      images = _ref.images;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative border rounded-md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "font-bold text-xs",
          children: "ORDER PLACED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: moment__WEBPACK_IMPORTED_MODULE_1___default().unix(timestamp).format("DD MMM YYYY")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs font-bold",
          children: "TOTAL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default()), {
            quantity: amount,
            currency: "INR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, this), " - Next Day Delivery", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default()), {
            quantity: amountShipping,
            currency: "INR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500",
        children: [items.length, " Items"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap",
        children: ["ORDER # ", id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "p-5 sm:p-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex space-x-6 overflow-x-auto",
        children: images.map(function (image) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: image,
            alt: "",
            className: "h-20 object-contain sm:h-32"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = Order;
/* harmony default export */ __webpack_exports__["default"] = (Order);

var _c;

$RefreshReg$(_c, "Order");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3JkZXIuanMiXSwibmFtZXMiOlsiT3JkZXIiLCJpZCIsImFtb3VudCIsImFtb3VudFNoaXBwaW5nIiwiaXRlbXMiLCJ0aW1lc3RhbXAiLCJpbWFnZXMiLCJtb21lbnQiLCJmb3JtYXQiLCJsZW5ndGgiLCJtYXAiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUF5RTtBQUFBOztBQUFBLE1BQXhEQyxFQUF3RCxRQUF4REEsRUFBd0Q7QUFBQSxNQUFwREMsTUFBb0QsUUFBcERBLE1BQW9EO0FBQUEsTUFBNUNDLGNBQTRDLFFBQTVDQSxjQUE0QztBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsU0FBcUIsUUFBckJBLFNBQXFCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ3JFLHNCQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsb0VBQWY7QUFBQSw4QkFDSTtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQUlDLGtEQUFBLENBQVlGLFNBQVosRUFBdUJHLE1BQXZCLENBQThCLGFBQTlCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU1JO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxrQ0FDSSw4REFBQyxpRUFBRDtBQUFVLG9CQUFRLEVBQUVOLE1BQXBCO0FBQTRCLG9CQUFRLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESiwwQkFDc0UsR0FEdEUsZUFFSSw4REFBQyxpRUFBRDtBQUFVLG9CQUFRLEVBQUVDLGNBQXBCO0FBQW9DLG9CQUFRLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFjSTtBQUFHLGlCQUFTLEVBQUMsK0VBQWI7QUFBQSxtQkFBOEZDLEtBQUssQ0FBQ0ssTUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosZUFnQkk7QUFBRyxpQkFBUyxFQUFDLHdFQUFiO0FBQUEsK0JBQStGUixFQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFxQkk7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGtCQUNLSyxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsOEJBQ1I7QUFBSyxlQUFHLEVBQUVBLEtBQVY7QUFBaUIsZUFBRyxFQUFDLEVBQXJCO0FBQXdCLHFCQUFTLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdDSDs7S0FqQ1FYLEs7QUFtQ1QsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXJzLjY0YjI3MTI1ZGE3ZTc3YmJiMTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIE9yZGVyKHsgaWQsIGFtb3VudCwgYW1vdW50U2hpcHBpbmcsIGl0ZW1zLCB0aW1lc3RhbXAsIGltYWdlcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBib3JkZXIgcm91bmRlZC1tZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xMCBwLTUgYmctZ3JheS0xMDAgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhzXCI+T1JERVIgUExBQ0VEPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttb21lbnQudW5peCh0aW1lc3RhbXApLmZvcm1hdChcIkREIE1NTSBZWVlZXCIpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGRcIj5UT1RBTDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXthbW91bnR9IGN1cnJlbmN5PVwiSU5SXCIgLz4gLSBOZXh0IERheSBEZWxpdmVyeXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXthbW91bnRTaGlwcGluZ30gY3VycmVuY3k9XCJJTlJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXAgc206dGV4dC14bCBzZWxmLWVuZCBmbGV4LTEgdGV4dC1yaWdodCB0ZXh0LWJsdWUtNTAwXCI+e2l0ZW1zLmxlbmd0aH0gSXRlbXM8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB3LTQwIGxnOnctNzIgdHJ1bmNhdGUgdGV4dC14cyB3aGl0ZXNwYWNlLW5vd3JhcFwiPk9SREVSICMge2lkfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgc206cC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiBvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJoLTIwIG9iamVjdC1jb250YWluIHNtOmgtMzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==