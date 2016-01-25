import Ember from 'ember';
import moment from 'moment';

export function initialize() {
	Ember.TextField.reopen({
		valueChanged: function () {
			if (this.$()[0].type === 'datetime-local') {
				Ember.run.next(this, function () {
					var date = moment(this.value).toDate(),
						timezoneOffset = date.getTimezoneOffset() * 60 * 1000;

					date = new Date(date.getTime() - timezoneOffset).toISOString();
					date = date.substr(0, date.lastIndexOf(':'));

					this.$().val(date);
				});
			}
		}.on('didInsertElement').observes('value')
	});
}

export default {
	name: 'reopen-textfield',
	initialize
};
