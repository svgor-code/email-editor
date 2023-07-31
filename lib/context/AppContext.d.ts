import React, { ReactNode } from "react";
interface IAppContext {
    editorState: string | null;
    setEditorState: React.Dispatch<any>;
    version: string | number;
    setVersion: React.Dispatch<string>;
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
