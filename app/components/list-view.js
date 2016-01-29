import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',

	items: 5,
	delay: 250,
	threshold: function () {
		return $(window).height() / 3;
	}.property(),

	onInit: function () {
		this.set('data', []);
	}.on('init'),

	didInsertElement: function () {
		var _this = this,
			listView = this.$();

		var threshold = this.get('threshold');

		var loadMore = function () {
			if (listView.outerHeight() >= listView.prop('scrollHeight')) {
				_this.loadMore(loadMore);
			}
		};

		Ember.run.next(loadMore);

		listView.on('scroll', function () {
			if (listView.outerHeight() + listView.scrollTop() > listView.prop('scrollHeight') - threshold) {
				Ember.run.throttle(_this, 'loadMore', null, _this.delay, false);
			}
		});
	},
	willDestroyElement: function () {
		this.$().off('scroll');
	},

	loadMore: function (callback) {
		var index = this.data.length;

		if (index === this.content.get('length')) {
			return;
		}

		Ember.run.next(this, function () {
			this.data.pushObjects(this.content.slice(index, index + this.items));

			if (typeof callback === 'function') {
				callback();
			}
		});
	}
});
