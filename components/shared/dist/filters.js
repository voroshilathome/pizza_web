"use strict";
exports.__esModule = true;
exports.Filters = void 0;
var react_1 = require("react");
var title_1 = require("./title");
var filter_checkbox_1 = require("./filter-checkbox");
var ui_1 = require("../ui");
var range_slider_1 = require("./range-slider");
var checkbox_filters_group_1 = require("./checkbox-filters-group");
exports.Filters = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement(title_1.Title, { text: "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F", size: "sm", className: "mb-5 font-bold" }),
        react_1["default"].createElement("div", { className: "flex flex-col gap-4" },
            react_1["default"].createElement(filter_checkbox_1.FilterCheckbox, { text: "\u041C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C", value: "1" }),
            react_1["default"].createElement(filter_checkbox_1.FilterCheckbox, { text: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438", value: "2" })),
        react_1["default"].createElement("div", { className: "mt-5 border-y border-y-neutral-100 py-6 pb-7" },
            react_1["default"].createElement("p", { className: "font-bold mb-3" }, "\u0426\u0435\u043D\u0430 \u043E\u0442 \u0438 \u0434\u043E:"),
            react_1["default"].createElement("div", { className: "flex gap-3 mb-5" },
                react_1["default"].createElement(ui_1.Input, { type: "number", placeholder: "0", min: 0, max: 1000, defaultValue: 0 }),
                react_1["default"].createElement(ui_1.Input, { type: "number", min: 100, max: 30000, placeholder: "1000" })),
            react_1["default"].createElement(range_slider_1.RangeSlider, { min: 0, max: 5000, step: 10, value: [0, 5000] })),
        react_1["default"].createElement(checkbox_filters_group_1.CheckboxFiltersGroup, { title: "\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B", className: 'mt-5', limit: 6, defaultItems: [
                {
                    text: 'Сырный соус',
                    value: '1'
                },
                {
                    text: 'Моццарелла',
                    value: '2'
                },
                {
                    text: 'Чеснок',
                    value: '3'
                },
                {
                    text: 'Соленый огурцы',
                    value: '4'
                },
                {
                    text: 'Красный лук',
                    value: '5'
                },
                {
                    text: 'Томаты',
                    value: '6'
                },
                {
                    text: 'Куст',
                    value: '7'
                },
            ], items: [
                {
                    text: 'Сырный соус',
                    value: '1'
                },
                {
                    text: 'Моццарелла',
                    value: '2'
                },
                {
                    text: 'Чеснок',
                    value: '3'
                },
                {
                    text: 'Соленый огурцы',
                    value: '4'
                },
                {
                    text: 'Красный лук',
                    value: '5'
                },
                {
                    text: 'Томаты',
                    value: '6'
                },
                {
                    text: 'Куст',
                    value: '7'
                },
            ] })));
};
