module.exports = {
  extends: ["eslint:recommended", "next/core-web-vitals", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "capitalized-comments": "warn",
    "no-console": "warn",
  },
  overrides: [
    {
      files: ["./*.config.{js,cjs}"],
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
