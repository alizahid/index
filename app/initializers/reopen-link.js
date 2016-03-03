import Ember from 'ember';

export function initialize() {
	Ember.LinkComponent.reopen({
		attributeBindings: ['data-icon']
	});
}

export default {
	name: 'reopen-link',
	after: 'cordova',
	initialize
};
