var Dialog = new function() {
	jQuery.fn.destroy = function() {
		$(this).stop(true, true).fadeOut('fast', function() {
			$(this).remove();
		});
	};

	this.alert = function(message, callback) {
		show('alert', message, callback);
	};

	this.confirm = function(message, callback) {
		show('confirm', message, callback);
	};

	this.prompt = function(message, callback, buttonLabel, defaultValue) {
		show('prompt', message, callback, buttonLabel, defaultValue);
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
		} else {

		}

		var buttons = $('<p>');

		if (type !== 'alert') {
			buttons.append('<button class="cancel">Cancel');
		}

		buttons.append('<button class="primary">' + (buttonLabel || 'Okay'));

		content.append(buttons);

		dialog.append(content).wrapInner('<div class="overlay">').appendTo('body');

		if (input) {
			input.focus();
		}

		dialog.on('click', function(e) {
			e.preventDefault();

			var target = $(e.target);

			if (target.hasClass('primary')) {
				if (typeof callback === 'function') {
					if (type === 'prompt') {
						if (input.val()) {
							callback(input.val());
						}
					} else if (type === 'confirm') {
						callback(true);
					} else {
						callback();
					}
				}

				dialog.destroy();
			} else if (target.hasClass('cancel') || target.hasClass('overlay')) {
				if (type === 'alert') {
					callback();
				}

				dialog.destroy();
			}
		});
	}
};