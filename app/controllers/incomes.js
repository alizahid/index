import Ember from 'ember';

export default Ember.Controller.extend({
	categories: [{
		id: 'salary',
		name: 'Salary'
	}, {
		id: 'gift',
		name: 'Gift'
	}, {
		id: 'loan',
		name: 'Loan'
	}, {
		id: 'other',
		name: 'Other'
	}],

	actions: {
		startOver() {
			this.setProperties({
				account: null,
				category: null,
				item: {}
			});
		},
		selectAccount(account) {
			this.set('account', account);
		},
		selectCategory(category) {
			this.set('category', category);
		},
		submit() {
			if (this.item.amount) {
				Ember.set(this.item, 'type', 'income');

				Ember.set(this.item, 'account', this.account);
				Ember.set(this.item, 'category', this.category.id);

				if (!this.item.description) {
					Ember.set(this.item, 'description', this.category.name);
				}

				this.store.createRecord('item', this.item).save().then(() => {
					window.history.back();
				});
			}
		}
	}
});
