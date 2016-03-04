import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return [{
			id: 'food',
			name: 'Food',
			nodes: [{
				id: 'order-in',
				name: 'Order in'
			}, {
				id: 'eating-out',
				name: 'Eating out'
			}, {
				id: 'drinking',
				name: 'Drinking'
			}, {
				id: 'other',
				name: 'Other'
			}]
		}, {
			id: 'groceries',
			name: 'Groceries'
		}, {
			id: 'transport',
			name: 'Transport',
			nodes: [{
				id: 'bus',
				name: 'Bus'
			}, {
				id: 'taxi',
				name: 'Taxi'
			}, {
				id: 'train',
				name: 'Train'
			}, {
				id: 'other',
				name: 'Other'
			}]
		}, {
			id: 'recreation',
			name: 'Recreation',
			nodes: [{
				id: 'concert',
				name: 'Concert'
			}, {
				id: 'travel',
				name: 'Travel'
			}, {
				id: 'theater',
				name: 'Theater'
			}, {
				id: 'other',
				name: 'Other'
			}]
		}, {
			id: 'personal',
			name: 'Personal',
			nodes: [{
				id: 'hair',
				name: 'Hair'
			}, {
				id: 'spa',
				name: 'Spa'
			}, {
				id: 'gym',
				name: 'Gym'
			}, {
				id: 'other',
				name: 'Other'
			}]
		}, {
			id: 'bills',
			name: 'Bills',
			nodes: [{
				id: 'rent',
				name: 'Rent'
			}, {
				id: 'phone',
				name: 'Phone'
			}, {
				id: 'electric',
				name: 'Electric'
			}, {
				id: 'heat',
				name: 'Heat'
			}, {
				id: 'gas',
				name: 'Gas'
			}, {
				id: 'other',
				name: 'Other'
			}]
		}, {
			id: 'shopping',
			name: 'Shopping',
			nodes: [{
				id: 'clothes',
				name: 'Clothes'
			}, {
				id: 'jewelry',
				name: 'Jewelry'
			}, {
				id: 'gadgets',
				name: 'Gadgets'
			}, {
				id: 'home',
				name: 'Home'
			}, {
				id: 'electronics',
				name: 'Electronics'
			}, {
				id: 'other',
				name: 'Other'
			}]
		}, {
			id: 'other',
			name: 'Other'
		}];
	},
	setupController: function(controller) {
		this._super(...arguments);

		controller.setProperties({
			category: null,
			node: null,
			item: {}
		});
	}
});
