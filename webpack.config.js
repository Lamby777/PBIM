const path = require("path");
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
	mode: "development",
	entry: [
		path.resolve(__dirname) + "/main.ts",
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [{
					loader: 'ts-loader',
					options: {
						configFile: "tsconfig.webpack.json"
					}
				}],
				exclude: /node_modules/,
			},
		],
	},

	resolve: {
		extensions: [".ts", ".js"],
	},
	
	output: {
		filename: "packed.js",
		path: path.resolve(__dirname) + "/dist",
	},

	plugins: [new CleanTerminalPlugin()]
}