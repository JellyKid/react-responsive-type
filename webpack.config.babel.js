const siteTitle = 'Test React FitText';
import path from "path";
import npmInstallPlugin from "npm-install-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";


const PATHS = {
  app: path.join(__dirname,'app')
};


const config = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    inline: true,
    progress: true,
    host: '127.0.0.1',
    port: 80
  },
  entry: {
    app: PATHS.app
  },
  resolve:{
    extensions: ['','.js','.jsx']
  },
  output: {
    filename: '[name].js',
    path: PATHS.build
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      }
    ]

  },
  plugins: [
    new npmInstallPlugin({
      save: true // --save
    }),
    new HtmlWebpackPlugin({
      template: '.\\node_modules\\html-webpack-template\\index.ejs',
      title: siteTitle,
      appMountId: 'app',
      inject: false
    })
  ]
};


module.exports = config;
