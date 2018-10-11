const Path = require('path');

module.exports = {
  mode: 'production',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'babel'.
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [Path.join(__dirname, "src/client/assets")],
        loader: "file-loader?name=assets/[name].[ext]"
      }
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      //{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};