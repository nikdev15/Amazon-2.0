self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./src/components/Product.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\nextjs\\Amazon-starter-template-nextjs\\src\\components\\ProductFeed.js";


function ProductFeed(_ref) {
  var _this = this;

  var products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: [products.slice(0, 4).map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          price = _ref2.price,
          description = _ref2.description,
          category = _ref2.category,
          image = _ref2.image;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 15
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "md:col-span-full",
      src: "https://links.papareact.com/dyz",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(function (_ref3) {
        var id = _ref3.id,
            title = _ref3.title,
            price = _ref3.price,
            description = _ref3.description,
            category = _ref3.category,
            image = _ref3.image;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: products.slice(5, products.length).map(function (_ref4) {
        var id = _ref4.id,
            title = _ref4.title,
            price = _ref4.price,
            description = _ref4.description,
            category = _ref4.category,
            image = _ref4.image;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, id, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = ProductFeed;
/* harmony default export */ __webpack_exports__["default"] = (ProductFeed);

var _c;

$RefreshReg$(_c, "ProductFeed");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMiXSwibmFtZXMiOlsiUHJvZHVjdEZlZWQiLCJwcm9kdWN0cyIsInNsaWNlIiwibWFwIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsV0FBVCxPQUFtQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMvQixzQkFDSTtBQUFLLGFBQVMsRUFBQyx5RkFBZjtBQUFBLGVBQ0lBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJDLEdBQXJCLENBQXlCO0FBQUEsVUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsVUFBT0MsS0FBUCxTQUFPQSxLQUFQO0FBQUEsVUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsVUFBcUJDLFdBQXJCLFNBQXFCQSxXQUFyQjtBQUFBLFVBQWtDQyxRQUFsQyxTQUFrQ0EsUUFBbEM7QUFBQSxVQUE0Q0MsS0FBNUMsU0FBNENBLEtBQTVDO0FBQUEsMEJBQ3ZCLDhEQUFDLDZDQUFEO0FBQ0UsVUFBRSxFQUFFTCxFQUROO0FBRUUsYUFBSyxFQUFFQyxLQUZUO0FBR0UsYUFBSyxFQUFFQyxLQUhUO0FBSUUsbUJBQVcsRUFBRUMsV0FKZjtBQUtFLGdCQUFRLEVBQUVDLFFBTFo7QUFNRSxhQUFLLEVBQUVDO0FBTlQsU0FBY0wsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHVCO0FBQUEsS0FBekIsQ0FESixlQVdHO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQWtDLFNBQUcsRUFBQyxpQ0FBdEM7QUFBd0UsU0FBRyxFQUFDO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSCxlQVlHO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSxnQkFDQ0gsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQkMsR0FBckIsQ0FBeUI7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxZQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxZQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxZQUFxQkMsV0FBckIsU0FBcUJBLFdBQXJCO0FBQUEsWUFBa0NDLFFBQWxDLFNBQWtDQSxRQUFsQztBQUFBLFlBQTRDQyxLQUE1QyxTQUE0Q0EsS0FBNUM7QUFBQSw0QkFDdkIsOERBQUMsNkNBQUQ7QUFDRSxZQUFFLEVBQUVMLEVBRE47QUFFRSxlQUFLLEVBQUVDLEtBRlQ7QUFHRSxlQUFLLEVBQUVDLEtBSFQ7QUFJRSxxQkFBVyxFQUFFQyxXQUpmO0FBS0Usa0JBQVEsRUFBRUMsUUFMWjtBQU1FLGVBQUssRUFBRUM7QUFOVCxXQUFjTCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHVCO0FBQUEsT0FBekI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkgsZUF3Qkk7QUFBQSxnQkFDQ0gsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixFQUFrQkQsUUFBUSxDQUFDUyxNQUEzQixFQUFtQ1AsR0FBbkMsQ0FBdUM7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxZQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxZQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxZQUFxQkMsV0FBckIsU0FBcUJBLFdBQXJCO0FBQUEsWUFBa0NDLFFBQWxDLFNBQWtDQSxRQUFsQztBQUFBLFlBQTRDQyxLQUE1QyxTQUE0Q0EsS0FBNUM7QUFBQSw0QkFDdEMsOERBQUMsNkNBQUQ7QUFDRSxZQUFFLEVBQUVMLEVBRE47QUFFRSxlQUFLLEVBQUVDLEtBRlQ7QUFHRSxlQUFLLEVBQUVDLEtBSFQ7QUFJRSxxQkFBVyxFQUFFQyxXQUpmO0FBS0Usa0JBQVEsRUFBRUMsUUFMWjtBQU1FLGVBQUssRUFBRUM7QUFOVCxXQUFjTCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHNDO0FBQUEsT0FBdkM7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUNIOztLQXhDUUosVztBQTBDVCwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MzNmYjA4OGI3YmJkNzMzOGQ5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEZlZWQoeyBwcm9kdWN0cyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93LWRlbnNlIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IG1kOi1tdC01MiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDAsIDQpLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IChcclxuICAgICAgICAgICAgICA8UHJvZHVjdCBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi1mdWxsXCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2R5elwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDQsIDUpLm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IChcclxuICAgICAgICAgICAgICA8UHJvZHVjdCBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoNSwgcHJvZHVjdHMubGVuZ3RoKS5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RmVlZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9