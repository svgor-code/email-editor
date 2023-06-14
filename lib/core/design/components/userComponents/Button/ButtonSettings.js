"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonDefaultProps = exports.ButtonSettings = void 0;
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const SettingsUtils_1 = require("../UtilComponents/SettingsUtils");
const Accordion_1 = require("../UtilComponents/Accordion");
const Defaults_1 = require("../Defaults");
const ButtonProperties_1 = require("../UtilComponents/ButtonProperties");
const useStyles = (0, styles_1.makeStyles)(theme => ({
    root: {
        width: "100%"
    }
}));
const ButtonSettings = () => {
    const { actions: { setProp }, props } = (0, core_1.useNode)(node => ({
        props: node.data.props
    }));
    const classes = useStyles();
    let fontSize = props.style.fontSize;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Basic" }),
        react_1.default.createElement(SettingsUtils_1.ActionAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(Accordion_1.CustomAccordion, { title: "Text", preview: react_1.default.createElement(core_2.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
                react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, props.props.text)), children: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(core_2.Box, { m: 1 },
                    react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, "Button Text"),
                    react_1.default.createElement(core_2.TextField, { variant: "outlined", value: props.props.text, onChange: e => {
                            e.persist();
                            setProp(prop => {
                                prop.props.text = e.target.value;
                            });
                        }, fullWidth: true, margin: "dense" }))) }),
        react_1.default.createElement(ButtonProperties_1.ButtonSizeAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(ButtonProperties_1.ButtonVariantAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Spacing" }),
        react_1.default.createElement(SettingsUtils_1.AlignmentAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.MarginAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.PaddingAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Decoration" }),
        react_1.default.createElement(SettingsUtils_1.BackgroundAccordion, { props: props, setProp: setProp, isSelfBg: false, defaultImage: exports.ButtonDefaultProps.parentStyle.backgroundImage }),
        react_1.default.createElement(SettingsUtils_1.BorderAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.ColorAccordion, { props: props, setProp: setProp, types: ["Text", "Button"] })));
};
exports.ButtonSettings = ButtonSettings;
exports.ButtonDefaultProps = {
    props: {
        text: "Click me",
        path: "#",
        linkTarget: "_self"
    },
    style: Object.assign(Object.assign({ 
        // width: "auto",
        // height: "auto",
        // fontSize: "1em",
        // backgroundColor: "",
        size: "medium", variant: "text", color: "#000000", fontFamily: "-apple-system,BlinkMacSystemFont,‘Segoe UI’,Roboto,Helvetica,Arial,sans-serif,‘Apple Color Emoji’,‘Segoe UI Emoji’,‘Segoe UI Symbol’" }, Defaults_1.BORDER), { borderRadius: 4 }),
    parentStyle: Object.assign({ align: "center", backgroundImage: "", backgroundColor: "#00000000", paddingTop: 5, paddingBottom: 5, paddingRight: 5, paddingLeft: 5 }, Defaults_1.MARGIN),
    options: {
        paddingOptions: "less",
        borderOptions: "less",
        marginOptions: "less"
    }
};
//# sourceMappingURL=ButtonSettings.js.map