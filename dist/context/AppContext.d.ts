import React, { ReactNode } from "react";
import { Text, CustomDivider, BodyWrapper, Snippet } from "../core/design/components/userComponents";
type Props = {
    defaultState?: {
        json: string;
        version: string;
    };
    children: ReactNode;
};
export declare enum EditorMode {
    PREVIEW = "preview",
    EDIT = "edit",
    HTML = "html"
}
export interface IAppContext {
    mode: EditorMode;
    encodedState: string;
    triggerFetchState: boolean;
    editorState: {
        json: string;
        version: string;
    } | null;
    setMode: React.Dispatch<React.SetStateAction<EditorMode>>;
    setEditorState: React.Dispatch<{
        json: string;
        version: string;
    } | null>;
    setTriggerFetchState: React.Dispatch<React.SetStateAction<boolean>>;
    setEncoded: (state: string) => void;
    getRenderedHtml: () => Promise<string>;
    setUrlForRender: React.Dispatch<React.SetStateAction<string>>;
}
export declare const resolver: {
    Button: {
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
    Container: {
        ({ children, style, parentStyle, props }: {
            children: any;
            style: any;
            parentStyle: any;
            props: any;
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
            rules: {
                canMoveIn: (node: any, self: any) => boolean;
            };
        };
    };
    Text: typeof Text;
    Image: {
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
    Video: {
        ({ props, style, parentStyle, ...rest }: {
            [x: string]: any;
            props: any;
            style: any;
            parentStyle: any;
        }): JSX.Element;
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
                settings: () => JSX.Element;
            };
            displayName: string;
            rules: {
                canMoveIn: () => boolean;
            };
        };
    };
    HtmlBox: {
        ({ props, parentStyle, style, ...rest }: {
            [x: string]: any;
            props: any;
            parentStyle: any;
            style: any;
        }): JSX.Element;
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
                settings: () => JSX.Element;
            };
            displayName: string;
            rules: {
                canMoveIn: () => boolean;
            };
        };
    };
    CustomDivider: typeof CustomDivider;
    Resizer: {
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
    BodyWrapper: typeof BodyWrapper;
    Snippet: typeof Snippet;
};
declare const AppContext: React.Context<IAppContext>;
declare const AppContextProvider: ({ defaultState, children }: Props) => JSX.Element;
declare const AppContextConsumer: React.Consumer<IAppContext>;
export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;
