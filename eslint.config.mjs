import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedFlatConfig: "@eslint/next",
});

export default [
  {
    ignores: ["next.config.mjs", "postcss.config.mjs", "tailwind.config.ts"],
    ...compat.configs.next,
    rules: {
      ...compat.configs.next.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
