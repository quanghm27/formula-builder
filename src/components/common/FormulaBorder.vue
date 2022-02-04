<template>
  <div
    :style="{ 'height': height + 'px'}"
    @click="$emit('clicked-wrapper')"
  >
  </div>
</template>

<script>
export default {
  name: "FormulaBorder",
  inheritAttrs: false,
  props: {
    height: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.border {
  width: 2px;
}
</style>
