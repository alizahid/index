import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
	belongsTo,
	hasMany,
} from 'ember-data/relationships';

export default Model.extend({
	name: attr(),
	items: hasMany('item'),
	currency: belongsTo('currency'),

	isDefault: Ember.computed(function() {
		return this.get('id') === 'default';
	}),

	total: Ember.computed(function() {
		return this.get('items').reduce((total, item) => {
			if (item.get('type') === 'income') {
				total += item.get('amount');
			} else if (item.get('type') === 'expense') {
				total -= item.get('amount');
			}

			return total;
		}, 0);
	}).volatile(),
});
