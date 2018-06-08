/**
 * Created by wyin on 05/12 012.
 */

const {PATHS,PORTS} = require('./configConst');

module.exports = function(env){
    return {
        contentBase: PATHS.output,
        port: PORTS.dev,
        host: '0.0.0.0',
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
    }
};