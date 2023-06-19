import React from 'react';
type Props = {
    editorSsrUrl: string;
    defaultState?: {
        json: string;
        version: string;
    };
};
export declare const EmailEditorComponent: ({ defaultState, editorSsrUrl }: Props) => React.JSX.Element;
export {};
