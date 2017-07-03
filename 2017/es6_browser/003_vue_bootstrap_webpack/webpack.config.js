const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ProvidePlugin = webpack.ProvidePlugin;


const VERSION = {
	DEV: 'development',
	PROD: 'production'
};
const PATHS = {
	BUILD: path.join(__dirname,'./dist'),
	MAIN: path.join(__dirname, './src/app'),
	VUE_DEV: 'vue/dist/vue.js',
	VUE_PROD: 'vue/dist/vue.min.js',
	BOOTSTRAP_CSS_DEV: 'bootstrap/dist/css/bootstrap.css',
	BOOTSTRAP_CSS_PROD: 'bootstrap/dist/css/bootstrap.min.css',
	BOOTSTRAP_JS_DEV: 'bootstrap/dist/js/bootstrap.js',
	BOOTSTRAP_JS_PROD: 'bootstrap/dist/js/bootstrap.min.js'
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
		test: /\.(gif|jpeg|jpg|png|bmp)$/,
		use: {
			loader: 'url-loader',
			options: {
				limit: 10240,
				name: './images/[name]-[hash:8].[ext]'
			}
		}
	},
	{
		test: /\.(svg|eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
		use: {
			loader: 'file-loader',
			options: {
				//ExtractTextWebpackPlugin设置filename：'./styles/[name]-[hash:8].css'
				//改写了publicPath(初始为./dist)，将静态文件目录指向了'./dist/styles', 导致字体文件的相对路径为'./dist/styles/fonts/[name].[ext]'，
				//而实际的字体文件路径为：./dist/fonts/[name].[ext].
				//所以此处设置publicPath将静态文件夹路径覆盖为'./dist'
				publicPath: '../', //重写publicPath
				name: './fonts/[name].[ext]'
			}
		}
	},
	{
		test: /\.vue$/,
		exclude: exclude_fun(/node_modules/),
		use: {
			loader: 'vue-loader',
			options: {extractCSS:true}
		}
	}
];
let plugins = [
	new ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		"window.$": 'jquery',
		"window.jQuery": 'jquery'
	}),
	new HtmlWebpackPlugin({
		title: 'es6+vue+bootstrap',
		template: path.join(PATHS.MAIN, 'index.html')
	}),
	new ExtractTextWebpackPlugin({
		filename: './styles/[name]-[hash:8].css'
	}),
	new CommonsChunkPlugin({
		name: 'vendor',
		minChunks: (module)=>{return module.context&&/node_modules/.test(module.context);}
		//minChunks: Infinity
	})
];
let resolve = {
	alias:{} //vue,bootstrapCss,bootstrapJs
};
//////////////////////////////////////////////////////////////////////
//config end
//////////////////////////////////////////////////////////////////////


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
		entry, output, 
		plugins, resolve,
		module:{rules},
	};
}


module.exports = function(envVer){
	env = envVer;

	resolve.alias.vue = isDevelopment()?PATHS.VUE_DEV:PATHS.VUE_PROD;
	resolve.alias.bootstrapCss = isDevelopment()?PATHS.BOOTSTRAP_CSS_DEV:PATHS.BOOTSTRAP_CSS_PROD;
	resolve.alias.bootstrapJs = isDevelopment()?PATHS.BOOTSTRAP_JS_DEV:PATHS.BOOTSTRAP_JS_PROD;

	if(env===VERSION.DEV){
		return getDevConfig();
	}
	return getProdConfig();
};
