const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  webpack: {
    configure: (config) => {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "host",
          remotes: {
            remote: "remote@http://localhost:3001/remoteEntry.js",
          },
          shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        })
      );
      return config;
    },
  },
};
