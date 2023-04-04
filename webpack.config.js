const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    "mode": "none",
    "entry": [
        __dirname + '/src/sass/readmore.scss',
        __dirname + "/src/js/index.js"
    ],
    "output": {
        "path": __dirname + '/dist/',
        "filename": "index.js"
    },
    devServer: {
        port: 3333,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        watchFiles: [
            '/src/**/*.js',
            '/src/**/*.scss'
        ]
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin({
                test: /\.css$/i,
                minify: [
                    CssMinimizerPlugin.cssnanoMinify,
                    CssMinimizerPlugin.cleanCssMinify,
                ]
            }),
        ],
     },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    "module": {
        "rules": [
            {
                "test": /\.s[ac]ss/,
                "use": [
                    "style-loader",  
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader',
                ]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                        ]
                    }
                }
            },
            {
                "test": /\.css$/i,
                "use": [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    }
}