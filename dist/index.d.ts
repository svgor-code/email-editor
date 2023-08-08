/// <reference types="react" />
type Props = {
    editorSsrUrl: string;
};
export declare const EmailEditorComponent: ({ editorSsrUrl }: Props) => JSX.Element;
export { AppContextProvider, AppContext, IAppContext, } from "./context/AppContext";
export { ImagesContext, IImagesContext } from "./context/ImagesContext";
export { SnippetContext, ISnippetContext } from "./context/SnippetContext";
