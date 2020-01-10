const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        hot: true,
        port: 3006,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                options: {
                    presets: ['react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|woff\eot)$/i,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        // uses the index.html file as the template file
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            {from: './public'}
        ])
    ]
}