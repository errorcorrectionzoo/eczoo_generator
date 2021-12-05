const path = require("path");
const webpack = require("webpack");


const common_module_config = {
    rules: [
        {
            test: /(\~)$/,
            loader: "ignore-loader"
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: {
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: "> 5%"
                        }
                    ]
                ],
                plugins: [
                    "@babel/plugin-proposal-export-default-from",
                    "@babel/plugin-proposal-class-properties",
                    "@babel/plugin-syntax-top-level-await"
                ],
                sourceMaps: true
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader'
            ]
        }
    ]
};

const EczSearchJSComponent = {
    entry: {
        "eczsearch": "./src/eczsearch/index.js",
    },
    //mode: "development",
    module: common_module_config,
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "[name].js",
        library: "[name]",
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = [ EczSearchJSComponent ];
