"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderComponent = void 0;
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importDefault(require("react"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const ColorPicker_1 = require("./ColorPicker");
const GroupedButtons_1 = require("./GroupedButtons");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: '100%',
    },
}));
function Border({ propKey, propName, setProp, props, styleProp }) {
    const classes = useStyles();
    const borderStylesOpts = ['Solid', 'Dotted', 'Dashed'];
    const tmp = props[styleProp][propKey];
    let [width, style, color] = typeof tmp === 'string' ? [...tmp.split(' ')] : [];
    width = width && width !== '' ? width : '0px';
    style = style && style !== '' ? style : 'solid';
    color = color && color !== '' ? color : '#000000';
    const selectedValue = borderStylesOpts.filter((opts) => opts.toLowerCase() === style);
    const handleSetProp = () => {
        setProp((props) => {
            if (propName === 'All Sides') {
                props[styleProp]['borderTop'] = width + ' ' + style + ' ' + color + ' ';
                props[styleProp]['borderBottom'] =
                    width + ' ' + style + ' ' + color + ' ';
                props[styleProp]['borderRight'] =
                    width + ' ' + style + ' ' + color + ' ';
                props[styleProp]['borderLeft'] =
                    width + ' ' + style + ' ' + color + ' ';
            }
            else {
                props[styleProp][propKey] = width + ' ' + style + ' ' + color + ' ';
            }
        });
    };
    return (react_1.default.createElement(core_1.Box, { my: 2, mr: 1, display: "flex", flexDirection: "column" },
        react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, propName),
        react_1.default.createElement(core_1.TextField, { variant: "outlined", value: selectedValue, onChange: (e) => {
                e.persist();
                style = e.target.value.toLowerCase();
                handleSetProp();
            }, fullWidth: true, margin: "dense", size: "small", select: true }, borderStylesOpts.map((value, index) => {
            return (react_1.default.createElement(core_1.MenuItem, { key: index, value: value }, value));
        })),
        react_1.default.createElement(core_1.Box, { my: 1, display: "flex", alignItems: "center" },
            react_1.default.createElement(GroupedButtons_1.GroupedButtons, { displayProp: width ? width.substring(0, width.length - 2) : width, handleChange: (newValue) => {
                    width = `${newValue}px`;
                    handleSetProp();
                } }),
            react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
            react_1.default.createElement(ColorPicker_1.CustomColorPicker, { value: color, onChange: (newValue) => {
                    color = newValue;
                    handleSetProp();
                } }))));
}
function BorderComponent({ props, setProp, styleProp }) {
    const classes = useStyles();
    const handleOptionChange = () => {
        let value = props[styleProp].borderTop;
        setProp((props) => {
            props[styleProp] = Object.assign(Object.assign({}, props[styleProp]), { borderTop: value, borderBottom: value, borderRight: value, borderLeft: value });
            props['borderOptions'] =
                props['borderOptions'] === 'more' ? 'less' : 'more';
        });
    };
    let radius = props[styleProp].borderRadius;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Box, { justifyContent: "center", alignItems: "center", m: 1 },
            react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center", mb: 1 },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, "Uniform"),
                react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                react_1.default.createElement(core_1.Switch, { checked: props['borderOptions'] !== 'more', size: "small", onChange: handleOptionChange })),
            react_1.default.createElement(core_1.Box, null, props['borderOptions'] === 'more' ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center" },
                    react_1.default.createElement(Border, { propKey: "borderTop", propName: "Top", setProp: setProp, props: props, styleProp: styleProp }),
                    react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                    react_1.default.createElement(Border, { propKey: "borderBottom", propName: "Bottom", setProp: setProp, props: props, styleProp: styleProp })),
                react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center" },
                    react_1.default.createElement(Border, { propKey: "borderLeft", propName: "Left", setProp: setProp, props: props, styleProp: styleProp }),
                    react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                    react_1.default.createElement(Border, { propKey: "borderRight", propName: "Right", setProp: setProp, props: props, styleProp: styleProp })))) : (react_1.default.createElement(Border, { propKey: "borderTop", propName: "All Sides", setProp: setProp, props: props, styleProp: styleProp })))),
        react_1.default.createElement(core_1.Box, { display: "flex", m: 1, flexDirection: "column" },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary", style: { marginBottom: 8 } }, 'Border Radius'),
            react_1.default.createElement(GroupedButtons_1.GroupedButtons, { displayProp: radius, handleChange: (newValue) => {
                    setProp((props) => {
                        props[styleProp].borderRadius = newValue;
                    });
                } }))));
}
exports.BorderComponent = BorderComponent;
BorderComponent.defaultProps = {
    styleProp: 'style',
};
//# sourceMappingURL=Border.js.map