"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlBox = void 0;
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const HtmlBoxSettings_1 = require("./HtmlBoxSettings");
const HtmlBox = (_a) => {
    var { props, parentStyle, style } = _a, rest = __rest(_a, ["props", "parentStyle", "style"]);
    const { id, connectors: { connect, drag }, } = (0, core_1.useNode)();
    (0, react_1.useEffect)(() => {
        document.getElementById(id).innerHTML = props.html;
    }, [props.html]);
    return (react_1.default.createElement(core_2.Grid, { item: true, xs: 12, ref: connect, style: parentStyle },
        react_1.default.createElement(core_2.Grid, { item: true, xs: 12, id: id })));
};
exports.HtmlBox = HtmlBox;
exports.HtmlBox.craft = {
    props: HtmlBoxSettings_1.HtmlBoxDefaultProps,
    related: {
        settings: HtmlBoxSettings_1.HtmlBoxSettings,
    },
    displayName: 'Html Box',
    rules: {
        canMoveIn: () => false,
    },
};
//# sourceMappingURL=HtmlBox.js.map