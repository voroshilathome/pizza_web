"use strict";
exports.__esModule = true;
exports.TopBar = void 0;
/* Чтоб наши категории и сортировка скроллись вниз при скролле страницы */
var utils_1 = require("@/lib/utils");
var react_1 = require("react");
var container_1 = require("./container");
var categories_1 = require("./categories");
var sort_popup_1 = require("./sort-popup");
exports.TopBar = function (_a) {
    var categories = _a.categories, className = _a.className;
    return (react_1["default"].createElement("div", { className: utils_1.cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className) },
        react_1["default"].createElement(container_1.Container, { className: "flex items-center justify-between " },
            react_1["default"].createElement(categories_1.Categories, { items: categories }),
            react_1["default"].createElement(sort_popup_1.SortPopup, null))));
};
