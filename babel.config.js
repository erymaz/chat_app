module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@commons': './src/commons',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
