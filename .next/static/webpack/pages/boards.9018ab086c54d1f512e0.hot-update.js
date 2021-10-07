"use strict";
self["webpackHotUpdate_N_E"]("pages/boards",{

/***/ "./src/feature/board/component/BoardHeader.jsx":
/*!*****************************************************!*\
  !*** ./src/feature/board/component/BoardHeader.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_style_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/style/color */ "./src/common/style/color.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\board\\component\\BoardHeader.jsx";




const Contaier = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "BoardHeader__Contaier",
  componentId: "sc-1mbgzjw-0"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;padding:15px;border-bottom:2px solid #777;color:", ";"], _common_style_color__WEBPACK_IMPORTED_MODULE_1__.colors.text);

const BoardHeader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }, undefined);
};

_c = BoardHeader;
/* harmony default export */ __webpack_exports__["default"] = (BoardHeader);

var _c;

$RefreshReg$(_c, "BoardHeader");

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


/***/ }),

/***/ "./src/feature/board/component/BoardList.jsx":
/*!***************************************************!*\
  !*** ./src/feature/board/component/BoardList.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/data/dummyBoardData */ "./src/common/data/dummyBoardData.js");
/* harmony import */ var _common_style_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/style/color */ "./src/common/style/color.js");
/* harmony import */ var _BoardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoardHeader */ "./src/feature/board/component/BoardHeader.jsx");
/* harmony import */ var _BoardItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardItem */ "./src/feature/board/component/BoardItem.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\board\\component\\BoardList.jsx";







const Container = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "BoardList__Container",
  componentId: "sc-1rl4yoy-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"]);
_c = Container;

const BoardList = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_BoardHeader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_1__.dummyBoardList.map(board => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_BoardItem__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: board.title,
      writer: board.writer
    }, board.id, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzLjkwMThhYjA4NmM1NGQxZjUxMmUwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1HLFFBQVEsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsOEpBWUhDLDREQVpHLENBQWQ7O0FBZUEsTUFBTUksV0FBVyxHQUFHLE1BQU07QUFDeEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7S0FBTUE7QUFJTiwrREFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsU0FBUyxHQUFHUixxRUFBSDtBQUFBO0FBQUE7QUFBQSxnSEFBZjtLQUFNUTs7QUFVTixNQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUN0QixzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHSCwyRUFBQSxDQUFvQkssS0FBRCxpQkFDbEIsOERBQUMsK0NBQUQ7QUFBMEIsV0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBQXZDO0FBQThDLFlBQU0sRUFBRUQsS0FBSyxDQUFDRTtBQUE1RCxPQUFnQkYsS0FBSyxDQUFDRyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVREOztNQUFNTDtBQVdOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlL2JvYXJkL2NvbXBvbmVudC9Cb2FyZEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlL2JvYXJkL2NvbXBvbmVudC9Cb2FyZExpc3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zdHlsZS9jb2xvclwiO1xyXG5cclxuY29uc3QgQ29udGFpZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzc3NztcclxuXHJcbiAgY29sb3I6ICR7Y29sb3JzLnRleHR9O1xyXG5gO1xyXG5cclxuY29uc3QgQm9hcmRIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBkdW1teUJvYXJkTGlzdCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0YS9kdW1teUJvYXJkRGF0YVwiO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0eWxlL2NvbG9yXCI7XHJcbmltcG9ydCBCb2FyZEhlYWRlciBmcm9tIFwiLi9Cb2FyZEhlYWRlclwiO1xyXG5pbXBvcnQgQm9hcmRJdGVtIGZyb20gXCIuL0JvYXJkSXRlbVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEJvYXJkTGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEJvYXJkSGVhZGVyIC8+XHJcbiAgICAgIHtkdW1teUJvYXJkTGlzdC5tYXAoKGJvYXJkKSA9PiAoXHJcbiAgICAgICAgPEJvYXJkSXRlbSBrZXk9e2JvYXJkLmlkfSB0aXRsZT17Ym9hcmQudGl0bGV9IHdyaXRlcj17Ym9hcmQud3JpdGVyfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImNvbG9ycyIsIkNvbnRhaWVyIiwiZGl2IiwidGV4dCIsIkJvYXJkSGVhZGVyIiwiZHVtbXlCb2FyZExpc3QiLCJCb2FyZEl0ZW0iLCJDb250YWluZXIiLCJCb2FyZExpc3QiLCJtYXAiLCJib2FyZCIsInRpdGxlIiwid3JpdGVyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9