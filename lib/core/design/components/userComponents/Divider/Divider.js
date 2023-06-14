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
exports.CustomDivider = void 0;
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const DividerSettings_1 = require("./DividerSettings");
function CustomDivider(_a) {
    var { style, parentStyle } = _a, rest = __rest(_a, ["style", "parentStyle"]);
    const { connectors: { connect, drag }, id } = (0, core_1.useNode)();
    //bgimage/bgcolor
    var parentStyleCopy = Object.assign({}, parentStyle);
    if (parentStyleCopy.backgroundImage !== "") {
        parentStyleCopy.backgroundImage = "url(" + parentStyleCopy.backgroundImage + ")";
    }
    const align = {
        right: "flex-end",
        left: "flex-start",
        justify: "flex-start",
        center: "center"
    };
    return (react_1.default.createElement(core_2.Grid, { id: id, item: true, xs: 12, ref: connect, style: parentStyleCopy },
        react_1.default.createElement(core_2.Box, { display: "flex", width: "100%", justifyContent: align[parentStyleCopy.align] },
            react_1.default.createElement(core_2.Divider, { style: style }))));
}
exports.CustomDivider = CustomDivider;
CustomDivider.craft = {
    props: DividerSettings_1.DividerDefaultProps,
    displayName: "Divider",
    related: {
        settings: DividerSettings_1.DividerSettings
    },
    rules: {
        canMoveIn: () => false
    }
};
//# sourceMappingURL=Divider.js.map