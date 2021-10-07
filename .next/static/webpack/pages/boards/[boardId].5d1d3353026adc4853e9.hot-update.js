"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/feature/reply/template/Reply.jsx":
/*!**********************************************!*\
  !*** ./src/feature/reply/template/Reply.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _component_ReplyInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/ReplyInput */ "./src/feature/reply/component/ReplyInput.jsx");
/* harmony import */ var _component_ReplyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/ReplyList */ "./src/feature/reply/component/ReplyList.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\template\\Reply.jsx",
    _s = $RefreshSig$();






const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  width: 100%;
`;
_c = Container;

const Reply = () => {
  _s();

  const router = useRouter();
  const {
    boardId
  } = router.query;
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    setReplies(getReplyList(boardId));
  }, [boardId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_component_ReplyInput__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_component_ReplyList__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

_s(Reply, "+oVJ8gRK3xlmgrYvx5rITo89bJ0=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS41ZDFkMzM1MzAyNmFkYzQ4NTNlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1JLFNBQVMsR0FBR0gsMERBQVc7QUFDN0I7QUFDQSxDQUZBO0tBQU1HOztBQUlOLE1BQU1FLEtBQUssR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsU0FBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFjRixNQUFNLENBQUNHLEtBQTNCO0FBRUEsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0JDLFFBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0FDLEVBQUFBLFNBQVMsQ0FBQyxNQUFNO0FBQ2RGLElBQUFBLFVBQVUsQ0FBQ0csWUFBWSxDQUFDTixPQUFELENBQWIsQ0FBVjtBQUNELEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNFLDhEQUFDLFNBQUQ7QUFBQSw0QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBZEQ7O0dBQU1IOztNQUFBQTtBQWdCTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9yZXBseS90ZW1wbGF0ZS9SZXBseS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IFJlcGx5SW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9SZXBseUlucHV0XCI7XHJcbmltcG9ydCBSZXBseUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9SZXBseUxpc3RcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBseSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGJvYXJkSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW3JlcGxpZXMsIHNldFJlcGxpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSZXBsaWVzKGdldFJlcGx5TGlzdChib2FyZElkKSk7XHJcbiAgfSwgW2JvYXJkSWRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJlcGx5SW5wdXQgLz5cclxuICAgICAgPFJlcGx5TGlzdCAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGx5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJSZXBseUlucHV0IiwiUmVwbHlMaXN0IiwiQ29udGFpbmVyIiwiZGl2IiwiUmVwbHkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJib2FyZElkIiwicXVlcnkiLCJyZXBsaWVzIiwic2V0UmVwbGllcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0UmVwbHlMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==