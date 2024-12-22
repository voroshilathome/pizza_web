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
exports.__esModule = true;
exports.useQueryFilters = void 0;
var react_1 = require("react");
var qs_1 = require("qs");
var navigation_1 = require("next/navigation");
exports.useQueryFilters = function (filters) {
    var isMounted = react_1["default"].useRef(false);
    var router = navigation_1.useRouter();
    react_1["default"].useEffect(function () {
        if (isMounted.current) {
            var params = __assign(__assign({}, filters.prices), { pizzaTypes: Array.from(filters.pizzaTypes), sizes: Array.from(filters.sizes), ingredients: Array.from(filters.selectedIngredients) });
            var query = qs_1["default"].stringify(params, {
                arrayFormat: 'comma'
            });
            router.push("?" + query, {
                scroll: false
            });
            console.log(filters, 999);
        }
        isMounted.current = true;
    }, [filters]);
};
