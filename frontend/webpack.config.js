const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   use: "url-loader?limit=100000",
      // },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loader: "url-loader?limit=100000",
      // },
      // {
      //   test: /(\.css$)/,
      //   loaders: ["style-loader", "css-loader", "postcss-loader"],
      // },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loader: "url-loader?limit=100000",
      // },

      // Preprocess your css files
      // you can add additional loaders here (e.g. sass/less etc.)
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: ["style-loader", "css-loader"],
      // },

      // {
      //   test: /\.css$/,
      //   exclude: helpers.root("src", "app"),
      //   use: ExtractTextPlugin.extract({
      //     use: "raw-loader",
      //   }),
      // },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
