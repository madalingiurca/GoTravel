const { merge } = require("webpack-merge")
const Config = require("./webpack.config");

module.exports = merge(Config, {
  mode: 'production',
});