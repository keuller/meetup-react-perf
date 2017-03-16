var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry:{
    bundle: './src/index.js',
    vendor: ['history', 'inferno', 'inferno-router']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
    }
  },

  devServer: {
    historyApiFallback: true,
    port: '8002',
    noInfo: true
  },

  devtool: '#eval-source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      warnings: false
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        conditionals: true,
        warnings: false,
        dead_code: true,
        unused: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
