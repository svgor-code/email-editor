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
exports.AppContext = exports.AppContextProvider = exports.EmailEditorComponent = void 0;
const react_1 = __importStar(require("react"));
const SettingsContext_1 = require("./context/SettingsContext");
const encryptJson_1 = require("./core/design/utils/encryptJson");
const ViewHtmlDialog_1 = __importDefault(require("./core/design/preview/ViewHtmlDialog"));
const ViewPreviewDialog_1 = __importDefault(require("./core/design/preview/ViewPreviewDialog"));
const EmailEditor_1 = require("./core/design/EmailEditor");
const settings_1 = require("./utils/settings");
const AppContext_1 = __importDefault(require("./context/AppContext"));
const settings = (0, settings_1.restoreSettings)();
const EmailEditorComponent = ({ editorSsrUrl }) => {
    const [mode, setMode] = (0, react_1.useState)("");
    const { editorState, triggerFetchState, setEditorState, setTriggerFetchState, setRenderEditorState, } = (0, react_1.useContext)(AppContext_1.default);
    const [htmlState, setHtmlState] = (0, react_1.useState)(null);
    const [previewState, setPreviewState] = (0, react_1.useState)(null);
    const parseState = (0, react_1.useCallback)((stateArg) => {
        let stateJson = null;
        let stateVersion = "";
        try {
            if (stateArg) {
                const stateVal = (0, encryptJson_1.decodeJson)(stateArg);
                if (stateVal) {
                    let tmp = JSON.parse(stateVal);
                    stateJson = tmp["json"];
                    stateVersion = tmp["version"];
                }
            }
        }
        catch (err) {
            const error = new Error(`Invalid Editor State.\n${err.message}`);
            error.stack = err.stack;
            return null;
        }
        setEditorState({ json: stateJson, version: stateVersion });
    }, []);
    const getState = (0, react_1.useCallback)((obj) => {
        if (mode === "preview") {
            setPreviewState(obj.html);
        }
        else if (mode === "html") {
            setHtmlState(obj.html);
        }
        setTriggerFetchState(false);
        parseState(obj.state);
    }, [mode]);
    const handlePreviewOpen = (0, react_1.useCallback)(() => {
        setMode("preview");
        setTriggerFetchState(true);
        setRenderEditorState(true);
    }, []);
    const handleHtmlOpen = (0, react_1.useCallback)(() => {
        setMode("html");
        setTriggerFetchState(true);
        setRenderEditorState(true);
    }, []);
    const onClose = () => {
        setMode("");
    };
    return (react_1.default.createElement(SettingsContext_1.SettingsProvider, { settings: settings },
        react_1.default.createElement(EmailEditor_1.EmailEditor, { loadState: editorState ? editorState["json"] : "", loadVersion: editorState ? editorState["version"] : "", triggerFetchState: triggerFetchState, getState: getState, onPreviewOpen: handlePreviewOpen, onHtmlOpen: handleHtmlOpen, editorSsrUrl: editorSsrUrl }),
        mode === "preview" && (react_1.default.createElement(ViewPreviewDialog_1.default, { previewDoc: previewState, onClose: onClose, title: "Preview" })),
        mode === "html" && react_1.default.createElement(ViewHtmlDialog_1.default, { html: htmlState, onClose: onClose })));
};
exports.EmailEditorComponent = EmailEditorComponent;
var AppContext_2 = require("./context/AppContext");
Object.defineProperty(exports, "AppContextProvider", { enumerable: true, get: function () { return AppContext_2.AppContextProvider; } });
Object.defineProperty(exports, "AppContext", { enumerable: true, get: function () { return AppContext_2.AppContext; } });
//# sourceMappingURL=index.js.map