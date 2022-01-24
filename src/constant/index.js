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
	{ open: ['bg-gray-500', 'text-white'], close: ['bg-gray-500', 'text-gray-500'], border: ['border-gray-500'] },
	{ open: ['bg-green-500', 'text-white'], close: ['bg-green-500', 'text-green-500'], border: ['border-green-500'] },
	{ open: ['bg-blue-500', 'text-white'], close: ['bg-blue-500', 'text-blue-500'], border: ['border-blue-500'] },
	{ open: ['bg-indigo-500', 'text-white'], close: ['bg-indigo-500', 'text-indigo-500'], border: ['border-indigo-500'] },
	{ open: ['bg-pink-400', 'text-white'], close: ['bg-pink-400', 'text-pink-400'], border: ['border-pink-500'] },
	{ open: ['bg-yellow-400', 'text-white'], close: ['bg-yellow-400', 'text-yellow-400'], border: ['border-yellow-500'] },
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
