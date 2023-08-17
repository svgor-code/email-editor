import React, { useContext } from "react";
import { Footer, RightPanel } from "./components/layoutComponents";
import CloseIcon from "@material-ui/icons/Close";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  createGenerateClassName,
} from "@material-ui/core";
import Design from "./components/layoutComponents/Design";
import { makeStyles, StylesProvider, ThemeProvider } from "@material-ui/core";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../../assets/css/devices.min.css";
import "braft-editor/dist/index.css";
import { createTheme } from "../../theme";
import SettingsContext from "../../context/SettingsContext";
import AppContext, { EditorMode } from "../../context/AppContext";

const useStyles = makeStyles(() => ({
  root: {},
  wrapper: {
    borderBottom: "1px solid #0000001f",
  },
  saveBtn: {
    marginLeft: "30px",
    height: "30px",
    background: "#50B061",
    color: "#ffffff",
    border: "none",
    padding: "6px 18px",

    "&:hover": {
      background: "#50B061",
    },
  },
  backBtn: {
    marginLeft: "10px",
    height: "30px",
    background: "#3f51b5",
    color: "#ffffff",
    border: "none",
    padding: "6px 18px",

    "&:hover": {
      background: "#3f51b5",
    },
  },
}));

export function EmailEditor({ onSave }) {
  const classes = useStyles();
  const { mode, editorState, setMode } = useContext(AppContext);

  const onSaveHandler = () => {
    onSave && onSave();
    setMode(EditorMode.PREVIEW);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      fullScreen
      open={mode === EditorMode.EDIT}
      onClose={() => setMode(EditorMode.PREVIEW)}
    >
      <DialogTitle>
        <Box width="100%" display="flex" alignItems="center">
          <Typography variant="h4">Editor</Typography>
          <Box flexGrow={1} />
          <Button className={classes.saveBtn} onClick={onSaveHandler}>
            Save
          </Button>
          <Button
            className={classes.backBtn}
            onClick={() => setMode(EditorMode.PREVIEW)}
          >
            Back
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container justifyContent="center" alignContent="center">
          <Grid item xs={12}>
            <Box
              className={classes.wrapper}
              display="flex"
              justifyContent="space-between"
              alignContent="stretch"
              position="relative"
              width="100%"
              height="100%"
            >
              <Design editorState={editorState ? editorState["json"] : ""} />
              <RightPanel />
              <Footer />
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default EmailEditor;
