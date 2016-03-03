import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
			id: 'salary',
			name: 'Salary'
		}, {
			id: 'gift',
			name: 'Gift'
		}, {
			id: 'loan',
			name: 'Loan'
		}, {
			id: 'other',
			name: 'Other'
		}];
	},
	setupController(controller, model) {
		this._super(...arguments);

		controller.setProperties({
			category: null,
			item: {}
		});
	}
});
