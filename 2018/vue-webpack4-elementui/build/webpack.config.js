const path = require('path');
const configConst = require('./configConst');
const entry = require('./webpack/entry');
const output = require('./webpack/output');
const resolve = require('./webpack/resolve');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');
const optimization = require('./webpack/optimization');

const devServer = {
	contentBase: configConst.outputUrl,
	port: configConst.port,
	host: configConst.host,
	watchContentBase: true,
	historyApiFallback: true,
	stats: {
		performance: true,
		chunks: false,
		chunkModules: false,
		chunkOrigins: false,
		errors: true,
		errorDetails: true,
		hash: false,
		timings: false,
		modules: false,
		warnings: true
    }
};

module.exports = function(env){
    let isDev = env === 'development';
    let isProd = env === 'production';
    let config = {
        mode: env,
        entry: entry(env),
        output: output(env),
        resolve: resolve(env),
        module: {rules: rules(env)},
        plugins: plugins(env),
        //recordsPath: path.join(__dirname, "records.json"),
    };
    if(isDev){
        config.devtool = 'source-map';
        config.devServer = devServer;
    }
    if(isProd){
        config.optimization = optimization(env);
    }
    return config;
}