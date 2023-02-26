export default ({ config }) => {
  config.module.rules.push(...[
    {
      test: /\.stories\.tsx?$/,
      loader: '@storybook/source-loader',
      options: {
        parser: 'typescript',
      }
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
      resolve: {
        extensionAlias: {
          ".js": [".js", ".ts", ".tsx"]
        },
      }
    }
  ]);

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};