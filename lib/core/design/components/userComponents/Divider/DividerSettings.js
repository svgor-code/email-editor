"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividerDefaultProps = exports.DividerSettings = void 0;
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const SettingsUtils_1 = require("../UtilComponents/SettingsUtils");
const GroupedButtons_1 = require("../UtilComponents/GroupedButtons");
const Accordion_1 = require("../UtilComponents/Accordion");
const Defaults_1 = require("../Defaults");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        margin: 2,
    },
}));
const DividerSettings = () => {
    const { actions: { setProp }, props, } = (0, core_1.useNode)((node) => ({
        props: node.data.props,
    }));
    const classes = useStyles();
    var height = props.style.height;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Size' }),
        react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Thickness", preview: react_1.default.createElement(core_2.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
                react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, height)), children: react_1.default.createElement(GroupedButtons_1.GroupedButtons, { mode: null, displayProp: height, handleChange: (newValue) => {
                    setProp((props) => {
                        props.style.height = newValue;
                    });
                } }) }),
        react_1.default.createElement(SettingsUtils_1.SizeAccordion, { props: props, setProp: setProp, type: 'Width' }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Spacing' }),
        react_1.default.createElement(SettingsUtils_1.AlignmentAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.MarginAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.PaddingAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Decoration' }),
        react_1.default.createElement(SettingsUtils_1.BackgroundAccordion, { props: props, setProp: setProp, isSelfBg: false, defaultImage: exports.DividerDefaultProps.parentStyle.backgroundImage }),
        react_1.default.createElement(SettingsUtils_1.ColorAccordion, { props: props, setProp: setProp, types: ['Divider'] })));
};
exports.DividerSettings = DividerSettings;
exports.DividerDefaultProps = {
    style: {
        width: '100%',
        height: 2,
        backgroundColor: '#808080',
    },
    parentStyle: Object.assign({ align: 'left', backgroundImage: '', backgroundColor: '#00000000', paddingTop: 5, paddingBottom: 5, paddingRight: 5, paddingLeft: 5 }, Defaults_1.MARGIN),
    options: {
        paddingOptions: 'more',
        borderOptions: 'less',
    },
};
//# sourceMappingURL=DividerSettings.js.map