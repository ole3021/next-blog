const path = require("path");
// const config = require("config");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["context"] = path.join(__dirname, "context");
    config.resolve.alias["layouts"] = path.join(__dirname, "layouts");
    config.resolve.alias["libs"] = path.join(__dirname, "libs");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["styles"] = path.join(__dirname, "styles");

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  //   exportTrailingSlash: true,
};
