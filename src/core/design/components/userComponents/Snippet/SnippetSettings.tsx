import { useNode } from "@craftjs/core";
import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { unescapeHTML } from "../../../utils/unescapeHtml";
import {
  AccordionHeader,
  MarginAccordion,
  PaddingAccordion,
} from "../UtilComponents/SettingsUtils";
import Editor from "../../../../components/AceEditor";
import { CustomAccordion } from "../UtilComponents/Accordion";
import { MARGIN, PADDING } from "../Defaults";
import { Box, Button } from "@material-ui/core";
import { SnippetContext } from "../../../../../context/SnippetContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular as any,
    margin: 2,
  },
}));

let isHtmlPaste = true;

export const SnippetSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [html, setHtml] = React.useState(unescapeHTML(props.props.html));
  const { setOpenSnippetManager } = useContext(SnippetContext);

  const handleHtmlChange = (value) => {
    if (isHtmlPaste) {
      isHtmlPaste = false;
      setHtml(unescapeHTML(value));
    } else {
      setHtml(value);
    }
    setProp((props) => {
      props.props.html = value;
    });
  };

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
      <AccordionHeader title={"Basic"} />
      <CustomAccordion
        defaultExpanded={null}
        title="HTML"
        children={
          <Editor
            height="400px"
            mode="html"
            defaultValue=""
            onChange={handleHtmlChange}
            onPaste={() => {
              isHtmlPaste = true;
            }}
            value={html}
            disableSyntaxCheck={true}
          ></Editor>
        }
      />
      <AccordionHeader title={"Spacing"} />
      <MarginAccordion props={props} setProp={setProp} />
      <PaddingAccordion props={props} setProp={setProp} />
    </div>
  );
};

export const SnippetDefaultProps = {
  props: {
    html: "<h4>Hello, world!</h4>",
  },
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
