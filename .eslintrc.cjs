module.exports = {
  // Asegura que ESLint busque la configuración en la raíz del proyecto
  root: true,
  // Define los entornos en los que se ejecutará tu código
  env: {
    browser: true, // Para código que se ejecuta en el navegador (componentes React)
    es2021: true, // Para la sintaxis moderna de ES2021
    node: true, // Para archivos de configuración de Node.js (vite.config.mjs, jest.config.js, .eslintrc.cjs)
    jest: true, // Para que Jest globals (describe, test, expect) sean reconocidos
  },
  // Define las configuraciones extendidas
  // El orden es importante: las últimas sobrescriben a las anteriores
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  // Parser que ESLint usará para analizar tu código
  parser: "@typescript-eslint/parser",
  // Opciones del parser para JSX y módulos ES
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Habilita el soporte para JSX
    },
    ecmaVersion: "latest", // Permite la sintaxis más reciente de ECMAScript
    sourceType: "module", // Permite el uso de módulos ES
    project: ["./tsconfig.json", "./tsconfig.node.json"], // ¡Importante! Rutas a tus archivos tsconfig para linting con información de tipo
    tsconfigRootDir: __dirname, // Raíz del proyecto para tsconfig
  },
  // Plugins que ESLint usará
  plugins: [
    "react", // Plugin para reglas específicas de React
    "react-hooks", // Plugin para reglas específicas de React Hooks
    "@typescript-eslint", // Plugin para reglas específicas de TypeScript
    "react-refresh", // Para el fast refresh de Vite en desarrollo
    "prettier", // Plugin para ejecutar Prettier como una regla de ESLint
  ],
  // Reglas específicas para tu proyecto
  rules: {
    // Desactiva la necesidad de importar React en cada archivo JSX (para React 17+)
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    // Permite la exportación de componentes constantes, útil con Vite Fast Refresh
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // Puedes configurar más reglas aquí
    // Ejemplos:
    // '@typescript-eslint/explicit-module-boundary-types': 'off', // Puedes habilitarlo o deshabilitarlo según tu preferencia
    // '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Advertir sobre variables no usadas, ignorando aquellas que empiezan por _
  },
  // Configuración de settings para plugins
  settings: {
    react: {
      version: "detect", // Detecta automáticamente la versión de React
    },
    // Configuración para el resolver de importaciones si lo necesitas (por ejemplo, para alias @)
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // Always try to resolve types for CJS/MTS/MJS files
        project: "./tsconfig.json",
      },
    },
  },
  // Reglas para ignorar archivos/directorios
  ignorePatterns: ["dist/", "node_modules/", "coverage/", ".temp/"],
};
