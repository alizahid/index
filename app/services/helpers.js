import Ember from 'ember';

export default Ember.Service.extend({
	dialog: {
		alert(message, title, callback) {
			if (window.cdv) {
				navigator.notification.alert(message, null, title);
			} else {
				Dialog.alert(message, callback);
			}
		},
		confirm(message, callback, title) {
			if (window.cdv) {
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
		prompt(message, callback, title, buttonLabel, defaultValue) {
			if (window.cdv) {
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
				Dialog.prompt(message, callback, buttonLabel, defaultValue);
			}
		}
	},
	social: {
		share(message, title, link) {
			if (window.cdv) {
				window.plugins.socialsharing.share(message, title, null, link);
			}
		},
		rate() {
			if (window.cdv) {
				AppRate.promptForRating(true);
			}
		}
	},
	datePicker(date, callback, mode) {
		if (window.cdv) {
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
		if (window.cdv) {
			cordova.InAppBrowser.open(url + '?utm_medium=referral&utm_source=index', '_system');
		}
	}
});
