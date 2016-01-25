import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['touch-view'],

	threshold: 500,
	started: 0,

	touchStart: function (e) {
		this.set('started', Date.now());
	},

	touchEnd: function (e) {
		if (Date.now() - this.started > this.threshold) {
			if (typeof this.action === 'function') {
				this.action();
			}
		}

		this.set('started', 0);
	}
});
