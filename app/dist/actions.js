'use server';
"use strict";
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
exports.registerUser = exports.updateUserInfo = exports.createOrder = void 0;
var prisma_client_1 = require("@/prisma/prisma-client");
var components_1 = require("@/shared/components");
var verification_user_1 = require("@/shared/components/shared/email-templates/verification-user");
var lib_1 = require("@/shared/lib");
var get_user_session_1 = require("@/shared/lib/get-user-session");
var client_1 = require("@prisma/client");
var bcrypt_1 = require("bcrypt");
var headers_1 = require("next/headers");
function createOrder(data) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cookieStore, cartToken, userCart, order, paymentData, paymentUrl, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 9, , 10]);
                    return [4 /*yield*/, headers_1.cookies()];
                case 1:
                    cookieStore = _b.sent();
                    cartToken = (_a = cookieStore.get('cartToken')) === null || _a === void 0 ? void 0 : _a.value;
                    if (!cartToken) {
                        throw new Error('Cart token not found');
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.cart.findFirst({
                            include: {
                                user: true,
                                items: {
                                    include: {
                                        ingredients: true,
                                        productItem: {
                                            include: {
                                                product: true
                                            }
                                        }
                                    }
                                }
                            },
                            where: {
                                token: cartToken
                            }
                        })];
                case 2:
                    userCart = _b.sent();
                    /* Если корзина не найдена возращаем ошибку */
                    if (!userCart) {
                        throw new Error('Cart not found');
                    }
                    /* Если корзина пустая возращаем ошибку */
                    if ((userCart === null || userCart === void 0 ? void 0 : userCart.totalAmount) === 0) {
                        throw new Error('Cart is empty');
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.order.create({
                            data: {
                                token: cartToken,
                                fullName: data.firstName + ' ' + data.lastName,
                                email: data.email,
                                phone: data.phone,
                                address: data.address,
                                comment: data.comment,
                                totalAmount: userCart.totalAmount,
                                status: client_1.OrderStatus.PENDING,
                                items: JSON.stringify(userCart.items)
                            }
                        })];
                case 3:
                    order = _b.sent();
                    /* Очищаем корзину */
                    return [4 /*yield*/, prisma_client_1.prisma.cart.update({
                            where: {
                                id: userCart.id
                            },
                            data: {
                                totalAmount: 0
                            }
                        })];
                case 4:
                    /* Очищаем корзину */
                    _b.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.cartItem.deleteMany({
                            where: {
                                cartId: userCart.id
                            }
                        })];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, lib_1.createPayment({
                            amount: order.totalAmount,
                            orderId: order.id,
                            description: 'Оплата заказа #' + order.id
                        })];
                case 6:
                    paymentData = _b.sent();
                    if (!paymentData) {
                        throw new Error('Payment data not found');
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.order.update({
                            where: {
                                id: order.id
                            },
                            data: {
                                paymentId: paymentData.id
                            }
                        })];
                case 7:
                    _b.sent();
                    paymentUrl = paymentData.confirmation.confirmation_url;
                    return [4 /*yield*/, lib_1.sendEmail(data.email, 'Pizza MEI / Оплатите заказ #' + order.id, components_1.PayOrderTemplate({
                            orderId: order.id,
                            totalAmount: order.totalAmount,
                            paymentUrl: paymentUrl
                        }))];
                case 8:
                    _b.sent();
                    return [2 /*return*/, paymentUrl];
                case 9:
                    err_1 = _b.sent();
                    console.log('[CreateOrder] Server error', err_1);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.createOrder = createOrder;
function updateUserInfo(body) {
    return __awaiter(this, void 0, void 0, function () {
        var currentUser, findUser, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, get_user_session_1.getUserSession()];
                case 1:
                    currentUser = _a.sent();
                    if (!currentUser) {
                        throw new Error('Пользователь не найден');
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.user.findFirst({
                            where: {
                                id: Number(currentUser.id)
                            }
                        })];
                case 2:
                    findUser = _a.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.user.update({
                            where: {
                                id: Number(currentUser.id)
                            },
                            data: {
                                fullName: body.fullName,
                                email: body.email,
                                password: body.password ? bcrypt_1.hashSync(body.password, 10) : findUser === null || findUser === void 0 ? void 0 : findUser.password
                            }
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    console.log('Error [UPDATE_USER]', err_2);
                    throw err_2;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.updateUserInfo = updateUserInfo;
function registerUser(body) {
    return __awaiter(this, void 0, void 0, function () {
        var user, createdUser, code, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, prisma_client_1.prisma.user.findFirst({
                            where: {
                                email: body.email
                            }
                        })];
                case 1:
                    user = _a.sent();
                    if (user) {
                        if (!user.verified) {
                            throw new Error('Почта не подтверждена');
                        }
                        throw new Error('Пользователь уже существует');
                    }
                    return [4 /*yield*/, prisma_client_1.prisma.user.create({
                            data: {
                                fullName: body.fullName,
                                email: body.email,
                                password: bcrypt_1.hashSync(body.password, 10)
                            }
                        })];
                case 2:
                    createdUser = _a.sent();
                    code = Math.floor(100000 + Math.random() * 900000).toString();
                    return [4 /*yield*/, prisma_client_1.prisma.verificationCode.create({
                            data: {
                                code: code,
                                userId: createdUser.id
                            }
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, lib_1.sendEmail(createdUser.email, 'Pizza MEI / 📝 Подтверждение регистрации', verification_user_1.VerificationUserTemplate({
                            code: code
                        }))];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_3 = _a.sent();
                    console.log('Error [CREATE_USER]', err_3);
                    throw err_3;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.registerUser = registerUser;
