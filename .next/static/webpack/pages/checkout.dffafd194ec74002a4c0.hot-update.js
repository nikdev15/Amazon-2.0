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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
          lineNumber: 19,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col p-5 space-y-10 bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-3xl border-b pb-4",
            children: items.length === 0 ? "Your Amazon Cart is empty." : "Shopping Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
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
              lineNumber: 30,
              columnNumber: 25
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: items.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "whitespace-nowrap",
            children: ["Subtotal (", items.length, " items) :", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "font-bold",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "button mt-2 ".concat(!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-100'),
            children: !session ? 'Sign In to Checkout' : 'Proceed to Checkout'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_s(Checkout, "GYrFpkbRTefUG6IsOs+dcatrdqI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, next_auth_client__WEBPACK_IMPORTED_MODULE_8__.useSession];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImlkIiwidGl0bGUiLCJyYXRpbmciLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLE1BQU1DLEtBQUssR0FBR0Msd0RBQVcsQ0FBQ0MsNERBQUQsQ0FBekI7O0FBRGdCLG9CQUVFQyw0REFBVSxFQUZaO0FBQUE7QUFBQSxNQUVUQyxPQUZTOztBQUdoQixzQkFDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0csOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBRUc7QUFBTSxlQUFTLEVBQUMsa0NBQWhCO0FBQUEsOEJBRUM7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsZ0NBQ0ksOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsaUNBQVg7QUFDSSxlQUFLLEVBQUUsSUFEWDtBQUVJLGdCQUFNLEVBQUUsR0FGWjtBQUdJLG1CQUFTLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBTUk7QUFBSyxtQkFBUyxFQUFDLHVDQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLHdCQUFkO0FBQUEsc0JBQ0tKLEtBQUssQ0FBQ0ssTUFBTixLQUFpQixDQUFqQixHQUFxQiw0QkFBckIsR0FBb0Q7QUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUtLTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxnQ0FDUCw4REFBQyxnRUFBRDtBQUVJLGdCQUFFLEVBQUVELElBQUksQ0FBQ0UsRUFGYjtBQUdJLG1CQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FIaEI7QUFJSSxvQkFBTSxFQUFFSCxJQUFJLENBQUNJLE1BSmpCO0FBS0ksbUJBQUssRUFBRUosSUFBSSxDQUFDSyxLQUxoQjtBQU1JLHlCQUFXLEVBQUVMLElBQUksQ0FBQ00sV0FOdEI7QUFPSSxzQkFBUSxFQUFFTixJQUFJLENBQUNPLFFBUG5CO0FBUUksbUJBQUssRUFBRVAsSUFBSSxDQUFDUSxLQVJoQjtBQVNJLHNCQUFRLEVBQUVSLElBQUksQ0FBQ1M7QUFUbkIsZUFDU1IsQ0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURPO0FBQUEsV0FBVixDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQThCQztBQUFBLGtCQUNHUixLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUFmLGlCQUNHO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLG1CQUFkO0FBQUEscUNBQTZDTCxLQUFLLENBQUNLLE1BQW5ELDRCQUNBO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBLHFDQUNJLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBQVEscUJBQVMsd0JBQWlCLENBQUNELE9BQUQsSUFBWSx5REFBN0IsQ0FBakI7QUFBQSxzQkFDSyxDQUFDQSxPQUFELEdBQVcscUJBQVgsR0FBbUM7QUFEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1ESDs7R0F0RFFMLFE7VUFDU0Usb0QsRUFDSUUsd0Q7OztLQUZiSixRO0FBd0RULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LmRmZmFmZDE5NGVjNzQwMDJhNGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdEl0ZW1zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5pbXBvcnQgQ2hlY2tvdXRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoZWNrb3V0UHJvZHVjdFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpO1xyXG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibGc6ZmxleCBtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgey8qTGVmdCovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBtLTUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lralwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBzcGFjZS15LTEwIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGJvcmRlci1iIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMCA/IFwiWW91ciBBbWF6b24gQ2FydCBpcyBlbXB0eS5cIiA6IFwiU2hvcHBpbmcgQ2FydFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tvdXRQcm9kdWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZz17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByaW1lPXtpdGVtLmhhc1ByaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qUmlnaHQqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+U3VidG90YWwgKHtpdGVtcy5sZW5ndGh9IGl0ZW1zKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3kgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidXR0b24gbXQtMiAkeyFzZXNzaW9uICYmICdmcm9tLWdyYXktMzAwIHRvLWdyYXktNTAwIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktMTAwJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFzZXNzaW9uID8gJ1NpZ24gSW4gdG8gQ2hlY2tvdXQnIDogJ1Byb2NlZWQgdG8gQ2hlY2tvdXQnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfSAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9