var Spinner = new function() {
	var loading = $('#loading');

	this.show = function() {
		loading.stop(true, true).fadeIn('fast');
	};

	this.hide = function() {
		loading.stop(true, true).fadeOut('fast');
	};
};
