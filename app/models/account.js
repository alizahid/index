import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	items: DS.hasMany('item'),
	currency: DS.belongsTo('currency'),

	isDefault: Ember.computed(function() {
		return this.id === 'default';
	})
});
