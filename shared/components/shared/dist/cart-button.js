'use client';
"use strict";
exports.__esModule = true;
exports.CartButton = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
var ui_1 = require("../ui");
var lucide_react_1 = require("lucide-react");
var cart_drawer_1 = require("./cart-drawer");
var store_1 = require("@/shared/store");
exports.CartButton = function (_a) {
    var className = _a.className;
    // Разделяем хуки для отдельных значений
    var totalAmount = store_1.useCartStore(function (state) { return state.totalAmount; });
    var items = store_1.useCartStore(function (state) { return state.items; });
    var loading = store_1.useCartStore(function (state) { return state.loading; });
    return (react_1["default"].createElement(cart_drawer_1.CartDrawer, null,
        react_1["default"].createElement(ui_1.Button, { loading: loading, className: utils_1.cn('group relative', { 'w-[105px]': loading }, className) },
            react_1["default"].createElement("b", null,
                totalAmount,
                " \u0440"),
            react_1["default"].createElement("span", { className: "h-full w-[1px] bg-white/30 mx-3" }),
            react_1["default"].createElement("div", { className: "flex items-center gap-1 transition duration-300 group-hover:opacity-0" },
                react_1["default"].createElement(lucide_react_1.ShoppingCart, { size: 16, className: "relative", strokeWidth: 2 }),
                react_1["default"].createElement("b", null, items.length)),
            react_1["default"].createElement(lucide_react_1.ArrowRight, { size: 20, className: "\r\n            absolute right-5 \r\n            transition duration-300 \r\n            -translate-x-2 \r\n            opacity-0 \r\n            group-hover:opacity-100 \r\n            group-hover:translate-x-0" }))));
};
