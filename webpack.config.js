const htmlplugins = require("html-webpack-plugin")
const copyPlugins = require("copy-webpack-plugin")

module.exports = {
  entry:"./src/main.js",
  plugins: [new htmlplugins({template: "./index.html"}),
    new copyPlugins({patterns: [{from: "css", to: "css"}]})],
  devServer: {
    historyApiFallback: true
  }
}