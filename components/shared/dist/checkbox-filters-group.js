'use client';
"use strict";
exports.__esModule = true;
exports.CheckboxFiltersGroup = void 0;
var react_1 = require("react");
var filter_checkbox_1 = require("./filter-checkbox");
var input_1 = require("../ui/input");
exports.CheckboxFiltersGroup = function (_a) {
    var title = _a.title, items = _a.items, defaultItems = _a.defaultItems, _b = _a.limit, limit = _b === void 0 ? 5 : _b, _c = _a.searchInputPlaceholder, searchInputPlaceholder = _c === void 0 ? 'Поиск...' : _c, className = _a.className, onChange = _a.onChange, defaultValue = _a.defaultValue;
    var _d = react_1["default"].useState(false), showAll = _d[0], setShowAll = _d[1];
    var _e = react_1["default"].useState(''), searchValue = _e[0], setSearchValue = _e[1];
    var onChangeSearchInput = function (e) {
        setSearchValue(e.target.value);
    };
    { /* Если showAll true рендорим все элементы иначе рендерим столько элемнтов сколько в defaultItems */ }
    var list = showAll ? items.filter(function (item) { return item.text.toLowerCase().includes(searchValue.toLowerCase()); }) : defaultItems.slice(0, limit);
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement("p", { className: "font-bold mb-3" }, title),
        showAll && (react_1["default"].createElement("div", { className: "mb-5" },
            react_1["default"].createElement(input_1.Input, { onChange: onChangeSearchInput, placeholder: searchInputPlaceholder, className: "bg-gray-50 border-none" }))),
        react_1["default"].createElement("div", { className: "flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar" }, list.map(function (item, index) { return (react_1["default"].createElement(filter_checkbox_1.FilterCheckbox, { key: index, text: item.text, value: item.value, endAdornment: item.endAdornment, checked: false, onCheckedChange: function (ids) { return console.log(ids); } })); })),
        items.length > limit && (react_1["default"].createElement("div", { className: showAll ? 'border-t border-t-neutral-100 mt-4' : '' },
            react_1["default"].createElement("button", { onClick: function () { return setShowAll(!showAll); }, className: "text-primary mt-3" }, showAll ? 'Скрыть' : '+ Показать все')))));
};
