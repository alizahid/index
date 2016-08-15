/* jshint node: true */

/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {
		storeConfigInMeta: false,
		fingerprint: {
			exclude: [
				'assets/images',
			]
		},
		autoprefixer: {
			browsers: [
				'ChromeAndroid >= 1',
				'iOS >= 1',
				'Android >= 1',
			]
		},
	});

	app.import('vendor/scripts/spinner.js');
	app.import('vendor/scripts/shortid.min.js');

	return app.toTree();
};
