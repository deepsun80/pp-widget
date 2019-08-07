/* eslint-disable prefer-destructuring */
const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const libraryName = "ppWidget";

const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
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
      exclude: ["node_modules.ppWidget.min.js", "vendor/*.js"]
    })
  ],
  optimization: {
    namedChunks: true,
    minimize: true,
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "node_modules",
          chunks: "all"
        }
      }
    }
  },
  devServer: {
    hot: true,
    contentBase: "./dist",
    port: 5000
  }
};

module.exports = function(env = {}) {
  if (env.runAnalyzer) {
    config.plugins.push(
      new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: true })
    );
  }
  return config;
};
