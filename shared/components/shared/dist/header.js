'use client';
"use strict";
exports.__esModule = true;
exports.Header = void 0;
var utils_1 = require("@/shared/lib/utils");
var react_1 = require("react");
var container_1 = require("./container");
var image_1 = require("next/image");
var link_1 = require("next/link");
var search_input_1 = require("./search-input");
var cart_button_1 = require("./cart-button");
var navigation_1 = require("next/navigation");
var react_hot_toast_1 = require("react-hot-toast");
var profile_button_1 = require("./profile-button");
var modals_1 = require("./modals");
exports.Header = function (_a) {
    var _b = _a.hasSearch, hasSearch = _b === void 0 ? true : _b, _c = _a.hasCart, hasCart = _c === void 0 ? true : _c, className = _a.className;
    var router = navigation_1.useRouter();
    var _d = react_1["default"].useState(false), openAuthModal = _d[0], setOpenAuthModal = _d[1];
    var searchParams = navigation_1.useSearchParams();
    react_1["default"].useEffect(function () {
        var toastMessage = '';
        if (searchParams.has('paid')) {
            toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
        }
        if (searchParams.has('verified')) {
            toastMessage = 'Почта успешно подтверждена!';
        }
        if (toastMessage) {
            setTimeout(function () {
                router.replace('/');
                react_hot_toast_1["default"].success(toastMessage, {
                    duration: 3000
                });
            }, 1000);
        }
    }, []);
    return (react_1["default"].createElement("header", { className: utils_1.cn('border-b', className) },
        react_1["default"].createElement(container_1.Container, { className: "flex items-center justify-between py-8" },
            react_1["default"].createElement(link_1["default"], { href: "/" },
                react_1["default"].createElement("div", { className: "flex items-center gap-4" },
                    react_1["default"].createElement(image_1["default"], { src: "/logo.png", alt: "Logo", width: 35, height: 35 }),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h1", { className: "text-2xl uppercase font-black" }, "Pizza MEI"),
                        react_1["default"].createElement("p", { className: "text-sm text-gray-400 leading-3" }, "\u0417\u0430\u0447\u0435\u0442\u043D\u0430\u044F \u043F\u0438\u0446\u0446\u0430")))),
            hasSearch && (react_1["default"].createElement("div", { className: "mx-10 flex-1" },
                react_1["default"].createElement(search_input_1.SearchInput, null))),
            react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                react_1["default"].createElement(modals_1.AuthModal, { open: openAuthModal, onClose: function () { return setOpenAuthModal(false); } }),
                react_1["default"].createElement(profile_button_1.ProfileButton, { onClickSignIn: function () { return setOpenAuthModal(true); } }),
                hasCart && react_1["default"].createElement(cart_button_1.CartButton, null)))));
};
