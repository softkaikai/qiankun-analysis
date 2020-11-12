const {
    override,
    overrideDevServer,
} = require("customize-cra");
const { name } = require('./package');

const devServerConfig = () => config => {
    config.headers = {
        'Access-Control-Allow-Origin': '*',
    }

    return config;
};
const webpackConfig = () => config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = `window`;

    return config;
}

module.exports = {
    webpack: override(
        webpackConfig()
    ),
    devServer: overrideDevServer(
        devServerConfig()
    )
};
