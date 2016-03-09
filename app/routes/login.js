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
			error: null,
			email: null,
			password: null
		});
	},

	actions: {
		login() {
			var controller = this.get('controller');

			if (controller.email && controller.password) {
				controller.set('error', null);

				this.get('api').login(controller.email, controller.password).then(() => {
					this.transitionTo('index');
				}, (error) => {
					controller.set('error', error);
				});
			}
		}
	}
});
