import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Box } from "@material-ui/core";
import Editor from "../../components/AceEditor";
import { CircularProgress } from "@material-ui/core";
import AppContext, { EditorMode } from "../../../context/AppContext";

const decoder = require("he");
const unescapeHTML = (htmlBody) => {
  if (htmlBody == null) {
    return null;
  }
  return decoder.decode(htmlBody);
};

function ViewHtmlDialog() {
  const [html, setHtml] = useState<string | null>(null);
  const { mode, setMode, getRenderedHtml } = useContext(AppContext);

  const setRenderedHtml = async () => {
    const resultHtml = await getRenderedHtml();
    setHtml(resultHtml);
  };

  useEffect(() => {
    setRenderedHtml();
  }, [getRenderedHtml]);

  return (
    <Dialog
      open={mode === EditorMode.HTML}
      onClose={() => setMode(EditorMode.PREVIEW)}
      fullWidth
      maxWidth="lg"
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle disableTypography>
        <Box width="100%" display="flex" alignItems="center">
          <Typography variant="h4">HTML</Typography>
          <Box flexGrow={1} />
          <IconButton onClick={() => setMode(EditorMode.PREVIEW)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {html === null ? (
          <CircularProgress />
        ) : (
          <Editor
            mode="html"
            isView={true}
            defaultValue=""
            value={unescapeHTML(html)}
            disableSyntaxCheck={true}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
export default ViewHtmlDialog;
