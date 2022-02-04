<template>
  <formula-render-less>
    <template slot-scope="{ editNode, deleteNode, addChild }">
      <div
        v-if="formula && formula.value"
        :ref="`ref-formula-${formula.id}`"
        class="node-enter relative"
      >
        <div class="formula-name inline flex mb-1">
          <span
            class="uppercase rounded-full font-semibold px-2 mr-1 cursor-pointer bg-orange-700 text-gray-200 hover:bg-orange-600"
            @click="showChildren = !showChildren"
          >
            {{ formula.value.charAt(0) }}
          </span>
          <div
            class="font-semibold text-gray-700 hover:text-gray-500 cursor-pointer"
            @click="editNode(formula)"
          >
            {{ formula.value }}
          </div>
          <div class="formula-action">
            <span
              class="mx-1 px-1 text-xs font-semibold hover:text-gray-500 text-gray-700 rounded bg-gray-400 cursor-pointer"
              @click="deleteNode(formula)"
            >
              remove
            </span>
            <span
              class="mx-1 px-1 text-xs font-semibold hover:text-gray-500 text-gray-700 rounded bg-gray-400 cursor-pointer"
              @click="addChild(formula)"
            >
              add
            </span>
          </div>
        </div>
        <div
          v-show="showChildren"
          :ref="`children-${formula.id}`"
          class="flex flex-col gap-1 ml-3 rounded border-l-4 border-orange-700"
        >
          <div
            v-for="item in formula.items"
            :key="item.id"
            class="inline"
          >
            <div
              v-if="item.type === 'number'"
              class="number node-enter flex max-w-sm items-center"
            >
              <div
                class="w-4 h-1 bg-orange-700 inline mr-1 rounded-r"
              >
              </div>
              <div
                class="rounded-xl bg-green-500 px-1 text-gray-700 font-medium cursor-pointer hover:text-gray-600 hover:bg-green-400"
                @click="editNode(item)"
              >
                {{ item.value }}
              </div>
              <span
                class="number-action font-semibold hover:text-gray-500 text-gray-700 mx-1 px-1 text-xs text-gray-700 rounded bg-gray-400 cursor-pointer"
                @click="deleteNode(item)"
              >
                remove
              </span>
            </div>
            <div
              v-else
              class="flex max-w-sm items-baseline"
            >
              <div
                class="w-4 h-1 bg-orange-700 inline mr-1 rounded-r"
              >
              </div>
              <tree-view
                :formula="item"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </formula-render-less>
</template>
<script>
import FormulaRenderLess from "@/components/common/FormulaRenderLess"

export default {
  name: "TreeView",
  components: { FormulaRenderLess },
  props: {
    formula: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      showChildren: true
    }
  },
}
</script>
<style scoped>
.formula-wrap {
  top: 28px;
  left: 0.5em;
}
.formula-action, .number-action {
  display: none;
}
.formula-name:hover .formula-action {
  display: block;
}
.number:hover .number-action {
  display: block;
}

.node-enter {
  animation: add-item-animation .5s;
}
.node-leave {
  animation: removed-item-animation 3s;
}

@keyframes add-item-animation {
  0% {
    opacity: 0.3;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes removed-item-animation {
  0% {
    opacity: 1;
    transform: rotateZ(0);
  }

  100% {
    opacity: 0.3;
    transform: translateY(600px) rotateZ(90deg);
  }
}
</style>
