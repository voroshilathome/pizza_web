"use strict";
exports.__esModule = true;
exports.Title = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
exports.Title = function (_a) {
    var text = _a.text, _b = _a.size, size = _b === void 0 ? 'sm' : _b, className = _a.className;
    var mapTagBySize = {
        xs: 'h5',
        sm: 'h4',
        md: 'h3',
        lg: 'h2',
        xl: 'h1',
        '2xl': 'h1'
    };
    var mapClassNameBySize = {
        xs: 'text-[16px]',
        sm: 'text-[22px]',
        md: 'text-[26px]',
        lg: 'text-[32px]',
        xl: 'text-[40px]',
        '2xl': 'text-[48px]'
    };
    return react_1["default"].createElement(mapTagBySize[size], { className: clsx_1["default"](mapClassNameBySize[size], className) }, text);
};
