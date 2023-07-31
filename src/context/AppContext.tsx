import React, { ReactNode, createContext, useState } from "react";
import { ImagesProvider } from "./ImagesContext";

interface IAppContext {
  editorState: string | null;
  setEditorState: React.Dispatch<any>;
  version: string | number;
  setVersion: React.Dispatch<string>;
}

const defaultValue: IAppContext = {
  editorState: null,
  setEditorState: () => null,
  version: "0",
  setVersion: () => null,
};

const AppContext = createContext<IAppContext>(defaultValue);

const AppContextProvider = ({
  defaultState,
  children,
}: {
  defaultState?: {
    json: string;
    version: string;
  };
  children: ReactNode;
}) => {
  const [version, setVersion] = useState(defaultState.version || "");
  const [editorState, setEditorState] = useState(defaultState.json || null);

  return (
    <AppContext.Provider
      value={{ editorState, setEditorState, version, setVersion }}
    >
      <ImagesProvider>{children}</ImagesProvider>
    </AppContext.Provider>
  );
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
