import DS from 'ember-data';

export default DS.Model.extend({
	account: DS.belongsTo('account'),
	type: DS.attr('string'),
	category: DS.attr('string'),
	description: DS.attr('string'),
	amount: DS.attr('number'),
	time: DS.attr('date', {
		defaultValue() {
			return new Date();
		}
	})
});
