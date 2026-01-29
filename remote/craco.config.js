const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  webpack: {
    configure: (config) => {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remote",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/Button",
          },
          shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        })
      );
      return config;
    },
  },
};
