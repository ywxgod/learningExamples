const configConst = require('../configConst');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = function(env){
    return [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        },
        {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /.(jpg|jpeg|gif|bmp|png|ico)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    publicPath: '../',
                    name: './images/[name]-[hash:8].[ext]'
                }
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10240,
                publicPath: '../',
                name: './media/[name].[hash:8].[ext]'
            }
        },
        {
            test: /\.(svg|eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '../',
                    name: './fonts/[name].[ext]'
                }
            }
        }
    ]
}