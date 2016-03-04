import Ember from 'ember';

export default Ember.Route.extend({
	version: 2,
	delay: 2000,

	beforeModel() {
		let version = localStorage.index_version || 0;

		if (version < 2) {
			Migration.show('Migrating');

			return new Ember.RSVP.Promise((resolve) => {
				this.store.createRecord('account', {
					id: 'default',
					name: 'Default'
				}).save().then((account) => {
					let done = () => {
						Ember.run.later(() => {
							localStorage.setItem('index_version', this.version);

							resolve();

							Migration.hide();
						}, this.delay);
					};

					this.store.findAll('item').then((items) => {
						items.setEach('account', account).save();

						done();
					}, done);
				});
			});
		}
	}
});
