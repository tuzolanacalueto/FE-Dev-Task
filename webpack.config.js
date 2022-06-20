var path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    output:{
        path: path.join(__dirname,'/dist'),
        filename: 'index.bundle.js'
    },
    devServer:{
        port: 3080
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
}