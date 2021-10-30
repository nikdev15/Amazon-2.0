self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./src/pages/orders.js":
/*!*****************************!*\
  !*** ./src/pages/orders.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_nextjs_Amazon_starter_template_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Order */ "./src/components/Order.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\nextjs\\Amazon-starter-template-nextjs\\src\\pages\\orders.js",
    _s = $RefreshSig$();





function Orders(_ref) {
  _s();

  var _this = this;

  var orders = _ref.orders;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession)(),
      _useSession2 = (0,D_nextjs_Amazon_starter_template_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 1),
      session = _useSession2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-screen-lg mx-auto p-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-3xl border-b mb-2 pb-1 border-yellow-400",
        children: "Your Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [" ", orders.length, " Orders"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Please signin to see your orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-5 space-y-4",
        children: orders === null || orders === void 0 ? void 0 : orders.map(function (_ref2) {
          var id = _ref2.id,
              amount = _ref2.amount,
              amountShipping = _ref2.amountShipping,
              items = _ref2.items,
              timestamp = _ref2.timestamp,
              images = _ref2.images;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Order__WEBPACK_IMPORTED_MODULE_4__.default, {
            id: id,
            amount: amount,
            amountShipping: amountShipping,
            items: items,
            timestamp: timestamp,
            images: images
          }, id, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

_s(Orders, "Vxy5gMemEU/s8dbgarDyE2/t+kg=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession];
});

_c = Orders;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Orders);

var _c;

$RefreshReg$(_c, "Orders");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcyJdLCJuYW1lcyI6WyJPcmRlcnMiLCJvcmRlcnMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxlbmd0aCIsIm1hcCIsImlkIiwiYW1vdW50IiwiYW1vdW50U2hpcHBpbmciLCJpdGVtcyIsInRpbWVzdGFtcCIsImltYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBRUEsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxvQkFDTkMsNERBQVUsRUFESjtBQUFBO0FBQUEsTUFDakJDLE9BRGlCOztBQUV4QixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sZUFBUyxFQUFDLDhCQUFoQjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUtBLE9BQU8sZ0JBQ0o7QUFBQSx3QkFBTUYsTUFBTSxDQUFDRyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURJLGdCQUdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTFIsZUFRSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQkFDS0gsTUFETCxhQUNLQSxNQURMLHVCQUNLQSxNQUFNLENBQUVJLEdBQVIsQ0FBWTtBQUFBLGNBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLGNBQU9DLE1BQVAsU0FBT0EsTUFBUDtBQUFBLGNBQWVDLGNBQWYsU0FBZUEsY0FBZjtBQUFBLGNBQStCQyxLQUEvQixTQUErQkEsS0FBL0I7QUFBQSxjQUFzQ0MsU0FBdEMsU0FBc0NBLFNBQXRDO0FBQUEsY0FBaURDLE1BQWpELFNBQWlEQSxNQUFqRDtBQUFBLDhCQUNYLDhEQUFDLHNEQUFEO0FBRUUsY0FBRSxFQUFFTCxFQUZOO0FBR0Usa0JBQU0sRUFBRUMsTUFIVjtBQUlFLDBCQUFjLEVBQUVDLGNBSmxCO0FBS0UsaUJBQUssRUFBRUMsS0FMVDtBQU1FLHFCQUFTLEVBQUVDLFNBTmI7QUFPRSxrQkFBTSxFQUFFQztBQVBWLGFBQ09MLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBLFNBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Qkg7O0dBOUJRTixNO1VBQ2FFLHdEOzs7S0FEYkYsTTs7QUFnQ1QsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXJzLjgxNmIxNzU1MWU2MDI3M2I4MTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvT3JkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIE9yZGVycyh7IG9yZGVycyB9KSB7XHJcbiAgICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIG14LWF1dG8gcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGJvcmRlci1iIG1iLTIgcGItMSBib3JkZXIteWVsbG93LTQwMFwiPllvdXIgT3JkZXJzPC9oMT5cclxuICAgICAgICAgICAgICAgIHtzZXNzaW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4ge29yZGVycy5sZW5ndGh9IE9yZGVyczwvaDI+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5QbGVhc2Ugc2lnbmluIHRvIHNlZSB5b3VyIG9yZGVyczwvaDI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJzPy5tYXAoKHsgaWQsIGFtb3VudCwgYW1vdW50U2hpcHBpbmcsIGl0ZW1zLCB0aW1lc3RhbXAsIGltYWdlcyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50U2hpcHBpbmc9e2Ftb3VudFNoaXBwaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcD17dGltZXN0YW1wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcnM7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcclxuXHJcbiAgICBpZighc2Vzc2lvbikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0cmlwZU9yZGVycyA9IGF3YWl0IGRiXHJcbiAgICAuY29sbGVjdGlvbigndXNlcnMnKVxyXG4gICAgLmRvYyhzZXNzaW9uLnVzZXIuZW1haWwpXHJcbiAgICAuY29sbGVjdGlvbignb3JkZXJzJylcclxuICAgIC5vcmRlckJ5KCd0aW1lc3RhbXAnLCBcImRlc2NcIilcclxuICAgIC5nZXQoKTtcclxuXHJcbiAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBzdHJpcGVPcmRlcnMuZG9jcy5tYXAoYXN5bmMgKG9yZGVyKSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogb3JkZXIuaWQsXHJcbiAgICAgICAgICAgIGFtb3VudDogb3JkZXIuZGF0YSgpLmFtb3VudCxcclxuICAgICAgICAgICAgYW1vdW50U2hpcHBpbmc6IG9yZGVyLmRhdGEoKS5hbW91bnRfc2hpcHBpbmcsXHJcbiAgICAgICAgICAgIGltYWdlczogb3JkZXIuZGF0YSgpLmltYWdlcyxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBtb21lbnQob3JkZXIuZGF0YSgpLnRpbWVzdGFtcC50b0RhdGUoKSkudW5peCgpLFxyXG4gICAgICAgICAgICBpdGVtczogKFxyXG4gICAgICAgICAgICAgICAgYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmxpc3RMaW5lSXRlbXMob3JkZXIuaWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKS5kYXRhLFxyXG4gICAgICAgIH0pKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==