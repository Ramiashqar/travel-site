var path = require('path');

module.exports = {
    mode: 'development',
    entry: "./app/assets/scripts/app",
    output: {
        path: path.resolve(__dirname, "./app/temp/"),
        filename: "app.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                query: {
                    presets: ['env']
                },
            }
        }]
    }
};