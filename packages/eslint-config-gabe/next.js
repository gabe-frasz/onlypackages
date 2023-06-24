module.exports = {
  extends: ["eslint:recommended", "next/core-web-vitals", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "capitalized-comments": "warn",
    "no-console": "warn",
  },
};
