"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColorButton = exports.CustomColorPicker = void 0;
const react_1 = __importDefault(require("react"));
const material_ui_color_1 = require("material-ui-color");
const core_1 = require("@material-ui/core");
const Cancel_1 = __importDefault(require("@material-ui/icons/Cancel"));
const transparentColorCode = "#00000000";
function CustomColorPicker({ value, onChange }) {
    const [colorState, setColorState] = react_1.default.useState((0, material_ui_color_1.createColor)(value));
    const picker = (react_1.default.createElement(material_ui_color_1.ColorPicker, { value: colorState, onChange: (val) => {
            setColorState(val);
            if (!val.error) {
                onChange("#" + val.hex);
            }
        }, hideTextfield: true }));
    return value === transparentColorCode ? (picker) : (react_1.default.createElement(core_1.Badge, { badgeContent: react_1.default.createElement(Cancel_1.default, { color: "error", onClick: () => {
                setColorState(transparentColorCode);
                onChange(transparentColorCode);
            }, style: { padding: 1 }, fontSize: "small" }), style: { cursor: "pointer" } }, picker));
}
exports.CustomColorPicker = CustomColorPicker;
function CustomColorButton({ value, title }) {
    return (react_1.default.createElement(material_ui_color_1.ColorButton, { tooltip: title ? title + ": " + value : value, color: value, size: 20 }));
}
exports.CustomColorButton = CustomColorButton;
//# sourceMappingURL=ColorPicker.js.map