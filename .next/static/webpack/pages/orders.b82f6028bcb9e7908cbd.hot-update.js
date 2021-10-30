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
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-screen-lg mx-auto p-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-3xl border-b mb-2 pb-1 border-yellow-400",
        children: "Your Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: " x Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Please signin to see your orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-5 space-y-4",
        children: orders === null || orders === void 0 ? void 0 : orders.map(function (order) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Order, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcyJdLCJuYW1lcyI6WyJPcmRlcnMiLCJvcmRlcnMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsIm1hcCIsIm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxTQUFTQSxNQUFULE9BQTRCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLG9CQUNOQyw0REFBVSxFQURKO0FBQUE7QUFBQSxNQUNqQkMsT0FEaUI7O0FBRXhCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxlQUFTLEVBQUMsOEJBQWhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLCtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFS0EsT0FBTyxnQkFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURJLGdCQUdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTFIsZUFRSTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQkFDS0YsTUFETCxhQUNLQSxNQURMLHVCQUNLQSxNQUFNLENBQUVHLEdBQVIsQ0FBWSxVQUFDQyxLQUFEO0FBQUEsOEJBQ1gsOERBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUEsU0FBWjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7R0F0QlFMLE07VUFDYUUsd0Q7OztLQURiRixNOztBQXdCVCwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlcnMuYjgyZjYwMjhiY2I5ZTc5MDhjYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XHJcblxyXG5mdW5jdGlvbiBPcmRlcnMoeyBvcmRlcnMgfSkge1xyXG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBteC1hdXRvIHAtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBib3JkZXItYiBtYi0yIHBiLTEgYm9yZGVyLXllbGxvdy00MDBcIj5Zb3VyIE9yZGVyczwvaDE+XHJcbiAgICAgICAgICAgICAgICB7c2Vzc2lvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDI+IHggT3JkZXJzPC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlBsZWFzZSBzaWduaW4gdG8gc2VlIHlvdXIgb3JkZXJzPC9oMj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcnM/Lm1hcCgob3JkZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxPcmRlciAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XHJcblxyXG4gICAgaWYoIXNlc3Npb24pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge30sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHJpcGVPcmRlcnMgPSBhd2FpdCBkYlxyXG4gICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcclxuICAgIC5kb2Moc2Vzc2lvbi51c2VyLmVtYWlsKVxyXG4gICAgLmNvbGxlY3Rpb24oJ29yZGVycycpXHJcbiAgICAub3JkZXJCeSgndGltZXN0YW1wJywgXCJkZXNjXCIpXHJcbiAgICAuZ2V0KCk7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgc3RyaXBlT3JkZXJzLmRvY3MubWFwKGFzeW5jIChvcmRlcikgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IG9yZGVyLmlkLFxyXG4gICAgICAgICAgICBhbW91bnQ6IG9yZGVyLmRhdGEoKS5hbW91bnQsXHJcbiAgICAgICAgICAgIGFtb3VudFNoaXBwaW5nOiBvcmRlci5kYXRhKCkuYW1vdW50X3NoaXBwaW5nLFxyXG4gICAgICAgICAgICBpbWFnZXM6IG9yZGVyLmRhdGEoKS5pbWFnZXMsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbW9tZW50KG9yZGVyLmRhdGEoKS50aW1lc3RhbXAudG9EYXRlKCkpLnVuaXgoKSxcclxuICAgICAgICAgICAgaXRlbXM6IChcclxuICAgICAgICAgICAgICAgIGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5saXN0TGluZUl0ZW1zKG9yZGVyLmlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkuZGF0YSxcclxuICAgICAgICB9KSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBvcmRlcnMsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=