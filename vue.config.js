const path = require('path')

module.exports = {
	publicPath: '/',
	outputDir: path.resolve(__dirname, '../server/public'),
	devServer: {
		proxy: 'http://localhost:80'
	},
	pluginOptions: {
		layouts: {
			preloader: false
		},
	}
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devServer.proxy = 'http://wepro.uz';
	module.exports.pluginOptions.layouts.preloader = true;
}
