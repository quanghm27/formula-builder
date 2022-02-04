const isEmpty = (obj) => !!obj && Object.keys(obj).length === 0 && obj.constructor === Object

const findNode = (node, id)  => {
	if (node.id === id) {
		return node
	} else {
		for (const item of node.items) {
			if (item.type === 'formula') {
				const found = findNode(item, id)
				if (found) {
					return found
				}
			}
		}
	}
}

const multiply = (items)  => {
	return items.reduce((acc, curr) => {
		acc *= curr

		return acc
	}, 1)
}
const addition = (items) => items.reduce((acc, curr) => acc + curr)
const subtraction = (items) => items.reduce((acc, curr) => acc - curr)
const division = (items) => items.reduce((acc, curr) => acc /= curr)
const OPERATOR = { multiply, addition, subtraction, division }

const calculateFormula = (obj) => {
	if (obj.items && obj.items.length < 2) {
		return
	}
	if (obj.items.every(x => x.type === 'number')) {
		// All of node is number
		return OPERATOR[obj.value](getValueByKey(obj.items, 'value'))
	} else {
		let params = []
		obj.items.forEach(item => {
			if (item.type === 'formula') {
				params.push(calculateFormula(item))
			} else {
				params.push(+(item.value))
			}
		})
		if (params.length === obj.items.length) {
			console.log(obj.value, params)
			console.log("total: ", OPERATOR[obj.value](params))

			return OPERATOR[obj.value](params)
		}
	}
}

const getValueByKey = (arr, key) => {
	return arr.map(x => +x[key])
}
const numberFormatter = function (value, format) {

	if (isNaN(value)) {
		throw ('NumberFormatException: not a number')
	}

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
	let psplit = i18n
		? format.replace(/[^\d,]/g, '')
		: format.replace(/[^\d.]/g, '')

	psplit = psplit.split(dec)

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

export { numberFormatter, calculateFormula, findNode, isEmpty }
