import Ember from 'ember';

import moment from 'moment';

export default Ember.Route.extend({
	beforeModel: function () {
		var store = this.store;

		store.findAll('item').then(null, function () {
			store.createRecord('item', {
				type: 'expense',
				category: 'food-drinking',
				description: 'Food · Drinking',
				amount: 200,
				time: moment().subtract(2, 'hours').toDate()
			}).save();

			store.createRecord('item', {
				type: 'expense',
				category: 'shopping',
				description: 'Shopping',
				amount: 750,
				time: moment().subtract(5, 'hours').toDate()
			}).save();

			store.createRecord('item', {
				type: 'expense',
				category: 'transport-taxi',
				description: 'Transport · Taxi',
				amount: 40,
				time: moment().subtract(8, 'hours').toDate()
			}).save();

			store.createRecord('item', {
				type: 'expense',
				category: 'groceries',
				description: 'Groceries',
				amount: 420,
				time: moment().subtract(28, 'hours').toDate()
			}).save();

			store.createRecord('item', {
				type: 'income',
				category: 'shopping-home',
				description: 'Refund from IKEA',
				amount: 180,
				time: moment().subtract(40, 'hours').toDate()
			}).save();

			store.createRecord('item', {
				type: 'income',
				category: 'salary',
				description: 'Salary',
				amount: 2500,
				time: moment().subtract(3, 'days').toDate()
			}).save();
		});
	}
});
