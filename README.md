# 🎨 tempo-ui

[![NPM](https://img.shields.io/npm/v/tempo-ui.svg)](https://www.npmjs.com/package/tempo-ui) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**tempo-ui** is a modern and lightweight React component library, built with Vite and focused on a clean design and a great developer experience. It's designed to be easily integrated into any React project, leveraging modern bundling optimizations like tree-shaking.

## 🚀 Live Demo (Storybook)

Explore all the components in action in our Storybook.

**🔗 View Storybook Demo**

_(Replace the link with your deployed Storybook URL, for example on GitHub Pages or Netlify)._

## ✨ Features

- **⚛️ React Focused**: Built with React and TypeScript for robust, type-safe components.
- **⚡️ Vite Powered**: Blazing-fast development server and optimized production builds.
- **📦 Tree-shaking Ready**: Import only the components you need, keeping your bundle lean.
- **🧪 Testing with Jest**: Components are rigorously tested to ensure reliability.
- **🎨 Modular Styles**: A structured approach to managing design tokens and global styles.

## 📦 Installation

To get started with `tempo-ui` in your project, install it via your favorite package manager:

```bash
npm install tempo-ui
# or
yarn add tempo-ui
# or
pnpm add tempo-ui
```

## 💡 Usage

It's easy to get started! First, import the global stylesheet, then import the components you need.

```tsx
import React from 'react';

+// 1. Import the library's stylesheet
+import 'tempo-ui/style.css';

+// 2. Import the components you need
+import { Buttons, Card, Icon, Loader } from 'tempo-ui';

+function MyApp() {
+  return (
+    <div>
+      <Buttons.Primary onClick={() => alert('Hello, Tempo UI!')}>
+        Primary Button
+      </Buttons.Primary>

+      <Card title="My Card">
+        <p>This is the content of the card.</p>
+      </Card>

+      <Icon name="check" />
+      <Loader />
+    </div>
+  );
+}

+export default MyApp;
```

+## 🧩 Available Components

+`tempo-ui` currently offers the following components, organized by their function:

+- **Atoms**

- - `Buttons`: A suite of button components with different styles and functionalities.
- - `Icon`: For displaying a set of predefined SVG icons.
    +- **DataDisplay**
- - `Card`: A flexible content container.
    +- **Feedback**
- - `Loader`: An indicator for loading states.
    +- **Form**
- - `AlternativeField`: A generic wrapper for form fields.

+### 🗺️ Roadmap (Coming Soon)
+We are actively working on expanding the library with more components:

+- Feedback components (`Toast`, `Spinner`).
+- Overlays (`Modal`, `Tooltip`).
+- Data Visualization components (`List`).
+- Layout components (`Grid`).

+## 🤝 Contributing

+<details>

- <summary>Click here to see the contribution guide</summary>

- `tempo-ui` is a personal project, but if you're interested in contributing, please follow these guidelines.

- ### Development Environment

- 1.  **Clone the repository:**
-      ```bash
-      git clone https://github.com/TempoJC/tempo-ui.git
-      cd tempo-ui
-      ```
- 2.  **Install dependencies:**
-      ```bash
-      npm install
-      ```
- 3.  **Start the development server (Storybook):**
-      ```bash
-      npm run storybook
-      ```
- 4.  **Run tests:**
-      ```bash
-      npm run test
-      ```
- 5.  **Build the library:**
-      ```bash
-      npm run build
-      ```
- 6.  **Linting and Formatting:**
-      ```bash
-      npm run lint # To check the code
-      npm run format # To format with Prettier
-      ```

- ### Project Structure

- The project uses an atomic-like structure to make component management scalable and maintainable.

- ```text

  ```

- tempo-ui/
- ├── src/
- │ ├── components/
- │ │ ├── Atoms/ # (e.g., Buttons, Icon)
- │ │ │ └── Buttons/ # Contains multiple button components
- │ │ ├── DataDisplay/ # (e.g., Card)
- │ │ │ └── Card/
- │ │ ├── Feedback/ # (e.g., Loader)
- │ │ ├── Form/
- │ │ └── index.ts # Exports all components
- │ ├── styles/ # Global styles and design tokens
- │ └── index.ts # Main library entry point
- ├── dist/ # Compiled output for NPM
- └── package.json
- ```
  +</details>
  ```

+## 📜 License

+This project is licensed under the MIT License - see the LICENSE file for details.
