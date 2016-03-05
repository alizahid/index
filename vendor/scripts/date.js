var DatePicker = new function() {
	this.show = function(date, callback) {
		var romeWrapper = $('<div class="rome">').hide().appendTo('body').stop(true, true).fadeIn('fast');

		var picker = rome(romeWrapper.get(0), {
			initialValue: date,
			timeInterval: 300
		}).on('data', function() {
			if (date && typeof callback === 'function') {
				callback(this.getDate());
			}
		});

		$(document).one('keyup', function(e) {
			if (e.which === 27 && picker) {
				destroy();
			}
		});

		romeWrapper.on('click', function(e) {
			if ($(e.target).hasClass('rome')) {
				destroy();
			}
		});

		var destroy = function() {
			romeWrapper.stop(true, true).fadeOut('fast', () => {
				romeWrapper.remove();
			});

			picker.destroy();
		}
	}
};
