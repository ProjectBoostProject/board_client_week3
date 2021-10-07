"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/feature/board/component/DetailHeader.jsx":
/*!******************************************************!*\
  !*** ./src/feature/board/component/DetailHeader.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\board\\component\\DetailHeader.jsx";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "DetailHeader__Container",
  componentId: "sc-14v4ll7-0"
})(["width:100%;height:30px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:10px 5px 10px 5px;"]);
_c = Container;

const DetailHeader = ({
  title,
  writer,
  updatedAt
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: `${writer} | ${updatedAt}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

_c2 = DetailHeader;
/* harmony default export */ __webpack_exports__["default"] = (DetailHeader);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "DetailHeader");

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

/***/ "./src/feature/board/template/BoardDetailPage.jsx":
/*!********************************************************!*\
  !*** ./src/feature/board/template/BoardDetailPage.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/data/dummyBoardData */ "./src/common/data/dummyBoardData.js");
/* harmony import */ var _component_DetailHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/DetailHeader */ "./src/feature/board/component/DetailHeader.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\board\\template\\BoardDetailPage.jsx",
    _s = $RefreshSig$();







const Container = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "BoardDetailPage__Container",
  componentId: "sc-1i8vxt4-0"
})(["width:80%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin-right:auto;margin-left:auto;"]);
_c = Container;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "BoardDetailPage__Content",
  componentId: "sc-1i8vxt4-1"
})(["width:100%;min-height:300px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;color:#000;"]);
_c2 = Content;

const BoardDetailPage = () => {
  _s();

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    boardId
  } = router.query;
  const {
    0: board,
    1: setBoard
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setBoard(_common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_2__.dummyBoardEntities[boardId]);
  }, [boardId]);
  return board ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_component_DetailHeader__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: board.title,
      writer: board.writer,
      updatedAt: board.updatedAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Content, {
      children: board.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined) : null;
};

_s(BoardDetailPage, "XtzrmMUj3ZRKCeos20KI0wj8tls=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
});

_c3 = BoardDetailPage;
/* harmony default export */ __webpack_exports__["default"] = (BoardDetailPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Content");
$RefreshReg$(_c3, "BoardDetailPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS5lMWIzNzRhMGFkNjIyY2ZlY2Y2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxTQUFTLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUFmO0tBQU1DOztBQVlOLE1BQU1FLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLEtBQUY7QUFBU0MsRUFBQUEsTUFBVDtBQUFpQkMsRUFBQUE7QUFBakIsQ0FBRCxLQUFrQztBQUNyRCxzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0U7QUFBQSxnQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFBUSxHQUFFQyxNQUFPLE1BQUtDLFNBQVU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBUEQ7O01BQU1IO0FBU04sK0RBQWVBLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRixTQUFTLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtKQUFmO0tBQU1DO0FBWU4sTUFBTVUsT0FBTyxHQUFHWCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvSUFBYjtNQUFNVzs7QUFZTixNQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUFBOztBQUM1QixRQUFNQyxNQUFNLEdBQUdOLGtFQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFTyxJQUFBQTtBQUFGLE1BQWNELE1BQU0sQ0FBQ0UsS0FBM0I7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JSLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZFMsSUFBQUEsUUFBUSxDQUFDUCwyRUFBa0IsQ0FBQ0ksT0FBRCxDQUFuQixDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNBLE9BQUQsQ0FGTSxDQUFUO0FBSUEsU0FBT0UsS0FBSyxnQkFDViw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsNERBQUQ7QUFDRSxXQUFLLEVBQUVBLEtBQUssQ0FBQ1osS0FEZjtBQUVFLFlBQU0sRUFBRVksS0FBSyxDQUFDWCxNQUZoQjtBQUdFLGVBQVMsRUFBRVcsS0FBSyxDQUFDVjtBQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsT0FBRDtBQUFBLGdCQUFVVSxLQUFLLENBQUNFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFUsR0FTUixJQVRKO0FBVUQsQ0FuQkQ7O0dBQU1OO1VBQ1dMOzs7TUFEWEs7QUFxQk4sK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvYm9hcmQvY29tcG9uZW50L0RldGFpbEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlL2JvYXJkL3RlbXBsYXRlL0JvYXJkRGV0YWlsUGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgRGV0YWlsSGVhZGVyID0gKHsgdGl0bGUsIHdyaXRlciwgdXBkYXRlZEF0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XHJcbiAgICAgIDxzcGFuPntgJHt3cml0ZXJ9IHwgJHt1cGRhdGVkQXR9YH08L3NwYW4+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZHVtbXlCb2FyZEVudGl0aWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRhL2R1bW15Qm9hcmREYXRhXCI7XHJcbmltcG9ydCBEZXRhaWxIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9EZXRhaWxIZWFkZXJcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5gO1xyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgY29sb3I6ICMwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBCb2FyZERldGFpbFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBib2FyZElkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEJvYXJkKGR1bW15Qm9hcmRFbnRpdGllc1tib2FyZElkXSk7XHJcbiAgfSwgW2JvYXJkSWRdKTtcclxuXHJcbiAgcmV0dXJuIGJvYXJkID8gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPERldGFpbEhlYWRlclxyXG4gICAgICAgIHRpdGxlPXtib2FyZC50aXRsZX1cclxuICAgICAgICB3cml0ZXI9e2JvYXJkLndyaXRlcn1cclxuICAgICAgICB1cGRhdGVkQXQ9e2JvYXJkLnVwZGF0ZWRBdH1cclxuICAgICAgLz5cclxuICAgICAgPENvbnRlbnQ+e2JvYXJkLmNvbnRlbnR9PC9Db250ZW50PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZERldGFpbFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkRldGFpbEhlYWRlciIsInRpdGxlIiwid3JpdGVyIiwidXBkYXRlZEF0IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkdW1teUJvYXJkRW50aXRpZXMiLCJDb250ZW50IiwiQm9hcmREZXRhaWxQYWdlIiwicm91dGVyIiwiYm9hcmRJZCIsInF1ZXJ5IiwiYm9hcmQiLCJzZXRCb2FyZCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9