module.exports = {
    extends: ['airbnb-angular'],
    settings: {
      "import/resolver": {
        typescript: {} 
      },
    },
    rules: {
    "global-require": "off",
    "import/extensions":"off"
  },
   ignorePatterns: ["dist"],
  };