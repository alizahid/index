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
			this.get('helpers').dialog.confirm('Are you sure?', () => {
				account.destroyRecord();
			}, 'Remove account')
		}
	}
});
