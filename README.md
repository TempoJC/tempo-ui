# tempo-ui

A personal React component library.

## Introduction

`tempo-ui` is a personal React component library built with a focus on a fast and efficient development experience, powered by Vite. It's designed to be easily integrated into other React projects, allowing for selective component imports and leveraging modern bundling optimizations like tree-shaking.

This library aims to provide a consistent set of UI components, developed using a combination of `.jsx` and `.tsx` for type safety where TypeScript is beneficial.

## Features

- **React-focused Development**: Pure React setup for building robust UI components.
- **Vite Powered**: Leverages Vite for an incredibly fast development server and optimized builds.
- **TypeScript Support**: Components can be written in TypeScript (`.tsx`) for enhanced type safety, alongside regular JavaScript (`.jsx`).
- **Jest for Testing**: Comprehensive unit testing of components to ensure reliability.
- **ESLint for Code Quality**: Maintains consistent code style and helps catch potential issues early.
- **Tree-shaking Ready**: Designed for selective imports, ensuring consuming applications only bundle the components they use.
- **Modular Styles**: Structured approach to managing design tokens and global styles.

## Project Structure

The project follows a modular structure designed for easy component management and optimized bundling.

¡Claro! Quieres que la representación de la estructura de tu proyecto en el README.md se muestre correctamente y sea fácil de leer en GitHub (o cualquier renderizador de Markdown).

La clave para que se vea bien es usar un bloque de código con sintaxis resaltada para archivos (a menudo tree o text, pero text es más seguro si no hay resaltado específico para tree) y asegurarte de que la indentación sea consistente.

Aquí te muestro cómo debes formatearlo dentro de tu README.md:

Markdown

# tempo-ui

A personal React component library.

## Introduction

`tempo-ui` is a personal React component library built with a focus on a fast and efficient development experience, powered by Vite. It's designed to be easily integrated into other React projects, allowing for selective component imports and leveraging modern bundling optimizations like tree-shaking.

This library aims to provide a consistent set of UI components, developed using a combination of `.jsx` and `.tsx` for type safety where TypeScript is beneficial.

## Features

- **React-focused Development**: Pure React setup for building robust UI components.
- **Vite Powered**: Leverages Vite for an incredibly fast development server and optimized builds.
- **TypeScript Support**: Components can be written in TypeScript (`.tsx`) for enhanced type safety, alongside regular JavaScript (`.jsx`).
- **Jest for Testing**: Comprehensive unit testing of components to ensure reliability.
- **ESLint for Code Quality**: Maintains consistent code style and helps catch potential issues early.
- **Tree-shaking Ready**: Designed for selective imports, ensuring consuming applications only bundle the components they use.
- **Modular Styles**: Structured approach to managing design tokens and global styles.

## Project Structure

The project follows a modular structure designed for easy component management and optimized bundling.

```text
tempo-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.test.jsx
│   │   │   └── index.js // Exports the Button component
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.test.tsx
│   │   │   └── index.ts // Exports the Card component
│   │   └── index.js // Re-exports all components for general import
│   ├── hooks/
│   │   └── useExample.js
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/ # Design System styles and tokens
│   │   ├── breakpoint-sizes.js
│   │   ├── breakpoint-sizes.test.js
│   │   ├── colors.css
│   │   ├── colors.mixins.css
│   │   ├── fonts.css
│   │   ├── foundations.css
│   │   ├── globals-no-fonts.css
│   │   ├── globals.css
│   │   ├── grid.mixins.css
│   │   ├── layers.css
│   │   ├── neu-helvetica-custom.css
│   │   ├── noto-sans-mono.css
│   │   ├── noto-sans-sc.css
│   │   ├── noto-sans-tc.css
│   │   ├── sizing.css
│   │   ├── typography.css
│   │   ├── typography.mixins.css
│   │   └── viewports.css
│   ├── assets/
│   │   └── fonts/ # Font files
│   └── index.js // Main entry point for the library
├── dist/ # Output directory for Vite build (compiled library)
├── public/ # Static assets (if needed for development or specific use cases)
├── .eslintrc.cjs # ESLint configuration for code quality
├── .prettierrc.cjs # Prettier configuration for code formatting
├── package.json # Project metadata and scripts
├── vite.config.mjs # Vite build configuration
├── jest.config.js # Jest test configuration
├── tsconfig.json # TypeScript configuration for the library
├── tsconfig.node.json # TypeScript configuration for Node.js specific files (e.g., vite.config)
└── .gitignore # Specifies intentionally untracked files to ignore
```

