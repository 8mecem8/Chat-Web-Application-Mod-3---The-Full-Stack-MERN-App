const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
require('dotenv').config({ path: '.env' });  //Must use to reach .envfiles


module.exports= (env,argv) => 
{
  // `mode` is `'XX'` if you ran webpack like so: `webpack watch --mode XX` (v5 syntax)
  const mode = argv.mode || 'development'; // dev mode by default
  console.log(process.env.REACT_APP_SERVER)


  return{
    entry: "./src/js/index.js",

    resolve: { extensions: ["*", ".js", ".jsx"],fallback: {'fs': false,'path': false,'crypto': false,} },
    devtool: 'source-map',
    
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        clean: true,
        assetModuleFilename:'assets/[hash][ext][query]'
    },

    optimization: {
      noEmitOnErrors: true,
    },

    devServer: 
    {
      historyApiFallback: true, //fixes routing problems with react like have to always go "/" to reach any other route like "/login"
    },


    module: 
    {

      rules: 
      [
        {
          test: /\.m?jsx?$/,
          exclude: /node_modules/,
          use: [{loader: 'babel-loader'},{loader: '@linaria/webpack-loader',},{loader: 'webpack-remove-debug'}]
        },
        {
            test: /\.css$/,
            use: [MiniCSSExtractPlugin.loader, "css-loader","postcss-loader"]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            type:'asset/resource', //change from 'resource' to 'inline' to add picture sas base64 in js file | be careful use it for small images | or just use type:'asset' automatic setup
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
          test: /\.mp4$/,
          type: 'asset/resource',
        },
        
      ],
    },


    plugins: 
    [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new MiniCSSExtractPlugin({filename: 'styles-[contenthash].css'}),
        new webpack.DefinePlugin({
          "process.env": JSON.stringify(process.env),
        }),
        new webpack.ProvidePlugin({
          process: 'process/browser.js',
      })
    
    ],
    
    


  }

  };