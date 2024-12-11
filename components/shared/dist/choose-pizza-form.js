"use strict";
exports.__esModule = true;
exports.ChoosePizzaForm = void 0;
var react_1 = require("react");
var product_image_1 = require("./product-image");
var utils_1 = require("@/lib/utils");
var title_1 = require("./title");
var ui_1 = require("../ui");
exports.ChoosePizzaForm = function (_a) {
    var name = _a.name, items = _a.items, imageUrl = _a.imageUrl, ingredients = _a.ingredients, onClickAdd = _a.onClickAdd, className = _a.className;
    var textDetails = '30 см, традиционное тесто 30';
    var totalPrice = 350;
    return (react_1["default"].createElement("div", { className: utils_1.cn(className, "flex flex-1") },
        react_1["default"].createElement(product_image_1.ProductImage, { imageUrl: imageUrl, size: 30 }),
        react_1["default"].createElement("div", { className: "w-[490px] bg-[#f7f6f5] p-7" },
            react_1["default"].createElement(title_1.Title, { text: name, size: "md", className: "font-extrabold mb-1" }),
            react_1["default"].createElement("p", { className: "text-gray-400" }, textDetails),
            react_1["default"].createElement(ui_1.Button, { className: "h-[55px] px-10 text-base rounded-[18px] w-full" },
                "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0437\u0430 ",
                totalPrice,
                " \u0420"))));
};
