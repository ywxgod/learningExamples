const path = require('path');
const webpack = require('webpack');

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
            filename: 'vue-mec.min.js',
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
        plugins:[
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: false,
                beautify: false,
                mangle: {
                    screw_ie8: true
                },
                compress: {
                    unused: true,
                    dead_code: true,
                    drop_debugger: true,
                    conditionals: true,
                    evaluate: true,
                    drop_console: true,
                    sequences: true,
                    booleans: true,
                    screw_ie8: true,
                    warnings: false
                },
                comments: false
            })
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
		config = createProdConfig();
	}
	return config;
}