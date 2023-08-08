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
exports.Resizer = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const core_3 = require("@material-ui/core");
const ContainerSettings_1 = require("./ContainerSettings");
const Toolbox_1 = require("../../../utils/Toolbox");
const renderNodeUtils_1 = require("../../../utils/renderNodeUtils");
const Add_1 = __importDefault(require("@material-ui/icons/Add"));
const Resizer = ({ children, style, parentStyle, props, craftRef }) => {
    const { id, src } = (0, core_1.useNode)(node => {
        return { src: node };
    });
    const { query, actions } = (0, core_1.useEditor)();
    const { addNode } = (0, renderNodeUtils_1.renderNodeUtils)({
        isSelected: true,
        query: query,
        actions: actions,
        src: src
    });
    const [popoverAchorEl, setPopOverAnchorEl] = (0, react_1.useState)(null);
    return (react_1.default.createElement(core_2.Grid, { item: true, ref: craftRef, style: parentStyle, xs: props.xs, id: id },
        react_1.default.createElement(core_2.Grid, { container: true, style: Object.assign(Object.assign({}, style), { backgroundImage: "url(" + style.backgroundImage + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }), alignItems: props.alignItems }, children && children.props && children.props.children ? (react_1.default.createElement(react_1.default.Fragment, null, children)) : (react_1.default.createElement(core_2.Box
        //p={8}
        , { 
            //p={8}
            bgcolor: "#d9e7ff", width: "100%", minHeight: "25vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", style: {
                border: "thin dashed blue"
            } },
            react_1.default.createElement(core_3.Typography, { variant: "body2" }, "No content present"),
            react_1.default.createElement(core_2.Tooltip, { title: "Add Content", placement: "bottom", arrow: true },
                react_1.default.createElement(core_2.Button, { startIcon: react_1.default.createElement(Add_1.default, null), onClick: e => {
                        setPopOverAnchorEl({
                            element: e.currentTarget,
                            position: "bottom",
                            targetNode: src.id
                        });
                    }, style: { marginTop: 20 }, color: "secondary", size: "small", variant: "outlined" }, "Add")),
            react_1.default.createElement(Toolbox_1.Toolbox, { anchorEl: popoverAchorEl ? popoverAchorEl.element : null, origin: popoverAchorEl ? popoverAchorEl.position : "top", onClose: () => {
                    setPopOverAnchorEl(null);
                }, onClick: val => {
                    addNode(Object.assign(Object.assign({}, val), { trg: popoverAchorEl.targetNode }));
                    setPopOverAnchorEl(null);
                } }))))));
};
exports.Resizer = Resizer;
exports.Resizer.craft = {
    props: ContainerSettings_1.ContainerDefaultProps,
    displayName: "Block",
    related: {
        settings: ContainerSettings_1.ContainerSettings
    }
};
//# sourceMappingURL=Resizer.js.map