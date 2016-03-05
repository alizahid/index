/*jshint node:true*/

/* global require, module */

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = (defaults) => {
	let app = new EmberApp(defaults, {
		storeConfigInMeta: false,
		fingerprint: {
			enabled: false
		},
		autoprefixer: {
			browsers: ['android >= 1, ios_saf >= 1, and_chr >= 1']
		}
	});

	app.import('vendor/scripts/spinner.js');
	app.import('vendor/scripts/scroll.js');
	app.import('vendor/scripts/dialog.js');
	app.import('vendor/scripts/date.js');
	app.import('vendor/scripts/shortid.min.js');

	app.import('bower_components/moment/min/moment.min.js');

	app.import('bower_components/rome/dist/rome.min.css');
	app.import('bower_components/rome/dist/rome.standalone.min.js');

	return app.toTree();
};
