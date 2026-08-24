import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "node_modules/",
      ".next/",
      "prisma/",
      "eslint.config.mjs",
      "next.config.mjs",
      "next.config.ts",
      "tailwind.config.ts",
      "postcss.config.js",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-useless-catch": "warn",
      "prefer-const": "warn",
    },
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  }
);
