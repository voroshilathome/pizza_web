"use strict";
exports.__esModule = true;
exports.PayOrderTemplate = void 0;
var react_1 = require("react");
exports.PayOrderTemplate = function (_a) {
    var orderId = _a.orderId, totalAmount = _a.totalAmount, paymentUrl = _a.paymentUrl;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null,
            "\u0417\u0430\u043A\u0430\u0437 #",
            orderId),
        react_1["default"].createElement("p", null,
            "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 ",
            react_1["default"].createElement("b", null,
                totalAmount,
                " \u20BD"),
            ". \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 ",
            ' ',
            react_1["default"].createElement("a", { href: paymentUrl }, "\u043F\u043E \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435"),
            " \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430\u043A\u0430\u0437\u0430.")));
};
