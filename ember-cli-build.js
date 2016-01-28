/*jshint node:true*/

/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
	var app = new EmberApp(defaults, {
		storeConfigInMeta: false,
		fingerprint: {
			enabled: false
		},
		autoprefixer: {
			browsers: ['last 2 version']
		}
	});

	app.import('vendor/scripts/loading.js');
	app.import('vendor/scripts/shortid.min.js');

	return app.toTree();
};
