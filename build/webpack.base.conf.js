const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const purgeCSS = require('purgecss-webpack-plugin');
const glob = require('glob');
const autoprefixer = require('autoprefixer');
const vue = require("vue-loader/lib/plugin");

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  resolve: {
    alias: {
      greeting: path.resolve(__dirname, '../src/components/Greeting.vue'),
      comment: path.resolve(__dirname, '../src/components/Comment.vue'),
      commentForm: path.resolve(__dirname, '../src/components/CommentForm.vue'),
      commentsList: path.resolve(__dirname, '../src/components/CommentsList.vue'),
      commentsListItem: path.resolve(__dirname, '../src/components/CommentsListItem.vue'),
      header: path.resolve(__dirname, '../src/components/Header.vue'),
      footer: path.resolve(__dirname, '../src/components/Footer.vue'),
    }
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['@babel/preset-env']
        }
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '../img/[name].[ext]'
        }
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '/assets/fonts/[name].[ext]'
        }
      }]
  },
  plugins: [
      new vue(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/index.html`, to: '' },
      { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` },
    ]),
    new CleanWebpackPlugin('../dist/*', {verbose: true, allowExternal: true}),
    new purgeCSS({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ]
};
