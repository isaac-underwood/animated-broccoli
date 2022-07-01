module.exports = {
    plugins: ["prettier", "@typescript-eslint"],
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
        // prettier
        "prettier/prettier": ["warn"],
        // eslint
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        // not helpful for Typescript
        "default-case": "off",
        "consistent-return": "off",
        "no-underscore-dangle": "off",
        "prefer-destructuring": "off",
        "import/extensions": "off",
        "spaced-comment": "warn",
        "no-unused-vars": "warn",
        "no-param-reassign": "warn",
        "no-case-declarations": "warn",
        // react
        "react/jsx-props-no-spreading": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react/jsx-curly-brace-presence": "warn",
        "react/self-closing-comp": "warn",
        "react/react-in-jsx-scope": "off",
        "react-hooks/exhaustive-deps": "error",
        "react/jsx-boolean-value": "error",
        // typescript
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        // jsx-a11y
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-onchange": "off",
    },
    overrides: [{
        files: ["**/*.stories.*"],
        rules: {
            "import/no-anonymous-default-export": "off",
        },
    }, ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
    },
};
