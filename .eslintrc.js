module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["html", "prettier"],
  rules: {
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        // singleQuote: false,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
        jsx: "always",
        ts: "always",
        tsx: "always",
      },
    ],
  },
};
