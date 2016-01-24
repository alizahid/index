import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
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
	setupController: function (controller, model) {
		this._super(controller, model);

		controller.setProperties({
			category: null,
			item: {}
		});
	}
});
