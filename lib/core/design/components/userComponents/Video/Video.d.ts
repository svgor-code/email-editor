import React from "react";
export declare const Video: {
    ({ props, style, parentStyle, ...rest }: {
        [x: string]: any;
        props: any;
        style: any;
        parentStyle: any;
    }): React.JSX.Element;
    craft: {
        props: {
            props: {
                linkPath: string;
                linkTarget: string;
                src: string;
                altText: string;
            };
            style: {
                borderTop: any;
                borderBottom: any;
                borderRight: any;
                borderLeft: any;
                borderRadius: number;
                width: string;
            };
            parentStyle: {
                marginBottom: number;
                marginTop: number;
                marginRight: number;
                marginLeft: number;
                paddingTop: number;
                paddingBottom: number;
                paddingRight: number;
                paddingLeft: number;
                align: string;
                backgroundImage: string;
                backgroundColor: string;
            };
            options: {
                borderOptions: string;
                paddingOptions: string;
                marginOptions: string;
            };
            src: string;
        };
        related: {
            settings: () => React.JSX.Element;
        };
        displayName: string;
        rules: {
            canMoveIn: () => boolean;
        };
    };
};
