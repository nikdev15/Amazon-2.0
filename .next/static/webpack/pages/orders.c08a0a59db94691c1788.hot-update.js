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
        children: " x Orders"
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVycy5qcyJdLCJuYW1lcyI6WyJPcmRlcnMiLCJvcmRlcnMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsIm1hcCIsImlkIiwiYW1vdW50IiwiYW1vdW50U2hpcHBpbmciLCJpdGVtcyIsInRpbWVzdGFtcCIsImltYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBRUEsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxvQkFDTkMsNERBQVUsRUFESjtBQUFBO0FBQUEsTUFDakJDLE9BRGlCOztBQUV4QixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sZUFBUyxFQUFDLDhCQUFoQjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUtBLE9BQU8sZ0JBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESSxnQkFHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxSLGVBUUk7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0JBQ0tGLE1BREwsYUFDS0EsTUFETCx1QkFDS0EsTUFBTSxDQUFFRyxHQUFSLENBQVk7QUFBQSxjQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxjQUFPQyxNQUFQLFNBQU9BLE1BQVA7QUFBQSxjQUFlQyxjQUFmLFNBQWVBLGNBQWY7QUFBQSxjQUErQkMsS0FBL0IsU0FBK0JBLEtBQS9CO0FBQUEsY0FBc0NDLFNBQXRDLFNBQXNDQSxTQUF0QztBQUFBLGNBQWlEQyxNQUFqRCxTQUFpREEsTUFBakQ7QUFBQSw4QkFDWCw4REFBQyxzREFBRDtBQUVFLGNBQUUsRUFBRUwsRUFGTjtBQUdFLGtCQUFNLEVBQUVDLE1BSFY7QUFJRSwwQkFBYyxFQUFFQyxjQUpsQjtBQUtFLGlCQUFLLEVBQUVDLEtBTFQ7QUFNRSxxQkFBUyxFQUFFQyxTQU5iO0FBT0Usa0JBQU0sRUFBRUM7QUFQVixhQUNPTCxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQSxTQUFaO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIOztHQTlCUUwsTTtVQUNhRSx3RDs7O0tBRGJGLE07O0FBZ0NULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVycy5jMDhhMGE1OWRiOTQ2OTFjMTc4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBkYiBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL09yZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBPcmRlcnMoeyBvcmRlcnMgfSkge1xyXG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBteC1hdXRvIHAtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBib3JkZXItYiBtYi0yIHBiLTEgYm9yZGVyLXllbGxvdy00MDBcIj5Zb3VyIE9yZGVyczwvaDE+XHJcbiAgICAgICAgICAgICAgICB7c2Vzc2lvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDI+IHggT3JkZXJzPC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlBsZWFzZSBzaWduaW4gdG8gc2VlIHlvdXIgb3JkZXJzPC9oMj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcnM/Lm1hcCgoeyBpZCwgYW1vdW50LCBhbW91bnRTaGlwcGluZywgaXRlbXMsIHRpbWVzdGFtcCwgaW1hZ2VzIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRTaGlwcGluZz17YW1vdW50U2hpcHBpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wPXt0aW1lc3RhbXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVycztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xyXG5cclxuICAgIGlmKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RyaXBlT3JkZXJzID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXHJcbiAgICAuZG9jKHNlc3Npb24udXNlci5lbWFpbClcclxuICAgIC5jb2xsZWN0aW9uKCdvcmRlcnMnKVxyXG4gICAgLm9yZGVyQnkoJ3RpbWVzdGFtcCcsIFwiZGVzY1wiKVxyXG4gICAgLmdldCgpO1xyXG5cclxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIHN0cmlwZU9yZGVycy5kb2NzLm1hcChhc3luYyAob3JkZXIpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcclxuICAgICAgICAgICAgYW1vdW50OiBvcmRlci5kYXRhKCkuYW1vdW50LFxyXG4gICAgICAgICAgICBhbW91bnRTaGlwcGluZzogb3JkZXIuZGF0YSgpLmFtb3VudF9zaGlwcGluZyxcclxuICAgICAgICAgICAgaW1hZ2VzOiBvcmRlci5kYXRhKCkuaW1hZ2VzLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG1vbWVudChvcmRlci5kYXRhKCkudGltZXN0YW1wLnRvRGF0ZSgpKS51bml4KCksXHJcbiAgICAgICAgICAgIGl0ZW1zOiAoXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMubGlzdExpbmVJdGVtcyhvcmRlci5pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApLmRhdGEsXHJcbiAgICAgICAgfSkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9