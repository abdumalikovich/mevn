const path = require('path')

module.exports = {
	publicPath: '/',
	outputDir: path.resolve(__dirname, '../server/public'),
	devServer: {
		proxy: 'http://localhost:3000'
	},
	pluginOptions: {
		layouts: {
		},
	}
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devServer.proxy = 'http://example.com';
}
