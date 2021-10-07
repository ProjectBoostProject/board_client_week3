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

  const onClick = () => {
    addReply(writer, content, password, new Date().toLocaleDateString());
    setWriter("");
    setPassword("");
    setContent("");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uC791\uC131\uC790",
        value: writer,
        onChange: e => setWriter(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        value: password,
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentInput, {
      value: content,
      onChange: e => {
        setContent(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "button",
      onClick: onClick,
      children: "\uC791\uC131"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS4xZjU1ZWU1YTBkN2E4ZjZjOWMzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1HLFNBQVMsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEseUhBQWY7S0FBTUM7QUFXTixNQUFNRSxlQUFlLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJHQUFyQjtNQUFNRztBQVNOLE1BQU1DLGFBQWEsR0FBR0osdUVBQUg7QUFBQTtBQUFBO0FBQUEscUNBQW5CO01BQU1JO0FBTU4sTUFBTUUsWUFBWSxHQUFHTiwwRUFBSDtBQUFBO0FBQUE7QUFBQSwyQ0FBbEI7TUFBTU07O0FBT04sTUFBTUUsVUFBVSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQ25DLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlosK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7O0FBRUEsUUFBTWlCLE9BQU8sR0FBRyxNQUFNO0FBQ3BCUCxJQUFBQSxRQUFRLENBQUNDLE1BQUQsRUFBU0ksT0FBVCxFQUFrQkYsUUFBbEIsRUFBNEIsSUFBSUssSUFBSixHQUFXQyxrQkFBWCxFQUE1QixDQUFSO0FBQ0FQLElBQUFBLFNBQVMsQ0FBQyxFQUFELENBQVQ7QUFDQUUsSUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxJQUFBQSxVQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsR0FMRDs7QUFPQSxzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsZUFBRDtBQUFBLDhCQUNFLDhEQUFDLGFBQUQ7QUFDRSxtQkFBVyxFQUFDLG9CQURkO0FBRUUsYUFBSyxFQUFFTCxNQUZUO0FBR0UsZ0JBQVEsRUFBR1MsQ0FBRCxJQUFPUixTQUFTLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWO0FBSDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSw4REFBQyxhQUFEO0FBQ0UsbUJBQVcsRUFBQywwQkFEZDtBQUVFLGFBQUssRUFBRVQsUUFGVDtBQUdFLGdCQUFRLEVBQUdPLENBQUQsSUFBT04sV0FBVyxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVjtBQUg5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFLDhEQUFDLFlBQUQ7QUFDRSxXQUFLLEVBQUVQLE9BRFQ7QUFFRSxjQUFRLEVBQUdLLENBQUQsSUFBTztBQUNmSixRQUFBQSxVQUFVLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFtQkU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVMLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlCRCxDQXJDRDs7R0FBTVI7O01BQUFBO0FBdUNOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlL3JlcGx5L2NvbXBvbmVudC9SZXBseUlucHV0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDhweDtcclxuYDtcclxuY29uc3QgVXNlckluZm9TZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFVzZXJJbmZvSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDgwcHg7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICBoZWlnaHQ6IDgwJTtcclxuXHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuYDtcclxuXHJcbmNvbnN0IFJlcGx5SW5wdXQgPSAoeyBhZGRSZXBseSB9KSA9PiB7XHJcbiAgY29uc3QgW3dyaXRlciwgc2V0V3JpdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBhZGRSZXBseSh3cml0ZXIsIGNvbnRlbnQsIHBhc3N3b3JkLCBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKTtcclxuICAgIHNldFdyaXRlcihcIlwiKTtcclxuICAgIHNldFBhc3N3b3JkKFwiXCIpO1xyXG4gICAgc2V0Q29udGVudChcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFVzZXJJbmZvU2VjdGlvbj5cclxuICAgICAgICA8VXNlckluZm9JbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnpHshLHsnpBcIlxyXG4gICAgICAgICAgdmFsdWU9e3dyaXRlcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0V3JpdGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxVc2VySW5mb0lucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1VzZXJJbmZvU2VjdGlvbj5cclxuICAgICAgPENvbnRlbnRJbnB1dFxyXG4gICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAg7J6R7ISxXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGx5SW5wdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiVXNlckluZm9TZWN0aW9uIiwiVXNlckluZm9JbnB1dCIsImlucHV0IiwiQ29udGVudElucHV0IiwidGV4dGFyZWEiLCJSZXBseUlucHV0IiwiYWRkUmVwbHkiLCJ3cml0ZXIiLCJzZXRXcml0ZXIiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkNsaWNrIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=