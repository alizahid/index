import ENV from 'index/config/environment';

export function initialize(app) {
	if (ENV.APP.environment === 'mobile') {
		app.deferReadiness();

		document.addEventListener('deviceready', function() {
			AppRate.preferences.storeAppURL.ios = '1078789240';
			AppRate.preferences.storeAppURL.android = 'market://details?id=io.index';

			AppRate.preferences.customLocale = {
				title: 'Rate Index',
				message: 'If you found Index useful, please take a moment to rate the app. Thanks!',
				cancelButtonLabel: 'No, thanks',
				laterButtonLabel: 'Remind me later',
				rateButtonLabel: 'Rate it now'
			};

			app.advanceReadiness();
		}, false);
	}
}

export default {
	name: 'cordova',
	initialize
};
