"use strict";
exports.__esModule = true;
exports.InfoBlock = void 0;
var react_1 = require("react");
var button_1 = require("../ui/button");
var lucide_react_1 = require("lucide-react");
var title_1 = require("./title");
var link_1 = require("next/link");
var utils_1 = require("@/shared/lib/utils");
exports.InfoBlock = function (_a) {
    var className = _a.className, title = _a.title, text = _a.text, imageUrl = _a.imageUrl;
    return (react_1["default"].createElement("div", { className: utils_1.cn(className, 'flex items-center justify-between w-[840px] gap-12') },
        react_1["default"].createElement("div", { className: "flex flex-col" },
            react_1["default"].createElement("div", { className: "w-[445px]" },
                react_1["default"].createElement(title_1.Title, { size: "lg", text: title, className: "font-extrabold" }),
                react_1["default"].createElement("p", { className: "text-gray-400 text-lg" }, text)),
            react_1["default"].createElement("div", { className: "flex gap-5 mt-11" },
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement(button_1.Button, { variant: "outline", className: "gap-2" },
                        react_1["default"].createElement(lucide_react_1.ArrowLeft, null),
                        "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")),
                react_1["default"].createElement("a", { href: "" },
                    react_1["default"].createElement(button_1.Button, { variant: "outline", className: "text-gray-500 border-gray-400 hover:bg-gray-50" }, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C")))),
        react_1["default"].createElement("img", { src: imageUrl, alt: title, width: 300 })));
};
