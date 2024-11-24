"use strict";
exports.__esModule = true;
exports.ProductCard = void 0;
var link_1 = require("next/link");
var react_1 = require("react");
var title_1 = require("./title");
var ui_1 = require("../ui");
var lucide_react_1 = require("lucide-react");
exports.ProductCard = function (_a) {
    var id = _a.id, name = _a.name, price = _a.price, imageUrl = _a.imageUrl, className = _a.className;
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement(link_1["default"], { href: "/product/" + id },
            react_1["default"].createElement("div", { className: "flex justify-center p-6 bg-secondary rounded-lg h-[260px]" },
                react_1["default"].createElement("img", { className: "w-[215px] h-[215px]", src: imageUrl, alt: name })),
            react_1["default"].createElement(title_1.Title, { text: name, size: "sm", className: "mb-1 mt-3 font-bold" }),
            react_1["default"].createElement("p", { className: "text-sm text-gray-400" }, "\u0426\u044B\u043F\u043B\u0435\u043D\u043E\u043A, \u043C\u043E\u0446\u0430\u0440\u0435\u043B\u043B\u0430, \u0441\u044B\u0440 \u0447\u0435\u0434\u0434\u0435\u0440 \u0438 \u043F\u0430\u0440\u043C\u0435\u0437\u0430\u043D, \u0441\u044B\u0440\u043D\u044B\u0439 \u0441\u043E\u0443\u0441, \u0442\u043E\u043C\u0430\u0442\u044B, \u0441\u043E\u0443\u0441 \u0430\u043B\u044C\u0444\u0440\u0435\u0434\u043E, \u0447\u0435\u0441\u043D\u043E\u043A"),
            react_1["default"].createElement("div", { className: "flex justity-between items-center mt-4" },
                react_1["default"].createElement("span", { className: "text-[20px]" },
                    "\u043E\u0442 ",
                    react_1["default"].createElement("b", null,
                        price,
                        " \u0420")),
                react_1["default"].createElement(ui_1.Button, { variant: "secondary", className: "text-base font-bold" },
                    react_1["default"].createElement(lucide_react_1.Plus, { size: 20, className: "mr-1" }),
                    "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")))));
};
