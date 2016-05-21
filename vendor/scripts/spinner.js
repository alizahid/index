var Spinner = new function() {
	var spinner = $('<div class="spinner"><div class="overlay"><span></span><div class="spinner"><div class="mask">').appendTo('body');

	this.show = function(message) {
		if (message) {
			$('span', spinner).text(message);
		}

		spinner.stop(true, true).show();
	};

	this.hide = function() {
		$('span', spinner).text('');

		spinner.stop(true, true).hide();
	};
};

var Migration = new function() {
	var spinner = $('<div class="migration"><div class="overlay"><span></span><div class="spinner"><div class="mask">').appendTo('body');

	this.show = function(message) {
		if (message) {
			$('span', spinner).text(message);
		}

		spinner.stop(true, true).show();
	};

	this.hide = function() {
		$('span', spinner).text('');

		spinner.stop(true, true).hide();
	};
};
