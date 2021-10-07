"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/feature/reply/component/ReplyInput.jsx":
/*!****************************************************!*\
  !*** ./src/feature/reply/component/ReplyInput.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\component\\ReplyInput.jsx",
    _s = $RefreshSig$();




const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyInput__Container",
  componentId: "sc-9wk741-0"
})(["width:100%;height:80px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:8px;"]);
_c = Container;
const UserInfoSection = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyInput__UserInfoSection",
  componentId: "sc-9wk741-1"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin-right:20px;"]);
_c2 = UserInfoSection;
const UserInfoInput = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.input.withConfig({
  displayName: "ReplyInput__UserInfoInput",
  componentId: "sc-9wk741-2"
})(["width:80px;margin-bottom:8px;"]);
_c3 = UserInfoInput;
const ContentInput = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.textarea.withConfig({
  displayName: "ReplyInput__ContentInput",
  componentId: "sc-9wk741-3"
})(["height:80%;flex:1;margin-right:8px;"]);
_c4 = ContentInput;

const ReplyInput = ({
  addReply
}) => {
  _s();

  const {} = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uC791\uC131\uC790"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentInput, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "button",
      children: "\uC791\uC131"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

_s(ReplyInput, "rvtYcABw6KCahMRDv4gKg6d43ts=");

_c5 = ReplyInput;
/* harmony default export */ __webpack_exports__["default"] = (ReplyInput);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UserInfoSection");
$RefreshReg$(_c3, "UserInfoInput");
$RefreshReg$(_c4, "ContentInput");
$RefreshReg$(_c5, "ReplyInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS5jNDMwMzQwODkzNzcwNTk5NjYyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1HLFNBQVMsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEseUhBQWY7S0FBTUM7QUFXTixNQUFNRSxlQUFlLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJHQUFyQjtNQUFNRztBQVNOLE1BQU1DLGFBQWEsR0FBR0osdUVBQUg7QUFBQTtBQUFBO0FBQUEscUNBQW5CO01BQU1JO0FBTU4sTUFBTUUsWUFBWSxHQUFHTiwwRUFBSDtBQUFBO0FBQUE7QUFBQSwyQ0FBbEI7TUFBTU07O0FBT04sTUFBTUUsVUFBVSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQ25DLFFBQU0sS0FBS1YsK0NBQVEsQ0FBQyxFQUFELENBQW5CO0FBRUEsc0JBQ0UsOERBQUMsU0FBRDtBQUFBLDRCQUNFLDhEQUFDLGVBQUQ7QUFBQSw4QkFDRSw4REFBQyxhQUFEO0FBQWUsbUJBQVcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsYUFBRDtBQUFlLG1CQUFXLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0FiRDs7R0FBTVM7O01BQUFBO0FBZU4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcmVwbHkvY29tcG9uZW50L1JlcGx5SW5wdXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgcGFkZGluZzogOHB4O1xyXG5gO1xyXG5jb25zdCBVc2VySW5mb1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVXNlckluZm9JbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB3aWR0aDogODBweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudElucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGhlaWdodDogODAlO1xyXG5cclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUmVwbHlJbnB1dCA9ICh7IGFkZFJlcGx5IH0pID0+IHtcclxuICBjb25zdCBbXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFVzZXJJbmZvU2VjdGlvbj5cclxuICAgICAgICA8VXNlckluZm9JbnB1dCBwbGFjZWhvbGRlcj1cIuyekeyEseyekFwiIC8+XHJcbiAgICAgICAgPFVzZXJJbmZvSW5wdXQgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIiAvPlxyXG4gICAgICA8L1VzZXJJbmZvU2VjdGlvbj5cclxuICAgICAgPENvbnRlbnRJbnB1dCAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj7snpHshLE8L2J1dHRvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBseUlucHV0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIlVzZXJJbmZvU2VjdGlvbiIsIlVzZXJJbmZvSW5wdXQiLCJpbnB1dCIsIkNvbnRlbnRJbnB1dCIsInRleHRhcmVhIiwiUmVwbHlJbnB1dCIsImFkZFJlcGx5Il0sInNvdXJjZVJvb3QiOiIifQ==