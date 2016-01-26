import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		selectCurrency: function (currency) {
			this.model.setEach('selected', false);

			Ember.set(currency, 'selected', true);

			localStorage.setItem('index_currency', JSON.stringify(currency));
		}
	}
});
