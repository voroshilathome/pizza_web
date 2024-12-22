"use client";
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
exports.ProductForm = void 0;
var store_1 = require("@/shared/store");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var choose_pizza_form_1 = require("./choose-pizza-form");
var choose_product_form_1 = require("./choose-product-form");
exports.ProductForm = function (_a) {
    var product = _a.product, _onSubmit = _a.onSubmit;
    var addCartItem = store_1.useCartStore(function (state) { return state.addCartItem; });
    var loading = store_1.useCartStore(function (state) { return state.loading; });
    var firstItem = product.items[0];
    var isPizzaForm = Boolean(firstItem.pizzaType);
    var onSubmit = function (productItemId, ingredients) { return __awaiter(void 0, void 0, void 0, function () {
        var itemId, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    itemId = productItemId !== null && productItemId !== void 0 ? productItemId : firstItem.id;
                    return [4 /*yield*/, addCartItem({
                            productItemId: itemId,
                            ingredients: ingredients
                        })];
                case 1:
                    _a.sent();
                    react_hot_toast_1["default"].success(product.name + " добавлена в корзину");
                    _onSubmit === null || _onSubmit === void 0 ? void 0 : _onSubmit();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    react_hot_toast_1["default"].error("Не удалось добавить товар в корзину");
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (isPizzaForm) {
        return (react_1["default"].createElement(choose_pizza_form_1.ChoosePizzaForm, { imageUrl: product.imageUrl, name: product.name, ingredients: product.ingredients, items: product.items, onSubmit: onSubmit, loading: loading }));
    }
    return (react_1["default"].createElement(choose_product_form_1.ChooseProductForm, { imageUrl: product.imageUrl, name: product.name, onSubmit: onSubmit, price: firstItem.price, loading: loading }));
};
