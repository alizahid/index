import Ember from 'ember';

export default Ember.Service.extend({
	dialog: {
		alert(message, title) {
			navigator.notification.alert(message, null, title);
		},
		confirm(message, callback, title) {
			navigator.notification.confirm(message, (button) => {
				if (button === 1) {
					if (typeof callback === 'function') {
						callback();
					}
				}
			}, title, ['Yes', 'Cancel']);
		},
		prompt(message, callback, title, buttonLabel, defaultValue) {
			navigator.notification.prompt(message, (response) => {
				let button = response.buttonIndex,
					data = response.input1;

				if (button === 1) {
					if (data && typeof callback === 'function') {
						callback(data);
					}
				}
			}, title, [buttonLabel || 'Okay', 'Cancel'], defaultValue);
		}
	},
	social: {
		share(message, title, link) {
			window.plugins.socialsharing.share(message, title, null, link);
		},
		rate() {
			AppRate.promptForRating(true);
		}
	},
	datePicker(date, callback, mode) {
		datePicker.show({
			date: date,
			mode: mode || 'datetime',
			androidTheme: 5
		}, (date) => {
			if (date && date <= new Date() && typeof callback === 'function') {
				callback(date);
			}
		});
	},
	openURL(url) {
		cordova.InAppBrowser.open(url + '?utm_medium=referral&utm_source=index', '_system');
	}
});
