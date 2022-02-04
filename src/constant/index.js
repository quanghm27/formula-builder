const COLOR_BANK = [
	{ open: ['bg-gray-400', 'text-gray-700'], close: ['bg-gray-400', ], border: ['border-gray-400'], hover: ['hover:bg-gray-200'] },
	{ open: ['bg-red-400', 'text-gray-700'], close: ['bg-red-400'], border: ['border-red-400'], hover: ['hover:bg-red-200'] },
	{ open: ['bg-orange-400', 'text-gray-700'], close: ['bg-orange-400'], border: ['border-orange-400'], hover: ['hover:bg-orange-200'] },
	{ open: ['bg-yellow-400', 'text-gray-700'], close: ['bg-yellow-400'], border: ['border-yellow-400'], hover: ['hover:bg-yellow-200'] },
	{ open: ['bg-green-400', 'text-gray-700'], close: ['bg-green-400' ], border: ['border-green-400'], hover: ['hover:bg-green-200'] },
	{ open: ['bg-teal-400', 'text-gray-700'], close: ['bg-teal-400' ], border: ['border-teal-400'], hover: ['hover:bg-teal-200'] },
	{ open: ['bg-blue-400', 'text-gray-700'], close: ['bg-blue-400' ], border: ['border-blue-400'], hover: ['hover:bg-blue-200'] },
	{ open: ['bg-indigo-400', 'text-gray-700'], close: ['bg-indigo-400', ], border: ['border-indigo-400'], hover: ['hover:bg-indigo-200'] },
	{ open: ['bg-purple-400', 'text-gray-700'], close: ['bg-purple-400', ], border: ['border-purple-400'], hover: ['hover:bg-purple-200'] },
	{ open: ['bg-pink-400', 'text-gray-700'], close: ['bg-pink-400' ], border: ['border-pink-400'], hover: ['hover:bg-pink-200'] },
]
const OPTION_FORMULAS = (() => {
	const formulas = ['multiply', 'addition', 'subtraction', 'division']

	return formulas.map(item => {
		return {
			type: 'formula',
			value: item,
		}
	})
})()
const OPTION_NUMBERS = (() => {
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

	return numbers.map(item => {
		return {
			type: 'number',
			value: item,
		}
	})
})()

const getShortcutByKey = (key) => {
	const formulaShortcut = OPTION_FORMULAS.map(x => {
		const key = x.value.substr(0, 1)

		return { ...x, key }
	})

	const numberShortcut = [...OPTION_NUMBERS].map(x => {
		const key = x.value.toString()

		return { ...x, key }
	})

	const actionShortcut = [
		{ type: 'action', value: 'Enter', key: 'Enter' },
		{ type: 'action', value: 'Escape', key: 'Escape' },
		{ type: 'action', value: 'Backspace', key: 'Backspace' },
	]

	return formulaShortcut.find(x => x.key === key)
		|| numberShortcut.find(x =>x.key === key)
		|| actionShortcut.find(x =>x.key === key)
}
export { OPTION_FORMULAS, OPTION_NUMBERS, COLOR_BANK, getShortcutByKey }
