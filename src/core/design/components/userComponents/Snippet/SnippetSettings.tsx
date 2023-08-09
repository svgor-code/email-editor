import { useNode } from "@craftjs/core";
import React, { useContext } from "react";
import {
  AccordionHeader,
  MarginAccordion,
  PaddingAccordion,
} from "../UtilComponents/SettingsUtils";
import { MARGIN, PADDING } from "../Defaults";
import { Box, Button } from "@material-ui/core";
import { SnippetContext } from "../../../../../context/SnippetContext";

export const SnippetSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const { setOpenSnippetManager } = useContext(SnippetContext);

  return (
    <div>
      <Box m={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenSnippetManager(true)}
        >
          Open Snippets List
        </Button>
      </Box>
      <AccordionHeader title={"Spacing"} />
      <MarginAccordion props={props} setProp={setProp} />
      <PaddingAccordion props={props} setProp={setProp} />
    </div>
  );
};

export const SnippetDefaultProps = {
  props: null,
  parentStyle: {
    ...PADDING,
    ...MARGIN,
    // overflowWrap: "break-word"
  },
  options: {
    paddingOptions: "less",
    marginOptions: "less",
  },
};
