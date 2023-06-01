module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/jsx-runtime'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'react/no-unstable-nested-components': [
      'warn',
      {
        allowAsProps: true,
      },
    ],
  },
};
