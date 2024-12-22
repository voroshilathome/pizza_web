"use strict";
exports.__esModule = true;
exports.usePizzaOptions = void 0;
var react_1 = require("react");
exports.usePizzaOptions = function (availableSizes) {
    var _a = react_1["default"].useState(20), size = _a[0], setSize = _a[1];
    var _b = react_1["default"].useState(1), type = _b[0], setType = _b[1];
    react_1["default"].useEffect(function () {
        var isAvailableSize = availableSizes === null || availableSizes === void 0 ? void 0 : availableSizes.find(function (item) { return Number(item.value) === size && !item.disabled; });
        var availableSize = availableSizes === null || availableSizes === void 0 ? void 0 : availableSizes.find(function (item) { return !item.disabled; });
        if (!isAvailableSize && availableSize) {
            setSize(Number(availableSize.value));
        }
    }, [type]);
    return {
        size: size,
        type: type,
        setSize: setSize,
        setType: setType
    };
};
