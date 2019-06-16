const configConst = require('../configConst');

module.exports = function(env){

    return {
        filename: '[name]-[hash].js',
        chunkFilename: 'chunk-[name]-[hash].js',
        path: configConst.outputUrl
    };

};