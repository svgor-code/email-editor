"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDefaultProps = exports.ImageSettings = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const SettingsUtils_1 = require("../UtilComponents/SettingsUtils");
const Defaults_1 = require("../Defaults");
const useStyles = (0, styles_1.makeStyles)(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        padding: 2
    }
}));
const ImageSettings = () => {
    const { actions: { setProp }, props } = (0, core_1.useNode)(node => ({
        props: node.data.props
    }));
    const classes = useStyles();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Basic" }),
        react_1.default.createElement(SettingsUtils_1.MediaAccordion, { props: props, setProp: setProp, src: exports.ImageDefaultProps.props.src, type: "image", isImage: true }),
        react_1.default.createElement(SettingsUtils_1.ActionAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Size" }),
        react_1.default.createElement(SettingsUtils_1.SizeAccordion, { props: props, setProp: setProp, type: "Width" }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Spacing" }),
        react_1.default.createElement(SettingsUtils_1.AlignmentAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.PaddingAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.MarginAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Decoration" }),
        react_1.default.createElement(SettingsUtils_1.BackgroundAccordion, { props: props, setProp: setProp, isSelfBg: false, defaultImage: exports.ImageDefaultProps.parentStyle.backgroundImage }),
        react_1.default.createElement(SettingsUtils_1.BorderAccordion, { props: props, setProp: setProp })));
};
exports.ImageSettings = ImageSettings;
exports.ImageDefaultProps = {
    props: {
        path: "#",
        linkTarget: "_self",
        src: "https://raven-images.s3.ap-south-1.amazonaws.com/images/placeholder_image.jpg",
        altText: "Not found"
    },
    style: Object.assign({ width: "100%" }, Defaults_1.BORDER),
    parentStyle: Object.assign(Object.assign({ align: "center", backgroundImage: "", backgroundColor: "#00000000" }, Defaults_1.PADDING), Defaults_1.MARGIN),
    options: {
        paddingOptions: "less",
        borderOptions: "less"
    }
};
//# sourceMappingURL=ImageSettings.js.map