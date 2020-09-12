require('dotenv').config();

const webpack = require('webpack')

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = {// providing access for polaris to use the API Key
    webpack: (config) => {
        const env = { API_KEY: apiKey };
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    }
}
