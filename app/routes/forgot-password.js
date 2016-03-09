import Ember from 'ember';

export default Ember.Route.extend({
	api: Ember.inject.service('api'),

	beforeModel() {
		if (localStorage.index_token) {
			this.replaceWith('index');
		}
	},

	setupController(controller) {
		controller.setProperties({
			success: null,
			error: null,
			email: null
		});
	},

	actions: {
		resetPassword() {
			let controller = this.get('controller');

			controller.setProperties({
				success: null,
				error: null
			});

			this.get('api').resetPassword(controller.email).then((message) => {
				controller.setProperties({
					success: message,
					email: null
				});
			}, (error) => {
				controller.set('error', error);
			});
		}
	}
});
