import React, { ReactNode } from "react";
type Props = {
    defaultState?: {
        json: string;
        version: string;
    };
    children: ReactNode;
};
export interface IAppContext {
    encodedState: string;
    triggerFetchState: boolean;
    editorState: {
        json: string;
        version: string;
    } | null;
    setEditorState: React.Dispatch<{
        json: string;
        version: string;
    } | null>;
    setTriggerFetchState: React.Dispatch<React.SetStateAction<boolean>>;
    setEncoded: (state: string) => void;
}
declare const AppContext: React.Context<IAppContext>;
declare const AppContextProvider: ({ defaultState, children }: Props) => React.JSX.Element;
declare const AppContextConsumer: React.Consumer<IAppContext>;
export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
