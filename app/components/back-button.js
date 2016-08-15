import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	classNames: ['back'],

	click() {
		if (window.history.length > 0) {
			window.history.back();
		} else {
			this.router.transitionTo('index');
		}
	}
});
