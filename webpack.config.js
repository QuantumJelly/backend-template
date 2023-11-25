const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [require('webpack-node-externals')()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // 支持的文件扩展名
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'), // 使用别名简化导入路径
    },
  },
};