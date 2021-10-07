"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/common/data/dummyReplyData.js":
/*!*******************************************!*\
  !*** ./src/common/data/dummyReplyData.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dummyReplyList": function() { return /* binding */ dummyReplyList; },
/* harmony export */   "getReplyList": function() { return /* binding */ getReplyList; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const dummyReplyList = [{
  id: 1,
  boardId: 1,
  content: "ㄹㅇㅋㅋ",
  writer: "이준희",
  updateTime: "2021.10.07 16:51:00"
}, {
  id: 2,
  boardId: 1,
  content: "ㄹㅇㅋㅋ",
  writer: "황동욱",
  updateTime: "2021.10.07 16:51:00"
}, {
  id: 3,
  boardId: 1,
  content: "ㄹㅇㅋㅋ",
  writer: "최국철",
  updateTime: "2021.10.07 16:51:00"
}, {
  id: 4,
  boardId: 1,
  content: "ㄹㅇㅋㅋ",
  writer: "기호영",
  updateTime: "2021.10.07 16:51:00"
}];
const getReplyList = boardId => {
  return dummyReplyList.filter(reply => reply.boardId === boardId);
};

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyBoardData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/data/dummyBoardData */ "./src/common/data/dummyBoardData.js");
/* harmony import */ var _reply_component_ReplyItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reply/component/ReplyItem */ "./src/feature/reply/component/ReplyItem.jsx");
/* harmony import */ var _reply_component_ReplyList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reply/component/ReplyList */ "./src/feature/reply/component/ReplyList.jsx");
/* harmony import */ var _component_DetailHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/DetailHeader */ "./src/feature/board/component/DetailHeader.jsx");
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
  return board ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_component_DetailHeader__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: board.title,
      writer: board.writer,
      updatedAt: board.updatedAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Content, {
      children: board.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_reply_component_ReplyList__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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

/***/ "./src/feature/reply/component/ReplyItem.jsx":
/*!***************************************************!*\
  !*** ./src/feature/reply/component/ReplyItem.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\component\\ReplyItem.jsx";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyItem__Container",
  componentId: "sc-1h95ewt-0"
})(["width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;"]);
_c = Container;

const ReplyItem = ({
  writer,
  content,
  time
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: writer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

_c2 = ReplyItem;
/* harmony default export */ __webpack_exports__["default"] = (ReplyItem);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ReplyItem");

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

/***/ "./src/feature/reply/component/ReplyList.jsx":
/*!***************************************************!*\
  !*** ./src/feature/reply/component/ReplyList.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_data_dummyReplyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/data/dummyReplyData */ "./src/common/data/dummyReplyData.js");
/* harmony import */ var _ReplyItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReplyItem */ "./src/feature/reply/component/ReplyItem.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\component\\ReplyList.jsx",
    _s = $RefreshSig$();







const Container = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "ReplyList__Container",
  componentId: "sc-164sdyf-0"
})(["display:flex;flex-direction:column;"]);
_c = Container;

