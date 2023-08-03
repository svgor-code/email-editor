import { useEditor, useNode, Node } from "@craftjs/core";
import { Box, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";

import { SnippetDefaultProps, SnippetSettings } from "./SnippetSettings";
import { SnippetContext } from "../../../../../context/SnippetContext";
import { decodeJson } from "../../../utils/encryptJson";
import { resolver } from "../../../../../context/AppContext";

interface CraftNode {
  id: string;
  data: any;
  children?: CraftNode[];
}

export function Snippet({ props, parentStyle, style, children, ...rest }) {
  const {
    id,
    connectors: { connect },
  } = useNode();
  const { actions, query } = useEditor();
  const { currentSnippet, setCurrentSnippet } = useContext(SnippetContext);

  useEffect(() => {
    if (!currentSnippet) {
      return;
    }

    const newDecodedState = decodeJson(currentSnippet);

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

  const nodesToCraftTree = (nodes: any): CraftNode | null => {
    function buildNode(id: string): CraftNode | null {
      const node = nodes[id];
      if (node) {
        const craftNode: CraftNode = {
          id,
          data: {
            type: resolver[node.type.resolvedName],
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

    const rootId = Object.keys(nodes).find(
      (id) => nodes[id].parent === "ROOT" || !nodes[id].parent
    );
    return rootId ? buildNode(rootId) : null;
  };

  const addNodesToEditor = (
    node: CraftNode,
    parentId: string = id,
    index: number = 5
  ) => {
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

  return (
    <div ref={connect} style={parentStyle} id={id}>
      {children && children.props && children.props.children ? (
        <>{children}</>
      ) : (
        <Box
          bgcolor="#d9e7ff"
          width="100%"
          minHeight="25vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            border: "thin dashed blue",
          }}
        >
          <Typography variant="body2">Choose a snippet</Typography>
        </Box>
      )}
    </div>
  );
}

Snippet.craft = {
  props: SnippetDefaultProps,
  related: {
    settings: SnippetSettings,
  },
  displayName: "Snippet",
  rules: {
    canMoveIn: () => false,
  },
};
