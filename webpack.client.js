const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Tell webpack the root file of our
  // server application
  entry: './src/client/client.tsx',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map"
};

module.exports = merge(baseConfig, config);