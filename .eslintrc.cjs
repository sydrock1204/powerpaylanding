module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh', 'prettier', '@typescript-eslint', 'import', 'tailwindcss'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    semi: ['warn', 'never'],
    quotes: ['warn', 'single'],
    'import/no-unresolved': 'off',
    'import/default': 'off',
    'max-lines': ['warn', { max: 120 }],
    'no-console': 'warn',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '_',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-key': 'warn',
    'react/display-name': 'off',
    'import/named': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], ['internal'], ['parent', 'index', 'sibling']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: './**',
            group: 'internal',
          },
          {
            pattern: '../**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Custom classname rule to allow only Tailwind CSS class names
    'tailwindcss/no-custom-classname': [1, { pattern: '' }],
  },
}
