"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const core_1 = require("@material-ui/core");
const core_2 = require("@material-ui/core");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    formLabel: {
        color: 'black',
    },
    appBar: {
        position: 'fixed',
        backgroundColor: 'white',
        alignContent: 'center',
    },
}));
function Header({}) {
    const classes = useStyles();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(AppBar_1.default, { className: classes.appBar, elevation: 5 },
            react_1.default.createElement(Toolbar_1.default, null,
                react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center" },
                    react_1.default.createElement(IconButton_1.default, { "aria-label": "close" },
                        react_1.default.createElement(Close_1.default, null)),
                    react_1.default.createElement(core_1.Box, { mx: 1 }),
                    react_1.default.createElement(Typography_1.default, { variant: "h4", color: "textPrimary" }, "Email Design")),
                react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                react_1.default.createElement(core_2.Button, { variant: "contained", color: "secondary" }, "Save Template")))));
}
exports.Header = Header;
//# sourceMappingURL=Header.js.map