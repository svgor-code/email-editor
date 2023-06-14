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
exports.Image = void 0;
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const ImageSettings_1 = require("./ImageSettings");
const Image = (_a) => {
    var { props, style, parentStyle } = _a, rest = __rest(_a, ["props", "style", "parentStyle"]);
    const { connectors: { connect, drag }, id } = (0, core_1.useNode)();
    //bgimage/bgcolor
    var parentStyleCopy = Object.assign({}, parentStyle);
    parentStyleCopy.backgroundImage = "url(" + parentStyleCopy.backgroundImage + ")";
    return (react_1.default.createElement(core_2.Grid, { item: true, id: id, xs: 12, ref: connect, style: Object.assign({
            textAlign: parentStyleCopy.align
        }, parentStyleCopy) },
        react_1.default.createElement("a", { href: props.path, target: props.linkTarget, style: {
                pointerEvents: props.path === "#" ? "none" : "auto"
            } },
            react_1.default.createElement("img", { src: props.src, width: style.width, alt: props.altText, style: style }))));
};
exports.Image = Image;
exports.Image.craft = {
    props: ImageSettings_1.ImageDefaultProps,
    displayName: "Image",
    related: {
        settings: ImageSettings_1.ImageSettings
    }
};
//# sourceMappingURL=Image.js.map