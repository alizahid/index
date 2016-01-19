import Ember from 'ember';

export function formatCurrency([amount]) {
	var whole = parseInt(amount).toString(),
		decimal = parseFloat(amount).toFixed(2),
		length = whole.length;

	if (length > 3) {
		var prefix = whole.substr(0, length % 3);

		whole = prefix + (prefix.length > 0 ? ',' : '') + whole.substr(length % 3).replace(/(\d{3})(?=\d)/g, '$1,');
	}

	return whole + '.' + decimal.slice(decimal.indexOf('.') + 1);
}

export default Ember.Helper.helper(formatCurrency);
