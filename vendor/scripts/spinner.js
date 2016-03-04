var Spinner = new function() {
	var spinner = $('<div class="spinner"><div class="overlay"><span></span><div class="spinner"><div class="mask">').appendTo('body');

	this.show = function(message) {
		if (message) {
			$('span', spinner).text(message);
		}

		spinner.stop(true, true).fadeIn('fast');
	};

	this.hide = function() {
		$('span', spinner).text('');

		spinner.stop(true, true).fadeOut('fast');
	};
};

var Migration = new function() {
	var spinner = $('<div class="migration"><div class="overlay"><span></span><div class="spinner"><div class="mask">').appendTo('body');

	this.show = function(message) {
		if (message) {
			$('span', spinner).text(message);
		}

		spinner.stop(true, true).fadeIn('fast');
	};

	this.hide = function() {
		$('span', spinner).text('');

		spinner.stop(true, true).fadeOut('fast');
	};
};
