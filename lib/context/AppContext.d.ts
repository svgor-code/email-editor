import React, { ReactNode } from "react";
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
declare const AppContext: React.Context<IAppContext>;
declare const AppContextProvider: ({ defaultState, children, }: {
    defaultState?: {
        json: string;
        version: string;
    };
    children: ReactNode;
}) => React.JSX.Element;
declare const AppContextConsumer: React.Consumer<IAppContext>;
export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
