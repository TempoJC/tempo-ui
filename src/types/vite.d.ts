/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  // Declare the glob property here
  glob: <T = unknown>(
    pattern: string,
    options?: { eager?: boolean; as?: string },
  ) => Record<string, () => Promise<T>> | Record<string, T>;
  globEager: <T = unknown>(pattern: string, options?: { as?: string }) => Record<string, T>; // deprecated in Vite 3+, but might still be in your code
}
