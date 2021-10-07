"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/common/data/dummyReplyData.js":
/*!*******************************************!*\
  !*** ./src/common/data/dummyReplyData.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dummyReplyList": function() { return /* binding */ dummyReplyList; },
/* harmony export */   "getReplyList": function() { return /* binding */ getReplyList; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const dummyReplyList = [{
  id: 1,
  boardId: 1,
  content: "ㄹㅇㅋㅋ",
  writer: "이준희",
  updateTime: "2021.10.07 16:51:00"
}, {
  id: 2,
  boardId: 1,
  content: "ㄹㅇㅋㅋ",
  writer: "황동욱",
  updateTime: "2021.10.07 16:51:00"
}, {
  id: 3,
  boardId: 1,
  content: "ㄹㅇㅋㅋ",
  writer: "최국철",
  updateTime: "2021.10.07 16:51:00"
}, {
  id: 4,
  boardId: 1,
  content: "ㄹㅇㅋㅋ",
  writer: "기호영",
  updateTime: "2021.10.07 16:51:00"
}];
const getReplyList = Id => {
  const result = dummyReplyList.filter(reply => reply.boardId === Id);
  console.log(result);
  return result;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS42MTMyNWQ3MjZlYjM5YWUwZmNkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLGNBQWMsR0FBRyxDQUM1QjtBQUNFQyxFQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxFQUFBQSxPQUFPLEVBQUUsQ0FGWDtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsTUFIWDtBQUlFQyxFQUFBQSxNQUFNLEVBQUUsS0FKVjtBQUtFQyxFQUFBQSxVQUFVLEVBQUU7QUFMZCxDQUQ0QixFQVE1QjtBQUNFSixFQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxFQUFBQSxPQUFPLEVBQUUsQ0FGWDtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsTUFIWDtBQUlFQyxFQUFBQSxNQUFNLEVBQUUsS0FKVjtBQUtFQyxFQUFBQSxVQUFVLEVBQUU7QUFMZCxDQVI0QixFQWU1QjtBQUNFSixFQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxFQUFBQSxPQUFPLEVBQUUsQ0FGWDtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsTUFIWDtBQUlFQyxFQUFBQSxNQUFNLEVBQUUsS0FKVjtBQUtFQyxFQUFBQSxVQUFVLEVBQUU7QUFMZCxDQWY0QixFQXNCNUI7QUFDRUosRUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRUMsRUFBQUEsT0FBTyxFQUFFLENBRlg7QUFHRUMsRUFBQUEsT0FBTyxFQUFFLE1BSFg7QUFJRUMsRUFBQUEsTUFBTSxFQUFFLEtBSlY7QUFLRUMsRUFBQUEsVUFBVSxFQUFFO0FBTGQsQ0F0QjRCLENBQXZCO0FBK0JBLE1BQU1DLFlBQVksR0FBSUMsRUFBRCxJQUFRO0FBQ2xDLFFBQU1DLE1BQU0sR0FBR1IsY0FBYyxDQUFDUyxNQUFmLENBQXVCQyxLQUFELElBQVdBLEtBQUssQ0FBQ1IsT0FBTixLQUFrQkssRUFBbkQsQ0FBZjtBQUNBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBLFNBQU9BLE1BQVA7QUFDRCxDQUpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21tb24vZGF0YS9kdW1teVJlcGx5RGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZHVtbXlSZXBseUxpc3QgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBib2FyZElkOiAxLFxyXG4gICAgY29udGVudDogXCLjhLnjhYfjhYvjhYtcIixcclxuICAgIHdyaXRlcjogXCLsnbTspIDtnaxcIixcclxuICAgIHVwZGF0ZVRpbWU6IFwiMjAyMS4xMC4wNyAxNjo1MTowMFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBib2FyZElkOiAxLFxyXG4gICAgY29udGVudDogXCLjhLnjhYfjhYvjhYtcIixcclxuICAgIHdyaXRlcjogXCLtmanrj5nsmrFcIixcclxuICAgIHVwZGF0ZVRpbWU6IFwiMjAyMS4xMC4wNyAxNjo1MTowMFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBib2FyZElkOiAxLFxyXG4gICAgY29udGVudDogXCLjhLnjhYfjhYvjhYtcIixcclxuICAgIHdyaXRlcjogXCLstZzqta3ssqBcIixcclxuICAgIHVwZGF0ZVRpbWU6IFwiMjAyMS4xMC4wNyAxNjo1MTowMFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBib2FyZElkOiAxLFxyXG4gICAgY29udGVudDogXCLjhLnjhYfjhYvjhYtcIixcclxuICAgIHdyaXRlcjogXCLquLDtmLjsmIFcIixcclxuICAgIHVwZGF0ZVRpbWU6IFwiMjAyMS4xMC4wNyAxNjo1MTowMFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVwbHlMaXN0ID0gKElkKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gZHVtbXlSZXBseUxpc3QuZmlsdGVyKChyZXBseSkgPT4gcmVwbHkuYm9hcmRJZCA9PT0gSWQpO1xyXG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuIl0sIm5hbWVzIjpbImR1bW15UmVwbHlMaXN0IiwiaWQiLCJib2FyZElkIiwiY29udGVudCIsIndyaXRlciIsInVwZGF0ZVRpbWUiLCJnZXRSZXBseUxpc3QiLCJJZCIsInJlc3VsdCIsImZpbHRlciIsInJlcGx5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=