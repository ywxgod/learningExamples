var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        app:'./src/main/main.ts'
    },
    output:{
        path: path.join(__dirname,'dist'),
        filename: "[name].bundle.js",
        chunkFilename:'[name].[ext]'
    },
    module:{
        exprContextCritical: false,
        rules:[
            {
                test:/\.ts$/, 
                loaders:["ts-loader","angular2-template-loader?keepUrl=true"],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test:/\.(html|css)$/,
                loader: 'raw-loader',
                exclude:/\.async\.(html|css)$/
            }/*,
            {
      test: /\.async\.(html|css)$/, 
      loaders: ['file?name=[name].[hash].[ext]', 'extract']
    }*/
        ]
    },
    resolve:{
        extensions:['.ts','.js','.css','.html']
    }
}