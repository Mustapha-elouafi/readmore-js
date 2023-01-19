const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "mode": "none",
    "entry": "./src/js/index.js",
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
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    "module": {
        "rules": [
            {
                "test": /\.s[ac]ss$/i,
                "use": [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
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
        ]
    }
}