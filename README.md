<div align="center">
  <a href="[https://github.com/TempoJC/tempo-ui](https://github.com/TempoJC/tempo-ui)" rel="noopener" target="_blank">
    <img width="200" src="https://raw.githubusercontent.com/TempoJC/tempo-ui/refs/heads/master/src/assets/kawhi/kawhi_logo.svg" alt="Tempo UI logo">
  </a>
  <h1>Tempo UI</h1>
</div>

[![NPM Version](https://img.shields.io/npm/v/@jose88/tempo-ui.svg)](https://www.npmjs.com/package/@jose88/tempo-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@jose88/tempo-ui.svg)](https://www.npmjs.com/package/@jose88/tempo-ui)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@jose88/tempo-ui)](https://bundlephobia.com/package/@jose88/tempo-ui)

**tempo-ui** is a modern and lightweight React component library, built with Vite and focused on a clean design and a great developer experience. It's designed to be easily integrated into any React project.

## 🚀 Live Demo (Storybook)

Explore all the components in action in our Storybook.

**🔗 View Storybook Demo**

[DEMO LINK](https://TempoJC.github.io/tempo-ui)

## ✨ Features

- **⚛️ React Focused**: Built with React and TypeScript for robust, type-safe components.
- **⚡️ Vite Powered**: Blazing-fast development server and optimized production builds.
- **📦 Tree-shaking Ready**: Import only the components you need, keeping your bundle lean.
- **🧪 Testing with Jest**: Components are rigorously tested to ensure reliability.
- **🎨 Modular Styles**: A structured approach to managing design tokens and global styles.

## 📦 Installation

To get started with `tempo-ui` in your project, install the scoped package via your favorite package manager:

```bash
npm install @jose88/tempo-ui
# or
yarn add @jose88/tempo-ui
```

## 💡 Usage

It's easy to get started! There are two main steps to use Tempo UI components in your application:

1.  **Import the Global Stylesheet:**
    `@jose88/tempo-ui` relies on a global stylesheet for base styles and design tokens. You should import this once, typically in your main application entry file (e.g., `src/main.tsx`, `src/App.tsx`, or `src/index.tsx`).

    ```jsx
    // src/main.tsx or src/App.tsx
    import React from 'react';
    import { createRoot } from 'react-dom/client'; // Import createRoot directly
    import { StrictMode } from 'react'; // Import StrictMode directly
    import App from './App';

    // 1. Import the global stylesheet here
    import '@jose88/tempo-ui/style.css';

    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    ```

2.  **Import and Use Components:**
    Now you can import and use any component from `@jose88/tempo-ui` directly in your application.

    ```jsx
    import React from "react";
    import { Buttons, Icon, Loader } from "@jose88/tempo-ui";

    const MyAppComponent = () => (
      <div>
        <h1>Welcome to Tempo UI!</h1>

        {/* Example Button */}
        <Button label={"Default Button dark"} kind="standard" color="dark" onClick={() => alert("Button Clicked!")} />

        {/* Example Icon */}
        <Icon group="actions" name="add" onClick={() => console.log("Add Icon clicked")} />

        {/* Example Loader */}
        <Loader size="medium" />
      </div>
    );

    export default MyAppComponent;
    ```

### Optional: Shorter Imports (Alias Configuration)

For a cleaner import experience, you can configure your project's build tool (e.g., TypeScript, Vite, Webpack) to resolve `tempo-ui` to `@jose88/tempo-ui`. This allows you to use `import { Component } from 'tempo-ui';` instead of `import { Component } from '@jose88/tempo-ui';`.

#### For TypeScript Projects (`tsconfig.json`):

Add the following to your `compilerOptions.paths`:

```json
// tsconfig.json (in your consuming project)
{
  "compilerOptions": {
    "baseUrl": "./", // Ensure this matches your project's baseUrl
    "paths": {
      "tempo-ui": ["node_modules/@jose88/tempo-ui/dist/tempo-ui.es.js"],
      // The line below helps resolve sub-paths like 'tempo-ui/style.css'
      "tempo-ui/*": ["node_modules/@jose88/tempo-ui/dist/*"]
    }
  }
  // ... other tsconfig options
}
```

Once configured, you can import like this:

```tsx
// Using the alias for global styles
import "tempo-ui/style.css";
// Using the alias for components
import { Icon } from "tempo-ui";

function MyAliasedAppComponent() {
  return (
    <div>
      <Icon group="actions" name="add" />
    </div>
  );
}
```

## 🧩 Available Components

`tempo-ui` currently offers the following components, organized by their function:

- **Atoms**
  - `Buttons`: A suite of button components with different styles and functionalities (Button, ActionButton, SwitchButton).
  - `Icon`: For displaying a set of predefined SVG icons.
- **DataDisplay**
  - `Card`: A flexible content container.
- **Feedback**
  - `Loader`: An indicator for loading states.
- **Form**
  - `AlternativeField`: A generic wrapper for form fields.

# 🤝 Contributing to Tempo UI

We're thrilled you're interested in contributing to Tempo UI! This [guide](/CONTRIBUTING.md) will help you set up your development environment, understand the project structure, and navigate the contribution process.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
