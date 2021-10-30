(function() {
var exports = {};
exports.id = "pages/api/webhook";
exports.ids = ["pages/api/webhook"];
exports.modules = {

/***/ "./src/pages/api/webhook.js":
/*!**********************************!*\
  !*** ./src/pages/api/webhook.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micro */ "micro");
/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);



const serviceAccount = __webpack_require__(/*! ../../../permissions.json */ "./permissions.json");

const app = !firebase_admin__WEBPACK_IMPORTED_MODULE_1__.apps.length ? firebase_admin__WEBPACK_IMPORTED_MODULE_1__.initializeApp({
  credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.credential.cert(serviceAccount)
}) : firebase_admin__WEBPACK_IMPORTED_MODULE_1__.app();

const stripe = __webpack_require__(/*! stripe */ "stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fullfillOrder = async session => {
  //console.log('Fullfilling order', session);
  return app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id).set({
    amount: session.amount_total / 100,
    amount_shipping: session.total_details.amount_shipping / 100,
    images: JSON.parse(session.metadata.images),
    timestamp: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await (0,micro__WEBPACK_IMPORTED_MODULE_0__.buffer)(req);
    const payload = requestBuffer.toString(); //console.log(payload);

    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log('Error', err.message);
      return res.status(400).send(`webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      return fullfillOrder(session).then(() => res.status(200)).catch(err => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
});
const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

/***/ }),

/***/ "./permissions.json":
/*!**************************!*\
  !*** ./permissions.json ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"type":"service_account","project_id":"clone-f82a5","private_key_id":"c612927f8f8d3ac446f4f406b49ab531c49a41fa","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC4xqNltVTJ3IDS\\n++q5y6jXm24+EmMLpt6H6nLzCZxPzV3FBe3iTwCG7my/+DDK13RuefmsyXGQMOA8\\ncKmCLfVrILGnRQVYtbSUiETtzIOWOvm4xxwle10jANdy2TAZbK3KyZgPzfpJ4MCX\\nQbRzJgI37AYcYPBOVsInnOB2iNfTPWUptnss721urF+9NYZJHJPZjYpvpdcPMqAC\\nKnBCVR8a/FPSOgi0N7yoUJA+WrrEXjbzSbIASdgdm+zQoTOhFYU/fW6W4AUiLgsj\\noeFslYVgrL7yOUDgLRi/lGQ3EkRBO88SH9s7BzK4Wn6dCb8iq77D6GQi/tIKnz8u\\nRJZNWQN1AgMBAAECggEAMv01t+prJG1B63bzFiRaSm0s5dojFOMOg4kyAVlElk0A\\ntE7nj0znw1RmFC+EH2WHTrlAKetI+FZUerlIPZE7KT3TaGpGiG1UEKzuAIUwRrOt\\nl8zyOnGpiPBBhALlIA76gnxRBwN7Lwnje5n5FtGFSTNLmGczyRpt54qF8o/epv7Q\\nGMT5rKZ2Dpf0x5ulNQS4q7nP134rd7ZReDd2/8wVPw3xtRvETYQ6yq90YEqwAa1K\\nkg2ICTNq8JZhszjWTtI+VUz53IoVmVhde8OqV1RpHa5BTuShGHvHsHDLtaFrHNHc\\nHfjbwQntO4E/tDEwrdFXjPFTcWdQB1LdypmwLMtdPQKBgQD5Ec0q9WrNfF1kS1fD\\nEaHDeiKaiAOHeIMb8vkz45iZ5TESnrc+miEVss55nJNGF2h+yDVhLnqQbLZAnCPp\\nA7KHtJ+ye0kjzTAtGePCGtc0Xd4ryluA5Wrai6Jt9pL+PagvNCIyaJ5PmfRsVRv8\\nDgzud/gx0Ye3ZWaOqOMCKZi5swKBgQC96tqSQcr+zQmH2A/jrgSUF8Ghes6spdIb\\n6SEjWpLVB8WqrBRmZs2Xh+ZLH6l4b5BSKOXigrBZOrzYMP/lSAH+3Yd4ObZ5GZFi\\nCP2F1Sa7/vrPf30nXmoUsjuKGUySk7ikRZgrVgCr5Ht1DQs8QB6aatAZ0bAohdco\\nSHa64EdqNwJ/UrKWbK0PySqB18ssWJiCHWVwF98RTOm2npEOLSxkfrSalpQcQ6zp\\nT0sPQ1G5lIwxJedT0fCcwVdXLByrz7JqlKRkYd6NalW2qULvXIOM8NY57lBCEYoa\\n8HVseRZluATA0ut8b0BNUCDOByo7IHWJ1aP/xIrNhRcl9jgdJ5qoGwKBgQCm9SX9\\nWdWpNntgbvNZBwyDXHcfDKVQZd5WJxa4y9E1ckW1it3MQCgRRKmR9V24wOsxLz8Z\\naCa76sVFkZ4E5M7MTdfgO2xM/csvUhP+aapJrxiy/bL6vyem1iE9gIwud6rkz0G9\\nJzgj5RMbjcIIz52Xxrr3V73zgeXqRfoKw0xE9QKBgE4FgFJ3HO8hvehPo0PstpX/\\ndoyu1CD7ABZp6tQ+ibCM0B6J7uRfDnct0wyM1ZP9IRVRhaoZ8EfqQuq4jad+kM5r\\nEXtoHupIBtnb9N/lCfzR6Ra0j5Ipes1clBTYs5e0GqkUy5Hk5auORRr5eLT/M8Cq\\nmuxuzBPt7BvGh6PTmOvB\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-j22f1@clone-f82a5.iam.gserviceaccount.com","client_id":"105386294088247626079","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j22f1%40clone-f82a5.iam.gserviceaccount.com"}');

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase-admin");;

/***/ }),

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("micro");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/webhook.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2suanMiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0L2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvZXh0ZXJuYWwgXCJtaWNyb1wiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcInN0cmlwZVwiIl0sIm5hbWVzIjpbInNlcnZpY2VBY2NvdW50IiwicmVxdWlyZSIsImFwcCIsImFkbWluIiwiY3JlZGVudGlhbCIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImVuZHBvaW50U2VjcmV0IiwiU1RSSVBFX1NJR05JTkdfU0VDUkVUIiwiZnVsbGZpbGxPcmRlciIsInNlc3Npb24iLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwibWV0YWRhdGEiLCJlbWFpbCIsImlkIiwic2V0IiwiYW1vdW50IiwiYW1vdW50X3RvdGFsIiwiYW1vdW50X3NoaXBwaW5nIiwidG90YWxfZGV0YWlscyIsImltYWdlcyIsIkpTT04iLCJwYXJzZSIsInRpbWVzdGFtcCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVxdWVzdEJ1ZmZlciIsImJ1ZmZlciIsInBheWxvYWQiLCJ0b1N0cmluZyIsInNpZyIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJlcnIiLCJtZXNzYWdlIiwic3RhdHVzIiwic2VuZCIsInR5cGUiLCJkYXRhIiwib2JqZWN0IiwiY2F0Y2giLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiZXh0ZXJuYWxSZXNvbHZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLG1CQUFPLENB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NEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3dlYmhvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBidWZmZXIgfSBmcm9tIFwibWljcm9cIjtcclxuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xyXG5cclxuY29uc3Qgc2VydmljZUFjY291bnQgPSByZXF1aXJlKCcuLi8uLi8uLi9wZXJtaXNzaW9ucy5qc29uJyk7XHJcblxyXG5jb25zdCBhcHAgPSAhYWRtaW4uYXBwcy5sZW5ndGggPyBhZG1pbi5pbml0aWFsaXplQXBwICh7XHJcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoc2VydmljZUFjY291bnQpLFxyXG59KSA6IGFkbWluLmFwcCgpO1xyXG5cclxuY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xyXG5cclxuY29uc3QgZW5kcG9pbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5TVFJJUEVfU0lHTklOR19TRUNSRVQ7XHJcblxyXG5jb25zdCBmdWxsZmlsbE9yZGVyID0gYXN5bmMgKHNlc3Npb24pID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coJ0Z1bGxmaWxsaW5nIG9yZGVyJywgc2Vzc2lvbik7XHJcblxyXG4gICAgcmV0dXJuIGFwcFxyXG4gICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXHJcbiAgICAgICAgLmRvYyhzZXNzaW9uLm1ldGFkYXRhLmVtYWlsKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKCdvcmRlcnMnKVxyXG4gICAgICAgIC5kb2Moc2Vzc2lvbi5pZClcclxuICAgICAgICAuc2V0KHtcclxuICAgICAgICAgICAgYW1vdW50OiBzZXNzaW9uLmFtb3VudF90b3RhbCAvIDEwMCxcclxuICAgICAgICAgICAgYW1vdW50X3NoaXBwaW5nOiBzZXNzaW9uLnRvdGFsX2RldGFpbHMuYW1vdW50X3NoaXBwaW5nIC8gMTAwLFxyXG4gICAgICAgICAgICBpbWFnZXM6IEpTT04ucGFyc2Uoc2Vzc2lvbi5tZXRhZGF0YS5pbWFnZXMpLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IGFkbWluLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTVUNDRVNTOiBPcmRlciAke3Nlc3Npb24uaWR9IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBEQmApXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGlmKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdEJ1ZmZlciA9IGF3YWl0IGJ1ZmZlcihyZXEpO1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSByZXF1ZXN0QnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgICAgICBjb25zdCBzaWcgPSByZXEuaGVhZGVyc1tcInN0cmlwZS1zaWduYXR1cmVcIl07XHJcblxyXG4gICAgICAgIGxldCBldmVudDtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQocGF5bG9hZCwgc2lnLCBlbmRwb2ludFNlY3JldCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYHdlYmhvb2sgZXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGV2ZW50LnR5cGUgPT09ICdjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bGxmaWxsT3JkZXIoc2Vzc2lvbilcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHJlcy5zdGF0dXMoMjAwKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChgV2ViaG9vayBFcnJvcjogJHtlcnIubWVzc2FnZX1gKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaToge1xyXG4gICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gICAgICAgIGV4dGVybmFsUmVzb2x2ZXI6IHRydWUsXHJcbiAgICB9LFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaWNyb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9