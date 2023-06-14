"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDefaultProps = exports.TextSettings = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const SettingsUtils_1 = require("../UtilComponents/SettingsUtils");
const Defaults_1 = require("../Defaults");
const useStyles = (0, styles_1.makeStyles)(theme => ({
    root: {
        width: "100%"
    }
}));
const TextSettings = () => {
    const { actions: { setProp }, props } = (0, core_1.useNode)(node => ({
        props: node.data.props
    }));
    const classes = useStyles();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Spacing" }),
        react_1.default.createElement(SettingsUtils_1.MarginAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.PaddingAccordion, { props: props, setProp: setProp, styleProp: "style" }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Decoration" }),
        react_1.default.createElement(SettingsUtils_1.BackgroundAccordion, { props: props, setProp: setProp, isSelfBg: false, defaultImage: exports.TextDefaultProps.parentStyle.backgroundImage }),
        react_1.default.createElement(SettingsUtils_1.BorderAccordion, { props: props, setProp: setProp, styleProp: "style" })));
};
exports.TextSettings = TextSettings;
exports.TextDefaultProps = {
    props: {
        html: "This is a new Text block. Change the text.",
        contentState: "This is a new Text block. Change the text.",
        hideToolbar: false
    },
    style: Object.assign(Object.assign({ paddingTop: 5, paddingBottom: 5, paddingRight: 5, paddingLeft: 5, textAlign: "left" }, Defaults_1.BORDER), { height: "auto", fontFamily: "-apple-system,BlinkMacSystemFont,‘Segoe UI’,Roboto,Helvetica,Arial,sans-serif,‘Apple Color Emoji’,‘Segoe UI Emoji’,‘Segoe UI Symbol’" }),
    parentStyle: Object.assign(Object.assign({}, Defaults_1.MARGIN), { backgroundImage: "", backgroundColor: "#00000000" }),
    options: {
        paddingOptions: "less",
        borderOptions: "less"
    }
};
//# sourceMappingURL=TextSettings.js.map