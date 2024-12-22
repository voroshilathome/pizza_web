"use strict";
exports.__esModule = true;
exports.CheckoutItemSkeleton = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
exports.CheckoutItemSkeleton = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn('flex items-center justify-between', className) },
        react_1["default"].createElement("div", { className: "flex items-center gap-5" },
            react_1["default"].createElement("div", { className: "w-[50px] h-[50px] bg-gray-200 rounded-full animate-pulse" }),
            react_1["default"].createElement("h2", { className: "w-40 h-5 bg-gray-200 rounded animate-pulse" })),
        react_1["default"].createElement("div", { className: "h-5 w-10 bg-gray-200 rounded animate-pulse" }),
        react_1["default"].createElement("div", { className: "h-8 w-[133px] bg-gray-200 rounded animate-pulse" })));
};
