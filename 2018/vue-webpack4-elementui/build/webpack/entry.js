const configConst = require('../configConst');

module.exports = function(env){
    return {
        app: configConst.entryUrl
    };
};