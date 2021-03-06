const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;
//const getConfig = require('hjs-webpack')

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

module.exports = {
  entry: {
    app: ['./src/app.js'],
  },

  output: {
    filename: 'bundle-[name].js',
    path: __dirname + '/dist'
  }
};

//var config = getConfig({
//    isDev: isDev,
//    in: join(src, 'app.js'),
//    out: dest,
//    clearBeforeBuild: true,
//    hostname: 'dev-consumerdata-app01.shanghai.mintel.ad'
//})

//config.module.rules.push(
// {
//   test: /\.css$/,
//   use: [
//     'style-loader',
//     { loader: 'css-loader', options: { importLoaders: 1 } },
//     { loader: 'postcss-loader',
//       options: {
//         ident: 'postcss',
//         plugins: (loader) => [
//           require('precss')(),
//           require('autoprefixer')(),
//           require('cssnano')()
//         ]
//       }
//     }
//   ]
// }
//);
