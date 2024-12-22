'use client';
"use strict";
exports.__esModule = true;
exports.AdressInput = void 0;
var react_1 = require("react");
var react_dadata_1 = require("react-dadata");
require("react-dadata/dist/react-dadata.css");
exports.AdressInput = function (_a) {
    var onChange = _a.onChange;
    return (react_1["default"].createElement(react_dadata_1.AddressSuggestions, { token: "987fc114eebb221c775c95e5a3f201ccbc35c03f", onChange: function (data) { return onChange === null || onChange === void 0 ? void 0 : onChange(data === null || data === void 0 ? void 0 : data.value); } }));
};
