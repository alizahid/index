/* jshint node: true */

'use strict';

module.exports = function(environment) {
	let ENV = {
		modulePrefix: 'index',
		environment: environment,
		defaultLocationType: 'auto',
		EmberENV: {
			FEATURES: {}
		},

		APP: {},

		contentSecurityPolicyMeta: true,
		contentSecurityPolicy: {
			'default-src': ["'self'", 'data:', 'gap:'],
			'script-src': ["'self'", "'unsafe-inline'"],
			'font-src': ["'self'"],
			'connect-src': ["'self'", 'https://designplox.com'],
			'img-src': ["'self'"],
			'style-src': ["'self'", "'unsafe-inline'"],
			'media-src': ["'self'", '*']
		}
	};

	if (environment === 'development') {
		ENV.contentSecurityPolicy['script-src'].push('http://localhost:30820');

		ENV.contentSecurityPolicy['connect-src'].push('http://localhost:30820');
		ENV.contentSecurityPolicy['connect-src'].push('ws://localhost:30820');
	}

	if (environment === 'test') {
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {}

	return ENV;
};
