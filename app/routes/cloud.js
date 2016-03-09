import config from 'index/config/environment';

import Ember from 'ember';

export default Ember.Route.extend({
	api: Ember.inject.service('api'),

	setupController(controller) {
		controller.set('user', localStorage.index_token);
	},

	actions: {
		logout() {
			let controller = this.get('controller');

			this.get('api').logout().then(() => {
				if (config.APP.environment === 'web') {
					this.replaceWith('login');
				} else {
					controller.set('user', null);
				}
			});
		},
		login() {
			this.transitionTo('login');
		},
		signUp() {
			this.transitionTo('sign-up');
		}
	}
});
