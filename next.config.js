const path = require("path");
// const config = require("config");

module.exports = {
  webpack: (config) => {
    // config.resolve.alias["apis"] = path.join(__dirname, "apis");
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["context"] = path.join(__dirname, "context");
    // config.resolve.alias["javascripts"] = path.join(__dirname, "javascripts");
    config.resolve.alias["layouts"] = path.join(__dirname, "layouts");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["styles"] = path.join(__dirname, "styles");
    // config.resolve.alias["utils"] = path.join(__dirname, "utils");
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  //   exportTrailingSlash: true,
};
