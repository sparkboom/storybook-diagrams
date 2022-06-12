// const util = require('util');
const rootMain = require('../../../.storybook/main');

const storybookConfig = {
  ...rootMain,

  stories: [
    ...rootMain.stories,
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed
    // console.log(util.inspect(config, { showHidden: false, depth: null, colors: true }));
    return config;
  },
};
// console.log(util.inspect(storybookConfig, { showHidden: false, depth: null, colors: true }));

module.exports = storybookConfig;
