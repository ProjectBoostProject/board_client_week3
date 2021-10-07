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

const BoardList = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(BoardHeader, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "\uC81C\uBAA9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "\uC791\uC131\uC790"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_1__.dummyBoardList.map(board => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_BoardItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: board.title,
      writer: board.writer
    }, board.id, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzLmU4ZWU0ZmViNmFjNmY3YTJkYmE5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLFNBQVMsR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0hBQWY7S0FBTUk7O0FBVU4sTUFBTUUsU0FBUyxHQUFHLE1BQU07QUFDdEIsc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDRCQUNFLDhEQUFDLFdBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUtHTCwyRUFBQSxDQUFvQk8sS0FBRCxpQkFDbEIsOERBQUMsK0NBQUQ7QUFBMEIsV0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBQXZDO0FBQThDLFlBQU0sRUFBRUQsS0FBSyxDQUFDRTtBQUE1RCxPQUFnQkYsS0FBSyxDQUFDRyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQVpEOztNQUFNTDtBQWNOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlL2JvYXJkL2NvbXBvbmVudC9Cb2FyZExpc3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZHVtbXlCb2FyZExpc3QgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RhdGEvZHVtbXlCb2FyZERhdGFcIjtcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zdHlsZS9jb2xvclwiO1xyXG5pbXBvcnQgQm9hcmRJdGVtIGZyb20gXCIuL0JvYXJkSXRlbVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEJvYXJkTGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEJvYXJkSGVhZGVyPlxyXG4gICAgICAgIDxkaXY+7KCc66qpPC9kaXY+XHJcbiAgICAgICAgPGRpdj7snpHshLHsnpA8L2Rpdj5cclxuICAgICAgPC9Cb2FyZEhlYWRlcj5cclxuICAgICAge2R1bW15Qm9hcmRMaXN0Lm1hcCgoYm9hcmQpID0+IChcclxuICAgICAgICA8Qm9hcmRJdGVtIGtleT17Ym9hcmQuaWR9IHRpdGxlPXtib2FyZC50aXRsZX0gd3JpdGVyPXtib2FyZC53cml0ZXJ9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiZHVtbXlCb2FyZExpc3QiLCJjb2xvcnMiLCJCb2FyZEl0ZW0iLCJDb250YWluZXIiLCJkaXYiLCJCb2FyZExpc3QiLCJtYXAiLCJib2FyZCIsInRpdGxlIiwid3JpdGVyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9