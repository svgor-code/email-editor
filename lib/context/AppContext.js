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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContextConsumer = exports.AppContextProvider = exports.AppContext = void 0;
const react_1 = __importStar(require("react"));
const ImagesContext_1 = require("./ImagesContext");
const core_1 = require("@craftjs/core");
const userComponents_1 = require("../core/design/components/userComponents");
const encryptJson_1 = require("../core/design/utils/encryptJson");
const RenderNode_1 = require("../core/design/utils/RenderNode");
const defaultValue = {
    editorState: null,
    encodedState: "",
    triggerFetchState: false,
    setEncoded: () => {
        throw new Error("Not in the context");
    },
    setEditorState: () => {
        throw new Error("Not in the context");
    },
    setTriggerFetchState: () => {
        throw new Error("Not in the context");
    },
};
const AppContext = (0, react_1.createContext)(defaultValue);
exports.AppContext = AppContext;
const AppContextProvider = ({ defaultState, children }) => {
    const [editorState, setEditorState] = (0, react_1.useState)(defaultState || null);
    const [triggerFetchState, setTriggerFetchState] = (0, react_1.useState)(false);
    const [encodedState, setEncodedState] = (0, react_1.useState)("");
    const getCurrentEditor = (query) => {
        const json = query.serialize();
        const newState = { json: json, version: (editorState === null || editorState === void 0 ? void 0 : editorState.version) || "" };
        const newEncodedState = (0, encryptJson_1.encodeJson)(JSON.stringify(newState));
        setEncodedState(newEncodedState);
        setEditorState(newState);
    };
    const setEncoded = (state) => {
        const newDecodedState = (0, encryptJson_1.decodeJson)(state);
        if (newDecodedState) {
            const parsedState = JSON.parse(newDecodedState);
            setEditorState(Object.assign({}, parsedState));
        }
    };
    return (react_1.default.createElement(AppContext.Provider, { value: {
            editorState,
            encodedState,
            triggerFetchState,
            setEncoded,
            setEditorState,
            setTriggerFetchState,
        } },
        react_1.default.createElement(core_1.Editor, { onNodesChange: (query) => {
                getCurrentEditor(query);
            }, resolver: {
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
            react_1.default.createElement(ImagesContext_1.ImagesProvider, null, children))));
};
exports.AppContextProvider = AppContextProvider;
const AppContextConsumer = AppContext.Consumer;
exports.AppContextConsumer = AppContextConsumer;
exports.default = AppContext;
//# sourceMappingURL=AppContext.js.map