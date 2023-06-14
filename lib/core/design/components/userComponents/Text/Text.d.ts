import React from "react";
export declare function Text({ props, style, parentStyle }: {
    props: any;
    style: any;
    parentStyle: any;
}): React.JSX.Element;
export declare namespace Text {
    var craft: {
        props: {
            props: {
                html: string;
                contentState: string;
                hideToolbar: boolean;
            };
            style: {
                height: string;
                fontFamily: string;
                borderTop: any;
                borderBottom: any;
                borderRight: any;
                borderLeft: any;
                borderRadius: number;
                paddingTop: number;
                paddingBottom: number;
                paddingRight: number;
                paddingLeft: number;
                textAlign: string;
            };
            parentStyle: {
                backgroundImage: string;
                backgroundColor: string;
                marginBottom: number;
                marginTop: number;
                marginRight: number;
                marginLeft: number;
            };
            options: {
                paddingOptions: string;
                borderOptions: string;
            };
        };
        related: {
            settings: () => React.JSX.Element;
        };
        displayName: string;
        rules: {
            canMoveIn: () => boolean;
        };
    };
}
