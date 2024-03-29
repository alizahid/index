import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('item', params.id);
	},

	deactivate() {
		this.get('controller').model.rollbackAttributes();
	}
});
