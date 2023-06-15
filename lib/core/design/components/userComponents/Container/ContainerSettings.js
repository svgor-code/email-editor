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
exports.ContainerDefaultProps = exports.ContainerSettings = void 0;
const core_1 = require("@craftjs/core");
const react_1 = __importStar(require("react"));
const core_2 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Defaults_1 = require("../Defaults");
const ConfirmationDialog_1 = require("../../../../components/ConfirmationDialog");
const UtilComponents_1 = require("../UtilComponents");
const Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = __importDefault(require("@material-ui/core/Tab"));
const ResizerSettings_1 = require("./ResizerSettings");
const lodash_1 = __importDefault(require("lodash"));
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        padding: 2,
    },
    Accordion: {
        backgroundColor: '#e0e0e0',
    },
}));
let cnfContent = '';
function Columns({ type, handleColumns, props }) {
    const { query: { node }, } = (0, core_1.useEditor)();
    const { id } = (0, core_1.useNode)();
    const children = node(id).descendants();
    let w = 100 / type;
    const [cnfOpen, setCnfOpen] = react_1.default.useState(false);
    var normalColumnStyle = {
        border: 'thin solid #b4bec3',
        padding: 0,
        height: '4vh',
        background: '#fafafa',
        margin: 2,
        marginRight: 10,
        width: '50%',
        borderRadius: 0,
    };
    if (props.props.containerType === type) {
        normalColumnStyle['boxShadow'] = '0 2px 4px 0 rgba(0,0,0,0.2)';
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_2.Button, { onClick: () => {
                if (props.props.containerType !== type) {
                    if (props.props.containerType > type) {
                        cnfContent =
                            type === 1
                                ? 'You will lose the content of all the columns. Are you sure?'
                                : `You will lose the content of last ${props.props.containerType - type} columns. Are you sure?`;
                        setCnfOpen(true);
                    }
                    else if (props.props.containerType < type) {
                        if (props.props.containerType === 1) {
                            setCnfOpen(true);
                            cnfContent =
                                'You will lose the content of column 1. Are you sure to add new columns?';
                        }
                        else {
                            handleColumns(type);
                        }
                    }
                }
            }, style: normalColumnStyle },
            react_1.default.createElement(core_2.Box, { display: "flex", alignItems: "center", width: "100%" }, [...Array(type)].map((e, i) => {
                return (react_1.default.createElement(core_2.Box, { key: i, style: {
                        borderRight: i < type - 1 ? 'thin solid #b4bec3' : 'none',
                        width: `${w}` + '%',
                        height: '4vh',
                    } }));
            }))),
        cnfOpen && (react_1.default.createElement(ConfirmationDialog_1.ConfirmationDialog, { onYes: () => {
                setCnfOpen(false);
                handleColumns(type);
            }, onNo: () => {
                setCnfOpen(false);
            }, title: "Change Columns", content: cnfContent }))));
}
const ContainerSettings = () => {
    const { actions, query } = (0, core_1.useEditor)();
    const { id, actions: { setProp }, props, name, nodes, linkedNodes, customDisplayName, } = (0, core_1.useNode)((node) => {
        return {
            props: node.data.props,
            name: node.data.displayName,
            customDisplayName: node.data.custom.displayName,
            nodes: node.data.nodes,
            linkedNodes: node.data.linkedNodes,
        };
    });
    const classes = useStyles();
    const [tabValue, setTabValue] = (0, react_1.useState)(0);
    const handleColumns = (value) => {
        if (Object.values(linkedNodes).length) {
            let a = [...Object.values(linkedNodes)];
            let n = a.length - (value > 1 ? value : 0);
            while (n > 0 && n--) {
                let tmp = query.node(a[a.length - 1]).toNodeTree()['nodes'];
                tmp = Object.values(tmp);
                if (tmp && tmp.length && tmp[0].data && tmp[0].data.nodes) {
                    let b = [...tmp[0].data.nodes];
                    let n1 = b.length;
                    while (n1 > 0 && n1--) {
                        actions['delete'](b[b.length - 1]);
                        b.pop();
                    }
                }
                actions.setProp(a[a.length - 1], (props) => {
                    const tmp = lodash_1.default.cloneDeep(exports.ContainerDefaultProps);
                    lodash_1.default.assignIn(props, tmp);
                });
                a.pop();
            }
        }
        let a = [...nodes];
        let n = a.length;
        while (n > 0 && n--) {
            actions['delete'](a[a.length - 1]);
            a.pop();
        }
        setProp((props) => {
            props.props.containerType = value;
        });
    };
    const areaProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };
    const handleTabs = (e, newValue) => {
        setTabValue(newValue);
    };
    const getNodeId = (value) => {
        const columnsIds = query.node(id).descendants(false, 'linkedNodes');
        if (props &&
            props.props &&
            props.props.containerType > 1 &&
            columnsIds.length) {
            return columnsIds[value];
        }
        else
            return id;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(UtilComponents_1.AccordionHeader, { title: 'Basic' }),
        react_1.default.createElement(UtilComponents_1.CustomAccordion, { title: "Columns", preview: react_1.default.createElement(core_2.Box, { px: 1, bgcolor: "#f1f1f1", borderRadius: 5 },
                react_1.default.createElement(Typography_1.default, { variant: "caption", color: "textSecondary" }, props.props.containerType +
                    (props.props.containerType === 1 ? ' column' : ' columns'))), children: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(core_2.Box, { display: "flex", alignItems: "center", mt: 2, mb: 2, style: { width: 'inherit' } },
                    react_1.default.createElement(Columns, { type: 1, handleColumns: handleColumns, props: props }),
                    react_1.default.createElement(core_2.Box, { flexGrow: 1 }),
                    react_1.default.createElement(Columns, { type: 2, handleColumns: handleColumns, props: props })),
                react_1.default.createElement(core_2.Box, { display: "flex", alignItems: "center", mt: 2, mb: 2 },
                    react_1.default.createElement(Columns, { type: 3, handleColumns: handleColumns, props: props }),
                    react_1.default.createElement(core_2.Box, { flexGrow: 1 }),
                    react_1.default.createElement(Columns, { type: 4, handleColumns: handleColumns, props: props }))) }),
        props.props.containerType > 1 && (react_1.default.createElement(UtilComponents_1.CustomAccordion, { title: "Column Properties", defaultExpanded: true, children: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Tabs_1.default, { value: tabValue, onChange: handleTabs, "aria-label": "simple tabs example", variant: "scrollable", style: {
                        marginBottom: 10,
                    } }, [...Array(props.props.containerType)].map((e, i) => {
                    return (react_1.default.createElement(Tab_1.default, Object.assign({ key: i, label: `Col ${i + 1}` }, areaProps(i))));
                })),
                react_1.default.createElement(ResizerSettings_1.ResizerSettings, { id: getNodeId(tabValue) })) })),
        react_1.default.createElement(ResizerSettings_1.ResizerSettings, { id: id, isParent: true })));
};
exports.ContainerSettings = ContainerSettings;
exports.ContainerDefaultProps = {
    props: {
        containerType: 2,
        xs: 12,
        alignItems: 'center',
    },
    style: Object.assign({ backgroundImage: '', backgroundColor: '#FFFFFF00', width: '100%', height: '100%' }, Defaults_1.BORDER),
    parentStyle: Object.assign(Object.assign({}, Defaults_1.PADDING), Defaults_1.MARGIN),
    options: {
        paddingOptions: 'less',
        borderOptions: 'less',
    },
};
//# sourceMappingURL=ContainerSettings.js.map