var Path= require('path');

module.exports = {
    entry: "./app/assets/scripts/app",
    output: {
        Path: Path.resolve (__dirname, "./app/temp/"),
        filename: "app.js"
    }
}