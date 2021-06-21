const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: {
        content: "./src/content/index.ts",
        background: "./src/background/index.ts",
        popup: "./src/popup/index.ts"
    },
    output: {
        filename: "[name]/index.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            loader: 'ts-loader',
            include: [/src/],
            exclude: [/node_modules/],
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        },
            {
                test: /.(sa|sc|c)ss$/,

                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",

                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",

                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader' // 处理以.vue结尾的文件
            },
        ]
    },

    resolve: {
        extensions: ['.vue', '.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({filename: '[name]/index.css'}),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'build'
            }]
        }),
        new HtmlWebpackPlugin({
            template: './src/popup/public/index.html',
            filename: 'popup/index.html',
            inject: 'body',
            chunks: ["popup"]
        }),
        new VueLoaderPlugin()
    ]
}