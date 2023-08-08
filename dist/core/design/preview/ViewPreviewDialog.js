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
const react_1 = __importStar(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const core_1 = require("@material-ui/core");
const Laptop_1 = __importDefault(require("@material-ui/icons/Laptop"));
const PhoneAndroid_1 = __importDefault(require("@material-ui/icons/PhoneAndroid"));
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const lab_1 = require("@material-ui/lab");
const WebAsset_1 = __importDefault(require("@material-ui/icons/WebAsset"));
const AceEditor_1 = __importDefault(require("../../components/AceEditor"));
const handlebars_1 = __importDefault(require("handlebars/dist/cjs/handlebars"));
const HtmlPreview_1 = require("./HtmlPreview");
const OfflineBolt_1 = __importDefault(require("@material-ui/icons/OfflineBolt"));
const core_2 = require("@material-ui/core");
const Alert_1 = __importDefault(require("@material-ui/lab/Alert"));
const core_3 = require("@material-ui/core");
const handleBarStringIntoObjects_1 = __importDefault(require("../utils/handleBarStringIntoObjects"));
const core_4 = require("@material-ui/core");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    appBar: {
        position: 'fixed',
        backgroundColor: '#fff',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    formLabel: {
        color: 'black',
    },
    toggleContainer: {
    // margin: theme.spacing(0, 0)
    },
    topbar: {
        backgroundColor: theme.palette.background.default,
    },
    dot: {
        height: '13px',
        width: '13px',
        borderRadius: `50%`,
        display: 'inline-block',
        marginRight: 3,
    },
    normalBorder: {
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
    },
}));
function Alert(props) {
    return react_1.default.createElement(Alert_1.default, Object.assign({ elevation: 6, variant: "filled" }, props));
}
function populateState(previewDoc) {
    let regEx = /{{[{]?(.*?)[}]?}}/g;
    let tmp = previewDoc ? previewDoc.match(regEx) || [] : [];
    let tmp1 = {};
    tmp.map((val) => {
        tmp1[val.substring(2, val.length - 2)] = '';
    });
    var str = (0, handleBarStringIntoObjects_1.default)(tmp1);
    return {
        data: str === '{}' ? '{\n\n}' : str,
        template: () => { },
        previewDoc: previewDoc,
    };
}
function ViewPreviewDialog({ previewDoc, onClose, title }) {
    const classes = useStyles();
    const [formats, setFormats] = react_1.default.useState('laptop');
    const theme = (0, core_1.useTheme)();
    const [state, setState] = react_1.default.useState(null);
    const [snackbar, setSnackbar] = (0, react_1.useState)({
        open: false,
        message: '',
        props: {},
    });
    const [dataOpen, setDataOpen] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const template = previewDoc ? handlebars_1.default.compile(previewDoc) : () => { };
        var newObj = populateState(previewDoc);
        setState({ data: newObj.data, template: template, previewDoc: previewDoc });
    }, [previewDoc]);
    const handleJsonChange = (newValue) => {
        setState(Object.assign(Object.assign({}, state), { data: newValue }));
    };
    const handleFormat = (event, newFormats) => {
        event.persist();
        if (newFormats) {
            setFormats(newFormats);
        }
    };
    const handleApply = () => {
        let f = 0;
        try {
            const data = JSON.parse(state.data);
            f = 1;
            setState(Object.assign(Object.assign({}, state), { previewDoc: state.template(data) }));
            enqueueSnackbar('Data Applied', { variant: 'success' });
        }
        catch (err) {
            enqueueSnackbar(f ? 'Incorrect Handlebars Syntax' : 'Invalid JSON Format in Data', {
                variant: 'error',
            });
        }
    };
    const handleClose = () => {
        setSnackbar(Object.assign(Object.assign({}, snackbar), { open: false, message: '' }));
    };
    const enqueueSnackbar = (message, props) => {
        setSnackbar(Object.assign(Object.assign({}, snackbar), { open: true, message: message, props: props }));
    };
    console.log(state);
    return (react_1.default.createElement(core_1.Dialog, { open: true, onClose: onClose, fullWidth: true, maxWidth: "lg", "aria-labelledby": "max-width-dialog-title" },
        react_1.default.createElement(core_1.DialogTitle, { disableTypography: true },
            react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center", width: "100%" },
                react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "center", flexGrow: 1 },
                    react_1.default.createElement(core_1.Typography, { variant: "h4", className: classes.title, color: "textPrimary" }, title ? title : 'Preview')),
                react_1.default.createElement(core_1.Box, { flexGrow: 2, display: "flex", alignItems: "center", justifyContent: "center" },
                    react_1.default.createElement(lab_1.ToggleButtonGroup, { exclusive: true, value: [formats], onChange: handleFormat, "aria-label": "previewDevices", size: "small" },
                        react_1.default.createElement(lab_1.ToggleButton, { value: "laptop", "aria-label": "laptop" },
                            react_1.default.createElement(core_1.Tooltip, { title: 'Laptop' },
                                react_1.default.createElement(Laptop_1.default, null))),
                        react_1.default.createElement(lab_1.ToggleButton, { value: "mobile", "aria-label": "mobile" },
                            react_1.default.createElement(core_1.Tooltip, { title: 'Mobile' },
                                react_1.default.createElement(PhoneAndroid_1.default, null))),
                        react_1.default.createElement(lab_1.ToggleButton, { value: "browser", "aria-label": "browser" },
                            react_1.default.createElement(core_1.Tooltip, { title: 'Browser' },
                                react_1.default.createElement(WebAsset_1.default, null)))),
                    react_1.default.createElement(core_1.Box, { mr: 1 }),
                    react_1.default.createElement(core_1.Tooltip, { title: 'Add Dynamic Data' },
                        react_1.default.createElement(core_1.IconButton, { onClick: () => {
                                setDataOpen(!dataOpen);
                            }, className: classes.normalBorder, size: "small" },
                            react_1.default.createElement(OfflineBolt_1.default, { color: dataOpen ? 'primary' : 'action' })))),
                react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                react_1.default.createElement(core_1.Box, { display: "flex", alignItems: "flexEnd" }, onClose && (react_1.default.createElement(core_1.IconButton, { onClick: onClose },
                    react_1.default.createElement(Close_1.default, null)))))),
        react_1.default.createElement(core_1.DialogContent, { dividers: true },
            react_1.default.createElement(Grid_1.default, { container: true, spacing: 1, style: {
                    backgroundColor: theme.palette.background.default,
                    height: '100%',
                    overflow: 'hidden',
                }, alignItems: "stretch" },
                dataOpen && (react_1.default.createElement(Grid_1.default, { item: true, xs: 3, style: {
                        backgroundColor: 'white',
                        paddingLeft: 25,
                        paddingRight: 25,
                    } },
                    react_1.default.createElement(core_1.Box, { mb: 1, mt: 2, display: "flex", alignItems: "center", width: "100%" },
                        react_1.default.createElement(OfflineBolt_1.default, { fontSize: "small", htmlColor: theme.palette.text.secondary, style: { marginRight: 5 } }),
                        react_1.default.createElement(core_1.Typography, { variant: "body2" }, "Dynamic Data"),
                        react_1.default.createElement(core_1.Box, { flexGrow: 1 }),
                        react_1.default.createElement(core_1.Box, { mr: 1 }),
                        react_1.default.createElement(core_1.Button, { size: "small", onClick: handleApply, style: {
                                color: theme.palette.text.secondary,
                            } }, "Apply")),
                    react_1.default.createElement(AceEditor_1.default, { mode: "json", value: state.data, onChange: handleJsonChange, height: "87%" }))),
                react_1.default.createElement(core_2.Divider, { orientation: "vertical" }),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: true, container: true, justifyContent: "center", alignItems: "center", style: {
                        height: '75vh',
                        overflowY: 'auto',
                    } }, state === null || state.previewDoc === null ? (react_1.default.createElement(core_4.CircularProgress, null)) : (react_1.default.createElement(HtmlPreview_1.HtmlPreview, { className: "", html: state.previewDoc, format: formats })))),
            react_1.default.createElement(core_3.Snackbar, { open: snackbar.open, autoHideDuration: 2000, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'left' } },
                react_1.default.createElement(Alert, { severity: snackbar['props']['variant']
                        ? snackbar['props']['variant']
                        : 'success', style: {
                        width: 250,
                    } }, snackbar['message'])))));
}
exports.default = ViewPreviewDialog;
/*

    Посмотрел код, вроде реализовано не сложно. Можно будет легко разобраться.

    Из того, что нам можно с этим сделать:

    1. Как я думаю, можно взять код данного проекта за пример и переписать полностью (копирую при этом компоненты и перенося их на typescript).

*/
//# sourceMappingURL=ViewPreviewDialog.js.map