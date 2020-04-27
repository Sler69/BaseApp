
var ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
module.exports = {
  entry: {
    initial_app: './src/spa-modules/initial/initial_app.js',
    user: './src/spa-modules/user/lol-app.js'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }, 
  module: {
    rules: [
      {
        test: /\app.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }       
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [

  ]
};