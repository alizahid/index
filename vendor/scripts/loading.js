var Loading = {
	show: function () {
		$('#loading').stop(true, true).fadeIn('fast');
	},
	hide: function () {
		$('#loading').stop(true, true).fadeOut('fast');
	}
};
