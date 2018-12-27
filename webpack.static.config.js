const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: "./src/LandingPageApp.js",
    output: {
        filename: "[name]-[hash].js",
        chunkFilename: "[id].[hash].bundle.js",
        path: dist
    },
    resolve: {
        modules: [
            "node_modules"
        ]
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new CleanWebpackPlugin(dist), // this cleans up dist/ folder every time to keep it clean
        new HtmlWebpackPlugin({
            /*
             * Note: path to ./public/landing_page.html is defined in a very strange way.
             * Why? Read about it here: https://github.com/GoogleChromeLabs/prerender-loader#usage
             */
            template: '!!prerender-loader?string!./public/landing_page.html',
            filename: 'landing_page.html',
        }),
    ],
    module: {
        // There is only the most basic support for .js files.
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/preset-react",
                                "@babel/env"
                            ],
                            compact: true
                        }
                    }
                ]
            }
        ]
    }

};