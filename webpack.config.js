const path = require('path')
module.exports = {
  // 指定入口
  entry: './src/index.ts',

  // 指定打包文件所在目录
  output : {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件
    filename: 'bundle.js'
  },
  module: {
    // 指定加载规则
    rules: [
      {
        test: /\.ts/,
        use: 'ts-loader',
        exclude: /node-modules/
      }
    ]
  }
}