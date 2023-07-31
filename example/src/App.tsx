import React from "react";
import { EmailEditorComponent, AppContextProvider } from "ts-email-editor";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppContextProvider defaultState={{
        json: "",
        version: "",
      }}>
        <EmailEditorComponent editorSsrUrl="https://ts-email-editor-server-atrkonst-gmailcom.vercel.app/api/html" />
      </AppContextProvider>
    </div>
  );
}

export default App;
