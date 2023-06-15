"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAccordion = exports.AccordionDetails = exports.AccordionSummary = exports.Accordion = void 0;
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importDefault(require("react"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
const Accordion_1 = __importDefault(require("@material-ui/core/Accordion"));
const AccordionSummary_1 = __importDefault(require("@material-ui/core/AccordionSummary"));
const AccordionDetails_1 = __importDefault(require("@material-ui/core/AccordionDetails"));
// @ts-ignore
exports.Accordion = (0, styles_1.withStyles)({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            margin: "auto"
        }
    },
    expanded: {}
})(Accordion_1.default);
exports.AccordionSummary = (0, styles_1.withStyles)({
    root: {
        backgroundColor: "#fafafa",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56
        }
    },
    content: {
        "&$expanded": {
            margin: "12px 0"
        }
    },
    expanded: {}
})(AccordionSummary_1.default);
// @ts-ignore
exports.AccordionDetails = (0, styles_1.withStyles)(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(AccordionDetails_1.default);
function CustomAccordion({ title, preview, children, defaultExpanded }) {
    return (react_1.default.createElement(exports.Accordion, { defaultExpanded: defaultExpanded ? true : false },
        react_1.default.createElement(exports.AccordionSummary, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
            react_1.default.createElement(core_1.Box, { display: "flex", width: "100%" },
                react_1.default.createElement(Typography_1.default, { variant: "h5" }, title),
                react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                preview)),
        react_1.default.createElement(exports.AccordionDetails, null,
            react_1.default.createElement(core_1.Box, { width: "100%" }, children))));
}
exports.CustomAccordion = CustomAccordion;
//# sourceMappingURL=Accordion.js.map