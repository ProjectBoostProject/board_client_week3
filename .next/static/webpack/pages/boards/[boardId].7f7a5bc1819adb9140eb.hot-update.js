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

  const {
    0: writer,
    1: setWriter
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: content,
    1: setContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uC791\uC131\uC790",
        value: writer,
        onChange: e => setWriter(e.target)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        value: password,
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentInput, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "button",
      children: "\uC791\uC131"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

_s(ReplyInput, "FFnMAEXpjONPacFCeJnPUpQvexc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS43ZjdhNWJjMTgxOWFkYjkxNDBlYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1HLFNBQVMsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEseUhBQWY7S0FBTUM7QUFXTixNQUFNRSxlQUFlLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJHQUFyQjtNQUFNRztBQVNOLE1BQU1DLGFBQWEsR0FBR0osdUVBQUg7QUFBQTtBQUFBO0FBQUEscUNBQW5CO01BQU1JO0FBTU4sTUFBTUUsWUFBWSxHQUFHTiwwRUFBSDtBQUFBO0FBQUE7QUFBQSwyQ0FBbEI7TUFBTU07O0FBT04sTUFBTUUsVUFBVSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQ25DLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlosK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFFQSxzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsZUFBRDtBQUFBLDhCQUNFLDhEQUFDLGFBQUQ7QUFDRSxtQkFBVyxFQUFDLG9CQURkO0FBRUUsYUFBSyxFQUFFVyxNQUZUO0FBR0UsZ0JBQVEsRUFBR00sQ0FBRCxJQUFPTCxTQUFTLENBQUNLLENBQUMsQ0FBQ0MsTUFBSDtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUUsOERBQUMsYUFBRDtBQUNFLG1CQUFXLEVBQUMsMEJBRGQ7QUFFRSxhQUFLLEVBQUVMLFFBRlQ7QUFHRSxnQkFBUSxFQUFHSSxDQUFELElBQU9ILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7QUFIOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFhRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFjRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELENBdkJEOztHQUFNVjs7TUFBQUE7QUF5Qk4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcmVwbHkvY29tcG9uZW50L1JlcGx5SW5wdXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgcGFkZGluZzogOHB4O1xyXG5gO1xyXG5jb25zdCBVc2VySW5mb1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVXNlckluZm9JbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB3aWR0aDogODBweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudElucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIGhlaWdodDogODAlO1xyXG5cclxuICBmbGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUmVwbHlJbnB1dCA9ICh7IGFkZFJlcGx5IH0pID0+IHtcclxuICBjb25zdCBbd3JpdGVyLCBzZXRXcml0ZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxVc2VySW5mb1NlY3Rpb24+XHJcbiAgICAgICAgPFVzZXJJbmZvSW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J6R7ISx7J6QXCJcclxuICAgICAgICAgIHZhbHVlPXt3cml0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFdyaXRlcihlLnRhcmdldCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VXNlckluZm9JbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Vc2VySW5mb1NlY3Rpb24+XHJcbiAgICAgIDxDb250ZW50SW5wdXQgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+7J6R7ISxPC9idXR0b24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwbHlJbnB1dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJVc2VySW5mb1NlY3Rpb24iLCJVc2VySW5mb0lucHV0IiwiaW5wdXQiLCJDb250ZW50SW5wdXQiLCJ0ZXh0YXJlYSIsIlJlcGx5SW5wdXQiLCJhZGRSZXBseSIsIndyaXRlciIsInNldFdyaXRlciIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=