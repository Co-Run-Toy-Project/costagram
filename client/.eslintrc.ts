module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.ts', '.tsx', '.jsx'] },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  'plugins': ['tailwindcss']
}