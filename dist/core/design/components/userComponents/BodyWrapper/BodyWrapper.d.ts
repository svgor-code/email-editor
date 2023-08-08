/// <reference types="react" />
import { BodyWrapperSettings } from "./BodyWrapperSettings";
export declare function BodyWrapper({ style, id, children }: {
    style: any;
    id: any;
    children: any;
}): JSX.Element;
export declare namespace BodyWrapper {
    var craft: {
        props: {
            style: {
                backgroundColor: string;
                backgroundImage: string;
            };
        };
        related: {
            settings: typeof BodyWrapperSettings;
        };
        displayName: string;
        rules: {
            canMoveIn: () => boolean;
            canMoveOut: () => boolean;
            canDrag: () => boolean;
            canDrop: () => boolean;
        };
    };
}
