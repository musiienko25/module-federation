const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto";
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remote",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/Button",
          },
          shared: { 
            react: { singleton: true, requiredVersion: false, eager: true }, 
            "react-dom": { singleton: true, requiredVersion: false, eager: true } 
          },
        })
      );
      return config;
    },
  },
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },
};
