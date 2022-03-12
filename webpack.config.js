const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = function (env, argv) {
  return {
    entry: {
      background: "./src/background/main.ts",
      popup: "./src/popup/main.ts",
      "content/baidu": "./src/content/baidu/main.ts",
      "content/tv": "./src/content/tv/main.ts",
      option: "./src/option/main.ts"
    },
    output: {
      filename: "[name]/index.js",
      path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
          include: [/src/],
          exclude: [/node_modules/],
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /.(sa|sc|c)ss$/,
          use: [
            {loader: MiniCssExtractPlugin.loader},
            {
              loader: "css-loader",
              options: {sourceMap: true}
            },
            {
              loader: "sass-loader",
              options: {sourceMap: true}
            }
          ]
        },
        {
          test: /\.ttf|eot|svg|woff|woff2$/,
          use: "url-loader"
        },
        {
          test: /\.vue$/,
          loader: "vue-loader"
        }
      ]
    },

    resolve: {
      extensions: [".vue", ".tsx", ".ts", ".js"],
      alias: {
        /*
        * for vue in popup
        * */
        "@": path.resolve(__dirname, "src")
      }
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({filename: "[name]/index.css"}),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "build"
          }
        ]
      }),
      new HtmlWebpackPlugin({
        template: "./src/popup/template/index.html",
        filename: "popup/index.html",
        inject: "body",
        chunks: ["popup"]
      }),
      new HtmlWebpackPlugin({
        template: "./src/option/template/index.html",
        filename: "option/index.html",
        inject: "body",
        chunks: ["option"]
      }),
      new VueLoaderPlugin()
    ]
  }
};
