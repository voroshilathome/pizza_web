'use client';
"use strict";
exports.__esModule = true;
exports.Categories = void 0;
var utils_1 = require("@/lib/utils");
var category_1 = require("@/store/category");
var react_1 = require("react");
var cats = [
    { id: 1, name: 'Пиццы' },
    { id: 2, name: 'Комбо' },
    { id: 3, name: 'Закуски' },
    { id: 4, name: 'Коктейли' },
    { id: 5, name: 'Кофе' },
    { id: 6, name: 'Напитки' },
    { id: 7, name: 'Десерты' },
    { id: 8, name: 'Другое' },
];
exports.Categories = function (_a) {
    var className = _a.className;
    var categoryActiveId = category_1.useCategoryStore(function (state) { return state.activeId; });
    return (react_1["default"].createElement("div", { className: utils_1.cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className) }, cats.map(function (_a, index) {
        var name = _a.name, id = _a.id;
        return (react_1["default"].createElement("a", { className: utils_1.cn('flex items-center font-bold h-11 rounded-2xl px-5', categoryActiveId == id && 'bg-white shadow-md shadow-gray-200 text-primary'), href: "/#" + name, key: index },
            react_1["default"].createElement("button", null, name)));
    })));
};