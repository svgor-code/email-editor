"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAccordion = exports.ColorAccordion = exports.AlignmentAccordion = exports.AccordionHeader = exports.BackgroundAccordion = exports.ActionAccordion = exports.SizeAccordion = exports.BorderAccordion = exports.MarginAccordion = exports.PaddingAccordion = void 0;
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const PaddingMargin_1 = require("./PaddingMargin");
const Border_1 = require("./Border");
const Accordion_1 = require("./Accordion");
const Alignment_1 = require("./Alignment");
const ColorPicker_1 = require("./ColorPicker");
const Image_1 = __importDefault(require("@material-ui/icons/Image"));
const core_2 = require("@material-ui/core");
const core_3 = require("@material-ui/core");
const YouTube_1 = __importDefault(require("@material-ui/icons/YouTube"));
const Launch_1 = __importDefault(require("@material-ui/icons/Launch"));
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: '100%',
    },
}));
function PaddingAccordion({ props, setProp, styleProp = "parentStyle" }) {
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Padding", preview: react_1.default.createElement(core_1.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" },
                props[styleProp].paddingTop,
                ",\u00A0",
                props[styleProp].paddingRight,
                ",\u00A0",
                props[styleProp].paddingBottom,
                ",\u00A0",
                props[styleProp].paddingLeft)), children: react_1.default.createElement(PaddingMargin_1.PaddingComponent, { props: props, setProp: setProp, styleProp: styleProp }) }));
}
exports.PaddingAccordion = PaddingAccordion;
function MarginAccordion({ props, setProp, styleProp = "parentStyle" }) {
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Margin", preview: react_1.default.createElement(core_1.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" },
                props[styleProp].marginTop,
                ",\u00A0",
                props[styleProp].marginRight,
                ",\u00A0",
                props[styleProp].marginBottom,
                ",\u00A0",
                props[styleProp].marginLeft)), children: react_1.default.createElement(PaddingMargin_1.MarginComponent, { props: props, setProp: setProp, styleProp: styleProp }) }));
}
exports.MarginAccordion = MarginAccordion;
function BorderAccordion({ props, setProp, styleProp = "style" }) {
    var _a, _b, _c, _d;
    var borderString = ((_a = props[styleProp]) === null || _a === void 0 ? void 0 : _a.borderRight) +
        ((_b = props[styleProp]) === null || _b === void 0 ? void 0 : _b.borderLeft) +
        ((_c = props[styleProp]) === null || _c === void 0 ? void 0 : _c.borderBottom) +
        ((_d = props[styleProp]) === null || _d === void 0 ? void 0 : _d.borderTop);
    var isBorderExists = borderString && borderString.split('0px').length < 5;
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Border", preview: isBorderExists ? (react_1.default.createElement(core_1.Box, { style: {
                width: 40,
                height: 25,
                borderRadius: props[styleProp].borderRadius,
                borderRight: props[styleProp].borderRight,
                borderLeft: props[styleProp].borderLeft,
                borderBottom: props[styleProp].borderBottom,
                borderTop: props[styleProp].borderTop,
            } })) : (react_1.default.createElement(core_1.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, "none"))), children: react_1.default.createElement(Border_1.BorderComponent, { props: props, setProp: setProp, styleProp: styleProp }) }));
}
exports.BorderAccordion = BorderAccordion;
function SizeAccordion({ props, setProp, type }) {
    var size = type === 'Width' ? props.style.width : props.style.height;
    function getSize() {
        if (type === 'Width') {
            return parseInt(size.substring(0, size.length - 1));
        }
        else {
            return parseInt(size.substring(0, size.length - 2));
        }
    }
    function setSizeAuto(prop) {
        if (type === 'Width') {
            let w = prop.style.width;
            if (w === 'auto')
                w = '100%';
            else
                w = 'auto';
            prop.style.width = w;
        }
        else {
            let h = prop.style.height;
            if (h === 'auto')
                h = '33px';
            else
                h = 'auto';
            prop.style.height = h;
        }
    }
    function setSize(prop, value) {
        if (type === 'Width') {
            prop.style.width = `${value}` + '%';
        }
        else {
            prop.style.height = `${value}` + 'px';
        }
    }
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { title: type, defaultExpanded: null, preview: react_1.default.createElement(core_1.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, type === 'Width' ? props.style.width : props.style.height)), children: react_1.default.createElement(core_1.Box, { m: 1 },
            react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center", mb: 1 },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, "Default"),
                react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                react_1.default.createElement(core_1.Switch, { checked: size === 'auto', size: "small", onChange: () => {
                        setProp((prop) => {
                            setSizeAuto(prop);
                        });
                    } })),
            size !== 'auto' && (react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center" },
                react_1.default.createElement(core_1.Slider, { value: getSize(), onChange: (e, newValue) => {
                        setProp((prop) => {
                            setSize(prop, newValue);
                        });
                    } }),
                react_1.default.createElement(Typography_1.default, { variant: "caption", style: { marginLeft: '8px' } }, size)))) }));
}
exports.SizeAccordion = SizeAccordion;
function ActionAccordion({ props, setProp }) {
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { title: "Action", defaultExpanded: null, preview: react_1.default.createElement(core_3.Tooltip, { title: props.props.path },
            react_1.default.createElement(core_2.IconButton, { size: "small", href: props.props.path, target: "_blank" },
                react_1.default.createElement(Launch_1.default, { fontSize: "small", htmlColor: "#b4bec3" }))), children: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Box, { m: 1 },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, "Click URL"),
                react_1.default.createElement(core_1.TextField, { variant: "outlined", value: props.props.path === '#' ? '' : props.props.path, onChange: (e) => {
                        e.persist();
                        setProp((prop) => {
                            if (e.target.value !== '')
                                prop.props.path = e.target.value;
                            else
                                prop.props.path = '#';
                        });
                    }, fullWidth: true, margin: "dense" })),
            react_1.default.createElement(core_1.Box, { m: 1, mt: 2 },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, "Open URL in"),
                react_1.default.createElement(core_1.TextField, { variant: "outlined", value: props.props.linkTarget === '_self' ? 'Same Tab' : 'New Tab', onChange: (e) => {
                        e.persist();
                        setProp((prop) => (prop.props.linkTarget =
                            e.target.value === 'New Tab' ? '_blank' : '_self'));
                    }, fullWidth: true, disabled: props.props.path === '#', margin: "dense", select: true },
                    react_1.default.createElement(core_1.MenuItem, { key: 1, value: 'Same Tab' }, "Same Tab"),
                    react_1.default.createElement(core_1.MenuItem, { key: 2, value: 'New Tab' }, "New Tab")))) }));
}
exports.ActionAccordion = ActionAccordion;
function BackgroundAccordion({ props, setProp, isSelfBg, defaultImage, }) {
    const [isBgImage, setIsBgImage] = react_1.default.useState(Boolean(isSelfBg ? props.style.backgroundImage : props.parentStyle.backgroundImage));
    function getBg(isBgImage) {
        if (!isBgImage) {
            if (isSelfBg) {
                return props.style.backgroundColor;
            }
            else {
                return props.parentStyle.backgroundColor;
            }
        }
        else {
            if (isSelfBg) {
                return props.style.backgroundImage;
            }
            else {
                return props.parentStyle.backgroundImage;
            }
        }
    }
    function setBg(isBgImage, props, value) {
        if (!isBgImage) {
            if (isSelfBg) {
                props.style.backgroundImage = '';
                props.style.backgroundColor = value;
            }
            else {
                props.parentStyle.backgroundImage = '';
                props.parentStyle.backgroundColor = value;
            }
        }
        else {
            if (isSelfBg) {
                props.style.backgroundColor = '#00000000';
                props.style.backgroundImage = value;
            }
            else {
                props.parentStyle.backgroundColor = '#00000000';
                props.parentStyle.backgroundImage = value;
            }
        }
    }
    const handleBackgroundTypeChange = (event, checked) => {
        setIsBgImage(checked);
    };
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Background", preview: isBgImage ? (react_1.default.createElement(core_3.Tooltip, { title: getBg(true) },
            react_1.default.createElement(core_2.IconButton, { size: "small", href: getBg(true), target: "_blank" },
                react_1.default.createElement(Image_1.default, { fontSize: "small", htmlColor: "#b4bec3" })))) : (react_1.default.createElement(ColorPicker_1.CustomColorButton, { title: "", value: getBg(false) })), children: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center", m: 1 },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: !isBgImage ? 'textPrimary' : 'textSecondary' }, "Color"),
                react_1.default.createElement(core_1.Switch, { size: "small", checked: isBgImage, color: "default", onChange: handleBackgroundTypeChange, name: "Background Type" }),
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: isBgImage ? 'textPrimary' : 'textSecondary' }, "Image")),
            !isBgImage ? (react_1.default.createElement(core_1.Box, { mt: 2, m: 1 },
                react_1.default.createElement(ColorPicker_1.CustomColorPicker, { value: getBg(false), onChange: (val) => {
                        setProp((props) => {
                            setBg(false, props, val);
                        });
                    } }))) : (react_1.default.createElement(core_1.Box, { mt: 2, m: 1 },
                react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, "Image URL"),
                react_1.default.createElement(core_1.TextField, { variant: "outlined", value: getBg(true) === defaultImage ? '' : getBg(true), onChange: (e) => {
                        e.persist();
                        setProp((prop) => {
                            if (e.target.value !== '')
                                setBg(true, prop, e.target.value);
                            else
                                setBg(true, prop, defaultImage);
                        });
                    }, fullWidth: true, margin: "dense" })))) }));
}
exports.BackgroundAccordion = BackgroundAccordion;
function AccordionHeader({ title }) {
    return (react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center", ml: 2, mt: 4, mb: 1 },
        react_1.default.createElement(Typography_1.default, { variant: "caption", color: "secondary" }, title.toUpperCase())));
}
exports.AccordionHeader = AccordionHeader;
function AlignmentAccordion({ props, setProp }) {
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Alignment", preview: react_1.default.createElement(core_1.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, props.parentStyle['align'])), children: react_1.default.createElement(core_1.Box, { m: 1 },
            react_1.default.createElement(Alignment_1.Alignment, { props: props, setProp: setProp, propKey: 'align' })) }));
}
exports.AlignmentAccordion = AlignmentAccordion;
function getColorType(props, type) {
    if (type === 'Text') {
        return {
            name: 'Text',
            value: props.style.color,
        };
    }
    else {
        return {
            name: type,
            value: props.style.backgroundColor,
        };
    }
}
function setColorType(prop, val, type) {
    if (type === 'Text') {
        prop.style.color = val;
    }
    else {
        prop.style.backgroundColor = val;
    }
}
function ColorAccordion({ props, setProp, types }) {
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { title: "Colors", defaultExpanded: null, preview: react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center" }, types.map((item, index) => {
            var ct = getColorType(props, item);
            return (react_1.default.createElement(ColorPicker_1.CustomColorButton, { key: index, value: ct.value === undefined ? '' : ct.value, title: ct.name }));
        })), children: react_1.default.createElement(core_1.Box, { m: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }, types.map((item, index) => {
            var ct = getColorType(props, item);
            return (react_1.default.createElement(core_1.Box, { key: index },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary", style: { marginBottom: 8 } }, ct.name),
                react_1.default.createElement(ColorPicker_1.CustomColorPicker, { value: ct.value, onChange: (val) => {
                        setProp((prop) => {
                            setColorType(prop, val, item);
                        });
                    } })));
        })) }));
}
exports.ColorAccordion = ColorAccordion;
function MediaAccordion({ props, setProp, src, type }) {
    return (react_1.default.createElement(Accordion_1.CustomAccordion, { defaultExpanded: null, title: "Media", preview: react_1.default.createElement(core_3.Tooltip, { title: props.props.src },
            react_1.default.createElement(core_2.IconButton, { size: "small", href: props.props.src, target: "_blank" }, type === 'image' ? (react_1.default.createElement(Image_1.default, { fontSize: "small", htmlColor: "#b4bec3" })) : (react_1.default.createElement(YouTube_1.default, { fontSize: "small", htmlColor: "#b4bec3" })))), children: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Box, { m: 1 },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, "Media URL"),
                react_1.default.createElement(core_1.TextField, { variant: "outlined", value: props.props.src === src ? '' : props.props.src, onChange: (e) => {
                        e.persist();
                        setProp((props) => {
                            if (e.target.value !== '')
                                props.props.src = e.target.value;
                            else
                                props.props.src = src;
                        });
                    }, fullWidth: true, margin: "dense" })),
            react_1.default.createElement(core_1.Box, { m: 1, mt: 2 },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "textSecondary" }, "Placeholder text"),
                react_1.default.createElement(core_1.TextField, { variant: "outlined", value: props.props.altText, onChange: (e) => {
                        e.persist();
                        setProp((props) => {
                            props.props.altText = e.target.value;
                        });
                    }, fullWidth: true, margin: "dense" }))) }));
}
exports.MediaAccordion = MediaAccordion;
//# sourceMappingURL=SettingsUtils.js.map