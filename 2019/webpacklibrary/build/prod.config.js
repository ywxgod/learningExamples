const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, '../src'),
    output: {
        filename: 'vue-mec.min.js',
        library: 'vuemec',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.join(__dirname, '../dist')
    },
    devtool: 'source-map',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals:{
        axios:{
            commonjs: 'axios',
            commonjs2: 'axios',
            umd: 'axios',
            root: 'axios'
        }
    }
};