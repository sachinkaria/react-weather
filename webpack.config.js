var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader",
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        },
      },
        {
        test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports?define=>false&this=>window'
    }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
