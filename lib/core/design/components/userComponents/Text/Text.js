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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const braft_editor_1 = __importDefault(require("braft-editor"));
const react_1 = __importStar(require("react"));
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const TextSettings_1 = require("./TextSettings");
const editorConfig_1 = require("./editorConfig");
const core_3 = require("@material-ui/core");
let customStyleMap = {
    STRIKETHROUGH: {
        textDecoration: "line-through"
    }
};
const useStyles = (0, core_2.makeStyles)(theme => ({
    hideToolbar: {
        diaplay: "none"
    },
    showToolbar: {
        display: "block",
        position: "absolute",
        width: "700px",
        marginTop: "-75px",
        background: "white",
        zIndex: 100000
    },
    customPara: {
        border: "2px solid black",
        margin: 0,
        textAlign: "center"
    },
    fontFamily: {
        zIndex: 1000
    },
    fontSize: {
        marginTop: "10px"
    },
    collapseToolbar: {
        // border: "2px solid black",
        marginTop: "10px"
    },
    toolTip: {
        background: "#000000",
        borderRadius: "2px",
        fontSize: "12px"
    },
    toolTipArrow: {
        color: "#000000"
    }
}));
function Text({ props, style, parentStyle }) {
    const classes = useStyles();
    const theme = (0, core_3.useTheme)();
    const { connectors: { connect, drag }, actions: { setProp }, isActive, dom, id } = (0, core_1.useNode)(node => ({
        isActive: node.events.selected,
        dom: node.dom
    }));
    (0, react_1.useEffect)(() => {
        if (isActive && props.hideToolbar) {
            setProp(props => {
                props.props.hideToolbar = false;
            });
        }
    }, [isActive]);
    const [editorState, setEditorState] = react_1.default.useState(braft_editor_1.default.createEditorState(props.contentState));
    const editorInstance = (0, react_1.useRef)(null);
    const onPasted = (text, html) => {
        let newState = braft_editor_1.default.createEditorState(html, {
            styleImportFn: (nodeName, node, currentStyle) => {
                let newStyle = currentStyle;
                newStyle.add("STRIKETHROUGH");
                return newStyle;
            }
        });
        setEditorState(newState);
        setProp(props => {
            props.props.html = editorState.toHTML();
            props.props.contentState = editorState.toRAW();
        });
    };
    const onChange = editorState => {
        setEditorState(editorState);
    };
    var styleCopy = Object.assign({}, style);
    if (styleCopy.backgroundImage !== "") {
        styleCopy.backgroundImage = "url(" + styleCopy.backgroundImage + ")";
    }
    const x = document.getElementsByClassName("public-DraftEditor-content");
    for (let i = 0; i < x.length; i++) {
        x[i].style.padding = "0px";
        x[i].style.wordBreak = "normal";
        x[i].style.wordWrap = "normal";
        x[i].firstChild.style.padding = "0px";
    }
    const getPos = dom => {
        var _a = dom
            ? dom.getBoundingClientRect()
            : { top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 };
        return {
            top: _a.top,
            left: _a.left,
            right: _a.right,
            bottom: _a.bottom,
            width: _a.right - _a.left,
            height: _a.height
        };
    };
    const isCrossingTop = getPos(dom).top < 220;
    return (react_1.default.createElement(core_2.Grid, { item: true, xs: 12, id: id, ref: connect, style: Object.assign(Object.assign({ position: "relative" }, parentStyle), { backgroundImage: "url(" + parentStyle.backgroundImage + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }) },
        react_1.default.createElement(braft_editor_1.default, Object.assign({ id: "editor-with-color-picker", value: editorState, ref: editorInstance, onChange: onChange, stripPastedStyles: true, controlBarStyle: {
                display: !isActive || props.hideToolbar ? "none" : "flex",
                flexWrap: "wrap",
                position: "absolute",
                width: "700px",
                marginTop: `${isCrossingTop ? getPos(dom).height + 20 : -165}px`,
                marginLeft: `${(350 - getPos(dom).width / 2) * -1}px`,
                background: "white",
                zIndex: 1002,
                border: "1px solid black",
                //background: ""
            }, contentStyle: styleCopy, draftProps: {
                style: {
                    padding: 50
                }
            }, onFocus: () => {
                setProp(props => {
                    props.props.hideToolbar = false;
                });
            }, onBlur: () => {
                setProp(props => {
                    props.props.html = editorState.toHTML();
                    props.props.contentState = editorState.toRAW();
                });
            } }, (0, editorConfig_1.editorConfig)(editorState, setEditorState, classes, editorInstance, setProp, theme)))));
}
exports.Text = Text;
Text.craft = {
    props: TextSettings_1.TextDefaultProps,
    related: {
        settings: TextSettings_1.TextSettings
    },
    displayName: "Text",
    rules: {
        canMoveIn: () => false
    }
};
//# sourceMappingURL=Text.js.map