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
var shared_1 = require("@/shared/components/shared");
var products_group_list_1 = require("@/shared/components/shared/products-group-list");
var react_1 = require("react");
var find_pizzas_1 = require("@/shared/lib/find-pizzas");
function Home(_a) {
    var searchParams = _a.searchParams;
    return __awaiter(this, void 0, void 0, function () {
        var params, categories;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, searchParams];
                case 1:
                    params = _b.sent();
                    return [4 /*yield*/, find_pizzas_1.findPizzas(params)];
                case 2:
                    categories = _b.sent();
                    return [2 /*return*/, (React.createElement(React.Fragment, null,
                            React.createElement(shared_1.Container, { className: "mt-10" },
                                React.createElement(shared_1.Title, { text: "\u0412\u0441\u0435 \u043F\u0438\u0446\u0446\u044B", size: "lg", className: "font-extrabold" })),
                            React.createElement(shared_1.TopBar, { categories: categories.filter(function (category) { return category.products.length > 0; }) }),
                            React.createElement(shared_1.Container, { className: "mt-10 pb-14" },
                                React.createElement("div", { className: "flex gap-[80px]" },
                                    React.createElement("div", { className: "w-[250px]" },
                                        React.createElement(react_1.Suspense, null,
                                            React.createElement(shared_1.Filters, null))),
                                    React.createElement("div", { className: "flex-1" },
                                        React.createElement("div", { className: "flex flex-col gap-16" }, categories.map(function (category) {
                                            return category.products.length > 0 && (React.createElement(products_group_list_1.ProductsGroupList, { key: category.id, title: category.name, categoryId: category.id, items: category.products }));
                                        })))))))];
            }
        });
    });
}
exports["default"] = Home;
