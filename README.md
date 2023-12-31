# TS Email Editor

TS Email Editor is a robust, versatile, and user-friendly **React library** for building beautiful, interactive emails. Built with **TypeScript** and based on [ravenappdev/email-editor](https://github.com/ravenappdev/email-editor), it leverages the [Craft.js](https://craft.js.org/) framework to offer an intuitive drag-and-drop interface for email design.

The unique feature of Custom Email Editor is its seamless integration with a server for converting JSX email structures into reusable HTML templates. This provides developers and designers with the power to create visually compelling emails with minimal effort, and ensures compatibility across various email clients.

![Optional Text](example/public/email_template.png)

## Features

- **Intuitive Drag-and-Drop Interface**: Construct your email designs by dragging and dropping components onto the canvas.
- **Craft.js Foundation**: Leverage the powerful Craft.js framework for maximum flexibility and scalability.

## Getting Started

### Installation

1. Install the library using npm or yarn:

```bash
npm install --save ts-email-editor
yarn add ts-email-editor
```

2. Import it into your project:

```jsx
import EmailEditor from 'custom-email-editor';
```

3. Use it

```jsx
import React from 'react';
import { TSEmailEditor } from 'ts-email-editor';

import './App.css';

function App() {
  return (
    <div className="App">
      <EmailEditorComponent editorSsrUrl="url of a ssr server" />
    </div>
  );
}

export default App;
```

The server code can be found [here](https://github.com/svgor-code/ts-email-editor-ssr).
