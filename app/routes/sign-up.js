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
			name: null,
			email: null,
			password: null
		});
	},

	actions: {
		signUp() {
			let controller = this.get('controller');

			controller.set('error', null);

			this.get('api').signUp(controller.name, controller.email, controller.password).then(() => {
				this.transitionTo('index');
			}, (error) => {
				controller.set('error', error);
			});
		}
	}
});
