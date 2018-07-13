var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var extractCSS = new ExtractTextPlugin('css/[name].[hash:8].css');
var ExtractCSSPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');
var minify = { //压缩html中哪些东西
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true
}

module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash:8].js',
        publicPath: '/',
        // chunkFilename: "[id].chunk.js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: {
                //     loaders: {
                //         css: ExtractTextPlugin.extract({
                //             use: [{
                //                 loader: "css-loader",
                //                 options: {
                //                     minimize: true //css压缩
                //                 }
                //             }],
                //             fallback: 'vue-style-loader'
                //         })
                //     },
                //     options: {
                //         minimize: true
                //     }
                // }
            },
            {
                test: /\.css$/,
                use: [ExtractCSSPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|swf|eot|mp4|woff)$/,
                loader: 'url-loader?limit=4000&name=fonts/[name]-[hash:5].[ext]'
            },
            {
                test: /\.(png|svg|gif|jpg|ico)$/,
                use: [{
                    loader: 'url-loader?limit=4000&name=images/[name]-[hash:5].[ext]'
                }]
            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/i,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: 'assets/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin("./dist/"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            inject: true,
            minify: minify

        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"' //加载xxx.min.js
            }
        }),
        new VueLoaderPlugin(),
        // extractCSS,
        //抽离css到一个单独的文件中去
        new ExtractCSSPlugin("css/styles.css")
    ]
}