import Ember from 'ember';

export function initialize(app) {
	app.deferReadiness();

	document.addEventListener('deviceready', () => {
		AppRate.preferences.storeAppURL.ios = '1078789240';
		AppRate.preferences.storeAppURL.android = 'market://details?id=io.index';

		AppRate.preferences.customLocale = {
			title: 'Rate Index',
			message: 'If you found Index useful, please take a moment to rate the app. Thanks!',
			cancelButtonLabel: 'No, thanks',
			laterButtonLabel: 'Remind me later',
			rateButtonLabel: 'Rate it now'
		};

		window.addEventListener('statusTap', function() {
			Ember.$('.ember-application > .ember-view > section').stop(true, true).animate({
				scrollTop: 0
			});
		});

		app.advanceReadiness();
	}, false);
}

export default {
	name: 'cordova',
	initialize
};
