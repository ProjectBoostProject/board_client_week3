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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_component_ReplyList__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS5mMzU5ZThhMjg1MmZkZWQ5ODk5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNUSxTQUFTLEdBQUdKLDBEQUFXO0FBQzdCO0FBQ0EsQ0FGQTtLQUFNSTs7QUFJTixNQUFNRSxLQUFLLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNQyxNQUFNLEdBQUdYLGtFQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFWSxJQUFBQTtBQUFGLE1BQWNELE1BQU0sQ0FBQ0UsS0FBM0I7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JaLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZGEsSUFBQUEsVUFBVSxDQUFDVix5RUFBWSxDQUFDTyxPQUFELENBQWIsQ0FBVjtBQUNELEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNFLDhEQUFDLFNBQUQ7QUFBQSw0QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBZEQ7O0dBQU1GO1VBQ1dWOzs7TUFEWFU7QUFnQk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcmVwbHkvdGVtcGxhdGUvUmVwbHkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBnZXRSZXBseUxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RhdGEvZHVtbXlSZXBseURhdGFcIjtcclxuXHJcbmltcG9ydCBSZXBseUlucHV0IGZyb20gXCIuLi9jb21wb25lbnQvUmVwbHlJbnB1dFwiO1xyXG5pbXBvcnQgUmVwbHlMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvUmVwbHlMaXN0XCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgUmVwbHkgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBib2FyZElkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IFtyZXBsaWVzLCBzZXRSZXBsaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVwbGllcyhnZXRSZXBseUxpc3QoYm9hcmRJZCkpO1xyXG4gIH0sIFtib2FyZElkXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSZXBseUlucHV0IC8+XHJcbiAgICAgIDxSZXBseUxpc3QgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBseTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJnZXRSZXBseUxpc3QiLCJSZXBseUlucHV0IiwiUmVwbHlMaXN0IiwiQ29udGFpbmVyIiwiZGl2IiwiUmVwbHkiLCJyb3V0ZXIiLCJib2FyZElkIiwicXVlcnkiLCJyZXBsaWVzIiwic2V0UmVwbGllcyJdLCJzb3VyY2VSb290IjoiIn0=