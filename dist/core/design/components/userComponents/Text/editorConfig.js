"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editorConfig = void 0;
const react_1 = __importDefault(require("react"));
require("braft-editor/dist/index.css");
const braft_utils_1 = require("braft-utils");
const core_1 = require("@material-ui/core");
const UtilComponents_1 = require("../UtilComponents");
const core_2 = require("@material-ui/core");
const core_3 = require("@material-ui/core");
const FONT_FAMILIES = [
    {
        name: "Default Font",
        family: "-apple-system,BlinkMacSystemFont,‘Segoe UI’,Roboto,Helvetica,Arial,sans-serif,‘Apple Color Emoji’,‘Segoe UI Emoji’,‘Segoe UI Symbol’"
    }
];
// export function FontFamily({ editorState, setEditorState, editorInstance }) {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const theme = useTheme();
//     const getCurFontFamily = () => {
//         let fontFamily = FONT_FAMILIES[0].name;
//         for (let item of FONT_FAMILIES) {
//             if (ContentUtils.selectionHasInlineStyle(editorState, `FONTFAMILY-${item.name}`)) {
//                 fontFamily = item.name;
//                 break;
//             }
//         }
//         return fontFamily;
//     };
//     console.log(editorState.getCurrentInlineStyle());
//     return (
//         <>
//             <TextField
//                 variant="filled"
//                 value={getCurFontFamily()}
//                 onChange={e => {
//                     e.persist();
//                     editorInstance.current.setValue(
//                         ContentUtils.toggleSelectionFontFamily(editorState, e.target.value)
//                     );
//                     editorInstance.current.requestFocus();
//                 }}
//                 fullWidth
//                 margin="dense"
//                 select
//             >
//                 {FONT_FAMILIES.map((val, i) => {
//                     return (
//                         <MenuItem key={i} value={val.name} style={{ fontFamily: val.family }}>
//                             {val.name}
//                         </MenuItem>
//                     );
//                 })}
//             </TextField>
//         </>
//     );
// }
// const hooks = {
//     "toggle-font-size": prop => {
//         console.log(prop);
//         return `calc(${prop} / var(--size-divisor))`;
//     }
// };
function FontSize({ editorState, setEditorState, editorInstance }) {
    const getCurFontSize = () => {
        let fontSize = 16;
        for (let i = 0; i < 144; i++) {
            if (braft_utils_1.ContentUtils.selectionHasInlineStyle(editorState, `FONTSIZE-${i}`)) {
                fontSize = i;
                break;
            }
        }
        return fontSize;
    };
    const handleChange = newValue => {
        editorInstance.current.setValue(braft_utils_1.ContentUtils.toggleSelectionFontSize(editorState, `${newValue}`));
    };
    return (react_1.default.createElement(core_1.Box, { mx: 1 },
        react_1.default.createElement(UtilComponents_1.GroupedButtons, { displayProp: getCurFontSize(), handleChange: handleChange, mode: "int" })));
}
function unitExportFn(unit, type, target) {
    if (type === "line-height") {
        return unit;
    }
    return `${unit / 16}em`;
}
const editorConfig = (editorState, setEditorState, classes, editorInstance, setProp, theme) => {
    return {
        language: (languages, context) => {
            if (context === "braft-editor") {
                languages.en.controls.clear = "Empty";
                return languages.en;
            }
        },
        controls: [
            "headings",
            // "font-family",
            {
                key: "font-size",
                type: "component",
                className: classes.fontSize,
                component: (react_1.default.createElement(FontSize, { editorState: editorState, setEditorState: setEditorState, editorInstance: editorInstance }))
            },
            "separator",
            "bold",
            "italic",
            "underline",
            "text-color",
            "strike-through",
            "superscript",
            "subscript",
            "separator",
            "text-align",
            "separator",
            "link",
            "list-ul",
            `list-ol`,
            "blockquote",
            "hr",
            "separator",
            "remove-styles",
            "emoji",
            "text-indent",
            "separator",
            "line-height",
            "letter-spacing",
            "undo",
            "redo",
            "seperator",
            {
                key: "toolbar-collapse",
                type: "component",
                className: classes.collapseToolbar,
                component: (react_1.default.createElement(core_1.Tooltip, { title: "Close Toolbar", arrow: true, classes: { tooltip: classes.toolTip, arrow: classes.toolTipArrow } },
                    react_1.default.createElement(core_2.Button, { style: {
                            color: theme.palette.text.secondary
                        }, onClick: () => {
                            setProp(props => {
                                props.props.hideToolbar = true;
                            });
                            editorInstance.current.draftInstance.blur();
                        } },
                        react_1.default.createElement(core_3.Typography, { variant: "caption" }, "Close"))))
            }
        ],
        fontFamilies: FONT_FAMILIES,
        converts: { unitExportFn },
        placeHolder: "Text"
    };
};
exports.editorConfig = editorConfig;
//# sourceMappingURL=editorConfig.js.map