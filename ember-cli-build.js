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
			browsers: ['android >= 1, ios_saf >= 1, and_chr >= 1']
		}
	});

	app.import('vendor/scripts/spinner.js');
	app.import('vendor/scripts/shortid.min.js');

	return app.toTree();
};
