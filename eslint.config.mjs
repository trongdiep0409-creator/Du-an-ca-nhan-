import { config as createConfig } from "@vercel/next-eslint-plugin-ts";
import next from "@vercel/eslint-plugin-next";

export default [
  ...(next.configs?.["app-dir"] ?? []),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
