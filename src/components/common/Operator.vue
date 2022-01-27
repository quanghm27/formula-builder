<template>
  <div class="mx-1">
    <div
      v-if="operator && operator.name"
      class="inline-flex align-baseline border-t border-b rounded-2xl cursor-pointer h-7 leading-7"
      :class="[bracket.border]"
      @mouseenter.self.stop.prevent="addHoverStyle"
      @mouseleave.self.stop.prevent="removeHoverStyle"
    >
      <div
        class="operator-name cursor-pointer hover:text-gray-800 pl-2 pr-1 rounded-l-2xl font-semibold uppercase relative"
        :class="bracket.open"
        @click="editNode(parent, indexInParent)"
      >
        {{ operator.name }}
        <div
          class="operator-delete text-red-600 z-20 font-bold text-2xl inline absolute"
          @click.self.stop.prevent="deleteNode(parent, indexInParent)"
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
            class="number inline h-6 font-semibold text-gray-700 px-1 mx-1 rounded bg-orange-400 hover:bg-orange-300 relative"
            @click="editNode(operator, index)"
          >
            {{ item }}
            <div
              class="number-delete text-red-600 z-20 font-bold text-2xl inline absolute"
              @click.self.stop.prevent="deleteNode(operator, index)"
            >
              &times;
            </div>
          </div>
          <Operator
            v-else
            :key="index"
            :operator="item"
            :parent="operator"
            :index-in-parent="index"
          />
        </template>
      </div>
      <div
        class="w-4 text-center rounded-r-2xl cursor-pointer text-gray-600 hover:text-gray-800 font-bold"
        :class="bracket.close"
        @click="clickOperator(operator)"
      >
        &plus;
      </div>
    </div>
  </div>
</template>

<script>

import { COLOR_BANK } from "../../constant"

export default {
  name: "Operator",
  // eslint-disable-next-line
  props: { operator: Object, indexInParent: Number, parent: Object },
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
    },
    editNode(parent, index) {
      if (!parent) {
        // Root node no have parent
        this.$store.commit('setActiveId', this.operator.id)
        this.$bus.$emit('show-panel', {
          edit: true,
          parentId: null,
          indexInParent: null,
          value: this.operator
        })
        
        return
      }

      const { id } = parent
      this.$store.commit('setActiveId', id)
      this.$bus.$emit('show-panel', {
        edit: true,
        parentId: id,
        indexInParent: index,
        value: parent.items[index]
      })
    },
    deleteNode(parent, index) {
      this.$store.commit('deleteNode', {
        parentId: parent?.id,
        indexInParent: index,
      })
    },
    addHoverStyle(e) {
      e.stopPropagation()
      e.target.classList.add('hover:shadow-lg')
      e.target.querySelector('.operator-items').style.background = 'transparent'
      e.target.classList.add(this.bracket.hover)
    },
    removeHoverStyle(e) {
      e.stopPropagation()
      e.target.classList.remove('hover:shadow-lg')
      e.target.querySelector('.operator-items').style = ''
      e.target.classList.remove(this.bracket.remove)
    }
  },
}
</script>

<style scoped>
.operator-delete, .number-delete {
  display: none;
  top: -18px;
  left: 20%;
}

.operator-name:hover .operator-delete {
  display: block;
}

.number:hover .number-delete {
  display: block;
}
</style>
