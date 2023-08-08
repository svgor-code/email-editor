import React from "react";
export interface ISnippetContext {
    currentSnippet: string;
    openSnippetManager: boolean;
    setCurrentSnippet: React.Dispatch<React.SetStateAction<string>>;
    setOpenSnippetManager: (open: boolean) => void;
}
export declare const SnippetContext: React.Context<ISnippetContext>;
export declare const SnippetProvider: ({ children }: {
    children: any;
}) => JSX.Element;
