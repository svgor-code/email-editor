"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoDefaultProps = exports.VideoSettings = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const SettingsUtils_1 = require("../UtilComponents/SettingsUtils");
const Defaults_1 = require("../Defaults");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        padding: 2,
    },
}));
const VideoSettings = () => {
    const { actions: { setProp }, props, } = (0, core_1.useNode)((node) => ({
        props: node.data.props,
    }));
    const classes = useStyles();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Basic' }),
        react_1.default.createElement(SettingsUtils_1.MediaAccordion, { props: props, setProp: setProp, src: exports.VideoDefaultProps.src, type: 'video' }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Size' }),
        react_1.default.createElement(SettingsUtils_1.SizeAccordion, { props: props, setProp: setProp, type: 'Width' }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Spacing' }),
        react_1.default.createElement(SettingsUtils_1.AlignmentAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.MarginAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.PaddingAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Decoration' }),
        react_1.default.createElement(SettingsUtils_1.BackgroundAccordion, { props: props, setProp: setProp, isSelfBg: false, defaultImage: exports.VideoDefaultProps.parentStyle.backgroundImage }),
        react_1.default.createElement(SettingsUtils_1.BorderAccordion, { styleProp: {}, props: props, setProp: setProp })));
};
exports.VideoSettings = VideoSettings;
exports.VideoDefaultProps = {
    props: {
        linkPath: '#',
        linkTarget: '_blank',
        src: '',
        altText: 'Not found',
    },
    style: Object.assign({ width: '100%' }, Defaults_1.BORDER),
    parentStyle: Object.assign(Object.assign({ align: 'center', backgroundImage: '', backgroundColor: '#00000000' }, Defaults_1.PADDING), Defaults_1.MARGIN),
    options: {
        borderOptions: 'less',
        paddingOptions: 'less',
        marginOptions: 'less',
    },
    src: '',
};
//# sourceMappingURL=VideoSettings.js.map