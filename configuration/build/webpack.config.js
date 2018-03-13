"use strict";
exports.__esModule = true;
var path_helper_1 = require("./common/path.helper");
var webpack_1 = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = function (env) {
    var isDevBuild = !(env && env.prod);
    return {
        entry: {
            app: path_helper_1.root("src", "index.tsx"),
            vendor: path_helper_1.root("src", "vendor.ts")
        },
        output: {
            filename: "bundle.js",
            path: path_helper_1.root("dist")
        },
        // enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        resolve: {
            // add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [
                // all files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
                // all output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path_helper_1.root("src", "index.tsx")
            }),
            new webpack_1.SplitChunksPlugin({
                chunks: "all"
            })
        ]
    };
};
