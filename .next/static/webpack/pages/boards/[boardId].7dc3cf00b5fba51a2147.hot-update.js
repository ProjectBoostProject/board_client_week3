"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/feature/reply/component/ReplyList.jsx":
/*!***************************************************!*\
  !*** ./src/feature/reply/component/ReplyList.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyReplyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/data/dummyReplyData */ "./src/common/data/dummyReplyData.js");
/* harmony import */ var _ReplyItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReplyItem */ "./src/feature/reply/component/ReplyItem.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\component\\ReplyList.jsx",
    _s = $RefreshSig$();







const Container = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "ReplyList__Container",
  componentId: "sc-164sdyf-0"
})(["display:flex;flex-direction:column;"]);
_c = Container;

const ReplyList = () => {
  _s();

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    boardId
  } = router.query;
  const {
    0: replies,
    1: setReplies
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setReplies((0,_common_data_dummyReplyData__WEBPACK_IMPORTED_MODULE_2__.getReplyList)(boardId));
    console.log((0,_common_data_dummyReplyData__WEBPACK_IMPORTED_MODULE_2__.getReplyList)(boardId));
  }, [boardId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {
    children: replies.map(reply => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ReplyItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      writer: reply.writer,
      content: reply.content,
      time: reply.updateTime
    }, reply.id, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

_s(ReplyList, "+oVJ8gRK3xlmgrYvx5rITo89bJ0=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
});

_c2 = ReplyList;
/* harmony default export */ __webpack_exports__["default"] = (ReplyList);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ReplyList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS43ZGMzY2YwMGI1ZmJhNTFhMjE0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTyxTQUFTLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJDQUFmO0tBQU1HOztBQUtOLE1BQU1FLFNBQVMsR0FBRyxNQUFNO0FBQUE7O0FBQ3RCLFFBQU1DLE1BQU0sR0FBR1Ysa0VBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVXLElBQUFBO0FBQUYsTUFBY0QsTUFBTSxDQUFDRSxLQUEzQjtBQUVBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlgsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0FELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkWSxJQUFBQSxVQUFVLENBQUNULHlFQUFZLENBQUNNLE9BQUQsQ0FBYixDQUFWO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCx5RUFBWSxDQUFDTSxPQUFELENBQXhCO0FBQ0QsR0FIUSxFQUdOLENBQUNBLE9BQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0UsOERBQUMsU0FBRDtBQUFBLGNBQ0dFLE9BQU8sQ0FBQ0ksR0FBUixDQUFhQyxLQUFELGlCQUNYLDhEQUFDLCtDQUFEO0FBRUUsWUFBTSxFQUFFQSxLQUFLLENBQUNDLE1BRmhCO0FBR0UsYUFBTyxFQUFFRCxLQUFLLENBQUNFLE9BSGpCO0FBSUUsVUFBSSxFQUFFRixLQUFLLENBQUNHO0FBSmQsT0FDT0gsS0FBSyxDQUFDSSxFQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQXRCRDs7R0FBTWI7VUFDV1Q7OztNQURYUztBQXdCTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9yZXBseS9jb21wb25lbnQvUmVwbHlMaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZ2V0UmVwbHlMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRhL2R1bW15UmVwbHlEYXRhXCI7XHJcbmltcG9ydCBSZXBseUl0ZW0gZnJvbSBcIi4vUmVwbHlJdGVtXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IFJlcGx5TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGJvYXJkSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW3JlcGxpZXMsIHNldFJlcGxpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSZXBsaWVzKGdldFJlcGx5TGlzdChib2FyZElkKSk7XHJcbiAgICBjb25zb2xlLmxvZyhnZXRSZXBseUxpc3QoYm9hcmRJZCkpO1xyXG4gIH0sIFtib2FyZElkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICB7cmVwbGllcy5tYXAoKHJlcGx5KSA9PiAoXHJcbiAgICAgICAgPFJlcGx5SXRlbVxyXG4gICAgICAgICAga2V5PXtyZXBseS5pZH1cclxuICAgICAgICAgIHdyaXRlcj17cmVwbHkud3JpdGVyfVxyXG4gICAgICAgICAgY29udGVudD17cmVwbHkuY29udGVudH1cclxuICAgICAgICAgIHRpbWU9e3JlcGx5LnVwZGF0ZVRpbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwbHlMaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsImdldFJlcGx5TGlzdCIsIlJlcGx5SXRlbSIsIkNvbnRhaW5lciIsImRpdiIsIlJlcGx5TGlzdCIsInJvdXRlciIsImJvYXJkSWQiLCJxdWVyeSIsInJlcGxpZXMiLCJzZXRSZXBsaWVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInJlcGx5Iiwid3JpdGVyIiwiY29udGVudCIsInVwZGF0ZVRpbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=