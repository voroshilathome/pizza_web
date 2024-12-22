"use strict";
exports.__esModule = true;
exports.formRegisterSchema = exports.formLoginSchema = exports.passwordSchema = void 0;
var zod_1 = require("zod");
exports.passwordSchema = zod_1.z.string().min(4, { message: 'Введите корректный пароль' });
exports.formLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Введите корректную почту' }),
    password: exports.passwordSchema
});
exports.formRegisterSchema = exports.formLoginSchema
    .merge(zod_1.z.object({
    fullName: zod_1.z.string().min(2, { message: 'Введите имя и фамилию' }),
    confirmPassword: exports.passwordSchema
}))
    .refine(function (data) { return data.password === data.confirmPassword; }, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
});
