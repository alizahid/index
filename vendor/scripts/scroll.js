const Scroll = new function() {
	'use strict';

	let section = $('section');

	this.top = () => {
		this.to(0);
	};

	this.to = (value) => {
		section.stop(true, true).animate({
			scrollTop: value
		});
	};
};
