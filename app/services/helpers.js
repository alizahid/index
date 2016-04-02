import ENV from 'index/config/environment';

import Ember from 'ember';

const isMobile = () => {
	return ENV.APP.environment === 'mobile';
};

const isWeb = () => {
	return ENV.APP.environment === 'web';
};

const isApp = () => {
	return ENV.APP.environment === 'app';
};

export default Ember.Service.extend({
	env: {
		mobile: isMobile(),
		web: isWeb(),
		app: isApp()
	},

	dialog: {
		alert(message, title, callback) {
			if (isMobile()) {
				navigator.notification.alert(message, null, title);
			} else {
				Dialog.alert(message, callback);
			}
		},
		confirm(message, callback, title) {
			if (isMobile()) {
				navigator.notification.confirm(message, (button) => {
					if (button === 1) {
						if (typeof callback === 'function') {
							callback();
						}
					}
				}, title, ['Yes', 'Cancel']);
			} else {
				Dialog.confirm(message, callback);
			}
		},
		prompt(message, callback, title, buttonLabel, defaultValue, placeholder) {
			if (isMobile()) {
				navigator.notification.prompt(message, (response) => {
					let button = response.buttonIndex,
						data = response.input1;

					if (button === 1) {
						if (data && typeof callback === 'function') {
							callback(data);
						}
					}
				}, title, [buttonLabel || 'Okay', 'Cancel'], defaultValue);
			} else {
				Dialog.prompt(message, callback, buttonLabel, defaultValue, placeholder);
			}
		}
	},
	social: {
		share(message, title, link) {
			if (isMobile()) {
				window.plugins.socialsharing.share(message, title, null, link);
			}
		},
		rate() {
			if (isMobile()) {
				AppRate.promptForRating(true);
			}
		}
	},
	datePicker(date, callback, mode) {
		if (isMobile()) {
			datePicker.show({
				date: date,
				mode: mode || 'datetime'
			}, (date) => {
				if (date && typeof callback === 'function') {
					callback(date);
				}
			});
		} else {
			DatePicker.show(date, callback);
		}
	},
	openURL(url) {
		if (isMobile()) {
			cordova.InAppBrowser.open(url + '?utm_medium=referral&utm_source=index', '_system');
		}
	}
});
