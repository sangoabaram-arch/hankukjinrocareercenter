import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["approved-ui/**/*.{ts,tsx}"],
    rules: {
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([
    ".next/**",
    ".open-next/**",
    ".wrangler/**",
    ".npm-cache/**",
    "dist/**",
    "out/**",
    "*.cjs",
    "next-env.d.ts",
  ]),
]);

