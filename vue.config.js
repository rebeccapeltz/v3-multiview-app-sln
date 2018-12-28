const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: require('./aliases.config').webpack
        }
    },
    runtimeCompiler: true,
    css: {
        sourceMap: true
    },
    baseUrl: '',
    outputDir: './docs/',
    assetsDir: 'assets'
}