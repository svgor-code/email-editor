import React from 'react';
interface IImagesContext {
    currentImgUrl: string;
    openImageManager: boolean;
    setOpenImageManager: (open: boolean) => void;
    setImageUrl: (url: string) => void;
}
export declare const ImagesContext: React.Context<IImagesContext>;
export declare const ImagesProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
export {};
