import Ember from 'ember';

export default Ember.Controller.extend({
	category: null,
	item: {},

	actions: {
		selectCategory: function (category) {
			this.set('category', category);
		},
		submit: function () {
			Ember.set(this.item, 'category', this.category.id);
			Ember.set(this.item, 'type', 'income');

			if (!this.item.description) {
				Ember.set(this.item, 'description', this.category.name);
			}
			
			this.store.createRecord('item', this.item).save().then(function (item) {
				window.history.back();
			});
		}
	}
});