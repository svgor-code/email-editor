"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alignment = void 0;
const ToggleButton_1 = __importDefault(require("@material-ui/lab/ToggleButton"));
const ToggleButtonGroup_1 = __importDefault(require("@material-ui/lab/ToggleButtonGroup"));
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const FormatAlignCenter_1 = __importDefault(require("@material-ui/icons/FormatAlignCenter"));
const FormatAlignJustify_1 = __importDefault(require("@material-ui/icons/FormatAlignJustify"));
const FormatAlignLeft_1 = __importDefault(require("@material-ui/icons/FormatAlignLeft"));
const FormatAlignRight_1 = __importDefault(require("@material-ui/icons/FormatAlignRight"));
const useStyles = (0, styles_1.makeStyles)(theme => ({
    root: {
        width: "100%"
    }
}));
function Alignment({ props, setProp, propKey }) {
    const classes = useStyles();
    return (react_1.default.createElement(ToggleButtonGroup_1.default, { exclusive: true, value: [props.parentStyle[propKey]], onChange: (e, newValue) => {
            e.persist();
            setProp(props => (props.parentStyle[propKey] = newValue));
        }, size: "small", "aria-label": "align" },
        react_1.default.createElement(ToggleButton_1.default, { value: "left", "aria-label": "left" },
            react_1.default.createElement(FormatAlignLeft_1.default, null)),
        react_1.default.createElement(ToggleButton_1.default, { value: "center", "aria-label": "center" },
            react_1.default.createElement(FormatAlignCenter_1.default, null)),
        react_1.default.createElement(ToggleButton_1.default, { value: "right", "aria-label": "right" },
            react_1.default.createElement(FormatAlignRight_1.default, null)),
        react_1.default.createElement(ToggleButton_1.default, { value: "justify", "aria-label": "justify" },
            react_1.default.createElement(FormatAlignJustify_1.default, null))));
}
exports.Alignment = Alignment;
//# sourceMappingURL=Alignment.js.map