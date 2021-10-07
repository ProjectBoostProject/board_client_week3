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
_c2 = BoardHeader;

const BoardList = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(BoardHeader, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "\uC81C\uBAA9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "\uC791\uC131\uC790"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_1__.dummyBoardList.map(board => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_BoardItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: board.title,
      writer: board.writer
    }, board.id, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

_c3 = BoardList;
/* harmony default export */ __webpack_exports__["default"] = (BoardList);

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "BoardHeader");
$RefreshReg$(_c3, "BoardList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzLmNjNjkzZDNiOTdkYjA4MTgzYmI2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLFNBQVMsR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0hBQWY7S0FBTUk7QUFVTixNQUFNRSxXQUFXLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhKQVlORSw0REFaTSxDQUFqQjtNQUFNSTs7QUFlTixNQUFNRSxTQUFTLEdBQUcsTUFBTTtBQUN0QixzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsV0FBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBS0dQLDJFQUFBLENBQW9CUyxLQUFELGlCQUNsQiw4REFBQywrQ0FBRDtBQUEwQixXQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBdkM7QUFBOEMsWUFBTSxFQUFFRCxLQUFLLENBQUNFO0FBQTVELE9BQWdCRixLQUFLLENBQUNHLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBWkQ7O01BQU1MO0FBY04sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvYm9hcmQvY29tcG9uZW50L0JvYXJkTGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBkdW1teUJvYXJkTGlzdCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0YS9kdW1teUJvYXJkRGF0YVwiO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0eWxlL2NvbG9yXCI7XHJcbmltcG9ydCBCb2FyZEl0ZW0gZnJvbSBcIi4vQm9hcmRJdGVtXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQm9hcmRIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzc3NztcclxuXHJcbiAgY29sb3I6ICR7Y29sb3JzLnRleHR9O1xyXG5gO1xyXG5cclxuY29uc3QgQm9hcmRMaXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Qm9hcmRIZWFkZXI+XHJcbiAgICAgICAgPGRpdj7soJzrqqk8L2Rpdj5cclxuICAgICAgICA8ZGl2PuyekeyEseyekDwvZGl2PlxyXG4gICAgICA8L0JvYXJkSGVhZGVyPlxyXG4gICAgICB7ZHVtbXlCb2FyZExpc3QubWFwKChib2FyZCkgPT4gKFxyXG4gICAgICAgIDxCb2FyZEl0ZW0ga2V5PXtib2FyZC5pZH0gdGl0bGU9e2JvYXJkLnRpdGxlfSB3cml0ZXI9e2JvYXJkLndyaXRlcn0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmRMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJkdW1teUJvYXJkTGlzdCIsImNvbG9ycyIsIkJvYXJkSXRlbSIsIkNvbnRhaW5lciIsImRpdiIsIkJvYXJkSGVhZGVyIiwidGV4dCIsIkJvYXJkTGlzdCIsIm1hcCIsImJvYXJkIiwidGl0bGUiLCJ3cml0ZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=