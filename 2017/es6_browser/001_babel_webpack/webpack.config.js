const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const APP_PATH = path.join(__dirname,'./src/app');
//output path
const BUILD_TARGET_PATH = path.join(__dirname, './dist');
//env - from package.json scripts block
const ENV = {DEVELOPMENT:'development',PRODUCTION:'production'}

//////////////////////////////////////////////////////////
//config start
//////////////////////////////////////////////////////////
let devServer = {
	contentBase: BUILD_TARGET_PATH,
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
	app: APP_PATH
};
let output = {
	path: BUILD_TARGET_PATH,
	filename: '[name]-[chunkhash].js',
	chunkFilename: '[chunkhash].[ext]'
};
let rules = [
	{
		test: /\.js$/,
		include: path.join(__dirname,'src'), 
		exclude: function(path){return path.match(/node_modules/);},
		use: {
			loader:'babel-loader',
			options:{
				presets: ['es2015']
			}
		}
	},
	{
		test: /\.s?css$/, 
		use: ExtractTextWebpackPlugin.extract({
			fallback: 'style-loader',
			use: [
				{
					loader: 'css-loader', options:{modules:true}
				},
				'sass-loader'
			]
		})
	},
	{
		test:/\.(png|jpg|jpeg|bmp|svg|gif)$/,
		use: {
			loader: 'file-loader',
			options: {
				name: './images/[name]-[hash:8].[ext]'
			}
		}
	}
];
let plugins = [
	new HtmlWebpackPlugin({
		title:'es6-babel-webpack',
		inject: 'body',
		//favicon: 'src/images/favicon.ico',
		template: path.join(APP_PATH,'index.html')
	}),
	new ExtractTextWebpackPlugin('styles.css'),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		minChunks: function(module){
			return module.context&&/node_modules/.test(module.context)
		}
	})
];
//////////////////////////////////////////////////////////
//config end
//////////////////////////////////////////////////////////

/* create development configiguration */
function createDevConfig(){
	return {
		entry,output,
		module:{rules},
		plugins,
		devServer,
		bail: true,
		devtool: 'sourcemap'
	};
}

/* create production configiguration */
function createProdConfig(){
	plugins.push(
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
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
		module:{rules},
		plugins,
		devtool:'sourcemap'
	};
}

//export configuration
module.exports = function(env){
	let config = createDevConfig();
	if(env===ENV.PRODUCTION){
		config = createProdConfig();
	}
	return config;
}