"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonVariantAccordion = exports.ButtonSizeAccordion = void 0;
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Accordion_1 = require("./Accordion");
const Select_1 = __importDefault(require("@material-ui/core/Select"));
const OutlinedInput_1 = __importDefault(require("@material-ui/core/OutlinedInput"));
const myStyle = {
    box: {
        display: 'flex',
        alignItems: 'center',
    },
    select: {
        width: '50%',
    },
    button: {
        marginLeft: 'auto',
        order: '2',
    },
};
function ButtonSizeAccordion({ props, setProp }) {
    const handleClick = (value) => {
        setProp((props) => {
            props.style.size = value;
        });
    };
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Size", preview: react_1.default.createElement(core_1.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, props.style.size)), children: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Box, { m: 1, style: myStyle.box },
                react_1.default.createElement(Select_1.default, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: props.style.size, label: "Size", margin: "dense", input: react_1.default.createElement(OutlinedInput_1.default, null), style: myStyle.select },
                    react_1.default.createElement(core_1.MenuItem, { value: 'small', onClick: () => handleClick('small') }, "Small"),
                    react_1.default.createElement(core_1.MenuItem, { value: 'medium', onClick: () => handleClick('medium') }, "Medium"),
                    react_1.default.createElement(core_1.MenuItem, { value: 'large', onClick: () => handleClick('large') }, "Large")),
                react_1.default.createElement(core_1.Button, { variant: 'contained', size: props.style.size, style: myStyle.button }, props.style.size))) }));
}
exports.ButtonSizeAccordion = ButtonSizeAccordion;
function ButtonVariantAccordion({ props, setProp }) {
    const handleClick = (value) => {
        setProp((props) => {
            props.style.variant = value;
        });
    };
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Type", preview: react_1.default.createElement(core_1.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 }, props.style.variant === 'text' ? (react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, 'default')) : (react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, props.style.variant))), children: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Box, { m: 1, style: myStyle.box },
                react_1.default.createElement(Select_1.default, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: props.style.variant == 'text' ? 'default' : props.style.variant, label: "Type", margin: "dense", input: react_1.default.createElement(OutlinedInput_1.default, null), style: myStyle.select },
                    react_1.default.createElement(core_1.MenuItem, { value: 'default', onClick: () => handleClick('text') }, "Default"),
                    react_1.default.createElement(core_1.MenuItem, { value: 'contained', onClick: () => handleClick('contained') }, "Contained"),
                    react_1.default.createElement(core_1.MenuItem, { value: 'outlined', onClick: () => handleClick('outlined') }, "Outlined")),
                react_1.default.createElement(core_1.Button, { onClick: () => handleClick('outlined'), variant: props.style.variant, style: myStyle.button }, props.style.variant == 'text' ? 'default' : props.style.variant))) }));
}
exports.ButtonVariantAccordion = ButtonVariantAccordion;
//# sourceMappingURL=ButtonProperties.js.map