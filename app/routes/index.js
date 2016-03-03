import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.ArrayProxy.extend({
			arrangedContent: Ember.computed.sort('content', 'props'),
			props: ['time:desc']
		}).create({
			content: this.store.findAll('item')
		});
	}
});
