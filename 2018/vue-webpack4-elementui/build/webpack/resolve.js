const configConst = require('../configConst');
const path = require('path');

module.exports = function(env){
    return {
        alias:{
            'vue-mec': path.join(__dirname, '../../src/libs/wyin/vue/vue-mec.js'),
            '@src': path.join(__dirname, '../../src'),
            '@app': path.join(__dirname, '../../src/app'),
            '@libs': path.join(__dirname, '../../src/libs'),
            '@assets': path.join(__dirname, '../../assets')
        },
        extensions: [
            '.wasm', '.mjs', '.js', '.json', '.vue'
        ]
    };
};