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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProfileForm = void 0;
var zod_1 = require("@hookform/resolvers/zod");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var schemas_1 = require("./modals/auth-modal/forms/schemas");
var react_hot_toast_1 = require("react-hot-toast");
var react_2 = require("next-auth/react");
var container_1 = require("./container");
var title_1 = require("./title");
var form_1 = require("./form");
var ui_1 = require("../ui");
var actions_1 = require("@/app/actions");
exports.ProfileForm = function (_a) {
    var data = _a.data;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schemas_1.formRegisterSchema),
        defaultValues: {
            fullName: data.fullName,
            email: data.email,
            password: '',
            confirmPassword: ''
        }
    });
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, actions_1.updateUserInfo({
                            email: data.email,
                            fullName: data.fullName,
                            password: data.password
                        })];
                case 1:
                    _a.sent();
                    react_hot_toast_1["default"].error('Данные обновлены 📝', {
                        icon: '✅'
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, react_hot_toast_1["default"].error('Ошибка при обновлении данных', {
                            icon: '❌'
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onClickSignOut = function () {
        react_2.signOut({
            callbackUrl: '/'
        });
    };
    return (react_1["default"].createElement(container_1.Container, { className: "my-10" },
        react_1["default"].createElement(title_1.Title, { text: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 | #" + data.id, size: "md", className: "font-bold" }),
        react_1["default"].createElement(react_hook_form_1.FormProvider, __assign({}, form),
            react_1["default"].createElement("form", { className: "flex flex-col gap-5 w-96 mt-10", onSubmit: form.handleSubmit(onSubmit) },
                react_1["default"].createElement(form_1.FormInput, { name: "email", label: "E-Mail", required: true }),
                react_1["default"].createElement(form_1.FormInput, { name: "fullName", label: "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F", required: true }),
                react_1["default"].createElement(form_1.FormInput, { type: "password", name: "password", label: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C", required: true }),
                react_1["default"].createElement(form_1.FormInput, { type: "password", name: "confirmPassword", label: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", required: true }),
                react_1["default"].createElement(ui_1.Button, { disabled: form.formState.isSubmitting, className: "text-base mt-10", type: "submit" }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
                react_1["default"].createElement(ui_1.Button, { onClick: onClickSignOut, variant: "secondary", disabled: form.formState.isSubmitting, className: "text-base", type: "button" }, "\u0412\u044B\u0439\u0442\u0438")))));
};
