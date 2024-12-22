"use strict";
exports.__esModule = true;
exports.getAvailablePizzaSizes = void 0;
var pizza_1 = require("../constants/pizza");
exports.getAvailablePizzaSizes = function (type, items) {
    var filteredPizzasByType = items.filter(function (item) { return item.pizzaType === type; });
    return pizza_1.pizzaSizes.map(function (item) { return ({
        name: item.name,
        value: item.value,
        disabled: !filteredPizzasByType.some(function (pizza) { return Number(pizza.size) === Number(item.value); })
    }); });
};
