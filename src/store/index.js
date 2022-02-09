import Vue from "vue"
import Vuex from "vuex"
import { isEmpty, findNode } from "@/helpers";
import * as _cloneDeep from 'lodash.clonedeep'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		formula: {},
	},
	mutations: {
		addNode(state, payload) {
			if (isEmpty(state.formula)) {
				state.formula = payload
			} else {
				const newFormula = _cloneDeep(state.formula)
				const formula = findNode(newFormula, payload.parentId)
				formula.items.push(payload)
				state.formula = newFormula
			}
		},
		editNode(state, payload) {
			if (!payload.parentId) {
				// Edit root Node
				state.formula = payload
			} else {
				const newFormula = _cloneDeep(state.formula)
				const parent = findNode(newFormula, payload.parentId)
				const index = parent.items.findIndex(x => x.id === payload.id)
				parent.items.splice(index, 1, payload)
				state.formula = newFormula
			}
		},
		deleteNode(state, payload) {
			if (!payload.parentId) {
				// Delete root Node
				state.formula = {}
			} else {
				const newFormula = _cloneDeep(state.formula)
				const parent = findNode(newFormula, payload.parentId)
				const index = parent.items.findIndex(x => x.id === payload.id)
				parent.items.splice(index, 1)
				state.formula = newFormula
			}
		},
		resetFormula() {
			this.replaceState({ formula: {} });
		},
	},
	actions: {},
	getters: {
		existFormula(state) {
			return !isEmpty(state.formula)
		}
	}
})
