const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin  } = require('awesome-typescript-loader');


const ENV = {
	PROD: 'production',
	DEV: 'development'
};

const APP_PATH = {
	MAIN: path.join(__dirname, 'src/app'),
	BUILD: path.join(__dirname, 'dist')
};


const defaultEnv = process.env.NODE_ENV;
let curEnv = defaultEnv;


/////////////////////////////////////////////////////////////////////
//config start
/////////////////////////////////////////////////////////////////////
let devServer = {
	contentBase: APP_PATH.BUILD,
    historyApiFallback: true,
	watchContentBase: true,
    stats: {
		performance: true,
		chunks: false,
		chunkModules: false,
		chunkOrigins: false,
		errors: true,
		errorDetails: false,
		hash: false,
		timings: false,
		modules: false,
		warnings: false
    },
    port: 3000
};
let entry = {
	app: APP_PATH.MAIN
};
let output = {
	filename: '[name]-[chunkhash:8].js',
	path: APP_PATH.BUILD,
	chunkFilename: '[name].[ext]'
};
let rules = [
	{
		test: /\.ts$/,
		loader: 'awesome-typescript-loader'
	}
];
let plugins = [
	new CheckerPlugin(),
	new HtmlWebpackPlugin({
		title: 'typescript+webpack',
		template: path.join(APP_PATH.MAIN, 'index.html')
	})
];
let resolve = {alias:{},extensions:['.ts','.js']};
/////////////////////////////////////////////////////////////////////
//config end
/////////////////////////////////////////////////////////////////////

function getDevelopmentConfig(){
	let config = {
		entry,output,plugins,
		module:{rules},devServer,
		resolve,
		devtool:'sourcemap',
		bail:true
	};
	return config;
}

function getProductionConfig(){
	let config = {
		entry,output,plugins,
		module:{rules},resolve
	};
	return config;
}


module.exports = function(env){
	curEnv = env||defaultEnv;
	if(curEnv === ENV.PROD){
		return getProductionConfig();
	}
	return getDevelopmentConfig();
};