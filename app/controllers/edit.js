import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		submit() {
			if (!this.model.get('amount')) {
				return;
			}

			this.model.save().then(() => {
				window.history.back();
			});
		},
		delete() {
			try {
				let model = this.model;

				navigator.notification.confirm('Are you sure?', (button) => {
					if (button === 1) {
						model.destroyRecord().then(() => {
							window.history.back();
						});
					}
				}, 'Remove item', ['Yes', 'Cancel']);
			} catch (ex) {}
		},
		editTime() {
			try {
				let model = this.model;

				datePicker.show({
					date: model.get('time'),
					mode: 'datetime'
				}, (time) => {
					model.set('time', time);
				});
			} catch (ex) {}
		}
	}
});
