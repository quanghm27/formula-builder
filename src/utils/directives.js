import Vue from 'vue'

Vue.directive('keyboardKey', {
	bind(elm, binding, vNode) {
		const { modifiers, value } = binding
		console.log(modifiers)
		console.log(value)
		if (modifiers.showKBKey && value) {
			console.log(binding)
			console.log(vNode)
		}
	}
})
