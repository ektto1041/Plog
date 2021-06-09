const path = require('path');

module.exports = {
  "stories": [
    "../src/Components/UI/atoms/**/story.js",
    "../src/Components/UI/molecules/**/story.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // 스토리북에서 절대 경로 alias 지정
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    return config;
  }
}