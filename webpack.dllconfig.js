const webpack = require('webpack');
const path = require('path');

const vendors = [
  'react',
  'react-dom',
  'lodash',
];

module.exports = {
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: 'vendors.js',
    library: 'vendors',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: 'vendors.js',
      context: __dirname,
    }),
  ],
};