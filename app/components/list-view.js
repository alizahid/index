import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',

	items: 20,
	delay: 100,
	threshold: Ember.computed(() => {
		return Ember.$(window).height() / 3;
	}),

	init() {
		this._super(...arguments);

		this.set('data', []);
	},

	contentChanged: Ember.observer('content', 'content.[]', function() {
		this.set('data', []);

		this.didInsertElement();
	}),

	didInsertElement() {
		let listView = this.$();

		let loadMore = () => {
			Ember.run.next(() => {
				if (listView.outerHeight() >= listView.prop('scrollHeight')) {
					this.loadMore(loadMore);
				}
			});
		};

		loadMore();

		listView.on('scroll', () => {
			if (listView.outerHeight() + listView.scrollTop() > listView.prop('scrollHeight') - this.get('threshold')) {
				Ember.run.throttle(this, 'loadMore', null, this.delay, false);
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

		this.data.pushObjects(this.content.slice(index, index + this.items));

		if (typeof callback === 'function') {
			callback();
		}
	}
});
