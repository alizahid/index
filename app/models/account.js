import Ember from 'ember';
import DS from 'ember-data';

const Account = DS.Model.extend({
	name: DS.attr('string'),
	items: DS.hasMany('item'),
	currency: DS.belongsTo('currency'),

	isDefault: Ember.computed(function() {
		return this.id === 'default';
	}),

	total: Ember.computed(function() {
		return this.get('items').reduce(function(total, item) {
			if (item.get('type') === 'income') {
				total += item.get('amount');
			} else if (item.get('type') === 'expense') {
				total -= item.get('amount');
			}

			return total;
		}, 0);
	}).volatile()
});

Account.reopenClass({
	FIXTURES: [{
		id: 'default',
		name: 'Default',
		currency: 'USD'
	}]
});

export default Account;
