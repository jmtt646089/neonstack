const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ],


  resolve: {

    plugins: [new TsconfigPathsPlugin()],

    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  }
}
