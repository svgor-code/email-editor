"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbox = void 0;
const react_1 = __importDefault(require("react"));
const userComponents_1 = require("../components/userComponents");
const core_1 = require("@material-ui/core");
const core_2 = require("@material-ui/core");
const TextFields_1 = __importDefault(require("@material-ui/icons/TextFields"));
const Image_1 = __importDefault(require("@material-ui/icons/Image"));
const Code_1 = __importDefault(require("@material-ui/icons/Code"));
const YouTube_1 = __importDefault(require("@material-ui/icons/YouTube"));
const Crop75_1 = __importDefault(require("@material-ui/icons/Crop75"));
const ViewWeek_1 = __importDefault(require("@material-ui/icons/ViewWeek"));
const Remove_1 = __importDefault(require("@material-ui/icons/Remove"));
const useStyles = (0, core_1.makeStyles)((theme) => ({
    root: {},
    queryField: {
        width: 500,
    },
    avatar: {
        height: 42,
        width: 42,
        marginRight: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        border: 'none',
    },
    fallbackTypography: {
        padding: theme.spacing(1),
    },
}));
function Toolbox({ anchorEl, onClick, origin, onClose }) {
    const classes = useStyles();
    //   console.log(anchorEl);
    const isDown = origin !== 'top';
    return (react_1.default.createElement(core_1.Popover, { open: Boolean(anchorEl), elevation: 5, 
        // className={classes.popover}
        classes: {
            paper: classes.paper,
        }, onClose: onClose, anchorEl: anchorEl, 
        // onClose={() => handleClose(index)}
        anchorOrigin: {
            vertical: origin,
            horizontal: 'center',
        }, transformOrigin: {
            vertical: origin === 'top' ? 'bottom' : 'top',
            horizontal: 'center',
        } },
        react_1.default.createElement(core_2.Box, { display: "flex" },
            react_1.default.createElement(core_1.Tooltip, { arrow: true, title: "Text", "aria-label": "text", placement: origin },
                react_1.default.createElement(core_1.IconButton, { onClick: () => {
                        onClick({ newNode: userComponents_1.Text, isDown: isDown });
                    } },
                    react_1.default.createElement(TextFields_1.default, null))),
            react_1.default.createElement(core_2.Box, { mr: 1 }),
            react_1.default.createElement(core_1.Tooltip, { arrow: true, title: "Button", "aria-label": "button", placement: origin },
                react_1.default.createElement(core_1.IconButton, { onClick: () => {
                        onClick({ newNode: userComponents_1.Button, isDown: isDown });
                    } },
                    react_1.default.createElement(Crop75_1.default, null))),
            react_1.default.createElement(core_2.Box, { mr: 1 }),
            react_1.default.createElement(core_1.Tooltip, { arrow: true, title: "Image", "aria-label": "image", placement: origin },
                react_1.default.createElement(core_1.IconButton, { onClick: () => {
                        onClick({ newNode: userComponents_1.Image, isDown: isDown });
                    } },
                    react_1.default.createElement(Image_1.default, null))),
            react_1.default.createElement(core_2.Box, { mr: 1 }),
            react_1.default.createElement(core_1.Tooltip, { arrow: true, title: "Video", "aria-label": "video", placement: origin },
                react_1.default.createElement(core_1.IconButton, { onClick: () => {
                        onClick({ newNode: userComponents_1.Video, isDown: isDown });
                    } },
                    react_1.default.createElement(YouTube_1.default, null))),
            react_1.default.createElement(core_2.Box, { mr: 1 }),
            react_1.default.createElement(core_1.Tooltip, { arrow: true, title: "Columns", "aria-label": "container", placement: origin },
                react_1.default.createElement(core_1.IconButton, { onClick: () => {
                        onClick({ newNode: userComponents_1.Container, isDown: isDown, isCanvas: true });
                    } },
                    react_1.default.createElement(ViewWeek_1.default, null))),
            react_1.default.createElement(core_2.Box, { mr: 1 }),
            react_1.default.createElement(core_1.Tooltip, { arrow: true, title: "Divider", "aria-label": "divider", placement: origin },
                react_1.default.createElement(core_1.IconButton, { onClick: () => {
                        onClick({ newNode: userComponents_1.CustomDivider, isDown: isDown });
                    } },
                    react_1.default.createElement(Remove_1.default, null))),
            react_1.default.createElement(core_2.Box, { mr: 1 }),
            react_1.default.createElement(core_1.Tooltip, { arrow: true, title: "HTML", "aria-label": "html", placement: origin },
                react_1.default.createElement(core_1.IconButton, { onClick: () => {
                        onClick({ newNode: userComponents_1.HtmlBox, isDown: isDown });
                    } },
                    react_1.default.createElement(Code_1.default, null))))));
}
exports.Toolbox = Toolbox;
//# sourceMappingURL=Toolbox.js.map