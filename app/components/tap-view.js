import Ember from 'ember';

export default Ember.Component.extend({
	index: 0,

	didInsertElement() {
		Ember.run.next(() => {
			this.set('item', this.get('content').get('firstObject'));
		});

		this.$().on('click', (e) => {
			e.preventDefault();

			this.incrementProperty('index');

			if (this.index >= this.get('content').get('length')) {
				this.set('index', 0);
			}

			this.set('item', this.get('content').objectAt(this.index));
		});
	},
	willDestroyElement() {
		this.$().off('click');
	}
});
