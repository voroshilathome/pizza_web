"use client";
"use strict";
exports.__esModule = true;
exports.Filters = void 0;
var react_1 = require("react");
var title_1 = require("./title");
var ui_1 = require("../ui");
var range_slider_1 = require("./range-slider");
var checkbox_filters_group_1 = require("./checkbox-filters-group");
var use_ingredients_1 = require("@/shared/hooks/use-ingredients");
var use_filters_1 = require("@/shared/hooks/use-filters");
var use_query_filters_1 = require("@/shared/hooks/use-query-filters");
exports.Filters = function (_a) {
    var className = _a.className;
    var _b = use_ingredients_1.useIngredients(), ingredients = _b.ingredients, loading = _b.loading;
    var filters = use_filters_1.useFilters();
    use_query_filters_1.useQueryFilters(filters);
    var items = ingredients.map(function (item) { return ({ value: String(item.id), text: item.name }); });
    var updatePrices = function (prices) {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement(title_1.Title, { text: "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F", size: "sm", className: "mb-5 font-bold" }),
        react_1["default"].createElement(checkbox_filters_group_1.CheckboxFiltersGroup, { title: "\u0422\u0438\u043F \u0442\u0435\u0441\u0442\u0430", name: "pizzaTypes", className: "mt-5", onClickCheckbox: filters.setPizzaTypes, selected: filters.pizzaTypes, items: [
                { text: "Тонкое", value: "1" },
                { text: "Традиционное", value: "2" }
            ] }),
        react_1["default"].createElement(checkbox_filters_group_1.CheckboxFiltersGroup, { name: "sizes", className: "mt-5", title: "\u0420\u0430\u0437\u043C\u0435\u0440\u044B", onClickCheckbox: filters.setSizes, selected: filters.sizes, items: [
                { text: "20 см", value: "20" },
                { text: "30 см", value: "30" },
                { text: "40 см", value: "40" }
            ] }),
        react_1["default"].createElement("div", { className: "mt-5 border-y border-y-neutral-100 py-6 pb-7" },
            react_1["default"].createElement("p", { className: "font-bold mb-3" }, "\u0426\u0435\u043D\u0430 \u043E\u0442 \u0438 \u0434\u043E:"),
            react_1["default"].createElement("div", { className: "flex gap-3 mb-5" },
                react_1["default"].createElement(ui_1.Input, { type: "number", placeholder: "0", min: 0, max: 1000, value: String(filters.prices.priceFrom), onChange: function (e) { return filters.setPrices("priceFrom", Number(e.target.value)); } }),
                react_1["default"].createElement(ui_1.Input, { type: "number", min: 100, max: 1000, placeholder: "1000", value: String(filters.prices.priceTo), onChange: function (e) { return filters.setPrices("priceTo", Number(e.target.value)); } })),
            react_1["default"].createElement(range_slider_1.RangeSlider, { min: 0, max: 1000, step: 10, value: [filters.prices.priceFrom || 0, filters.prices.priceTo || 1000], onValueChange: updatePrices })),
        react_1["default"].createElement(checkbox_filters_group_1.CheckboxFiltersGroup, { title: "\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B", name: "ingredients", className: "mt-5", limit: 6, defaultItems: items.slice(0, 6), items: items, loading: loading, onClickCheckbox: filters.setSelectedIngredients, selected: filters.selectedIngredients })));
};
