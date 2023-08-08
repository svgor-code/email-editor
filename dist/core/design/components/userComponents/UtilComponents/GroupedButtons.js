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
exports.GroupedButtons = void 0;
const core_1 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const styles_1 = require("@material-ui/core/styles");
const core_2 = require("@material-ui/core");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        margin: 2,
    },
    disabledButtons: {
        color: '#eeeeee',
    },
}));
function GroupedButtons({ displayProp, handleChange, mode = 'float' }) {
    const classes = useStyles();
    const validateProp = (displayProp) => {
        if (!displayProp || displayProp === '') {
            return '0';
        }
        return String(displayProp);
    };
    const [state, setState] = react_1.default.useState(() => {
        return validateProp(displayProp);
    });
    (0, react_1.useEffect)(() => {
        if (parseFloat(state) !== parseFloat(validateProp(displayProp))) {
            setState(parseFloat(displayProp));
        }
    }, [validateProp(displayProp)]);
    const regEx = {
        int: /^[0-9]*$/,
        float: /^([0-9]*[.])?[0-9]*$/,
    };
    const handleInputChange = (e) => {
        let value = e.target.value;
        value.replace(' ', '');
        if (value === '') {
            setState('0');
            handleChange(0);
        }
        else if (regEx[mode].test(value)) {
            value = value.replace(/^0+(?![.])/, '');
            if (value === '')
                value = '0';
            setState(value);
            handleChange(parseFloat(value));
        }
    };
    const handleOperations = (op) => {
        let value = parseFloat(state);
        if (value - 1 < 0 && op === '-') {
            value = 0;
            setState('0');
            handleChange(value);
            return;
        }
        op === '-' ? (value -= 1.0) : (value += 1.0);
        value = parseFloat(value.toFixed(2));
        setState(String(value));
        handleChange(value);
    };
    return (react_1.default.createElement(core_1.ButtonGroup, { size: "small", color: "default", disableRipple: true, "aria-label": "outlined primary button group" },
        react_1.default.createElement(core_1.Button, { onClick: () => {
                handleOperations('-');
            } }, '-'),
        react_1.default.createElement(core_1.Button, null,
            react_1.default.createElement(core_2.Input, { disableUnderline: true, style: {
                    width: '30px',
                    height: '20px',
                    fontSize: '14px',
                }, inputProps: {
                    style: {
                        textAlign: 'center',
                    },
                }, value: mode === 'int' ? String(displayProp) : state, onChange: handleInputChange })),
        react_1.default.createElement(core_1.Button, { onClick: () => {
                handleOperations('+');
            } }, '+')));
}
exports.GroupedButtons = GroupedButtons;
//# sourceMappingURL=GroupedButtons.js.map