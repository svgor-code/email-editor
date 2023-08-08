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
exports.SnippetProvider = exports.SnippetContext = void 0;
const react_1 = __importStar(require("react"));
const defaultValue = {
    currentSnippet: "",
    openSnippetManager: false,
    setCurrentSnippet: () => {
        throw new Error("Images context not defined");
    },
    setOpenSnippetManager: () => {
        throw new Error("Images context not defined");
    },
};
exports.SnippetContext = (0, react_1.createContext)(defaultValue);
const SnippetProvider = ({ children }) => {
    const [currentSnippet, setCurrentSnippet] = (0, react_1.useState)("");
    const [openSnippetManager, setOpenSnippetManager] = (0, react_1.useState)(false);
    return (react_1.default.createElement(exports.SnippetContext.Provider, { value: {
            currentSnippet,
            openSnippetManager,
            setOpenSnippetManager,
            setCurrentSnippet,
        } }, children));
};
exports.SnippetProvider = SnippetProvider;
//# sourceMappingURL=SnippetContext.js.map