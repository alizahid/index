import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		exportData() {
			let data = this.store.adapterFor('application').data;

			if (data.item && data.item.length > 0) {
				try {
					navigator.notification.prompt('Please enter your email. We will send the link here.', (response) => {
						let button = response.buttonIndex,
							email = response.input1;

						if (button === 1) {
							$.ajax('https://designplox.com/index/data/?export', {
								dataType: 'json',
								method: 'POST',
								data: JSON.stringify({
									email: email,
									data: data.item
								}),
								beforeSend() {
									Spinner.show();
								}
							}).then((data) => {
								try {
									navigator.notification.alert(data.message, null, 'Success');
								} catch (ex) {}
							}, (xhr) => {
								try {
									navigator.notification.alert(xhr.responseJSON ? xhr.responseJSON.message : 'A server error occurred. Please try again later.', null, 'Error');
								} catch (ex) {}
							}).always(() => {
								Spinner.hide();
							});
						}
					}, 'Export data', ['Send', 'Cancel']);
				} catch (ex) {}
			} else {
				navigator.notification.alert('You have no data to export right now.', null, 'Export');
			}
		},
		clearData() {
			try {
				let store = this.store;

				navigator.notification.confirm('Are you sure?', (button) => {
					if (button === 1) {
						store.adapterFor('application').clear();
						store.unloadAll();

						navigator.notification.alert('All data cleared.', null, 'Done');
					}
				}, 'Clear all data', ['Yes', 'Cancel']);
			} catch (ex) {}
		},
		rate() {
			try {
				AppRate.promptForRating(true);
			} catch (ex) {}
		},
		share() {
			try {
				window.plugins.socialsharing.share('Check out Index, the sleek expense tracking app', 'Index', null, 'http://designplox.co/index');
			} catch (ex) {}
		}
	}
});
