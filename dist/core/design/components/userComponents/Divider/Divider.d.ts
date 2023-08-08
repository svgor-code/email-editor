/// <reference types="react" />
export declare function CustomDivider({ style, parentStyle, ...rest }: {
    [x: string]: any;
    style: any;
    parentStyle: any;
}): JSX.Element;
export declare namespace CustomDivider {
    var craft: {
        props: {
            style: {
                width: string;
                height: number;
                backgroundColor: string;
            };
            parentStyle: {
                marginBottom: number;
                marginTop: number;
                marginRight: number;
                marginLeft: number;
                align: string;
                backgroundImage: string;
                backgroundColor: string;
                paddingTop: number;
                paddingBottom: number;
                paddingRight: number;
                paddingLeft: number;
            };
            options: {
                paddingOptions: string;
                borderOptions: string;
            };
        };
        displayName: string;
        related: {
            settings: () => JSX.Element;
        };
        rules: {
            canMoveIn: () => boolean;
        };
    };
}
