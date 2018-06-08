/**
 * Created by wyin on 05/12 012.
 */

const path = require('path');

module.exports = {
    ENVS: {
        production: 'production',
        development: 'development',
        test: 'test'
    },
    PORTS: {
        dev: 4203
    },
    PATHS: {
        entry: path.join(__dirname, '../src/app'),
        output: path.join(__dirname, '../dist')
    }
};