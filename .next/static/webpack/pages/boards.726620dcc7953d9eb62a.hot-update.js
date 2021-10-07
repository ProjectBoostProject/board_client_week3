"use strict";
self["webpackHotUpdate_N_E"]("pages/boards",{

/***/ "./src/feature/board/component/BoardList.jsx":
/*!***************************************************!*\
  !*** ./src/feature/board/component/BoardList.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/data/dummyBoardData */ "./src/common/data/dummyBoardData.js");
/* harmony import */ var _common_style_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/style/color */ "./src/common/style/color.js");
/* harmony import */ var _BoardItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardItem */ "./src/feature/board/component/BoardItem.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\board\\component\\BoardList.jsx";






const Container = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "BoardList__Container",
  componentId: "sc-1rl4yoy-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"]);
_c = Container;
const BoardHeader = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "BoardList__BoardHeader",
  componentId: "sc-1rl4yoy-1"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;padding:15px;border-bottom:2px solid #777;color:", ";"], _common_style_color__WEBPACK_IMPORTED_MODULE_2__.colors.text);

const BoardList = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_BoardItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "\uC81C\uBAA9",
      writer: "\uC791\uC131\uC790"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_1__.dummyBoardList.map(board => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_BoardItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: board.title,
      writer: board.writer
    }, board.id, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

_c2 = BoardList;
/* harmony default export */ __webpack_exports__["default"] = (BoardList);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "BoardList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzLjcyNjYyMGRjYzc5NTNkOWViNjJhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLFNBQVMsR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0hBQWY7S0FBTUk7QUFVTixNQUFNRSxXQUFXLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhKQVlORSw0REFaTSxDQUFqQjs7QUFlQSxNQUFNTSxTQUFTLEdBQUcsTUFBTTtBQUN0QixzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsK0NBQUQ7QUFBVyxXQUFLLEVBQUMsY0FBakI7QUFBc0IsWUFBTSxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR1AsMkVBQUEsQ0FBb0JTLEtBQUQsaUJBQ2xCLDhEQUFDLCtDQUFEO0FBQTBCLFdBQUssRUFBRUEsS0FBSyxDQUFDQyxLQUF2QztBQUE4QyxZQUFNLEVBQUVELEtBQUssQ0FBQ0U7QUFBNUQsT0FBZ0JGLEtBQUssQ0FBQ0csRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FURDs7TUFBTUw7QUFXTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9ib2FyZC9jb21wb25lbnQvQm9hcmRMaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGR1bW15Qm9hcmRMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRhL2R1bW15Qm9hcmREYXRhXCI7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc3R5bGUvY29sb3JcIjtcclxuaW1wb3J0IEJvYXJkSXRlbSBmcm9tIFwiLi9Cb2FyZEl0ZW1cIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBCb2FyZEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzc3O1xyXG5cclxuICBjb2xvcjogJHtjb2xvcnMudGV4dH07XHJcbmA7XHJcblxyXG5jb25zdCBCb2FyZExpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxCb2FyZEl0ZW0gdGl0bGU9XCLsoJzrqqlcIiB3cml0ZXI9XCLsnpHshLHsnpBcIiAvPlxyXG4gICAgICB7ZHVtbXlCb2FyZExpc3QubWFwKChib2FyZCkgPT4gKFxyXG4gICAgICAgIDxCb2FyZEl0ZW0ga2V5PXtib2FyZC5pZH0gdGl0bGU9e2JvYXJkLnRpdGxlfSB3cml0ZXI9e2JvYXJkLndyaXRlcn0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmRMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJkdW1teUJvYXJkTGlzdCIsImNvbG9ycyIsIkJvYXJkSXRlbSIsIkNvbnRhaW5lciIsImRpdiIsIkJvYXJkSGVhZGVyIiwidGV4dCIsIkJvYXJkTGlzdCIsIm1hcCIsImJvYXJkIiwidGl0bGUiLCJ3cml0ZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=