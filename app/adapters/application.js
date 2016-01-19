import DS from 'ember-data';

export default DS.Adapter.extend({
	namespace: 'index',

	data: {},

	init: function () {
		var data = localStorage.getItem(this.namespace);

		if (data) {
			this.set('data', JSON.parse(data));
		}
	},

	syncDelay: 5000,
	sync: function () {
		localStorage.setItem(this.namespace, JSON.stringify(this.data));
	},

	createRecord: function (store, type, snapshot) {
		var data = this.serialize(snapshot, {
			includeId: true
		});

		if (!this.data[type.modelName]) {
			this.data[type.modelName] = [];
		}

		this.data[type.modelName].pushObject(data);

		Ember.run.throttle(this, 'sync', null, this.syncDelay, false);

		return new Ember.RSVP.Promise(function (resolve) {
			resolve(data);
		});
	},

	findRecord: function (store, type, id) {
		var data = this.data[type.modelName].findBy('id', id);

		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (data) {
				resolve(data);
			} else {
				reject();
			}
		});
	},
	findAll: function (store, type) {
		var data = this.data[type.modelName];

		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (data) {
				resolve(data);
			} else {
				reject();
			}
		});
	},

	updateRecord: function (store, type, snapshot) {
		var adapter = this;

		var data = adapter.serialize(snapshot, {
			includeId: true
		});

		var index = adapter.data[type.modelName].reduce(function (value, record, index) {
			if (record.id === data.id) {
				value = index;
			}

			return value;
		}, null);

		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (index >= 0) {
				adapter.data[type.modelName][index] = data;

				Ember.run.throttle(adapter, 'sync', null, adapter.syncDelay, false);

				resolve(data);
			} else {
				reject();
			}
		});
	},

	deleteRecord: function (store, type, snapshot) {
		var adapter = this;

		var index = adapter.data[type.modelName].reduce(function (value, record, index) {
			if (record.id === data.id) {
				value = index;
			}

			return value;
		}, null);

		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (index >= 0) {
				adapter.data[type.modelName].splice(index, 1);

				Ember.run.throttle(adapter, 'sync', null, adapter.syncDelay, false);

				resolve();
			} else {
				reject();
			}
		});
	},

	generateIdForRecord: function () {
		return shortid.generate();
	},

	shouldReloadRecord: function () {
		return true;
	},
	shouldReloadAll: function () {
		return true;
	}
});
