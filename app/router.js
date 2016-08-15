import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('settings', function() {
		this.route('about');
	});

	this.route('incomes');

	this.route('expenses');

	this.route('edit', {
		path: 'edit/:id'
	});

	this.route('accounts', function() {
		this.route('add');

		this.route('edit', {
			path: 'edit/:id'
		});
	});
});

export default Router;
