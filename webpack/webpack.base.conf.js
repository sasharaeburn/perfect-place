const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../build'),
}

module.exports = {
    externals: {
        paths: PATHS,
    },
    entry: {
        app: `${PATHS.src}/index.js`,
    },
    output: {
        filename: './js/[name].js',
        path: PATHS.build,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, url: false },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: 'src/js/postcss.config.js' },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/booking.html',
            filename: 'booking.html',
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/contact-us.html',
            filename: 'contact-us.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: `${PATHS.src}/images`, to: `${PATHS.build}/images` },
            ],
        }),
    ],
}
