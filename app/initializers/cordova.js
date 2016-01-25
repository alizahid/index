export default {
	name: 'cordova',
	initialize: function (app) {
		app.deferReadiness();

		document.addEventListener('deviceready', function () {
			app.advanceReadiness();
		}, false);
	}
};
