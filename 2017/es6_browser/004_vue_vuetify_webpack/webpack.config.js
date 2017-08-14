const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PurifyCssWebpackPlugin = require('purifycss-webpack');
const glob = require('glob');
const UglifyJsWebpackPlugin = webpack.optimize.UglifyJsPlugin;
const CommonsChunkWebpackPlugin = webpack.optimize.CommonsChunkPlugin;
const LoaderOptionsWebpackPlugin = webpack.LoaderOptionsPlugin;

const devServerPort = 9000;
const ENV = {
	DEVELOPMENT: 'development',
	PRODUCTION: 'production'
};

const PATHS = {
	entry: path.join(__dirname, './src/app'),
	build: path.join(__dirname, './dist'),
	vue_dev: 'vue/dist/vue.js',
	vue_prod: 'vue/dist/vue.min.js',
	vuetify_dev: path.join(__dirname,'node_modules/vuetify/dist/vuetify.js'),
	vuetify_prod: path.join(__dirname,'node_modules/vuetify/dist/vuetify.min.js'),
	vuetify_css: path.join(__dirname, 'node_modules/vuetify/dist/vuetify.min.css')
};

let env = null;
let exclude_fun = (pattern)=>{ return (path)=>{ path.match(pattern) }; };
let isDevelopment = (env)=>{ return env === ENV.DEVELOPMENT; };

////////////////////////////////////////////////////////////////
//dev server
////////////////////////////////////////////////////////////////
let devServer = {
	contentBase: PATHS.build,
	port: devServerPort,
	host: '0.0.0.0',
	watchContentBase: true,
	historyApiFallback: true,
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
    }
};

/////////////////////////////////////////////////////////////////
//config start
/////////////////////////////////////////////////////////////////
let entry = {
	app: PATHS.entry
};
let output = {
	filename: '[name]-[chunkhash:8].js',
	path: PATHS.build,
	chunkFilename: '[name]-[chunkhas:8].[ext]'
};
let rules = [
	{
		test: /\.js$/,
		exclude: exclude_fun(/node_modules/),
		loader: 'babel-loader',
		query: {compact: false}
	},
	{
		test: /\.s?css$/,
		exclude: exclude_fun(/node_modules/),
		use: ExtractTextWebpackPlugin.extract({
			fallback: 'style-loader',
			use: ['css-loader','sass-loader']
		})
	},
	{
		test: /.(jpg|jpeg|gif|bmp|png)$/,
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
		use: {
			loader: 'vue-loader',
			options: {
				extractCSS: true
			}
		}
	}
];
let plugins = [
	new HtmlWebpackPlugin({
		title: 'vuetify+vue',
		template: path.join(PATHS.entry, 'index.html')
	}),
	new ExtractTextWebpackPlugin({
		filename: './styles/[name]-[hash:8].css'
	}),
	new CommonsChunkWebpackPlugin({
		name: 'vendor',
		minChunks: (module)=>{return module.context&&/node_modules/.test(module.context);}
	}),
	new PurifyCssWebpackPlugin({
		paths: glob.sync(`${PATHS.entry}/**/*.vue`,{nodir:true})
	})
];
let resolve = {
	alias:{
		vue: PATHS.vue_dev,
		vuetify: PATHS.vuetify_dev,
		vuetifyCss: PATHS.vuetify_css
	}
};

/////////////////////////////////////////////////////////////////
//config end
/////////////////////////////////////////////////////////////////

function getDevConfig(){
	let devConfig = {
		entry,output,
		plugins,resolve,
		module:{rules},
		devtool: 'sourcemap',
		bail:true, devServer
	};
	return devConfig;
}

function getProdConfig(){
	plugins.push(
		new LoaderOptionsWebpackPlugin({
			minimize: true,
			debug: false
		}),
		new UglifyJsWebpackPlugin({
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
	let prodConfig = {
		entry,output,
		plugins,resolve,
		module: {rules}
	};
	return prodConfig;
}


module.exports = function(envVar){
	env = envVar;

	let isDev = isDevelopment(env);

	resolve.alias.vue = isDev?PATHS.vue_dev:PATHS.vue_prod;
	resolve.alias.vuetify = isDev?PATHS.vuetify_dev:PATHS.vuetify_prod;

	let config = getDevConfig();

	if(!isDev){
		config = getProdConfig(); 
	}

	return config;

}