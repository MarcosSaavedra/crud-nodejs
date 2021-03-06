const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ZipPlugin = require('zip-webpack-plugin');

const {
	NODE_ENV = 'production',
} = process.env;

module.exports = {
  entry: "./src/app.js",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./app.js",
  },
  mode: NODE_ENV,
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        //use: ["s-loader"],
      },
    ],
  },
//   plugins: [
//     new copyWebpackPlugin({
//       patterns: [
//         { from: "./package.json",
//         to: "./",
//       }
//     ],
//   })
 // ,
//   new ZipPlugin({
//     filename: "bundle.zip",
//   }),
// ],
};