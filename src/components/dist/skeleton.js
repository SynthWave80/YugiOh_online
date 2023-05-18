"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
var Card_1 = require("react-bootstrap/Card");
var react_bootstrap_1 = require("react-bootstrap");
var Skeleton = function () {
    return (react_1["default"].createElement("div", { className: "d-flex justify-content-around" },
        react_1["default"].createElement(Card_1["default"], { style: { width: "18rem" } },
            react_1["default"].createElement(react_bootstrap_1.Spinner, { className: "mx-auto p-4" }),
            react_1["default"].createElement(Card_1["default"].Body, null,
                react_1["default"].createElement(react_bootstrap_1.Placeholder, { as: Card_1["default"].Title, animation: "glow" },
                    react_1["default"].createElement(react_bootstrap_1.Placeholder, { xs: 6 })),
                react_1["default"].createElement(react_bootstrap_1.Placeholder, { as: Card_1["default"].Text, animation: "glow" },
                    react_1["default"].createElement(react_bootstrap_1.Placeholder, { xs: 7 }),
                    " ",
                    react_1["default"].createElement(react_bootstrap_1.Placeholder, { xs: 4 }),
                    " ",
                    react_1["default"].createElement(react_bootstrap_1.Placeholder, { xs: 4 }),
                    " ",
                    react_1["default"].createElement(react_bootstrap_1.Placeholder, { xs: 6 }),
                    " ",
                    react_1["default"].createElement(react_bootstrap_1.Placeholder, { xs: 8 })),
                react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                    react_1["default"].createElement(react_bootstrap_1.Placeholder.Button, { variant: "primary", xs: 3 }),
                    react_1["default"].createElement(react_bootstrap_1.Placeholder.Button, { variant: "primary", xs: 3 }))))));
};
exports["default"] = Skeleton;
