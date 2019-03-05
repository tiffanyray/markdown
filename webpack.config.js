const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = () => {
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'style.css' });

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'docs'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: 'babel-loader'
                    }]
                },
                {  //style testing
                    test: [
                        /\.sass$/,
                        /\s?css$/
                    ],
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                } //end of style testing
            ]
        },
        plugins: [
            CSSExtract
        ],
        devServer: {
            contentBase: path.join(__dirname, 'docs'),
            historyApiFallback: true,
        }
    }
}