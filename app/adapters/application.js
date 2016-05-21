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

		let exists = this.data[type.modelName].findBy('id', data.id);

		return new Ember.RSVP.Promise((resolve) => {
			if (exists) {
				resolve(exists);
			} else {
				this.data[type.modelName].pushObject(data);

				this.sync();

				resolve(data);
			}

			Spinner.hide();
		});
	},

	findRecord(store, type, id) {
		Spinner.show();

		let data = (this.data[type.modelName] || type.FIXTURES || []).findBy('id', id);

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

		let data = this.data[type.modelName] || type.FIXTURES || [];

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

		let index = (adapter.data[type.modelName] || []).reduce((value, record, index) => {
			if (record.id === data.id) {
				value = index;
			}

			return value;
		}, null);

		return new Ember.RSVP.Promise((resolve, reject) => {
			if (index === null) {
				return reject();
			}

			if (index >= 0) {
				adapter.data[type.modelName][index] = data;

				this.sync();

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

				this.sync();

				resolve();
			} else {
				reject();
			}

			Spinner.hide();
		});
	},

	query(store, type, query) {
		Spinner.show();

		let keys = Object.keys(query);

		let data = (this.data[type.modelName] || type.FIXTURES || []).filter((item) => {
			let include = true;

			keys.forEach((key) => {
				if (item[key] !== query[key]) {
					include = false;
				}
			});

			return include;
		});

		return new Ember.RSVP.Promise((resolve, reject) => {
			if (data) {
				resolve(data);
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
