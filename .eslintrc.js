module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['import'],
  rules: {
    'no-console': process.env.VUE_APP_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.VUE_APP_ENV === 'production' ? 'warn' : 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    complexity: ['warn', { max: 10 }],
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'warn',
    'import/order': [
      'warn',
      {
        'groups': ['object', 'builtin', 'external', 'internal', ['parent', 'sibling', 'index'],
          'unknown'],
        pathGroups: [
          { pattern: 'vue*', group: 'external', position: 'before' },
          { pattern: '@/**', group: 'external', position: 'after' },
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
  globals: {
    $: true,
  },
};