const ReplyList = () => {
  _s();

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    boardId
  } = router.query;
  const {
    0: replies,
    1: setReplies
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setReplies((0,_common_data_dummyReplyData__WEBPACK_IMPORTED_MODULE_2__.getReplyList)(boardId));
  }, [boardId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {
    children: replies.map(reply => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ReplyItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      writer: reply.writer,
      content: reply.content,
      time: reply.updateTime
    }, reply.id, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

_s(ReplyList, "+oVJ8gRK3xlmgrYvx5rITo89bJ0=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
});

_c2 = ReplyList;
/* harmony default export */ __webpack_exports__["default"] = (ReplyList);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ReplyList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS42MWM3ZTAxYWYxNjgxNDFjMmNhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLGNBQWMsR0FBRyxDQUM1QjtBQUNFQyxFQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxFQUFBQSxPQUFPLEVBQUUsQ0FGWDtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsTUFIWDtBQUlFQyxFQUFBQSxNQUFNLEVBQUUsS0FKVjtBQUtFQyxFQUFBQSxVQUFVLEVBQUU7QUFMZCxDQUQ0QixFQVE1QjtBQUNFSixFQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxFQUFBQSxPQUFPLEVBQUUsQ0FGWDtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsTUFIWDtBQUlFQyxFQUFBQSxNQUFNLEVBQUUsS0FKVjtBQUtFQyxFQUFBQSxVQUFVLEVBQUU7QUFMZCxDQVI0QixFQWU1QjtBQUNFSixFQUFBQSxFQUFFLEVBQUUsQ0FETjtBQUVFQyxFQUFBQSxPQUFPLEVBQUUsQ0FGWDtBQUdFQyxFQUFBQSxPQUFPLEVBQUUsTUFIWDtBQUlFQyxFQUFBQSxNQUFNLEVBQUUsS0FKVjtBQUtFQyxFQUFBQSxVQUFVLEVBQUU7QUFMZCxDQWY0QixFQXNCNUI7QUFDRUosRUFBQUEsRUFBRSxFQUFFLENBRE47QUFFRUMsRUFBQUEsT0FBTyxFQUFFLENBRlg7QUFHRUMsRUFBQUEsT0FBTyxFQUFFLE1BSFg7QUFJRUMsRUFBQUEsTUFBTSxFQUFFLEtBSlY7QUFLRUMsRUFBQUEsVUFBVSxFQUFFO0FBTGQsQ0F0QjRCLENBQXZCO0FBK0JBLE1BQU1DLFlBQVksR0FBSUosT0FBRCxJQUFhO0FBQ3ZDLFNBQU9GLGNBQWMsQ0FBQ08sTUFBZixDQUF1QkMsS0FBRCxJQUFXQSxLQUFLLENBQUNOLE9BQU4sS0FBa0JBLE9BQW5ELENBQVA7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyxTQUFEO0FBQUEsY0FDRzJCLE9BQU8sQ0FBQ0UsR0FBUixDQUFhdkIsS0FBRCxpQkFDWCw4REFBQywrQ0FBRDtBQUVFLFlBQU0sRUFBRUEsS0FBSyxDQUFDSixNQUZoQjtBQUdFLGFBQU8sRUFBRUksS0FBSyxDQUFDTCxPQUhqQjtBQUlFLFVBQUksRUFBRUssS0FBSyxDQUFDSDtBQUpkLE9BQ09HLEtBQUssQ0FBQ1AsRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0FyQkQ7O0dBQU1lO1VBQ1dQOzs7TUFEWE87QUF1Qk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbW1vbi9kYXRhL2R1bW15UmVwbHlEYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9ib2FyZC90ZW1wbGF0ZS9Cb2FyZERldGFpbFBhZ2UuanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9yZXBseS9jb21wb25lbnQvUmVwbHlJdGVtLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmUvcmVwbHkvY29tcG9uZW50L1JlcGx5TGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGR1bW15UmVwbHlMaXN0ID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgYm9hcmRJZDogMSxcclxuICAgIGNvbnRlbnQ6IFwi44S544WH44WL44WLXCIsXHJcbiAgICB3cml0ZXI6IFwi7J207KSA7Z2sXCIsXHJcbiAgICB1cGRhdGVUaW1lOiBcIjIwMjEuMTAuMDcgMTY6NTE6MDBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgYm9hcmRJZDogMSxcclxuICAgIGNvbnRlbnQ6IFwi44S544WH44WL44WLXCIsXHJcbiAgICB3cml0ZXI6IFwi7Zmp64+Z7JqxXCIsXHJcbiAgICB1cGRhdGVUaW1lOiBcIjIwMjEuMTAuMDcgMTY6NTE6MDBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgYm9hcmRJZDogMSxcclxuICAgIGNvbnRlbnQ6IFwi44S544WH44WL44WLXCIsXHJcbiAgICB3cml0ZXI6IFwi7LWc6rWt7LKgXCIsXHJcbiAgICB1cGRhdGVUaW1lOiBcIjIwMjEuMTAuMDcgMTY6NTE6MDBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgYm9hcmRJZDogMSxcclxuICAgIGNvbnRlbnQ6IFwi44S544WH44WL44WLXCIsXHJcbiAgICB3cml0ZXI6IFwi6riw7Zi47JiBXCIsXHJcbiAgICB1cGRhdGVUaW1lOiBcIjIwMjEuMTAuMDcgMTY6NTE6MDBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlcGx5TGlzdCA9IChib2FyZElkKSA9PiB7XHJcbiAgcmV0dXJuIGR1bW15UmVwbHlMaXN0LmZpbHRlcigocmVwbHkpID0+IHJlcGx5LmJvYXJkSWQgPT09IGJvYXJkSWQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZHVtbXlCb2FyZEVudGl0aWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRhL2R1bW15Qm9hcmREYXRhXCI7XHJcbmltcG9ydCBSZXBseUl0ZW0gZnJvbSBcIi4uLy4uL3JlcGx5L2NvbXBvbmVudC9SZXBseUl0ZW1cIjtcclxuaW1wb3J0IFJlcGx5TGlzdCBmcm9tIFwiLi4vLi4vcmVwbHkvY29tcG9uZW50L1JlcGx5TGlzdFwiO1xyXG5pbXBvcnQgRGV0YWlsSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnQvRGV0YWlsSGVhZGVyXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDtcclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIGNvbG9yOiAjMDAwO1xyXG5gO1xyXG5cclxuY29uc3QgQm9hcmREZXRhaWxQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgYm9hcmRJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRCb2FyZChkdW1teUJvYXJkRW50aXRpZXNbYm9hcmRJZF0pO1xyXG4gIH0sIFtib2FyZElkXSk7XHJcblxyXG4gIHJldHVybiBib2FyZCA/IChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxEZXRhaWxIZWFkZXJcclxuICAgICAgICB0aXRsZT17Ym9hcmQudGl0bGV9XHJcbiAgICAgICAgd3JpdGVyPXtib2FyZC53cml0ZXJ9XHJcbiAgICAgICAgdXBkYXRlZEF0PXtib2FyZC51cGRhdGVkQXR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb250ZW50Pntib2FyZC5jb250ZW50fTwvQ29udGVudD5cclxuICAgICAgPFJlcGx5TGlzdCAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKSA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZERldGFpbFBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFJlcGx5SXRlbSA9ICh7IHdyaXRlciwgY29udGVudCwgdGltZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXY+e3dyaXRlcn08L2Rpdj5cclxuICAgICAgPGRpdj57Y29udGVudH08L2Rpdj5cclxuICAgICAgPGRpdj57dGltZX08L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBseUl0ZW07XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBnZXRSZXBseUxpc3QgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RhdGEvZHVtbXlSZXBseURhdGFcIjtcclxuaW1wb3J0IFJlcGx5SXRlbSBmcm9tIFwiLi9SZXBseUl0ZW1cIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgUmVwbHlMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgYm9hcmRJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBbcmVwbGllcywgc2V0UmVwbGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJlcGxpZXMoZ2V0UmVwbHlMaXN0KGJvYXJkSWQpKTtcclxuICB9LCBbYm9hcmRJZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAge3JlcGxpZXMubWFwKChyZXBseSkgPT4gKFxyXG4gICAgICAgIDxSZXBseUl0ZW1cclxuICAgICAgICAgIGtleT17cmVwbHkuaWR9XHJcbiAgICAgICAgICB3cml0ZXI9e3JlcGx5LndyaXRlcn1cclxuICAgICAgICAgIGNvbnRlbnQ9e3JlcGx5LmNvbnRlbnR9XHJcbiAgICAgICAgICB0aW1lPXtyZXBseS51cGRhdGVUaW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGx5TGlzdDtcclxuIl0sIm5hbWVzIjpbImR1bW15UmVwbHlMaXN0IiwiaWQiLCJib2FyZElkIiwiY29udGVudCIsIndyaXRlciIsInVwZGF0ZVRpbWUiLCJnZXRSZXBseUxpc3QiLCJmaWx0ZXIiLCJyZXBseSIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJkdW1teUJvYXJkRW50aXRpZXMiLCJSZXBseUl0ZW0iLCJSZXBseUxpc3QiLCJEZXRhaWxIZWFkZXIiLCJDb250YWluZXIiLCJkaXYiLCJDb250ZW50IiwiQm9hcmREZXRhaWxQYWdlIiwicm91dGVyIiwicXVlcnkiLCJib2FyZCIsInNldEJvYXJkIiwidGl0bGUiLCJ1cGRhdGVkQXQiLCJ0aW1lIiwicmVwbGllcyIsInNldFJlcGxpZXMiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9