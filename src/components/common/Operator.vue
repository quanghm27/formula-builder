<template>
  <div class="mx-1">
    <div
      v-if="operator && operator.name"
      class="inline-flex align-baseline border-t border-b rounded-2xl"
      :class="bracket.border"
    >
      <div
        class=" cursor-pointer hover:text-teal-300 bg-bl pl-2 rounded-l-2xl font-semibold uppercase"
        :class="bracket.open"
        @click="clickOperator(operator)"
      >
        {{ operator.name }}
      </div>
      <div
        v-for="(item, index) in operator.items"
        :key="index"
        class=" px-1"
      >
        <span
          v-if="typeof item !== 'object'"
          class="font-semibold text-gray-700"
        >{{ item }}</span>
        <Operator
          v-else
          :operator="item"
        />
      </div>
      <div
        class=" w-2 rounded-r-2xl cursor-pointer"
        :class="bracket.close"
        @click="clickOperator(operator)"
      >
      </div>
    </div>
  </div>
</template>

<script>

import { COLOR_BANK } from "../../constant"

export default {
  name: "Operator",
  // eslint-disable-next-line
  props: { operator: Object },
  computed: {
    bracket() {
      const randomIndex = Math.floor(Math.random() * COLOR_BANK.length)

      return COLOR_BANK[randomIndex]
    }
  },
  methods: {
    clickOperator(item) {
      const { id } = item
      this.$store.commit('setActiveId', id)
      this.$bus.$emit('show-panel')
    }
  }
}
</script>

<style scoped>

</style>
