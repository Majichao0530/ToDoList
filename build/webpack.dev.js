const baseConfig = require("./webpack.base.js");

const merge = require("webpack-merge");

// 引入webpack插件
const webpack = require("webpack");

const devConfig = {
  mode: "development",
  // 配置devTool
  devtool: "cheap-module-eval-source-map",
  // 配置devServer
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true
  },
  // 插件
  plugins: [new webpack.HashedModuleIdsPlugin()]
};

module.exports = merge(baseConfig, devConfig);
