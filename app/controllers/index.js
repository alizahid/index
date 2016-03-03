import Ember from 'ember';

export default Ember.Controller.extend({
	total: Ember.computed('model', 'model.[]', function() {
		return this.model.reduce(function(total, item) {
			if (item.get('type') === 'income') {
				total += item.get('amount');
			} else if (item.get('type') === 'expense') {
				total -= item.get('amount');
			}

			return total;
		}, 0);
	}),

	actions: {
		showFooter() {
			this.set('footer', true);
		},
		hideFooter() {
			this.set('footer', false);
		},
		editItem(item) {
			this.transitionToRoute('edit', item);
		}
	}
});
