module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    tsconfigRootDir: './',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'linebreak-style': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': [
      1,
      'always',
      { ignoreClassFields: true },
    ],
    'react/prop-types': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/sort-comp': 'warn',
    'import/no-named-as-default': 'off',
    'import/no-duplicates': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    camelcase: 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-unresolved': 'warn',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: false, variables: false },
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'import',
    'prettier',
    'jest',
  ],
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      'babel-eslint': ['.js', '.jsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
