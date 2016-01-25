import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	actions: {
		submit: function () {
			var time = this.model.get('time');

			Ember.set(this, 'model.time', moment(time).toDate());

			this.model.save().then(function () {
				window.history.back();
			});
		},
		delete: function () {
			try {
				var model = this.model;

				navigator.notification.confirm('Are you sure?', function (button) {
					if (button === 1) {
						model.destroyRecord().then(function () {
							window.history.back();
						});
					}
				}, 'Remove item', ['Yes', 'Cancel']);
			} catch (ex) {}
		}
	}
});
