self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/CheckoutProduct.js":
/*!*******************************************!*\
  !*** ./src/components/CheckoutProduct.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\nextjs\\Amazon-starter-template-nextjs\\src\\components\\CheckoutProduct.js";




function CheckoutProduct(_ref) {
  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      rating = _ref.rating,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image,
      hasPrime = _ref.hasPrime;
  var indianPrice = parseInt(price) * 75;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
            className: "h-5 text-yellow-500"
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs mt-2 mb-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {
        quantity: indianPrice,
        currency: "INR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          className: "w-12",
          src: "https://links.papareact.com/fdw",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 24
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs text-gray-500",
          children: "Free Next-day Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col space-y-2 my-auto justify-self-end",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button mt-auto",
        children: "Add to Cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button mt-auto",
        children: "Remove from Cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_c = CheckoutProduct;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutProduct);

var _c;

$RefreshReg$(_c, "CheckoutProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0UHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIiwiaW5kaWFuUHJpY2UiLCJwYXJzZUludCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9BQStGO0FBQUE7O0FBQUEsTUFBcEVDLEVBQW9FLFFBQXBFQSxFQUFvRTtBQUFBLE1BQWhFQyxLQUFnRSxRQUFoRUEsS0FBZ0U7QUFBQSxNQUF6REMsS0FBeUQsUUFBekRBLEtBQXlEO0FBQUEsTUFBbERDLE1BQWtELFFBQWxEQSxNQUFrRDtBQUFBLE1BQTFDQyxXQUEwQyxRQUExQ0EsV0FBMEM7QUFBQSxNQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMzRixNQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1AsS0FBRCxDQUFSLEdBQWtCLEVBQXRDO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSw0QkFDSSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRUksS0FBWjtBQUFtQixZQUFNLEVBQUUsR0FBM0I7QUFBZ0MsV0FBSyxFQUFFLEdBQXZDO0FBQTRDLGVBQVMsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNJO0FBQUEsa0JBQUlMO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxrQkFDS1MsS0FBSyxDQUFDUCxNQUFELENBQUwsQ0FBY1EsSUFBZCxHQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsOEJBQ3RCLDhEQUFDLDREQUFEO0FBQWtCLHFCQUFTLEVBQUM7QUFBNUIsYUFBZUEsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURzQjtBQUFBLFNBQXpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBUUk7QUFBRyxpQkFBUyxFQUFDLGdDQUFiO0FBQUEsa0JBQStDVjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosZUFTSSw4REFBQyxpRUFBRDtBQUFVLGdCQUFRLEVBQUVJLFdBQXBCO0FBQWlDLGdCQUFRLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLEVBV0tELFFBQVEsaUJBQ0w7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsZ0NBQ0c7QUFDQyxpQkFBTyxFQUFDLE1BRFQ7QUFFQyxtQkFBUyxFQUFDLE1BRlg7QUFHQyxhQUFHLEVBQUMsaUNBSEw7QUFJQyxhQUFHLEVBQUM7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGVBT0c7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBMEJJO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsOEJBQ0k7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtDSDs7S0FwQ1FSLGU7QUFzQ1QsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuMDM0MjE2NjFhMGRhOGQ5ZGE0NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0UHJvZHVjdCh7IGlkLCB0aXRsZSwgcHJpY2UsIHJhdGluZywgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSwgaGFzUHJpbWUgfSkge1xyXG4gICAgY29uc3QgaW5kaWFuUHJpY2UgPSBwYXJzZUludChwcmljZSkgKiA3NTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgbXgtNVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtBcnJheShyYXRpbmcpLmZpbGwoKS5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uIGtleT17aX0gY2xhc3NOYW1lPVwiaC01IHRleHQteWVsbG93LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG10LTIgbWItMiBsaW5lLWNsYW1wLTNcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtpbmRpYW5QcmljZX0gY3VycmVuY3k9XCJJTlJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNQcmltZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+RnJlZSBOZXh0LWRheSBEZWxpdmVyeTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMiBteS1hdXRvIGp1c3RpZnktc2VsZi1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG10LWF1dG9cIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gbXQtYXV0b1wiPlJlbW92ZSBmcm9tIENhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dFByb2R1Y3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==