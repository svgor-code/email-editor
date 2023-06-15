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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailEditor = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@craftjs/core");
const layoutComponents_1 = require("./components/layoutComponents");
const userComponents_1 = require("./components/userComponents");
const RenderNode_1 = require("./utils/RenderNode");
const core_2 = require("@material-ui/core");
const Design_1 = __importDefault(require("./components/layoutComponents/Design"));
const core_3 = require("@material-ui/core");
require("react-app-polyfill/ie11");
require("react-app-polyfill/stable");
// import 'react-quill/dist/quill.snow.css';
require("react-perfect-scrollbar/dist/css/styles.css");
require("../../assets/css/devices.min.css");
require("braft-editor/dist/index.css");
// import 'braft-extensions/dist/color-picker.css';
const theme_1 = require("../../theme");
const SettingsContext_1 = __importDefault(require("../../context/SettingsContext"));
const encryptJson_1 = require("./utils/encryptJson");
const useStyles = (0, core_3.makeStyles)(() => ({
    root: {},
    wrapper: {
        borderBottom: '1px solid #0000001f',
    },
}));
function EmailEditor(_a) {
    var { loadState, loadVersion, triggerFetchState, getState, onPreviewOpen, onHtmlOpen } = _a, rest = __rest(_a, ["loadState", "loadVersion", "triggerFetchState", "getState", "onPreviewOpen", "onHtmlOpen"]);
    const classes = useStyles();
    const { settings } = (0, react_1.useContext)(SettingsContext_1.default);
    return (react_1.default.createElement(core_3.ThemeProvider, { theme: (0, theme_1.createTheme)(settings) },
        react_1.default.createElement(core_3.StylesProvider, null,
            react_1.default.createElement(core_2.Grid, { container: true, justifyContent: "center", alignContent: "center" },
                react_1.default.createElement(core_2.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(core_1.Editor, { resolver: {
                            Button: userComponents_1.Button,
                            Container: userComponents_1.Container,
                            Text: userComponents_1.Text,
                            Image: userComponents_1.Image,
                            Video: userComponents_1.Video,
                            HtmlBox: userComponents_1.HtmlBox,
                            CustomDivider: userComponents_1.CustomDivider,
                            Resizer: userComponents_1.Resizer,
                            BodyWrapper: userComponents_1.BodyWrapper,
                        }, onRender: RenderNode_1.RenderNode },
                        react_1.default.createElement(core_2.Box, { className: classes.wrapper, display: "flex", justifyContent: "space-between", alignContent: "stretch", position: "relative", width: "100%", height: "100%" },
                            react_1.default.createElement(Design_1.default, { onHtmlOpen: () => null, editorState: loadState }),
                            react_1.default.createElement(layoutComponents_1.RightPanel, null),
                            react_1.default.createElement(layoutComponents_1.Footer, { onPreviewOpen: onPreviewOpen, onHtmlOpen: onHtmlOpen })),
                        react_1.default.createElement(EditorSaveModule, { triggerFetchState: triggerFetchState, getState: getState, version: loadVersion })))))));
}
exports.EmailEditor = EmailEditor;
function EditorSaveModule({ triggerFetchState, getState, version }) {
    const { query } = (0, core_1.useEditor)();
    const fetchState = () => __awaiter(this, void 0, void 0, function* () {
        const json = query.serialize();
        var state = (0, encryptJson_1.encodeJson)(JSON.stringify({ json: json, version: version }));
        var html = null;
        try {
            const craftNodes = JSON.parse(json);
            // html = await renderHtml(craftNodes);
        }
        catch (err) {
            console.log(err);
        }
        getState({
            html: html,
            state: state,
        });
    });
    if (triggerFetchState) {
        fetchState();
    }
    return null;
}
exports.default = EmailEditor;
//# sourceMappingURL=EmailEditor.js.map