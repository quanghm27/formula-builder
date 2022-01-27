import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formular: [], activeId: 0,
    },
    mutations: {
        setActiveId(state, payload) {
            state.activeId = payload
        },
        addNode(state, payload) {
            if (state.formular.length === 0) {
                state.formular.push(payload)
            } else {
                const operator = findActive(state.formular[0], state.activeId)
                operator.items.push(payload)
            }
        },
        editNode(state, payload) {
            if (!payload.parentId && !payload.indexInParent) {
                // Edit root Node
                state.formular.splice(0, 1, payload.value)
            } else {
                const parent = findActive(state.formular[0], payload.parentId)
                const currentIndex = payload.indexInParent
                parent.items.splice(currentIndex, 1, payload.value)
            }
        },
        deleteNode(state, payload) {
            if (!payload.parentId && !payload.indexInParent) {
                // Delete root Node
                state.formular.splice(0, 1)
            } else {
                const parent = findActive(state.formular[0], payload.parentId)
                const currentIndex = payload.indexInParent
                parent.items.splice(currentIndex, 1)
            }
        }
    },
    actions: {},
    getters: {
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
