var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		index: path.join(__dirname, "src", "index.js")
	},
	output: {
		path: path.join(__dirname, "build"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				include: [
					path.join(__dirname, "src")
				],
				test: /\.js$/,
				query: {
					presets: ["es2015"]
				}
			},
			{
				test: /\.scss$/,
				include: path.join(__dirname, "style"),
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
};
