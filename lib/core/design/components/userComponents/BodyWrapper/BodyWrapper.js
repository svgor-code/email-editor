"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWrapper = void 0;
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const BodyWrapperSettings_1 = require("./BodyWrapperSettings");
function BodyWrapper({ style, id, children }) {
    const { connectors: { connect } } = (0, core_1.useNode)();
    return (react_1.default.createElement(core_2.Grid, { container: true, id: id, ref: connect, alignContent: "stretch", justifyContent: "center" }, children));
}
exports.BodyWrapper = BodyWrapper;
BodyWrapper.craft = {
    props: BodyWrapperSettings_1.BodyWrapperDefaultProps,
    related: {
        settings: BodyWrapperSettings_1.BodyWrapperSettings
    },
    displayName: "Body",
    rules: {
        canMoveIn: () => false,
        canMoveOut: () => false,
        canDrag: () => false,
        canDrop: () => false
    }
};
//# sourceMappingURL=BodyWrapper.js.map