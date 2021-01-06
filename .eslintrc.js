module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    // removes indentation error
    // allowIndentationTabs: true,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: [2, 2, { SwitchCase: 1 }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    // PROP SHADOW ERROR IN ESLINT
    'no-shadow': [
      'error',
      {
        // setAlert, register, at register component
        // login at login component
        //  alerts at ?

        allow: ['setAlert', 'register', 'login', 'alerts', 'logout'],
      },
    ],
    // Disable Prefer destructuring on arrays
    // 'prefer-destructuring': ['error', { object: false, array: false }],
  },
};
