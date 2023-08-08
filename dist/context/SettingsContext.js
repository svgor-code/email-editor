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
exports.SettingsConsumer = exports.SettingsProvider = exports.THEMES = void 0;
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importStar(require("react"));
const settings_1 = require("../utils/settings");
var THEMES;
(function (THEMES) {
    THEMES["LIGHT"] = "LIGHT";
    THEMES["ONE_DARK"] = "ONE_DARK";
    THEMES["UNICORN"] = "UNICORN";
})(THEMES || (exports.THEMES = THEMES = {}));
const defaultSettings = {
    direction: 'ltr',
    responsiveFontSizes: true,
    theme: THEMES.LIGHT,
};
const defaultValue = {
    settings: defaultSettings,
    saveSettings: () => null,
};
const SettingsContext = (0, react_1.createContext)(defaultValue);
const SettingsProvider = ({ settings, children }) => {
    const [currentSettings, setCurrentSettings] = (0, react_1.useState)(settings || defaultSettings);
    const handleSaveSettings = (updatedSettings = {}) => {
        const mergedSettings = lodash_1.default.merge({}, currentSettings, updatedSettings);
        setCurrentSettings(mergedSettings);
        (0, settings_1.storeSettings)(mergedSettings);
    };
    (0, react_1.useEffect)(() => {
        document.dir = currentSettings.direction;
    }, [currentSettings]);
    return (react_1.default.createElement(SettingsContext.Provider, { value: {
            settings: currentSettings,
            saveSettings: handleSaveSettings,
        } }, children));
};
exports.SettingsProvider = SettingsProvider;
exports.SettingsConsumer = SettingsContext.Consumer;
exports.default = SettingsContext;
//# sourceMappingURL=SettingsContext.js.map