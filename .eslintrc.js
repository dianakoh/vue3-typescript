module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  globals: {
    $: true,
  },
  rules: {
    'no-console': process.env.VUE_APP_ENV === 'local' ? ['warn', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.VUE_APP_ENV === 'local' ? 'warn' : 'off',
    complexity: ['warn', { max: 10 }],
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    'prettier/prettier': [
      'warn',
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
    '@typescript-eslint/no-explicit-any': 'off', // error 발생으로 off처리
    '@typescript-eslint/explicit-module-boundary-types': 'off', // error 발생으로 off처리
    '@typescript-eslint/consistent-type-imports': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['object', 'builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'unknown'],
        pathGroups: [
          { pattern: 'vue*', group: 'external', position: 'before' },
          { pattern: '@hems/**', group: 'external', position: 'after' },
          { pattern: '@/**', group: 'external', position: 'after' },
          { pattern: 'hems', group: 'external', position: 'after' },
          { pattern: 'hems/**', group: 'external', position: 'after' },
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroupsExcludedImportTypes: [],
      },
    ],

    'prefer-const': [
      'warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'no-const-assign': 'error',
    'no-var': 'warn',
    'no-new-object': 'error',
    'object-shorthand': [
      'warn',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    'no-prototype-builtins': 'error',
    'prefer-object-spread': 'off', // error 발생으로 off처리
    'no-array-constructor': 'error',
    'array-callback-return': ['warn', { allowImplicit: true }],
    'prefer-destructuring': [
      'off', // 에러 발생하여 우선 off 처리
      // {
      //   VariableDeclarator: {
      //     array: false,
      //     object: true,
      //   },
      //   AssignmentExpression: {
      //     array: true,
      //     object: false,
      //   },
      // },
      // {
      //   enforceForRenamedProperties: false,
      // },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-template': 'warn',
    'template-curly-spacing': 'error',
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'func-style': ['off', 'expression'], // airbnb convention comment - TODO: enable
    'func-names': 'warn',
    'wrap-iife': ['warn', 'outside', { functionPrototypeMethods: false }],
    'no-loop-func': 'warn',
    'prefer-rest-params': 'error',
    'default-param-last': 'off', // error 발생으로 off처리
    'no-new-func': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-before-blocks': 'error',
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
        ],
      },
    ],
    'prefer-spread': 'error',
    'function-paren-newline': [
      'warn',
      // semver.satisfies(eslintPkg.version, '>= 6') ? 'multiline-arguments' : 'consistent',
    ],
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'arrow-spacing': ['error', { before: true, after: true }],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': [
      'off', // error 발생으로 off처리
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'no-confusing-arrow': [
      'off', // error 발생으로 우선 off 처리
      {
        allowParens: true,
      },
    ],
    'implicit-arrow-linebreak': ['off', 'beside'], // error 발생으로 off처리
    'no-useless-constructor': 'off', // error 발생으로 off처리
    'no-dupe-class-members': 'error',
    'class-methods-use-this': [
      'warn',
      {
        exceptMethods: [],
      },
    ],
    'import/no-duplicates': ['warn', { considerQueryString: true }], // 'no-duplicate-imports': 'error'를 좌측옵션으로 대체
    'import/no-mutable-exports': 'error',
    'import/prefer-default-export': 'warn',
    'import/first': 'warn',
    'object-curly-newline': [
      'off', // error 발생으로 off처리
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      },
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],
    'no-iterator': 'warn', // warning
    'no-restricted-syntax': [
      // warning
      'warn',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'generator-star-spacing': ['error', { before: false, after: true }],
    'dot-notation': ['warn', { allowKeywords: true }],
    'prefer-exponentiation-operator': 'error',
    'no-undef': 'warn',
    'one-var': ['error', 'never'],
    'no-multi-assign': ['error'],
    'no-plusplus': 'warn', // warning
    'operator-linebreak': ['off', 'before', { overrides: { '=': 'none' } }], // error 발생으로 off처리
    'no-unused-vars': ['off', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // error 발생으로 off처리
    'no-use-before-define': ['warn', { functions: true, classes: true, variables: true }],
    // TODO: eqeqeq: 'error', // 추후 적용
    'no-case-declarations': 'error',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
    'no-mixed-operators': [
      'error',
      {
        // the list of arithmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'nonblock-statement-body-position': ['warn', 'beside', { overrides: {} }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-else-return': ['warn', { allowElseIf: false }],
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    'space-infix-ops': 'error',
    'eol-last': ['error', 'always'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],
    'no-whitespace-before-property': 'error',
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': [
      'warn',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'block-spacing': ['error', 'always'],
    'comma-spacing': ['off', { before: false, after: true }], // error 발생으로 off처리
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['warn', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'no-trailing-spaces': [
      'warn',
      {
        skipBlankLines: true,
        ignoreComments: false,
      },
    ],
    'comma-style': [
      'off', // error 발생으로 off처리
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'comma-dangle': [
      'off', // error 발생으로 off처리
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    semi: ['error', 'always'],
    'no-new-wrappers': 'error',
    radix: 'warn',
    // 'id-length': 'error', // 코드리뷰로 판단
    camelcase: ['warn', { properties: 'never', ignoreDestructuring: false }],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
    'no-underscore-dangle': [
      'off', // error 발생으로 off처리
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    // 'no-restricted-globals': [ // 에러 발생으로 주석처리
    //   'error',
    //   {
    //     name: 'isFinite',
    //     message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    //   },
    //   {
    //     name: 'isNaN',
    //     message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    //   },
    // ].concat(confusingBrowserGlobals),
  },
};
