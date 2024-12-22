"use strict";
exports.__esModule = true;
exports.getCartItemsDetails = void 0;
var pizza_1 = require("../constants/pizza");
exports.getCartItemsDetails = function (pizzaType, pizzaSize, ingredients) {
    var details = [];
    if (pizzaSize && pizzaType) {
        var typeName = pizza_1.mapPizzaType[pizzaType];
        details.push(typeName + " " + pizzaSize + " \u0441\u043C");
    }
    if (ingredients) {
        details.push.apply(details, ingredients.map(function (ingredient) { return ingredient.name; }));
    }
    return details.join(', ');
};
