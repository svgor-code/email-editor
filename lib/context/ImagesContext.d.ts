import React from 'react';
interface IImagesContext {
    currentImgUrl: string;
    openImageManager: () => void;
    setImageUrl: (url: string) => void;
}
export declare const ImagesContext: React.Context<IImagesContext>;
export declare const ImagesProvider: ({ openImageManager, children }: {
    openImageManager: any;
    children: any;
}) => React.JSX.Element;
export {};
