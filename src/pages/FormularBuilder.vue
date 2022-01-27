<template>
  <div class="w-1/2 mx-auto">
    <div class="mb-2 text-center text-3xl text-teal-700">
      Formular Builder
    </div>
    <div class=" bg-gray-200 py-4 px-2 shadow-lg border overflow-x-auto">
      <Operator
        ref="rootNode"
        :operator="formular[0]"
      />
      <span
        v-if="formular && Object.keys(formular).length === 0"
        class="cursor-pointer bg-blue-500 text-white py-1 px-2 rounded"
        @click="showPanel"
      >
        Add Something...
      </span>
      <div
        v-if="existFormular"
        class="flex-col mt-8"
      >
        <!--        <div class="mb-8">-->
        <!--          <Hint-->
        <!--            :sample-node="formular[0]"-->
        <!--            :bracket="rootNodeBracket"-->
        <!--          />-->
        <!--        </div>-->
        <div class="flex gap-2">
          <span
            v-if="existFormular"
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
  </div>
</template>

<script>
import Operator from '@/components/common/Operator'
import { OPERATOR, numberFormatter } from "../constant"

export default {
  name: "FormularBuilder",
  components: { Operator },
  filters: {
    number: numberFormatter
  },
  rootNodeBracket: '',
  data() {
    return {
      result: ''
    }
  },
  computed: {
    formular() {
      return this.$store.state.formular
    },
    existFormular() {
      return this.$store.getters.existOperator
    },
  },
  mounted() {
    this.rootNodeBracket = this.$refs.rootNode.bracket
  },
  methods: {
    getResult() {
      try {
        const result = recursiveCalculate(this.formular[0])
        this.result = this.$options.filters.number(result)
      } catch(e) {
        console.error(e)
        this.result = 'There are operation that missing arguments...'
      }
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
