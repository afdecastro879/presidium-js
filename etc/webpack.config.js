var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var buildPath = path.join(__dirname, '../dist');
var buildFileName = 'presidium.js';
var fullFilePath = buildPath + '/' + buildFileName;

module.exports = {
    entry: './src/index.js',
    output: {
        path: buildPath,
        filename: buildFileName,
        publicPath: '/'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: fullFilePath,
                to: '../../presidium-template/dist/site/media/js'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: fullFilePath,
                to: '../../presidium-template/node_modules/presidium-core/media/js/'
            },
        ]),
    ],

    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: '/'
    }
};