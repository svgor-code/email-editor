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
  Snippet,
} from "../core/design/components/userComponents";
import { decodeJson, encodeJson } from "../core/design/utils/encryptJson";
import { RenderNode } from "../core/design/utils/RenderNode";
import { SnippetProvider } from "./SnippetContext";
import { renderHtml } from "../core/repo/exportHtmlRepo";

type Props = {
  defaultState?: {
    json: string;
    version: string;
  };
  children: ReactNode;
};

export enum EditorMode {
  PREVIEW = "preview",
  EDIT = "edit",
  HTML = "html"
}

export interface IAppContext {
  mode: EditorMode;
  encodedState: string;
  triggerFetchState: boolean;
  editorState: { json: string; version: string } | null;
  setMode: React.Dispatch<React.SetStateAction<EditorMode>>;
  setEditorState: React.Dispatch<{ json: string; version: string } | null>;
  setTriggerFetchState: React.Dispatch<React.SetStateAction<boolean>>;
  setEncoded: (state: string) => void;
  getRenderedHtml: () => Promise<string>;
  setUrlForRender: React.Dispatch<React.SetStateAction<string>>;
}

export const resolver = {
  Button,
  Container,
  Text,
  Image,
  Video,
  HtmlBox,
  CustomDivider,
  Resizer,
  BodyWrapper,
  Snippet,
};

const defaultValue: IAppContext = {
  mode: EditorMode.PREVIEW,
  editorState: null,
  encodedState: "",
  triggerFetchState: false,
  setMode: () => {
    throw new Error("Not in the context");
  },
  setEncoded: () => {
    throw new Error("Not in the context");
  },
  getRenderedHtml: () => {
    throw new Error("Not in the context");
  },
  setEditorState: () => {
    throw new Error("Not in the context");
  },
  setTriggerFetchState: () => {
    throw new Error("Not in the context");
  },
  setUrlForRender: () => {
    throw new Error("Not in the context");
  },
};

const AppContext = createContext<IAppContext>(defaultValue);

const AppContextProvider = ({ defaultState, children }: Props) => {
  const [mode, setMode] = useState<EditorMode>(EditorMode.PREVIEW);
  const [editorState, setEditorState] = useState<{
    json: string;
    version: string;
  } | null>(defaultState || null);
  const [urlForRender, setUrlForRender] = useState("");
  const [encodedState, setEncodedState] = useState<string>("");
  const [triggerFetchState, setTriggerFetchState] = useState(true);

  const getCurrentEditor = (query: QueryCallbacksFor<typeof QueryMethods>) => {
    const json = query.serialize();

    const newState = { json: json, version: editorState?.version || "" };
    const newEncodedState = encodeJson(JSON.stringify(newState));

    setEncodedState(newEncodedState);
    setEditorState(newState);
  };

  const setEncoded = (state: string) => {
    const newDecodedState = decodeJson(state);

    if (newDecodedState) {
      const parsedState = JSON.parse(newDecodedState);

      setEditorState({ ...parsedState });
    }
  };

  const getRenderedHtml = async (): Promise<string> => {
    if (!editorState || !urlForRender) {
      return "";
    }

    const { json } = editorState;

    try {
      const craftNodes = JSON.parse(json);
      const html = await renderHtml(craftNodes, urlForRender);

      return html as string;
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  return (
    <AppContext.Provider
      value={{
        mode,
        editorState,
        encodedState,
        triggerFetchState,
        setMode,
        setEncoded,
        setEditorState,
        getRenderedHtml,
        setUrlForRender,
        setTriggerFetchState,
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
          Snippet,
        }}
        onRender={RenderNode}
      >
        <ImagesProvider>
          <SnippetProvider>{children}</SnippetProvider>
        </ImagesProvider>
      </Editor>
    </AppContext.Provider>
  );
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
