const postCssConfig = require('../postcss.config');
const sveltePreprocess = require("svelte-preprocess");
const path = require('path');

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials', {
    name: '@storybook/addon-postcss',
    options: {
      cssLoaderOptions: {
        // When you have splitted your css over multiple files
        // and use @import('./other-styles.css')
        importLoaders: 1,
      },
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  }],
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs
    // i.e. this allows TypeScript in the Svelte documents
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes("svelte-loader")
    );
    svelteLoader.options = {
      ...svelteLoader.options,
      preprocess: sveltePreprocess({ postcss: true }),
    };

    // Return the altered config
    return config;
  },
};
