import Ember from 'ember';

export default Ember.Controller.extend({
	helpers: Ember.inject.service('helpers'),

	actions: {
		submit() {
			if (this.model.get('amount')) {
				this.model.save().then(() => {
					window.history.back();
				});
			}
		},
		remove() {
			let model = this.model;

			this.get('helpers').dialog.confirm('Are you sure?', () => {
				model.destroyRecord().then(() => {
					window.history.back();
				});
			}, 'Remove item');
		},
		editTime() {
			let model = this.model;

			this.get('helpers').datePicker(model.get('time'), (time) => {
				model.set('time', time);
			});
		}
	}
});
