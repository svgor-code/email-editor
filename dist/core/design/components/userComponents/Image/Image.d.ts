export declare const Image: {
    ({ props, style, parentStyle, ...rest }: {
        [x: string]: any;
        props: any;
        style: any;
        parentStyle: any;
    }): JSX.Element;
    craft: {
        props: {
            props: {
                path: string;
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
