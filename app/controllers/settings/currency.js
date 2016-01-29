import Ember from 'ember';

export default Ember.Controller.extend({
	currencies: function () {
		var query = this.query || '',
			data = this.model;

		return Ember.ArrayProxy.extend({
			arrangedContent: Ember.computed.sort('content', 'props'),
			props: ['selected:desc', 'name:asc']
		}).create({
			content: data.filter(function (currency) {
				if (currency.name.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
					return true;
				}
			})
		});
	}.property('query'),
	actions: {
		selectCurrency: function (currency) {
			this.set('query', null);

			Scroll.top();

			this.model.setEach('selected', false);

			Ember.set(currency, 'selected', true);

			localStorage.setItem('index_currency', JSON.stringify(currency));
		}
	}
});
