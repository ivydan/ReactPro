const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件

module.exports = {
  output: {
      path: path.resolve(__dirname, "./build/"),
      filename: '[name].[chunkhash].js',
  },
  entry: {
      main: path.join(__dirname, './src/main.js'),
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
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.BannerPlugin('This is a SD System for Test !'), //插件用于给文件头部加注释信息
        new HtmlWebpackPlugin({
            title: `React Project`,
            filename: `index.html`,
            template: path.join(__dirname, 'index.html')
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8080/index.html'})
  ],
};