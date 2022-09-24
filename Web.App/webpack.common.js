const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'Features/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": path.resolve(__dirname, "Features")
        }
    },
    output: {
        library: {
            name: 'Siniestros',
            type: 'var'
        },
        filename: 'app-client.js',
        path: path.resolve(__dirname, 'wwwroot/scripts'),
    }
};