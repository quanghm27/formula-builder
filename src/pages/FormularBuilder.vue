<template>
  <div class="w-full h-screen bg-blue-200 py-4">
    <div class="w-1/2 mx-auto h-64">
      <div class="mb-2 text-center text-3xl text-teal-700">
        Formula Builder
      </div>
      <div class="flex justify-between items-center py-2">
        <div
          class="flex gap-2 mr-auto"
        >
          <button
            class="px-4 py-1 text-white rounded uppercase"
            :disabled="!existFormula"
            :class="!existFormula ? ['bg-blue-300 cursor-not-allowed'] : ['bg-blue-600 cursor-pointer']"
            @click="getResult"
          >
            View result
          </button>
          <p class="py-1 text-gray-700 font-bold">
            {{ result }}
          </p>
        </div>
        <div>
          <div class="flex gap-2">
            <button
              class="p-2 text-gray-300 rounded"
              :disabled="!existFormula"
              :class="!existFormula ? ['bg-blue-300 cursor-not-allowed'] : ['bg-blue-600 cursor-pointer']"
              @click="showJsonData = !showJsonData"
            >
              Show Json data
            </button>
            <button
              class="p-2 text-gray-300 rounded"
              :disabled="!canUndo"
              :class="!canUndo ? ['bg-blue-300 cursor-not-allowed'] : ['bg-blue-600 cursor-pointer']"
              @click="undo"
            >
              UNDO
            </button>
            <button
              class="p-2 text-gray-300 rounded"
              :disabled="!canRedo"
              :class="!canRedo ? ['bg-blue-300 cursor-not-allowed'] : ['bg-blue-600 cursor-pointer']"
              @click="redo"
            >
              REDO
            </button>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-200 py-4 px-2 shadow-lg border overflow-x-auto"
        style="max-height: 600px"
      >
        <div
          v-if="!existFormula"
          class="cursor-pointer bg-blue-500 text-white py-1 px-2 rounded w-40 mx-auto"
          @click="showPanel"
        >
          Add Something...
        </div>
        <div
          v-if="existFormula"
          class="text-teal-700 font-semibold text-xl mb-2"
        >
          Nested capsule 💊
        </div>
        <nested-capsule-formula
          :formula="formula"
        />
        <div
          v-if="existFormula"
          class="text-teal-700 mt-10 font-semibold text-xl mb-2"
        >
          Tree view 🌲
        </div>
        <tree-view
          :formula="formula"
        />
      </div>
      <div
        v-show="showJsonData"
        class="mt-5"
      >
        <div class="text-gray-700 font-semibold text-xl">
          Json Data
        </div>
        <textarea
          v-model="jsonData"
          rows="10"
          class="w-full"
        >
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { numberFormatter, calculateFormula } from "../helpers"
import NestedCapsuleFormula from "../components/formula/NestedCapsuleFormula.vue"
import TreeView from "@/components/formula/TreeView";
import * as _cloneDeep from 'lodash.clonedeep'

export default {
  name: "FormulaBuilder",
  components: { TreeView, NestedCapsuleFormula },
  filters: {
    number: numberFormatter,
  },
  data() {
    return {
      result: "",
      undoStack: [],
      redoStack: [],
      showJsonData: false
    }
  },
  computed: {
    formula() {
      return this.$store.state.formula
    },
    existFormula() {
      return this.$store.getters.existFormula
    },
    canUndo() {
      return this.undoStack.length
    },
    canRedo() {
      return this.redoStack.length
    },
    jsonData() {
      const replacer = (key, value) =>
          typeof value === 'undefined' ? null : value;

      return JSON.stringify(this.formula, replacer, 4)
    }
  },
  created() {
    this.$store.subscribe(mutation => {
      if(mutation.type !== 'resetFormula') {
        this.undoStack.push(mutation)
      }
    })

    // Clear redo when user do CRUD action
    this.$bus.$on("newMutation", () => {
      this.redoStack = []
    })
  },
  methods: {
    getResult() {
      try {
        const result = calculateFormula(this.formula)
        this.result = this.$options.filters.number(result)
      } catch (e) {
        console.error(e)
        this.result = "There is formula that missing arguments..."
      }
    },
    showPanel() {
      this.$bus.$emit("show-panel")
    },
    undo() {
      this.$store.commit('resetFormula')
      const mutation = this.undoStack.pop()
      this.redoStack.push(_cloneDeep(mutation))
      this.undoStack.forEach(mutation => {
        this.$store.commit(`${mutation.type}`, _cloneDeep(mutation.payload)) // Re-commit all mutation except the last
        this.undoStack.pop()
      })

    },
    redo() {
      const mutation = this.redoStack.pop()
      this.$store.commit(`${mutation.type}`, _cloneDeep(mutation.payload)) // Re-commit 1 mutation
    },
  },
}
</script>

<style scoped></style>
