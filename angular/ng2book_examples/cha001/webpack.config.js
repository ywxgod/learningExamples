var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        app:'./src/main/main.ts'
    },
    output:{
        path: path.join(__dirname,'dist'),
        filename: "[name].bundle.js"
    },
    module:{
        exprContextCritical: false,
        rules:[
            {
                test:/\.ts$/, 
                loader:"ts-loader",
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    }
}