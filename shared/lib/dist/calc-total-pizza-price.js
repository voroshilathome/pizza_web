"use strict";
exports.__esModule = true;
exports.calcTotalPizzaPrice = void 0;
/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @example ```calcTotalPizzaPrice(1, 20, items, ingredients, selectedIngredients)```
 *
 * @param type - тип теста
 * @param size - размер
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns number общую стоимость
 */
exports.calcTotalPizzaPrice = function (type, size, items, ingredients, selectedIngredients) {
    var _a;
    var pizzaPrice = ((_a = items.find(function (item) { return item.pizzaType === type && item.size === size; })) === null || _a === void 0 ? void 0 : _a.price) || 0;
    var totalIngredientsPrice = ingredients
        .filter(function (ingredient) { return selectedIngredients.has(ingredient.id); })
        .reduce(function (acc, ingredient) { return acc + ingredient.price; }, 0);
    return pizzaPrice + totalIngredientsPrice;
};
