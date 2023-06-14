import React, { useCallback, useEffect } from 'react';
import { SettingsProvider } from './context/SettingsContext';
import useIsMountedRef from './hooks/useIsMountedRef';
import { decodeJson } from './core/design/utils/encryptJson';
import ViewHtmlDialog from './core/design/preview/ViewHtmlDialog';
import ViewPreviewDialog from './core/design/preview/ViewPreviewDialog';
import { restoreSettings } from './utils/settings';
import { EmailEditor as Designer } from './core/design/EmailEditor';

const PARENT_URL =
  window.location !== window.parent.location
    ? document.referrer
    : document.location.href;

type TSEmailEditorProps = {
  text?: string;
};

function EmailEditor() {
  const isMountedRef = useIsMountedRef();
  const [state, setState] = React.useState(null);
  const [triggerFetchState, setTriggerFetchState] = React.useState(false);
  const [previewState, setPreviewState] = React.useState(null);
  const [htmlState, sethtmlState] = React.useState(null);
  const [mode, setMode] = React.useState('');

  const parseState = useCallback((stateArg) => {
    var stateJson = null;
    var stateVersion = '';
    try {
      if (stateArg) {
        const stateVal = decodeJson(stateArg);
        if (stateVal) {
          var tmp = JSON.parse(stateVal);
          stateJson = tmp['json'];
          stateVersion = tmp['version'];
        }
      }
    } catch (err) {
      const error = new Error(`Invalid Editor State.\n${err.message}`);
      error.stack = err.stack;
      console.log(error);
      return null;
    }
    setState({ json: stateJson, version: stateVersion });
  }, []);

  const getState = (obj) => {
    postMessage('savedState', obj);
    if (mode === 'preview') {
      setPreviewState(obj.html);
    } else if (mode === 'html') {
      sethtmlState(obj.html);
    }
    setTriggerFetchState(false);
  };

  const receiveMessage = useCallback(
    (event) => {
      if (!PARENT_URL.includes(event.origin)) return;
      const message = event.data.message;
      switch (message) {
        case 'loadEditor':
          parseState(event.data.value);
          postMessage('editorLoaded', true);
          break;
        case 'fetchState':
          setTriggerFetchState(true);
          break;
        default:
      }
    },
    [parseState]
  );

  useEffect(() => {
    window.addEventListener('message', receiveMessage, false);
  }, [isMountedRef, receiveMessage]);

  const onClose = () => {
    setMode('');
  };

  const onPreviewOpen = () => {
    // postMessage("previewOpen", true);
    setMode('preview');
    setTriggerFetchState(true);
  };

  function postMessage(type, value) {
    window.parent.postMessage({ message: type, value: value }, PARENT_URL);
  }

  const onHtmlOpen = () => {
    // postMessage("htmlOpen", true);
    setMode('html');
    setTriggerFetchState(true);
  };

  console.log(state);

  return (
    <>
      <Designer
        loadState={""}
        loadVersion={"0"}
        triggerFetchState={triggerFetchState}
        getState={getState}
        onPreviewOpen={onPreviewOpen}
        onHtmlOpen={onHtmlOpen}
      />
      {mode === 'preview' && (
        <ViewPreviewDialog
          previewDoc={previewState}
          onClose={onClose}
          title="Preview"
        />
      )}
      {mode === 'html' && <ViewHtmlDialog html={htmlState} onClose={onClose} />}
    </>
  );
}

const settings = restoreSettings();

export const TSEmailEditor = ({ text }: TSEmailEditorProps) => {
  return (
    <SettingsProvider settings={settings}>
      <EmailEditor />
    </SettingsProvider>
  );
};
