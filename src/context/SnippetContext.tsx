import React, { createContext, useState } from "react";

interface ISnippet {
  id: string;
  name: string;
  content_text: string;
}

export interface ISnippetContext {
  currentSnippet: ISnippet | null;
  openSnippetManager: boolean;
  setCurrentSnippet: React.Dispatch<React.SetStateAction<ISnippet | null>>;
  setOpenSnippetManager: (open: boolean) => void;
}

const defaultValue: ISnippetContext = {
  currentSnippet: null,
  openSnippetManager: false,
  setCurrentSnippet: () => {
    throw new Error("Images context not defined");
  },
  setOpenSnippetManager: () => {
    throw new Error("Images context not defined");
  },
};

export const SnippetContext = createContext<ISnippetContext>(defaultValue);

export const SnippetProvider = ({ children }) => {
  const [currentSnippet, setCurrentSnippet] = useState<ISnippet | null>(
    defaultValue.currentSnippet
  );
  const [openSnippetManager, setOpenSnippetManager] = useState(false);

  return (
    <SnippetContext.Provider
      value={{
        currentSnippet,
        openSnippetManager,
        setOpenSnippetManager,
        setCurrentSnippet,
      }}
    >
      {children}
    </SnippetContext.Provider>
  );
};
