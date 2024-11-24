"use strict";
exports.__esModule = true;
exports.SortPopup = void 0;
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
exports.SortPopup = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', className) },
        react_1["default"].createElement(lucide_react_1.ArrowUpDown, { size: 16 }),
        react_1["default"].createElement("b", null, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430:"),
        react_1["default"].createElement("b", { className: "text-primary" }, "\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435")));
};
