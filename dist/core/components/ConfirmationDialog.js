"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationDialog = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
function ConfirmationDialog({ onYes, onNo, title, content, yesLabel = undefined, noLabel = undefined, }) {
    return (react_1.default.createElement(core_1.Dialog, { open: true, onClose: onNo, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", fullWidth: true, PaperProps: {
            style: {
                maxWidth: 'sm',
            },
        } },
        react_1.default.createElement(core_1.DialogTitle, { disableTypography: true },
            react_1.default.createElement(core_1.Typography, { variant: "h4" }, title)),
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.DialogContentText, null, content)),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(core_1.Button, { onClick: onNo, color: "secondary" }, noLabel ? noLabel : 'NO'),
            react_1.default.createElement(core_1.Button, { onClick: onYes, color: "secondary", autoFocus: true }, yesLabel ? yesLabel : 'YES'))));
}
exports.ConfirmationDialog = ConfirmationDialog;
//# sourceMappingURL=ConfirmationDialog.js.map