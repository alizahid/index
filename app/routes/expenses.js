import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('account');
	},
	setupController(controller, model) {
		this._super(...arguments);

		var onlyOne = model.get('length') === 1;

		controller.setProperties({
			account: onlyOne ? model.get('firstObject') : null,
			category: null,
			node: null,
			item: {}
		});
	}
});
