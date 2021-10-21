self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\nextjs\\Amazon-starter-template-nextjs\\src\\components\\Product.js",
    _s = $RefreshSig$();







var MAX_RATING = 5;
var MIN_RATING = 1;

function Product(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),
      rating = _useState[0];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0];

  var indianPrice = parseInt(price) * 75;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var addItem = function addItem() {
    var product = {
      id: id,
      title: title,
      indianprice: indianprice,
      description: description,
      category: category,
      image: image
    };
    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__.addToBasket)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "my-3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
          className: "h-5 text-yellow-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: indianPrice,
        currency: "INR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 18
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-gray-500",
        children: "Free Next-day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 18
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: addItem,
      className: "mt-auto button",
      children: "Add to Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_s(Product, "6QI1D/xBBREJOnuul8n6LffEPbc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsImhhc1ByaW1lIiwiaW5kaWFuUHJpY2UiLCJwYXJzZUludCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGRJdGVtIiwicHJvZHVjdCIsImluZGlhbnByaWNlIiwiYWRkVG9CYXNrZXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFDLENBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFDLENBQWpCOztBQUVBLFNBQVNDLE9BQVQsT0FBcUU7QUFBQTs7QUFBQTs7QUFBQSxNQUFsREMsRUFBa0QsUUFBbERBLEVBQWtEO0FBQUEsTUFBOUNDLEtBQThDLFFBQTlDQSxLQUE4QztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsV0FBZ0MsUUFBaENBLFdBQWdDO0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxrQkFDaERDLCtDQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJaLFVBQVUsR0FBR0MsVUFBYixHQUEwQixDQUEzQyxDQUFYLElBQTREQSxVQUE3RCxDQUR3QztBQUFBLE1BQzFEWSxNQUQwRDs7QUFBQSxtQkFFOUNKLCtDQUFRLENBQUNDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUFqQixDQUZzQztBQUFBLE1BRTFERSxRQUYwRDs7QUFHakUsTUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNYLEtBQUQsQ0FBUixHQUFrQixFQUF0QztBQUNBLE1BQU1ZLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixRQUFNQyxPQUFPLEdBQUU7QUFDWmpCLFFBQUUsRUFBRkEsRUFEWTtBQUVaQyxXQUFLLEVBQUxBLEtBRlk7QUFHWmlCLGlCQUFXLEVBQVhBLFdBSFk7QUFJWmYsaUJBQVcsRUFBWEEsV0FKWTtBQUtaQyxjQUFRLEVBQVJBLFFBTFk7QUFNWkMsV0FBSyxFQUFMQTtBQU5ZLEtBQWY7QUFTQVMsWUFBUSxDQUFDSyxnRUFBVyxDQUFDRixPQUFELENBQVosQ0FBUjtBQUNILEdBWEQ7O0FBYUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQSw0QkFDRTtBQUFHLGVBQVMsRUFBQyxxREFBYjtBQUFBLGdCQUFvRWI7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0UsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVDLEtBQVo7QUFBbUIsWUFBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUssRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLGdCQUFzQko7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNLbUIsS0FBSyxDQUFDVixNQUFELENBQUwsQ0FBY1csSUFBZCxHQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsNEJBQ3hCLDhEQUFDLDREQUFEO0FBQVUsbUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR3QjtBQUFBLE9BQXpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBV0U7QUFBRyxlQUFTLEVBQUMsMkJBQWI7QUFBQSxnQkFBMENyQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFhRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0UsOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFFUyxXQUFwQjtBQUFpQyxnQkFBUSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsRUFpQkdELFFBQVEsaUJBQ0w7QUFBSyxlQUFTLEVBQUMsbUNBQWY7QUFBQSw4QkFDRztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFHLEVBQUMsaUNBQTFCO0FBQTRELFdBQUcsRUFBQztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFFRztBQUFHLGlCQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQk4sZUF3QkU7QUFBUSxhQUFPLEVBQUVLLE9BQWpCO0FBQTBCLGVBQVMsRUFBQyxnQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Qkg7O0dBaERRakIsTztVQUlZZ0Isb0Q7OztLQUpaaEIsTztBQWtEVCwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZTk2YzUzM2Y0OGYzYmIzZmFlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkVG9CYXNrZXQgfSBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcblxyXG5jb25zdCBNQVhfUkFUSU5HPTU7XHJcbmNvbnN0IE1JTl9SQVRJTkc9MTtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pIHtcclxuICAgIGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElORyk7XHJcbiAgICBjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSk7XHJcbiAgICBjb25zdCBpbmRpYW5QcmljZSA9IHBhcnNlSW50KHByaWNlKSAqIDc1O1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPXtcclxuICAgICAgICAgICBpZCxcclxuICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICBpbmRpYW5wcmljZSxcclxuICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICBpbWFnZSwgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goYWRkVG9CYXNrZXQocHJvZHVjdCkpXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBiZy13aGl0ZSB6LTMwIHAtMTBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPntjYXRlZ29yeX08L3A+XHJcblxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteS0zXCI+e3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICB7QXJyYXkocmF0aW5nKS5maWxsKCkubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPVwiaC01IHRleHQteWVsbG93LTUwMFwiIC8+IFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0yXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cclxuICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtpbmRpYW5QcmljZX0gY3VycmVuY3k9XCJJTlJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge2hhc1ByaW1lICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAtbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMlwiIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPkZyZWUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+IFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19IGNsYXNzTmFtZT1cIm10LWF1dG8gYnV0dG9uXCI+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=