const path = require('path');

module.exports = {
  entry: [path.resolve('static', 'js', 'src', 'index.tsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static', 'assets'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html'],
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx|\.tsx|\.ts$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.js|\.jsx|\.tsx|\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'module',
            babelrc: true,
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'static/js/src/'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
