"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const core_2 = require("@material-ui/core");
const AceEditor_1 = __importDefault(require("../../components/AceEditor"));
const core_3 = require("@material-ui/core");
const decoder = require('he');
const unescapeHTML = (htmlBody) => {
    if (htmlBody == null) {
        return null;
    }
    return decoder.decode(htmlBody);
};
function ViewHtmlDialog({ html, onClose }) {
    return (react_1.default.createElement(core_1.Dialog, { open: true, onClose: onClose, fullWidth: true, maxWidth: "lg", "aria-labelledby": "max-width-dialog-title" },
        react_1.default.createElement(core_1.DialogTitle, { disableTypography: true },
            react_1.default.createElement(core_2.Box, { width: "100%", display: "flex", alignItems: "center" },
                react_1.default.createElement(core_1.Typography, { variant: "h4" }, "HTML"),
                react_1.default.createElement(core_2.Box, { flexGrow: 1 }),
                react_1.default.createElement(core_1.IconButton, { onClick: onClose },
                    react_1.default.createElement(Close_1.default, null)))),
        react_1.default.createElement(core_1.DialogContent, { dividers: true }, html === null ? (react_1.default.createElement(core_3.CircularProgress, null)) : (react_1.default.createElement(AceEditor_1.default, { mode: "html", isView: true, defaultValue: "", value: unescapeHTML(html), disableSyntaxCheck: true })))));
}
exports.default = ViewHtmlDialog;
//# sourceMappingURL=ViewHtmlDialog.js.map