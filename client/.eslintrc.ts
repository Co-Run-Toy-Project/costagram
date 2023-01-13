module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
    "no-unused-vars":'off',
    "@typescript-eslint/no-unused-vars": ['error'],
    "no-undef":'off',
  },
  'plugins': ['tailwindcss']
}