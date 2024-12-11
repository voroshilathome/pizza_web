'use client';
"use strict";
exports.__esModule = true;
exports.GroupVariants = void 0;
var utils_1 = require("@/lib/utils");
var react_1 = require("react");
exports.GroupVariants = function (_a) {
    var items = _a.items, onClick = _a.onClick, className = _a.className, selectedValue = _a.selectedValue;
    return (react_1["default"].createElement("div", { className: utils_1.cn(className, 'flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none') }, items.map(function (item) { return (react_1["default"].createElement("button", { key: item.name, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(item.value); }, className: utils_1.cn('flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm', {
            'bg-white shadow': item.value === selectedValue,
            'text-gray-500 opacity-50 pointer-events-none': item.disabled
        }) }, item.name)); })));
};
