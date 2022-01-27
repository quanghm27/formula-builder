function multiple(items) {
	return items.reduce((acc, curr) => {
		acc *= curr

		return acc
	}, 1)
}

function ADD(items) {
	return items.reduce((acc, curr) => acc + curr)
}

function Subtraction(items) {
	return items.reduce((acc, curr) => acc - curr)
}

function DIVISION(items) {
	return items.reduce((acc, curr) => acc /= curr)
}

const OPERATOR = {
	multiply: multiple,
	add: ADD,
	sub: Subtraction,
	division: DIVISION
}

const COLOR_BANK = [
	{ open: ['bg-gray-400', 'text-gray-700'], close: ['bg-gray-400', ], border: ['border-gray-400'], hover: ['hover:bg-gray-200'] },
	{ open: ['bg-green-400', 'text-gray-700'], close: ['bg-green-400' ], border: ['border-green-400'], hover: ['hover:bg-green-200'] },
	{ open: ['bg-blue-400', 'text-gray-700'], close: ['bg-blue-400' ], border: ['border-blue-400'], hover: ['hover:bg-blue-200'] },
	{ open: ['bg-indigo-400', 'text-gray-700'], close: ['bg-indigo-400', ], border: ['border-indigo-400'], hover: ['hover:bg-indigo-200'] },
	{ open: ['bg-pink-400', 'text-gray-700'], close: ['bg-pink-400' ], border: ['border-pink-400'], hover: ['hover:bg-pink-200'] },
	{ open: ['bg-yellow-400', 'text-gray-700'], close: ['bg-yellow-400'], border: ['border-yellow-400'], hover: ['hover:bg-yellow-200'] },
]

const numberFormatter = function (value, format) {
	if (!value)
		return '0'
	if (isNaN(value))
		return '0'

	if (!format || typeof (format) !== 'string') {
		format = '0,000'
	}
	let comma = ','
	let dec = '.'
	let i18n = false
	const neg = value < 0

	value = Math.abs(value)
	if (format.substr(format.length - 2) === '/i') {
		format = format.substr(0, format.length - 2)
		i18n = true
		comma = '.'
		dec = ','
	}

	// eslint-disable-next-line prefer-const
	let hasComma = format.includes(comma)
	let psplit = (i18n ? format.replace(/[^\d,]/g, '') : format.replace(/[^\d.]/g, '')).split(dec)

	if (psplit.length > 1) {
		value = value.toFixed(psplit[1].length)
	} else if (psplit.length > 2) {
		// eslint-disable-next-line no-throw-literal
		throw ('NumberFormatException: invalid format, formats should have no more than 1 period: ' + format)
	} else {
		value = value.toFixed(0)
	}

	let fnum = value.toString()
	psplit = fnum.split('.')
	if (hasComma) {
		const cnum = psplit[0]
		const parr = []
		const j = cnum.length
		// eslint-disable-next-line no-unused-vars
		let m = Math.floor(j / 3)
		let n = cnum.length % 3 || 3
		let i

		for (i = 0; i < j; i += n) {
			if (i !== 0) {
				n = 3
			}

			parr[parr.length] = cnum.substr(i, n)
			// eslint-disable-next-line no-unused-vars
			m -= 1
		}
		fnum = parr.join(comma)
		if (psplit[1]) {
			fnum += dec + psplit[1]
		}
	} else if (psplit[1]) {
		fnum = psplit[0] + dec + psplit[1]
	}

	return (neg ? '-' : '') + format.replace(/[\d,?.]+/, fnum)
}

export { OPERATOR, COLOR_BANK, numberFormatter }
