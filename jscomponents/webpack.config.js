const path = require("path");
const webpack = require("webpack");


//
// Code that is used in individual code information pages (collect together
// the necessary components in one single webpack)
//

const EczCodePageStuffJSComponent = {
    entry: {
        "eczcodepagestuff": [
            "./src/eczpopupinfothingy/index.js"
            //,
            //"./src/eczdummytest/index.js"
        ],
    },
    module: {
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
                        "@babel/plugin-proposal-class-properties"
                        //,
                        //"@babel/plugin-syntax-top-level-await"
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
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "[name].js",
        library: "[name]",
    }
};



//
// Code that is used on the SEARCH page
//

const EczSearchJSComponent = {
    entry: {
        "eczsearch": "./src/eczsearch/index.js",
    },
    module: {
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
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "[name].js",
        library: "[name]",
    }
};




//
// An independent helper to decode a submitted JSON file into YAML, formatted
// the way Victor likes it
//

const EczToolDecodeSubmittedJsonCodeComponent = {
    entry: {
        "ecztooldecodesubmittedjson": "./src/ecztooldecodesubmittedjson/index.js",
    },
    module: {
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
                        ],
                        "@babel/preset-react"
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
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "[name].js",
        library: "[name]",
    }
};

module.exports = [
    EczCodePageStuffJSComponent,
    EczSearchJSComponent,
    EczToolDecodeSubmittedJsonCodeComponent
];
