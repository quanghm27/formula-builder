<template>
  <div>
    <slot v-bind="{ addChild, editNode, deleteNode }"></slot>
  </div>
</template>
<script>
export default {
  name: "FormulaRenderLess",
  data() {
    return {

    }
  },
  methods: {
    addChild(formula) {
      this.$store.commit("setActiveNode", formula)
      this.$bus.$emit("show-panel")
    },
    editNode(formula) {
      this.$store.commit("setActiveNode", formula)
      this.$bus.$emit("show-panel", {
        edit: true,
      })
    },
    deleteNode(formula) {
      setTimeout(() => {
        this.$store.commit("deleteNode", formula)
      }, 500)
    },
  },
}
</script>
