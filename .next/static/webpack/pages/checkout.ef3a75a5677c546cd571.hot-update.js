self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/pages/checkout.js":
/*!*******************************!*\
  !*** ./src/pages/checkout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_nextjs_Amazon_starter_template_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");
/* harmony import */ var _components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CheckoutProduct */ "./src/components/CheckoutProduct.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\nextjs\\Amazon-starter-template-nextjs\\src\\pages\\checkout.js",
    _s = $RefreshSig$();









function Checkout() {
  _s();

  var _this = this;

  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectItems);

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession)(),
      _useSession2 = (0,D_nextjs_Amazon_starter_template_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  var total = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectTotal);
  var indianTotal = parseInt(total) * 75;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "lg:flex max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-grow m-5 shadow-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "https://links.papareact.com/ikj",
          width: 1020,
          height: 250,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-y-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? "Your Amazon Cart is empty." : "Shopping Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this), items.map(function (item, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_6__.default, {
              id: item.id,
              title: item.title,
              rating: item.rating,
              price: item.price,
              description: item.description,
              category: item.category,
              image: item.image,
              hasPrime: item.hasPrime
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col bg-white p-10 shadow-md",
        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["Subtotal (", items.length, " items) :", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_7___default()), {
                quantity: indianTotal,
                currency: "INR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            disabled: !session,
            className: "button mt-2 ".concat(!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-100 cursor-not-allowed'),
            children: !session ? 'Sign In to Checkout' : 'Proceed to Checkout'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(Checkout, "XRVp98pPB7px7/cy2TgoFaCKpag=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJ0b3RhbCIsInNlbGVjdFRvdGFsIiwiaW5kaWFuVG90YWwiLCJwYXJzZUludCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpIiwiaWQiLCJ0aXRsZSIsInJhdGluZyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwiaGFzUHJpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsS0FBSyxHQUFHQyx3REFBVyxDQUFDQyw0REFBRCxDQUF6Qjs7QUFEZ0Isb0JBRUVDLDREQUFVLEVBRlo7QUFBQTtBQUFBLE1BRVRDLE9BRlM7O0FBR2hCLE1BQU1DLEtBQUssR0FBR0osd0RBQVcsQ0FBQ0ssNERBQUQsQ0FBekI7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0gsS0FBRCxDQUFSLEdBQWtCLEVBQXRDO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDRCQUNHLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxlQUVHO0FBQU0sZUFBUyxFQUFDLGtDQUFoQjtBQUFBLDhCQUVDO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLGlDQUFYO0FBQ0ksZUFBSyxFQUFFLElBRFg7QUFFSSxnQkFBTSxFQUFFLEdBRlo7QUFHSSxtQkFBUyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUssbUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyx3QkFBZDtBQUFBLHNCQUNLTCxLQUFLLENBQUNTLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsNEJBQXJCLEdBQW9EO0FBRHpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFLS1QsS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsZ0NBQ1AsOERBQUMsZ0VBQUQ7QUFFSSxnQkFBRSxFQUFFRCxJQUFJLENBQUNFLEVBRmI7QUFHSSxtQkFBSyxFQUFFRixJQUFJLENBQUNHLEtBSGhCO0FBSUksb0JBQU0sRUFBRUgsSUFBSSxDQUFDSSxNQUpqQjtBQUtJLG1CQUFLLEVBQUVKLElBQUksQ0FBQ0ssS0FMaEI7QUFNSSx5QkFBVyxFQUFFTCxJQUFJLENBQUNNLFdBTnRCO0FBT0ksc0JBQVEsRUFBRU4sSUFBSSxDQUFDTyxRQVBuQjtBQVFJLG1CQUFLLEVBQUVQLElBQUksQ0FBQ1EsS0FSaEI7QUFTSSxzQkFBUSxFQUFFUixJQUFJLENBQUNTO0FBVG5CLGVBQ1NSLENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETztBQUFBLFdBQVYsQ0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUE4QkM7QUFBSyxpQkFBUyxFQUFDLHVDQUFmO0FBQUEsa0JBQ0daLEtBQUssQ0FBQ1MsTUFBTixHQUFlLENBQWYsaUJBQ0c7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsbUJBQWQ7QUFBQSxxQ0FBNkNULEtBQUssQ0FBQ1MsTUFBbkQsNEJBQ0E7QUFBTSx1QkFBUyxFQUFDLFdBQWhCO0FBQUEscUNBQ0ksOERBQUMsaUVBQUQ7QUFBVSx3QkFBUSxFQUFFRixXQUFwQjtBQUFpQyx3QkFBUSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBQVEsb0JBQVEsRUFBRSxDQUFDSCxPQUFuQjtBQUE0QixxQkFBUyx3QkFBaUIsQ0FBQ0EsT0FBRCxJQUFZLDRFQUE3QixDQUFyQztBQUFBLHNCQUNLLENBQUNBLE9BQUQsR0FBVyxxQkFBWCxHQUFtQztBQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbURIOztHQXhEUUwsUTtVQUNTRSxvRCxFQUNJRSx3RCxFQUNKRixvRDs7O0tBSFRGLFE7QUEwRFQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuZWYzYTc1YTU2NzdjNTQ2Y2Q1NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0SXRlbXMsIHNlbGVjdFRvdGFsIH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5pbXBvcnQgQ2hlY2tvdXRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoZWNrb3V0UHJvZHVjdFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpO1xyXG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgY29uc3QgdG90YWwgPSB1c2VTZWxlY3RvcihzZWxlY3RUb3RhbCk7XHJcbiAgICBjb25zdCBpbmRpYW5Ub3RhbCA9IHBhcnNlSW50KHRvdGFsKSAqIDc1O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgey8qTGVmdCovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBtLTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lralwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBzcGFjZS15LTEwIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGJvcmRlci1iIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMCA/IFwiWW91ciBBbWF6b24gQ2FydCBpcyBlbXB0eS5cIiA6IFwiU2hvcHBpbmcgQ2FydFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZz17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByaW1lPXtpdGVtLmhhc1ByaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qUmlnaHQqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLXdoaXRlIHAtMTAgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcFwiPlN1YnRvdGFsICh7aXRlbXMubGVuZ3RofSBpdGVtcykgOiBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtpbmRpYW5Ub3RhbH0gY3VycmVuY3k9XCJJTlJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshc2Vzc2lvbn0gY2xhc3NOYW1lPXtgYnV0dG9uIG10LTIgJHshc2Vzc2lvbiAmJiAnZnJvbS1ncmF5LTMwMCB0by1ncmF5LTUwMCBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTEwMCBjdXJzb3Itbm90LWFsbG93ZWQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXNlc3Npb24gPyAnU2lnbiBJbiB0byBDaGVja291dCcgOiAnUHJvY2VlZCB0byBDaGVja291dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=