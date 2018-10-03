const path = require('path');

module.exports = {
  entry: './javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            test: /\.js$/,
            exclude: /node_modules/,
          },
        },
      },
    ],
  },
};
