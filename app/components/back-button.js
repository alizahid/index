import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	classNames: ['back'],
	click() {
		if (window.history.length > 1) {
			window.history.back();
		} else {
			this.get('controller').transitionToRoute('index');
		}
	}
});
