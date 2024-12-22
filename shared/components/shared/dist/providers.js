'use client';
"use strict";
exports.__esModule = true;
exports.Providers = void 0;
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var react_2 = require("next-auth/react");
var nextjs_toploader_1 = require("nextjs-toploader");
exports.Providers = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_2.SessionProvider, null, children),
        react_1["default"].createElement(react_hot_toast_1.Toaster, null),
        react_1["default"].createElement(nextjs_toploader_1["default"], null)));
};
