import React, { createContext, useState, useEffect, useContext } from "react";

export interface ISnippetContext {
  currentSnippet: string;
  openSnippetManager: boolean;
  setCurrentSnippet: React.Dispatch<React.SetStateAction<string>>;
  setOpenSnippetManager: (open: boolean) => void;
}

const defaultValue: ISnippetContext = {
  currentSnippet: "",
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
  const [currentSnippet, setCurrentSnippet] = useState("");
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
