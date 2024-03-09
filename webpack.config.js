/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const deps = require('./package.json').dependencies;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = (_, { mode }) => {
  const conditionalWebpackPlugins =
    mode !== 'production'
      ? [
          new CopyWebpackPlugin({
            patterns: [
              {
                from: path.join(__dirname, 'public'),
                to: BUILD_DIR
              }
            ]
          }),
          new HtmlWebpackPlugin({
            template: './public/html/index.html',
            title: 'ABB',
            minify: true
          })
        ]
      : [
          new CopyWebpackPlugin({
            patterns: [
              {
                from: path.join(__dirname, 'public/locales'),
                to: BUILD_DIR
              }
            ]
          })
        ];

  return {
    entry: path.join(SRC_DIR, 'index'),
    output: {
      filename: '[name].[contenthash].js',
      publicPath: '/abb-mf-pledge/',
      path: BUILD_DIR
    },
    devtool: 'source-map',
    devServer: {
      static: {
        directory: BUILD_DIR
      },
      client: {
        overlay: {
          errors: true,
          warnings: false
        }
      },
      host: '0.0.0.0',
      hot: true,
      https: false,
      allowedHosts: 'all',
      historyApiFallback: { index: '/abb-mf-pledge/' },
      port: 3001,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      },
      proxy: [
        {
          context:  ['**/customers/**','**/pledges/**','**/products/**'],
          target: 'http://127.0.0.1:8082'
        }
      ]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: SRC_DIR,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015'
          }
        },
        {
          test: /\.s?css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.css'],
      modules: [SRC_DIR, 'node_modules'],
      alias: {
        images: path.resolve(__dirname, 'public/images'),
        react: path.resolve('./node_modules/react')
      }
    },
    plugins: [
      ...conditionalWebpackPlugins,
      new ForkTsCheckerWebpackPlugin(),
      new ModuleFederationPlugin({
        name: 'exampleRemote',
        filename: 'remoteEntry.js',
        remotes: {
          host: `host@/remoteEntry.js?${+new Date()}`
        },
        exposes: {
          './App': './src/App'
        },
        shared: {
          ...deps,
          react: {
            requiredVersion: deps.react,
            singleton: true
          },
          'react-dom': {
            requiredVersion: deps['react-dom'],
            singleton: true
          },
          'react-i18next': {
            requiredVersion: deps['react-i18next'],
            singleton: true
          }
        }
      }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin()
    ].filter(Boolean)
  };
};
