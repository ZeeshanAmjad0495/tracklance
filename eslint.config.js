import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import eslintParserTs from "@typescript-eslint/parser";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    languageOptions: {
      parser: eslintParserTs,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTs,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-misused-promises": "error",
    },
  },
];
