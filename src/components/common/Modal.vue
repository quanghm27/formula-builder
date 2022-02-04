<template>
  <div
    v-if="show"
    class="
      fixed
      inset-0
      bg-gray-600 bg-opacity-50
      overflow-y-auto
      h-full
      w-full
    "
  >
    <div
      class="
        flex flex-col
        m-auto
        h-60
        p-4
        center
        rounded-lg
        bg-white
        shadow-lg
      "
    >
      <div
        class="
        bg-blue-900
        w-full
        h-16
        text-yellow-300
        font-semibold
        uppercase
        text-center
        py-5
        mb-5
        rounded
        shadow-lg
      "
      >
        {{ selected.value }}
      </div>
      <div
        v-show="editMode"
        class="mb-4 rounded"
      >
        <div class="font-semibold text-gray-800">
          Edit
        </div>
        <div class="py-2 overflow-auto">
          <span class="bg-orange-400 px-2 rounded inline-block">
            {{ activeNodeValue }}
          </span>
        </div>
      </div>
      <div class="flex flex-wrap gap-1 mb-2">
        <div
          v-for="opt in optFormulas"
          :key="opt.value"
          class="cursor-pointer bg-gray-400 px-2 py-1 rounded"
          @click="handleSelect(opt)"
        >
          <span class="font-semibold text-pink-700">{{ opt.value.charAt(0).toUpperCase() }}</span>
          <span>{{ opt.value.substr(1) }}</span>
        </div>
      </div>
      <div class="flex mb-5">
        <div class="mr-2">
          <div class="flex flex-wrap gap-1 mb-1">
            <div
              v-for="opt in optNumbers"
              :key="opt.value"
              :disabled="disabledNumber"
              class="bg-gray-400 px-4 py-1 rounded font-semibold"
              :class="cursorDisplay"
              @click="handleSelect(opt)"
            >
              <span>
                {{ opt.value }}
              </span>
            </div>
          </div>
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
import { OPTION_FORMULAS, OPTION_NUMBERS, getShortcutByKey } from "@/constant"

export default {
  name: "Modal",
  data() {
    return {
      showKBKey: true,
      optFormulas: OPTION_FORMULAS,
      optNumbers: OPTION_NUMBERS,
      selected: {
        type: "",
        value: "",
      },
      show: false,
      editMode: false,
    }
  },
  computed: {
    disabledNumber() {
      if (this.editMode) {
        return !this.activeNode.parentId
      }

      return !this.$store.getters.existFormula
    },
    cursorDisplay() {
      return this.disabledNumber
        ? ['text-gray-500', 'pointer-events-none']
        : ['cursor-pointer', 'hover:bg-gray-300', 'text-pink-700']
    },
    activeNode() {
      return this.$store.state.activeNode
    },
    activeNodeValue() {
      if (!this.editMode) return ""
      const node = this.activeNode

      if (this.activeNode.type === 'formula') {
        // Display only 1 level inside node
        const itemsInNode = node.items.map(x => {
          return x.type === 'formula'
           ? `${x.value}(...)`
           : x.value
        })

        return `${node.value}(${itemsInNode.join(", ")})`
      }

      return node.value
    },
  },
  mounted() {
    this.$bus.$on("show-panel", this.open)
    this.$bus.$on("close-panel", this.close)
    this.$bus.$on("show-panel-1", this.open)
    this.$once("hook:beforeDestroy", () => {
      this.$bus.$off("show-panel", this.open)
      this.$bus.$off("close-panel", this.close)
    })
  },
  methods: {
    open(e) {
      this.show = true
      if (e?.edit) {
        // TODO
        this.editMode = true
      }
      document.addEventListener("keydown", this.keyboardHandler)
    },
    close() {
      this.selected.type = ""
      this.selected.value = ""
      this.editMode = false
      this.show = false
      document.removeEventListener("keydown", this.keyboardHandler)
    },
    undo() {
      if (!this.selected.type) return
      if (this.selected.type === "number") {
        const value = this.selected.value
        this.selected.value = value.substr(0, value.length - 1)
      }
      if (this.selected.type === "operator") {
        this.selected.value = ""
      }
    },
    keyboardHandler(e) {
      const shortcut = getShortcutByKey(e.key)
      if (!shortcut) return // Not support this key

      if (shortcut.type === 'number' && !this.disabledNumber) {
        const opt = {
          type: shortcut.type,
          value: shortcut.value
        }
        this.handleSelect(opt)
      }

      if (shortcut.type === 'formula') {
        const opt = {
          type: shortcut.type,
          value: shortcut.value
        }
        this.handleSelect(opt)
      }

      if (shortcut.type === 'action') {
        switch (shortcut.key) {
          case 'Enter':
            this.confirm()
            break
          case 'Escape':
            this.close()
            break
          case 'Backspace':
            this.undo()
            break
        }
      }
    },
    pickOperator(operator) {
      this.selected.type = "operator"
      this.selected.value = operator
    },
    pickNumber(number) {
      if (this.selected && this.selected.type === "number") {
        this.selected.value += "" + number
      } else {
        this.selected = {
          type: "number",
          value: `${number}`,
        }
      }
    },
    confirm() {
      if (!this.selected.type && !this.selected.value) {
        this.close()

        return
      }

      // Setup payload
      let id = new Date().getTime()
      let parentId = this.activeNode?.id
      if (this.editMode) {
        id = this.activeNode.id
        parentId = this.activeNode.parentId
      }
      let payload = { ...this.selected, id, parentId }
      if (this.selected.type === 'formula') {
        payload.items = []
      }

      // Add or Edit
      this.editMode
        ? this.$store.commit("editNode", payload)
        : this.$store.commit("addNode", payload)

      this.close()
    },
    handleSelect(opt) {
      // FIXME change the object here

      if (this.selected && this.selected.type === 'number') {
        this.selected.value += '' + opt.value

        return
      }
      this.selected.type = opt.type
      this.selected.value = opt.value
    },
  },
}
</script>

<style scoped>
</style>
