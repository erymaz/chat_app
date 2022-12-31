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
          "@components": './src/components',
          '@navigation': './src/navigation',
          '@models': './src/models',
          '@contexts': './src/contexts',
          '@config': './src/config',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
