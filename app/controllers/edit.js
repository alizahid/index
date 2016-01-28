import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		submit: function () {
			if (!this.model.get('amount')) {
				return;
			}

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
		},
		editTime: function () {
			try {
				var model = this.model;

				datePicker.show({
					date: model.get('time'),
					mode: 'datetime'
				}, function (time) {
					model.set('time', time);
				});
			} catch (ex) {}
		}
	}
});
