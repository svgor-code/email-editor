export declare const Button: {
    ({ props, parentStyle, style, ...rest }: {
        [x: string]: any;
        props: any;
        parentStyle: any;
        style: any;
    }): JSX.Element;
    craft: {
        props: {
            props: {
                text: string;
                path: string;
                linkTarget: string;
            };
            style: {
                borderRadius: number;
                borderTop: any;
                borderBottom: any;
                borderRight: any;
                borderLeft: any;
                size: string;
                variant: string;
                color: string;
                fontFamily: string;
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
};
