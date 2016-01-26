import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',

	didInsertElement: function () {
		var start = this.start,
			end = this.end;

		var timer,
			delay = this.delay || 500;

		this.$().on('scroll', function () {
			if (!timer) {
				if (typeof start === 'function') {
					start();
				}
			}

			if (timer) {
				Ember.run.cancel(timer);
			}

			timer = Ember.run.later(function () {
				if (typeof end === 'function') {
					end();
				}

				timer = null;
			}, delay);
		});
	}
});
