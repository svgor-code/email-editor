import React, { useCallback, useState } from 'react';
import { SettingsProvider } from './context/SettingsContext';
import { decodeJson } from './core/design/utils/encryptJson';
import ViewHtmlDialog from './core/design/preview/ViewHtmlDialog';
import ViewPreviewDialog from './core/design/preview/ViewPreviewDialog';
import { restoreSettings } from './utils/settings';
import { EmailEditor as Designer } from './core/design/EmailEditor';

function EmailEditor() {
  const [triggerFetchState, setTriggerFetchState] = useState(false);
  const [previewState, setPreviewState] = useState(null);
  const [htmlState, setHtmlState] = useState(null);
  const [state, setState] = useState(null);
  const [mode, setMode] = useState('');

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

  const getState = useCallback(
    (obj) => {
      if (mode === 'preview') {
        setPreviewState(obj.html);
      } else if (mode === 'html') {
        setHtmlState(obj.html);
      }

      setTriggerFetchState(false);
      parseState(obj.state);
    },
    [mode]
  );

  const handlePreviewOpen = useCallback(() => {
    setMode('preview');
    setTriggerFetchState(true);
  }, []);

  const handleHtmlOpen = useCallback(() => {
    setMode('html');
    setTriggerFetchState(true);
  }, []);

  const onClose = () => {
    setMode('');
  };

  return (
    <>
      <Designer
        loadState={state ? state['json'] : ''}
        loadVersion={state ? state['version'] : ''}
        triggerFetchState={triggerFetchState}
        getState={getState}
        onPreviewOpen={handlePreviewOpen}
        onHtmlOpen={handleHtmlOpen}
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

export const TSEmailEditor = () => {
  return (
    <SettingsProvider settings={settings}>
      <EmailEditor />
    </SettingsProvider>
  );
};
