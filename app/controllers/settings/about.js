import Ember from 'ember';

export default Ember.Controller.extend({
	helpers: Ember.inject.service('helpers'),

	about: Ember.computed(() => {
		let messages = ['Index is an expense tracker. A fast, pretty one.',
			'Index is an expense tracking app. Enjoy!',
			'If you haven\'t figured out already, Index is an expense tracker. Yes, I know I\'m sarcastic.'
		];

		let index = Math.floor(Math.random() * (messages.length));

		return messages[index];
	}).volatile(),

	actions: {
		openUrl(id) {
			let url;

			switch (id) {
				case 'designplox':
					url = 'http://designplox.com/';
					break;

				case 'icons8':
					url = 'https://icons8.com/';
					break;
			}

			if (url) {
				this.get('helpers').openURL(url);
			}
		}
	}
});
