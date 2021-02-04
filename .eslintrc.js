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
    'no-shadow': 'warn',
    // Disable Prefer destructuring on arrays
    // 'prefer-destructuring': ['error', { object: false, array: false }],

    // remove max line error
    'max-len': ['error', { code: 140 }],

    //  allow restricted syntax
    // other values are "LabeledStatement", "WithStatement", ForOfStatement
    // line 33 handleMenteeProfile
    'no-restricted-syntax': [0, 'ForInStatement'],
    // no unnedded tenary
    // line 68 handleMenteeProfile
    'no-unneeded-ternary': 'off',
    //  nested tenary
    //  line 46 in Dashboard.js
    'no-nested-ternary': 'off',
    // react/jsx-closing-tag-location
    // Dashboard.js line 60
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-indent': 'off',
    'no-underscore-dangle': 'off',
    // index as key of array
    'react/no-array-index-key': 'off',
    // unused varaibles needed for testing
    'no-unused-vars': 'warn',
    // inner props declarations can get confusing
    'react/prop-types': 'warn',
    'jsx-a11y/control-has-associated-label': 'off',
  },
};
