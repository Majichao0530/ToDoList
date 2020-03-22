// 导入path模块
const path = require("path");

// 引入vue-loader的插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// 引入html-webpack的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 引入clean-webpack的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 打包入口
  entry: "./src/main.js",
  // 配置devTool

  // 配置devServer

  // 打包出口
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  // 打包规则
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.(jpg|jpeg|svg|png)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          limit: 2048
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.styl(us)?$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ]
      }
    ]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      "@": path.resolve(__dirname, "../src"),
      styles: path.resolve(__dirname, "../src/assets/styles"),
      images: path.resolve(__dirname, "../src/assets/images")
    }
  }
};
