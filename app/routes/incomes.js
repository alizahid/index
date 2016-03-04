import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('account');
	},
	setupController(controller) {
		this._super(...arguments);

		controller.setProperties({
			account: null,
			category: null,
			item: {}
		});
	}
});
