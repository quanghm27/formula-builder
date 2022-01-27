<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  >
    <div class="flex flex-col gap-1 md:w-1/3 w-1/4 m-auto h-60 p-4 center rounded-lg bg-white shadow-lg">
      <div
        v-show="editMode"
        class="mb-4 rounded"
      >
        <div class="font-semibold text-gray-800">
          Edit
        </div>
        <div class="py-2 overflow-auto">
          <span class="bg-orange-400 px-2 rounded inline-block">
            {{ currentNodeValue }}
          </span>
        </div>
      </div>
      <div class="flex gap-1 mb-2">
        <div
          class="cursor-pointer bg-gray-400 px-2 py-1  rounded"
          @click="pickOperator('multiply')"
        >
          MULTIPLY
        </div>
        <div
          class="cursor-pointer bg-gray-400 px-2 py-1  rounded"
          @click="pickOperator('add')"
        >
          ADD
        </div>
        <div
          class="cursor-pointer bg-gray-400 px-2 py-1  rounded"
          @click="pickOperator('sub')"
        >
          SUBSEQUENCE
        </div>
        <div
          class="cursor-pointer bg-gray-400 px-2 py-1  rounded"
          @click="pickOperator('division')"
        >
          DIVISION
        </div>
      </div>
      <div class="flex justify-between mb-3">
        <div class="flex-col mr-2">
          <div class="flex gap-1 mb-1">
            <button
              class="bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(0)"
            >
              0
            </button>
            <button
              class="bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(1)"
            >
              1
            </button>
            <button
              class="bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(2)"
            >
              2
            </button>
            <button
              class="bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(3)"
            >
              3
            </button>
            <button
              class="bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(4)"
            >
              4
            </button>
          </div>
          <div class="flex gap-1">
            <button
              class=" bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(5)"
            >
              5
            </button>
            <button
              class=" bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(6)"
            >
              6
            </button>
            <button
              class=" bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(7)"
            >
              7
            </button>
            <button
              class=" bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(8)"
            >
              8
            </button>
            <button
              class="bg-gray-400 px-4 py-1  rounded"
              :class="cursorDisplay"
              :disabled="disabledNumber"
              @click="pickNumber(9)"
            >
              9
            </button>
          </div>
        </div>
        <div
          class="bg-blue-900 w-3/4 h-16 text-yellow-300 font-semibold uppercase text-center py-5 rounded shadow-lg"
        >
          {{ selected.value }}
        </div>
      </div>
      <div class="justify-start flex gap-1">
        <button
          class="p-2 bg-pink-600 text-white rounded mr-auto"
          @click.prevent="close"
        >
          CANCEL
        </button>
        <button
          class="p-2 bg-orange-400 text-white rounded"
          @click.prevent="undo"
        >
          UNDO
        </button>
        <button
          class="p-2 bg-blue-400 text-white rounded"
          @click.prevent="confirm"
        >
          CONFIRM
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalFormular",
  data() {
    return {
      selected: {
        type: '',
        value: '',
      },
      show: false,
      editMode: false,
      currentNode: null
    }
  },
  computed: {
    disabledNumber() {
      if (this.editMode) {
        return !this.currentNode.parentId
      }
      
      return !this.$store.getters.existOperator
    },
    cursorDisplay() {
      return this.disabledNumber ? ['cursor-not-allowed', 'bg-gray-200' ] : ['cursor-pointer', 'hover:bg-gray-300']
    },
    currentNodeValue() {
      if (!this.editMode) return ''
      const node = this.currentNode.value

      if (typeof node === 'object') {
        // Display only 1 level inside node
        const itemsInNode = node.items.map(x => {
          if (typeof x === 'object') {
            return `${x.name}(...)`
          }

          return x
        })

        return `${node.name}(${itemsInNode.join(', ')})`
      }

      return node
    }
  },
  mounted() {
    this.$bus.$on('show-panel', this.open)
    this.$bus.$on('close-panel', this.close)

    this.$once('hook:beforeDestroy', () => {
      this.$bus.$off('show-panel', this.open)
      this.$bus.$off('close-panel', this.close)
    })
  },
  methods: {
    open(e) {
      this.show = true
      if (e?.edit) {
        // TODO
        this.editMode = true
        const { value, parentId, indexInParent } = e
        this.currentNode = { value, parentId, indexInParent }
      }
      document.addEventListener("keydown", this.keyboardHandler)
    },
    close() {
      this.selected.type = ''
      this.selected.value = ''
      this.editMode = false
      this.show = false
      document.removeEventListener("keydown", this.keyboardHandler)
    },
    undo() {
      if (!this.selected.type) return
      if (this.selected.type === 'number') {
        const value = this.selected.value
        this.selected.value = value.substr(0, value.length - 1)
      }
      if (this.selected.type === 'operator') {
        this.selected.value = ''
      }
    },
    keyboardHandler(e) {
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      if (!this.disabledNumber && numbers.includes(e.key)) {
        this.pickNumber(e.key)
      }
      if (e.key === 'Enter') {
        this.confirm()
      }
      if (e.key === 'Escape') {
        this.close()
      }
      if (e.key === 'Backspace') {
        this.undo()
      }
    },
    pickOperator(operator) {
      this.selected.type = 'operator'
      this.selected.value = operator
    },
    pickNumber(number) {
      if (this.selected && this.selected.type === 'number') {
        this.selected.value += "" + number
      } else {
        this.selected = {
          type: 'number',
          value: `${number}`
        }
      }
    },
    confirm() {
      if (!this.selected.type && !this.selected.value) {
        this.close()
        
        return
      }
      let payload = this.selected.type === 'operator'
        ? {
            name: this.selected.value,
            items: [],
            id: new Date().getTime() // ID milliseconds
          }
        : this.selected.value
      
      // TODO: refactor to use object for Node
      if (this.editMode) {
        const nodeEdit = {}
        nodeEdit.value = typeof payload === 'object' ? {...payload} : payload
        nodeEdit.type = this.selected.type
        nodeEdit.parentId = this.currentNode.parentId
        nodeEdit.indexInParent = this.currentNode.indexInParent
        this.$store.commit('editNode', nodeEdit)
        this.close()
        
        return
      }

      // ADD or EDIT
      this.$store.commit('addNode', payload)
      this.close()
    }
  }
}
</script>

<style scoped>

</style>
