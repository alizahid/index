var Spinner = new function() {
	var spinner = $('<div class="spinner"><div class="overlay"><div class="spinner"><div class="mask">').appendTo('body');

	this.show = function() {
		spinner.stop(true, true).fadeIn('fast');
	};

	this.hide = function() {
		spinner.stop(true, true).fadeOut('fast');
	};
};
