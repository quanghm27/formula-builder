import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formular: [], activeId: 0,
    }, mutations: {
        setActiveId(state, payload) {
            state.activeId = payload
        }, addItem(state, payload) {
            if (state.formular.length === 0) {
                state.formular.push(payload)
            } else {
                const operator = findActive(state.formular[0], state.activeId)
                console.log(state.activeId, operator, state.formular[0])
                operator.items.push(payload)
            }
        },
    }, actions: {}, getters: {
        existOperator(state) {
            return !isEmpty(state.formular)
        }
    }
})

function isEmpty(obj) {
    return obj && Object.keys(obj).length === 0
}

/*
  Traversal the whole object then match by ID
 */
function findActive(obj, id) {
    if (obj.id === id) {
        return obj
    } else {
        for (const item of obj.items) {
            if (typeof item === 'object') {
                const found = findActive(item, id)
                if (found) {
                    return found
                }
            }
        }
    }
}
