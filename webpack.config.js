var webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path              = require('path');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

var htmlConf = new HtmlWebpackPlugin({
      title: 'Vue App',
      template: '_public/index.ejs', // Load a custom template (ejs by default see the FAQ for details) 
      filename: 'public/index.html'
    });

module.exports = [{
  name: 'Bundle JS',
  entry: ['./_public/scss/main.scss','./_public/main.js'],
  output: {
    filename: PROD ? './public/bundle.min.js' : './public/bundle.js'
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    htmlConf
  ] : [
    htmlConf
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: [/node_modules/],
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    historyApiFallback: true,
    inline: true,
    port: 3001
  },
  resolve: {
      alias: { 'vue' : '../node_modules/vue/dist/vue.min.js'}
  }
}];