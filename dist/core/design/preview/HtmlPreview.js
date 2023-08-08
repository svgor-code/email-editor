"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPreview = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    appBar: {
        position: 'fixed',
        backgroundColor: 'white',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    formLabel: {
        color: 'black',
    },
    toggleContainer: {
        margin: theme.spacing(0, 0),
    },
    topbar: {
        backgroundColor: theme.palette.background.default,
    },
    dot: {
        height: '13px',
        width: '13px',
        borderRadius: `50%`,
        display: 'inline-block',
        marginRight: 3,
    },
}));
function Laptop({ children }) {
    const classes = useStyles();
    const theme = (0, core_1.useTheme)();
    return (react_1.default.createElement(core_1.Box, { display: "flex", flexDirection: "column", style: {
            borderRadius: '4px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: theme.palette.text.secondary + '88',
        }, alignContent: "stretch", width: "98%", height: "70vh" },
        react_1.default.createElement(core_1.Box, { display: "flex", style: {
                backgroundColor: theme.palette.background.default,
                borderRadius: '4px',
            }, alignItems: "center", height: "5%", p: 1 },
            react_1.default.createElement("span", { className: classes.dot, style: { backgroundColor: '#E35353' } }),
            react_1.default.createElement("span", { className: classes.dot, style: { backgroundColor: '#FFD725' } }),
            react_1.default.createElement("span", { className: classes.dot, style: { backgroundColor: '#37A80B' } })),
        react_1.default.createElement(core_1.Box, { height: "95%", style: {
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
                backgroundColor: '#fff',
            } }, children)));
}
function HtmlPreview(_a) {
    var { className, html, format } = _a, rest = __rest(_a, ["className", "html", "format"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        format !== 'browser' && (react_1.default.createElement(react_1.default.Fragment, null,
            format === 'mobile' && (react_1.default.createElement("div", { className: "marvel-device iphone-x" },
                react_1.default.createElement("div", { className: "notch" },
                    react_1.default.createElement("div", { className: "camera" }),
                    react_1.default.createElement("div", { className: "speaker" })),
                react_1.default.createElement("div", { className: "top-bar" }),
                react_1.default.createElement("div", { className: "sleep" }),
                react_1.default.createElement("div", { className: "bottom-bar" }),
                react_1.default.createElement("div", { className: "volume" }),
                react_1.default.createElement("div", { className: "overflow" },
                    react_1.default.createElement("div", { className: "shadow shadow--tr" }),
                    react_1.default.createElement("div", { className: "shadow shadow--tl" }),
                    react_1.default.createElement("div", { className: "shadow shadow--br" }),
                    react_1.default.createElement("div", { className: "shadow shadow--bl" })),
                react_1.default.createElement("div", { className: "inner-shadow" }),
                react_1.default.createElement("div", { className: "screen" },
                    react_1.default.createElement("iframe", { frameBorder: 0, srcDoc: html, width: "100%", height: "100%", style: { marginTop: 20 } })))),
            format === 'laptop' && (react_1.default.createElement(Laptop, null,
                react_1.default.createElement("iframe", { frameBorder: 0, srcDoc: html, width: "100%", height: "100%" }))))),
        format === 'browser' && (react_1.default.createElement("iframe", { frameBorder: 0, srcDoc: html, width: "100%", height: "100%" }))));
}
exports.HtmlPreview = HtmlPreview;
//# sourceMappingURL=HtmlPreview.js.map