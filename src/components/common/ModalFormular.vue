<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  >
    <div class="flex flex-col gap-1 md:w-1/3 w-1/4 m-auto h-48 p-4 center rounded-lg bg-white shadow-lg">
      <div class="flex gap-1 mb-3">
        <div
          class="cursor-pointer bg-gray-200 px-2 py-1 hover:bg-blue-200 rounded"
          @click="pickOperator('multiply')"
        >
          MULTIPLY
        </div>
        <div
          class="cursor-pointer bg-gray-200 px-2 py-1 hover:bg-blue-200 rounded"
          @click="pickOperator('add')"
        >
          ADD
        </div>
        <div
          class="cursor-pointer bg-gray-200 px-2 py-1 hover:bg-blue-200 rounded"
          @click="pickOperator('sub')"
        >
          SUBSEQUENCE
        </div>
        <div
          class="cursor-pointer bg-gray-200 px-2 py-1 hover:bg-blue-200 rounded"
          @click="pickOperator('division')"
        >
          DIVIOSN
        </div>
      </div>
      <div class="flex gap-1">
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(0)"
        >
          0
        </button>
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(1)"
        >
          1
        </button>
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(2)"
        >
          2
        </button>
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(3)"
        >
          3
        </button>
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(4)"
        >
          4
        </button>
      </div>
      <div class="flex gap-1 mb-2">
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(5)"
        >
          5
        </button>
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(6)"
        >
          6
        </button>
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(7)"
        >
          7
        </button>
        <button
          class="cursor-pointer bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :disabled="disabledNumber"
          @click="pickNumber(8)"
        >
          8
        </button>
        <button
          class="bg-gray-200 px-4 py-1 hover:bg-blue-200 rounded"
          :class="disabledNumber ? 'cusor-not-allowed' : 'cursor-pointer'"
          :disabled="disabledNumber"
          @click="pickNumber(9)"
        >
          9
        </button>
      </div>
      <div
        class="absolute z-20 bg-blue-900 w-2/5 h-16 text-yellow-300 font-semibold uppercase text-center py-5 rounded shadow-lg"
        style="right: 7%; top: 35%"
      >
        {{ selected.value }}
      </div>
      <div class="justify-center flex gap-1">
        <button
          class="p-2 bg-pink-600 text-white rounded"
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
      show: false
    }
  },
  computed: {
    disabledNumber() {
      return !this.$store.getters.existOperator
    },
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
    open() {
      this.show = true
    },
    close() {
      this.selected.type = ''
      this.selected.value = ''
      this.show = false
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
      const payload = this.selected.type === 'operator'
        ? {
            name: this.selected.value,
            items: [],
            id: new Date().getTime() // ID milliseconds
          }
        : this.selected.value
      this.$store.commit('addItem', payload)
      this.close()
    }
  }
}
</script>

<style scoped>

</style>
