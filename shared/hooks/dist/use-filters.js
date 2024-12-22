"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useFilters = void 0;
var navigation_1 = require("next/navigation");
var react_use_1 = require("react-use");
var react_1 = require("react");
exports.useFilters = function () {
    var _a, _b, _c;
    var searchParams = navigation_1.useSearchParams();
    /* Фильтр ингредиентов */
    var _d = react_use_1.useSet(new Set((_a = searchParams.get("ingredients")) === null || _a === void 0 ? void 0 : _a.split(','))), selectedIngredients = _d[0], toggleIngredients = _d[1].toggle;
    /* Фильтр размера */
    var _e = react_use_1.useSet(new Set(searchParams.has("sizes") ? (_b = searchParams.get("sizes")) === null || _b === void 0 ? void 0 : _b.split(",") : [])), sizes = _e[0], toggleSizes = _e[1].toggle;
    /* Фильтр типа пиццы */
    var _f = react_use_1.useSet(new Set(searchParams.has("pizzaTypes") ? (_c = searchParams.get("pizzaTypes")) === null || _c === void 0 ? void 0 : _c.split(",") : [])), pizzaTypes = _f[0], togglePizzaTypes = _f[1].toggle;
    /* Фильтр стоимости */
    var _g = react_1["default"].useState({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined
    }), prices = _g[0], setPrices = _g[1];
    var updatePrice = function (name, value) {
        setPrices(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    return react_1["default"].useMemo(function () { return ({
        sizes: sizes,
        pizzaTypes: pizzaTypes,
        selectedIngredients: selectedIngredients,
        prices: prices,
        setPrices: updatePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients
    }); }, [sizes, pizzaTypes, selectedIngredients, prices]);
};
