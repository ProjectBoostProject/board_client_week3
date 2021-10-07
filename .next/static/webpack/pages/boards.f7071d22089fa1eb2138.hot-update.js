"use strict";
self["webpackHotUpdate_N_E"]("pages/boards",{

/***/ "./src/feature/board/component/BoardItem.jsx":
/*!***************************************************!*\
  !*** ./src/feature/board/component/BoardItem.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_style_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/style/color */ "./src/common/style/color.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\board\\component\\BoardItem.jsx",
    _s = $RefreshSig$();






const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "BoardItem__Container",
  componentId: "sc-1mghmlz-0"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;padding:15px;background-color:", ";border-bottom:1px solid #777;color:", ";:hover{background-color:", ";}"], _common_style_color__WEBPACK_IMPORTED_MODULE_2__.colors.backgoround, _common_style_color__WEBPACK_IMPORTED_MODULE_2__.colors.text, _common_style_color__WEBPACK_IMPORTED_MODULE_2__.colors.backgoroundHover);
_c = Container;

const BoardItem = ({
  id,
  title,
  writer
}) => {
  _s();

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  function onClick() {
    router.push(`boards/${id}`);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: writer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

_s(BoardItem, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
});

_c2 = BoardItem;
/* harmony default export */ __webpack_exports__["default"] = (BoardItem);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "BoardItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzLmY3MDcxZDIyMDg5ZmExZWIyMTM4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLFNBQVMsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsa05BVU9DLG1FQVZQLEVBYUpBLDREQWJJLEVBZVNBLHdFQWZULENBQWY7S0FBTUM7O0FBbUJOLE1BQU1LLFNBQVMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLEVBQUY7QUFBTUMsRUFBQUEsS0FBTjtBQUFhQyxFQUFBQTtBQUFiLENBQUQsS0FBMkI7QUFBQTs7QUFDM0MsUUFBTUMsTUFBTSxHQUFHYixrRUFBUyxFQUF4Qjs7QUFDQSxXQUFTYyxPQUFULEdBQW1CO0FBQ2pCRCxJQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBYSxVQUFTTCxFQUFHLEVBQXpCO0FBQ0Q7O0FBQ0Qsc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQU1DO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsZ0JBQU1DO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBWEQ7O0dBQU1IO1VBQ1dUOzs7TUFEWFM7QUFhTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9ib2FyZC9jb21wb25lbnQvQm9hcmRJdGVtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0eWxlL2NvbG9yXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5iYWNrZ29yb3VuZH07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3Nzc7XHJcblxyXG4gIGNvbG9yOiAke2NvbG9ycy50ZXh0fTtcclxuICA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmFja2dvcm91bmRIb3Zlcn07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQm9hcmRJdGVtID0gKHsgaWQsIHRpdGxlLCB3cml0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcbiAgICByb3V0ZXIucHVzaChgYm9hcmRzLyR7aWR9YCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdj57d3JpdGVyfTwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkSXRlbTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0Iiwic3R5bGVkIiwiY29sb3JzIiwiQ29udGFpbmVyIiwiZGl2IiwiYmFja2dvcm91bmQiLCJ0ZXh0IiwiYmFja2dvcm91bmRIb3ZlciIsIkJvYXJkSXRlbSIsImlkIiwidGl0bGUiLCJ3cml0ZXIiLCJyb3V0ZXIiLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=