import Ember from 'ember';

export default Ember.Controller.extend({
	helpers: Ember.inject.service('helpers'),

	queryChanged: Ember.observer('query', function() {
		let currencies = null;

		if (this.query && this.query.length > 1) {
			currencies = Ember.ArrayProxy.extend({
				arrangedContent: Ember.computed.sort('content', 'props'),
				props: ['name:asc']
			}).create({
				content: this.store.peekAll('currency').filter((currency) => {
					if (currency.get('name').toLowerCase().indexOf(this.query.toLowerCase()) >= 0) {
						return true;
					}
				}).splice(0, 4)
			});
		}

		this.set('currencies', currencies);
	}),

	actions: {
		selectCurrency(currency) {
			this.set('query', currency.get('name'));

			if (this.item) {
				this.set('item.currency', currency);
			} else {
				this.set('model.currency', currency);
			}

			Ember.run.next(() => {
				this.set('currencies', null);
			});
		},
		add() {
			if (this.item.name && this.item.currency) {
				this.store.createRecord('account', this.item).save().then(() => {
					window.history.back();
				});
			}
		},
		edit() {
			let balance = parseFloat(this.model.get('total')),
				newBalance = parseFloat(this.total);

			if (balance === newBalance) {
				this.model.save().then(() => {
					window.history.back();
				});
			} else {
				let type;

				if (balance > newBalance) {
					type = 'expense';
				} else {
					type = 'income';
				}

				this.store.createRecord('item', {
					account: this.model,
					type: type,
					category: 'adjustment',
					description: 'Adjustment',
					amount: Math.abs(balance - newBalance)
				}).save().then(() => {
					this.model.save().then(() => {
						window.history.back();
					});
				});
			}
		},
		remove() {
			if (this.model.get('id') === 'default') {
				this.get('helpers').dialog.alert('You cannot remove the default account');
			} else {
				this.get('helpers').dialog.confirm('Are you sure you? Data will be merged with the default account', () => {
					this.store.query('item', {
						account: this.model.get('id')
					}).then((items) => {
						if (items.get('length') > 0) {
							this.store.findRecord('account', 'default').then(defaultAccount => {
								items.setEach('account', defaultAccount).save().then(() => {
									this.model.destroyRecord().then(() => {
										window.history.back();
									});
								});
							});
						} else {
							this.model.destroyRecord().then(() => {
								window.history.back();
							});
						}
					});

				}, 'Remove account');
			}
		}
	}
});
