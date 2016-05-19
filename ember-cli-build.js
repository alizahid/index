/*jshint node:true*/

/* global require, module */

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = (defaults) => {
	let app = new EmberApp(defaults, {
		storeConfigInMeta: false,
		fingerprint: {
			exclude: ['assets']
		},
		autoprefixer: {
			browsers: ['> 1%']
		}
	});

	app.import('vendor/scripts/spinner.js');
	app.import('vendor/scripts/shortid.min.js');

	return app.toTree();
};
