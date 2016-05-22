const path = require('path');

const createClientJs = (filename) => ({
  name: filename.split('.')[0],
  entry: path.resolve(__dirname, 'src', 'ui', filename),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename,
    libraryTarget: 'umd',
    library: 'IsomorphicReactExamples',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['syntax-class-properties', 'transform-class-properties'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  devtool: 'sourcemap',
});

module.exports = ['example2.js', 'example3.js'].map(createClientJs);
