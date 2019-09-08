const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        compress: true,
        overlay: true,
        open: true,
        port: 3000,
        proxy: {
            '/api':'http://localhost:8081'
        }
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader'
            },
            {
                test: /\.css$/,
                loader: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                loader: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        // 将其他规则复制并应用到.vue文件中, 如各个loader配置等
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: '项目模板'
        })
    ]
}