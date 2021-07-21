const path = require("path");

module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config, {
    configType
  }) => {
    // `configType` has a value of "DEVELOPMENT" or "PRODUCTION"
    // You can change the configuration based on that.
    // "PRODUCTION" is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
