"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/feature/reply/template/Reply.jsx":
/*!**********************************************!*\
  !*** ./src/feature/reply/template/Reply.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyReplyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/data/dummyReplyData */ "./src/common/data/dummyReplyData.js");
/* harmony import */ var _component_ReplyInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/ReplyInput */ "./src/feature/reply/component/ReplyInput.jsx");
/* harmony import */ var _component_ReplyList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/ReplyList */ "./src/feature/reply/component/ReplyList.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\template\\Reply.jsx",
    _s = $RefreshSig$();








const Container = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div`
  width: 100%;
`;
_c = Container;

const Reply = () => {
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
  }, [boardId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_component_ReplyInput__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_component_ReplyList__WEBPACK_IMPORTED_MODULE_4__.default, {
      replies: replies
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

_s(Reply, "+oVJ8gRK3xlmgrYvx5rITo89bJ0=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
});

_c2 = Reply;
/* harmony default export */ __webpack_exports__["default"] = (Reply);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Reply");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS40NWM3YjQ3MjNjOTM3ZTUxZjc5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNUSxTQUFTLEdBQUdKLDBEQUFXO0FBQzdCO0FBQ0EsQ0FGQTtLQUFNSTs7QUFJTixNQUFNRSxLQUFLLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNQyxNQUFNLEdBQUdYLGtFQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFWSxJQUFBQTtBQUFGLE1BQWNELE1BQU0sQ0FBQ0UsS0FBM0I7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JaLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZGEsSUFBQUEsVUFBVSxDQUFDVix5RUFBWSxDQUFDTyxPQUFELENBQWIsQ0FBVjtBQUNELEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNFLDhEQUFDLFNBQUQ7QUFBQSw0QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBVyxhQUFPLEVBQUVFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQWREOztHQUFNSjtVQUNXVjs7O01BRFhVO0FBZ0JOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlL3JlcGx5L3RlbXBsYXRlL1JlcGx5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZ2V0UmVwbHlMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRhL2R1bW15UmVwbHlEYXRhXCI7XHJcblxyXG5pbXBvcnQgUmVwbHlJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50L1JlcGx5SW5wdXRcIjtcclxuaW1wb3J0IFJlcGx5TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50L1JlcGx5TGlzdFwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFJlcGx5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgYm9hcmRJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBbcmVwbGllcywgc2V0UmVwbGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJlcGxpZXMoZ2V0UmVwbHlMaXN0KGJvYXJkSWQpKTtcclxuICB9LCBbYm9hcmRJZF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UmVwbHlJbnB1dCAvPlxyXG4gICAgICA8UmVwbHlMaXN0IHJlcGxpZXM9e3JlcGxpZXN9IC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwbHk7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiZ2V0UmVwbHlMaXN0IiwiUmVwbHlJbnB1dCIsIlJlcGx5TGlzdCIsIkNvbnRhaW5lciIsImRpdiIsIlJlcGx5Iiwicm91dGVyIiwiYm9hcmRJZCIsInF1ZXJ5IiwicmVwbGllcyIsInNldFJlcGxpZXMiXSwic291cmNlUm9vdCI6IiJ9