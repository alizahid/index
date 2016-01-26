import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		exportData: function () {

		},
		clearData: function () {
			try {
				var store = this.store;

				navigator.notification.confirm('Are you sure?', function (button) {
					if (button === 1) {
						store.adapterFor('application').clear();

						navigator.notification.alert('All data cleared.', null, 'Done');
					}
				}, 'Clear all data', ['Yes', 'Cancel']);
			} catch (ex) {}
		},
		rate: function () {
			try {
				AppRate.promptForRating(true);
			} catch (ex) {}
		},
		share: function () {
			try {
				window.plugins.socialsharing.share('Check out Index, the sleek expense tracking app', 'Index', null, 'http://designplox.co/index');
			} catch (ex) {}
		}
	}
});
