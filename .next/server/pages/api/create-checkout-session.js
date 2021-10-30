(function() {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stripe = __webpack_require__(/*! stripe */ "stripe")(process.env.STRIPE_SECRET_KEY);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    items,
    email
  } = req.body;
  const transformedItems = items.map(item => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: 'inr',
      unit_amount: item.indianPrice * 100,
      product_data: {
        name: item.title,
        images: [item.image]
      }
    }
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1JnNrySBZDmVDUhcJeRodfgi'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA', 'IN']
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map(item => item.image))
    }
  });
  res.status(200).json({
    id: session.id
  });
});

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcInN0cmlwZVwiIl0sIm5hbWVzIjpbInN0cmlwZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJyZXEiLCJyZXMiLCJpdGVtcyIsImVtYWlsIiwiYm9keSIsInRyYW5zZm9ybWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwiZGVzY3JpcHRpb24iLCJxdWFudGl0eSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInVuaXRfYW1vdW50IiwiaW5kaWFuUHJpY2UiLCJwcm9kdWN0X2RhdGEiLCJuYW1lIiwidGl0bGUiLCJpbWFnZXMiLCJpbWFnZSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzaGlwcGluZ19yYXRlcyIsInNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImFsbG93ZWRfY291bnRyaWVzIiwibGluZV9pdGVtcyIsIm1vZGUiLCJzdWNjZXNzX3VybCIsIkhPU1QiLCJjYW5jZWxfdXJsIiwibWV0YWRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUFQLENBQWtCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQTlCLENBQWY7O0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU07QUFBQ0MsU0FBRDtBQUFRQztBQUFSLE1BQWlCSCxHQUFHLENBQUNJLElBQTNCO0FBS0EsUUFBTUMsZ0JBQWdCLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFXQyxJQUFELEtBQVc7QUFDMUNDLGVBQVcsRUFBRUQsSUFBSSxDQUFDQyxXQUR3QjtBQUUxQ0MsWUFBUSxFQUFFLENBRmdDO0FBRzFDQyxjQUFVLEVBQUU7QUFDUkMsY0FBUSxFQUFFLEtBREY7QUFFUkMsaUJBQVcsRUFBRUwsSUFBSSxDQUFDTSxXQUFMLEdBQW1CLEdBRnhCO0FBR1JDLGtCQUFZLEVBQUU7QUFDVkMsWUFBSSxFQUFFUixJQUFJLENBQUNTLEtBREQ7QUFFVkMsY0FBTSxFQUFFLENBQUNWLElBQUksQ0FBQ1csS0FBTjtBQUZFO0FBSE47QUFIOEIsR0FBWCxDQUFWLENBQXpCO0FBYUEsUUFBTUMsT0FBTyxHQUFHLE1BQU14QixNQUFNLENBQUN5QixRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0M7QUFDbERDLHdCQUFvQixFQUFFLENBQUMsTUFBRCxDQUQ0QjtBQUVsREMsa0JBQWMsRUFBRSxDQUFDLDhCQUFELENBRmtDO0FBR2xEQywrQkFBMkIsRUFBRTtBQUN6QkMsdUJBQWlCLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkI7QUFETSxLQUhxQjtBQU1sREMsY0FBVSxFQUFFdEIsZ0JBTnNDO0FBT2xEdUIsUUFBSSxFQUFFLFNBUDRDO0FBUWxEQyxlQUFXLEVBQUcsR0FBRWhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0MsSUFBSyxVQVJpQjtBQVNsREMsY0FBVSxFQUFHLEdBQUVsQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWdDLElBQUssV0FUa0I7QUFVbERFLFlBQVEsRUFBRTtBQUNON0IsV0FETTtBQUVOYyxZQUFNLEVBQUVnQixJQUFJLENBQUNDLFNBQUwsQ0FBZWhDLEtBQUssQ0FBQ0ksR0FBTixDQUFXQyxJQUFELElBQVVBLElBQUksQ0FBQ1csS0FBekIsQ0FBZjtBQUZGO0FBVndDLEdBQWhDLENBQXRCO0FBZUFqQixLQUFHLENBQUNrQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBRSxFQUFHbEIsT0FBTyxDQUFDa0I7QUFBZixHQUFyQjtBQUNILENBbkNELEU7Ozs7Ozs7Ozs7O0FDRkEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHtpdGVtcywgZW1haWx9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm1lZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgIHByaWNlX2RhdGE6IHtcclxuICAgICAgICAgICAgY3VycmVuY3k6ICdpbnInLFxyXG4gICAgICAgICAgICB1bml0X2Ftb3VudDogaXRlbS5pbmRpYW5QcmljZSAqIDEwMCxcclxuICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBbaXRlbS5pbWFnZV1cclxuICAgICAgICAgICAgfSwgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnY2FyZCddLFxyXG4gICAgICAgIHNoaXBwaW5nX3JhdGVzOiBbJ3Nocl8xSm5OcnlTQlpEbVZEVWhjSmVSb2RmZ2knXSxcclxuICAgICAgICBzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb246IHtcclxuICAgICAgICAgICAgYWxsb3dlZF9jb3VudHJpZXM6IFsnR0InLCAnVVMnLCAnQ0EnLCAnSU4nXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbmVfaXRlbXM6IHRyYW5zZm9ybWVkSXRlbXMsXHJcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxyXG4gICAgICAgIHN1Y2Nlc3NfdXJsOiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdWNjZXNzYCxcclxuICAgICAgICBjYW5jZWxfdXJsOiBgJHtwcm9jZXNzLmVudi5IT1NUfS9jaGVja291dGAsXHJcbiAgICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIGltYWdlczogSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmltYWdlICkpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBpZCA6IHNlc3Npb24uaWQgfSk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9