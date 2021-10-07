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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/data/dummyBoardData */ "./src/common/data/dummyBoardData.js");
/* harmony import */ var _component_DetailHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/DetailHeader */ "./src/feature/board/component/DetailHeader.jsx");
/* harmony import */ var _reply_component_ReplyList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reply/component/ReplyList */ "./src/feature/reply/component/ReplyList.jsx");
/* harmony import */ var _reply_template_Reply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reply/template/Reply */ "./src/feature/reply/template/Reply.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\board\\template\\BoardDetailPage.jsx",
    _s = $RefreshSig$();









const Container = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "BoardDetailPage__Container",
  componentId: "sc-1i8vxt4-0"
})(["width:80%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin-right:auto;margin-left:auto;"]);
_c = Container;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "BoardDetailPage__Content",
  componentId: "sc-1i8vxt4-1"
})(["width:100%;min-height:300px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin-bottom:20px;color:#000;"]);
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
  return board ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_component_DetailHeader__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: board.title,
      writer: board.writer,
      updatedAt: board.updatedAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Content, {
      children: board.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_reply_template_Reply__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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


/***/ }),

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
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\component\\ReplyInput.jsx";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyInput__Container",
  componentId: "sc-9wk741-0"
})(["width:100%;height:80px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;"]);
_c = Container;
const UserInfoSection = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyInput__UserInfoSection",
  componentId: "sc-9wk741-1"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"]);
_c2 = UserInfoSection;
const UserInfoInput = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.input.withConfig({
  displayName: "ReplyInput__UserInfoInput",
  componentId: "sc-9wk741-2"
})(["width:80px;"]);
_c3 = UserInfoInput;

const ReplyInput = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uC791\uC131\uC790"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoInput, {
        placeholder: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

_c4 = ReplyInput;
/* harmony default export */ __webpack_exports__["default"] = (ReplyInput);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UserInfoSection");
$RefreshReg$(_c3, "UserInfoInput");
$RefreshReg$(_c4, "ReplyInput");

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

/***/ "./src/feature/reply/template/Reply.jsx":
/*!**********************************************!*\
  !*** ./src/feature/reply/template/Reply.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_ReplyInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/ReplyInput */ "./src/feature/reply/component/ReplyInput.jsx");
/* harmony import */ var _component_ReplyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/ReplyList */ "./src/feature/reply/component/ReplyList.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\template\\Reply.jsx";





const Reply = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_component_ReplyInput__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_component_ReplyList__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = Reply;
/* harmony default export */ __webpack_exports__["default"] = (Reply);

var _c;

