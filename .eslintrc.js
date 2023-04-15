module.exports = {
    extends: [
      'airbnb-angular',
      "plugin:@typescript-eslint/eslint-recommended",
      ],
    settings: {
      "import/resolver": {
        typescript: {} 
      },
    },
    rules: {
    "global-require": "off",
    "import/extensions":"off",
    "no-empty-function":"off",
    "no-unused-expressions":"off",
    "@typescript-eslint/no-useless-constructor":"off",
    "@typescript-eslint/no-unused-vars":"off",
    "dot-notation":"off",
    "no-unused-vars":"off",
    "import/named":"off"
  },
   ignorePatterns: ["dist"],
  };