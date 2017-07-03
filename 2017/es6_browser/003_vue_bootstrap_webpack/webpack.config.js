const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


const VERSION = {
	DEV: 'development',
	PROD: 'production'
};
const PATHS = {
	BUILD: path.join(__dirname,'./dist'),
	MAIN: path.join(__dirname, './src/app'),
	VUE_DEV: 'vue/dist/vue.js',
	VUE_PROD: 'vue/dist/vue.min.js'
};

let env = null;
let exclude_fun = (pattern)=>{return (path)=>{return path.match(pattern);}};
let isDevelopment = ()=>{return env===VERSION.DEV;}



//////////////////////////////////////////////////////////////////////
//config start
//////////////////////////////////////////////////////////////////////
let devServer = {
	contentBase: PATHS.BUILD,
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
	app: PATHS.MAIN
};
let output = {
	path: PATHS.BUILD,
	filename: '[name]-[chunkhash:8].js',
	chunkFilename: '[name]-[chunkhas:8].[ext]'
};
let rules = [
	{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: exclude_fun(/node_modules/)
	},
	{
		test: /\.s?css$/,
		use: ExtractTextWebpackPlugin.extract({
			fallback: 'style-loader',
			use: ['css-loader','sass-loader']
		})
	},
	{
		test: /\.vue$/,
		exclude: exclude_fun(/node_modules/),
		use: {
			loader: 'vue-loader',
			options: {extractCss:true}
		}
	}
];
let plugins = [
	new HtmlWebpackPlugin({
		title: 'es6+vue+bootstrap',
		template: path.join(PATHS.MAIN, 'index.html')
	}),
	new ExtractTextWebpackPlugin('./styles/[name]-[hash:8].css')
];
let resolve = {
	alias:{} //vue,bootstrap
};
////////////////////////////////////////////////////////////////


function getDevConfig(){
	return {
		devServer, entry, output,
		plugins, resolve,
		module:{rules},
		bail: true,
		devtool: 'sourcemap'
	}
}

function getProdConfig(){
	return {
		entry, output, 
		plugins, resolve,
		module:{rules},
	};
}


module.exports = function(envVer){
	env = envVer;

	resolve.alias.vue = isDevelopment()?PATHS.VUE_DEV:PATHS.VUE_PROD;
	//resolve.alias.bootstrap = isDevelopment()

	if(env===VERSION.DEV){
		return getDevConfig();
	}
	return getProdConfig();
};
