import Ember from 'ember';
import DS from 'ember-data';

var Currency = DS.Model.extend({
	name: DS.attr('string'),
	symbol: DS.attr('string'),

	print: Ember.computed(function() {
		return this.get('symbol') || this.get('id');
	}).volatile()
});

Currency.reopenClass({
	FIXTURES: [{
		id: 'USD',
		name: 'US Dollar',
		symbol: '$',
		default: true
	}, {
		id: 'AED',
		name: 'Emirati Dirham'
	}, {
		id: 'AFN',
		name: 'Afghan Afghani',
		symbol: '\u060b'
	}, {
		id: 'ALL',
		name: 'Albanian Lek',
		symbol: 'Lek'
	}, {
		id: 'AMD',
		name: 'Armenian Dram'
	}, {
		id: 'ANG',
		name: 'Dutch Guilder',
		symbol: '\u0192'
	}, {
		id: 'AOA',
		name: 'Angolan Kwanza'
	}, {
		id: 'ARS',
		name: 'Argentine Peso',
		symbol: '$'
	}, {
		id: 'AUD',
		name: 'Australian Dollar',
		symbol: '$'
	}, {
		id: 'AWG',
		name: 'Aruban or Dutch Guilder',
		symbol: '\u0192'
	}, {
		id: 'AZN',
		name: 'Azerbaijani New Manat',
		symbol: '\u043c\u0430\u043d'
	}, {
		id: 'BAM',
		name: 'Bosnian Convertible Marka',
		symbol: 'KM'
	}, {
		id: 'BBD',
		name: 'Barbadian or Bajan Dollar',
		symbol: '$'
	}, {
		id: 'BDT',
		name: 'Bangladeshi Taka'
	}, {
		id: 'BGN',
		name: 'Bulgarian Lev',
		symbol: '\u043b\u0432'
	}, {
		id: 'BHD',
		name: 'Bahraini Dinar'
	}, {
		id: 'BIF',
		name: 'Burundian Franc'
	}, {
		id: 'BMD',
		name: 'Bermudian Dollar',
		symbol: '$'
	}, {
		id: 'BND',
		name: 'Bruneian Dollar',
		symbol: '$'
	}, {
		id: 'BOB',
		name: 'Bolivian Boliviano',
		symbol: '$b'
	}, {
		id: 'BRL',
		name: 'Brazilian Real',
		symbol: 'R$'
	}, {
		id: 'BSD',
		name: 'Bahamian Dollar',
		symbol: '$'
	}, {
		id: 'BTN',
		name: 'Bhutanese Ngultrum'
	}, {
		id: 'BWP',
		name: 'Botswana Pula',
		symbol: 'P'
	}, {
		id: 'BYR',
		name: 'Belarusian Ruble',
		symbol: 'p.'
	}, {
		id: 'BZD',
		name: 'Belizean Dollar',
		symbol: 'BZ$'
	}, {
		id: 'CAD',
		name: 'Canadian Dollar',
		symbol: '$'
	}, {
		id: 'CDF',
		name: 'Congolese Franc'
	}, {
		id: 'CHF',
		name: 'Swiss Franc',
		symbol: 'CHF'
	}, {
		id: 'CLP',
		name: 'Chilean Peso',
		symbol: '$'
	}, {
		id: 'CNY',
		name: 'Chinese Yuan Renminbi',
		symbol: '\u00a5'
	}, {
		id: 'COP',
		name: 'Colombian Peso',
		symbol: '$'
	}, {
		id: 'CRC',
		name: 'Costa Rican Colon',
		symbol: '\u20a1'
	}, {
		id: 'CUC',
		name: 'Cuban Convertible Peso'
	}, {
		id: 'CUP',
		name: 'Cuban Peso',
		symbol: '\u20b1'
	}, {
		id: 'CVE',
		name: 'Cape Verdean Escudo'
	}, {
		id: 'CZK',
		name: 'Czech Koruna',
		symbol: 'K\u010d'
	}, {
		id: 'DJF',
		name: 'Djiboutian Franc'
	}, {
		id: 'DKK',
		name: 'Danish Krone',
		symbol: 'kr'
	}, {
		id: 'DOP',
		name: 'Dominican Peso',
		symbol: 'RD$'
	}, {
		id: 'DZD',
		name: 'Algerian Dinar'
	}, {
		id: 'EGP',
		name: 'Egyptian Pound',
		symbol: '\u00a3'
	}, {
		id: 'ERN',
		name: 'Eritrean Nakfa'
	}, {
		id: 'ETB',
		name: 'Ethiopian Birr'
	}, {
		id: 'EUR',
		name: 'Euro',
		symbol: '\u20ac'
	}, {
		id: 'FJD',
		name: 'Fijian Dollar',
		symbol: '$'
	}, {
		id: 'FKP',
		name: 'Falkland Island Pound',
		symbol: '\u00a3'
	}, {
		id: 'GBP',
		name: 'British Pound',
		symbol: '\u00a3'
	}, {
		id: 'GEL',
		name: 'Georgian Lari'
	}, {
		id: 'GGP',
		name: 'Guernsey Pound',
		symbol: '\u00a3'
	}, {
		id: 'GHS',
		name: 'Ghanaian Cedi'
	}, {
		id: 'GIP',
		name: 'Gibraltar Pound',
		symbol: '\u00a3'
	}, {
		id: 'GMD',
		name: 'Gambian Dalasi'
	}, {
		id: 'GNF',
		name: 'Guinean Franc'
	}, {
		id: 'GTQ',
		name: 'Guatemalan Quetzal',
		symbol: 'Q'
	}, {
		id: 'GYD',
		name: 'Guyanese Dollar',
		symbol: '$'
	}, {
		id: 'HKD',
		name: 'Hong Kong Dollar',
		symbol: '$'
	}, {
		id: 'HNL',
		name: 'Honduran Lempira',
		symbol: 'L'
	}, {
		id: 'HRK',
		name: 'Croatian Kuna',
		symbol: 'kn'
	}, {
		id: 'HTG',
		name: 'Haitian Gourde'
	}, {
		id: 'HUF',
		name: 'Hungarian Forint',
		symbol: 'Ft'
	}, {
		id: 'IDR',
		name: 'Indonesian Rupiah',
		symbol: 'Rp'
	}, {
		id: 'ILS',
		name: 'Israeli Shekel',
		symbol: '\u20aa'
	}, {
		id: 'IMP',
		name: 'Isle of Man Pound',
		symbol: '\u00a3'
	}, {
		id: 'INR',
		name: 'Indian Rupee',
		symbol: '\u20b9'
	}, {
		id: 'IQD',
		name: 'Iraqi Dinar'
	}, {
		id: 'IRR',
		name: 'Iranian Rial',
		symbol: '\ufdfc'
	}, {
		id: 'ISK',
		name: 'Icelandic Krona',
		symbol: 'kr'
	}, {
		id: 'JEP',
		name: 'Jersey Pound',
		symbol: '\u00a3'
	}, {
		id: 'JMD',
		name: 'Jamaican Dollar',
		symbol: 'J$'
	}, {
		id: 'JOD',
		name: 'Jordanian Dinar'
	}, {
		id: 'JPY',
		name: 'Japanese Yen',
		symbol: '\u00a5'
	}, {
		id: 'KES',
		name: 'Kenyan Shilling'
	}, {
		id: 'KGS',
		name: 'Kyrgyzstani Som',
		symbol: '\u043b\u0432'
	}, {
		id: 'KHR',
		name: 'Cambodian Riel',
		symbol: '\u17db'
	}, {
		id: 'KMF',
		name: 'Comoran Franc'
	}, {
		id: 'KPW',
		name: 'North Korean Won',
		symbol: '\u20a9'
	}, {
		id: 'KRW',
		name: 'South Korean Won',
		symbol: '\u20a9'
	}, {
		id: 'KWD',
		name: 'Kuwaiti Dinar'
	}, {
		id: 'KYD',
		name: 'Caymanian Dollar',
		symbol: '$'
	}, {
		id: 'KZT',
		name: 'Kazakhstani Tenge',
		symbol: '\u043b\u0432'
	}, {
		id: 'LAK',
		name: 'Lao or Laotian Kip',
		symbol: '\u20ad'
	}, {
		id: 'LBP',
		name: 'Lebanese Pound',
		symbol: '\u0644.\u0644'
	}, {
		id: 'LKR',
		name: 'Sri Lankan Rupee',
		symbol: '\u20a8'
	}, {
		id: 'LRD',
		name: 'Liberian Dollar',
		symbol: '$'
	}, {
		id: 'LSL',
		name: 'Basotho Loti'
	}, {
		id: 'LYD',
		name: 'Libyan Dinar'
	}, {
		id: 'MAD',
		name: 'Moroccan Dirham'
	}, {
		id: 'MDL',
		name: 'Moldovan Leu'
	}, {
		id: 'MGA',
		name: 'Malagasy Ariary'
	}, {
		id: 'MKD',
		name: 'Macedonian Denar',
		symbol: '\u0434\u0435\u043d'
	}, {
		id: 'MMK',
		name: 'Burmese Kyat'
	}, {
		id: 'MNT',
		name: 'Mongolian Tughrik',
		symbol: '\u20ae'
	}, {
		id: 'MOP',
		name: 'Macau Pataca'
	}, {
		id: 'MRO',
		name: 'Mauritanian Ouguiya'
	}, {
		id: 'MUR',
		name: 'Mauritian Rupee',
		symbol: '\u20a8'
	}, {
		id: 'MVR',
		name: 'Maldivian Rufiyaa'
	}, {
		id: 'MWK',
		name: 'Malawian Kwacha'
	}, {
		id: 'MXN',
		name: 'Mexican Peso',
		symbol: '$'
	}, {
		id: 'MYR',
		name: 'Malaysian Ringgit',
		symbol: 'RM'
	}, {
		id: 'MZN',
		name: 'Mozambican Metical',
		symbol: 'MT'
	}, {
		id: 'NAD',
		name: 'Namibian Dollar',
		symbol: '$'
	}, {
		id: 'NGN',
		name: 'Nigerian Naira',
		symbol: '\u20a6'
	}, {
		id: 'NIO',
		name: 'Nicaraguan Cordoba',
		symbol: 'C$'
	}, {
		id: 'NOK',
		name: 'Norwegian Krone',
		symbol: 'kr'
	}, {
		id: 'NPR',
		name: 'Nepalese Rupee',
		symbol: '\u20a8'
	}, {
		id: 'NZD',
		name: 'New Zealand Dollar',
		symbol: '$'
	}, {
		id: 'OMR',
		name: 'Omani Rial',
		symbol: '\ufdfc'
	}, {
		id: 'PAB',
		name: 'Panamanian Balboa',
		symbol: 'B\/.'
	}, {
		id: 'PEN',
		name: 'Peruvian Nuevo Sol',
		symbol: 'S\/.'
	}, {
		id: 'PGK',
		name: 'Papua New Guinean Kina'
	}, {
		id: 'PHP',
		name: 'Philippine Peso',
		symbol: '\u20b1'
	}, {
		id: 'PKR',
		name: 'Pakistani Rupee',
		symbol: '\u20a8'
	}, {
		id: 'PLN',
		name: 'Polish Zloty',
		symbol: 'z\u0142'
	}, {
		id: 'PYG',
		name: 'Paraguayan Guarani',
		symbol: 'Gs'
	}, {
		id: 'QAR',
		name: 'Qatari Riyal',
		symbol: '\ufdfc'
	}, {
		id: 'RON',
		name: 'Romanian New Leu',
		symbol: 'lei'
	}, {
		id: 'RSD',
		name: 'Serbian Dinar',
		symbol: '\u0414\u0438\u043d.'
	}, {
		id: 'RUB',
		name: 'Russian Ruble',
		symbol: '\u0440\u0443\u0431'
	}, {
		id: 'RWF',
		name: 'Rwandan Franc'
	}, {
		id: 'SAR',
		name: 'Saudi Arabian Riyal',
		symbol: '\ufdfc'
	}, {
		id: 'SBD',
		name: 'Solomon Islander Dollar',
		symbol: '$'
	}, {
		id: 'SCR',
		name: 'Seychellois Rupee',
		symbol: '\u20a8'
	}, {
		id: 'SDG',
		name: 'Sudanese Pound'
	}, {
		id: 'SEK',
		name: 'Swedish Krona',
		symbol: 'kr'
	}, {
		id: 'SGD',
		name: 'Singapore Dollar',
		symbol: '$'
	}, {
		id: 'SHP',
		name: 'Saint Helenian Pound',
		symbol: '\u00a3'
	}, {
		id: 'SLL',
		name: 'Sierra Leonean Leone'
	}, {
		id: 'SOS',
		name: 'Somali Shilling',
		symbol: 'S'
	}, {
		id: 'SPL',
		name: 'Seborgan Luigino'
	}, {
		id: 'SRD',
		name: 'Surinamese Dollar',
		symbol: '$'
	}, {
		id: 'STD',
		name: 'Sao Tomean Dobra'
	}, {
		id: 'SVC',
		name: 'Salvadoran Colon',
		symbol: '$'
	}, {
		id: 'SYP',
		name: 'Syrian Pound',
		symbol: '\u00a3'
	}, {
		id: 'SZL',
		name: 'Swazi Lilangeni'
	}, {
		id: 'THB',
		name: 'Thai Baht',
		symbol: '\u0e3f'
	}, {
		id: 'TJS',
		name: 'Tajikistani Somoni'
	}, {
		id: 'TMT',
		name: 'Turkmenistani Manat'
	}, {
		id: 'TND',
		name: 'Tunisian Dinar'
	}, {
		id: 'TOP',
		name: 'Tongan Pa\'anga'
	}, {
		id: 'TRY',
		name: 'Turkish Lira'
	}, {
		id: 'TTD',
		name: 'Trinidadian Dollar',
		symbol: 'TT$'
	}, {
		id: 'TVD',
		name: 'Tuvaluan Dollar',
		symbol: '$'
	}, {
		id: 'TWD',
		name: 'Taiwan New Dollar',
		symbol: 'NT$'
	}, {
		id: 'TZS',
		name: 'Tanzanian Shilling'
	}, {
		id: 'UAH',
		name: 'Ukrainian Hryvnia',
		symbol: '\u20b4'
	}, {
		id: 'UGX',
		name: 'Ugandan Shilling'
	}, {
		id: 'UYU',
		name: 'Uruguayan Peso',
		symbol: '$U'
	}, {
		id: 'UZS',
		name: 'Uzbekistani Som',
		symbol: '\u043b\u0432'
	}, {
		id: 'VEF',
		name: 'Venezuelan Bolivar',
		symbol: 'Bs'
	}, {
		id: 'VND',
		name: 'Vietnamese Dong',
		symbol: '\u20ab'
	}, {
		id: 'VUV',
		name: 'Ni-Vanuatu Vatu'
	}, {
		id: 'WST',
		name: 'Samoan Tala'
	}, {
		id: 'XAF',
		name: 'Central African CFA Franc BEAC'
	}, {
		id: 'XAG',
		name: 'Silver Ounce'
	}, {
		id: 'XAU',
		name: 'Gold Ounce'
	}, {
		id: 'XCD',
		name: 'East Caribbean Dollar',
		symbol: '$'
	}, {
		id: 'XDR',
		name: 'IMF Special Drawing Rights'
	}, {
		id: 'XOF',
		name: 'CFA Franc'
	}, {
		id: 'XPD',
		name: 'Palladium Ounce'
	}, {
		id: 'XPF',
		name: 'CFP Franc'
	}, {
		id: 'XPT',
		name: 'Platinum Ounce'
	}, {
		id: 'YER',
		name: 'Yemeni Rial',
		symbol: '\ufdfc'
	}, {
		id: 'ZAR',
		name: 'South African Rand',
		symbol: 'S'
	}, {
		id: 'ZMW',
		name: 'Zambian Kwacha'
	}, {
		id: 'ZWD',
		name: 'Zimbabwean Dollar',
		symbol: 'Z$'
	}]
});

export default Currency;
