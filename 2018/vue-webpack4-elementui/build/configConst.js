const path = require('path');

module.exports = {
    templateUrl: path.join(__dirname, '../src/app/index.tmp.html'),
    entryUrl: path.join(__dirname, '../src/app'),
    outputUrl: path.join(__dirname, '../dist'),
    faviconUrl: path.join(__dirname, '../assets/favicon-marrio.ico'),
    host: '0.0.0.0',
    port: 4204,
    purifyCssWhiteList: []
};