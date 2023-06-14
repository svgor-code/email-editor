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
exports.RenderNode = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@craftjs/core");
const styled_components_1 = __importDefault(require("styled-components"));
const ArrowUpward_1 = __importDefault(require("@material-ui/icons/ArrowUpward"));
const Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
const react_dom_1 = __importDefault(require("react-dom"));
const utils_1 = require("@craftjs/utils");
const core_2 = require("@material-ui/core");
const core_3 = require("@material-ui/core");
const ArrowDownward_1 = __importDefault(require("@material-ui/icons/ArrowDownward"));
const Add_1 = __importDefault(require("@material-ui/icons/Add"));
const Toolbox_1 = require("./Toolbox");
const ZoomOutMap_1 = __importDefault(require("@material-ui/icons/ZoomOutMap"));
const renderNodeUtils_1 = require("./renderNodeUtils");
const FilterNone_1 = __importDefault(require("@material-ui/icons/FilterNone"));
// import cx from "classnames";
const useStyles = (0, core_2.makeStyles)((theme) => ({
    componentSelected: {
        position: 'relative',
        border: 'thin dashed blue',
    },
    indicatorIcons: {
        marginRight: theme.spacing(1),
    },
}));
const IndicatorDiv = styled_components_1.default.div `
  height: 30px;
  margin-top: -29px;
  font-size: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;
let keysDown = {};
function titleCase(str) {
    if (str === 'sms' || str === 'SMS') {
        return 'SMS';
    }
    if (str === 'whatsapp' || str === 'WHATSAPP') {
        return 'WhatsApp';
    }
    if (str == null) {
        return '';
    }
    return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
}
const RenderNode = ({ render }) => {
    const { actions, query } = (0, core_1.useEditor)();
    const classes = useStyles();
    const theme = (0, core_2.useTheme)();
    const { id, isActive, isHover, dom, name, moveable, deletable, parent, actions: { setProp }, } = (0, core_1.useNode)((node) => {
        return {
            isActive: Boolean(node.events.selected),
            isHover: node.events.hovered,
            dom: node.dom,
            name: node.data.custom.displayName || node.data.displayName,
            moveable: query.node(node.id).isDraggable(),
            deletable: query.node(node.id).isDeletable(),
            parent: node.data.parent,
            props: node.data.props,
            componentName: node.data.name,
        };
    });
    const { src, isSelected } = (0, core_1.useEditor)((state) => {
        return {
            src: id ? query.node(id).get() : {},
            isSelected: Boolean(state.events.selected),
        };
    });
    const [popoverAchorEl, setPopOverAnchorEl] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (!isActive)
            setPopOverAnchorEl(null);
    }, [isActive]);
    const currentRef = (0, react_1.useRef)();
    const primaryTransparent = theme.palette.primary.main + 'DD';
    (0, react_1.useEffect)(function () {
        if (dom && id !== utils_1.ROOT_NODE) {
            dom.style.position = 'relative';
            dom.style.transition = 'all 100ms ease-out';
            // dom.style.borderStyle = "solid";
            // dom.style.borderColor = "transparent";
            // dom.style.borderWidth = "2px";
            // dom.style.transition = "all 100ms ease-out";
            // dom.style.boxShadow = null;
            // dom.style.borderRadius = null;
            // if (isHover || isActive) {
            //     dom.style.borderRadius = "2px";
            //     if (isActive) {
            //         dom.style.borderColor = primaryTransparent;
            //         // dom.style.boxShadow = "0 0 6px " + theme.palette.primary.main + "AA";
            //     } else {
            //         dom.style.borderColor = theme.palette.text.secondary + "DD";
            //         // dom.style.boxShadow = "0 0 6px " + theme.palette.text.primary + "AA";
            //     }
            // }
        }
    }, [dom, isHover, isActive]);
    const getPos = (0, react_1.useCallback)(function (dom) {
        var _a = dom ? dom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
        return {
            top: `${_a.top}px`,
            left: `${_a.left}px`,
            right: `${_a.right}px`,
            bottom: `${_a.bottom}px`,
            width: _a.width,
            height: _a.height,
        };
    }, []);
    const scroll = (0, react_1.useCallback)(function () {
        var currentDOM = currentRef.current;
        if (!currentDOM)
            return;
        var _a = getPos(dom), top = _a.top, left = _a.left;
        currentDOM.style.top = top;
        currentDOM.style.left = left;
    }, [dom]);
    (0, react_1.useEffect)(function () {
        document
            .querySelector('.craftjs-renderer')
            .addEventListener('scroll', scroll);
        return function () {
            document
                .querySelector('.craftjs-renderer')
                .removeEventListener('scroll', scroll);
        };
    }, [scroll]);
    const { moveUp, moveDown, addNode, duplicateNode } = (0, renderNodeUtils_1.renderNodeUtils)({
        isSelected: isSelected,
        query: query,
        actions: actions,
        src: src,
    });
    console.log(src);
    window.onkeydown = function (e) {
        keysDown[e.key] = true;
        if (isSelected && keysDown['ArrowUp'] && keysDown['Shift']) {
            moveUp();
        }
        else if (isSelected && keysDown['ArrowDown'] && keysDown['Shift']) {
            moveDown();
        }
    };
    window.onkeyup = function (e) {
        keysDown[e.key] = false;
    };
    const border = ({ top, bottom, right, left, height, width, name }) => {
        const borderLabel = `border${titleCase(name)}`;
        return (react_1.default.createElement(IndicatorDiv, { ref: currentRef, style: {
                position: 'absolute',
                zIndex: 1000,
                top: top,
                bottom: bottom,
                left: left,
                right: right,
                height: height,
                width: width,
                alignItems: 'center',
                display: 'flex',
                [`${borderLabel}Style`]: isHover || isActive ? 'solid' : null,
                [`${borderLabel}Width`]: isHover || isActive ? '2px' : null,
                boxShadow: null,
                [`${borderLabel}Radius`]: isHover || isActive ? '2px' : null,
                [`${borderLabel}Color`]: isHover || isActive
                    ? isActive
                        ? primaryTransparent
                        : theme.palette.text.secondary + 'DD'
                    : null,
            } }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        (isHover || isActive) && id !== utils_1.ROOT_NODE
            ? react_dom_1.default.createPortal(react_1.default.createElement(react_1.default.Fragment, null,
                isActive && id != utils_1.ROOT_NODE && name !== 'Main' && (react_1.default.createElement(IndicatorDiv, { ref: currentRef, style: {
                        right: -155,
                        top: 27,
                        zIndex: 1000,
                        color: 'white',
                        position: 'absolute',
                        alignItems: 'center',
                        display: 'flex',
                        paddingLeft: 10,
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                        backgroundColor: primaryTransparent,
                        width: 'fit-content',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        moveable && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Move Up (Shift + ↑)' },
                                react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: moveUp },
                                    react_1.default.createElement(ArrowUpward_1.default, null))),
                            react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Move Down (Shift + ↓)' },
                                react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: moveDown },
                                    react_1.default.createElement(ArrowDownward_1.default, null))))),
                        react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Select Parent' },
                            react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: () => {
                                    try {
                                        let parentNode = query.node(parent).get();
                                        while (parentNode &&
                                            parentNode['data'] &&
                                            parentNode['data']['parent'] &&
                                            !parentNode['dom']) {
                                            parentNode = query
                                                .node(parentNode['data']['parent'])
                                                .get();
                                        }
                                        if (parentNode && parentNode['dom']) {
                                            actions.selectNode(parentNode.id);
                                        }
                                    }
                                    catch (err) {
                                        return;
                                    }
                                } },
                                react_1.default.createElement(ZoomOutMap_1.default, null))),
                        react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Duplicate' },
                            react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: duplicateNode },
                                react_1.default.createElement(FilterNone_1.default, null))),
                        deletable && (react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Delete' },
                            react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: () => {
                                    actions['delete'](id);
                                } },
                                react_1.default.createElement(Delete_1.default, null))))))),
                (isActive || isHover) && (react_1.default.createElement(IndicatorDiv, { ref: currentRef, style: {
                        right: -2,
                        top: 7,
                        zIndex: 1000,
                        color: 'white',
                        position: 'absolute',
                        alignItems: 'center',
                        display: 'flex',
                        //   visibility: `${getPos(dom).width}`,
                        backgroundColor: isActive
                            ? primaryTransparent
                            : theme.palette.text.secondary + 'DD',
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        height: '20px',
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 2,
                        justifyContent: 'center',
                        cursor: 'pointer',
                    } },
                    react_1.default.createElement(core_3.Typography, { variant: "caption" }, name))),
                isActive && id != utils_1.ROOT_NODE && name !== 'Main' && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(core_2.Tooltip, { arrow: true, title: "Add content above", placement: "top" },
                        react_1.default.createElement(IndicatorDiv, { ref: currentRef, style: {
                                left: '42%',
                                top: 7,
                                zIndex: 1000,
                                color: 'white',
                                position: 'absolute',
                                alignItems: 'center',
                                display: 'flex',
                                backgroundColor: primaryTransparent,
                                width: '16%',
                                height: '20px',
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                justifyContent: 'center',
                                cursor: 'pointer',
                            }, onClick: (e) => {
                                setPopOverAnchorEl({
                                    element: e.currentTarget,
                                    position: 'top',
                                    targetNode: src.data.parent,
                                });
                                if (name === 'Text') {
                                    setProp((props) => {
                                        props.props.hideToolbar = true;
                                    });
                                }
                            } },
                            react_1.default.createElement(Add_1.default, null))),
                    react_1.default.createElement(core_2.Tooltip, { arrow: true, title: "Add content below" },
                        react_1.default.createElement(IndicatorDiv, { ref: currentRef, style: {
                                left: '42%',
                                bottom: '-20px',
                                zIndex: 1000,
                                color: 'white',
                                position: 'absolute',
                                alignItems: 'center',
                                display: 'flex',
                                backgroundColor: primaryTransparent,
                                width: '16%',
                                height: '20px',
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                justifyContent: 'center',
                                cursor: 'pointer',
                            }, onClick: (e) => {
                                setPopOverAnchorEl({
                                    element: e.currentTarget,
                                    position: 'bottom',
                                    targetNode: src.data.parent,
                                });
                                if (name === 'Text') {
                                    setProp((props) => {
                                        props.props.hideToolbar = true;
                                    });
                                }
                            } },
                            react_1.default.createElement(Add_1.default, null))))),
                dom && id !== utils_1.ROOT_NODE && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_1.default.Fragment, null, border({
                        top: 27,
                        left: 0,
                        width: '100%',
                        height: 0,
                        name: 'top',
                    })),
                    react_1.default.createElement(react_1.default.Fragment, null, border({
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: 0,
                        name: 'bottom',
                    })),
                    react_1.default.createElement(react_1.default.Fragment, null, border({
                        top: 27,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: '100%',
                        name: 'left',
                    })),
                    react_1.default.createElement(react_1.default.Fragment, null, border({
                        top: 27,
                        right: 0,
                        width: 0,
                        height: '100%',
                        name: 'right',
                    })))),
                react_1.default.createElement(Toolbox_1.Toolbox, { anchorEl: isSelected && popoverAchorEl ? popoverAchorEl.element : null, origin: popoverAchorEl ? popoverAchorEl.position : 'top', onClose: () => {
                        setPopOverAnchorEl(null);
                    }, onClick: (val) => {
                        addNode(Object.assign(Object.assign({}, val), { trg: popoverAchorEl.targetNode }));
                        setPopOverAnchorEl(null);
                    } })), dom)
            : null,
        render));
};
exports.RenderNode = RenderNode;
//# sourceMappingURL=RenderNode.js.map