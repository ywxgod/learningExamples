/**
 * Created by wyin on 05/12 012.
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { PATHS } = require('./configConst');
const path = require('path');


module.exports = function(env){
    return [
        new HtmlWebpackPlugin({
            title: 'example-three.js',
            template: path.join(PATHS.entry, 'index.html'),
            favicon: path.join(__dirname, '../assets/favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name].[hash:8].css',
            chunkFilename: './styles/chunk-[id].[chunkhash:8].css',
        })
    ];
};