### Explanation of the Structure:

- **`src/components/`**: This directory houses all individual UI components. Each component resides in its own dedicated subfolder.
- **`src/components/[Component]/index.js` (or `.ts`)**: This file is crucial for enabling selective imports. It serves as the entry point for each specific component, exporting its main functionality. This allows consumers to import components like `import { Button } from 'tempo-ui';`.
- **`src/components/index.js`**: This file re-exports all individual components. While individual imports are preferred for tree-shaking, this file provides an option for bulk imports if desired (e.g., `import * as TempoUI from 'tempo-ui';`).
- **`src/hooks/`**: Directory for custom React hooks that might be exposed by the library.
- **`src/utils/`**: Directory for general utility functions not specific to components.
- **`src/styles/`**: Centralized location for the design system's styles, including global CSS, design tokens (colors, typography, sizing, breakpoints), and CSS mixins.
- **`src/assets/fonts/`**: Contains actual font files (e.g., `.woff`, `.ttf`) used in the design system.
- **`src/index.js`**: The primary entry point for the entire `tempo-ui` library. It re-exports all components, hooks, and utilities intended for public consumption.
- **`dist/`**: The output directory where Vite compiles the entire library for distribution. This is what consuming projects will import.
- **`public/`**: Contains static assets that might be served directly by Vite's development server or included in the final build if needed.
- **`.eslintrc.cjs`**: Configuration file for ESLint, ensuring consistent code style and catching potential errors.
- **`.prettierrc.cjs`**: Configuration file for Prettier, used for automatic code formatting.
- **`package.json`**: Defines the project's metadata, scripts (like `dev`, `build`, `test`), and dependencies.
- **`vite.config.mjs`**: The configuration file for Vite, detailing how the library is built, including Rollup options for code-splitting.
- **`jest.config.js`**: The configuration file for Jest, specifying how tests are run.
- **`tsconfig.json`**: The main TypeScript configuration file for the library's source code, crucial for type checking and generating declaration files (`.d.ts`).
- **`tsconfig.node.json`**: A separate TypeScript configuration file specifically for Node.js-specific files (like Vite or Jest configs) that might not be part of the main library bundle.
- **`.gitignore`**: Specifies files and directories that Git should ignore and not commit to the repository (e.g., `node_modules/`, `dist/`, `coverage/`).

## Getting Started

To get `tempo-ui` up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/tempo-ui.git](https://github.com/YOUR_GITHUB_USERNAME/tempo-ui.git)
    cd tempo-ui
    ```

    (Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)

2.  **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

3.  **Development Server:**
    To run the development server and test your components locally:

    ```bash
    npm run dev
    ```

4.  **Run Tests:**
    To execute unit tests with Jest:

    ```bash
    npm run test
    ```

5.  **Build the Library:**
    To compile the library for distribution (output in the `dist/` folder):

    ```bash
    npm run build
    ```

6.  **Linting and Formatting:**
    To check for code style and potential issues:
    ```bash
    npm run lint
    ```
    To automatically fix linting issues (where possible):
    ```bash
    npm run lint:fix
    ```

## Contributing

`tempo-ui` is a personal project. However, general best practices for contributions would involve:

- **Branching:** Using a `develop` branch for ongoing work and feature branches for new components or fixes.
- **Code Style:** Adhering to ESLint and Prettier rules.
- **Testing:** Ensuring new features/components are covered by unit tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
