import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function () {
	this.route('settings');

	this.route('incomes');

	this.route('expenses');

	this.route('edit');
});

export default Router;
