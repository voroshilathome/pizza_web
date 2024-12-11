"use strict";
exports.__esModule = true;
exports.Header = void 0;
var utils_1 = require("@/lib/utils");
var react_1 = require("react");
var container_1 = require("./container");
var image_1 = require("next/image");
var ui_1 = require("../ui");
var lucide_react_1 = require("lucide-react");
var lucide_react_2 = require("lucide-react");
var link_1 = require("next/link");
var search_input_1 = require("./search-input");
exports.Header = function (_a) {
    var className = _a.className;
    return (react_1["default"].createElement("header", { className: utils_1.cn("border-b", className) },
        react_1["default"].createElement(container_1.Container, { className: "flex items-center justify-between py-8" },
            react_1["default"].createElement(link_1["default"], { href: "/" },
                react_1["default"].createElement("div", { className: "flex items-center gap-4" },
                    react_1["default"].createElement(image_1["default"], { src: "/logo.png", alt: "Logo", width: 35, height: 35 }),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h1", { className: "text-2xl uppercase font-black" }, "Pizza MEI"),
                        react_1["default"].createElement("p", { className: "text-sm text-gray-400 leading-3" }, "\u0432\u043A\u0443\u0441\u043D\u0435\u0439 \u0443\u0436\u0435 \u043D\u0435\u043A\u0443\u0434\u0430")))),
            react_1["default"].createElement("div", { className: "mx-10 flex-1" },
                react_1["default"].createElement(search_input_1.SearchInput, null)),
            react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                react_1["default"].createElement(ui_1.Button, { variant: "outline", className: "flex items-center gap-1" },
                    react_1["default"].createElement(lucide_react_1.User, { size: 16 }),
                    "\u0412\u043E\u0439\u0442\u0438"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(ui_1.Button, { className: "group relative" },
                        react_1["default"].createElement("b", null, "520 \u0440"),
                        react_1["default"].createElement("span", { className: "h-full w-[1px] bg-white/30 mx-3" }),
                        react_1["default"].createElement("div", { className: "flex items-center gap-1 transition duration-300 group-hover:opacity-0" },
                            react_1["default"].createElement(lucide_react_2.ShoppingCart, { size: 16, className: "relative", strokeWidth: 2 }),
                            react_1["default"].createElement("b", null, "3")),
                        react_1["default"].createElement(lucide_react_1.ArrowRight, { size: 20, className: "\r\n                  absolute right-5 \r\n                  transition duration-300 \r\n                  -translate-x-2 \r\n                  opacity-0 \r\n                  group-hover:opacity-100 \r\n                  group-hover:translate-x-0" })))))));
};
