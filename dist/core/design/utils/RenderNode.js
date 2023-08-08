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
const utils_1 = require("@craftjs/utils");
const core_2 = require("@material-ui/core");
const Toolbox_1 = require("./Toolbox");
const renderNodeUtils_1 = require("./renderNodeUtils");
const icons_1 = require("@material-ui/icons");
const react_dom_1 = __importDefault(require("react-dom"));
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
    const titleCases = {
        sms: 'SMS',
        whatsapp: 'WhatsApp',
    };
    return (titleCases[str.toLowerCase()] ||
        str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase()));
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
        const currentNodeId = typeof state.events.selected === 'string' ? state.events.selected : id;
        return {
            src: currentNodeId ? query.node(currentNodeId).get() : {},
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
    (0, react_1.useEffect)(() => {
        if (dom && id !== utils_1.ROOT_NODE) {
            dom.style.position = 'relative';
            dom.style.transition = 'all 100ms ease-out';
        }
    }, [dom, isHover, isActive]);
    const getPos = (0, react_1.useCallback)((dom) => { var _a; return (_a = dom === null || dom === void 0 ? void 0 : dom.getBoundingClientRect()) !== null && _a !== void 0 ? _a : { top: 0, left: 0, bottom: 0 }; }, []);
    const scroll = (0, react_1.useCallback)(() => {
        const currentDOM = currentRef.current;
        if (!currentDOM)
            return;
        const { top, left } = getPos(dom);
        currentDOM.style.top = top;
        currentDOM.style.left = left;
    }, [dom]);
    (0, react_1.useEffect)(() => {
        const craftRenderer = document.querySelector('.craftjs-renderer');
        craftRenderer === null || craftRenderer === void 0 ? void 0 : craftRenderer.addEventListener('scroll', scroll);
        return () => {
            craftRenderer === null || craftRenderer === void 0 ? void 0 : craftRenderer.removeEventListener('scroll', scroll);
        };
    }, [scroll]);
    const { moveUp, moveDown, addNode, duplicateNode } = (0, renderNodeUtils_1.renderNodeUtils)({
        isSelected,
        query,
        actions,
        src,
    });
    (0, react_1.useEffect)(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [isSelected, moveUp, moveDown]);
    const handleKeyDown = (e) => {
        keysDown[e.key] = true;
        if (isSelected && keysDown['ArrowUp'] && keysDown['Shift']) {
            moveUp();
        }
        else if (isSelected && keysDown['ArrowDown'] && keysDown['Shift']) {
            moveDown();
        }
    };
    const handleKeyUp = (e) => {
        keysDown[e.key] = false;
    };
    const BorderIndicator = ({ style, name }) => {
        const borderLabel = `border${titleCase(name)}`;
        return (react_1.default.createElement(IndicatorDiv, { ref: currentRef, style: Object.assign({ position: 'absolute', zIndex: 1000, display: 'flex', alignItems: 'center', [`${borderLabel}Style`]: isHover || isActive ? 'solid' : null, [`${borderLabel}Width`]: isHover || isActive ? '2px' : null, boxShadow: null, [`${borderLabel}Radius`]: isHover || isActive ? '2px' : null, [`${borderLabel}Color`]: isHover || isActive
                    ? isActive
                        ? primaryTransparent
                        : theme.palette.text.secondary + 'DD'
                    : null }, style) }));
    };
    const SideToolbar = () => {
        return (isActive && (react_1.default.createElement(IndicatorDiv, { ref: currentRef, style: {
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
            react_1.default.createElement(MoveUp, null),
            react_1.default.createElement(MoveDown, null),
            react_1.default.createElement(SelectParent, null),
            react_1.default.createElement(Duplicate, null),
            react_1.default.createElement(Delete, null))));
    };
    const AddContentAbove = () => {
        return isActive && id != utils_1.ROOT_NODE && name !== 'Main' ? (react_1.default.createElement(core_2.Tooltip, { arrow: true, title: "Add content above", placement: "top" },
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
                react_1.default.createElement(icons_1.Add, null)))) : null;
    };
    const AddContentBelow = () => {
        return isActive && id != utils_1.ROOT_NODE && name !== 'Main' ? (react_1.default.createElement(core_2.Tooltip, { arrow: true, title: "Add content below" },
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
                react_1.default.createElement(icons_1.Add, null)))) : null;
    };
    const MoveUp = () => {
        return moveable ? (react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Move Up (Shift + ↑)' },
            react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: moveUp },
                react_1.default.createElement(icons_1.ArrowUpward, null)))) : null;
    };
    const MoveDown = () => {
        return moveable ? (react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Move Down (Shift + ↓)' },
            react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: moveDown },
                react_1.default.createElement(icons_1.ArrowDownward, null)))) : null;
    };
    const SelectParent = () => (react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Select Parent' },
        react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: () => {
                try {
                    let parentNode = query.node(parent).get();
                    while (parentNode &&
                        parentNode['data'] &&
                        parentNode['data']['parent'] &&
                        !parentNode['dom']) {
                        parentNode = query.node(parentNode['data']['parent']).get();
                    }
                    if (parentNode && parentNode['dom']) {
                        actions.selectNode(parentNode.id);
                    }
                }
                catch (err) {
                    return;
                }
            } },
            react_1.default.createElement(icons_1.ZoomOutMap, null))));
    const Duplicate = () => (react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Duplicate' },
        react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: duplicateNode },
            react_1.default.createElement(icons_1.FilterNone, null))));
    const Delete = () => {
        return deletable ? (react_1.default.createElement(core_2.Tooltip, { arrow: true, title: 'Delete' },
            react_1.default.createElement(core_2.IconButton, { className: classes.indicatorIcons, size: "small", onClick: () => {
                    actions['delete'](id);
                } },
                react_1.default.createElement(icons_1.Delete, null)))) : null;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        (isHover || isActive) && id !== utils_1.ROOT_NODE
            ? react_dom_1.default.createPortal(react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(SideToolbar, null),
                react_1.default.createElement(AddContentAbove, null),
                react_1.default.createElement(AddContentBelow, null),
                BorderIndicator({
                    top: 27,
                    left: 0,
                    width: '100%',
                    height: 0,
                    name: 'top',
                }),
                BorderIndicator({
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 0,
                    name: 'bottom',
                }),
                BorderIndicator({
                    top: 27,
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: '100%',
                    name: 'left',
                }),
                BorderIndicator({
                    top: 27,
                    right: 0,
                    width: 0,
                    height: '100%',
                    name: 'right',
                }),
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