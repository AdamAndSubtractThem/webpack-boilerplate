const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirSrc = path.join(__dirname, 'src');
const commonComponents = path.join(__dirname, 'common');
const brewsupplyComponents = path.join(__dirname, 'theme-brewssupply');
const cbcdirectComponents = path.join(__dirname, 'theme-cbcdirect');
const dukeenergyComponents = path.join(__dirname, 'theme-dukeenergy');
const eescoComponents = path.join(__dirname, 'theme-eesco');
const greenComponents = path.join(__dirname, 'theme-green');
const lcompComponents = path.join(__dirname, 'theme-lcomp');
const wescoComponents = path.join(__dirname, 'theme-wesco');
const wescoCanadaComponents = path.join(__dirname, 'theme-wesco-canada');

const appHtmlTitle = 'Adam\'s Webpack Boilerplate';

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        vendor: [
            'lodash'
        ],
        main: path.join(dirSrc, 'index')
    },
    resolve: {
        modules: [
            dirNode,
            dirSrc,
            commonComponents,
            brewsupplyComponents,
            cbcdirectComponents,
            dukeenergyComponents,
            eescoComponents,
            greenComponents,
            lcompComponents,
            wescoComponents,
            wescoCanadaComponents
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),
        new MiniCssExtractPlugin({
            filename: IS_DEV ? '[name].css' : '[name].[hash].css',
            chunkFilename: IS_DEV ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            title: appHtmlTitle
        })
    ],
    module: {
        rules: [
            // Babel
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    compact: true
                }
            },
            // Styles
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV,
                            includePaths: [commonComponents, brewsupplyComponents, cbcdirectComponents, dukeenergyComponents, eescoComponents, greenComponents, lcompComponents, wescoComponents, wescoCanadaComponents]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV,
                            includePaths: [commonComponents, brewsupplyComponents, cbcdirectComponents, dukeenergyComponents, eescoComponents, greenComponents, lcompComponents, wescoComponents, wescoCanadaComponents]
                        }
                    }
                ],
            },
            // Images
            {
                test: /\.(jpe?g|png|svg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images/'
                }
            },
            // Fonts
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    }
};
