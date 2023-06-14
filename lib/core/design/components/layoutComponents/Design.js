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
const core_1 = require("@craftjs/core");
const react_1 = __importStar(require("react"));
const index_1 = require("../userComponents/index");
const classnames_1 = __importDefault(require("classnames"));
const ContainerSettings_1 = require("../userComponents/Container/ContainerSettings");
const core_2 = require("@material-ui/core");
function Design({ editorState, onHtmlOpen }) {
    const { actions, enabled, canUndo, canRedo, connectors, rootNode } = (0, core_1.useEditor)((state, query) => ({
        enabled: state.options.enabled,
        canUndo: query.history.canUndo(),
        canRedo: query.history.canRedo(),
        rootNode: state.nodes[core_1.ROOT_NODE],
    }));
    const bodyBackgroundColor = rootNode
        ? rootNode.data.props.style.backgroundColor
        : ContainerSettings_1.ContainerDefaultProps.style.backgroundColor;
    const bodyBackgroundImage = rootNode
        ? rootNode.data.props.style.backgroundImage
        : ContainerSettings_1.ContainerDefaultProps.style.backgroundColor;
    var styleCopy = JSON.parse(JSON.stringify(ContainerSettings_1.ContainerDefaultProps));
    styleCopy.style.backgroundColor = '#ffffff';
    styleCopy.parentStyle.paddingTop = 10;
    styleCopy.parentStyle.paddingBottom = 10;
    styleCopy.parentStyle.paddingRight = 10;
    styleCopy.parentStyle.paddingLeft = 10;
    (0, react_1.useEffect)(() => {
        if (editorState) {
            actions.deserialize(editorState);
        }
    }, [editorState]);
    return (react_1.default.createElement("div", { style: {
            backgroundImage: 'url(' + bodyBackgroundImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: bodyBackgroundColor,
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'scroll',
        }, ref: (ref) => connectors.select(connectors.hover(ref, null), null) },
        react_1.default.createElement("div", { className: (0, classnames_1.default)([
                'craftjs-renderer h-full w-full transition pb-8',
                {
                    'overflow-auto': enabled,
                    'overflow-y': 'scroll',
                },
            ]) },
            react_1.default.createElement(core_2.Box, { mb: 20, mt: 3 },
                react_1.default.createElement(core_1.Frame, { data: editorState },
                    react_1.default.createElement(index_1.BodyWrapper, { style: {}, id: "wrapper" },
                        react_1.default.createElement(core_1.Element, Object.assign({ id: "main", canvas: true, is: index_1.Container }, styleCopy, { style: Object.assign({}, styleCopy.style), parentStyle: Object.assign({}, styleCopy.parentStyle), props: Object.assign(Object.assign({}, ContainerSettings_1.ContainerDefaultProps.props), { xs: 7, id: 'Main', containerType: 1 }), custom: {
                                displayName: 'Main',
                            } }))))))));
}
exports.default = Design;
//# sourceMappingURL=Design.js.map