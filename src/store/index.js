import Vue from "vue"
import Vuex from "vuex"
import { isEmpty, findNode } from "@/helpers";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		formula: {},
		activeNode: null,
	},
	mutations: {
		setActiveNode(state, payload) {
			state.activeNode = payload
		},
		addNode(state, payload) {
			if (isEmpty(state.formula)) {
				state.formula = payload
			} else {
				const formula = findNode(state.formula, state.activeNode.id)
				formula.items.push(payload)
			}
		},
		editNode(state, payload) {
			console.log(payload)
			if (!payload.parentId) {
				// Edit root Node
				state.formula = payload
			} else {
				const parent = findNode(state.formula, payload.parentId)
				const index = parent.items.findIndex(x => x.id === payload.id)
				parent.items.splice(index, 1, payload)
			}
		},
		deleteNode(state, payload) {
			if (!payload.parentId) {
				// Delete root Node
				state.formula = {}
			} else {
				const parent = findNode(state.formula, payload.parentId)
				const index = parent.items.findIndex(x => x.id === payload.id)
				parent.items.splice(index, 1)
			}
		}
	},
	actions: {},
	getters: {
		existFormula(state) {
			return !isEmpty(state.formula)
		}
	}
})
