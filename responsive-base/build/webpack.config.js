const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer:{
        host: '0.0.0.0'
    },
    entry:{
        app: path.join(__dirname, '../src')
    },
    output:{
        path: path.join(__dirname,'../dist'),
        filename: '[name]-bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'responsive web test',
            template: path.join(__dirname, '../src/index.html')
        })
    ]
};