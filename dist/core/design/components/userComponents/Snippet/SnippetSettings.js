"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnippetDefaultProps = exports.SnippetSettings = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importStar(require("react"));
const styles_1 = require("@material-ui/core/styles");
const unescapeHtml_1 = require("../../../utils/unescapeHtml");
const SettingsUtils_1 = require("../UtilComponents/SettingsUtils");
const AceEditor_1 = __importDefault(require("../../../../components/AceEditor"));
const Accordion_1 = require("../UtilComponents/Accordion");
const Defaults_1 = require("../Defaults");
const core_2 = require("@material-ui/core");
const SnippetContext_1 = require("../../../../../context/SnippetContext");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        margin: 2,
    },
}));
let isHtmlPaste = true;
const SnippetSettings = () => {
    const { actions: { setProp }, props, } = (0, core_1.useNode)((node) => ({
        props: node.data.props,
    }));
    const [html, setHtml] = react_1.default.useState((0, unescapeHtml_1.unescapeHTML)(props.props.html));
    const { setOpenSnippetManager } = (0, react_1.useContext)(SnippetContext_1.SnippetContext);
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
        react_1.default.createElement(core_2.Box, { m: 1 },
            react_1.default.createElement(core_2.Button, { variant: "contained", color: "primary", onClick: () => setOpenSnippetManager(true) }, "Open Snippets List")),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Basic" }),
        react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "HTML", children: react_1.default.createElement(AceEditor_1.default, { height: "400px", mode: "html", defaultValue: "", onChange: handleHtmlChange, onPaste: () => {
                    isHtmlPaste = true;
                }, value: html, disableSyntaxCheck: true }) }),
        react_1.default.createElement(SettingsUtils_1.AccordionHeader, { title: "Spacing" }),
        react_1.default.createElement(SettingsUtils_1.MarginAccordion, { props: props, setProp: setProp }),
        react_1.default.createElement(SettingsUtils_1.PaddingAccordion, { props: props, setProp: setProp })));
};
exports.SnippetSettings = SnippetSettings;
exports.SnippetDefaultProps = {
    props: {
        html: "<h4>Hello, world!</h4>",
    },
    parentStyle: Object.assign(Object.assign({}, Defaults_1.PADDING), Defaults_1.MARGIN),
    options: {
        paddingOptions: "less",
        marginOptions: "less",
    },
};
//# sourceMappingURL=SnippetSettings.js.map