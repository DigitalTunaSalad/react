import { Configuration } from "webpack";
export function configure(env: any): Configuration {
    const isDevBuild: boolean = !(env && env.prod);
    return {
        entry: "./src/index.tsx",
        output: {
            filename: "bundle.js",
            path: __dirname + "/dist"
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
        plugins: plugins()
    };
}