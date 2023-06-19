import React from 'react';
import { EmailEditorComponent } from 'ts-email-editor';

import './App.css';

function App() {
  return (
    <div className="App">
      <EmailEditorComponent editorSsrUrl="https://ts-email-editor-server-atrkonst-gmailcom.vercel.app" />
    </div>
  );
}

export default App;
