"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
require("brace");
require("ace-builds/src-noconflict/ace");
require("brace/mode/json");
require("brace/mode/xml");
require("brace/mode/text");
require("brace/mode/html");
require("brace/theme/monokai");
require("brace/theme/textmate");
require("brace/ext/language_tools");
require("brace/ext/searchbox");
const react_ace_1 = __importDefault(require("react-ace"));
const useStyles = (0, core_1.makeStyles)(() => ({
    root: {
        minHeight: "100%"
    },
    jsonTextField: {
        background: "#fffee6",
        backgroundColor: "#fffee6",
        fontFamily: "Monospace"
    }
}));
function Editor({ className, value, mode, isView, height, width, isDark, defaultValue, cursorStart, onChange, onPaste, disableSyntaxCheck, onBlur, name, onLoad }) {
    const handleChange = value1 => {
        if (onChange) {
            let ev = {
                target: {
                    value: value1,
                    name: name
                }
            };
            onChange(value1, ev);
        }
    };
    const handleBlur = event => {
        if (onBlur) {
            event.target.name = name;
            onBlur(event);
        }
    };
    const handlePaste = content => {
        if (onPaste)
            onPaste(content);
    };
    var theme = isDark ? "monokai" : "textmate";
    return (react_1.default.createElement(react_ace_1.default, { value: value, onChange: handleChange, onPaste: handlePaste, onBlur: handleBlur, defaultValue: defaultValue, theme: theme, mode: mode, width: width ? width : "100%", readOnly: isView, wrapEnabled: true, height: height, onLoad: onLoad, enableLiveAutocompletion: true, enableBasicAutocompletion: true, editorProps: { $blockScrolling: true }, focus: true, cursorStart: cursorStart, setOptions: {
            fontSize: 14,
            useWorker: !disableSyntaxCheck
        }, navigateToFileEnd: false, name: name, style: {
            borderRadius: "5px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#D3D3D3"
        } }));
}
exports.default = Editor;
//# sourceMappingURL=AceEditor.js.map