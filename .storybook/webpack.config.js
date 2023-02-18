export default ({ config }) => {
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loader: '@storybook/source-loader',
      options: { 
        parser: 'typescript', 
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  };