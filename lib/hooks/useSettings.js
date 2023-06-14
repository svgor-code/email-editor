"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SettingsContext_1 = __importDefault(require("../context/SettingsContext"));
function useSettings() {
    const context = (0, react_1.useContext)(SettingsContext_1.default);
    return context;
}
exports.default = useSettings;
//# sourceMappingURL=useSettings.js.map