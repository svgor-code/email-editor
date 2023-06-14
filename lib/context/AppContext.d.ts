import React from 'react';
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
declare const AppContext: React.Context<IAppContext>;
declare const AppContextProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
declare const AppContextConsumer: React.Consumer<IAppContext>;
export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
