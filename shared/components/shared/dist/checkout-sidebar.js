"use strict";
exports.__esModule = true;
exports.CheckoutSidebar = void 0;
var react_1 = require("react");
var white_block_1 = require("./white-block");
var checkout_item_datails_1 = require("./checkout-item-datails");
var lucide_react_1 = require("lucide-react");
var ui_1 = require("../ui");
var utils_1 = require("@/shared/lib/utils");
var skeleton_1 = require("../ui/skeleton");
var VAT = 15;
var DELIVERY_PRICE = 250;
exports.CheckoutSidebar = function (_a) {
    var totalAmount = _a.totalAmount, loading = _a.loading, className = _a.className;
    var vatPrice = (totalAmount * VAT) / 100;
    var totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;
    return (react_1["default"].createElement(white_block_1.WhiteBlock, { className: utils_1.cn("p-6 sticky top-4", className) },
        react_1["default"].createElement("div", { className: "flex flex-col gap-1" },
            react_1["default"].createElement("span", { className: "text-xl" }, "\u0418\u0442\u043E\u0433\u043E:"),
            loading ? (react_1["default"].createElement(skeleton_1.Skeleton, { className: "h-11 w-48" })) : (react_1["default"].createElement("span", { className: "h-11 text-[34px] font-extrabold" },
                totalPrice,
                " \u0420"))),
        react_1["default"].createElement(checkout_item_datails_1.CheckoutItemDetails, { title: react_1["default"].createElement("div", { className: "flex items-center" },
                react_1["default"].createElement(lucide_react_1.Package, { size: 18, className: "mr-2 text-gray-300" }),
                "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u044B:"), value: loading ? react_1["default"].createElement(skeleton_1.Skeleton, { className: "h-6 w-16 rounded-[6px]" }) : totalAmount + " \u0420" }),
        react_1["default"].createElement(checkout_item_datails_1.CheckoutItemDetails, { title: react_1["default"].createElement("div", { className: "flex items-center" },
                react_1["default"].createElement(lucide_react_1.Percent, { size: 18, className: "mr-2 text-gray-300" }),
                "\u041D\u0430\u043B\u043E\u0433\u0438:"), value: loading ? react_1["default"].createElement(skeleton_1.Skeleton, { className: "h-6 w-16 rounded-[6px]" }) : vatPrice + " \u0420" }),
        react_1["default"].createElement(checkout_item_datails_1.CheckoutItemDetails, { title: react_1["default"].createElement("div", { className: "flex items-center" },
                react_1["default"].createElement(lucide_react_1.Truck, { size: 18, className: "mr-2 text-gray-300" }),
                "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430:"), value: loading ? react_1["default"].createElement(skeleton_1.Skeleton, { className: "h-6 w-16 rounded-[6px]" }) : DELIVERY_PRICE + " \u0420" }),
        react_1["default"].createElement(ui_1.Button, { loading: loading, type: "submit", className: "w-full h-14 rounded-2xl mt-6 text-base font-bold" },
            "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u043F\u043B\u0430\u0442\u0435",
            react_1["default"].createElement(lucide_react_1.ArrowRight, { className: "w-5 ml-2" }))));
};
