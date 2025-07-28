import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const baseConfig = compat.extends(
  "next/core-web-vitals",
  "plugin:@typescript-eslint/recommended",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
  "plugin:prettier/recommended"
);

const eslintConfig = [
  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^__TURBOPACK__" }],
      "unused-imports/no-unused-imports": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "warn",
    },
  },
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/coverage/**",
      "**/public/**",
      "**/*.stories.*",
      "tailwind.config.ts"
    ],
  },
];

export default eslintConfig;
