"use strict";
exports.__esModule = true;
var google_1 = require("next/font/google");
require("./globals.css");
var nunito = google_1.Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"]
});
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("link", { "data-rh": "true", rel: "icon", href: "/logo.png" })),
        React.createElement("body", { className: nunito.className }, children)));
}
exports["default"] = RootLayout;
