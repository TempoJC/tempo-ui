# Contributing to Tempo UI

First off, thank you for considering contributing to Tempo UI! It's people like you that make this project such a great tool.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior.

## Getting Started

To get the project up and running on your local machine for development and testing purposes, follow these simple steps.

### Prerequisites

- Node.js (v18 or newer)
- npm (v9 or newer)

### Installation

1.  **Fork the repository:** Start by forking the [master repository](https://github.com/TempoJC/tempo-ui) to your own GitHub account.
2.  **Clone your fork:**
    ```bash
    git clone https://github.com/TempoJC/tempo-ui
    cd tempo-ui
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Project

We use [Storybook](https://storybook.js.org/) to develop and showcase components in isolation. It's the best way to see your changes live.

- **Run dev:**

  ```bash
  npm run dev
  ```

  `http://localhost:5173`

- **Run Storybook:**

  ```bash
  npm run storybook
  ```

  This will start a development server and open Storybook in your browser at `http://localhost:6006`.

- **Run Tests:**

  ```bash
  npm run test
  ```

- **Lint and Format:**
  ```bash
  npm run lint
  npm run format
  ```

## Project Structure

The project is organized to be clean and scalable. Here is a high-level overview of the most important directories:

```
tempo-ui/
├── dist/           # Compiled output for publishing
├── src/
│   ├── assets/       # Static assets like fonts and images
│   ├── components/   # The core of the library: all UI components
│   │   ├── Atoms/
│   │   ├── ContentDisplay/
│   │   ├── Feedback/
│   │   └── ... (Categorized component folders)
│   ├── hooks/        # Custom React hooks
│   ├── stories/      # Storybook files, mirroring the components structure
│   ├── styles/       # Global styles, variables, and mixins
│   ├── types/        # Global TypeScript definitions
│   ├── utils/        # Utility functions
│   └── index.ts      # Main entry point exporting all public modules
├── package.json
└── ... (Configuration files)
```

### The `src/components` Directory

This is where all the magic happens. Components are organized into categories based on their complexity and function, inspired by Atomic Design principles.

A typical component folder looks like this:

```
.../Button/
├── __tests__/
│   └── Button.test.tsx   # Component tests
├── Button.tsx            # The component's React code
├── Button.css            # Component-specific styles
├── types.ts              # TypeScript types for the component
└── index.ts              # Export file for the component
```

When creating a new component, please follow this structure. Also, remember to create a corresponding story file in `src/stories/`.

## Submitting a Pull Request

1.  Create a new branch for your feature or bug fix: `git checkout -b feature/my-awesome-feature`.
2.  Make your changes, following the coding style and conventions.
3.  Add tests for your changes.
4.  Ensure all tests and linting checks pass.
5.  Commit your changes with a descriptive commit message.
6.  Push your branch to your fork: `git push origin feature/my-awesome-feature`.
7.  Open a Pull Request to the `master` branch of the original repository.
8.  Provide a clear title and description for your PR.

## Publishing (for Maintainers)

This section is for project maintainers.

### Release Process

1.  **Switch to the `master` branch** and ensure it's up to date.
    ```bash
    git checkout master
    git pull origin master
    ```
2.  **Update the version number** in `package.json` according to [Semantic Versioning](https://semver.org/).
3.  **Build the project:**
    ```bash
    npm run build
    ```
    This command cleans the `dist/` folder and bundles the library for production.
4.  **Log in to npm:**
    ```bash
    npm login
    ```
5.  **Publish the package:**
    ```bash
    npm publish --access public
    ```
6.  **Create a Git tag** for the new version and push it.
    ```bash
    git tag vX.Y.Z
    git push origin vX.Y.Z
    ```
7.  **Deploy Storybook** to GitHub Pages.
    ```bash
    npm run deploy-storybook
    ```
