import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../../assets/css/devices.min.css";
import "braft-editor/dist/index.css";
export declare function EmailEditor({ loadState, loadVersion, triggerFetchState, getState, onPreviewOpen, onHtmlOpen, editorSsrUrl, ...rest }: {
    [x: string]: any;
    loadState: any;
    loadVersion: any;
    triggerFetchState: any;
    getState: any;
    onPreviewOpen: any;
    onHtmlOpen: any;
    editorSsrUrl: any;
}): React.JSX.Element;
export default EmailEditor;
