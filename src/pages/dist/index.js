"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var api_1 = require("@/utils/api");
var pagination_1 = require("@/components/pagination");
var skeleton_1 = require("@/components/skeleton");
var Home = function () {
    var _a = api_1.api.cards.getAll.useQuery(), data = _a.data, error = _a.error, refetch = _a.refetch, isLoading = _a.isLoading;
    var items = 12;
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "YuGiOh project"),
            React.createElement("meta", { name: "description", content: "YuGiOh Project" }),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement("div", { className: "flex h-20 items-center border-b border-gray-300 bg-gradient-to-b from-cyan-500 to-blue-500" },
            React.createElement("div", { className: "text-5xl text-white" }, "YuGiOh db.")),
        React.createElement("div", { className: "flex min-h-full min-w-full items-center justify-center bg-gradient-to-b from-blue-500 to-sky-950 p-4 " },
            isLoading && (React.createElement("div", { className: " grid grid-cols-4  gap-4 pb-5" }, Array.from({ length: items }).map(function (_, index) { return (React.createElement(skeleton_1["default"], { key: index })); }))),
            data && (React.createElement(pagination_1["default"], { itemsPerPage: items, cards: data, isLoading: isLoading })))));
};
exports["default"] = Home;
