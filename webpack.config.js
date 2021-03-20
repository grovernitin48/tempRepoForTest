const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development"
let target = "web"


if(process.env.NODE_ENV === "production") {
    mode = "production"
    target = "browserslist"
}

module.exports = {
    mode,
    target,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, "postcss-loader", "sass-loader"]
            }
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: "./dist", 
        hot: true, 
    }
}
