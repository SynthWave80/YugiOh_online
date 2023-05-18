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
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
var Card_1 = require("react-bootstrap/Card");
var tfi_1 = require("react-icons/tfi");
var Dropdown_1 = require("react-bootstrap/Dropdown");
var Button_1 = require("react-bootstrap/Button");
var Modal_1 = require("react-bootstrap/Modal");
var react_2 = require("react");
var vsc_1 = require("react-icons/vsc");
var md_1 = require("react-icons/md");
var vsc_2 = require("react-icons/vsc");
var si_1 = require("react-icons/si");
var gi_1 = require("react-icons/gi");
var bs_1 = require("react-icons/bs");
var bi_1 = require("react-icons/bi");
var hi_1 = require("react-icons/hi");
var api_1 = require("@/utils/api");
var react_bootstrap_1 = require("react-bootstrap");
var formik_1 = require("formik");
var Form_1 = require("react-bootstrap/Form");
var Cards = function (_a) {
    var _b, _c, _d, _e, _f;
    var item = _a.item;
    var _g = api_1.api.cards.getAll.useQuery(), data = _g.data, error = _g.error, refetch = _g.refetch;
    var deleteCard = api_1.api.cards.deleteCard.useMutation().mutateAsync;
    var updateCard = api_1.api.cards.updateCard.useMutation().mutateAsync;
    console.log(item.id);
    var _h = react_2.useState(false), showDelete = _h[0], setShowDelete = _h[1];
    var _j = react_2.useState(false), showPreview = _j[0], setShowPreview = _j[1];
    var _k = react_2.useState(false), showEdit = _k[0], setShowEdit = _k[1];
    var deleteHandleClose = function () { return setShowDelete(false); };
    var deleteHandleShow = function () { return setShowDelete(true); };
    var previewHandleClose = function () { return setShowPreview(false); };
    var previewHandleShow = function () { return setShowPreview(true); };
    var editHandleClose = function () { return setShowEdit(false); };
    var editHandleShow = function () { return setShowEdit(true); };
    var callDeteteCard = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteCard(id)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, refetch()];
                case 2:
                    _a.sent();
                    deleteHandleClose();
                    return [2 /*return*/, void 0];
            }
        });
    }); };
    return (react_1["default"].createElement(Card_1["default"], { className: "shadow-2xl", style: { width: "18rem" } },
        react_1["default"].createElement(Card_1["default"].Img, { variant: "top", src: "https://images.ygoprodeck.com/images/cards/" + item.id + ".jpg", alt: "Card Image" }),
        react_1["default"].createElement(Card_1["default"].Body, null,
            react_1["default"].createElement(Card_1["default"].Title, null, item.CardName),
            react_1["default"].createElement(Card_1["default"].Text, null, item.Description)),
        react_1["default"].createElement(Card_1["default"].Body, { className: "flex max-h-14 items-center justify-between border-t-2 border-gray-100\n      " },
            react_1["default"].createElement(tfi_1.TfiViewListAlt, { size: 30, className: "cursor-pointer", onClick: previewHandleShow }),
            react_1["default"].createElement(Dropdown_1["default"], null,
                react_1["default"].createElement(Dropdown_1["default"].Toggle, { variant: "none" }),
                react_1["default"].createElement(Dropdown_1["default"].Menu, null,
                    react_1["default"].createElement(Dropdown_1["default"].Item, { href: "#/action-1", onClick: editHandleShow }, "Edit"),
                    react_1["default"].createElement(Dropdown_1["default"].Item, { href: "#/action-2", onClick: deleteHandleShow },
                        react_1["default"].createElement("div", { className: "text-red-600" }, "Delete"))))),
        react_1["default"].createElement(Modal_1["default"], { show: showDelete, onHide: deleteHandleClose },
            react_1["default"].createElement(Modal_1["default"].Header, { closeButton: true },
                react_1["default"].createElement(Modal_1["default"].Title, null, "Alert")),
            react_1["default"].createElement(Modal_1["default"].Body, null, "Are you sure about deleting this powerful card ?!"),
            react_1["default"].createElement(Modal_1["default"].Footer, null,
                react_1["default"].createElement(Button_1["default"], { variant: "primary", onClick: deleteHandleClose }, "Cancel"),
                react_1["default"].createElement(Button_1["default"], { variant: "danger", onClick: function () { return callDeteteCard(item.id); } }, "Delete"))),
        react_1["default"].createElement(Modal_1["default"], { show: showPreview, onHide: previewHandleClose },
            react_1["default"].createElement(Modal_1["default"].Header, { closeButton: true },
                react_1["default"].createElement(Modal_1["default"].Title, null, item.CardName)),
            react_1["default"].createElement(Modal_1["default"].Body, { className: "flex-col " },
                react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center" },
                    react_1["default"].createElement("img", { src: "https://images.ygoprodeck.com/images/cards/" + item.id + ".jpg", alt: "Card Image", className: "flex items-center justify-center" }),
                    react_1["default"].createElement("h1", null, "Stats:")),
                react_1["default"].createElement("div", { className: "p-4" },
                    react_1["default"].createElement("div", { className: "flex items-center gap-4  " },
                        react_1["default"].createElement(vsc_1.VscTypeHierarchySub, { size: 30 }),
                        "Type: ", (_b = item.CardType) === null || _b === void 0 ? void 0 :
                        _b.replace("NULL", "None")),
                    react_1["default"].createElement("div", { className: "flex items-center gap-4 " },
                        react_1["default"].createElement(md_1.MdEditAttributes, { size: 30 }),
                        "Attributes: ", (_c = item.Attribute) === null || _c === void 0 ? void 0 :
                        _c.replace("NULL", "None")),
                    react_1["default"].createElement("div", { className: "flex items-center gap-4 " },
                        react_1["default"].createElement(vsc_2.VscSymbolProperty, { size: 30 }),
                        "Property: ", (_d = item.Property) === null || _d === void 0 ? void 0 :
                        _d.replace("NULL", "None")),
                    react_1["default"].createElement("div", { className: "flex items-center gap-4 " },
                        react_1["default"].createElement(vsc_1.VscTypeHierarchySub, { size: 30 }),
                        "Types: ", (_e = item.Types) === null || _e === void 0 ? void 0 :
                        _e.replace("NULL", "None")),
                    react_1["default"].createElement("div", { className: "flex items-center gap-4 " },
                        react_1["default"].createElement(si_1.SiLevelsdotfyi, { size: 30 }),
                        "Level: ",
                        item.Level),
                    react_1["default"].createElement("div", { className: "flex items-center gap-4 " },
                        react_1["default"].createElement(gi_1.GiDrippingSword, { size: 30 }),
                        "ATK: ",
                        item.ATK),
                    react_1["default"].createElement("div", { className: "flex items-center gap-4 " },
                        react_1["default"].createElement(bs_1.BsFillShieldFill, { size: 30 }),
                        "DEF: ",
                        item.DEF),
                    react_1["default"].createElement("div", { className: "flex items-center gap-4 " },
                        react_1["default"].createElement(bi_1.BiLink, { size: 30 }),
                        "Link: ",
                        item.Link),
                    react_1["default"].createElement("div", { className: "flex items-center gap-4 pb-3 " },
                        react_1["default"].createElement(hi_1.HiOutlineScale, { size: 30 }),
                        "PendulumScale: ",
                        item.PendulumScale),
                    react_1["default"].createElement("div", { className: "flex flex-col items-center border-t-2 pt-3 " },
                        react_1["default"].createElement("h2", null, "Description:"), (_f = item.Description) === null || _f === void 0 ? void 0 :
                        _f.replace("NULL", "None")))),
            react_1["default"].createElement(Modal_1["default"].Footer, null,
                react_1["default"].createElement(Button_1["default"], { variant: "secondary", onClick: previewHandleClose }, "Close"))),
        react_1["default"].createElement(Modal_1["default"], { show: showEdit, onHide: editHandleClose },
            react_1["default"].createElement(Modal_1["default"].Header, { closeButton: true },
                react_1["default"].createElement(Modal_1["default"].Title, null, "Editing ...")),
            react_1["default"].createElement(Modal_1["default"].Body, null,
                react_1["default"].createElement(react_bootstrap_1.Alert, { variant: "warning" },
                    "You are editing the card:",
                    item.CardName,
                    " with the id:",
                    item.id),
                react_1["default"].createElement(formik_1.Formik, { initialValues: {
                        id: item.id,
                        CardName: item.CardName,
                        CardType: item.CardType ? item.CardType : "",
                        Attribute: item.Attribute ? item.Attribute : "",
                        Property: item.Property ? item.Property : "",
                        Types: item.Types ? item.Types : "",
                        Level: item.Level ? item.Level : -1,
                        ATK: item.ATK ? item.ATK : -1,
                        DEF: item.DEF ? item.DEF : -1,
                        Link: item.Link ? item.Link : -1,
                        PendulumScale: item.PendulumScale ? item.PendulumScale : -1,
                        Description: item.Description ? item.Description : ""
                    }, onSubmit: function (values) { return __awaiter(void 0, void 0, void 0, function () {
                        var error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, updateCard(values)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, refetch()];
                                case 2:
                                    _a.sent();
                                    editHandleClose();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _a.sent();
                                    console.log(error_1);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); } }, function (_a) {
                    var errors = _a.errors, touched = _a.touched;
                    return (react_1["default"].createElement(Form_1["default"], null,
                        react_1["default"].createElement("div", { className: "flex items-center justify-center " },
                            react_1["default"].createElement("div", { className: "flex flex-col" },
                                react_1["default"].createElement("label", { htmlFor: "Card Name" }, "Card Name"),
                                react_1["default"].createElement("label", { htmlFor: "Card Type" }, "Card Type"),
                                react_1["default"].createElement("label", { htmlFor: "Attribute" }, "Attribute"),
                                react_1["default"].createElement("label", { htmlFor: "Property" }, "Property"),
                                react_1["default"].createElement("label", { htmlFor: "Types" }, "Types"),
                                react_1["default"].createElement("label", { htmlFor: "Level" }, "Level"),
                                react_1["default"].createElement("label", { htmlFor: "ATK" }, "ATK "),
                                react_1["default"].createElement("label", { htmlFor: "DEF" }, "DEF"),
                                react_1["default"].createElement("label", { htmlFor: "LINK" }, "LINK"),
                                react_1["default"].createElement("label", { htmlFor: "PendulumScale" }, "Pendulum Scale"),
                                react_1["default"].createElement("label", { htmlFor: "Description" }, "Description")),
                            react_1["default"].createElement("div", { className: "flex flex-col" },
                                react_1["default"].createElement(formik_1.Field, { id: "CardName", name: "CardName" }),
                                react_1["default"].createElement(formik_1.Field, { id: "CardType", name: "CardType" }),
                                react_1["default"].createElement(formik_1.Field, { id: "Attribute", name: "Attribute" }),
                                react_1["default"].createElement(formik_1.Field, { id: "Property", name: "Property" }),
                                react_1["default"].createElement(formik_1.Field, { id: "Types", name: "Types" }),
                                react_1["default"].createElement(formik_1.Field, { id: "Level", name: "Level" }),
                                react_1["default"].createElement(formik_1.Field, { id: "ATK", name: "ATK" }),
                                react_1["default"].createElement(formik_1.Field, { id: "DEF", name: "DEF" }),
                                react_1["default"].createElement(formik_1.Field, { id: "Link", name: "Link" }),
                                react_1["default"].createElement(formik_1.Field, { id: "PendulumScale", name: "PendulumScale" }),
                                react_1["default"].createElement(formik_1.Field, { id: "Description", name: "Description" }))),
                        react_1["default"].createElement("button", { type: "submit" }, "Submit")));
                })),
            react_1["default"].createElement(Modal_1["default"].Footer, null,
                react_1["default"].createElement(Button_1["default"], { variant: "secondary", onClick: editHandleClose }, "Close"),
                react_1["default"].createElement(Button_1["default"], { variant: "primary", onClick: editHandleClose }, "Save Changes")))));
};
exports["default"] = Cards;
