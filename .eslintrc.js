module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.tsx', '.jsx'] },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-undef': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 0,
    'no-unused-vars': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['out/'], // This line is added to ignore the 'out' folder
};
