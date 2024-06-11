const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  module: {
    rules:[
      {
        test: /\.(png|jpe?g|gif|svg|bmp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8000,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
  ],
};
