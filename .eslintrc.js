module.exports = {
   env: {
      browser: true,
      es6: true,
   },
   extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "prettier",
      "prettier/react",
   ],
   globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
   },
   parser: "@typescript-eslint/parser",
   parser: "babel-eslint",
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
   },
   plugins: ["react", "@typescript-eslint", "prettier"],
   rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [
         "warn",
         {
            extension: [".jsx", ".js"],
            "import/prefer-default-export": "off",
         },
      ],
   },
};
