import Ember from 'ember';
import ENV from 'index/config/environment';

export default Ember.Controller.extend({
	helpers: Ember.inject.service('helpers'),

	actions: {
		exportData() {
			let dialog = this.get('helpers').dialog;

			let data = this.store.adapterFor('application').data;

			if (data.item && (data.item.length > 0 || data.account.length > 0)) {
				dialog.prompt('Please enter your email. We will send the link here', (email) => {
					let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

					if (regex.test(email)) {
						Ember.$.ajax(ENV.APP.api + '/export', {
							dataType: 'json',
							contentType: 'application/json',
							method: 'POST',
							data: JSON.stringify({
								email: 'alizahidw@gmail.com',
								data: data.item
							}),
							beforeSend() {
								Spinner.show();
							}
						}).then((data) => {
							dialog.alert('A download link has been sent to your email. Get to it before the hackers!', 'Success');
						}, (xhr) => {
							dialog.alert(xhr.responseJSON ? xhr.responseJSON.message : 'Something went wrong. We are calling the internet police', 'Error');
						}).always(() => {
							Spinner.hide();
						});
					} else {
						dialog.alert('Invalid email', 'Export');
					}
				}, 'Export', null, null, 'Email');
			} else {
				dialog.alert('You have no data to export right now', 'Export');
			}
		},
		clearData() {
			let dialog = this.get('helpers').dialog;

			let store = this.store;

			dialog.confirm('Are you sure?', () => {
				Spinner.show();

				store.adapterFor('application').clear();
				store.unloadAll();

				this.store.findAll('currency').then((currencies) => {
					this.store.createRecord('account', {
						id: 'default',
						name: 'Default',
						currency: currencies.get('firstObject')
					}).save().then(() => {
						Spinner.hide();

						window.history.back();
					});
				});
			}, 'Remove item');
		},
		rate() {
			this.get('helpers').social.rate();
		},
		share() {
			this.get('helpers').social.share('Check out Index, the sleek expense tracking app', 'Index', 'http://designplox.co/index');
		}
	}
});
