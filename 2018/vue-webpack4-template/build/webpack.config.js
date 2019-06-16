/**
 * Created by wyin on 05/12 012.
 */

const path = require('path');
const {PATHS,ENVS} = require('./configConst');

const rules = require('./rules');
const optimization = require('./optimization');
const plugins = require('./plugins');
const devServer = require('./devServer');

function getVueUrl(env){
    return (env===ENVS.development||env===ENVS.test)?PATHS.vue_dev:PATHS.vue_prod;
}

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
                'vue$': getVueUrl(env),
                'vue-mec': path.join(__dirname, '../src/libs/wyin/vue/vue-mec.js'),
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