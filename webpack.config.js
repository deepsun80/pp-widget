/* eslint-disable prefer-destructuring */
const webpack = require("webpack");
const path = require("path");

const libraryName = "pp-widget";

const config = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: `${libraryName}.min.js`,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      exclude: ["vendor/*.js"]
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};

module.exports = config;
