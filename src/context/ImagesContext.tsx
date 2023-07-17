import React, { createContext, useState, useEffect, useContext } from 'react';

interface IImagesContext {
  currentImgUrl: string;
  openImageManager: boolean;
  setOpenImageManager: (open: boolean) => void;
  setImageUrl: (url: string) => void;
}

const defaultValue: IImagesContext = {
  currentImgUrl: '',
  openImageManager: false,
  setOpenImageManager: () => {
    throw new Error('Images context not defined');
  },
  setImageUrl: () => {
    throw new Error('Images context not defined');
  },
};

export const ImagesContext = createContext<IImagesContext>(defaultValue);

export const ImagesProvider = ({ children }) => {
  const [currentImgUrl, setCurrentImageUrl] = useState('');
  const [openImageManager, setOpenImageManager] = useState(false);

  return (
    <ImagesContext.Provider
      value={{
        currentImgUrl,
        openImageManager,
        setOpenImageManager,
        setImageUrl: setCurrentImageUrl,
      }}>
      {children}
    </ImagesContext.Provider>
  );
};
