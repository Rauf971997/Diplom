module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'max-len': 'off',
      'no-param-reassign': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'react/function-component-definition': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/extensions': 'off',
      'react/prop-types': 'off',
      'linebreak-style': 'off',
      'react/state-in-constructor': 'off',
      'import/prefer-default-export': 'off',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
        },
      ],
      'no-underscore-dangle': [
        'error',
        {
          allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
        },
      ],
      'object-curly-newline': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/alt-text': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'react/no-array-index-key': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to', 'hrefLeft', 'hrefRight'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],
    },
  };
  