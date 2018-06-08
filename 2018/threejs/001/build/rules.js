/**
 * Created by wyin on 05/12 012.
 */

const { isProd } = require('./utils');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env){
    return [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
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
        },
        {
            test: /\.s?[ac]ss$/,
            use: [
                !isProd(env)?'style-loader':MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        module:true
                    }
                },'sass-loader'
            ]
        }
    ];
};