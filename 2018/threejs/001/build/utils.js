/**
 * Created by wyin on 05/12 012.
 */

const { ENVS } = require('./configConst');

module.exports = {
    isProd(env){
        return env===ENVS.production;
    }
};