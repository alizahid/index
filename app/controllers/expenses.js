import Ember from 'ember';

export default Ember.Controller.extend({
	category: null,
	node: null,
	item: {},

	actions: {
		selectCategory: function (category) {
			this.set('category', category);

			if (!category.nodes) {
				this.set('node', true);
			}
		},
		selectNode: function (node) {
			this.set('node', node);
		},
		submit: function () {
			Ember.set(this.item, 'type', 'expense');

			var description = this.category.name;

			if (this.node === true) {
				Ember.set(this.item, 'category', this.category.id);
			} else {
				Ember.set(this.item, 'category', this.category.id + '-' + this.node.id);

				description += ' · ' + this.node.name;
			}

			if (!this.item.description) {
				Ember.set(this.item, 'description', description);
			}

			this.store.createRecord('item', this.item).save().then(function (item) {
				window.history.back();
			});
		}
	}
});
