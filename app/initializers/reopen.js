import ENV from 'index/config/environment';

import Ember from 'ember';

import moment from 'moment';

export function initialize() {
	Ember.LinkComponent.reopen({
		attributeBindings: ['data-icon']
	});

	Ember.TextField.reopen({
		didInsertElement() {
			Ember.run.next(this, () => {
				this.notifyPropertyChange('value');
			});
		},
		valueChanged: Ember.computed('value', function() {
			if (this.$().prop('type') === 'datetime-local') {
				let date = moment(this.value).toDate(),
					timezoneOffset = date.getTimezoneOffset() * 60 * 1000;

				date = new Date(date.getTime() - timezoneOffset).toISOString();
				date = date.substr(0, date.lastIndexOf(':'));

				this.$().val(date);
			}
		})
	});

	Ember.Route.reopen({
		beforeModel() {
			if (ENV.APP.environment === 'web' && !localStorage.index_isLoggedIn && this.routeName !== 'login') {
				this.replaceWith('login');
			}
		}
	});
}

export default {
	name: 'reopen',
	after: 'cordova',
	initialize
};
