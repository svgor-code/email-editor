import React, { useCallback, useContext, useState } from "react";

import { SettingsProvider } from "./context/SettingsContext";
import { decodeJson } from "./core/design/utils/encryptJson";
import ViewHtmlDialog from "./core/design/preview/ViewHtmlDialog";
import ViewPreviewDialog from "./core/design/preview/ViewPreviewDialog";
import { EmailEditor as Designer } from "./core/design/EmailEditor";
import { restoreSettings } from "./utils/settings";
import AppContext from "./context/AppContext";

type Props = {
  editorSsrUrl: string;
};

const settings = restoreSettings();

export const EmailEditorComponent = ({ editorSsrUrl }: Props) => {
  const [mode, setMode] = useState("");

  const {
    editorState,
    triggerFetchState,
    setEditorState,
    setTriggerFetchState,
  } = useContext(AppContext);

  const [htmlState, setHtmlState] = useState(null);
  const [previewState, setPreviewState] = useState(null);

  const parseState = useCallback((stateArg) => {
    let stateJson = null;
    let stateVersion = "";

    try {
      if (stateArg) {
        const stateVal = decodeJson(stateArg);
        if (stateVal) {
          let tmp = JSON.parse(stateVal);
          stateJson = tmp["json"];
          stateVersion = tmp["version"];
        }
      }
    } catch (err) {
      const error = new Error(`Invalid Editor State.\n${err.message}`);

      error.stack = err.stack;

      return null;
    }

    setEditorState({ json: stateJson, version: stateVersion });
  }, []);

  const getState = useCallback(
    (obj) => {
      if (mode === "preview") {
        setPreviewState(obj.html);
      } else if (mode === "html") {
        setHtmlState(obj.html);
      }

      setTriggerFetchState(false);
      parseState(obj.state);
    },
    [mode]
  );

  const handlePreviewOpen = useCallback(() => {
    setMode("preview");
    setTriggerFetchState(true);
  }, []);

  const handleHtmlOpen = useCallback(() => {
    setMode("html");
    setTriggerFetchState(true);
  }, []);

  const onClose = () => {
    setMode("");
  };

  return (
    <SettingsProvider settings={settings}>
      <Designer
        loadState={editorState ? editorState["json"] : ""}
        loadVersion={editorState ? editorState["version"] : ""}
        triggerFetchState={triggerFetchState}
        getState={getState}
        onPreviewOpen={handlePreviewOpen}
        onHtmlOpen={handleHtmlOpen}
        editorSsrUrl={editorSsrUrl}
      />
      {mode === "preview" && (
        <ViewPreviewDialog
          previewDoc={previewState}
          onClose={onClose}
          title="Preview"
        />
      )}
      {mode === "html" && <ViewHtmlDialog html={htmlState} onClose={onClose} />}
    </SettingsProvider>
  );
};

export {
  AppContextProvider,
  AppContext,
  IAppContext,
} from "./context/AppContext";
