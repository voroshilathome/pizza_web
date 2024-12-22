"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CheckoutCart = void 0;
var react_1 = require("react");
var white_block_1 = require("../white-block");
var checkout_item_1 = require("../checkout-item");
var lib_1 = require("@/shared/lib");
var checkout_item_skeleton_1 = require("../checkout-item-skeleton");
exports.CheckoutCart = function (_a) {
    var items = _a.items, onClickCountButton = _a.onClickCountButton, removeCartItem = _a.removeCartItem, loading = _a.loading, className = _a.className;
    return (react_1["default"].createElement(white_block_1.WhiteBlock, { title: "1. \u041A\u043E\u0440\u0437\u0438\u043D\u0430", className: className },
        react_1["default"].createElement("div", { className: "flex flex-col gap-5" }, loading ? __spreadArrays(Array(4)).map(function (_, index) { return react_1["default"].createElement(checkout_item_skeleton_1.CheckoutItemSkeleton, { key: index }); }) :
            items.map(function (item) { return (react_1["default"].createElement(checkout_item_1.CheckoutItem, { key: item.id, id: 1, imageUrl: item.imageUrl, details: lib_1.getCartItemDetails(item.ingredients, item.pizzaType, item.pizzaSize), name: item.name, price: item.price, quantity: item.quantity, disabled: item.disabled, onClickCountButton: function (type) {
                    return onClickCountButton(item.id, item.quantity, type);
                }, onClickRemove: function () { return removeCartItem(item.id); } })); }))));
};
