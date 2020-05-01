const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  devServer: {
    // publicPath: "/",
    port: 3001,
    contentBase: path.join(__dirname, "dist"),
    // host: "localhost",
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(json)$/i,
      //   use: [
      //     {
      //       loader: "json-loader",
      //     },
      //   ],
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: "style-loader",
      //     },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         importLoaders: 1,
      //         sourceMap: true,
      //       },
      //     },
      //   ],
      // },
    ],
  },

  // output: {
  //   filename: "[name].[hash].js",
  //   path: path.resolve(__dirname, "dist"),
  // },

  mode: "development",

  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/assets",
        to: "assets",
      },
    ]),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    // new CleanWebpackPlugin(),
  ],
};
