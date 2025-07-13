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

The project follows a modular structure designed for easy component management and optimized bundling, categorizing components by their core functionality and complexity.

```text
tempo-ui/
├── src/
│   ├── components/
│   │   ├── Atoms/ # Basic, fundamental UI building blocks (e.g., HTML-native wrappers)
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.test.jsx
│   │   │   │   └── index.js // Exports the Button component
│   │   │   ├── Icon/
│   │   │       ├── Icon.tsx
│   │   │       ├── Icon.test.tsx
│   │   │       ├── iconSvgs.ts
│   │   │       ├── useSvgLoader.ts
│   │   │       └── index.ts // Exports the Icon component

│   │   ├── Form/ # Components related to form structure and input
│   │   │   ├── AlternativeField/ # Generic form field wrapper
│   │   │       ├── AlternativeField.jsx
│   │   │       └── index.js
│   │   ├── DataGrid/ # Components for structured data visualization
│   │   │   └── Table/ # Example: Future table component
│   │   │       └── ...
│   │   ├── Feedback/ # Components for user feedback (e.g., loaders, messages)
│   │   │   ├── Loader/
│   │   │   │   ├── Loader.jsx
│   │   │   │   └── index.js
│   │   │   └── Spinner/ # Example: Future spinner component
│   │   │       └── ...
│   │   ├── Overlays/ # Components that appear over the main content (e.g., modals, tooltips)
│   │   │   ├── Modal/ # Example: Future modal component
│   │   │   │   └── ...
│   │   │   └── Tooltip/ # Example: Future tooltip component
│   │   │       └── ...
│   │   ├── Layout/ # Components for arranging other components on the page
│   │   │   ├── Grid/ # Example: Future grid layout component
│   │   │       └── ...
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

- **`src/components/`**: This directory houses all individual UI components, now organized into functional categories to improve clarity and navigation.
  - **`Atoms/`**: Contains the most basic, fundamental UI building blocks, often wrapping native HTML elements with minimal styling. (e.g., `Button`, `Icon`, `NativeCheckbox`).
  - **`Form/`**: Houses components specifically designed for form structures and user input. (e.g., `Checkbox` (the wrapped one), `AlternativeField`, `TextField`).
  - **`DataDisplay/`**: Groups components used primarily for displaying structured data. (e.g., `Card`, `Table`, `List`).
  - **`Feedback/`**: Contains components that provide feedback to the user. (e.g., `Loader`, `Spinner`, `Toast`).
  - **`Overlays/`**: Includes components that typically appear over the main content, such as modals or tooltips. (e.g., `Modal`, `Tooltip`).
  - **`Layout/`**: Houses components responsible for arranging other components on the page. (e.g., `Grid`, `Stack`).
- **`src/components/[Category]/[Component]/index.js` (or `.ts`)**: This file is crucial for enabling selective imports. It serves as the entry point for each specific component, exporting its main functionality. This allows consumers to import components like `import { Button } from 'tempo-ui/components/Atoms/Button';` (or through the main `index.js`).
- **`src/components/index.js`**: This file re-exports all individual components from their respective categories. While individual imports are preferred for tree-shaking, this file provides an option for bulk imports if desired (e.g., `import * as TempoUI from 'tempo-ui/components';`).
- **`src/hooks/`**: Directory for custom React hooks that might be exposed by the library.
- **`src/utils/`**: Directory for general utility functions not specific to components.
- **`src/styles/`**: Centralized location for the design system's styles, including global CSS, design tokens (colors, typography, sizing, breakpoints), and CSS mixins.
- **`src/assets/fonts/`**: Contains actual font files (e.g., `.woff`, `.ttf`) used in the design system.
- **`src/index.js`**: The primary entry point for the entire `tempo-ui` library. It re-exports all components, hooks, and utilities intended for public consumption.
- **`dist/`**: The output directory where Vite compiles the entire library for distribution. This is what consuming projects will import.
- **`public/`**: Contains static assets that might be served directly by Vite's development server or included in the final use cases.
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
