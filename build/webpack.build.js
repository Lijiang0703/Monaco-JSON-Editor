const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        index: path.resolve(__dirname,'../src/index'),
        "json.worker": "monaco-editor/esm/vs/language/json/json.worker"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'../dist'),
        library: "monaco-json-editor",
        libraryTarget: "umd",
        libraryExport: "default"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude:[
                    path.resolve(__dirname, "../node_modules")
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            }
        ]
    },
    resolve:{
        extensions: ['.js','.vue']
    },
    externals: {
        // vue: 'Vue',
        // element: 'element-ui'
    },
    plugins: [
        new MonacoWebpackPlugin({
            languages:["json","javascript"],
            features:["coreCommands","find"],
            output: './monaco-editor'
        }),
        new VueLoaderPlugin()
    ]
}