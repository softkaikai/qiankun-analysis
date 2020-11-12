const { name } = require('./package');
const port = 8091;
module.exports = {
    publicPath:`//localhost:${port}`,
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port: port,
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            globalObject: 'window',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    }
}
