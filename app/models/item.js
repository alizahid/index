import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
	belongsTo,
} from 'ember-data/relationships';

export default Model.extend({
	account: belongsTo('account'),
	type: attr(),
	category: attr(),
	description: attr(),
	amount: attr('number'),
	time: attr({
		defaultValue() {
			return new Date();
		}
	})
});
