var webpack = require('webpack');

module.exports = {
    entry  : './src/app/app.js',
    output : {
        path     : __dirname + '/dist/app',
        filename : 'app.js'
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: 'app.js.map'
        })
    ],
    module : {
        loaders: [ { 
                test   : /.js$/,
                loader : 'babel-loader' 
            }
        ]
    }
};