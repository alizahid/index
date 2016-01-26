export function initialize() {
	if (!localStorage.index_currency) {
		localStorage.setItem('index_currency', '{"id":"USD","name":"US Dollar","symbol":"$"}');
	}
}

export default {
	name: 'setup',
	initialize
};
