/**
 * Created by wyin on 05/12 012.
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { PATHS,ENV,URLS } = require('./configConst');
const path = require('path');


module.exports = function(env){
    return [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify(ENV),
            URLS: JSON.stringify(URLS)
        }),
        new HtmlWebpackPlugin({
            template: path.join(PATHS.entry, 'index.html'),
            favicon: path.join(__dirname, '../assets/favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name].[hash:8].css',
            chunkFilename: './styles/chunk-[id].[chunkhash:8].css',
        })
    ];
};