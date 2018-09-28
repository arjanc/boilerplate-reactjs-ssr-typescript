const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/server/index.tsx',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell webpack to not to include any imported library which are
  // already in our node_modules directory.
  // This reduces our output bundle.js for the server, and increase build time.
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);