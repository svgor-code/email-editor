"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizerSettings = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const UtilComponents_1 = require("../UtilComponents");
const ContainerSettings_1 = require("./ContainerSettings");
const useStyles = (0, styles_1.makeStyles)(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        padding: 2
    },
    Accordion: {
        backgroundColor: "#e0e0e0"
    }
}));
const ResizerSettings = ({ id, isParent }) => {
    // console.log(id);
    const { actions: { setProp }, state, query: { node } } = (0, core_1.useEditor)((state, query) => {
        return {
            state: state
        };
    });
    const props = state &&
        state.nodes &&
        state.nodes[id] &&
        state.nodes[id].data &&
        state.nodes[id].data.props
        ? state.nodes[id].data.props
        : ContainerSettings_1.ContainerDefaultProps;
    const handleSetProp = val => {
        setProp(id, props => {
            val(props);
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isParent && react_1.default.createElement(UtilComponents_1.AccordionHeader, { title: "Spacing" }),
        react_1.default.createElement(UtilComponents_1.MarginAccordion, { props: props, setProp: handleSetProp }),
        react_1.default.createElement(UtilComponents_1.PaddingAccordion, { props: props, setProp: handleSetProp }),
        isParent && react_1.default.createElement(UtilComponents_1.AccordionHeader, { title: "Decoration" }),
        react_1.default.createElement(UtilComponents_1.BackgroundAccordion, { props: props, setProp: handleSetProp, isSelfBg: true, defaultImage: ContainerSettings_1.ContainerDefaultProps.style.backgroundImage }),
        react_1.default.createElement(UtilComponents_1.BorderAccordion, { styleProp: {}, props: props, setProp: handleSetProp })));
};
exports.ResizerSettings = ResizerSettings;
//# sourceMappingURL=ResizerSettings.js.map