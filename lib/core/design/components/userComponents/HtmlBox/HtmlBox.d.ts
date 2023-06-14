import React from 'react';
export declare const HtmlBox: {
    ({ props, parentStyle, style, ...rest }: {
        [x: string]: any;
        props: any;
        parentStyle: any;
        style: any;
    }): React.JSX.Element;
    craft: {
        props: {
            props: {
                html: string;
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
            };
            options: {
                paddingOptions: string;
                marginOptions: string;
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
};
