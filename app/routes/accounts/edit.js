import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'accounts',

	model(params) {
		return this.store.findRecord('account', params.id);
	},
	setupController(controller, model) {
		this._super(...arguments);

		controller.set('query', model.get('currency').get('name'));

		Ember.run.next(() => {
			controller.set('currencies', null);
		});
	}
});
