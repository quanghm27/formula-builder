<template>
  <div class="w-1/2 mx-auto">
    <div class="mb-2 text-center text-3xl text-teal-700">
      Formula Builder
    </div>
    <div class="bg-gray-200 py-4 px-2 shadow-lg border overflow-x-auto">
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
      v-if="existFormula"
      class="flex-col mt-8"
    >
      <div class="flex gap-2">
        <span
          v-if="existFormula"
          class="px-4 py-1 text-white bg-blue-600 rounded cursor-pointer uppercase"
          @click="getResult"
        >
          View result
        </span>
        <p class="py-1 text-gray-700 font-bold">
          {{ result }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { numberFormatter, calculateFormula } from "../helpers"
import NestedCapsuleFormula from "../components/formula/NestedCapsuleFormula.vue"
import TreeView from "@/components/formula/TreeView";

export default {
  name: "FormulaBuilder",
  components: { TreeView, NestedCapsuleFormula },
  filters: {
    number: numberFormatter,
  },
  data() {
    return {
      result: "",
    }
  },
  computed: {
    formula() {
      return this.$store.state.formula
    },
    existFormula() {
      return this.$store.getters.existFormula
    },
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
  },
}
</script>

<style scoped></style>
