import Ember from 'ember';

export default Ember.Controller.extend({
	accounts: Ember.computed(function() {
		return this.store.findAll('account');
	}).volatile(),

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
