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
    addReply(writer, content, password, new Date().toDateString);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uC791\uC131\uC790",
        value: writer,
        onChange: e => setWriter(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        value: password,
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContentInput, {
      value: content,
      onChange: e => {
        setContent(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "button",
      children: "\uC791\uC131"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS41N2U3MDUwMmRlYzc4N2NjYWRlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1HLFNBQVMsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEseUhBQWY7S0FBTUM7QUFXTixNQUFNRSxlQUFlLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJHQUFyQjtNQUFNRztBQVNOLE1BQU1DLGFBQWEsR0FBR0osdUVBQUg7QUFBQTtBQUFBO0FBQUEscUNBQW5CO01BQU1JO0FBTU4sTUFBTUUsWUFBWSxHQUFHTiwwRUFBSDtBQUFBO0FBQUE7QUFBQSwyQ0FBbEI7TUFBTU07O0FBT04sTUFBTUUsVUFBVSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQ25DLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlosK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7O0FBRUEsUUFBTWlCLE9BQU8sR0FBRyxNQUFNO0FBQ3BCUCxJQUFBQSxRQUFRLENBQUNDLE1BQUQsRUFBU0ksT0FBVCxFQUFrQkYsUUFBbEIsRUFBNEIsSUFBSUssSUFBSixHQUFXQyxZQUF2QyxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsZUFBRDtBQUFBLDhCQUNFLDhEQUFDLGFBQUQ7QUFDRSxtQkFBVyxFQUFDLG9CQURkO0FBRUUsYUFBSyxFQUFFUixNQUZUO0FBR0UsZ0JBQVEsRUFBR1MsQ0FBRCxJQUFPUixTQUFTLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWO0FBSDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSw4REFBQyxhQUFEO0FBQ0UsbUJBQVcsRUFBQywwQkFEZDtBQUVFLGFBQUssRUFBRVQsUUFGVDtBQUdFLGdCQUFRLEVBQUdPLENBQUQsSUFBT04sV0FBVyxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVjtBQUg5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFLDhEQUFDLFlBQUQ7QUFDRSxXQUFLLEVBQUVQLE9BRFQ7QUFFRSxjQUFRLEVBQUdLLENBQUQsSUFBTztBQUNmSixRQUFBQSxVQUFVLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVY7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFtQkU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1QkQsQ0FoQ0Q7O0dBQU1iOztNQUFBQTtBQWtDTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9yZXBseS9jb21wb25lbnQvUmVwbHlJbnB1dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODBweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBwYWRkaW5nOiA4cHg7XHJcbmA7XHJcbmNvbnN0IFVzZXJJbmZvU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBVc2VySW5mb0lucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHdpZHRoOiA4MHB4O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgaGVpZ2h0OiA4MCU7XHJcblxyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBseUlucHV0ID0gKHsgYWRkUmVwbHkgfSkgPT4ge1xyXG4gIGNvbnN0IFt3cml0ZXIsIHNldFdyaXRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgYWRkUmVwbHkod3JpdGVyLCBjb250ZW50LCBwYXNzd29yZCwgbmV3IERhdGUoKS50b0RhdGVTdHJpbmcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8VXNlckluZm9TZWN0aW9uPlxyXG4gICAgICAgIDxVc2VySW5mb0lucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyekeyEseyekFwiXHJcbiAgICAgICAgICB2YWx1ZT17d3JpdGVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRXcml0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFVzZXJJbmZvSW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvVXNlckluZm9TZWN0aW9uPlxyXG4gICAgICA8Q29udGVudElucHV0XHJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj7snpHshLE8L2J1dHRvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBseUlucHV0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIlVzZXJJbmZvU2VjdGlvbiIsIlVzZXJJbmZvSW5wdXQiLCJpbnB1dCIsIkNvbnRlbnRJbnB1dCIsInRleHRhcmVhIiwiUmVwbHlJbnB1dCIsImFkZFJlcGx5Iiwid3JpdGVyIiwic2V0V3JpdGVyIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25DbGljayIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9