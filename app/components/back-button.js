import Ember from 'ember';

export default Ember.Component.extend({
	routing: Ember.inject.service('-routing'),

	tagName: 'a',
	classNames: ['back'],

	click() {
		if (window.history.length > 1) {
			window.history.back();
		} else {
			this.get('routing').transitionTo('index');
		}
	}
});
