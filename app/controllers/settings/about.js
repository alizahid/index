import Ember from 'ember';

export default Ember.Controller.extend({
	about: function () {
		var messages = ['Index is an expense tracker. A fast, pretty one.',
						'Index is an expense tracking app. Enjoy!',
						'If you hadn\'t figured out already, Index is an expense tracker. Yes, I know I\'m sarcastic.'];

		var index = Math.floor(Math.random() * (messages.length));

		return messages[index];
	}.property().volatile(),

	actions: {
		openUrl: function (id) {
			var url;

			switch (id) {
				case 'designplox':
					url = 'http://designplox.com/';
					break;

				case 'icons8':
					url = 'https://icons8.com/';
					break;
			}

			if (url) {
				try {
					cordova.InAppBrowser.open(url + '?utm_medium=referral&utm_source=index', '_system');
				} catch (ex) {}
			}
		}
	}
});
