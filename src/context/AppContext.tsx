import React, { createContext, useState } from 'react';

declare global {
  interface Window {
    __editorState: any;
    __version: string;
  }
}

interface IAppContext {
  editorState: undefined;
  setEditorState: React.Dispatch<any>;
  version: string | number;
  setVersion: React.Dispatch<string>;
}

const defaultValue: IAppContext = {
  editorState: undefined,
  setEditorState: () => null,
  version: '0',
  setVersion: () => null,
};

const AppContext = createContext<IAppContext>(defaultValue);
const editorStateArg = window.__editorState || {};
const versionArg = window.__version || '';

const AppContextProvider = ({ children }) => {
  const [editorState, setEditorState] = useState(editorStateArg);
  const [version, setVersion] = useState(versionArg);

  return (
    <AppContext.Provider
      value={{ editorState, setEditorState, version, setVersion }}>
      {children}
    </AppContext.Provider>
  );
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
