//import path package - allows construction of absolute path
const path = require('path');
//import autoprefixer plugin
const autoprefixer = require('autoprefixer');
//import plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production', //provide certain optimization
    entry: './src/index.js',
    output: {
        //dirname - absolute path to the folder where this file lives in, and in a dist folder
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'none',
    module: {
        rules: [
            { //for JS files
                test: /\.js$/, //rules apply to any file ending in .js
                loader: 'babel-loader', //which tool takes over the file
                exclude: /node_modules/ //exclude anything in node_modules
            },
            { //for CSS files
                test: /\.css$/, //apply to css files
                exclude: /node_modules/,
                //add multiple loaders with array of loaders
                use: [
                    {loader: 'style-loader'}, //inject CSS in HTML files
                    //understanding CSS imports
                    {loader: 'css-loader', 
                        options: {
                            //additional configuration to support CSS modules
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                    {loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: () => [autoprefixer()] //automatically prefixses CSS
                            }
                        }
                    }
                ]
            },
            { //for image files
                test: /\.(png|jpg?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]' //? - set options to configure loader
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //file we want to use as basis
            //dirname - points at current project folder
            template: __dirname + '/src/index.html', //file use as starting point
            inject: 'body' //where to inject files
        })
    ]
};