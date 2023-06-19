import React, { useContext, useEffect } from 'react';
import { Editor, useEditor } from '@craftjs/core';
import { Footer, RightPanel } from './components/layoutComponents';
import {
  Button,
  Container,
  Text,
  Image,
  Video,
  HtmlBox,
  CustomDivider,
  Resizer,
  BodyWrapper,
} from './components/userComponents';
import { RenderNode } from './utils/RenderNode';
import { Box, Grid } from '@material-ui/core';
import Design from './components/layoutComponents/Design';
import { makeStyles, StylesProvider, ThemeProvider } from '@material-ui/core';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// import 'react-quill/dist/quill.snow.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../assets/css/devices.min.css';
import 'braft-editor/dist/index.css';
// import 'braft-extensions/dist/color-picker.css';
import { createTheme } from '../../theme';
import SettingsContext from '../../context/SettingsContext';
import { encodeJson } from './utils/encryptJson';
import { renderHtml } from '../repo/exportHtmlRepo';

const useStyles = makeStyles(() => ({
  root: {},
  wrapper: {
    borderBottom: '1px solid #0000001f',
  },
}));

export function EmailEditor({
  loadState,
  loadVersion,
  triggerFetchState,
  getState,
  onPreviewOpen,
  onHtmlOpen,
  editorSsrUrl,
  ...rest
}) {
  const classes = useStyles();
  const { settings } = useContext(SettingsContext);

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider>
        <Grid container justifyContent="center" alignContent="center">
          <Grid item xs={12}>
            <Editor
              resolver={{
                Button,
                Container,
                Text,
                Image,
                Video,
                HtmlBox,
                CustomDivider,
                Resizer,
                BodyWrapper,
              }}
              onRender={RenderNode}>
              <Box
                className={classes.wrapper}
                display="flex"
                justifyContent="space-between"
                alignContent="stretch"
                position="relative"
                width="100%"
                height="100%">
                <Design onHtmlOpen={() => null} editorState={loadState} />
                <RightPanel />
                <Footer onPreviewOpen={onPreviewOpen} onHtmlOpen={onHtmlOpen} />
              </Box>
              <EditorSaveModule
                triggerFetchState={triggerFetchState}
                getState={getState}
                version={loadVersion}
                editorSsrUrl={editorSsrUrl}
              />
            </Editor>
          </Grid>
        </Grid>
      </StylesProvider>
    </ThemeProvider>
  );
}

function EditorSaveModule({
  triggerFetchState,
  getState,
  version,
  editorSsrUrl,
}) {
  const { query } = useEditor();

  const fetchState = async () => {
    const json = query.serialize();
    var state = encodeJson(JSON.stringify({ json: json, version: version }));

    var html = null;
    try {
      const craftNodes = JSON.parse(json);
      html = await renderHtml(craftNodes, editorSsrUrl);
    } catch (err) {
      console.log(err);
    }

    getState({
      html: html,
      state: state,
    });
  };

  if (triggerFetchState) {
    fetchState();
  }

  return null;
}

export default EmailEditor;
