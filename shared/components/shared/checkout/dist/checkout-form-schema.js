"use strict";
exports.__esModule = true;
exports.checkoutFormSchema = void 0;
var zod_1 = require("zod");
exports.checkoutFormSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, { message: 'Имя должно содержать не менее 2-х символов' }),
    lastName: zod_1.z.string().min(2, { message: 'Фамилия должна содержать не менее 2-х символов' }),
    email: zod_1.z.string().email({ message: 'Введите корректную почту' }),
    phone: zod_1.z.string().min(10, { message: 'Введите корректный номер телефона' }),
    address: zod_1.z.string().min(5, { message: 'Введите корректный адрес' }),
    comment: zod_1.z.string().optional()
});
