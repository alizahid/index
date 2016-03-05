import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'accounts',

	setupController(controller) {
		controller.setProperties({
			query: null,
			currencies: null,
			item: {}
		});
	}
});
