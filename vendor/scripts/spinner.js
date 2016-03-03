const Spinner = new function() {
	'use strict';

	let loading = $('#loading');

	this.show = () => {
		loading.stop(true, true).fadeIn('fast');
	};

	this.hide = () => {
		loading.stop(true, true).fadeOut('fast');
	};
};
