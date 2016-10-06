var path = require("path");
var webpack = require("webpack");

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
				test: /\.js?$/
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!postcss-loader!sass-loader",
				include: path.join(__dirname, "style")
			}
		]
	},
	devtool: 'inline-source-map',
};
