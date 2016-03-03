import Ember from 'ember';

export default Ember.Controller.extend({
	category: null,
	item: {},

	actions: {
		selectCategory(category) {
			this.set('category', category);
		},
		submit() {
			if (!this.item.amount) {
				return;
			}

			Ember.set(this.item, 'type', 'income');

			Ember.set(this.item, 'category', this.category.id);

			if (!this.item.description) {
				Ember.set(this.item, 'description', this.category.name);
			}

			this.store.createRecord('item', this.item).save().then(() => {
				window.history.back();
			});
		}
	}
});
