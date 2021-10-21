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
      price: price,
      rating: rating,
      description: description,
      category: category,
      image: image,
      hasPrime: hasPrime
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
      lineNumber: 34,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "my-3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
          className: "h-5 text-yellow-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
        quantity: indianPrice,
        currency: "INR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 18
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-gray-500",
        children: "Free Next-day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 18
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: addItem,
      className: "mt-auto button",
      children: "Add to Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsImhhc1ByaW1lIiwiaW5kaWFuUHJpY2UiLCJwYXJzZUludCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGRJdGVtIiwicHJvZHVjdCIsImFkZFRvQmFza2V0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBQyxDQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBQyxDQUFqQjs7QUFFQSxTQUFTQyxPQUFULE9BQXFFO0FBQUE7O0FBQUE7O0FBQUEsTUFBbERDLEVBQWtELFFBQWxEQSxFQUFrRDtBQUFBLE1BQTlDQyxLQUE4QyxRQUE5Q0EsS0FBOEM7QUFBQSxNQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ2hEQywrQ0FBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCWixVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBM0MsQ0FBWCxJQUE0REEsVUFBN0QsQ0FEd0M7QUFBQSxNQUMxRFksTUFEMEQ7O0FBQUEsbUJBRTlDSiwrQ0FBUSxDQUFDQyxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBakIsQ0FGc0M7QUFBQSxNQUUxREUsUUFGMEQ7O0FBR2pFLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDWCxLQUFELENBQVIsR0FBa0IsRUFBdEM7QUFDQSxNQUFNWSxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEIsUUFBTUMsT0FBTyxHQUFFO0FBQ1pqQixRQUFFLEVBQUZBLEVBRFk7QUFFWkMsV0FBSyxFQUFMQSxLQUZZO0FBR1pDLFdBQUssRUFBTEEsS0FIWTtBQUlaUSxZQUFNLEVBQU5BLE1BSlk7QUFLWlAsaUJBQVcsRUFBWEEsV0FMWTtBQU1aQyxjQUFRLEVBQVJBLFFBTlk7QUFPWkMsV0FBSyxFQUFMQSxLQVBZO0FBUVpNLGNBQVEsRUFBUkE7QUFSWSxLQUFmO0FBV0FHLFlBQVEsQ0FBQ0ksZ0VBQVcsQ0FBQ0QsT0FBRCxDQUFaLENBQVI7QUFDSCxHQWJEOztBQWVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUMscURBQWI7QUFBQSxnQkFBb0ViO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFQyxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFBc0JKO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDS2tCLEtBQUssQ0FBQ1QsTUFBRCxDQUFMLENBQWNVLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDRCQUN4Qiw4REFBQyw0REFBRDtBQUFVLG1CQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEd0I7QUFBQSxPQUF6QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVdFO0FBQUcsZUFBUyxFQUFDLDJCQUFiO0FBQUEsZ0JBQTBDcEI7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBYUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQUNFLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRVMsV0FBcEI7QUFBaUMsZ0JBQVEsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLEVBaUJHRCxRQUFRLGlCQUNMO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0c7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBRyxFQUFDLGlDQUExQjtBQUE0RCxXQUFHLEVBQUM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBRUc7QUFBRyxpQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJOLGVBd0JFO0FBQVEsYUFBTyxFQUFFSyxPQUFqQjtBQUEwQixlQUFTLEVBQUMsZ0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJIOztHQWxEUWpCLE87VUFJWWdCLG9EOzs7S0FKWmhCLE87QUFvRFQsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTdkY2ViZjIyYjU4MjAyNzg4OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRvQmFza2V0IH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xyXG5cclxuY29uc3QgTUFYX1JBVElORz01O1xyXG5jb25zdCBNSU5fUkFUSU5HPTE7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSB7XHJcbiAgICBjb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpKSArIE1JTl9SQVRJTkcpO1xyXG4gICAgY29uc3QgW2hhc1ByaW1lXSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkgPCAwLjUpO1xyXG4gICAgY29uc3QgaW5kaWFuUHJpY2UgPSBwYXJzZUludChwcmljZSkgKiA3NTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID17XHJcbiAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgcmF0aW5nLFxyXG4gICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgIGhhc1ByaW1lLCBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkaXNwYXRjaChhZGRUb0Jhc2tldChwcm9kdWN0KSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbS01IGJnLXdoaXRlIHotMzAgcC0xMFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXhzIGl0YWxpYyB0ZXh0LWdyYXktNDAwXCI+e2NhdGVnb3J5fTwvcD5cclxuXHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTNcIj57dGl0bGV9PC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgIHtBcnJheShyYXRpbmcpLmZpbGwoKS5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwXCIgLz4gXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXktMiBsaW5lLWNsYW1wLTJcIj57ZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxyXG4gICAgICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e2luZGlhblByaWNlfSBjdXJyZW5jeT1cIklOUlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIC1tdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEyXCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2Zkd1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+RnJlZSBOZXh0LWRheSBEZWxpdmVyeTwvcD4gXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkSXRlbX0gY2xhc3NOYW1lPVwibXQtYXV0byBidXR0b25cIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==