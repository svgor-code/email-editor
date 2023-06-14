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
exports.Button = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importDefault(require("react"));
const ButtonSettings_1 = require("./ButtonSettings");
const core_2 = require("@material-ui/core");
//setting border to null if border-width is 0
function getBorderStyles(style) {
    var borderStyles = {
        borderTop: style.borderTop != null && style.borderTop[0] === "0" ? null : style.borderTop,
        borderBottom: style.borderBottom != null && style.borderBottom[0] === "0" ? null : style.borderBottom,
        borderLeft: style.borderLeft != null && style.borderLeft[0] === "0" ? null : style.borderLeft,
        borderRight: style.borderRight != null && style.borderRight[0] === "0" ? null : style.borderRight
    };
    return borderStyles;
}
const Button = (_a) => {
    var { props, parentStyle, style } = _a, rest = __rest(_a, ["props", "parentStyle", "style"]);
    const { connectors: { connect, drag }, id } = (0, core_1.useNode)();
    //bgimage/bgcolor
    var parentStyleCopy = Object.assign({}, parentStyle);
    if (parentStyleCopy.backgroundImage !== "") {
        parentStyleCopy.backgroundImage = "url(" + parentStyleCopy.backgroundImage + ")";
    }
    return (react_1.default.createElement(core_2.Grid, { item: true, id: id, xs: 12, ref: connect, style: Object.assign({
            textAlign: parentStyleCopy.align
        }, parentStyleCopy) },
        react_1.default.createElement(core_2.Button, { href: props.path, target: "_blank", size: style.size, variant: style.variant, style: Object.assign(Object.assign(Object.assign({}, style), getBorderStyles(style)), { display: "inline-block" }) }, props.text)));
};
exports.Button = Button;
exports.Button.craft = {
    props: ButtonSettings_1.ButtonDefaultProps,
    related: {
        settings: ButtonSettings_1.ButtonSettings
    },
    displayName: "Button",
    rules: {
        canMoveIn: () => false
    }
};
//# sourceMappingURL=Button.js.map