const webpack = require('webpack');
const path = require('path');

let entry = {
  bundle: [ path.join(__dirname, 'index.js') ]
};

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

let devtool = 'inline-source-map';

module.exports = {
  entry: entry,
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins,
  devtool,
  devServer: {
    contentBase: __dirname,
    watchContentBase: true,
  },
};
