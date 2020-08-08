const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./bootstrap.js",
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
    },
    mode: "development",
    devtool: 'inline-source-map',
    plugins: [
        new CopyPlugin({ patterns: ['index.html', 'style.css', 'resources/*'] })
    ],
};
