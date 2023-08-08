"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightPanel = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@craftjs/core");
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const core_2 = require("@material-ui/core");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    settings: {
        overflowX: 'hidden',
        overflowY: 'auto',
        width: '370px',
        height: 'auto',
    },
}));
function RightPanel(_a) {
    var rest = __rest(_a, []);
    const classes = useStyles();
    const { actions, query, selected, rootNode } = (0, core_1.useEditor)((state, query) => {
        var _a;
        const currentNodeSet = state.events.selected;
        let selected;
        if (currentNodeSet && currentNodeSet.size > 0) {
            const currentNodeId = Array.from(currentNodeSet)[0];
            const customName = query.node(currentNodeId).get().data
                .custom.displayName;
            const name = query.node(currentNodeId).get().data.displayName;
            selected = {
                id: currentNodeId,
                name: customName || name,
                settings: (_a = state.nodes[currentNodeId].related) === null || _a === void 0 ? void 0 : _a.settings,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }
        return {
            selected: selected,
            rootNode: state.nodes[core_1.ROOT_NODE],
        };
    });
    const BodySettings = rootNode && rootNode.related && rootNode.related.settings ? (react_1.default.createElement(rootNode.related.settings)) : (react_1.default.createElement(react_1.default.Fragment, null));
    return (react_1.default.createElement(core_2.Box, { pb: 2, mt: 1 },
        react_1.default.createElement(core_2.Box, { display: "flex", alignItems: "center", ml: 2, mb: 2, mt: 2 },
            react_1.default.createElement(Typography_1.default, { variant: "h4" },
                selected ? selected.name : 'Body',
                " Settings")),
        react_1.default.createElement(core_2.Divider, null),
        react_1.default.createElement("div", { className: classes.settings }, selected && selected.settings ? (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(selected.settings))) : (react_1.default.createElement(react_1.default.Fragment, null, BodySettings)))));
}
exports.RightPanel = RightPanel;
//# sourceMappingURL=RightPanel.js.map