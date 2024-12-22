"use strict";
exports.__esModule = true;
exports.CheckoutItemDetails = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
exports.CheckoutItemDetails = function (_a) {
    var title = _a.title, value = _a.value, className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn("flex my-4", className) },
        react_1["default"].createElement("span", { className: "flex flex-1 text-lg text-neutral-500" },
            title,
            react_1["default"].createElement("div", { className: "flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" })),
        react_1["default"].createElement("span", { className: "font-bold text-lg" },
            value,
            "\u0420")));
};
