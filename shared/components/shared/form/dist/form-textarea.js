'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.FormTextarea = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var textarea_1 = require("../../ui/textarea");
var clear_button_1 = require("../clear-button");
exports.FormTextarea = function (_a) {
    var _b;
    var className = _a.className, name = _a.name, label = _a.label, required = _a.required, props = __rest(_a, ["className", "name", "label", "required"]);
    var _c = react_hook_form_1.useFormContext(), register = _c.register, errors = _c.formState.errors, watch = _c.watch, setValue = _c.setValue;
    var value = watch(name);
    var errorText = (_b = errors[name]) === null || _b === void 0 ? void 0 : _b.message;
    var onClickClear = function () {
        setValue(name, '');
    };
    return (react_1["default"].createElement("div", { className: className },
        react_1["default"].createElement("p", { className: "font-medium mb-2" },
            label,
            " ",
            required && react_1["default"].createElement("span", { className: "text-red-500" }, "*")),
        react_1["default"].createElement("div", { className: "relative" },
            react_1["default"].createElement(textarea_1.Textarea, __assign({ className: "h-12 text-md" }, register(name), props)),
            value && react_1["default"].createElement(clear_button_1.ClearButton, { onClick: onClickClear })),
        errorText && react_1["default"].createElement("p", { className: "text-red-500 text-sm mt-2" }, errorText)));
};
