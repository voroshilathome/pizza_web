"use strict";
exports.__esModule = true;
exports.CartItemDetailsImage = void 0;
var utils_1 = require("@/shared/lib/utils");
exports.CartItemDetailsImage = function (_a) {
    var src = _a.src, className = _a.className;
    return React.createElement("img", { className: utils_1.cn('w-[60px] h-[60px]', className), src: src });
};
