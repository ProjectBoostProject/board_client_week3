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

  const onClick = () => {
    router.push(`boards/${id}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {
    onClick: () => {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzLmIzMmMyNmQ3ZmRlYzkzNzY2MjkzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLFNBQVMsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsa05BVU9DLG1FQVZQLEVBYUpBLDREQWJJLEVBZVNBLHdFQWZULENBQWY7S0FBTUM7O0FBbUJOLE1BQU1LLFNBQVMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLEVBQUY7QUFBTUMsRUFBQUEsS0FBTjtBQUFhQyxFQUFBQTtBQUFiLENBQUQsS0FBMkI7QUFBQTs7QUFDM0MsUUFBTUMsTUFBTSxHQUFHYixrRUFBUyxFQUF4Qjs7QUFDQSxRQUFNYyxPQUFPLEdBQUcsTUFBTTtBQUNwQkQsSUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQWEsVUFBU0wsRUFBRyxFQUF6QjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UsOERBQUMsU0FBRDtBQUFXLFdBQU8sRUFBRSxNQUFNLENBQUUsQ0FBNUI7QUFBQSw0QkFDRTtBQUFBLGdCQUFNQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGdCQUFNQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQVhEOztHQUFNSDtVQUNXVDs7O01BRFhTO0FBYU4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvYm9hcmQvY29tcG9uZW50L0JvYXJkSXRlbS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zdHlsZS9jb2xvclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmFja2dvcm91bmR9O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xyXG5cclxuICBjb2xvcjogJHtjb2xvcnMudGV4dH07XHJcbiAgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmJhY2tnb3JvdW5kSG92ZXJ9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJvYXJkSXRlbSA9ICh7IGlkLCB0aXRsZSwgd3JpdGVyIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYGJvYXJkcy8ke2lkfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgb25DbGljaz17KCkgPT4ge319PlxyXG4gICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgPGRpdj57d3JpdGVyfTwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkSXRlbTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0Iiwic3R5bGVkIiwiY29sb3JzIiwiQ29udGFpbmVyIiwiZGl2IiwiYmFja2dvcm91bmQiLCJ0ZXh0IiwiYmFja2dvcm91bmRIb3ZlciIsIkJvYXJkSXRlbSIsImlkIiwidGl0bGUiLCJ3cml0ZXIiLCJyb3V0ZXIiLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=