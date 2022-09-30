const path = require("path");
const nodeExternals = require("webpack-node-externals");
// const path = require("path");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development", //development || production
  entry: "./server.js",
  target: "node",
  output: {
    filename: "server.min.js",
    path: path.resolve(__dirname, "build")
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js"],
    modules: [path.resolve(__dirname, "backend"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "backend")],
        use: ["babel-loader"]
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()]
};
