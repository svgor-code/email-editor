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
exports.TSEmailEditor = void 0;
const react_1 = __importStar(require("react"));
const SettingsContext_1 = require("./context/SettingsContext");
const useIsMountedRef_1 = __importDefault(require("./hooks/useIsMountedRef"));
const encryptJson_1 = require("./core/design/utils/encryptJson");
const ViewHtmlDialog_1 = __importDefault(require("./core/design/preview/ViewHtmlDialog"));
const ViewPreviewDialog_1 = __importDefault(require("./core/design/preview/ViewPreviewDialog"));
const settings_1 = require("./utils/settings");
const EmailEditor_1 = require("./core/design/EmailEditor");
const PARENT_URL = window.location !== window.parent.location
    ? document.referrer
    : document.location.href;
function EmailEditor() {
    const isMountedRef = (0, useIsMountedRef_1.default)();
    const [state, setState] = react_1.default.useState(null);
    const [triggerFetchState, setTriggerFetchState] = react_1.default.useState(false);
    const [previewState, setPreviewState] = react_1.default.useState(null);
    const [htmlState, sethtmlState] = react_1.default.useState(null);
    const [mode, setMode] = react_1.default.useState('');
    const parseState = (0, react_1.useCallback)((stateArg) => {
        var stateJson = null;
        var stateVersion = '';
        try {
            if (stateArg) {
                const stateVal = (0, encryptJson_1.decodeJson)(stateArg);
                if (stateVal) {
                    var tmp = JSON.parse(stateVal);
                    stateJson = tmp['json'];
                    stateVersion = tmp['version'];
                }
            }
        }
        catch (err) {
            const error = new Error(`Invalid Editor State.\n${err.message}`);
            error.stack = err.stack;
            console.log(error);
            return null;
        }
        setState({ json: stateJson, version: stateVersion });
    }, []);
    const getState = (obj) => {
        postMessage('savedState', obj);
        if (mode === 'preview') {
            setPreviewState(obj.html);
        }
        else if (mode === 'html') {
            sethtmlState(obj.html);
        }
        setTriggerFetchState(false);
    };
    const receiveMessage = (0, react_1.useCallback)((event) => {
        if (!PARENT_URL.includes(event.origin))
            return;
        const message = event.data.message;
        switch (message) {
            case 'loadEditor':
                parseState(event.data.value);
                postMessage('editorLoaded', true);
                break;
            case 'fetchState':
                setTriggerFetchState(true);
                break;
            default:
        }
    }, [parseState]);
    (0, react_1.useEffect)(() => {
        window.addEventListener('message', receiveMessage, false);
    }, [isMountedRef, receiveMessage]);
    const onClose = () => {
        setMode('');
    };
    const onPreviewOpen = () => {
        // postMessage("previewOpen", true);
        setMode('preview');
        setTriggerFetchState(true);
    };
    function postMessage(type, value) {
        window.parent.postMessage({ message: type, value: value }, PARENT_URL);
    }
    const onHtmlOpen = () => {
        // postMessage("htmlOpen", true);
        setMode('html');
        setTriggerFetchState(true);
    };
    console.log(state);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(EmailEditor_1.EmailEditor, { loadState: "", loadVersion: "0", triggerFetchState: triggerFetchState, getState: getState, onPreviewOpen: onPreviewOpen, onHtmlOpen: onHtmlOpen }),
        mode === 'preview' && (react_1.default.createElement(ViewPreviewDialog_1.default, { previewDoc: previewState, onClose: onClose, title: "Preview" })),
        mode === 'html' && react_1.default.createElement(ViewHtmlDialog_1.default, { html: htmlState, onClose: onClose })));
}
const settings = (0, settings_1.restoreSettings)();
const TSEmailEditor = ({ text }) => {
    return (react_1.default.createElement(SettingsContext_1.SettingsProvider, { settings: settings },
        react_1.default.createElement(EmailEditor, null)));
};
exports.TSEmailEditor = TSEmailEditor;
//# sourceMappingURL=index.js.map