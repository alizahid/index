import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',

	didInsertElement() {
		let start = this.start,
			end = this.end;

		let timer,
			delay = this.delay || 500;

		this.$().on('scroll', () => {
			if (!timer) {
				if (typeof start === 'function') {
					start();
				}
			}

			if (timer) {
				Ember.run.cancel(timer);
			}

			timer = Ember.run.later(() => {
				if (typeof end === 'function') {
					end();
				}

				timer = null;
			}, delay);
		});
	}
});
