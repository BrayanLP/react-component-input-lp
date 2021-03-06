var path = require('path');
module.exports = {
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/components'),
        exclude: /(node_modules|bower_components|build)/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
};
