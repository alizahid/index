var Scroll = {
	top: function () {
		this.to(0);
	},
	to: function (value) {
		$('section').stop(true, true).animate({
			scrollTop: value
		});
	}
};
