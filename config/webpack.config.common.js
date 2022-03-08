const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: 'main.js',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    clean: true,
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // Tells webpack how to append CSS to the DOM as a style tag.
          'css-loader', // Tells webpack how to read a CSS file.
          'sass-loader'
        ],
        sideEffects: false
      },
      {
        test: [/\.jpg$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
};
