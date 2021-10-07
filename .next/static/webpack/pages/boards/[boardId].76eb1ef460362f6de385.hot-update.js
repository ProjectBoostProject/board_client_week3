"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/data/dummyBoardData */ "./src/common/data/dummyBoardData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\board\\template\\BoardDetailPage.jsx",
    _s = $RefreshSig$();






const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "BoardDetailPage__Container",
  componentId: "sc-1i8vxt4-0"
})([""]);
_c = Container;

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
  return board ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 18
  }, undefined) : null;
};

_s(BoardDetailPage, "XtzrmMUj3ZRKCeos20KI0wj8tls=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
});

_c2 = BoardDetailPage;
/* harmony default export */ __webpack_exports__["default"] = (BoardDetailPage);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "BoardDetailPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS43NmViMWVmNDYwMzYyZjZkZTM4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTSxTQUFTLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWY7S0FBTUU7O0FBRU4sTUFBTUUsZUFBZSxHQUFHLE1BQU07QUFBQTs7QUFDNUIsUUFBTUMsTUFBTSxHQUFHVCxrRUFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRVUsSUFBQUE7QUFBRixNQUFjRCxNQUFNLENBQUNFLEtBQTNCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CViwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFDQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RXLElBQUFBLFFBQVEsQ0FBQ1IsMkVBQWtCLENBQUNLLE9BQUQsQ0FBbkIsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDtBQUlBLFNBQU9FLEtBQUssZ0JBQUcsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBbUIsSUFBL0I7QUFDRCxDQVZEOztHQUFNSjtVQUNXUjs7O01BRFhRO0FBWU4sK0RBQWVBLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvYm9hcmQvdGVtcGxhdGUvQm9hcmREZXRhaWxQYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZHVtbXlCb2FyZEVudGl0aWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRhL2R1bW15Qm9hcmREYXRhXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBCb2FyZERldGFpbFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBib2FyZElkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEJvYXJkKGR1bW15Qm9hcmRFbnRpdGllc1tib2FyZElkXSk7XHJcbiAgfSwgW2JvYXJkSWRdKTtcclxuXHJcbiAgcmV0dXJuIGJvYXJkID8gPENvbnRhaW5lciAvPiA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZERldGFpbFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiZHVtbXlCb2FyZEVudGl0aWVzIiwiQ29udGFpbmVyIiwiZGl2IiwiQm9hcmREZXRhaWxQYWdlIiwicm91dGVyIiwiYm9hcmRJZCIsInF1ZXJ5IiwiYm9hcmQiLCJzZXRCb2FyZCJdLCJzb3VyY2VSb290IjoiIn0=