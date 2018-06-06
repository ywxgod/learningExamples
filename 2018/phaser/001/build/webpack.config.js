/**
 * Created by wyin on 06/06.
 */

const path = require('path');
const {PATHS,ENVS} = require('./configConst');
const { isProd } = require('./utils');

const rules = require('./rules');
const optimization = require('./optimization');
const plugins = require('./plugins');
const devServer = require('./devServer');


module.exports = function(env){

    let base = {
        mode: env==='production'?ENVS.production:ENVS.development,
        entry: {
            app: PATHS.entry
        },
        output: {
            path: PATHS.output,
            filename: '[name]-[hash:8].js',
            chunkFilename: 'chunk-[name]-[chunkhash:8].js'
        },
        resolve: {
            alias: {
                '@app': path.join(__dirname, '../src/app'),
                '@assets': path.join(__dirname, '../assets'),
                '@libs': path.join(__dirname, '../src/libs'),
                '@utils': path.join(__dirname, '../src/utils')
            }
        },
        module:{ rules: rules(env) },
        plugins: plugins(env),
        optimization: optimization(env)
    };
    if(env==='development'){
        base.devServer = devServer(env);
        base.devtool = 'source-map';
    }

    return base;
};