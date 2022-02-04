<template>
  <formula-render-less>
    <template slot-scope="{ addChild, editNode, deleteNode }">
      <div
        v-if="formula && formula.value"
        :ref="`ref-formula-${formula.id}`"
        class="
          capsule-enter
          inline-flex
          align-baseline
          border-t border-b
          rounded-2xl
          cursor-pointer
          h-7
          leading-7
          ml-1
        "
        :class="[bracket.border]"
        @mouseenter.self.stop.prevent="addHoverStyle"
        @mouseleave.self.stop.prevent="removeHoverStyle"
      >
        <div
          class="
            operator-name
            cursor-pointer
            hover:text-gray-800
            pl-2
            pr-1
            rounded-l-2xl
            font-semibold
            uppercase
            relative
          "
          :class="bracket.open"
          @click="editNode(formula)"
        >
          {{ formula.value }}
          <div
            class="
              operator-delete
              text-red-600
              z-20
              font-bold
              text-2xl
              inline
              absolute
            "
            @click.self.stop.prevent="
              handleDeleteFormula(formula)
              deleteNode(formula)"
          >
            &times;
          </div>
        </div>
        <div class="operator-items bg-white flex items-center px-1">
          <template v-for="item in formula.items">
            <div
              v-if="item.type === 'number'"
              :ref="`ref-number-${item.id}`"
              :key="item.id"
              class="
                number
                capsule-enter
                inline
                h-6
                font-semibold
                text-gray-700
                px-1
                mx-1
                rounded
                bg-orange-400
                hover:bg-orange-300
                relative
              "
              @click="editNode(item)"
            >
              {{ item.value }}
              <div
                class="
                  number-delete
                  text-red-600
                  z-20
                  font-bold
                  text-2xl
                  inline
                  absolute
                "
                @click.self.stop.prevent="
                  handleDeleteNumber(item)
                  deleteNode(item)"
              >
                &times;
              </div>
            </div>
            <nested-capsule-formula
              v-else
              :key="item.id"
              :formula="item"
            />
          </template>
        </div>
        <div
          class="
            w-4
            text-center
            rounded-r-2xl
            cursor-pointer
            text-gray-600
            hover:text-gray-800
            font-bold
          "
          :class="bracket.close"
          @click="addChild(formula)"
        >
          &plus;
        </div>
      </div>
    </template>
  </formula-render-less>
</template>
<script>
import FormulaRenderLess from "../common/FormulaRenderLess"
import { COLOR_BANK } from "@/constant"

export default {
  name: "NestedCapsuleFormula",
  components: { FormulaRenderLess },
  props: {
    formula: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    bracket() {
      const randomIndex = Math.floor(Math.random() * COLOR_BANK.length)

      return COLOR_BANK[randomIndex]
    },
  },
  methods: {
    addHoverStyle(e) {
      e.stopPropagation()
      e.target.classList.add("hover:shadow-lg")
      e.target.querySelector(".operator-items").style.background =
        "transparent"
      e.target.classList.add(this.bracket.hover)
    },
    removeHoverStyle(e) {
      e.stopPropagation()
      e.target.classList.remove("hover:shadow-lg")
      e.target.querySelector(".operator-items").style = ""
      e.target.classList.remove(this.bracket.remove)
    },
    handleDeleteFormula(formula) {
      const ref =`ref-formula-${formula.id}`
      this.$refs[ref].classList.add('capsule-leave')
    },
    handleDeleteNumber(item) {
      const ref = `ref-number-${item.id}`
      this.$refs[ref][0].classList.add('capsule-leave')
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
  display: block
}

.number:hover .number-delete {
  display: block
}

.capsule-enter {
  animation: add-item-animation .5s;
}
.capsule-leave {
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
