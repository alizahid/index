import Ember from 'ember';

const API_URI = 'http://localhost:3000/api';

export default Ember.Service.extend({
	loggedIn() {
		return typeof localStorage.index_token !== 'undefined';
	},
	token: Ember.computed(() => {
		return localStorage.index_token;
	}).volatile(),

	login(email, password) {
		return new Ember.RSVP.Promise((resolve, reject) => {
			$.ajax({
				url: API_URI + '/login',
				method: 'POST',
				data: {
					email: email,
					password: password
				}
			}).then((data) => {
				if (data.token) {
					localStorage.setItem('index_token', data.token);

					resolve();
				} else {
					reject('An error occurred');
				}
			}, (xhr) => {
				reject(xhr.responseJSON && xhr.responseJSON.error || 'An error occurred');
			});
		});
	},
	logout() {
		return new Ember.RSVP.Promise((resolve) => {
			localStorage.removeItem('index_token');

			resolve();
		});
	},
	signUp(name, email, password) {
		return new Ember.RSVP.Promise((resolve, reject) => {
			$.ajax({
				url: API_URI + '/sign-up',
				method: 'POST',
				data: {
					name: name,
					email: email,
					password: password
				}
			}).then((data) => {
				if (data.token) {
					localStorage.setItem('index_token', data.token);

					resolve();
				} else {
					reject('An error occurred');
				}
			}, (xhr) => {
				reject(xhr.responseJSON && xhr.responseJSON.error || 'An error occurred');
			});
		});
	},
	resetPassword(email) {
		return new Ember.RSVP.Promise((resolve, reject) => {
			$.ajax({
				url: API_URI + '/reset-password',
				method: 'POST',
				data: {
					email: email
				}
			}).then((data) => {
				if (data.message) {
					resolve(data.message);
				} else {
					reject('An error occurred');
				}
			}, (xhr) => {
				reject(xhr.responseJSON && xhr.responseJSON.error || 'An error occurred');
			});
		});
	},

	sync(data) {
		return new Ember.RSVP.Promise((resolve, reject) => {
			$.ajax({
				url: API_URI + '/sync',
				method: 'POST',
				data: data
			}).then((data) => {
				if (data.message) {
					resolve(data.message);
				} else {
					reject('An error occurred');
				}
			}, (xhr) => {
				reject(xhr.responseJSON && xhr.responseJSON.error || 'An error occurred');
			});
		});
	}
});
