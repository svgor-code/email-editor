import React from 'react';
import { EmailEditorComponent } from 'ts-email-editor';

import './App.css';

function App() {
  return (
    <div className="App">
      <EmailEditorComponent editorSsrUrl="https://s52jwzm6uf.execute-api.us-east-1.amazonaws.com/dev/render" />
    </div>
  );
}

export default App;
