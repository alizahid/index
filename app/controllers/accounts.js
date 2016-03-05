import Ember from 'ember';

export default Ember.Controller.extend({
	helpers: Ember.inject.service('helpers'),

	actions: {
		addAccount() {
			this.get('helpers').dialog.prompt('Enter a name for the new account', (name) => {
				this.store.createRecord('account', {
					name: name
				}).save();
			}, 'New account', 'Add');
		},
		editAccount(account) {
			this.get('helpers').dialog.prompt('Change account name', (name) => {
				account.set('name', name);

				account.save();
			}, 'Edit account', 'Save', account.get('name'));
		},
		removeAccount(account) {
			if (account.id === 'default') {
				this.get('helpers').dialog.alert('You cannot delete the default account');
			} else {
				this.get('helpers').dialog.confirm('Are you sure you? Data will be merged with the default account', () => {
					this.store.query('item', {
						account: account.id
					}).then((items) => {
						if (items.get('length') > 0) {
							this.store.findRecord('account', 'default').then((defaultAccount) => {
								items.setEach('account', defaultAccount).save().then(() => {
									account.destroyRecord();
								});
							});
						} else {
							account.destroyRecord();
						}
					});

				}, 'Remove account');
			}
		}
	}
});
