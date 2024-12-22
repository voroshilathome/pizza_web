"use strict";
exports.__esModule = true;
exports.CountIconButton = void 0;
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/shared/lib/utils");
var button_1 = require("../ui/button");
exports.CountIconButton = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'sm' : _b, disabled = _a.disabled, type = _a.type, onClick = _a.onClick;
    return (React.createElement(button_1.Button, { variant: "outline", disabled: disabled, onClick: onClick, type: "button", className: utils_1.cn('p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400', size === 'sm' ? 'w-[30px] h-[30px] rounded-[10px]' : 'w-[38px] h-[38px] rounded-md') }, type === 'plus' ? (React.createElement(lucide_react_1.Plus, { className: size === 'sm' ? 'h-4' : 'h-5' })) : (React.createElement(lucide_react_1.Minus, { className: size === 'sm' ? 'h-4' : 'h-5' }))));
};
