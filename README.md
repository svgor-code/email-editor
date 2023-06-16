# TS Email Editor

TS Email Editor is a robust, versatile, and user-friendly **React library** for building beautiful, interactive emails. Built with **TypeScript** and based on [ravenappdev/email-editor](https://github.com/ravenappdev/email-editor), it leverages the [Craft.js](https://craft.js.org/) framework to offer an intuitive drag-and-drop interface for email design.

The unique feature of Custom Email Editor is its seamless integration with a server for converting JSX email structures into reusable HTML templates. This provides developers and designers with the power to create visually compelling emails with minimal effort, and ensures compatibility across various email clients.


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

2. Configure
Add an environment variable `REACT_APP_TS_EMAIL_EDITOR_SSR` to your project. This variable should point to the URL of your server responsible for server-side rendering.

```bash
REACT_APP_TS_EMAIL_EDITOR_SSR=https://your-server-url.com
```

```jsx
const url = `${process.env.REACT_APP_TS_EMAIL_EDITOR_SSR}/api/html`;
```

The server code can be found [here](https://github.com/svgor-code/ts-email-editor-ssr).

3. Import it into your project:

```jsx
import EmailEditor from 'custom-email-editor';
```

4. Use it

```jsx
import React from 'react';
import { TSEmailEditor } from 'ts-email-editor';

import './App.css';

function App() {
  return (
    <div className="App">
      <TSEmailEditor />
    </div>
  );
}

export default App;
```
