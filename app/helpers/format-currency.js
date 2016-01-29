import Ember from 'ember';

export function formatCurrency([amount, roundDecimalIfZero]) {
	var currency = JSON.parse(localStorage.index_currency);

	var whole = Math.abs(parseInt(amount)).toString(),
		decimal = parseFloat(amount).toFixed(2),
		negative = amount < 0,
		length = whole.length;

	if (length > 3) {
		var prefix = whole.substr(0, length % 3);

		whole = prefix + (prefix.length > 0 ? ',' : '') + whole.substr(length % 3).replace(/(\d{3})(?=\d)/g, '$1,');
	}

	var data = '<span class="symbol">' + (currency.symbol || currency.id) + '</span>' + (negative ? ' -' : '') + whole;

	if (roundDecimalIfZero) {
		decimal = decimal.slice(decimal.indexOf('.'));

		if (parseFloat(decimal) > 0) {
			data += decimal;
		}
	} else {
		data += decimal.slice(decimal.indexOf('.'));
	}

	return Ember.String.htmlSafe(data);
}

export default Ember.Helper.helper(formatCurrency);
