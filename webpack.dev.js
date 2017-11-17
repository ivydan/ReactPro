const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件

module.exports = merge(common, {
	// devtool: 'inline-source-map'  //编译速度较慢
    devtool: 'eval-source-map',
    plugins: [
    	new OpenBrowserPlugin({url: 'http://localhost:8080/index.html'})
    ],
    
});