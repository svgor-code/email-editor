import React, { ReactNode, createContext, useState } from "react";
import { ImagesProvider } from "./ImagesContext";
import { Editor, QueryMethods, useEditor } from "@craftjs/core";
import { QueryCallbacksFor } from "@craftjs/utils";
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
} from "../core/design/components/userComponents";
import { encodeJson } from "../core/design/utils/encryptJson";
import { RenderNode } from "../core/design/utils/RenderNode";

export interface IAppContext {
  version: string | number;
  triggerFetchState: boolean;
  editorState: string | null;
  renderEditorState: boolean;
  setEditorState: React.Dispatch<any>;
  setVersion: React.Dispatch<string>;
  getCurrentEditorState: () => string;
  setTriggerFetchState: React.Dispatch<React.SetStateAction<boolean>>;
  setRenderEditorState: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: IAppContext = {
  version: "0",
  editorState: null,
  triggerFetchState: false,
  renderEditorState: false,
  setEditorState: () => null,
  setTriggerFetchState: () => {
    throw new Error("Not in the context");
  },
  setVersion: () => null,
  getCurrentEditorState: () => {
    throw new Error("Not in the context");
  },
  setRenderEditorState: () => {
    throw new Error("Not in the context");
  },
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
  // const { query } = useEditor();
  const [triggerFetchState, setTriggerFetchState] = useState(false);
  const [version, setVersion] = useState(defaultState.version || "");
  const [editorState, setEditorState] = useState(defaultState.json || null);
  const [renderEditorState, setRenderEditorState] = useState(false);

  const getCurrentEditorState = () => { return "" };

  const getCurrentEditor = (
    query: QueryCallbacksFor<typeof QueryMethods>
  ) => {
    const json = query.serialize();
    
    setEditorState(json);
  };

  return (
    <AppContext.Provider
      value={{
        version,
        editorState,
        renderEditorState,
        triggerFetchState,
        setEditorState,
        setVersion,
        getCurrentEditorState,
        setTriggerFetchState,
        setRenderEditorState,
      }}
    >
      <Editor
        onNodesChange={(query) => {
          getCurrentEditor(query);
        }}
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
        onRender={RenderNode}
      >
        <ImagesProvider>{children}</ImagesProvider>
      </Editor>
    </AppContext.Provider>
  );
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
