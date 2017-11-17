/**
 * Created by Maggie on 11/17 2017
 */
//https://segmentfault.com/a/1190000005969643
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        main: path.join(__dirname, './src/main.js'),
        vendors: ['react', 'React-dom', 'lodash']
    },
    output:{
        path: path.resolve(__dirname, "./build/"),
        filename: '[name].js',
        chunkFilename: 'js/chunk-[id].js',
        library: 'ReactPro',
        libraryTarget: "umd"
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            components: path.resolve(__dirname, 'components') 
        }
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                  presets:['react','es2015']
                }
            },{
                test: /\.css$/,
                exclude: /^node_modules$/,
			      use: ExtractTextPlugin.extract({
				      fallback: "style-loader",
				      use: [
					      { loader: 'css-loader', options: { importLoaders: 1 } },
					      'postcss-loader'
				      	]
			      })
            }, {
                test: /\.less/,
                exclude: /^node_modules$/,
			      use: ExtractTextPlugin.extract({
				      fallback: "style-loader",
				      use: [
					      { loader: 'css-loader', options: { importLoaders: 1 } },
					      'postcss-loader',
					      {
						      loader: 'less-loader'
					      }
				      ]
			      })
            },{ 
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192' 
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.bundle.js' }),
        new ExtractTextPlugin("style.css"),
        new webpack.BannerPlugin('This is a SD System for Test !'), //插件用于给文件头部加注释信息
        new HtmlWebpackPlugin({
            title: `React Project`,
            filename: `index.html`,
            template: path.join(__dirname, 'index.html')
        })
    ]
}