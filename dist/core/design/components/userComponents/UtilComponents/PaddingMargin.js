"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginComponent = exports.PaddingComponent = void 0;
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const GroupedButtons_1 = require("./GroupedButtons");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: '100%',
    },
}));
function PaddingComponent({ props, setProp, styleProp = "parentStyle" }) {
    return (react_1.default.createElement(SpacingChange, { props: props, setProp: setProp, propType: 'Padding', styleProp: styleProp }));
}
exports.PaddingComponent = PaddingComponent;
function MarginComponent({ props, setProp, styleProp = "parentStyle" }) {
    return (react_1.default.createElement(SpacingChange, { props: props, setProp: setProp, propType: 'Margin', styleProp: styleProp }));
}
exports.MarginComponent = MarginComponent;
function SingleSpacingChange({ propKey, propName, setProp, props, propType, styleProp, }) {
    const classes = useStyles();
    function getSpacing() {
        let val = props[styleProp][propKey];
        return val;
    }
    function setSpacing(props, newValue) {
        let Top = propType.toLowerCase() + 'Top';
        let Bottom = propType.toLowerCase() + 'Bottom';
        let Right = propType.toLowerCase() + 'Right';
        let Left = propType.toLowerCase() + 'Left';
        if (propName === 'All Sides') {
            props[styleProp][Top] = newValue;
            props[styleProp][Bottom] = newValue;
            props[styleProp][Right] = newValue;
            props[styleProp][Left] = newValue;
        }
        else {
            props[styleProp][propKey] = newValue;
        }
    }
    const handleSetProp = (newValue) => {
        setProp((props) => {
            setSpacing(props, newValue);
        });
    };
    return (react_1.default.createElement(core_1.Box, { my: 2, display: "flex", flexDirection: "column" },
        react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, propName),
        react_1.default.createElement(GroupedButtons_1.GroupedButtons, { mode: "", displayProp: getSpacing(), handleChange: handleSetProp })));
}
function SpacingChange({ props, setProp, propType, styleProp }) {
    function getSpacing() {
        return props[styleProp];
    }
    function setSpacing(props, value) {
        props[styleProp] = Object.assign(Object.assign({}, props[styleProp]), { [Top]: value, [Bottom]: value, [Right]: value, [Left]: value });
    }
    const classes = useStyles();
    const options = propType.toLowerCase() + 'Options';
    let Top = propType.toLowerCase() + 'Top';
    let Bottom = propType.toLowerCase() + 'Bottom';
    let Right = propType.toLowerCase() + 'Right';
    let Left = propType.toLowerCase() + 'Left';
    const handleOptionChange = () => {
        let value = getSpacing()[Top];
        setProp((props) => {
            setSpacing(props, value);
            props.options[options] =
                props.options[options] === 'more' ? 'less' : 'more';
        });
    };
    let isMore = props.options[options] === 'more';
    return (react_1.default.createElement(core_1.Box, { justifyContent: "center", alignItems: "center", m: 1 },
        react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center", mb: 1 },
            react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, "Uniform"),
            react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
            react_1.default.createElement(core_1.Switch, { checked: props.options[options] !== 'more', size: "small", onChange: handleOptionChange })),
        isMore ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center" },
                react_1.default.createElement(SingleSpacingChange, { propType: propType, propKey: Top, propName: "Top", setProp: setProp, props: props, styleProp: styleProp }),
                react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                react_1.default.createElement(SingleSpacingChange, { propType: propType, propKey: Right, propName: "Right", setProp: setProp, props: props, styleProp: styleProp })),
            react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center" },
                react_1.default.createElement(SingleSpacingChange, { propType: propType, propKey: Bottom, propName: "Bottom", setProp: setProp, props: props, styleProp: styleProp }),
                react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                react_1.default.createElement(SingleSpacingChange, { propType: propType, propKey: Left, propName: "Left", setProp: setProp, props: props, styleProp: styleProp })))) : (react_1.default.createElement(SingleSpacingChange, { propType: propType, propKey: Top, propName: "All Sides", setProp: setProp, props: props, styleProp: styleProp }))));
}
//# sourceMappingURL=PaddingMargin.js.map