var Scroll = new function() {
	var section = $('section');

	this.top = function() {
		this.to(0);
	};

	this.to = function(value) {
		section.stop(true, true).animate({
			scrollTop: value
		});
	};
};
