"use strict";
exports.__esModule = true;
exports.VerificationUserTemplate = void 0;
var react_1 = require("react");
exports.VerificationUserTemplate = function (_a) {
    var code = _a.code;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null,
            "\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F: ",
            react_1["default"].createElement("h2", null, code)),
        react_1["default"].createElement("p", null,
            react_1["default"].createElement("a", { href: "http://localhost:3000/api/auth/verify?code=" + code }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E"))));
};
