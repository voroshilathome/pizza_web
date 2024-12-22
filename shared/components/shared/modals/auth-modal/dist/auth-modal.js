'use client';
"use strict";
exports.__esModule = true;
exports.AuthModal = void 0;
var components_1 = require("@/shared/components");
var dialog_1 = require("@/shared/components/ui/dialog");
var react_1 = require("next-auth/react");
var react_2 = require("react");
var login_form_1 = require("./forms/login-form");
var register_form_1 = require("./forms/register-form");
exports.AuthModal = function (_a) {
    var open = _a.open, onClose = _a.onClose;
    var _b = react_2["default"].useState('login'), type = _b[0], setType = _b[1];
    var onSwitchType = function () {
        setType(type === 'login' ? 'register' : 'login');
    };
    var handleClose = function () {
        onClose();
    };
    return (react_2["default"].createElement(dialog_1.Dialog, { open: open, onOpenChange: handleClose },
        react_2["default"].createElement(dialog_1.DialogContent, { className: "w-[450px] bg-white p-10" },
            type === 'login' ? (react_2["default"].createElement(login_form_1.LoginForm, { onClose: handleClose })) : (react_2["default"].createElement(register_form_1.RegisterForm, { onClose: handleClose })),
            react_2["default"].createElement("hr", null),
            react_2["default"].createElement("div", { className: "flex gap-2" },
                react_2["default"].createElement(components_1.Button, { variant: "secondary", onClick: function () {
                        return react_1.signIn('github', {
                            callbackUrl: '/',
                            redirect: true
                        });
                    }, type: "button", className: "gap-2 h-12 p-2 flex-1" },
                    react_2["default"].createElement("img", { className: "w-6 h-6", src: "https://github.githubassets.com/favicons/favicon.svg" }),
                    "GitHub"),
                react_2["default"].createElement(components_1.Button, { variant: "secondary", onClick: function () {
                        return react_1.signIn('google', {
                            callbackUrl: '/',
                            redirect: true
                        });
                    }, type: "button", className: "gap-2 h-12 p-2 flex-1" },
                    react_2["default"].createElement("img", { className: "w-6 h-6", src: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" }),
                    "Google")),
            react_2["default"].createElement(components_1.Button, { variant: "outline", onClick: onSwitchType, type: "button", className: "h-12" }, type !== 'login' ? 'Войти' : 'Регистрация'))));
};
