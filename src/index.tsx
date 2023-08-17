import React, { useContext, useEffect } from "react";

import { SettingsProvider } from "./context/SettingsContext";
import ViewHtmlDialog from "./core/design/preview/ViewHtmlDialog";
import ViewPreviewDialog from "./core/design/preview/ViewPreviewDialog";
import { EmailEditor as Designer } from "./core/design/EmailEditor";
import { restoreSettings } from "./utils/settings";
import AppContext from "./context/AppContext";

type Props = {
  editorSsrUrl: string;
  onSave?: () => void;
};

const settings = restoreSettings();

export const EmailEditorComponent = ({ editorSsrUrl, onSave }: Props) => {
  const { setUrlForRender } = useContext(AppContext);

  useEffect(() => {
    setUrlForRender(editorSsrUrl);
  }, []);

  return (
    <SettingsProvider settings={settings}>
      <ViewPreviewDialog />
      <Designer onSave={onSave} />
      <ViewHtmlDialog />
    </SettingsProvider>
  );
};

export {
  AppContextProvider,
  AppContext,
  IAppContext,
} from "./context/AppContext";

export { ImagesContext, IImagesContext } from "./context/ImagesContext";

export { SnippetContext, ISnippetContext } from "./context/SnippetContext";
