const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

function createDevConfig(){
    return {
        entry: './index.js',
        output:{
            path: path.join(__dirname, 'dist'),
            filename: 'vue-mec.js',
            library: 'mec',
            libraryTarget: 'umd'
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
        devtool:'sourcemap',
        externals:{
            lodash:{
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_'
            },
            axios:{
                commonjs: 'axios',
                commonjs2: 'axios',
                amd: 'axios',
                root: 'axios'
            }
        }
    }
}

function createProdConfig(){
    return {
        entry: './index.js',
        output:{
            path: path.join(__dirname, 'dist'),
            filename: 'vue-mec.js',
            library: 'vue-mec',
            libraryTarget: 'umd'
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
            lodash:{
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_'
            },
            axios:{
                commonjs: 'axios',
                commonjs2: 'axios',
                amd: 'axios',
                root: 'axios'
            }
        }
    }
}

module.exports = function(env){
	let config = createDevConfig();
	if(env==='production'){
        console.log('production');
		config = createProdConfig();
	}
	return config;
}