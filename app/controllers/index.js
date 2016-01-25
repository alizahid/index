import Ember from 'ember';

export default Ember.Controller.extend({
	footer: true,

	total: function () {
		return this.model.reduce(function (total, item) {
			if (item.get('type') === 'income') {
				total += item.get('amount');
			} else if (item.get('type') === 'expense') {
				total -= item.get('amount');
			}

			return total;
		}, 0);
	}.property('model', 'model.[]'),

	actions: {
		showFooter: function () {
			this.set('footer', true);
		},
		hideFooter: function () {
			this.set('footer', false);
		},

		editItem: function (item) {
			this.transitionToRoute('edit', item);
		}
	}
});
