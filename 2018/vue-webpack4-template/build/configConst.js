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
        output: path.join(__dirname, '../dist'),
        vue_dev: path.join(__dirname, '../node_modules/vue/dist/vue.esm.js'),
        vue_prod: path.join(__dirname, '../node_modules/vue/dist/vue.min.js')
    },
    URLS:{
        dev: {
            baseUrl: 'http://193.112.59.171:8088',
            path: 'gnss-admin/api/v1/baseinfo'
        },
        prod: {
            baseUrl: 'http://193.112.59.171:8088',
            path: 'gnss-admin/api/v1/baseinfo'
        }
    },
};