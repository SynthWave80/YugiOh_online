"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_paginate_1 = require("react-paginate");
var cards_1 = require("./cards");
// Example items, to simulate fetching from another resources.
function Items(_a) {
    var currentItems = _a.currentItems, cards = _a.cards, isLoading = _a.isLoading;
    return (react_1["default"].createElement("div", { className: "grid grid-cols-4 gap-4 pb-5" }, currentItems === null || currentItems === void 0 ? void 0 : currentItems.map(function (item) { return (react_1["default"].createElement(cards_1["default"], { item: item })); })));
}
function PaginatedItems(_a) {
    var itemsPerPage = _a.itemsPerPage, cards = _a.cards, isLoading = _a.isLoading;
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    var _b = react_1.useState(0), itemOffset = _b[0], setItemOffset = _b[1];
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    var endOffset = itemOffset + itemsPerPage;
    console.log("Loading items from " + itemOffset + " to " + endOffset);
    var currentItems = cards === null || cards === void 0 ? void 0 : cards.slice(itemOffset, endOffset);
    var pageCount = Math.ceil((cards === null || cards === void 0 ? void 0 : cards.length) || 0 / itemsPerPage);
    // Invoke when user click to request another page.
    var handlePageClick = function (event) {
        var newOffset = (event.selected * itemsPerPage) % ((cards === null || cards === void 0 ? void 0 : cards.length) || 0);
        console.log("User requested page number " + event.selected + ", which is offset " + newOffset);
        setItemOffset(newOffset);
    };
    return (react_1["default"].createElement("div", { className: "flex min-w-full flex-col items-center justify-center" },
        react_1["default"].createElement(Items, { currentItems: currentItems, cards: cards, isLoading: isLoading }),
        react_1["default"].createElement(react_paginate_1["default"], { breakLabel: "...", nextLabel: "Next >", onPageChange: handlePageClick, pageRangeDisplayed: 5, pageCount: pageCount, previousLabel: "< Previous", renderOnZeroPageCount: null, activeClassName: "item active ", breakClassName: "item break-me ", containerClassName: "pagination", disabledClassName: "disabled-page", nextClassName: "item next ", pageClassName: "item pagination-page ", previousClassName: "item previous" })));
}
exports["default"] = PaginatedItems;
