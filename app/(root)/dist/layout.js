"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var header_1 = require("@/components/shared/header");
exports.metadata = {
    title: "pizzaMEI | Главная"
};
function HomeLayout(_a) {
    var children = _a.children, modal = _a.modal;
    return (React.createElement("main", { className: "min-h-screen" },
        React.createElement(header_1.Header, null),
        children,
        modal));
}
exports["default"] = HomeLayout;
