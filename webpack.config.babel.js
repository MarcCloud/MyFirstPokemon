import webpack from 'webpack';
import { join } from 'path';

const config = {
    context: __dirname,
    entry: [
        './app/entry.js'
    ],
    output: {
        path: join(__dirname, 'www'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                BABEL_ENV: JSON.stringify('development/client')
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.json']
    },
    module: {
        preLoaders: [{loader: 'isomorphine'}],
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }]
    }
};

export default config;
