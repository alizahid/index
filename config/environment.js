/* jshint node: true */

'use strict';

module.exports = function(environment, appEnv) {
	let ENV = {
		modulePrefix: 'index',
		environment: environment,
		defaultLocationType: 'auto',
		EmberENV: {
			FEATURES: {}
		},

		APP: {
			api: 'http://index.designplox.co'
		},

		contentSecurityPolicyMeta: true,
		contentSecurityPolicy: {
			'default-src': ["'self'", 'data:', 'gap:'],
			'script-src': ["'self'", "'unsafe-inline'"],
			'font-src': ["'self'"],
			'connect-src': ["'self'"],
			'img-src': ["'self'"],
			'style-src': ["'self'", "'unsafe-inline'"],
			'media-src': ["'self'", '*']
		}
	};

	ENV.contentSecurityPolicy['connect-src'].push(ENV.APP.api);

	if (environment === 'development') {}

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
