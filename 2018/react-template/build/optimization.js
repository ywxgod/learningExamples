/**
 * Created by wyin on 05/12 012.
 */

const { isProd } = require('./utils');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function (env){
    return {
        runtimeChunk:true,
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.s?[ac]ss$/,
                    chunks: 'all',
                    enforce: true
                },
                react: {
                    name: 'react',
                    test: /node_modules\\react/,
                    chunks: 'initial',
                }
                /*,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                }*/
            }
        },
        minimizer:(_=>{
            if(!isProd(env)) return [];
            return [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    uglifyOptions:{
                        ie8:true,
                        compress: {
                            unused: true,
                            dead_code: true,
                            drop_debugger: true,
                            conditionals: true,
                            evaluate: true,
                            drop_console: true,
                            sequences: true,
                            booleans: true,
                            warnings: false
                        },
                        output: {
                            beautify: false
                        }
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ];
        })()
    }
};