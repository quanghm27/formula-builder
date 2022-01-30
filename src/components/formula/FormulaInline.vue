<template>
  <formula-render-less :formula="formula">
    <div slot-scope="{ addChild, editNode, deleteNode }">
      <div
        v-if="formula && formula.name"
        class="
          inline-flex
          align-baseline
          border-t border-b
          rounded-2xl
          cursor-pointer
          h-7
          leading-7
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
          @click="editNode(parent, indexInParent)"
        >
          {{ formula.name }}
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
            @click.self.stop.prevent="deleteNode(parent, indexInParent)"
          >
            &times;
          </div>
        </div>
        <div class="operator-items bg-white flex items-center px-1">
          <template v-for="(item, index) in formula.items">
            <div
              v-if="typeof item !== 'object'"
              :key="index"
              class="
                number
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
              @click="editNode(formula, index)"
            >
              {{ item }}
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
                @click.self.stop.prevent="deleteNode(formula, index)"
              >
                &times;
              </div>
            </div>
            <formula-inline
              v-else
              :key="index + 1"
              :formula="item"
              :parent="formula"
              :index-in-parent="index"
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
    </div>
  </formula-render-less>
</template>
<script>
import FormulaRenderLess from "../common/FormulaRenderLess";
import { COLOR_BANK } from "../../constant";
export default {
  name: "FormulaInline",
  components: { FormulaRenderLess },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    formula: {
      type: Object,
    },
    // eslint-disable-next-line vue/require-default-prop
    parent: {
      type: Object,
    },
    // eslint-disable-next-line vue/require-default-prop
    indexInParent: {
      type: Number,
    },
  },
  computed: {
    bracket() {
      const randomIndex = Math.floor(Math.random() * COLOR_BANK.length);

      return COLOR_BANK[randomIndex];
    },
  },
  methods: {
    addHoverStyle(e) {
      e.stopPropagation();
      e.target.classList.add("hover:shadow-lg");
      e.target.querySelector(".operator-items").style.background =
        "transparent";
      e.target.classList.add(this.bracket.hover);
    },
    removeHoverStyle(e) {
      e.stopPropagation();
      e.target.classList.remove("hover:shadow-lg");
      e.target.querySelector(".operator-items").style = "";
      e.target.classList.remove(this.bracket.remove);
    },
  },
};
</script>
<style scoped>
.operator-delete,
.number-delete {
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
