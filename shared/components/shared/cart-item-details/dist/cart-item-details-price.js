"use strict";
exports.__esModule = true;
exports.CartItemDetailsPrice = void 0;
var utils_1 = require("@/shared/lib/utils");
exports.CartItemDetailsPrice = function (_a) {
    var value = _a.value, className = _a.className;
    return React.createElement("h2", { className: utils_1.cn('font-bold', className) },
        value,
        " \u20BD");
};
