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
const defaultValue = {
    editorState: null,
    setEditorState: () => null,
    version: "0",
    setVersion: () => null,
};
const AppContext = (0, react_1.createContext)(defaultValue);
exports.AppContext = AppContext;
const AppContextProvider = ({ defaultState, children, }) => {
    const [version, setVersion] = (0, react_1.useState)(defaultState.version || "");
    const [editorState, setEditorState] = (0, react_1.useState)(defaultState.json || null);
    return (react_1.default.createElement(AppContext.Provider, { value: { editorState, setEditorState, version, setVersion } },
        react_1.default.createElement(ImagesContext_1.ImagesProvider, null, children)));
};
exports.AppContextProvider = AppContextProvider;
const AppContextConsumer = AppContext.Consumer;
exports.AppContextConsumer = AppContextConsumer;
exports.default = AppContext;
//# sourceMappingURL=AppContext.js.map