var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin({
    filename: 'css/[name].[hash:8].css',
    allChunks: true
});
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        vue: ['vue'],
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash:8].js',
        publicPath: '/',
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: false //css压缩
                        }
                    }],

                })
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
        new VueLoaderPlugin(),
        extractCSS,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            inject: true,
        })
    ]
}