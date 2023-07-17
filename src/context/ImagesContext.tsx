import React, { createContext, useState, useEffect, useContext } from 'react';

interface IImagesContext {
  currentImgUrl: string;
  openImageManager: () => void;
  setImageUrl: (url: string) => void;
}

const defaultValue: IImagesContext = {
  currentImgUrl: '',
  openImageManager: () => {
    throw new Error('Images context not defined');
  },
  setImageUrl: () => {
    throw new Error('Images context not defined');
  },
};

export const ImagesContext = createContext<IImagesContext>(defaultValue);

export const ImagesProvider = ({ openImageManager, children }) => {
  const [currentImgUrl, setCurrentImageUrl] = useState('');

  return (
    <ImagesContext.Provider
      value={{
        currentImgUrl,
        openImageManager,
        setImageUrl: setCurrentImageUrl,
      }}>
      {children}
    </ImagesContext.Provider>
  );
};
