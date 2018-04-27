const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: [
        './src/main.js', './src/sass/main.sass'
    ],

    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'main.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.sass$/,
                loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract(
                    ['css-loader?{discardComments:{removeAll:true},minimize:true}', 'sass-loader']
                ))
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            filename: 'index.html',
            chunks: ['global', 'index'],
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        })
    ]
}
