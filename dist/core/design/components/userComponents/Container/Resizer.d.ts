/// <reference types="react" />
export declare const Resizer: {
    ({ children, style, parentStyle, props, craftRef }: {
        children: any;
        style: any;
        parentStyle: any;
        props: any;
        craftRef: any;
    }): JSX.Element;
    craft: {
        props: {
            props: {
                containerType: number;
                xs: number;
                alignItems: string;
            };
            style: {
                borderTop: any;
                borderBottom: any;
                borderRight: any;
                borderLeft: any;
                borderRadius: number;
                backgroundImage: string;
                backgroundColor: string;
                width: string;
                height: string;
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
                borderOptions: string;
            };
        };
        displayName: string;
        related: {
            settings: () => JSX.Element;
        };
    };
};
