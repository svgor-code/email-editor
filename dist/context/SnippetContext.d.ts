import React from "react";
interface ISnippet {
    id: string;
    name: string;
    content_text: string;
}
export interface ISnippetContext {
    currentSnippet: ISnippet | null;
    openSnippetManager: boolean;
    setCurrentSnippet: React.Dispatch<React.SetStateAction<ISnippet | null>>;
    setOpenSnippetManager: (open: boolean) => void;
}
export declare const SnippetContext: React.Context<ISnippetContext>;
export declare const SnippetProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export {};
