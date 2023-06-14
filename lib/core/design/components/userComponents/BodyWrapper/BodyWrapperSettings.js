"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWrapperDefaultProps = exports.BodyWrapperSettings = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importDefault(require("react"));
const UtilComponents_1 = require("../UtilComponents");
function BodyWrapperSettings() {
    const { actions: { setProp }, props } = (0, core_1.useNode)(node => ({
        props: node.data.props
    }));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(UtilComponents_1.AccordionHeader, { title: "Decoration" }),
        react_1.default.createElement(UtilComponents_1.BackgroundAccordion, { props: props, setProp: setProp, isSelfBg: true, defaultImage: exports.BodyWrapperDefaultProps.style.backgroundImage })));
}
exports.BodyWrapperSettings = BodyWrapperSettings;
exports.BodyWrapperDefaultProps = {
    style: {
        backgroundColor: "#e0e0e0",
        backgroundImage: ""
    }
};
//# sourceMappingURL=BodyWrapperSettings.js.map