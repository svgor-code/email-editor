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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snippet = void 0;
const core_1 = require("@craftjs/core");
const core_2 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const SnippetSettings_1 = require("./SnippetSettings");
const SnippetContext_1 = require("../../../../../context/SnippetContext");
const encryptJson_1 = require("../../../utils/encryptJson");
const AppContext_1 = require("../../../../../context/AppContext");
function Snippet(_a) {
    var { props, parentStyle, style, children } = _a, rest = __rest(_a, ["props", "parentStyle", "style", "children"]);
    const { id, connectors: { connect }, } = (0, core_1.useNode)();
    const { actions, query } = (0, core_1.useEditor)();
    const { currentSnippet, setCurrentSnippet } = (0, react_1.useContext)(SnippetContext_1.SnippetContext);
    (0, react_1.useEffect)(() => {
        if (!currentSnippet) {
            return;
        }
        const newDecodedState = (0, encryptJson_1.decodeJson)(currentSnippet);
        if (newDecodedState) {
            const parsedState = JSON.parse(newDecodedState);
            const nodesForApply = JSON.parse(parsedState.json);
            const craftTree = nodesToCraftTree(nodesForApply);
            if (craftTree) {
                addNodesToEditor(craftTree);
            }
            setCurrentSnippet("");
        }
    }, [currentSnippet]);
    const nodesToCraftTree = (nodes) => {
        function buildNode(id) {
            const node = nodes[id];
            if (node) {
                const craftNode = {
                    id,
                    data: {
                        type: AppContext_1.resolver[node.type.resolvedName],
                        displayName: node.displayName,
                        props: node.props,
                        isCanvas: node.isCanvas,
                        hidden: node.hidden,
                        custom: node.custom,
                    },
                    children: node.nodes.map(buildNode).filter(Boolean),
                };
                if (node.parent) {
                    craftNode.data.parent = node.parent;
                }
                return craftNode;
            }
            return null;
        }
        const rootId = Object.keys(nodes).find((id) => nodes[id].parent === "ROOT" || !nodes[id].parent);
        return rootId ? buildNode(rootId) : null;
    };
    const addNodesToEditor = (node, parentId = id, index = 5) => {
        let newIndex = index + 1;
        const { data, children } = node;
        const craftNode = query
            .parseFreshNode({
            data,
        })
            .toNode();
        actions.add(craftNode, parentId, newIndex);
        for (const child of children || []) {
            addNodesToEditor(child, craftNode.id, newIndex);
        }
    };
    return (react_1.default.createElement("div", { ref: connect, style: parentStyle, id: id }, children && children.props && children.props.children ? (react_1.default.createElement(react_1.default.Fragment, null, children)) : (react_1.default.createElement(core_2.Box, { bgcolor: "#d9e7ff", width: "100%", minHeight: "25vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", style: {
            border: "thin dashed blue",
        } },
        react_1.default.createElement(core_2.Typography, { variant: "body2" }, "Choose a snippet")))));
}
exports.Snippet = Snippet;
Snippet.craft = {
    props: SnippetSettings_1.SnippetDefaultProps,
    related: {
        settings: SnippetSettings_1.SnippetSettings,
    },
    displayName: "Snippet",
    rules: {
        canMoveIn: () => false,
    },
};
//# sourceMappingURL=Snippet.js.map