$RefreshReg$(_c, "Reply");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS5mNDIxNDAzN2ZkOGFhNWU5YjJjNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUyxTQUFTLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtKQUFmO0tBQU1LO0FBWU4sTUFBTUUsT0FBTyxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1SkFBYjtNQUFNTzs7QUFjTixNQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUFBOztBQUM1QixRQUFNQyxNQUFNLEdBQUdiLGtFQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFYyxJQUFBQTtBQUFGLE1BQWNELE1BQU0sQ0FBQ0UsS0FBM0I7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JkLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZGUsSUFBQUEsUUFBUSxDQUFDWiwyRUFBa0IsQ0FBQ1MsT0FBRCxDQUFuQixDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNBLE9BQUQsQ0FGTSxDQUFUO0FBSUEsU0FBT0UsS0FBSyxnQkFDViw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsNERBQUQ7QUFDRSxXQUFLLEVBQUVBLEtBQUssQ0FBQ0UsS0FEZjtBQUVFLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxNQUZoQjtBQUdFLGVBQVMsRUFBRUgsS0FBSyxDQUFDSTtBQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUsOERBQUMsT0FBRDtBQUFBLGdCQUFVSixLQUFLLENBQUNLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFPRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVLEdBVVIsSUFWSjtBQVdELENBcEJEOztHQUFNVDtVQUNXWjs7O01BRFhZO0FBc0JOLCtEQUFlQSxlQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBOztBQUVBLE1BQU1ILFNBQVMsR0FBR0wscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkdBQWY7S0FBTUs7QUFTTixNQUFNYSxlQUFlLEdBQUdsQixxRUFBSDtBQUFBO0FBQUE7QUFBQSx5RkFBckI7TUFBTWtCO0FBT04sTUFBTUMsYUFBYSxHQUFHbkIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQW5CO01BQU1tQjs7QUFJTixNQUFNRSxVQUFVLEdBQUcsTUFBTTtBQUN2QixzQkFDRSw4REFBQyxTQUFEO0FBQUEsMkJBQ0UsOERBQUMsZUFBRDtBQUFBLDhCQUNFLDhEQUFDLGFBQUQ7QUFBZSxtQkFBVyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxhQUFEO0FBQWUsbUJBQVcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O01BQU1BO0FBV04sK0RBQWVBLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNakIsS0FBSyxHQUFHLE1BQU07QUFDbEIsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBUEQ7O0tBQU1BO0FBU04sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvYm9hcmQvdGVtcGxhdGUvQm9hcmREZXRhaWxQYWdlLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcmVwbHkvY29tcG9uZW50L1JlcGx5SW5wdXQuanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9yZXBseS90ZW1wbGF0ZS9SZXBseS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBkdW1teUJvYXJkRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RhdGEvZHVtbXlCb2FyZERhdGFcIjtcclxuaW1wb3J0IERldGFpbEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L0RldGFpbEhlYWRlclwiO1xyXG5pbXBvcnQgUmVwbHlMaXN0IGZyb20gXCIuLi8uLi9yZXBseS9jb21wb25lbnQvUmVwbHlMaXN0XCI7XHJcbmltcG9ydCBSZXBseSBmcm9tIFwiLi4vLi4vcmVwbHkvdGVtcGxhdGUvUmVwbHlcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5gO1xyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgY29sb3I6ICMwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBCb2FyZERldGFpbFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBib2FyZElkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEJvYXJkKGR1bW15Qm9hcmRFbnRpdGllc1tib2FyZElkXSk7XHJcbiAgfSwgW2JvYXJkSWRdKTtcclxuXHJcbiAgcmV0dXJuIGJvYXJkID8gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPERldGFpbEhlYWRlclxyXG4gICAgICAgIHRpdGxlPXtib2FyZC50aXRsZX1cclxuICAgICAgICB3cml0ZXI9e2JvYXJkLndyaXRlcn1cclxuICAgICAgICB1cGRhdGVkQXQ9e2JvYXJkLnVwZGF0ZWRBdH1cclxuICAgICAgLz5cclxuICAgICAgPENvbnRlbnQ+e2JvYXJkLmNvbnRlbnR9PC9Db250ZW50PlxyXG4gICAgICA8UmVwbHkgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICkgOiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmREZXRhaWxQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODBweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBVc2VySW5mb1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFVzZXJJbmZvSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDgwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBSZXBseUlucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8VXNlckluZm9TZWN0aW9uPlxyXG4gICAgICAgIDxVc2VySW5mb0lucHV0IHBsYWNlaG9sZGVyPVwi7J6R7ISx7J6QXCIgLz5cclxuICAgICAgICA8VXNlckluZm9JbnB1dCBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiIC8+XHJcbiAgICAgIDwvVXNlckluZm9TZWN0aW9uPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGx5SW5wdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlcGx5SW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9SZXBseUlucHV0XCI7XHJcbmltcG9ydCBSZXBseUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9SZXBseUxpc3RcIjtcclxuXHJcbmNvbnN0IFJlcGx5ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UmVwbHlJbnB1dCAvPlxyXG4gICAgICA8UmVwbHlMaXN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwbHk7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiZHVtbXlCb2FyZEVudGl0aWVzIiwiRGV0YWlsSGVhZGVyIiwiUmVwbHlMaXN0IiwiUmVwbHkiLCJDb250YWluZXIiLCJkaXYiLCJDb250ZW50IiwiQm9hcmREZXRhaWxQYWdlIiwicm91dGVyIiwiYm9hcmRJZCIsInF1ZXJ5IiwiYm9hcmQiLCJzZXRCb2FyZCIsInRpdGxlIiwid3JpdGVyIiwidXBkYXRlZEF0IiwiY29udGVudCIsIlVzZXJJbmZvU2VjdGlvbiIsIlVzZXJJbmZvSW5wdXQiLCJpbnB1dCIsIlJlcGx5SW5wdXQiXSwic291cmNlUm9vdCI6IiJ9