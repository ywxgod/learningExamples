const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const ENV = {
	PRODUCTION: 'production',
	DEVELOPMENT: 'development'
};
const APP_PATH = {
	MAIN: path.join(__dirname,'src/app'),
	BUILD: path.join(__dirname, 'dist'),
	VUE_DEVELOPMENT: 'vue/dist/vue.common.js',
	VUE_PRODUCTION: 'vue/dist/vue.min.js'
}
const styleRules = ExtractTextWebpackPlugin.extract({
	fallback: 'style-loader',
	use: [
		{
			loader: 'css-loader',
			options: {
				modules: true
			}
		},
		'sass-loader'
	]
});
let build_env = ENV.DEVELOPMENT;


//////////////////////////////////////////////////////////////////
//start - webpack configiguration
//////////////////////////////////////////////////////////////////
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
	path: APP_PATH.BUILD,
	filename: '[name]-[chunkhash].js'
};
let rules = [
	{
		test: /\.js$/,
		exclude: function(path){return path.match(/node_modules/);},
		use: {
			loader: 'babel-loader',
			options:{
				presets:['es2015']
			}
		}
	},
	{
		test: /\.vue$/,
		exclude: function(path){return path.match(/node_modules/);},
		use: {
			loader: 'vue-loader',
			options: {
				extractCSS: true
			}
		}
	},
	{
		test: /\.s?css$/,
		use: styleRules
	}
];
let plugins = [
	new HtmlWebpackPlugin({
		title: 'es6+vue+webpack',
		template: path.join(APP_PATH.MAIN, 'index.html')
	}),
	new ExtractTextWebpackPlugin('./styles.css'),
	new CommonsChunkPlugin({
		name: 'vendor',
		minChunks: (module)=>{return module.context&&/node_modules/.test(module.context);}
	})
];
let resolve = {
	alias:{
		vue: APP_PATH.VUE_DEVELOPMENT //vue is initialized by development version default.
	}
}
//////////////////////////////////////////////////////////////////
//start - webpack configiguration
//////////////////////////////////////////////////////////////////
function isDevelopment(){
	return build_env===ENV.DEVELOPMENT;
}

function createDevelopmentConfig(){
	return {
		entry,output,
		devServer,plugins,
		resolve,
		module:{rules},
		devtool: 'sourcemap',
		bail:true
	};
}

function createProductionConfig(){
	plugins.push(
		new LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new UglifyJsPlugin({
			sourceMap: true,
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
	);
	return {
		entry,output,
		resolve,
		devServer,plugins,
		devtool: 'sourcemap',
		module:{rules}
	};
}

module.exports = function (env) {
	build_env = env;

	//use vue development version or production version
	resolve.alias.vue = isDevelopment()?APP_PATH.VUE_DEVELOPMENT:APP_PATH.VUE_PRODUCTION;

	if(env===ENV.DEVELOPMENT){
		return createDevelopmentConfig();
	}
	return createProductionConfig();
}