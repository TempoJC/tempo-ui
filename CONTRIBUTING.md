# Contributing to Tempo UI

First off, thank you for considering contributing to Tempo UI! We appreciate your efforts to help us improve.

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

## How to Create a Component

Follow these steps to create a new component for this library:

### 1. Create the Component Files

Create a new folder for your component within `src/components/`.

If you are creating a **TSX component**, it must include at least the following files:

- **`index.ts`**: This file should export the component and its types.
  - Example:
    ```typescript
    export { default as Button } from "./Button";
    export * from "./types";
    ```
- **`[NameComponent].tsx`**: This is the main component file, named after your component (e.g., `Button.tsx`).
- **`types.ts`**: This file contains the TypeScript types for your component.
- A folder named **`__tests__`**: Inside this folder, create a test file named `[NameComponent].test.tsx`.

### 2. Export the Component

Add an export for your new component in `src/components/index.ts`.

- Example:
  ```typescript
  export * from "./Atoms/Buttons/Button";
  ```

### 3. Create Storybook Stories

Include a new Storybook file for your component in `src/stories/`. Name the file `[NameComponent].stories.tsx` (e.g., `Avatar.stories.tsx`), and it should contain the stories for your component.

### 4. Update `README.md`

Add your new component and a brief description to the "Available Components" section of the `README.md` file.

## Submitting a Pull Request

1.  Create a new branch for your feature or bug fix: `git checkout -b feature/my-awesome-feature`.
2.  Make your changes, following the coding style and conventions.
3.  Add tests for your changes.
4.  Ensure all tests and linting checks pass.
5.  Commit your changes with a descriptive commit message.
6.  Push your branch to your fork: `git push origin feature/my-awesome-feature`.
7.  Open a Pull Request to the `master` branch of the original repository.
8.  Provide a clear title and description for your PR.

---

## Publishing (for Maintainers)

This section outlines the release process for project maintainers.

---

### Release Process

1.  **Synchronize `develop` with `master` for Release Preparation**
    First, ensure your local `develop` branch is up-to-date and includes all merged Pull Requests.

    ```bash
    git checkout develop
    git pull origin develop # Make sure you have the merged PRs locally
    ```

2.  **Create a Pull Request (PR) from `develop` to `master` on GitHub**
    - This PR will represent the new version you are releasing.
    - Go to your GitHub repository.
    - Create a new PR from `develop` to `master`. The PR title **must** be `RELEASE X.X.X`, replacing `X.X.X` with the new version number.
    - Carefully review this PR. This is what will be published to npm. Once merged and published, it's very difficult to revert.
    - Merge the PR into `master`. It's common practice here to use "Squash and merge" for a cleaner `master` history with "release" commits.

3.  **Prepare and Publish the New Version to npm**
    Navigate to your local `master` branch and update it:

    ```bash
    git checkout master
    git pull origin master # Fetch the merge commit from develop to master
    ```

4.  **Verify Your npm Login**
    Ensure you are logged in with the correct npm account (`X`).

    ```bash
    npm whoami
    ```

    This command should display your username. If not, run `npm login` and correct the registry if necessary (`npm config set registry https://registry.npmjs.org/`).

5.  **Increment Your Package Version**
    It is **CRITICAL** that you increment the version in `package.json` before publishing. Given that you have version `0.1.0` in `package.json` and have just made documentation improvements (which could be considered a `patch` or `minor` if new features are also included), choose the appropriate increment.
    - If only documentation improvements and no functional changes affecting the API or adding features:

      ```bash
      npm version patch # For 0.1.0 -> 0.1.1 (for fixes or docs)
      ```

    - If there are new, backward-compatible functionalities:

      ```bash
      npm version minor # For 0.1.0 -> 0.2.0 (for new compatible features)
      ```

    This command will perform three actions:
    - Update the `version` field in your `package.json`.
    - Create a Git commit with the message "vX.Y.Z".
    - Create a Git tag with the name `vX.Y.Z`.

6.  **Build the Library for Production**
    Ensure that the `dist` folder contains the latest version, ready for publication.

    ```bash
    npm run build
    ```

7.  **Publish the Library to npm**

    ```bash
    npm publish --access public
    ```

    The `--access public` flag is necessary for your scoped package if it's the first time publishing that version or if the package is new and public. Even if you have previously published `@jose88/tempo-ui`, it's always safe to include it for public scoped packages.

8.  **Push Version Changes and Tags to GitHub**
    The `npm version` commands create commits and tags, but they do not automatically push them to your remote repository.

    ```bash
    git push origin master
    git push origin --tags
    ```

    This will synchronize the new version in your `package.json`, the version commit, and the corresponding tag in your GitHub repository.

9.  **(Optional) Publish Updated Storybook to GitHub Pages**
    If your documentation changes also affect Storybook and you want the GitHub Pages version to reflect those improvements:

    ```bash
    npm run build-storybook
    npm run deploy-storybook
    ```

That's it!
