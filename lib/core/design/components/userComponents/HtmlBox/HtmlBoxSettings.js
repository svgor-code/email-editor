"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlBoxDefaultProps = exports.HtmlBoxSettings = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const unescapeHtml_1 = require("../../../utils/unescapeHtml");
const SettingsUtils_1 = require("../UtilComponents/SettingsUtils");
const AceEditor_1 = __importDefault(require("../../../../components/AceEditor"));
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
let isHtmlPaste = true;
const HtmlBoxSettings = () => {
    const { actions: { setProp }, props, } = (0, core_1.useNode)((node) => ({
        props: node.data.props,
    }));
    const classes = useStyles();
    const [html, setHtml] = react_1.default.useState((0, unescapeHtml_1.unescapeHTML)(props.props.html));
    const handleHtmlChange = (value) => {
        if (isHtmlPaste) {
            isHtmlPaste = false;
            setHtml((0, unescapeHtml_1.unescapeHTML)(value));
        }
        else {
            setHtml(value);
        }
        setProp((props) => {
            props.props.html = value;
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Basic' }),
        react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "HTML", children: react_1.default.createElement(AceEditor_1.default, { height: "400px", mode: "html", defaultValue: "", onChange: handleHtmlChange, onPaste: () => {
                    isHtmlPaste = true;
                }, value: html, disableSyntaxCheck: true }) }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: 'Spacing' }),
        react_1.default.createElement(SettingsUtils_1.MarginAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.PaddingAccordion, { props: props, setProp: setProp })));
};
exports.HtmlBoxSettings = HtmlBoxSettings;
exports.HtmlBoxDefaultProps = {
    props: {
        html: '<h4>Hello, world!</h4>',
    },
    parentStyle: Object.assign(Object.assign({}, Defaults_1.PADDING), Defaults_1.MARGIN),
    options: {
        paddingOptions: 'less',
        marginOptions: 'less',
    },
};
//# sourceMappingURL=HtmlBoxSettings.js.map