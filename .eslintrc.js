module.exports = {
  env: {
    es2017: true,
    webextensions: true,
    browser: true,
    node: true
  },
  extends: ["plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"]
        ]
      },
      extensions: [".js", ".ts",".vue"]
    }
  },
  rules: {
    quotes: [1, "double"],
    "comma-dangle": [2, "never"],
    "arrow-parens": 0
  }
};
