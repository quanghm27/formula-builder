<template>
  <div>
    <slot v-bind="{ addChild, editNode, deleteNode }"></slot>
  </div>
</template>
<script>
export default {
  name: "FormulaRenderLess",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    formula: {
      type: Object,
    },
  },
  methods: {
    addChild(item) {
      const { id } = item;
      this.$store.commit("setActiveId", id);
      this.$bus.$emit("show-panel");
    },
    editNode(parent, index) {
      if (!parent) {
        // Root node no have parent
        this.$store.commit("setActiveId", this.operator.id);
        this.$bus.$emit("show-panel", {
          edit: true,
          parentId: null,
          indexInParent: null,
          value: this.operator,
        });

        return;
      }

      const { id } = parent;
      this.$store.commit("setActiveId", id);
      this.$bus.$emit("show-panel", {
        edit: true,
        parentId: id,
        indexInParent: index,
        value: parent.items[index],
      });
    },
    deleteNode(parent, index) {
      this.$store.commit("deleteNode", {
        parentId: parent?.id,
        indexInParent: index,
      });
    },
    showEdit(currentNode) {
      console.log(currentNode);
    },
    addChildNode(parentNode) {
      const parentId = parentNode.id;
      console.log(parentId);
      this.$bus.$emit("show-panel-1", {
        edit: false,
        parentNode,
      });
    },
  },
};
</script>
