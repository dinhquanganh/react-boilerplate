const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let config = {
	target: 'browserslist',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		alias: {
			react: path.join(__dirname, 'node_modules', 'react')
		}
	},
	devServer: {
		host: 'localhost',
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(s[ac]|c)ss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},
	devtool: '',
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			favicon: './src/assets/icons/react.png'
		})
	]
};

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.target = 'web';
		config.devtool = 'source-map';
		config.plugins.push(new ReactRefreshWebpackPlugin());
	} else {
	}
	return config;
};
