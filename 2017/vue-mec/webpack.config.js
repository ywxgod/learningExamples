const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function createDevConfig(){
    return {
        entry: './index.js',
        output:{
            path: path.join(__dirname, 'dist'),
            filename: 'vue-mec.js',
            libraryTarget: 'umd'
        },
        module:{
            rules:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader:'babel-loader'
                }
            ]
        },
        devtool:'sourcemap',
        externals:{
            axios:{
                commonjs: 'axios',
                commonjs2: 'axios',
                amd: 'axios',
                root: 'axios'
            }
        },
        resolve:{
            
            extensions:['.js']
        }
    }
}

function createProdConfig(){
    return {
        entry: './index.js',
        output:{
            path: path.join(__dirname, 'dist'),
            filename: 'vue-mec.min.js',
            library: 'VueMec',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module:{
            rules:[
                {
                    test: /\.js$/,
                    include: path.join(__dirname,'src'), 
                    exclude: function(path){return path.match(/node_modules/);},
                    use: {
                        loader:'babel-loader',
                        options:{
                            presets: ['es2015','stage-0']
                        }
                    }
                }
            ]
        },
        plugins:[
            new UglifyJSPlugin()
        ],
        externals:{
            /* axios:{
                commonjs: 'axios',
                commonjs2: 'axios',
                amd: 'axios',
                root: 'axios'
            } */
        }
    }
}

module.exports = function(env){
	let config = createDevConfig();
	if(env==='production'){
		config = createProdConfig();
	}
	return config;
}