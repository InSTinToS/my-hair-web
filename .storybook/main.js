const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  framework: '@storybook/react',
  core: { builder: '@storybook/builder-webpack5' },
  stories: ['../src/**/*.stories.mdx', '../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode'
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@app/': path.resolve(__dirname, '../src/*')
    }

    config.resolve.plugins = [new TsconfigPathsPlugin()]

    return config
  }
}
