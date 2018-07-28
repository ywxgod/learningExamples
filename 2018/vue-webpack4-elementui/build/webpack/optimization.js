const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

let uglifyjsWebpackPlugin = new UglifyJsWebpackPlugin({
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
});

module.exports = function(env){

    return {
        runtimeChunk: {
            name: "manifest",
        },
        minimizer: [uglifyjsWebpackPlugin],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.s?[ac]ss$/,
                    chunks: 'all',
                    enforce: true
                },
                elementUI: {
                    name: 'elementUI',
                    test: /node_modules\\element-ui/,
                    chunks: 'initial',
                }
            }
        },
    }
}