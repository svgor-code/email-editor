/// <reference types="react" />
export declare function Snippet({ props, parentStyle, style, children, ...rest }: {
    [x: string]: any;
    props: any;
    parentStyle: any;
    style: any;
    children: any;
}): JSX.Element;
export declare namespace Snippet {
    var craft: {
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
            settings: () => JSX.Element;
        };
        displayName: string;
        rules: {
            canMoveIn: () => boolean;
        };
    };
}
