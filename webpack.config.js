const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let NODE_ENV;

module.exports = {
  entry: './client/index.js',
  output: {
    path:path.resolve(__dirname, "build"),
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      { test: /\.tsx?$/, 
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },


    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
  },
  devServer: {
    historyApiFallback:true,
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/build',
    },
    proxy: {
        '/api': 'http://localhost:3000'
    }
},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],

}