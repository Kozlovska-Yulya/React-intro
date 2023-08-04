const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    entry: './src/index.js',
    output: {
      filename: 'review_build',
      path: path.resolve(__dirname, 'review_build'),
    },

    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
