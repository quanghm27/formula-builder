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
      this.$bus.$emit("show-panel", {
        activeNode: formula
      })
    },
    editNode(formula) {
      this.$bus.$emit("show-panel", {
        edit: true,
        activeNode: formula
      })
    },
    deleteNode(formula) {
      this.$bus.$emit("newMutation")
      setTimeout(() => {
        this.$store.commit("deleteNode", formula)
      }, 500)
    },
  },
}
</script>
