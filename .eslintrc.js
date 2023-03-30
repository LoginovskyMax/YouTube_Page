module.exports = {
    extends: ['airbnb-angular'],
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
    "dot-notation":"off",
  },
   ignorePatterns: ["dist"],
  };