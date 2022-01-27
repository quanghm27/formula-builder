<template>
  <div
    v-if="operator && operator.name"
  >
    <p class="font-semibold text-gray-700 mb-2">
      Hint:
    </p>
    <div
      class="inline-flex align-baseline border-t border-b rounded-2xl cursor-default h-7 leading-7"
      :class="[bracket.border]"
    >
      <div
        class="operator-name cursor-default pl-2 pr-1 rounded-l-2xl font-semibold uppercase relative"
        :class="bracket.open"
      >
        {{ operator.name }}
        <div
          class="operator-delete text-red-600 font-bold text-2xl inline absolute"
        >
          &times;
        </div>
      </div>
      <div
        class="operator-items bg-white flex items-center px-1"
      >
        <template
          v-for="(item, index) in operator.items"
        >
          <div
            v-if="typeof item !== 'object'"
            :key="index"
            class="number inline h-6 font-semibold text-gray-700 px-1 mx-1 rounded bg-orange-400 relative"
          >
            {{ item }}
            <div
              class="number-delete text-red-600 font-bold text-2xl inline absolute"
            >
              &times;
            </div>
          </div>
        </template>
      </div>
      <div
        class="w-4 text-center rounded-r-2xl cursor-default text-gray-600 font-bold"
        :class="bracket.close"
      >
        &plus;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hint",
  props: ['sampleNode', 'bracket'],
  computed: {
    operator() {
      const operator = {...this.sampleNode}
      const childrenNode = operator.items.filter(x => typeof x !== 'object')
      if (childrenNode.length < 2) return null
      operator.items = childrenNode.splice(0,2)
      console.log(childrenNode.splice(0,2))
      
      return operator
    }
  }
}
</script>

<style scoped>
.operator-delete, .number-delete {
  top: -18px;
  left: 20%;
}
</style>
