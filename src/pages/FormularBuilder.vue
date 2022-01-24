<template>
  <div>
    <div class="mb-2 text-center text-3xl text-teal-700">
      Formular Builder
    </div>
    <div class="w-1/2 mx-auto bg-blue-100 py-4 shadow-lg border overflow-x-scroll">
      <Operator :operator="formular[0]" />
      <span
        v-if="formular && Object.keys(formular).length === 0"
        class="cursor-pointer bg-blue-500 text-white py-1 px-2 rounded"
        @click="showPanel"
      >
        Add Something...
      </span>
    </div>
    <div
      v-if="formular && Object.keys(formular).length > 0"
      class="flex mx-auto mt-4 w-1/2 mx-auto bg-blue-100 p-2 shadow-lg border bg-"
    >
      <span
        class="px-4 py-1 text-white bg-blue-600 rounded mr-2 cursor-pointer uppercase"
        @click="getResult"
      >
        View result
      </span>
      <p class="py-1">
        {{ result | number }}
      </p>
    </div>
  </div>
</template>

<script>
import Operator from '@/components/common/Operator'
import { OPERATOR, numberFormatter } from "../constant"

export default {
  name: "Error",
  components: { Operator },
  filters: {
    number: numberFormatter
  },
  data() {
    return {
      result: ''
    }
  },
  computed: {
    formular() {
      return this.$store.state.formular
    }
  },
  methods: {
    getResult() {
      this.result = recursiveCalculate(this.formular[0])
    },
    showPanel() {
      this.$bus.$emit('show-panel')
    }
  }
}
function recursiveCalculate(obj) {
  let currentNums = []
  
  obj.items.forEach(item => {
    if (typeof item === 'object') {
      currentNums.push(recursiveCalculate(item))
    } else {
      currentNums.push(+item)
    }
  })
  if (currentNums.length === obj.items.length) {
    console.log(obj.name, currentNums)
    console.log('total: ', OPERATOR[obj.name](currentNums))
    
    return OPERATOR[obj.name](currentNums)
  }
}
</script>

<style scoped>

</style>
