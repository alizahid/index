var Dialog = new function() {
	jQuery.fn.break = function() {
		$(this).stop(true, true).fadeOut('fast', function() {
			$(this).remove();
		});
	};

	this.alert = function(message, callback) {
		show('alert', message, callback || $.noop);
	};

	this.confirm = function(message, callback) {
		show('confirm', message, callback || $.noop);
	};

	this.prompt = function(message, callback, buttonLabel, defaultValue) {
		show('prompt', message, callback || $.noop, buttonLabel, defaultValue);
	};

	var show = function(type, message, callback, buttonLabel, defaultValue) {
		var dialog = $('<div class="dialog">');

		var content = $('<div class="content">');

		content.append('<p>' + message);

		if (type === 'prompt') {
			var input = $('<input>').prop('type', 'text');

			if (defaultValue) {
				input.val(defaultValue);
			}

			content.append(input);
		}

		var buttons = $('<p>');

		if (type !== 'alert') {
			buttons.append('<button class="cancel">Cancel');
		}

		buttons.append('<button class="primary">' + (buttonLabel || 'Okay'));

		content.append(buttons);

		dialog.append(content).wrapInner('<div class="overlay">').appendTo('body');

		if (input) {
			input.focus().on('keyup', function(e) {
				if (e.which === 13) {
					$('.primary', dialog).click();
				}
			});
		} else {
			$('.primary', dialog).focus();
		}

		$(document).one('keyup', function(e) {
			if (e.which === 27) {
				dialog.break();
			}
		});

		dialog.on('click', function(e) {
			e.preventDefault();

			var target = $(e.target);

			if (target.hasClass('primary')) {
				if (type === 'prompt') {
					if (input.val()) {
						callback(input.val());
					}
				} else {
					callback();
				}

				dialog.break();
			} else if (target.hasClass('cancel') || target.hasClass('overlay')) {
				if (type === 'alert') {
					callback();
				}

				dialog.break();
			}
		});
	}
};
