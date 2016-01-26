export default {
	name: 'cordova',
	initialize: function (app) {
		app.deferReadiness();

		document.addEventListener('deviceready', function () {
			try {
				AppRate.preferences.storeAppURL.ios = '123123123';
				AppRate.preferences.storeAppURL.android = 'market://details?id=io.index';

				AppRate.preferences.customLocale = {
					title: 'Rate Index',
					message: 'If you found Index useful, please take a moment to rate the app. Thanks!',
					cancelButtonLabel: 'No, thanks',
					laterButtonLabel: 'Remind me later',
					rateButtonLabel: 'Rate it now'
				};
			} catch (ex) {}

			app.advanceReadiness();
		}, false);
	}
};
