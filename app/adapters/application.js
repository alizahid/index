import Ember from 'ember';

import DS from 'ember-data';

export default DS.Adapter.extend({
	namespace: 'index',

	data: {},

	init() {
		let data = localStorage.getItem(this.namespace);

		if (data) {
			this.set('data', JSON.parse(data));
		}
	},

	syncDelay: 0,
	sync() {
		localStorage.setItem(this.namespace, JSON.stringify(this.data));
	},

	clear() {
		this.set('data', {});

		this.sync();
	},

	createRecord(store, type, snapshot) {
		Spinner.show();

		let data = this.serialize(snapshot, {
			includeId: true
		});

		if (!this.data[type.modelName]) {
			this.data[type.modelName] = [];
		}

		this.data[type.modelName].pushObject(data);

		Ember.run.throttle(this, 'sync', null, this.syncDelay, false);

		return new Ember.RSVP.Promise((resolve) => {
			resolve(data);

			Spinner.hide();
		});
	},

	findRecord(store, type, id) {
		Spinner.show();

		let data = this.data[type.modelName].findBy('id', id);

		return new Ember.RSVP.Promise((resolve, reject) => {
			if (data) {
				resolve(data);
			} else {
				reject();
			}

			Spinner.hide();
		});
	},
	findAll(store, type) {
		Spinner.show();

		let data = this.data[type.modelName];

		return new Ember.RSVP.Promise((resolve, reject) => {
			if (data) {
				resolve(data);
			} else {
				reject();
			}

			Spinner.hide();
		});
	},

	updateRecord(store, type, snapshot) {
		Spinner.show();

		let adapter = this;

		let data = adapter.serialize(snapshot, {
			includeId: true
		});

		let index = adapter.data[type.modelName].reduce((value, record, index) => {
			if (record.id === data.id) {
				value = index;
			}

			return value;
		}, null);

		return new Ember.RSVP.Promise((resolve, reject) => {
			if (index >= 0) {
				adapter.data[type.modelName][index] = data;

				Ember.run.throttle(adapter, 'sync', null, adapter.syncDelay, false);

				resolve(data);
			} else {
				reject();
			}

			Spinner.hide();
		});
	},

	deleteRecord(store, type, snapshot) {
		Spinner.show();

		let adapter = this;

		let index = adapter.data[type.modelName].reduce((value, record, index) => {
			if (record.id === snapshot.id) {
				value = index;
			}

			return value;
		}, null);

		return new Ember.RSVP.Promise((resolve, reject) => {
			if (index >= 0) {
				adapter.data[type.modelName].splice(index, 1);

				Ember.run.throttle(adapter, 'sync', null, adapter.syncDelay, false);

				resolve();
			} else {
				reject();
			}

			Spinner.hide();
		});
	},

	generateIdForRecord() {
		return shortid.generate();
	},

	shouldReloadRecord() {
		return true;
	},
	shouldReloadAll() {
		return true;
	}
});
