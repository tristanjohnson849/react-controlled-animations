import path from 'path';

export default {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials', 
    '@storybook/addon-storysource'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  }
};