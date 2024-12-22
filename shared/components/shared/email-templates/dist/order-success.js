"use strict";
exports.__esModule = true;
exports.OrderSuccessTemplate = void 0;
var react_1 = require("react");
exports.OrderSuccessTemplate = function (_a) {
    var orderId = _a.orderId, items = _a.items;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443! \uD83C\uDF89"),
        react_1["default"].createElement("p", null,
            "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 #",
            orderId,
            " \u043E\u043F\u043B\u0430\u0447\u0435\u043D. \u0421\u043F\u0438\u0441\u043E\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432:"),
        react_1["default"].createElement("hr", null),
        react_1["default"].createElement("ul", null, items.map(function (item) { return (react_1["default"].createElement("li", { key: item.id },
            item.productItem.product.name,
            " | ",
            item.productItem.price,
            " \u20BD x ",
            item.quantity,
            " \u0448\u0442. =",
            ' ',
            item.productItem.price * item.quantity,
            " \u20BD")); }))));
};
