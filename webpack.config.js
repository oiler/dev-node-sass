module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: __dirname,
        filename: "./assets/js/script.js"
    },
    externals: {
        jQuery: 'jQuery',
        foundation: 'Foundation'
    }
};