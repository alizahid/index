import Ember from 'ember';

export default Ember.Component.extend({
	threshold: 500,
	started: 0,

	event: null,

	touchStart: function () {
		var event = Ember.run.throttle(this, 'action', null, this.threshold, false);

		this.set('event', event);
	},

	touchEnd: function () {
		Ember.run.cancel(this.event);
	}
});
