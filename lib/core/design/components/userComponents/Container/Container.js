"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importDefault(require("react"));
const Resizer_1 = require("./Resizer");
const ContainerSettings_1 = require("./ContainerSettings");
const core_2 = require("@material-ui/core");
const Container = ({ children, style, parentStyle, props }) => {
    const type = props.containerType;
    const w = 12 / type;
    const { connectors: { connect, drag }, } = (0, core_1.useNode)((node) => {
        return {};
    });
    return (react_1.default.createElement(Resizer_1.Resizer, { craftRef: connect, style: style, parentStyle: parentStyle, props: props }, type > 1 ? (react_1.default.createElement(react_1.default.Fragment, null, [...Array(type)].map((e, i) => {
        return (react_1.default.createElement(core_2.Grid, { item: true, key: i, xs: w },
            react_1.default.createElement(core_1.Element, { craftRef: connect, parentStyle: {}, props: {}, style: {}, id: `column${i}`, canvas: true, is: Resizer_1.Resizer, key: i, custom: {
                    displayName: 'Column ' + `${i + 1}`,
                } },
                react_1.default.createElement(react_1.default.Fragment, null))));
    }))) : (react_1.default.createElement(react_1.default.Fragment, null, children))));
};
exports.Container = Container;
exports.Container.craft = {
    props: ContainerSettings_1.ContainerDefaultProps,
    displayName: 'Columns',
    related: {
        settings: ContainerSettings_1.ContainerSettings,
    },
    rules: {
        canMoveIn: (node, self) => {
            if (node.data.displayName === 'Columns' &&
                self.data.custom.displayName !== 'Main') {
                return false;
            }
            else
                return true;
        },
    },
};
//# sourceMappingURL=Container.js.map