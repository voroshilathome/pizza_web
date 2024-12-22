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
exports.authOptions = void 0;
var github_1 = require("next-auth/providers/github");
var credentials_1 = require("next-auth/providers/credentials");
var google_1 = require("next-auth/providers/google");
var prisma_client_1 = require("@/prisma/prisma-client");
var bcrypt_1 = require("bcrypt");
exports.authOptions = {
    providers: [
        google_1["default"]({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        github_1["default"]({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
            profile: function (profile) {
                return {
                    id: profile.id,
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    role: 'USER'
                };
            }
        }),
        credentials_1["default"]({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: function (credentials) {
                return __awaiter(this, void 0, void 0, function () {
                    var values, findUser, isPasswordValid;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!credentials) {
                                    return [2 /*return*/, null];
                                }
                                values = {
                                    email: credentials.email
                                };
                                return [4 /*yield*/, prisma_client_1.prisma.user.findFirst({
                                        where: values
                                    })];
                            case 1:
                                findUser = _a.sent();
                                if (!findUser) {
                                    return [2 /*return*/, null];
                                }
                                return [4 /*yield*/, bcrypt_1.compare(credentials.password, findUser.password)];
                            case 2:
                                isPasswordValid = _a.sent();
                                if (!isPasswordValid) {
                                    return [2 /*return*/, null];
                                }
                                if (!findUser.verified) {
                                    return [2 /*return*/, null];
                                }
                                return [2 /*return*/, {
                                        id: findUser.id,
                                        email: findUser.email,
                                        name: findUser.fullName,
                                        role: findUser.role
                                    }];
                        }
                    });
                });
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        signIn: function (_a) {
            var user = _a.user, account = _a.account;
            return __awaiter(this, void 0, void 0, function () {
                var findUser, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 5, , 6]);
                            if ((account === null || account === void 0 ? void 0 : account.provider) === 'credentials') {
                                return [2 /*return*/, true];
                            }
                            if (!user.email) {
                                return [2 /*return*/, false];
                            }
                            return [4 /*yield*/, prisma_client_1.prisma.user.findFirst({
                                    where: {
                                        OR: [
                                            { provider: account === null || account === void 0 ? void 0 : account.provider, providerId: account === null || account === void 0 ? void 0 : account.providerAccountId },
                                            { email: user.email },
                                        ]
                                    }
                                })];
                        case 1:
                            findUser = _b.sent();
                            if (!findUser) return [3 /*break*/, 3];
                            return [4 /*yield*/, prisma_client_1.prisma.user.update({
                                    where: {
                                        id: findUser.id
                                    },
                                    data: {
                                        provider: account === null || account === void 0 ? void 0 : account.provider,
                                        providerId: account === null || account === void 0 ? void 0 : account.providerAccountId
                                    }
                                })];
                        case 2:
                            _b.sent();
                            return [2 /*return*/, true];
                        case 3: return [4 /*yield*/, prisma_client_1.prisma.user.create({
                                data: {
                                    email: user.email,
                                    fullName: user.name || 'User #' + user.id,
                                    password: bcrypt_1.hashSync(user.id.toString(), 10),
                                    verified: new Date(),
                                    provider: account === null || account === void 0 ? void 0 : account.provider,
                                    providerId: account === null || account === void 0 ? void 0 : account.providerAccountId
                                }
                            })];
                        case 4:
                            _b.sent();
                            return [2 /*return*/, true];
                        case 5:
                            error_1 = _b.sent();
                            console.error('Error [SIGNIN]', error_1);
                            return [2 /*return*/, false];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        },
        jwt: function (_a) {
            var token = _a.token;
            return __awaiter(this, void 0, void 0, function () {
                var findUser;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!token.email) {
                                return [2 /*return*/, token];
                            }
                            return [4 /*yield*/, prisma_client_1.prisma.user.findFirst({
                                    where: {
                                        email: token.email
                                    }
                                })];
                        case 1:
                            findUser = _b.sent();
                            if (findUser) {
                                token.id = String(findUser.id);
                                token.email = findUser.email;
                                token.fullName = findUser.fullName;
                                token.role = findUser.role;
                            }
                            return [2 /*return*/, token];
                    }
                });
            });
        },
        session: function (_a) {
            var session = _a.session, token = _a.token;
            if (session === null || session === void 0 ? void 0 : session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        }
    }
};
