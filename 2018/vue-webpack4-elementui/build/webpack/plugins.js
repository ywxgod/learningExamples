const configConst = require('../configConst');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const glob = require('glob');
const cssnano = require("cssnano");
const DefinePlugin = webpack.DefinePlugin;


let zipCSSAssetsPlugin = new OptimizeCSSAssetsPlugin({
    cssProcessor: cssnano,
    cssProcessorOptions: {
        discardComments: {
            removeAll: true,
        }
    },
    canPrint: false
})

let purifyCSSPlugin = new PurifyCSSPlugin({
    paths: glob.sync(`${configConst.entryUrl}/**/*.vue`, { nodir: true }),
    purifyOptions:{
        info: true,
        minify: true,
        rejected: false,
        whitelist: configConst.purifyCssWhiteList
    }
});




module.exports = function(env){
    let isProd = env === 'production';
    let plugins = [
        new DefinePlugin({
            BUILD_CONST: JSON.stringify(configConst),
            BUILD_ENV: JSON.stringify(env)
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack4+vue',
            template: configConst.templateUrl,
            favicon: configConst.faviconUrl
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name]-[hash].css',
            chunkFilename: './styles/chunk-[name]-[hash].css'
        })
    ];
    if(isProd){
        plugins.push(zipCSSAssetsPlugin);
        plugins.push(purifyCSSPlugin);
    }
    return plugins;
}