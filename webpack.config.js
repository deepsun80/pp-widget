/* eslint-disable prefer-destructuring */
const webpack = require("webpack");
const path = require("path");
const env = require("yargs").argv.env;

const libraryName = "pp-widget";

let outputFile;
let mode;

if (env === "build") {
  mode = "production";
  outputFile = `${libraryName}.min.js`;
} else {
  mode = "development";
  outputFile = `${libraryName}.js`;
}

const config = {
  mode,
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: outputFile,
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
