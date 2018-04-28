var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        App: "./app/assets/scripts/App",
        Vendor: "./app/assets/scripts/Vendor"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/"),
        filename: "[name].js"
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