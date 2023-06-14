"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const core_1 = require("@material-ui/core");
const core_2 = require("@craftjs/core");
const Code_1 = __importDefault(require("@material-ui/icons/Code"));
const Visibility_1 = __importDefault(require("@material-ui/icons/Visibility"));
const Undo_1 = __importDefault(require("@material-ui/icons/Undo"));
const Redo_1 = __importDefault(require("@material-ui/icons/Redo"));
const core_3 = require("@material-ui/core");
const useStyles = (0, styles_1.makeStyles)(theme => ({
    root: {
        position: "fixed",
        bottom: 22,
        top: "auto",
        left: 22,
        zIndex: 1000
    },
    customButton: {
        borderLeftColor: "#fafafa",
        borderRightColor: "#fafafa"
    }
}));
function Footer({ onPreviewOpen, onHtmlOpen }) {
    const classes = useStyles();
    const { actions, query, canUndo, canRedo } = (0, core_2.useEditor)((state, query) => ({
        enabled: state.options.enabled,
        canUndo: query.history.canUndo(),
        canRedo: query.history.canRedo()
    }));
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(core_1.ButtonGroup, { size: "small", style: { background: "#546E7A" } },
            react_1.default.createElement(core_1.Button, { title: "Undo", onClick: () => {
                    if (canUndo) {
                        actions.history.undo();
                    }
                } },
                react_1.default.createElement(core_3.SvgIcon, { htmlColor: "#fafafa" },
                    react_1.default.createElement(Undo_1.default, null))),
            react_1.default.createElement(core_1.Button, { title: "Redo", onClick: () => {
                    if (canRedo) {
                        actions.history.redo();
                    }
                } },
                react_1.default.createElement(core_3.SvgIcon, { htmlColor: "#fafafa" },
                    react_1.default.createElement(Redo_1.default, null))),
            react_1.default.createElement(core_1.Button, { title: "Preview", onClick: onPreviewOpen },
                react_1.default.createElement(core_3.SvgIcon, { htmlColor: "#fafafa" },
                    react_1.default.createElement(Visibility_1.default, null))),
            react_1.default.createElement(core_1.Button, { title: "HTML View", onClick: onHtmlOpen },
                react_1.default.createElement(core_3.SvgIcon, { htmlColor: "#fafafa" },
                    react_1.default.createElement(Code_1.default, null))))));
}
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map