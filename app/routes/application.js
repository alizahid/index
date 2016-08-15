import Ember from 'ember';

export default Ember.Route.extend({
	version: 2,
	delay: 1000,

	beforeModel() {
		let version = localStorage.index_version || 0;

		if (version < 2) {
			Migration.show(localStorage.index ? 'Migrating' : 'Setting up');

			return new Ember.RSVP.Promise(resolve => {
				this.store.query('currency', {
					default: true
				}).then(currency => {
					this.store.createRecord('account', {
						id: 'default',
						name: 'Default',
						currency: currency.get('firstObject')
					}).save().then(account => {
						let done = () => {
							Ember.run.later(() => {
								localStorage.setItem('index_version', this.version);

								resolve();

								Migration.hide();
							}, localStorage.index ? this.delay : 0);
						};

						this.store.findAll('item').then(items => {
							items.setEach('account', account).save();

							done();
						}, done);
					});
				});
			});
		}
	},

	afterModel() {
		try {
			ThreeDeeTouch.onHomeIconPressed = (payload) => {
				let current = Ember.getOwner(this).lookup('controller:application').currentPath;

				if (payload.type === 'income') {
					if (current === 'expenses') {
						this.replaceWith('incomes');
					} else {
						this.transitionTo('incomes');
					}
				} else if (payload.type === 'expense') {
					if (current === 'incomes') {
						this.replaceWith('expenses');
					} else {
						this.transitionTo('expenses');
					}
				}
			};
		} catch (ex) {}
	},

	model() {
		return this.store.findAll('currency');
	}
});
