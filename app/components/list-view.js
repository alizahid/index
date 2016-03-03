import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',

	items: 5,
	delay: 250,
	threshold: Ember.computed(() => {
		return $(window).height() / 3;
	}),

	init() {
		this._super(...arguments);

		this.set('data', []);
	},

	didInsertElement() {
		let _this = this,
			listView = this.$();

		let threshold = this.get('threshold');

		let loadMore = () => {
			if (listView.outerHeight() >= listView.prop('scrollHeight')) {
				_this.loadMore(loadMore);
			}
		};

		Ember.run.next(loadMore);

		listView.on('scroll', () => {
			if (listView.outerHeight() + listView.scrollTop() > listView.prop('scrollHeight') - threshold) {
				Ember.run.throttle(_this, 'loadMore', null, _this.delay, false);
			}
		});
	},
	willDestroyElement() {
		this.$().off('scroll');
	},

	loadMore(callback) {
		let index = this.data.length;

		if (index === this.content.get('length')) {
			return;
		}

		Ember.run.next(this, () => {
			this.data.pushObjects(this.content.slice(index, index + this.items));

			if (typeof callback === 'function') {
				callback();
			}
		});
	}
});
