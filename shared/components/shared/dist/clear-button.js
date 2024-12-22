"use strict";
exports.__esModule = true;
exports.ClearButton = void 0;
var utils_1 = require("@/shared/lib/utils");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
exports.ClearButton = function (_a) {
    var onClick = _a.onClick, className = _a.className;
    return (react_1["default"].createElement("button", { onClick: onClick, className: utils_1.cn('absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer', className) },
        react_1["default"].createElement(lucide_react_1.X, { className: "h-5 w-5" })));
};
