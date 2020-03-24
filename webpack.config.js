const path = require('path');

module.exports = {
  // mode defaults to 'production' if not set
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // add source maps
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference the .babelrc
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },  
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: 'svg-inline-loader',
            options: {
              jsx: true,
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },

  // removes the requirement to add the .jsx extension when importing
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // used for webpack-dev-server
  devServer: {
    contentBase: './dist',
  },
};
